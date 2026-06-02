/**
 * CGPI Quest — Mini Game Logic
 */
const STORAGE_KEY = 'cgpi_quest_sessions';
const CLOUD_STORAGE_KEY = 'cloud_quest_sessions';
const CPL_STORAGE_KEY = 'cpl_quest_sessions';
const POO2_STORAGE_KEY = 'poo2_quest_sessions';
const LETTERS = ['a', 'b', 'c', 'd', 'e'];
const MAX_WRONG_BEFORE_MEMO = 5;

const PLAY_LABELS = {
  normal: 'Quiz',
  flashcard: 'Flashcard',
  'review-errors': 'Caderno de Erros',
  'review-session': 'Revisão da Partida',
  daily: 'Desafio Diário',
  prova: 'Simulado PROVA',
};

const state = {
  player: '',
  trainingId: 'cgpi',
  mode: 'N1',
  playType: 'normal',
  questions: [],
  currentIndex: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  maxStreak: 0,
  answered: false,
  scoringEnabled: true,
  memorizationEnabled: true,
  spacedRepEnabled: true,
  confidenceEnabled: false,
  confidence: null,
  wrongAttemptsOnQuestion: 0,
  attemptErrors: 0,
  memoAwaitingRetry: false,
  inMemorizationReview: false,
  awaitingMemoRetry: false,
  memoStudyPhase: false,
  sessionWrongIds: [],
  flashcardRevealed: false,
  confidenceStats: { sure: { c: 0, w: 0 }, guess: { c: 0, w: 0 } },
  lastRecord: null,
  dashboardTraining: null,
  startTime: null,
  timerInterval: null,
};

const screens = {
  hub: document.getElementById('screen-hub'),
  trainingSoon: document.getElementById('screen-training-soon'),
  welcome: document.getElementById('screen-welcome'),
  cloudWelcome: document.getElementById('screen-cloud-welcome'),
  cplWelcome: document.getElementById('screen-cpl-welcome'),
  poo2Welcome: document.getElementById('screen-poo2-welcome'),
  study: document.getElementById('screen-study'),
  quiz: document.getElementById('screen-quiz'),
  result: document.getElementById('screen-result'),
  dashboard: document.getElementById('screen-dashboard'),
};

const els = {
  startForm: document.getElementById('start-form'),
  cloudStartForm: document.getElementById('cloud-start-form'),
  cplStartForm: document.getElementById('cpl-start-form'),
  poo2StartForm: document.getElementById('poo2-start-form'),
  playerName: document.getElementById('player-name'),
  cloudPlayerName: document.getElementById('cloud-player-name'),
  cplPlayerName: document.getElementById('cpl-player-name'),
  poo2PlayerName: document.getElementById('poo2-player-name'),
  filterUnit: document.getElementById('filter-unit'),
  filterUnitCloud: document.getElementById('filter-unit-cloud'),
  filterUnitPoo2: document.getElementById('filter-unit-poo2'),
  filterUnitLabel: document.getElementById('filter-unit-label'),
  welcomeOptionsWrap: document.getElementById('welcome-options-wrap'),
  cloudWelcomeOptionsWrap: document.getElementById('cloud-welcome-options-wrap'),
  provaModeHint: document.getElementById('prova-mode-hint'),
  cloudProvaModeHint: document.getElementById('cloud-prova-mode-hint'),
  welcomeMastery: document.getElementById('welcome-mastery'),
  cloudWelcomeMastery: document.getElementById('cloud-welcome-mastery'),
  cplWelcomeOptionsWrap: document.getElementById('cpl-welcome-options-wrap'),
  cplProvaModeHint: document.getElementById('cpl-prova-mode-hint'),
  cplWelcomeMastery: document.getElementById('cpl-welcome-mastery'),
  poo2WelcomeOptionsWrap: document.getElementById('poo2-welcome-options-wrap'),
  poo2ProvaModeHint: document.getElementById('poo2-prova-mode-hint'),
  poo2WelcomeMastery: document.getElementById('poo2-welcome-mastery'),
  btnStudyHub: document.getElementById('btn-study-hub'),
  btnDashboard: document.getElementById('btn-dashboard'),
  btnBackHome: document.getElementById('btn-back-home'),
  hudName: document.getElementById('hud-name'),
  hudMode: document.getElementById('hud-mode'),
  hudProgressNum: document.getElementById('hud-progress-num'),
  hudTotal: document.getElementById('hud-total'),
  hudStreak: document.getElementById('hud-streak'),
  hudScore: document.getElementById('hud-score'),
  hudWrong: document.getElementById('hud-wrong'),
  hudTimer: document.getElementById('hud-timer'),
  progressRing: document.getElementById('progress-ring-fill'),
  quizBarFill: document.getElementById('quiz-bar-fill'),
  questionCard: document.getElementById('question-card'),
  qExam: document.getElementById('q-exam'),
  qUnit: document.getElementById('q-unit'),
  qProvaSection: document.getElementById('q-prova-section'),
  qMemoBadge: document.getElementById('q-memo-badge'),
  qAnswerBadge: document.getElementById('q-answer-badge'),
  qAttempts: document.getElementById('q-attempts'),
  qNumber: document.getElementById('q-number'),
  qText: document.getElementById('q-text'),
  qTextCode: document.getElementById('q-text-code'),
  confidenceRow: document.getElementById('confidence-row'),
  memoStudyPanel: document.getElementById('memo-study-panel'),
  memoStudyOptions: document.getElementById('memo-study-options'),
  memoStudyHint: document.getElementById('memo-study-hint'),
  optionsList: document.getElementById('options-list'),
  flashcardPanel: document.getElementById('flashcard-panel'),
  flashcardAnswer: document.getElementById('flashcard-answer'),
  btnFlashReveal: document.getElementById('btn-flash-reveal'),
  flashcardRate: document.getElementById('flashcard-rate'),
  feedback: document.getElementById('feedback'),
  btnNext: document.getElementById('btn-next'),
  btnQuit: document.getElementById('btn-quit'),
  resultBadge: document.getElementById('result-badge'),
  resultTitle: document.getElementById('result-title'),
  resultPlayer: document.getElementById('result-player'),
  resultPercent: document.getElementById('result-percent'),
  resultCorrect: document.getElementById('result-correct'),
  resultWrong: document.getElementById('result-wrong'),
  resultTime: document.getElementById('result-time'),
  resultConfidence: document.getElementById('result-confidence'),
  resultBarCorrect: document.getElementById('result-bar-correct'),
  resultBarWrong: document.getElementById('result-bar-wrong'),
  resultMessage: document.getElementById('result-message'),
  btnReviewSession: document.getElementById('btn-review-session'),
  btnPlayAgain: document.getElementById('btn-play-again'),
  btnResultDashboard: document.getElementById('btn-result-dashboard'),
  dashSummary: document.getElementById('dash-summary'),
  dashUnitMastery: document.getElementById('dash-unit-mastery'),
  dashSessions: document.getElementById('dash-sessions'),
  dashEmpty: document.getElementById('dash-empty'),
  filterName: document.getElementById('filter-name'),
  filterMode: document.getElementById('filter-mode'),
};

