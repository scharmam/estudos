/** Central de Estudo — UI e ações de memorização */
const StudyHub = (() => {
  const els = {
    screen: document.getElementById('screen-study'),
    playerInput: document.getElementById('study-player-name'),
    streak: document.getElementById('study-streak'),
    errorsCount: document.getElementById('study-errors-count'),
    unitMastery: document.getElementById('study-unit-mastery'),
    concepts: document.getElementById('study-concepts'),
    btnBack: document.getElementById('btn-study-back'),
    btnExportTxt: document.getElementById('btn-export-txt'),
    btnExportAnki: document.getElementById('btn-export-anki'),
  };

  function getPlayer() {
    return els.playerInput.value.trim();
  }

  function refresh() {
    const player = getPlayer();
    const ids = MemoryStore.getErrorQuestionIds(player);
    els.errorsCount.textContent = `${ids.length} questão(ões) salva(s)`;

    const streak = MemoryStore.getReviewStreak(player);
    if (player && streak.streak > 0) {
      els.streak.innerHTML = `🔥 Sequência de revisão: <strong>${streak.streak}</strong> dia(s)`;
      els.streak.hidden = false;
    } else {
      els.streak.hidden = true;
    }

    if (player) {
      els.unitMastery.hidden = false;
      els.unitMastery.innerHTML = '';
      const mastery = MemoryStore.getUnitMastery(player);
      if (mastery.length) {
        els.unitMastery.innerHTML = `
          <p class="unit-mastery__title">Domínio por unidade</p>
          ${mastery.map(u => `
            <div class="unit-mastery__row">
              <span class="unit-mastery__label">${u.unit}</span>
              <div class="unit-mastery__bar"><div class="unit-mastery__fill" style="width:${u.pct}%"></div></div>
              <span class="unit-mastery__pct">${u.pct}%</span>
            </div>`).join('')}`;
      } else {
        els.unitMastery.innerHTML = '<p class="study-empty">Jogue partidas para ver seu domínio por unidade.</p>';
      }
    } else {
      els.unitMastery.hidden = true;
    }
  }

  function renderConcepts() {
    els.concepts.hidden = false;
    els.concepts.innerHTML = CONCEPT_COMPARISONS.map(c => {
      const parts = c.title.split(' vs ');
      const colA = parts[0] || 'A';
      const colB = parts[1] || 'B';
      return `
      <details class="concept-card">
        <summary>${c.title}</summary>
        <table class="concept-table">
          <thead><tr><th>Aspecto</th><th>${colA}</th><th>${colB}</th></tr></thead>
          <tbody>
            ${c.rows.map(r => `<tr><td>${r.label}</td><td>${r.a}</td><td>${r.b}</td></tr>`).join('')}
          </tbody>
        </table>
      </details>`;
    }).join('');
    els.concepts.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function requirePlayer() {
    const player = getPlayer();
    if (!player) {
      alert('Digite seu nome de jogador na Central de Estudo.');
      els.playerInput.focus();
      return null;
    }
    return player;
  }

  function handleAction(action) {
    const player = requirePlayer();
    if (!player) return;

    if (action === 'errors') {
      const qs = MemoryStore.getQuestionsByIds(MemoryStore.getErrorQuestionIds(player));
      if (!qs.length) { alert('Caderno de erros vazio. Erre questões no quiz para preenchê-lo.'); return; }
      window.CGPI_startStudySession(player, 'review-errors', qs);
      return;
    }
    if (action === 'flashcard') {
      const ids = MemoryStore.getErrorQuestionIds(player);
      const qs = ids.length
        ? MemoryStore.getQuestionsByIds(ids)
        : shuffleCopy(QUESTIONS).slice(0, 20);
      window.CGPI_startStudySession(player, 'flashcard', qs);
      return;
    }
    if (action === 'daily') {
      const qs = MemoryStore.getDailyChallenge(player);
      window.CGPI_startStudySession(player, 'daily', qs);
      return;
    }
    if (action === 'concepts') {
      renderConcepts();
    }
  }

  function shuffleCopy(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  els.btnBack.addEventListener('click', () => {
    els.concepts.hidden = true;
    document.getElementById('screen-welcome').classList.add('screen--active');
    els.screen.classList.remove('screen--active');
  });

  document.querySelectorAll('.study-card').forEach(card => {
    card.addEventListener('click', () => handleAction(card.dataset.action));
  });

  els.btnExportTxt.addEventListener('click', () => {
    const player = requirePlayer();
    if (!player) return;
    const text = MemoryStore.exportErrorsText(player);
    if (!MemoryStore.getErrorQuestionIds(player).length) {
      alert('Nada para exportar — caderno de erros vazio.');
      return;
    }
    MemoryStore.downloadFile(`cgpi-erros-${player}.txt`, text, 'text/plain;charset=utf-8');
    MemoryStore.touchReviewStreak(player);
    refresh();
  });

  els.btnExportAnki.addEventListener('click', () => {
    const player = requirePlayer();
    if (!player) return;
    if (!MemoryStore.getErrorQuestionIds(player).length) {
      alert('Nada para exportar — caderno de erros vazio.');
      return;
    }
    MemoryStore.downloadFile(`cgpi-anki-${player}.csv`, MemoryStore.exportAnkiCsv(player), 'text/csv;charset=utf-8');
    MemoryStore.touchReviewStreak(player);
    refresh();
  });

  els.playerInput.addEventListener('input', refresh);

  function open(prefillName = '') {
    if (prefillName) els.playerInput.value = prefillName;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('screen--active'));
    els.screen.classList.add('screen--active');
    els.concepts.hidden = true;
    refresh();
  }

  return { open, refresh };
})();
