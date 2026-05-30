/**
 * Extrai questões dos PDFs CPL (Compiladores N1 + N2) → js/cpl-questions.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PDF_PATHS = {
  N1: 'c:/Users/fenkp/Downloads/CPL - Questionário 30 - Prova N1.pdf',
  N2: 'c:/Users/fenkp/Downloads/CPL - Questionário 48 - Prova N2.pdf',
};

const OUTPUT = path.join(ROOT, 'js', 'cpl-questions.js');
const PUBLIC_OUTPUT = path.join(ROOT, 'public', 'js', 'cpl-questions.js');

/** N2-43…48 — questões com código Java (CifraCesar, Vigenere, RC4). */
export const CPL_N2_CODE_IDS = [
  'N2-43', 'N2-44', 'N2-45', 'N2-46', 'N2-47', 'N2-48',
];

const ANSWER_OVERRIDES = {};

function cleanPdfText(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/UNIVERSIDADE ANHANGUERA[\s\S]*?Público\n/g, '')
    .replace(/-- \d+ of \d+ --/g, '\n')
    .replace(/Página \d+ de \d+\n/g, '')
    .replace(/COMPILADORES\nQUESTIONÁRIO\n/g, '')
    .replace(/QUESTIONÁRIO PARA PROVA N[12]\nQuestões resolvidas e comentadas\n/g, '')
    .replace(/QUESTIONÁRIO PARA PROVA N[12]\n/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function fixBrokenMarkers(text) {
  return text.replace(/\n\)\s+/g, '\nD) ');
}

function normalizeSpaces(text) {
  return text.replace(/[ \t]+/g, ' ').replace(/\n+/g, '\n').trim();
}

function extractAnswer(block, questionId) {
  if (ANSWER_OVERRIDES[questionId]) return ANSWER_OVERRIDES[questionId];

  const gabaritoIdx = block.search(/Gabarito:|Justificativa e Análise|Explicação:/i);
  const searchIn = gabaritoIdx >= 0 ? block.slice(gabaritoIdx) : block;

  const patterns = [
    /Gabarito:\s*([a-eA-E])\b/i,
    /Gabarito:\s*\n\s*([a-eA-E])\)/i,
    /Alternativa correta:\s*([a-eA-E])\b/i,
    /Resposta:\s*([a-eA-E])\b/i,
  ];

  for (const pattern of patterns) {
    const match = searchIn.match(pattern);
    if (match) return match[1].toLowerCase();
  }

  return null;
}

function findOptionMarkers(text, exam) {
  const letters = exam === 'N1' ? 'abcde' : 'ABCDE';
  const markers = [];

  for (const letter of letters) {
    const re = new RegExp(`(?:^|[\\s\\n.])([${letter}])\\)\\s*`, 'gm');
    let match;
    while ((match = re.exec(text)) !== null) {
      const l = match[1].toLowerCase();
      if (!markers.some(m => m.letter === l)) {
        markers.push({
          letter: l,
          index: match.index + match[0].indexOf(`${match[1]})`),
          endOfMarker: match.index + match[0].length,
        });
        break;
      }
    }
  }

  if (markers.length !== 5) {
    const fallback = [...text.matchAll(/(?:^|[\s\n.])([a-eA-E])\)\s*/gm)];
    const seen = new Set();
    const ordered = [];
    for (const m of fallback) {
      const letter = m[1].toLowerCase();
      if (!seen.has(letter)) {
        seen.add(letter);
        ordered.push({
          letter,
          index: m.index + m[0].indexOf(`${m[1]})`),
          endOfMarker: m.index + m[0].length,
        });
      }
    }
    ordered.sort((a, b) => a.index - b.index);
    if (ordered.length === 5) return ordered;
  }

  return markers.sort((a, b) => a.index - b.index);
}