const RING_C = 2 * Math.PI * 52;

function showScreen(name) {
  Object.values(screens).forEach(s => s?.classList.remove('screen--active'));
  screens[name]?.classList.add('screen--active');
}
window.showAppScreen = showScreen;

window.setActiveTraining = (id) => {
  if (!id) return;
  state.trainingId = id;
  MemoryStore.setTraining(id);
};

function getSessionsStorageKey(trainingId = state.trainingId) {
  if (trainingId === 'cloud') return CLOUD_STORAGE_KEY;
  if (trainingId === 'cpl') return CPL_STORAGE_KEY;
  if (trainingId === 'poo2') return POO2_STORAGE_KEY;
  return STORAGE_KEY;
}

function getActiveQuestions() {
  if (state.trainingId === 'cloud') {
    return typeof CLOUD_QUESTIONS !== 'undefined' ? CLOUD_QUESTIONS : [];
  }
  if (state.trainingId === 'cpl') {
    return typeof CPL_QUESTIONS !== 'undefined' ? CPL_QUESTIONS : [];
  }
  if (state.trainingId === 'poo2') {
    return typeof POO2_QUESTIONS !== 'undefined' ? POO2_QUESTIONS : [];
  }
  return typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
}

function loadSessions(trainingId = state.trainingId) {
  try {
    return JSON.parse(localStorage.getItem(getSessionsStorageKey(trainingId))) || [];
  } catch {
    return [];
  }
}

function saveSession(record) {
  const key = getSessionsStorageKey(record.trainingId || state.trainingId);
  const sessions = loadSessions(record.trainingId || state.trainingId);
  sessions.unshift(record);
  localStorage.setItem(key, JSON.stringify(sessions));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function modeLabel(mode) {
  if (isCloudMode(mode)) return cloudModeLabel(mode);
  if (isPoo2Mode(mode)) return poo2ModeLabel(mode);
  return {
    N1: 'Prova N1',
    N2: 'Prova N2',
    N2_NOB: 'N2 Sem B',
    N2_CODE: 'N2 · Só Código',
    PROVA: 'Simulado PROVA',
    PROVA_N2_CODE: 'Simulado N2 · Código',
    ALL: 'Completo',
  }[mode] || mode;
}

function isN2NoBMode(mode) {
  return mode === 'N2_NOB';
}

function isN2CodeMode(mode) {
  return mode === 'N2_CODE';
}

function isProvaMode(mode) {
  return mode === 'PROVA';
}

function isN2CodeProvaMode(mode) {
  return mode === 'PROVA_N2_CODE';
}

function isSimuladoMode(mode) {
  return isProvaMode(mode) || isN2CodeProvaMode(mode) || isCloudSimuladoMode(mode) || isPoo2SimuladoMode(mode);
}

function isCloudTraining() {
  return state.trainingId === 'cloud';
}

function isCplTraining() {
  return state.trainingId === 'cpl';
}

function isPoo2Training() {
  return state.trainingId === 'poo2';
}

function trainingHudPrefix() {
  if (isCloudTraining()) return 'Nuvem · ';
  if (isCplTraining()) return 'CPL · ';
  if (isPoo2Training()) return 'POO2 · ';
  return '';
}

function modeIgnoresUnitFilter(mode) {
  if (isCloudMode(mode)) return cloudModeIgnoresUnitFilter(mode);
  if (isPoo2Mode(mode)) return poo2ModeIgnoresUnitFilter(mode);
  return isSimuladoMode(mode) || mode === 'N2' || isN2NoBMode(mode) || isN2CodeMode(mode);
}

function buildQuestionPool(mode, unitFilter) {
  const bank = getActiveQuestions();
  const effectiveUnit = modeIgnoresUnitFilter(mode) ? '' : unitFilter;

  if (isCloudMode(mode)) {
    return buildCloudQuestionPool(mode, effectiveUnit || unitFilter);
  }

  if (isPoo2Mode(mode)) {
    return buildPoo2QuestionPool(mode, effectiveUnit || unitFilter);
  }

  if (isN2CodeMode(mode)) {
    if (isCplTraining()) return buildCplCodeQuestionPool(bank, effectiveUnit);
    return buildCodeQuestionPool(bank, effectiveUnit);
  }
  return bank.filter(q => {
    if (isN2NoBMode(mode)) {
      if (q.exam !== 'N2' || q.answer === 'b') return false;
    } else if (mode !== 'ALL' && q.exam !== mode) {
      return false;
    }
    if (effectiveUnit && q.unit !== effectiveUnit) return false;
    return true;
  });
}

function getGrade(pct) {
  if (pct >= 90) return { letter: 'S', label: 'Lendário!', cls: 'result-badge--s' };
  if (pct >= 75) return { letter: 'A', label: 'Excelente!', cls: 'result-badge--a' };
  if (pct >= 60) return { letter: 'B', label: 'Bom trabalho!', cls: 'result-badge--b' };
  if (pct >= 40) return { letter: 'C', label: 'Continue estudando!', cls: 'result-badge--c' };
  return { letter: 'F', label: 'Não desista!', cls: 'result-badge--f' };
}

function pctClass(pct) {
  if (pct >= 75) return 'session-row__pct--high';
  if (pct >= 50) return 'session-row__pct--mid';
  return 'session-row__pct--low';
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function startTimer() {
  state.startTime = Date.now();
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    els.hudTimer.textContent = formatTime(Date.now() - state.startTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
  return Date.now() - state.startTime;
}

function updateHUD() {
  const total = state.questions.length;
  const done = state.currentIndex;
  const pct = total > 0 ? done / total : 0;
  els.hudProgressNum.textContent = done;
  els.hudTotal.textContent = total;
  els.hudStreak.textContent = state.streak;
  els.hudScore.textContent = state.scoringEnabled ? state.correct : '—';
  if (els.hudWrong) {
    els.hudWrong.textContent = state.scoringEnabled ? state.wrong : '—';
  }
  els.quizBarFill.style.width = `${pct * 100}%`;
  els.progressRing.style.strokeDashoffset = RING_C * (1 - pct);
}

function resetSessionState() {
  state.currentIndex = 0;
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.answered = false;
  state.wrongAttemptsOnQuestion = 0;
  state.attemptErrors = 0;
  state.memoAwaitingRetry = false;
  state.inMemorizationReview = false;
  state.awaitingMemoRetry = false;
  state.memoStudyPhase = false;
  state.sessionWrongIds = [];
  state.flashcardRevealed = false;
  state.confidence = null;
  state.confidenceStats = { sure: { c: 0, w: 0 }, guess: { c: 0, w: 0 } };
}

function startGame(player, options = {}) {
  const {
    trainingId = state.trainingId || 'cgpi',
    mode = trainingId === 'cloud' ? 'CLOUD_ALL'
      : trainingId === 'cpl' ? 'N1'
      : trainingId === 'poo2' ? 'POO2_ALL'
      : 'N1',
    doShuffle = true,
    unitFilter = '',
    memorizationEnabled = true,
    spacedRepEnabled = true,
    confidenceEnabled = false,
    playType = 'normal',
    questionList = null,
    scoringEnabled = true,
  } = options;

  state.trainingId = trainingId;
  MemoryStore.setTraining(trainingId);
  state.player = player.trim();
  state.mode = mode;
  state.playType = isSimuladoMode(mode) ? 'prova' : playType;
  state.memorizationEnabled = memorizationEnabled && state.playType === 'normal' && !isSimuladoMode(mode);
  state.spacedRepEnabled = spacedRepEnabled && state.playType === 'normal' && !isSimuladoMode(mode)
    && !isCloudTraining() && !isCplTraining() && !isPoo2Training();
  state.confidenceEnabled = confidenceEnabled && state.playType === 'normal';
  state.scoringEnabled = scoringEnabled;

  resetSessionState();

  const bank = getActiveQuestions();
  let pool;
  if (isCloudProvaMode(mode)) {
    try {
      pool = buildCloudProvaExam(bank);
    } catch (err) {
      alert(err.message || 'Não foi possível montar o simulado de Nuvem.');
      return;
    }
  } else if (isPoo2ProvaMode(mode)) {
    try {
      pool = buildPoo2ProvaExam(bank);
    } catch (err) {
      alert(err.message || 'Não foi possível montar o simulado POO2.');
      return;
    }
  } else if (isProvaMode(mode)) {
    try {
      pool = isCplTraining() ? buildCplProvaExam(bank) : buildProvaExam(bank);
    } catch (err) {
      alert(err.message || 'Não foi possível montar o simulado PROVA.');
      return;
    }
  } else if (isN2CodeProvaMode(mode)) {
    try {
      pool = isCplTraining() ? buildCplN2CodeProvaExam(bank) : buildN2CodeProvaExam(bank);
    } catch (err) {
      alert(err.message || 'Não foi possível montar o simulado N2 · Código.');
      return;
    }
  } else {
    pool = questionList || buildQuestionPool(mode, unitFilter);
    if (!pool.length) {
      alert('Nenhuma questão encontrada para este filtro.');
      return;
    }
    if (doShuffle && state.playType === 'normal') pool = shuffle(pool);
    if (state.spacedRepEnabled && !isN2NoBMode(mode)) {
      pool = MemoryStore.injectSpacedRepetition(pool, state.player);
    }
    if (!pool.length) {
      alert('Nenhuma questão encontrada para este filtro.');
      return;
    }
  }

  state.questions = pool;
  els.hudName.textContent = state.player;
  const trainingTag = trainingHudPrefix();
  els.hudMode.textContent = trainingTag + (isSimuladoMode(mode) ? modeLabel(mode) : (PLAY_LABELS[playType] || modeLabel(mode)));
  els.hudTotal.textContent = state.questions.length;

  showScreen('quiz');
  startTimer();
  renderQuestion();
}

window.CGPI_startStudySession = (player, playType, questions) => {
  startGame(player, {
    trainingId: 'cgpi',
    mode: 'ALL',
    doShuffle: playType === 'flashcard',
    playType,
    questionList: questions,
    scoringEnabled: false,
    memorizationEnabled: false,
    spacedRepEnabled: false,
    confidenceEnabled: false,
  });
};

function updateAttemptsBadge() {
  if (!state.memorizationEnabled || state.inMemorizationReview || state.memoStudyPhase) {
    els.qAttempts.hidden = true;
    return;
  }
  if (state.wrongAttemptsOnQuestion > 0) {
    els.qAttempts.hidden = false;
    els.qAttempts.textContent = `Erros: ${state.wrongAttemptsOnQuestion}/${MAX_WRONG_BEFORE_MEMO}`;
  } else {
    els.qAttempts.hidden = true;
  }
}

function updateMemoUI() {
  const active = state.inMemorizationReview || state.awaitingMemoRetry || state.memoStudyPhase;
  els.qMemoBadge.hidden = !active;
  els.questionCard.classList.toggle('question-card--memorization', active);
}

function resetOptionsUI() {
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = false;
    b.classList.remove('option-btn--correct', 'option-btn--wrong', 'option-btn--dim');
  });
}

function highlightOptions(chosen, q) {
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    const letter = b.dataset.letter;
    if (letter === q.answer) b.classList.add('option-btn--correct');
    else if (letter === chosen && chosen !== q.answer) b.classList.add('option-btn--wrong');
    else b.classList.add('option-btn--dim');
  });
}

