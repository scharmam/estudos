/** Simulado PROVA — 15 questões: 8 N1 + 3 N2 + 4 N2 com código Java (PDF N2). */
const PROVA_CONFIG = {
  total: 15,
  n1Count: 8,
  n2RegularCount: 3,
  n2CodeCount: 4,
};

/** Simulado só do bloco de código da prova N2 — 4 questões aleatórias do PDF. */
const N2_CODE_PROVA_CONFIG = {
  count: PROVA_CONFIG.n2CodeCount,
};

/** Questões N2-43…N54 do PDF — trechos com código Java (Bresenham, TranslacaoExemplo, RotacaoExemplo). */
const N2_CODE_QUESTION_IDS = [
  'N2-43', 'N2-44', 'N2-45', 'N2-46', 'N2-47', 'N2-48', 'N2-49',
  'N2-50', 'N2-51', 'N2-52', 'N2-53', 'N2-54',
];

function questionHasCode(q) {
  if (q.hasCode === true) return true;
  if (N2_CODE_QUESTION_IDS.includes(q.id)) return true;
  if (typeof CPL_N2_CODE_QUESTION_IDS !== 'undefined' && CPL_N2_CODE_QUESTION_IDS.includes(q.id)) {
    return true;
  }
  return false;
}

/** Pool completo das questões com código Java do PDF N2. */
function buildCodeQuestionPool(allQuestions, unitFilter = '') {
  const idOrder = new Map(N2_CODE_QUESTION_IDS.map((id, i) => [id, i]));
  return allQuestions
    .filter(q => questionHasCode(q) && (!unitFilter || q.unit === unitFilter))
    .sort((a, b) => (idOrder.get(a.id) ?? 99) - (idOrder.get(b.id) ?? 99));
}

function pickRandom(arr, count, rng = Math.random) {
  const pool = [...arr];
  const picked = [];
  while (picked.length < count && pool.length) {
    const i = Math.floor(rng() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked;
}

/** Monta a prova na ordem fixa: N1 → N2 teórica → N2 código. */
function buildProvaExam(allQuestions) {
  const n1Pool = allQuestions.filter(q => q.exam === 'N1');
  const n2CodeIds = new Set(N2_CODE_QUESTION_IDS);
  const n2CodePool = allQuestions.filter(q => q.exam === 'N2' && n2CodeIds.has(q.id));
  const n2RegularPool = allQuestions.filter(q => q.exam === 'N2' && !n2CodeIds.has(q.id));

  const { n1Count, n2RegularCount, n2CodeCount } = PROVA_CONFIG;

  if (n1Pool.length < n1Count) throw new Error(`N1 insuficiente: precisa ${n1Count}, tem ${n1Pool.length}`);
  if (n2RegularPool.length < n2RegularCount) {
    throw new Error(`N2 teórica insuficiente: precisa ${n2RegularCount}, tem ${n2RegularPool.length}`);
  }
  if (n2CodePool.length < n2CodeCount) {
    throw new Error(`N2 código insuficiente: precisa ${n2CodeCount}, tem ${n2CodePool.length}`);
  }

  const n1 = pickRandom(n1Pool, n1Count);
  const n2reg = pickRandom(n2RegularPool, n2RegularCount);
  const n2code = pickRandom(n2CodePool, n2CodeCount);

  return [
    ...n1.map(q => ({ ...q, provaSection: 'N1' })),
    ...n2reg.map(q => ({ ...q, provaSection: 'N2' })),
    ...n2code.map(q => ({ ...q, provaSection: 'N2-CODIGO' })),
  ];
}

/** Simulado N2 — só código Java: 4 questões aleatórias (mesmo bloco da prova real). */
function buildN2CodeProvaExam(allQuestions) {
  const n2CodeIds = new Set(N2_CODE_QUESTION_IDS);
  const n2CodePool = allQuestions.filter(q => q.exam === 'N2' && n2CodeIds.has(q.id));
  const { count } = N2_CODE_PROVA_CONFIG;

  if (n2CodePool.length < count) {
    throw new Error(`N2 código insuficiente: precisa ${count}, tem ${n2CodePool.length}`);
  }

  const picked = pickRandom(n2CodePool, count);
  const idOrder = new Map(N2_CODE_QUESTION_IDS.map((id, i) => [id, i]));
  picked.sort((a, b) => (idOrder.get(a.id) ?? 99) - (idOrder.get(b.id) ?? 99));

  return picked.map(q => ({ ...q, provaSection: 'N2-CODIGO' }));
}

function getProvaSectionLabel(q, indexInSection, sectionTotal) {
  if (q.provaSection === 'N1') return `N1 · ${indexInSection}/${sectionTotal}`;
  if (q.provaSection === 'N2-CODIGO') return `N2 · Código · ${indexInSection}/${sectionTotal}`;
  return `N2 · ${indexInSection}/${sectionTotal}`;
}

/** Separa enunciado + bloco de código + pergunta final (fallback legado). */
function splitQuestionText(text) {
  const split = splitTextAroundCode(text);
  if (!split.code) return { intro: text, code: null, outro: null };
  return split;
}

function escapeHtmlProva(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function mountQuestionText(q, textEl, codeEl) {
  const codeParts = questionHasCode(q) ? resolveCodeQuestionDisplay(q) : null;

  if (!codeParts?.code) {
    const legacy = splitQuestionText(q.text);
    if (legacy.code) {
      textEl.hidden = false;
      textEl.textContent = legacy.intro;
      codeEl.hidden = false;
      codeEl.innerHTML = buildCodePanelHtml({
        code: formatCollapsedJava(legacy.code),
        codeLabel: 'Código Java',
        outro: legacy.outro,
      }) + (legacy.outro
        ? `<p class="question-card__text question-card__text--outro">${escapeHtmlProva(legacy.outro)}</p>`
        : '');
      return;
    }
    textEl.hidden = false;
    textEl.textContent = q.text;
    codeEl.hidden = true;
    codeEl.innerHTML = '';
    return;
  }

  textEl.hidden = false;
  textEl.textContent = codeParts.intro || '';
  textEl.style.display = codeParts.intro ? '' : 'none';

  codeEl.hidden = false;
  const outroHtml = codeParts.outro
    ? `<p class="question-card__text question-card__text--outro">${escapeHtmlProva(codeParts.outro)}</p>`
    : '';
  codeEl.innerHTML = buildCodePanelHtml(codeParts) + outroHtml;
}
