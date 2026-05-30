import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const raw = fs.readFileSync(path.join(__dirname, 'n2-raw.txt'), 'utf8');
const blocks = raw.split(/(?=Questão\s+\d{1,2}(?:\s*\(|[\s\n]))/i).filter(b => /^Questão/i.test(b));

function extractFromGabaritoSection(block) {
  const idx = block.search(/Gabarito Comentado:/i);
  if (idx < 0) return null;
  const section = block.slice(idx);
  const patterns = [
    /Alternativa correta:\s*([A-Ea-e])\b/,
    /Gabarito:\s*([A-Ea-e])\)/,
    /Gabarito:\s*Alternativa\s+([A-Ea-e])\)/,
    /Resposta:\s*([A-Ea-e])\b/,
  ];
  for (const p of patterns) {
    const m = section.match(p);
    if (m) return m[1].toLowerCase();
  }
  return null;
}

function extractCurrentParser(block) {
  const patterns = [
    /Gabarito:\s*([a-eA-E])\)/i,
    /Gabarito:\s*Alternativa\s+([a-eA-E])\)/i,
    /Alternativa correta:\s*([a-eA-E])\b/i,
    /Resposta:\s*([a-eA-E])\b/i,
  ];
  for (const pattern of patterns) {
    const match = block.match(pattern);
    if (match) return match[1].toLowerCase();
  }
  return null;
}

const rows = [];
for (const block of blocks) {
  const m = block.match(/^Questão\s+(\d{1,2})/i);
  if (!m) continue;
  const num = parseInt(m[1], 10);
  const id = `N2-${String(num).padStart(2, '0')}`;
  const current = extractCurrentParser(block);
  const fixed = extractFromGabaritoSection(block);
  rows.push({ id, num, current, fixed, changed: current !== fixed });
}

const count = (key) => {
  const c = {};
  rows.forEach(r => { if (r[key]) c[r[key]] = (c[r[key]] || 0) + 1; });
  return c;
};

console.log('=== COMPARACAO PARSER ===');
console.log('Parser atual (bloco inteiro):', count('current'));
console.log('Parser corrigido (só Gabarito Comentado):', count('fixed'));
console.log('Mudancas:', rows.filter(r => r.changed).length);
console.log('\nQuestoes com gabarito diferente:');
for (const r of rows.filter(r => r.changed)) {
  console.log(`${r.id}: atual=${r.current} correto=${r.fixed}`);
}