function splitQuestionBlock(block, exam) {
  const stopIdx = block.search(/Gabarito:|Justificativa e Análise|Explicação:/i);
  const body = stopIdx >= 0 ? block.slice(0, stopIdx) : block;

  const headerMatch = body.match(/^Questão\s+(\d{1,2})(?:\s*\([^)]*\))?\s*\n?/i);
  if (!headerMatch) return null;

  const num = parseInt(headerMatch[1], 10);
  const afterHeader = fixBrokenMarkers(body.slice(headerMatch[0].length));
  const markers = findOptionMarkers(afterHeader, exam);

  if (markers.length !== 5) {
    throw new Error(`${exam} Q${String(num).padStart(2, '0')}: esperadas 5 alternativas, encontradas ${markers.length}`);
  }

  const text = normalizeSpaces(afterHeader.slice(0, markers[0].index));
  const options = markers.map((marker, i) => {
    const start = marker.endOfMarker;
    const end = i < 4 ? markers[i + 1].index : afterHeader.length;
    return normalizeSpaces(afterHeader.slice(start, end));
  });

  const answer = extractAnswer(block, `${exam}-${String(num).padStart(2, '0')}`);
  if (!answer) {
    throw new Error(`${exam} Q${String(num).padStart(2, '0')}: gabarito não encontrado`);
  }

  return { num, text, options, answer };
}

function parseExamText(text, exam) {
  const cleaned = cleanPdfText(text);
  const blocks = cleaned.split(/(?=Questão\s+\d{1,2}(?:\s*\(|[\s\n]))/i).filter(b => /^Questão/i.test(b));

  const questions = [];
  for (const block of blocks) {
    const parsed = splitQuestionBlock(block, exam);
    if (!parsed) continue;

    const id = `${exam}-${String(parsed.num).padStart(2, '0')}`;
    const question = {
      id,
      exam,
      text: parsed.text,
      options: parsed.options,
      answer: parsed.answer,
    };

    if (CPL_N2_CODE_IDS.includes(id)) {
      question.hasCode = true;
    }

    questions.push(question);
  }

  questions.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  return questions;
}

async function extractPdfText(pdfPath) {
  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: buf });
  const result = await parser.getText();
  await parser.destroy();
  return result.text;
}

function verifyQuestions(questions) {
  const letters = ['a', 'b', 'c', 'd', 'e'];
  for (const q of questions) {
    if (q.options.length !== 5) throw new Error(`${q.id}: ${q.options.length} opções`);
    if (!letters.includes(q.answer)) throw new Error(`${q.id}: gabarito inválido`);
    const idx = letters.indexOf(q.answer);
    if (!q.options[idx]?.trim()) throw new Error(`${q.id}: alt ${q.answer} vazia`);
  }
  console.log(`✓ ${questions.length} questões verificadas`);
}

function writeOutput(questions) {
  const payload = questions.map((q, i) => ({ ...q, number: i + 1 }));
  const content = `/** Gerado por scripts/build-cpl-questions.mjs — ${payload.length} questões CPL */\nconst CPL_QUESTIONS = ${JSON.stringify(payload, null, 2)};\n`;
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, content, 'utf8');
  fs.mkdirSync(path.dirname(PUBLIC_OUTPUT), { recursive: true });
  fs.writeFileSync(PUBLIC_OUTPUT, content, 'utf8');
}

async function main() {
  console.log('Extraindo CPL N1...');
  const n1Text = await extractPdfText(PDF_PATHS.N1);
  console.log('Extraindo CPL N2...');
  const n2Text = await extractPdfText(PDF_PATHS.N2);

  const n1 = parseExamText(n1Text, 'N1');
  const n2 = parseExamText(n2Text, 'N2');
  const all = [...n1, ...n2];

  if (n1.length !== 30) throw new Error(`N1: esperadas 30, obtidas ${n1.length}`);
  if (n2.length !== 48) throw new Error(`N2: esperadas 48, obtidas ${n2.length}`);

  verifyQuestions(all);
  writeOutput(all);

  const dist = {};
  all.forEach(q => { dist[q.answer] = (dist[q.answer] || 0) + 1; });
  console.log('Gabaritos:', dist);
  console.log(`✓ N1: ${n1.length} | N2: ${n2.length} | Código: ${n2.filter(q => q.hasCode).length}`);
  console.log(`✓ ${OUTPUT}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
