/** Computação em Nuvem — modos e simulado */

const CLOUD_PROVA_CONFIG = {
  count: 20,
};

const CLOUD_QUICK_CONFIG = {
  count: 20,
};

const CLOUD_MODES = {
  CLOUD_ALL: { label: 'Completo', count: 100 },
  CLOUD_QUICK: { label: 'Treino Rápido', count: CLOUD_QUICK_CONFIG.count },
  CLOUD_UNIT: { label: 'Por Tema', count: null },
  CLOUD_PROVA: { label: 'Simulado PROVA', count: CLOUD_PROVA_CONFIG.count },
};

function isCloudMode(mode) {
  return typeof mode === 'string' && mode.startsWith('CLOUD_');
}

function isCloudProvaMode(mode) {
  return mode === 'CLOUD_PROVA';
}

function isCloudSimuladoMode(mode) {
  return isCloudProvaMode(mode);
}

function cloudModeIgnoresUnitFilter(mode) {
  return mode === 'CLOUD_ALL' || isCloudProvaMode(mode) || mode === 'CLOUD_QUICK';
}

function getCloudUniqueUnits(questions) {
  return [...new Set(questions.map(q => q.unit).filter(Boolean))].sort();
}

function pickRandomCloud(arr, count, rng = Math.random) {
  const pool = [...arr];
  const picked = [];
  while (picked.length < count && pool.length) {
    const i = Math.floor(rng() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked;
}

function buildCloudQuestionPool(mode, unitFilter = '') {
  const all = typeof CLOUD_QUESTIONS !== 'undefined' ? CLOUD_QUESTIONS : [];
  if (!all.length) return [];

  if (mode === 'CLOUD_ALL') {
    return unitFilter ? all.filter(q => q.unit === unitFilter) : [...all];
  }

  if (mode === 'CLOUD_UNIT') {
    if (!unitFilter) return [...all];
    return all.filter(q => q.unit === unitFilter);
  }

  if (mode === 'CLOUD_QUICK') {
    const base = unitFilter ? all.filter(q => q.unit === unitFilter) : all;
    return pickRandomCloud(base, Math.min(CLOUD_QUICK_CONFIG.count, base.length));
  }

  return all.filter(q => !unitFilter || q.unit === unitFilter);
}

function buildCloudProvaExam(questions) {
  const pool = [...questions];
  const { count } = CLOUD_PROVA_CONFIG;
  if (pool.length < count) {
    throw new Error(`Nuvem insuficiente: precisa ${count}, tem ${pool.length}`);
  }
  return pickRandomCloud(pool, count).map(q => ({ ...q, provaSection: 'PROVA' }));
}

function cloudModeLabel(mode) {
  return CLOUD_MODES[mode]?.label || mode;
}