function needsConfidence() {
  return state.confidenceEnabled && !state.confidence && !state.answered
    && state.playType === 'normal' && !state.inMemorizationReview
    && !state.memoStudyPhase && !state.awaitingMemoRetry;
}

function setConfidence(level) {
  state.confidence = level;
  els.confidenceRow.querySelectorAll('.btn--confidence').forEach(b => {
    b.classList.toggle('btn--confidence-active', b.dataset.confidence === level);
  });
  document.querySelectorAll('#options-list .option-btn').forEach(b => { b.disabled = false; });
}

function trackConfidence(isCorrect) {
  if (!state.confidence) return;
  const bucket = state.confidenceStats[state.confidence];
  if (isCorrect) bucket.c++; else bucket.w++;
}

function showMemoStudyPhase(q) {
  state.memoStudyPhase = true;
  state.awaitingMemoRetry = false;
  els.memoStudyPanel.hidden = false;
  els.optionsList.hidden = true;
  els.confidenceRow.hidden = true;

  els.memoStudyOptions.innerHTML = '';
  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option-btn option-btn--readonly';
    if (LETTERS[i] === q.answer) div.classList.add('option-btn--correct');
    div.innerHTML = `
      <span class="option-btn__letter">${LETTERS[i].toUpperCase()}</span>
      <span class="option-btn__text">${opt}</span>
    `;
    els.memoStudyOptions.appendChild(div);
  });
  els.memoStudyHint.textContent = `💡 ${getQuestionHint(q)}`;
  els.btnNext.textContent = 'Agora tente responder';
  els.btnNext.disabled = false;
  updateMemoUI();
}

function updateProvaSectionBadge(q) {
  if (!els.qProvaSection) return;
  if (!isSimuladoMode(state.mode) || !q.provaSection) {
    els.qProvaSection.hidden = true;
    return;
  }
  const sameSection = state.questions.filter(x => x.provaSection === q.provaSection);
  const idxInSection = sameSection.findIndex(x => x.id === q.id) + 1;
  els.qProvaSection.hidden = false;
  els.qProvaSection.textContent = getProvaSectionLabel(q, idxInSection, sameSection.length);
  els.qProvaSection.className = `chip chip--prova chip--prova-${q.provaSection.replace('-', '').toLowerCase()}`;
}

