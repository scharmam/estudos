import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const patterns = [
  /Gabarito:\s*([a-eA-E])\)/i,
  /Gabarito:\s*Alternativa\s+([a-eA-E])\)/i,
  /Alternativa correta:\s*([a-eA-E])\b/i,
  /Resposta:\s*([a-eA-E])\b/i,
];

function extractAnswer(block) {
  for (const pattern of patterns) {
    const match = block.match(pattern);
    if (match) return match[1].toLowerCase();
  }
  return null;
}

function extractAllGabaritoLines(block) {
  const lines = [];
  const re = /Gabarito[^:\n]*:\s*([^\n]+)/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    lines.push(m[0].trim());
  }
  return lines;
}

const raw = fs.readFileSync(path.join(__dirname, 'n2-raw.txt'), 'utf8');
const blocks = raw.split(/(?=Questão\s+\d{1,2}(?:\s*\(|[\s\n]))/i).filter(b => /^Questão/i.test(b));

const pdfAnswers = [];
for (const block of blocks) {
  const m = block.match(/^Questão\s+(\d{1,2})/i);
  if (!m) continue;
  const num = parseInt(m[1], 10);
  pdfAnswers.push({
    num,
    id: `N2-${String(num).padStart(2, '0')}`,
    ans: extractAnswer(block),
    gabaritoLines: extractAllGabaritoLines(block),
  });
}

const counts = {};
pdfAnswers.forEach(a => {
  if (a.ans) counts[a.ans] = (counts[a.ans] || 0) + 1;
});

console.log('=== PDF N2 ===');
console.log('Questões encontradas:', pdfAnswers.length);
console.log('Distribuição (parser atual):', counts);
console.log('Sem gabarito:', pdfAnswers.filter(a => !a.ans).map(a => a.id));

const qtext = fs.readFileSync(path.join(ROOT, 'public/js/questions.js'), 'utf8');
eval(qtext);
const n2game = QUESTIONS.filter(q => q.exam === 'N2');

const gameCounts = {};
n2game.forEach(q => { gameCounts[q.answer] = (gameCounts[q.answer] || 0) + 1; });
console.log('\n=== JOGO N2 ===');
console.log('Total:', n2game.length);
console.log('Distribuição:', gameCounts);

const diffs = [];
for (const pa of pdfAnswers) {
  const gq = n2game.find(q => q.id === pa.id);
  if (!gq) { diffs.push({ id: pa.id, issue: 'missing in game' }); continue; }
  if (pa.ans && gq.answer !== pa.ans) {
    diffs.push({ id: pa.id, pdf: pa.ans, game: gq.answer, lines: pa.gabaritoLines });
  }
}

console.log('\n=== DIFERENÇAS PDF vs JOGO ===');
console.log('Total diferenças:', diffs.length);
for (const d of diffs) {
  console.log(`${d.id}: PDF=${d.pdf ?? '?'} JOGO=${d.game ?? '?'} ${d.lines ? '| ' + d.lines.join(' | ') : d.issue ?? ''}`);
}

// Show sample gabarito lines from PDF for first 10 questions
console.log('\n=== AMOSTRA GABARITOS NO PDF (Q1-Q10) ===');
for (const pa of pdfAnswers.filter(p => p.num <= 10)) {
  console.log(`${pa.id}: parser=${pa.ans} | ${pa.gabaritoLines.join(' || ')}`);
}
