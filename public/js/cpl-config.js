/** Compiladores — simulados e pool de questões com código Java */

const CPL_PROVA_CONFIG = {
  total: 15,
  n1Count: 8,
  n2RegularCount: 4,
  n2CodeCount: 3,
};

const CPL_N2_CODE_PROVA_CONFIG = {
  count: 4,
};

const CPL_N2_CODE_QUESTION_IDS = [
  'N2-43', 'N2-44', 'N2-45', 'N2-46', 'N2-47', 'N2-48',
];

function cplQuestionHasCode(q) {
  return q.hasCode === true || CPL_N2_CODE_QUESTION_IDS.includes(q.id);
}

function buildCplCodeQuestionPool(allQuestions, unitFilter = '') {
  const idOrder = new Map(CPL_N2_CODE_QUESTION_IDS.map((id, i) => [id, i]));
  return allQuestions
    .filter(q => cplQuestionHasCode(q) && (!unitFilter || q.unit === unitFilter))
    .sort((a, b) => (idOrder.get(a.id) ?? 99) - (idOrder.get(b.id) ?? 99));
}

function buildCplProvaExam(allQuestions) {
  const n1Pool = allQuestions.filter(q => q.exam === 'N1');
  const codeIds = new Set(CPL_N2_CODE_QUESTION_IDS);
  const n2CodePool = allQuestions.filter(q => q.exam === 'N2' && codeIds.has(q.id));
  const n2RegularPool = allQuestions.filter(q => q.exam === 'N2' && !codeIds.has(q.id));
  const { n1Count, n2RegularCount, n2CodeCount } = CPL_PROVA_CONFIG;

  if (n1Pool.length < n1Count) throw new Error(`CPL N1 insuficiente: ${n1Pool.length}/${n1Count}`);
  if (n2RegularPool.length < n2RegularCount) {
    throw new Error(`CPL N2 teórica insuficiente: ${n2RegularPool.length}/${n2RegularCount}`);
  }
  if (n2CodePool.length < n2CodeCount) {
    throw new Error(`CPL N2 código insuficiente: ${n2CodePool.length}/${n2CodeCount}`);
  }

  const n1 = pickRandomCpl(n1Pool, n1Count);
  const n2reg = pickRandomCpl(n2RegularPool, n2RegularCount);
  const n2code = pickRandomCpl(n2CodePool, n2CodeCount);

  return [
    ...n1.map(q => ({ ...q, provaSection: 'N1' })),
    ...n2reg.map(q => ({ ...q, provaSection: 'N2' })),
    ...n2code.map(q => ({ ...q, provaSection: 'N2-CODIGO' })),
  ];
}

function buildCplN2CodeProvaExam(allQuestions) {
  const codeIds = new Set(CPL_N2_CODE_QUESTION_IDS);
  const pool = allQuestions.filter(q => q.exam === 'N2' && codeIds.has(q.id));
  const { count } = CPL_N2_CODE_PROVA_CONFIG;
  if (pool.length < count) throw new Error(`CPL código insuficiente: ${pool.length}/${count}`);
  const picked = pickRandomCpl(pool, count);
  const idOrder = new Map(CPL_N2_CODE_QUESTION_IDS.map((id, i) => [id, i]));
  picked.sort((a, b) => (idOrder.get(a.id) ?? 99) - (idOrder.get(b.id) ?? 99));
  return picked.map(q => ({ ...q, provaSection: 'N2-CODIGO' }));
}

function pickRandomCpl(arr, count, rng = Math.random) {
  const pool = [...arr];
  const picked = [];
  while (picked.length < count && pool.length) {
    const i = Math.floor(rng() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked;
}