function applyN2NoBDecoration(q) {
  const letters = ['a', 'b', 'c', 'd', 'e'];
  letters.forEach(l => els.questionCard.classList.remove(`question-card--ans-${l}`));
  els.questionCard.classList.remove('question-card--nob');

  if (!isN2NoBMode(state.mode) || !els.qAnswerBadge) {
    if (els.qAnswerBadge) els.qAnswerBadge.hidden = true;
    return;
  }

  els.qAnswerBadge.hidden = false;
  els.qAnswerBadge.textContent = `★ Gabarito ${q.answer.toUpperCase()}`;
  els.qAnswerBadge.className = `chip chip--answer chip--ans-${q.answer}`;
  els.questionCard.classList.add('question-card--nob', `question-card--ans-${q.answer}`);
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  if (!q) return finishGame();

  state.answered = false;
  state.wrongAttemptsOnQuestion = 0;
  state.memoAwaitingRetry = false;
  state.inMemorizationReview = false;
  state.awaitingMemoRetry = false;
  state.memoStudyPhase = false;
  state.confidence = null;
  state.flashcardRevealed = false;

  els.btnNext.disabled = true;
  els.btnNext.textContent = 'Próxima Questão';
  els.feedback.hidden = true;
  els.memoStudyPanel.hidden = true;
  els.optionsList.hidden = false;
  els.flashcardPanel.hidden = true;
  els.confidenceRow.hidden = true;
  els.confidenceRow.querySelectorAll('.btn--confidence').forEach(b => b.classList.remove('btn--confidence-active'));

  updateMemoUI();
  updateAttemptsBadge();

  els.qExam.textContent = q.exam;
  els.qUnit.textContent = q.unit || '';
  els.qUnit.style.display = q.unit ? '' : 'none';
  els.qNumber.textContent = q.id;
  mountQuestionText(q, els.qText, els.qTextCode);
  updateProvaSectionBadge(q);
  applyN2NoBDecoration(q);

  els.questionCard.classList.toggle('question-card--code', questionHasCode(q));

  if (state.playType === 'flashcard') {
    renderFlashcard(q);
  } else {
    renderQuizOptions(q);
  }

  els.questionCard.classList.remove('question-card--exit');
  void els.questionCard.offsetWidth;
  els.questionCard.style.animation = '';
  updateHUD();
}

function renderQuizOptions(q) {
  els.optionsList.innerHTML = '';
  const lockOptions = state.confidenceEnabled && state.playType === 'normal';
  if (lockOptions) els.confidenceRow.hidden = false;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.dataset.letter = LETTERS[i];
    btn.disabled = lockOptions;
    if (isN2NoBMode(state.mode)) {
      btn.classList.add(`option-btn--ans-${LETTERS[i]}`);
      if (LETTERS[i] === q.answer) btn.classList.add('option-btn--gabarito-mark');
    }
    btn.innerHTML = `
      <span class="option-btn__letter">${LETTERS[i].toUpperCase()}</span>
      <span class="option-btn__text">${opt}</span>
    `;
    btn.addEventListener('click', () => {
      if (needsConfidence()) return;
      selectAnswer(btn, q);
    });
    els.optionsList.appendChild(btn);
  });
}

function renderFlashcard(q) {
  els.optionsList.innerHTML = '';
  els.flashcardPanel.hidden = false;
  els.flashcardAnswer.hidden = true;
  els.flashcardRate.hidden = true;
  els.btnFlashReveal.hidden = false;

  const idx = LETTERS.indexOf(q.answer);
  els.flashcardAnswer.innerHTML = `
    <strong>${q.answer.toUpperCase()})</strong> ${q.options[idx]}
    <p class="flashcard-answer__hint">${getQuestionHint(q)}</p>
  `;
}

function removeSessionWrongId(questionId) {
  const idx = state.sessionWrongIds.indexOf(questionId);
  if (idx >= 0) state.sessionWrongIds.splice(idx, 1);
}

function addSessionWrongId(questionId) {
  if (!state.sessionWrongIds.includes(questionId)) state.sessionWrongIds.push(questionId);
}

function selectAnswer(btn, q) {
  if (state.answered || needsConfidence()) return;
  state.answered = true;

  const chosen = btn.dataset.letter;
  const isCorrect = chosen === q.answer;
  highlightOptions(chosen, q);

  if (state.inMemorizationReview || !state.scoringEnabled) {
    els.feedback.className = 'feedback feedback--memorization';
    if (isCorrect) {
      els.feedback.textContent = '📚 Correto! (memorização — não conta pontos)';
      MemoryStore.recordReviewSuccess(state.player, q.id);
      spawnParticles(btn, ['#aa88ff', '#c9b8ff', '#00d4ff']);
    } else {
      const correctOpt = q.options[LETTERS.indexOf(q.answer)];
      els.feedback.textContent = `📚 Gabarito: ${q.answer.toUpperCase()}) ${correctOpt}\n💡 ${getQuestionHint(q)}`;
    }
    els.feedback.hidden = false;
    els.btnNext.textContent = 'Continuar';
    els.btnNext.disabled = false;
    MemoryStore.touchReviewStreak(state.player);
    return;
  }

  if (isCorrect) {
    state.memoAwaitingRetry = false;
    state.correct++;
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    trackConfidence(true);
    if (q.unit) MemoryStore.recordUnitAnswer(state.player, q.unit, true);
    MemoryStore.recordReviewSuccess(state.player, q.id);
    removeSessionWrongId(q.id);
    els.feedback.className = 'feedback feedback--correct';
    const recovered = state.wrongAttemptsOnQuestion > 0;
    els.feedback.textContent = recovered
      ? `✓ Correto! ${state.streak > 1 ? `Sequência de ${state.streak}! 🔥` : 'Recuperou após errar.'}`
      : `✓ Correto! ${state.streak > 1 ? `Sequência de ${state.streak}! 🔥` : ''}`;
    els.btnNext.textContent = 'Próxima Questão';
    spawnParticles(btn, ['#00ff88', '#00d4ff', '#ffd166']);
  } else if (state.memorizationEnabled) {
    state.wrongAttemptsOnQuestion++;
    state.attemptErrors++;
    state.streak = 0;
    trackConfidence(false);

    const correctOpt = q.options[LETTERS.indexOf(q.answer)];
    if (state.wrongAttemptsOnQuestion < MAX_WRONG_BEFORE_MEMO) {
      state.memoAwaitingRetry = true;
      els.feedback.className = 'feedback feedback--wrong';
      els.feedback.textContent =
        `✗ Errado (tentativa ${state.wrongAttemptsOnQuestion}/${MAX_WRONG_BEFORE_MEMO}). Tente novamente!`;
      els.btnNext.textContent = 'Tentar novamente';
      updateAttemptsBadge();
    } else {
      state.memoAwaitingRetry = false;
      state.wrong++;
      state.awaitingMemoRetry = true;
      if (q.unit) MemoryStore.recordUnitAnswer(state.player, q.unit, false);
      addSessionWrongId(q.id);
      MemoryStore.recordMiss(state.player, q.id);
      els.feedback.className = 'feedback feedback--memorization';
      els.feedback.textContent =
        `📚 5 erros! Estude o gabarito antes de tentar de novo.\nGabarito: ${q.answer.toUpperCase()}) ${correctOpt}`;
      els.btnNext.textContent = 'Ver gabarito comentado';
      updateMemoUI();
      els.qAttempts.hidden = true;
    }
  } else {
    state.memoAwaitingRetry = false;
    state.wrong++;
    state.streak = 0;
    trackConfidence(false);
    if (q.unit) MemoryStore.recordUnitAnswer(state.player, q.unit, false);
    addSessionWrongId(q.id);
    MemoryStore.recordMiss(state.player, q.id);
    els.feedback.className = 'feedback feedback--wrong';
    const correctOpt = q.options[LETTERS.indexOf(q.answer)];
    els.feedback.textContent = `✗ Errado. Gabarito: ${q.answer.toUpperCase()}) ${correctOpt}\n💡 ${getQuestionHint(q)}`;
    els.btnNext.textContent = 'Próxima Questão';
  }

  els.feedback.hidden = false;
  els.btnNext.disabled = false;
  updateHUD();
}

