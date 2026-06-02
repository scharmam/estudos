/**
 * Persistência local: caderno de erros, repetição espaçada, streak, domínio por unidade.
 */
const MemoryStore = (() => {
  let trainingId = 'cgpi';

  const KEY_SETS = {
    cgpi: {
      NOTEBOOK: 'cgpi_error_notebook',
      STREAK: 'cgpi_review_streak',
      UNITS: 'cgpi_unit_stats',
      LAST_WRONG: 'cgpi_last_session_wrong',
      DAILY: 'cgpi_daily_challenge',
    },
    cloud: {
      NOTEBOOK: 'cloud_error_notebook',
      STREAK: 'cloud_review_streak',
      UNITS: 'cloud_unit_stats',
      LAST_WRONG: 'cloud_last_session_wrong',
      DAILY: 'cloud_daily_challenge',
    },
    cpl: {
      NOTEBOOK: 'cpl_error_notebook',
      STREAK: 'cpl_review_streak',
      UNITS: 'cpl_unit_stats',
      LAST_WRONG: 'cpl_last_session_wrong',
      DAILY: 'cpl_daily_challenge',
    },
    poo2: {
      NOTEBOOK: 'poo2_error_notebook',
      STREAK: 'poo2_review_streak',
      UNITS: 'poo2_unit_stats',
      LAST_WRONG: 'poo2_last_session_wrong',
      DAILY: 'poo2_daily_challenge',
    },
  };

  function keys() {
    return KEY_SETS[trainingId] || KEY_SETS.cgpi;
  }

  function setTraining(id) {
    trainingId = id && KEY_SETS[id] ? id : 'cgpi';
  }

  function getTraining() {
    return trainingId;
  }

  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  }

  function write(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function playerKey(player) {
    return (player || '').trim().toLowerCase();
  }

  function getNotebookEntry(all, player, questionId) {
    const pk = playerKey(player);
    return all[pk]?.[questionId] || null;
  }

  function recordMiss(player, questionId) {
    const all = read(keys().NOTEBOOK, {});
    const pk = playerKey(player);
    if (!pk) return;
    if (!all[pk]) all[pk] = {};
    const cur = all[pk][questionId] || { misses: 0, interval: 1, ease: 2.5 };
    cur.misses = (cur.misses || 0) + 1;
    cur.lastMiss = new Date().toISOString();
    cur.interval = Math.max(1, Math.floor((cur.interval || 1) * 0.6));
    cur.nextReview = Date.now();
    cur.ease = Math.max(1.3, (cur.ease || 2.5) - 0.2);
    all[pk][questionId] = cur;
    write(keys().NOTEBOOK, all);
  }

  function recordReviewSuccess(player, questionId) {
    const all = read(keys().NOTEBOOK, {});
    const pk = playerKey(player);
    if (!pk || !all[pk]?.[questionId]) return;
    const cur = all[pk][questionId];
    cur.interval = Math.min(30, Math.ceil((cur.interval || 1) * (cur.ease || 2.5)));
    cur.ease = Math.min(3, (cur.ease || 2.5) + 0.1);
    cur.nextReview = Date.now() + cur.interval * 86400000;
    cur.lastReview = new Date().toISOString();
    write(keys().NOTEBOOK, all);
  }

  function getPlayerNotebook(player) {
    const all = read(keys().NOTEBOOK, {});
    return all[playerKey(player)] || {};
  }

  function getErrorQuestionIds(player) {
    return Object.keys(getPlayerNotebook(player));
  }

  function getQuestionsByIds(ids) {
    const set = new Set(ids);
    return QUESTIONS.filter(q => set.has(q.id));
  }

  function getDueReviewIds(player) {
    const nb = getPlayerNotebook(player);
    const now = Date.now();
    return Object.entries(nb)
      .filter(([, e]) => !e.nextReview || e.nextReview <= now)
      .sort((a, b) => (b[1].misses || 0) - (a[1].misses || 0))
      .map(([id]) => id);
  }

  function injectSpacedRepetition(pool, player, maxInject = 3) {
    const due = getDueReviewIds(player).filter(id => pool.some(q => q.id === id));
    if (!due.length) return pool;
    const dueQs = due.slice(0, maxInject).map(id => pool.find(q => q.id === id)).filter(Boolean);
    const rest = pool.filter(q => !dueQs.some(d => d.id === q.id));
    return [...dueQs, ...rest];
  }

  function saveLastSessionWrong(player, wrongIds) {
    write(keys().LAST_WRONG, { player, wrongIds: [...new Set(wrongIds)], date: new Date().toISOString() });
  }

  function getLastSessionWrong(player) {
    const data = read(keys().LAST_WRONG, null);
    if (!data || playerKey(data.player) !== playerKey(player)) return [];
    return data.wrongIds || [];
  }

  function recordUnitAnswer(player, unit, correct) {
    if (!unit) return;
    const all = read(keys().UNITS, {});
    const pk = playerKey(player);
    if (!pk) return;
    if (!all[pk]) all[pk] = {};
    if (!all[pk][unit]) all[pk][unit] = { correct: 0, total: 0 };
    all[pk][unit].total++;
    if (correct) all[pk][unit].correct++;
    write(keys().UNITS, all);
  }

  function getUnitMastery(player) {
    const all = read(keys().UNITS, {});
    const stats = all[playerKey(player)] || {};
    return Object.entries(stats)
      .map(([unit, s]) => ({
        unit,
        correct: s.correct,
        total: s.total,
        pct: s.total ? Math.round((s.correct / s.total) * 100) : 0,
      }))
      .sort((a, b) => a.unit.localeCompare(b.unit, undefined, { numeric: true }));
  }

  function touchReviewStreak(player) {
    const all = read(keys().STREAK, {});
    const pk = playerKey(player);
    if (!pk) return { streak: 0, lastDate: null };
    const today = todayKey();
    const cur = all[pk] || { streak: 0, lastDate: null };
    if (cur.lastDate === today) {
      return cur;
    }
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    cur.streak = cur.lastDate === yKey ? (cur.streak || 0) + 1 : 1;
    cur.lastDate = today;
    all[pk] = cur;
    write(keys().STREAK, all);
    return cur;
  }

  function getReviewStreak(player) {
    const all = read(keys().STREAK, {});
    return all[playerKey(player)] || { streak: 0, lastDate: null };
  }

  function getDailyChallenge(player) {
    const all = read(keys().DAILY, {});
    const pk = playerKey(player);
    const today = todayKey();
    if (all[pk]?.date === today) {
      return getQuestionsByIds(all[pk].ids);
    }
    const nb = getPlayerNotebook(player);
    const ranked = Object.entries(nb)
      .sort((a, b) => (b[1].misses || 0) - (a[1].misses || 0))
      .map(([id]) => id);
    let ids = ranked.slice(0, 5);
    if (ids.length < 5) {
      const extra = shuffleArray(QUESTIONS.map(q => q.id)).filter(id => !ids.includes(id));
      ids = [...ids, ...extra.slice(0, 5 - ids.length)];
    }
    all[pk] = { date: today, ids };
    write(keys().DAILY, all);
    return getQuestionsByIds(ids);
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function exportErrorsText(player) {
    const ids = getErrorQuestionIds(player);
    const qs = getQuestionsByIds(ids);
    const letters = ['a', 'b', 'c', 'd', 'e'];
    let out = `CGPI Quest — Caderno de Erros\nJogador: ${player}\nData: ${new Date().toLocaleString('pt-BR')}\n\n`;
    qs.forEach((q, i) => {
      const idx = letters.indexOf(q.answer);
      out += `${i + 1}. [${q.id}] ${q.text}\n`;
      q.options.forEach((o, j) => {
        const mark = j === idx ? ' ✓' : '';
        out += `   ${letters[j].toUpperCase()}) ${o}${mark}\n`;
      });
      out += `   Dica: ${getQuestionHint(q)}\n\n`;
    });
    return out;
  }

  function exportAnkiCsv(player) {
    const ids = getErrorQuestionIds(player);
    const qs = getQuestionsByIds(ids);
    const letters = ['a', 'b', 'c', 'd', 'e'];
    let csv = 'front,back,tags\n';
    qs.forEach(q => {
      const front = `"${q.text.replace(/"/g, '""')}"`;
      const ans = q.options[letters.indexOf(q.answer)].replace(/"/g, '""');
      const back = `"${q.answer.toUpperCase()}) ${ans}"`;
      csv += `${front},${back},"cgpi ${q.exam} ${q.unit || ''}"\n`;
    });
    return csv;
  }

  function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return {
    setTraining,
    getTraining,
    recordMiss,
    recordReviewSuccess,
    getPlayerNotebook,
    getErrorQuestionIds,
    getQuestionsByIds,
    getDueReviewIds,
    injectSpacedRepetition,
    saveLastSessionWrong,
    getLastSessionWrong,
    recordUnitAnswer,
    getUnitMastery,
    touchReviewStreak,
    getReviewStreak,
    getDailyChallenge,
    exportErrorsText,
    exportAnkiCsv,
    downloadFile,
  };
})();
