import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { POO2_UNITS } from './poo2-question-bank.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'js', 'poo2-questions.js');
const publicPath = path.join(__dirname, '..', 'public', 'js', 'poo2-questions.js');

const questions = [];
let num = 0;
for (const unit of POO2_UNITS) {
  unit.questions.forEach((q) => {
    num += 1;
    const item = {
      id: `POO2-${String(num).padStart(3, '0')}`,
      exam: 'POO2',
      unit: unit.name,
      unitSlug: unit.slug,
      text: q.text,
      options: q.options,
      answer: q.answer.toLowerCase(),
    };
    if (q.hasCode) item.hasCode = true;
    questions.push(item);
  });
}

const header = `/** Gerado por scripts/build-poo2-questions.mjs — ${questions.length} questões · Material POO II */\n`;
const body = `const POO2_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
const content = header + body;

fs.writeFileSync(outPath, content, 'utf8');
fs.writeFileSync(publicPath, content, 'utf8');

const dist = questions.reduce((a, q) => ((a[q.answer] = (a[q.answer] || 0) + 1), a), {});
const codeCount = questions.filter(q => q.hasCode).length;
console.log(`✓ ${questions.length} questões → ${outPath}`);
console.log('  Módulos:', POO2_UNITS.length);
console.log('  Com código:', codeCount);
console.log('  Gabaritos:', dist);