function handleFlashcardRate(knew) {
  const q = state.questions[state.currentIndex];
  if (knew) {
    MemoryStore.recordReviewSuccess(state.player, q.id);
    els.feedback.className = 'feedback feedback--correct';
    els.feedback.textContent = '✓ Ótimo! Continue revisando.';
  } else {
    MemoryStore.recordMiss(state.player, q.id);
    els.feedback.className = 'feedback feedback--memorization';
    els.feedback.textContent = '📚 Anote para revisar de novo.';
  }
  MemoryStore.touchReviewStreak(state.player);
  els.feedback.hidden = false;
  els.btnNext.disabled = false;
  els.btnNext.textContent = 'Próximo cartão';
  state.answered = true;
}

function retrySameQuestion() {
  state.answered = false;
  state.confidence = null;
  state.memoAwaitingRetry = false;
  els.btnNext.disabled = true;
  els.btnNext.textContent = 'Próxima Questão';
  els.feedback.hidden = true;
  els.confidenceRow.querySelectorAll('.btn--confidence').forEach(b => b.classList.remove('btn--confidence-active'));
  resetOptionsUI();
  if (state.confidenceEnabled) {
    document.querySelectorAll('#options-list .option-btn').forEach(b => { b.disabled = true; });
  }
}

function beginMemorizationReview() {
  state.memoStudyPhase = false;
  state.awaitingMemoRetry = false;
  state.memoAwaitingRetry = false;
  state.inMemorizationReview = true;
  state.answered = false;
  els.memoStudyPanel.hidden = true;
  els.optionsList.hidden = false;
  els.btnNext.disabled = true;
  els.btnNext.textContent = 'Próxima Questão';
  els.feedback.hidden = true;
  updateMemoUI();
  resetOptionsUI();
}

function handleNext() {
  if (state.memoStudyPhase) {
    beginMemorizationReview();
    return;
  }
  if (state.awaitingMemoRetry) {
    showMemoStudyPhase(state.questions[state.currentIndex]);
    return;
  }
  if (state.memoAwaitingRetry) {
    retrySameQuestion();
    return;
  }
  if (!state.answered) return;
  nextQuestion();
}

function nextQuestion() {
  els.questionCard.classList.add('question-card--exit');
  setTimeout(() => {
    state.currentIndex++;
    if (state.currentIndex >= state.questions.length) finishGame();
    else renderQuestion();
  }, 280);
}

function showTrainingHome() {
  const map = { cgpi: 'welcome', cloud: 'cloudWelcome', cpl: 'cplWelcome', poo2: 'poo2Welcome' };
  showScreen(map[state.trainingId] || 'welcome');
}

function finishGame() {
  const elapsed = stopTimer();
  const total = state.questions.length;

  if (total === 0) {
    alert('Nenhuma questão nesta partida. Volte ao início e escolha outro modo ou filtro.');
    showTrainingHome();
    return;
  }

  if (state.scoringEnabled && (state.playType === 'normal' || state.playType === 'prova') && state.mode !== 'ALL') {
    MemoryStore.saveLastSessionWrong(state.player, state.sessionWrongIds);
  }

  if (state.scoringEnabled && (state.playType === 'normal' || state.playType === 'prova') && total > 0) {
    const missed = Math.max(state.wrong, total - state.correct);
    const pct = Math.round((state.correct / total) * 100);
    const record = {
      id: Date.now(),
      player: state.player,
      trainingId: state.trainingId,
      mode: state.mode,
      total,
      correct: state.correct,
      wrong: missed,
      attemptErrors: state.attemptErrors,
      percent: pct,
      maxStreak: state.maxStreak,
      elapsed,
      date: new Date().toISOString(),
      confidenceStats: state.confidenceStats,
    };
    state.lastRecord = record;
    saveSession(record);
    showResults(record, getGrade(pct));
  } else {
    MemoryStore.touchReviewStreak(state.player);
    showStudyComplete(total, elapsed);
  }
}

function showStudyComplete(total, elapsed) {
  showScreen('result');
  els.resultBadge.textContent = '📚';
  els.resultBadge.className = 'result-badge result-badge--a';
  els.resultTitle.textContent = 'Revisão concluída!';
  els.resultPlayer.textContent = `${state.player} · ${PLAY_LABELS[state.playType]}`;
  els.resultPercent.textContent = `${total}`;
  els.resultCorrect.textContent = total;
  els.resultWrong.textContent = '—';
  els.resultTime.textContent = formatTime(elapsed);
  els.resultConfidence.hidden = true;
  els.resultBarCorrect.style.width = '100%';
  els.resultBarWrong.style.width = '0%';
  els.resultMessage.textContent = `Você revisou ${total} questão(ões). Continue praticando na Central de Estudo!`;
  els.btnReviewSession.hidden = true;
}

function showResults(record, grade) {
  showScreen('result');
  els.resultBadge.textContent = grade.letter;
  els.resultBadge.className = `result-badge ${grade.cls}`;
  els.resultTitle.textContent = grade.label;
  els.resultPlayer.textContent = `${record.player} · ${modeLabel(record.mode)} · ${record.total} questões`;
  els.resultPercent.textContent = `${record.percent}%`;
  els.resultCorrect.textContent = record.correct;
  els.resultWrong.textContent = record.wrong;
  els.resultTime.textContent = formatTime(record.elapsed);

  const cs = record.confidenceStats;
  const hasConf = cs && (cs.sure.c + cs.sure.w + cs.guess.c + cs.guess.w > 0);
  if (hasConf) {
    els.resultConfidence.hidden = false;
    els.resultConfidence.innerHTML = `
      <p class="result-confidence__title">Autoconfiança</p>
      <div class="result-confidence__grid">
        <span>💪 Certeza: ${cs.sure.c}✓ / ${cs.sure.w}✗</span>
        <span>🎲 Chute: ${cs.guess.c}✓ / ${cs.guess.w}✗</span>
      </div>`;
  } else {
    els.resultConfidence.hidden = true;
  }

  const correctPct = record.total > 0 ? (record.correct / record.total) * 100 : 0;
  els.resultBarCorrect.style.width = '0%';
  els.resultBarWrong.style.width = '0%';
  requestAnimationFrame(() => {
    setTimeout(() => {
      els.resultBarCorrect.style.width = `${correctPct}%`;
      els.resultBarWrong.style.width = `${100 - correctPct}%`;
    }, 100);
  });

  const sessions = loadSessions(record.trainingId || state.trainingId).filter(s => s.player === record.player);
  const avgPct = sessions.length
    ? Math.round(sessions.reduce((a, s) => a + s.percent, 0) / sessions.length)
    : record.percent;

  els.resultMessage.textContent =
    `Você acertou ${record.percent}% desta partida (${record.correct} de ${record.total}). ` +
    `Média de ${record.player}: ${avgPct}% em ${sessions.length} partida(s).`;

  const wrongIds = MemoryStore.getLastSessionWrong(record.player);
  els.btnReviewSession.hidden = wrongIds.length === 0;
  if (record.percent >= 75) spawnConfetti();
}

