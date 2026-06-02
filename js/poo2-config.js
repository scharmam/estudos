/** Programação Orientada a Objetos II — modos e simulado */

const POO2_PROVA_CONFIG = {
  count: 15,
};

const POO2_QUICK_CONFIG = {
  count: 15,
};

const POO2_MODES = {
  POO2_ALL: { label: 'Completo', count: null },
  POO2_UNIT: { label: 'Por Módulo', count: null },
  POO2_QUICK: { label: 'Treino Rápido', count: POO2_QUICK_CONFIG.count },
  POO2_CODE: { label: 'Só Código Java', count: null },
  POO2_PROVA: { label: 'Simulado PROVA', count: POO2_PROVA_CONFIG.count },
};

const POO2_CODE_QUESTION_IDS = [];

function initPoo2CodeIds() {
  if (typeof POO2_QUESTIONS === 'undefined') return;
  POO2_CODE_QUESTION_IDS.length = 0;
  POO2_QUESTIONS.filter(q => q.hasCode).forEach(q => POO2_CODE_QUESTION_IDS.push(q.id));
}

function isPoo2Mode(mode) {
  return typeof mode === 'string' && mode.startsWith('POO2_');
}

function isPoo2ProvaMode(mode) {
  return mode === 'POO2_PROVA';
}

function isPoo2CodeMode(mode) {
  return mode === 'POO2_CODE';
}

function isPoo2SimuladoMode(mode) {
  return isPoo2ProvaMode(mode);
}

function poo2ModeIgnoresUnitFilter(mode) {
  return mode === 'POO2_ALL' || isPoo2ProvaMode(mode) || mode === 'POO2_QUICK' || mode === 'POO2_CODE';
}

function getPoo2UniqueUnits(questions) {
  return [...new Set(questions.map(q => q.unit).filter(Boolean))].sort();
}

function pickRandomPoo2(arr, count, rng = Math.random) {
  const pool = [...arr];
  const picked = [];
  while (picked.length < count && pool.length) {
    const i = Math.floor(rng() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked;
}

function buildPoo2CodeQuestionPool(allQuestions, unitFilter = '') {
  initPoo2CodeIds();
  return allQuestions
    .filter(q => (q.hasCode || POO2_CODE_QUESTION_IDS.includes(q.id))
      && (!unitFilter || q.unit === unitFilter))
    .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

function buildPoo2QuestionPool(mode, unitFilter = '') {
  const all = typeof POO2_QUESTIONS !== 'undefined' ? POO2_QUESTIONS : [];
  if (!all.length) return [];

  if (mode === 'POO2_CODE') {
    return buildPoo2CodeQuestionPool(all, unitFilter);
  }

  if (mode === 'POO2_ALL') {
    return unitFilter ? all.filter(q => q.unit === unitFilter) : [...all];
  }

  if (mode === 'POO2_UNIT') {
    if (!unitFilter) return [...all];
    return all.filter(q => q.unit === unitFilter);
  }

  if (mode === 'POO2_QUICK') {
    const base = unitFilter ? all.filter(q => q.unit === unitFilter) : all;
    return pickRandomPoo2(base, Math.min(POO2_QUICK_CONFIG.count, base.length));
  }

  return all.filter(q => !unitFilter || q.unit === unitFilter);
}

function buildPoo2ProvaExam(questions) {
  const pool = [...questions];
  const { count } = POO2_PROVA_CONFIG;
  if (pool.length < count) {
    throw new Error(`POO2 insuficiente: precisa ${count}, tem ${pool.length}`);
  }
  const units = getPoo2UniqueUnits(pool);
  const perUnit = Math.max(1, Math.floor(count / units.length));
  const picked = [];
  const used = new Set();

  for (const unit of units) {
    const unitQs = pool.filter(q => q.unit === unit && !used.has(q.id));
    const take = pickRandomPoo2(unitQs, Math.min(perUnit, unitQs.length));
    take.forEach(q => { picked.push(q); used.add(q.id); });
  }

  const remaining = pool.filter(q => !used.has(q.id));
  while (picked.length < count && remaining.length) {
    const i = Math.floor(Math.random() * remaining.length);
    const [q] = remaining.splice(i, 1);
    picked.push(q);
    used.add(q.id);
  }

  return pickRandomPoo2(picked, count).map(q => ({ ...q, provaSection: 'PROVA' }));
}

function poo2ModeLabel(mode) {
  return POO2_MODES[mode]?.label || mode;
}
