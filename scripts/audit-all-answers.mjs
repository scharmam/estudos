/**
 * Verifica se questions.js bate com o PDF (mesma lógica do build-questions.mjs).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ANSWER_OVERRIDES = { 'N1-07': 'c', 'N1-10': 'c' };

function extractAnswerFixed(block, questionId) {
  if (!block) return null;
  if (ANSWER_OVERRIDES[questionId]) return ANSWER_OVERRIDES[questionId];
  const gabaritoIdx = block.search(/Gabarito(?: Comentado)?:/i);
  const searchIn = gabaritoIdx >= 0 ? block.slice(gabaritoIdx) : block;
  const patterns = [
    /Alternativa correta:\s*([a-eA-E])\b/i,
    /Gabarito:\s*([a-eA-E])\)/i,
    /Gabarito:\s*Alternativa\s+([a-eA-E])\)/i,
    /Resposta:\s*([a-eA-E])\b/i,
  ];
  for (const p of patterns) {
    const m = searchIn.match(p);
    if (m) return m[1].toLowerCase();
  }
  return null;
}

function extractAnswerOld(block) {
  if (!block) return null;
  const patterns = [
    /Gabarito:\s*([a-eA-E])\)/i,
    /Gabarito:\s*Alternativa\s+([a-eA-E])\)/i,
    /Alternativa correta:\s*([a-eA-E])\b/i,
    /Resposta:\s*([a-eA-E])\b/i,
  ];
  for (const p of patterns) {
    const m = block.match(p);
    if (m) return m[1].toLowerCase();
  }
  return null;
}

async function pdfText(p) {
  const parser = new PDFParse({ data: fs.readFileSync(p) });
  const r = await parser.getText();
  await parser.destroy();
  return r.text;
}

function loadQuestions() {
  const code = fs.readFileSync(path.join(ROOT, 'public/js/questions.js'), 'utf8').replace('const QUESTIONS', 'var QUESTIONS');
  const sandbox = {};
  vm.runInNewContext(code + '\nsandbox.Q = QUESTIONS;', { sandbox });
  return sandbox.Q;
}

function getBlocks(text) {
  return text.split(/(?=Questão\s+\d{1,2}(?:\s*\(|[\s\n]))/i).filter(b => /^Questão/i.test(b));
}

function getBlock(blocks, num) {
  return blocks.find(b => {
    const m = b.match(/^Questão\s+(\d{1,2})/i);
    return m && parseInt(m[1], 10) === num;
  });
}

function auditExam(blocks, count, exam, Q) {
  const oldVsFixed = [];
  const gameVsPdf = [];
  for (let n = 1; n <= count; n++) {
    const id = `${exam}-${String(n).padStart(2, '0')}`;
    const block = getBlock(blocks, n);
    const oldA = extractAnswerOld(block);
    const fixA = extractAnswerFixed(block, id);
    const gameQ = Q.find(q => q.id === id);
    if (oldA !== fixA) oldVsFixed.push({ id, old: oldA, fixed: fixA });
    if (gameQ && fixA && gameQ.answer !== fixA) gameVsPdf.push({ id, game: gameQ.answer, pdf: fixA });
    if (gameQ && !fixA) gameVsPdf.push({ id, game: gameQ.answer, pdf: 'MISSING' });
  }
  return { oldVsFixed, gameVsPdf };
}

const n1Text = await pdfText('c:/Users/fenkp/Downloads/CGPI - Questionario 30 - Prova N1 (1).pdf');
const n2Text = await pdfText('c:/Users/fenkp/Downloads/CGPI - Questionario 50 ou mais - Prova N2 - Versão 2.pdf');
const Q = loadQuestions();
const r1 = auditExam(getBlocks(n1Text), 30, 'N1', Q);
const r2 = auditExam(getBlocks(n2Text), 54, 'N2', Q);

console.log('=== N1 ===');
console.log('Parser antigo erraria (vs corrigido):', r1.oldVsFixed.length);
r1.oldVsFixed.forEach(d => console.log(`  ${d.id}: antigo=${d.old} correto=${d.fixed}`));
console.log('Jogo vs PDF:', r1.gameVsPdf.length, r1.gameVsPdf);

console.log('\n=== N2 ===');
console.log('Parser antigo erraria:', r2.oldVsFixed.length);
console.log('Jogo vs PDF:', r2.gameVsPdf.length, r2.gameVsPdf);

if (r1.gameVsPdf.length === 0 && r2.gameVsPdf.length === 0) {
  console.log('\n✓ Todas as 84 questões conferem com o PDF (parser corrigido).');
} else {
  console.log('\n✗ Há divergências — regenere com npm run build:questions');
  process.exit(1);
}