function renderUnitMasteryHtml(player, container) {
  const mastery = MemoryStore.getUnitMastery(player);
  if (!mastery.length) {
    container.innerHTML = '';
    container.hidden = true;
    return;
  }
  container.hidden = false;
  container.innerHTML = `
    <p class="unit-mastery__title">Domínio por unidade — ${escapeHtml(player)}</p>
    ${mastery.map(u => `
      <div class="unit-mastery__row">
        <span class="unit-mastery__label">${escapeHtml(u.unit)}</span>
        <div class="unit-mastery__bar"><div class="unit-mastery__fill" style="width:${u.pct}%"></div></div>
        <span class="unit-mastery__pct">${u.pct}%</span>
      </div>`).join('')}`;
}

function renderDashboard(trainingFilter = null) {
  const filterTraining = trainingFilter ?? state.dashboardTraining ?? null;
  let sessions = filterTraining
    ? loadSessions(filterTraining)
    : [...loadSessions('cgpi'), ...loadSessions('cloud'), ...loadSessions('cpl'), ...loadSessions('poo2')];
  const filterName = els.filterName.value.trim().toLowerCase();
  const filterMode = els.filterMode.value;

  let filtered = sessions;
  if (filterName) filtered = filtered.filter(s => s.player.toLowerCase().includes(filterName));
  if (filterMode) filtered = filtered.filter(s => s.mode === filterMode);

  const totalGames = sessions.length;
  const uniquePlayers = new Set(sessions.map(s => s.player)).size;
  const avgAll = totalGames ? Math.round(sessions.reduce((a, s) => a + s.percent, 0) / totalGames) : 0;
  const best = totalGames ? Math.max(...sessions.map(s => s.percent)) : 0;

  els.dashSummary.innerHTML = `
    <div class="dash-card"><span class="dash-card__value">${totalGames}</span><span class="dash-card__label">Partidas</span></div>
    <div class="dash-card"><span class="dash-card__value">${uniquePlayers}</span><span class="dash-card__label">Jogadores</span></div>
    <div class="dash-card"><span class="dash-card__value">${avgAll}%</span><span class="dash-card__label">Média Geral</span></div>
    <div class="dash-card"><span class="dash-card__value">${best}%</span><span class="dash-card__label">Melhor Score</span></div>`;

  const dashPlayer = filterName || (sessions[0]?.player || '');
  if (dashPlayer) renderUnitMasteryHtml(sessions.find(s => s.player.toLowerCase().includes(filterName))?.player || sessions[0]?.player || '', els.dashUnitMastery);

  els.dashSessions.innerHTML = '';
  if (filtered.length === 0) {
    els.dashEmpty.hidden = false;
  } else {
    els.dashEmpty.hidden = true;
    filtered.forEach((s, i) => {
      const row = document.createElement('div');
      row.className = 'session-row';
      row.style.animationDelay = `${i * 0.04}s`;
      const date = new Date(s.date);
      const dateStr = date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      row.innerHTML = `
        <div>
          <div class="session-row__name">${escapeHtml(s.player)}</div>
          <div class="session-row__meta">${modeLabel(s.mode)} · ${dateStr} · ⏱ ${formatTime(s.elapsed)}</div>
        </div>
        <div class="session-row__score">${s.correct}/${s.total}</div>
        <div class="session-row__pct ${pctClass(s.percent)}">${s.percent}%</div>`;
      els.dashSessions.appendChild(row);
    });
  }
  showScreen('dashboard');
}

function updateWelcomeMastery() {
  const name = els.playerName.value.trim();
  if (!name) { els.welcomeMastery.hidden = true; return; }
  renderUnitMasteryHtml(name, els.welcomeMastery);
}

function updateCloudWelcomeForMode(mode) {
  const simulado = isCloudProvaMode(mode);
  const showUnit = mode === 'CLOUD_UNIT';
  if (els.cloudProvaModeHint) {
    els.cloudProvaModeHint.hidden = !simulado;
    if (simulado) {
      els.cloudProvaModeHint.textContent =
        `${CLOUD_PROVA_CONFIG.count} questões aleatórias de todo o banco — simulação de prova B2.`;
    }
  }
  if (els.cloudWelcomeOptionsWrap) els.cloudWelcomeOptionsWrap.hidden = simulado;
  const unitLabel = document.getElementById('filter-unit-cloud-label');
  if (unitLabel) unitLabel.hidden = !showUnit;
  if (els.filterUnitCloud) {
    els.filterUnitCloud.hidden = !showUnit;
    if (!showUnit) els.filterUnitCloud.value = '';
  }
}

function bindCloudModeChange() {
  document.querySelectorAll('input[name="cloud-mode"]').forEach(radio => {
    radio.addEventListener('change', () => updateCloudWelcomeForMode(radio.value));
  });
  const checked = document.querySelector('input[name="cloud-mode"]:checked');
  if (checked) updateCloudWelcomeForMode(checked.value);
}

function populateCloudUnitFilter() {
  if (!els.filterUnitCloud || typeof getCloudUniqueUnits !== 'function') return;
  if (!Array.isArray(CLOUD_QUESTIONS)) return;
  getCloudUniqueUnits(CLOUD_QUESTIONS).forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = u;
    els.filterUnitCloud.appendChild(opt);
  });
}

function updateCloudWelcomeMastery() {
  if (!els.cloudPlayerName || !els.cloudWelcomeMastery) return;
  const name = els.cloudPlayerName.value.trim();
  if (!name) { els.cloudWelcomeMastery.hidden = true; return; }
  MemoryStore.setTraining('cloud');
  renderUnitMasteryHtml(name, els.cloudWelcomeMastery);
  MemoryStore.setTraining(state.trainingId);
}

function updateCplWelcomeForMode(mode) {
  const simulado = isSimuladoMode(mode);
  const hideUnit = simulado || modeIgnoresUnitFilter(mode);
  if (els.cplProvaModeHint) {
    els.cplProvaModeHint.hidden = !simulado;
    if (isProvaMode(mode)) {
      els.cplProvaModeHint.textContent =
        `Ordem fixa: ${CPL_PROVA_CONFIG.n1Count} N1 → ${CPL_PROVA_CONFIG.n2RegularCount} N2 → ${CPL_PROVA_CONFIG.n2CodeCount} com código Java.`;
    } else if (isN2CodeProvaMode(mode)) {
      els.cplProvaModeHint.textContent =
        `${CPL_N2_CODE_PROVA_CONFIG.count} questões aleatórias com código Java (N2-43…48), como na prova.`;
      els.cplProvaModeHint.className = 'prova-mode-hint prova-mode-hint--cpl-code';
    } else {
      els.cplProvaModeHint.className = 'prova-mode-hint prova-mode-hint--cpl';
    }
  }
  if (els.cplWelcomeOptionsWrap) els.cplWelcomeOptionsWrap.hidden = simulado;
}

function bindCplModeChange() {
  document.querySelectorAll('input[name="cpl-mode"]').forEach(radio => {
    radio.addEventListener('change', () => updateCplWelcomeForMode(radio.value));
  });
  const checked = document.querySelector('input[name="cpl-mode"]:checked');
  if (checked) updateCplWelcomeForMode(checked.value);
}

function updateCplN2CodeCount() {
  const el = document.getElementById('cpl-n2-code-count');
  if (!el || typeof buildCplCodeQuestionPool !== 'function' || !Array.isArray(CPL_QUESTIONS)) return;
  el.textContent = `${buildCplCodeQuestionPool(CPL_QUESTIONS).length} questões · Java (N2-43…48)`;
}

function updateCplWelcomeMastery() {
  if (!els.cplPlayerName || !els.cplWelcomeMastery) return;
  const name = els.cplPlayerName.value.trim();
  if (!name) { els.cplWelcomeMastery.hidden = true; return; }
  MemoryStore.setTraining('cpl');
  renderUnitMasteryHtml(name, els.cplWelcomeMastery);
  MemoryStore.setTraining(state.trainingId);
}

function updatePoo2WelcomeForMode(mode) {
  const simulado = isPoo2ProvaMode(mode);
  const showUnit = mode === 'POO2_UNIT';
  if (els.poo2ProvaModeHint) {
    els.poo2ProvaModeHint.hidden = !simulado;
    if (simulado) {
      els.poo2ProvaModeHint.textContent =
        `${POO2_PROVA_CONFIG.count} questões aleatórias com cobertura dos módulos do material POO II.`;
    }
  }
  if (els.poo2WelcomeOptionsWrap) els.poo2WelcomeOptionsWrap.hidden = simulado;
  const unitLabel = document.getElementById('filter-unit-poo2-label');
  if (unitLabel) unitLabel.hidden = !showUnit;
  if (els.filterUnitPoo2) {
    els.filterUnitPoo2.hidden = !showUnit;
    if (!showUnit) els.filterUnitPoo2.value = '';
  }
}

function bindPoo2ModeChange() {
  document.querySelectorAll('input[name="poo2-mode"]').forEach(radio => {
    radio.addEventListener('change', () => updatePoo2WelcomeForMode(radio.value));
  });
  const checked = document.querySelector('input[name="poo2-mode"]:checked');
  if (checked) updatePoo2WelcomeForMode(checked.value);
}

function populatePoo2UnitFilter() {
  if (!els.filterUnitPoo2 || typeof getPoo2UniqueUnits !== 'function') return;
  if (!Array.isArray(POO2_QUESTIONS)) return;
  getPoo2UniqueUnits(POO2_QUESTIONS).forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = u;
    els.filterUnitPoo2.appendChild(opt);
  });
}

function updatePoo2WelcomeMastery() {
  if (!els.poo2PlayerName || !els.poo2WelcomeMastery) return;
  const name = els.poo2PlayerName.value.trim();
  if (!name) { els.poo2WelcomeMastery.hidden = true; return; }
  MemoryStore.setTraining('poo2');
  renderUnitMasteryHtml(name, els.poo2WelcomeMastery);
  MemoryStore.setTraining(state.trainingId);
}

function updatePoo2CodeCount() {
  const el = document.getElementById('poo2-code-count');
  if (!el || typeof buildPoo2CodeQuestionPool !== 'function' || !Array.isArray(POO2_QUESTIONS)) return;
  el.textContent = `${buildPoo2CodeQuestionPool(POO2_QUESTIONS).length} questões · trechos do material`;
}

function updateWelcomeForMode(mode) {
  const simulado = isSimuladoMode(mode);
  const hideUnit = simulado || modeIgnoresUnitFilter(mode);
  if (els.provaModeHint) {
    els.provaModeHint.hidden = !simulado;
    if (isProvaMode(mode)) {
      els.provaModeHint.textContent =
        'Ordem fixa: questões 1–8 N1 (aleatórias) → 9–11 N2 → 12–15 N2 com código do PDF.';
    } else if (isN2CodeProvaMode(mode)) {
      els.provaModeHint.textContent =
        '4 questões aleatórias com código Java do PDF N2 (N2-43…54), na ordem do material — como o bloco de código da prova.';
      els.provaModeHint.className = 'prova-mode-hint prova-mode-hint--code';
    } else {
      els.provaModeHint.className = 'prova-mode-hint';
    }
  }
  if (els.welcomeOptionsWrap) els.welcomeOptionsWrap.hidden = simulado;
  if (els.filterUnitLabel) els.filterUnitLabel.hidden = hideUnit;
  if (els.filterUnit) {
    els.filterUnit.hidden = hideUnit;
    if (hideUnit) els.filterUnit.value = '';
  }
}

function bindModeChange() {
  document.querySelectorAll('input[name="mode"]').forEach(radio => {
    radio.addEventListener('change', () => updateWelcomeForMode(radio.value));
  });
  const checked = document.querySelector('input[name="mode"]:checked');
  if (checked) updateWelcomeForMode(checked.value);
}

function populateUnitFilter() {
  if (typeof getUniqueUnits !== 'function' || !Array.isArray(QUESTIONS)) return;
  getUniqueUnits(QUESTIONS).forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = u;
    els.filterUnit.appendChild(opt);
  });
}

function updateN2NoBCount() {
  const el = document.getElementById('n2-nob-count');
  if (!el || !Array.isArray(QUESTIONS)) return;
  const count = QUESTIONS.filter(q => q.exam === 'N2' && q.answer !== 'b').length;
  el.textContent = `${count} questões · sem gabarito B`;
}

function updateN2CodeCount() {
  const el = document.getElementById('n2-code-count');
  if (!el || typeof buildCodeQuestionPool !== 'function' || !Array.isArray(QUESTIONS)) return;
  const count = buildCodeQuestionPool(QUESTIONS).length;
  el.textContent = `${count} questões · Java do PDF (N2-43…54)`;
}

function spawnParticles(el, colors) {
  const rect = el.getBoundingClientRect();
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'confetti';
    p.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * 60}px`;
    p.style.top = `${rect.top + rect.height / 2}px`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = `${0.6 + Math.random() * 0.8}s`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }
}

function spawnConfetti() {
  const colors = ['#00d4ff', '#ff2d95', '#00ff88', '#ffd166', '#aa88ff'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const p = document.createElement('div');
      p.className = 'confetti';
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = '-10px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 4000);
    }, i * 30);
  }
}

// ===== Events =====
els.startForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = els.playerName.value.trim();
  if (!name) { els.playerName.focus(); return; }
  startGame(name, {
    trainingId: 'cgpi',
    mode: document.querySelector('input[name="mode"]:checked').value,
    doShuffle: document.getElementById('shuffle-questions').checked,
    unitFilter: els.filterUnit.value,
    memorizationEnabled: document.getElementById('memorization-mode').checked,
    spacedRepEnabled: document.getElementById('spaced-rep-mode').checked,
    confidenceEnabled: document.getElementById('confidence-mode').checked,
  });
});

if (els.cloudStartForm) {
  els.cloudStartForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = els.cloudPlayerName.value.trim();
    if (!name) { els.cloudPlayerName.focus(); return; }
    const mode = document.querySelector('input[name="cloud-mode"]:checked')?.value || 'CLOUD_ALL';
    const unitFilter = els.filterUnitCloud?.value || '';
    if (mode === 'CLOUD_UNIT' && !unitFilter) {
      alert('Selecione um tema para o modo Por Tema.');
      els.filterUnitCloud?.focus();
      return;
    }
    startGame(name, {
      trainingId: 'cloud',
      mode,
      doShuffle: document.getElementById('cloud-shuffle-questions')?.checked ?? true,
      unitFilter,
      memorizationEnabled: document.getElementById('cloud-memorization-mode')?.checked ?? true,
      spacedRepEnabled: false,
      confidenceEnabled: document.getElementById('cloud-confidence-mode')?.checked ?? false,
    });
  });
}

if (els.cplStartForm) {
  els.cplStartForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = els.cplPlayerName.value.trim();
    if (!name) { els.cplPlayerName.focus(); return; }
    startGame(name, {
      trainingId: 'cpl',
      mode: document.querySelector('input[name="cpl-mode"]:checked')?.value || 'N1',
      doShuffle: document.getElementById('cpl-shuffle-questions')?.checked ?? true,
      memorizationEnabled: document.getElementById('cpl-memorization-mode')?.checked ?? true,
      spacedRepEnabled: false,
      confidenceEnabled: document.getElementById('cpl-confidence-mode')?.checked ?? false,
    });
  });
}

if (els.poo2StartForm) {
  els.poo2StartForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = els.poo2PlayerName.value.trim();
    if (!name) { els.poo2PlayerName.focus(); return; }
    const mode = document.querySelector('input[name="poo2-mode"]:checked')?.value || 'POO2_ALL';
    const unitFilter = els.filterUnitPoo2?.value || '';
    if (mode === 'POO2_UNIT' && !unitFilter) {
      alert('Selecione um módulo para o modo Por Módulo.');
      els.filterUnitPoo2?.focus();
      return;
    }
    startGame(name, {
      trainingId: 'poo2',
      mode,
      doShuffle: document.getElementById('poo2-shuffle-questions')?.checked ?? true,
      unitFilter,
      memorizationEnabled: document.getElementById('poo2-memorization-mode')?.checked ?? true,
      spacedRepEnabled: false,
      confidenceEnabled: document.getElementById('poo2-confidence-mode')?.checked ?? false,
    });
  });
}

els.confidenceRow.addEventListener('click', e => {
  const btn = e.target.closest('[data-confidence]');
  if (btn) setConfidence(btn.dataset.confidence);
});

els.btnFlashReveal.addEventListener('click', () => {
  state.flashcardRevealed = true;
  els.flashcardAnswer.hidden = false;
  els.btnFlashReveal.hidden = true;
  els.flashcardRate.hidden = false;
});

els.flashcardRate.addEventListener('click', e => {
  const btn = e.target.closest('[data-rate]');
  if (!btn || state.answered) return;
  handleFlashcardRate(btn.dataset.rate === 'knew');
});

els.btnNext.addEventListener('click', handleNext);

els.btnQuit.addEventListener('click', () => {
  if (confirm('Deseja abandonar? O progresso desta partida não será salvo.')) {
    stopTimer();
    showTrainingHome();
  }
});

els.btnReviewSession.addEventListener('click', () => {
  const player = state.lastRecord?.player || state.player || els.playerName.value.trim();
  const ids = MemoryStore.getLastSessionWrong(player);
  const set = new Set(ids);
  const qs = getActiveQuestions().filter(q => set.has(q.id));
  if (!qs.length) return;
  startGame(player, {
    trainingId: state.trainingId,
    playType: 'review-session',
    questionList: qs,
    scoringEnabled: false,
  });
});

els.btnDashboard.addEventListener('click', () => {
  state.dashboardTraining = 'cgpi';
  MemoryStore.setTraining('cgpi');
  renderDashboard('cgpi');
});
els.btnResultDashboard.addEventListener('click', () => {
  const tid = state.lastRecord?.trainingId || state.trainingId;
  state.dashboardTraining = tid;
  MemoryStore.setTraining(tid);
  renderDashboard(tid);
});
els.btnBackHome.addEventListener('click', () => showTrainingHome());
els.btnPlayAgain.addEventListener('click', () => showTrainingHome());
const btnCloudDashboard = document.getElementById('btn-cloud-dashboard');
if (btnCloudDashboard) {
  btnCloudDashboard.addEventListener('click', () => {
    state.dashboardTraining = 'cloud';
    MemoryStore.setTraining('cloud');
    renderDashboard('cloud');
  });
}
const btnCplDashboard = document.getElementById('btn-cpl-dashboard');
if (btnCplDashboard) {
  btnCplDashboard.addEventListener('click', () => {
    state.dashboardTraining = 'cpl';
    MemoryStore.setTraining('cpl');
    renderDashboard('cpl');
  });
}
const btnPoo2Dashboard = document.getElementById('btn-poo2-dashboard');
if (btnPoo2Dashboard) {
  btnPoo2Dashboard.addEventListener('click', () => {
    state.dashboardTraining = 'poo2';
    MemoryStore.setTraining('poo2');
    renderDashboard('poo2');
  });
}
els.btnStudyHub.addEventListener('click', () => {
  StudyHub.open(els.playerName.value.trim());
});

els.playerName.addEventListener('input', updateWelcomeMastery);
if (els.cloudPlayerName) els.cloudPlayerName.addEventListener('input', updateCloudWelcomeMastery);
if (els.cplPlayerName) els.cplPlayerName.addEventListener('input', updateCplWelcomeMastery);
if (els.poo2PlayerName) els.poo2PlayerName.addEventListener('input', updatePoo2WelcomeMastery);
els.filterName.addEventListener('input', () => renderDashboard(state.dashboardTraining));
els.filterMode.addEventListener('change', () => renderDashboard(state.dashboardTraining));

document.addEventListener('keydown', e => {
  if (!screens.quiz.classList.contains('screen--active')) return;
  if (state.playType !== 'normal' && state.playType !== 'review-session' && state.playType !== 'prova') return;
  if (e.key >= '1' && e.key <= '5' && !state.answered && !needsConfidence()) {
    const btns = els.optionsList.querySelectorAll('.option-btn');
    if (btns[parseInt(e.key) - 1]) btns[parseInt(e.key) - 1].click();
  }
  if ((e.key === 'Enter' || e.key === ' ') && !els.btnNext.disabled) {
    e.preventDefault();
    handleNext();
  }
});

populateUnitFilter();
populateCloudUnitFilter();
populatePoo2UnitFilter();
updateN2NoBCount();
updateN2CodeCount();
updateCplN2CodeCount();
updatePoo2CodeCount();
bindModeChange();
bindCloudModeChange();
bindCplModeChange();
bindPoo2ModeChange();
TrainingsHub.open();
els.progressRing.style.strokeDasharray = RING_C;
els.progressRing.style.strokeDashoffset = RING_C;
