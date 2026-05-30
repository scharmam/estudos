/**
 * Extrai questões dos PDFs CGPI (N1 + N2) e gera public/js/questions.js
 * Uso: node scripts/build-questions.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PDF_PATHS = {
  N1: 'c:/Users/fenkp/Downloads/CGPI - Questionario 30 - Prova N1 (1).pdf',
  N2: 'c:/Users/fenkp/Downloads/CGPI - Questionario 50 ou mais - Prova N2 - Versão 2.pdf',
};

const OUTPUT = path.join(ROOT, 'public', 'js', 'questions.js');

/** Respostas confirmadas manualmente quando o PDF não traz letra explícita ou há erro no gabarito. */
const ANSWER_OVERRIDES = {
  'N1-07': 'c',
  'N1-10': 'c',
};

const UNIT_HEADERS = /^U\dS\d$/;
const INEDITAS_HEADER = /^QUEST[ÕO]ES IN[ÉE]DITAS$/i;

function cleanPdfText(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/UNIVERSIDADE ANHANGUERA[\s\S]*?Público(?:\tPúblico)?\n/g, '')
    .replace(/-- \d+ of \d+ --/g, '\n')
    .replace(/Página \d+ de \d+\n/g, '')
    .replace(/COMPUTAÇÃO GRÁFICA E PROCESSAMENTO DE IMAGENS\nQUESTIONÁRIO\n/g, '')
    .replace(/Questionário Resolvido e\s*\nComentado para Prova N[12]\n/g, '')
    .replace(/Questões do Material Didático\n/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function normalizeSpaces(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function extractAnswer(block, questionId) {
  if (ANSWER_OVERRIDES[questionId]) {
    return ANSWER_OVERRIDES[questionId];
  }

  // Buscar só na seção de gabarito — evita falso positivo em
  // "assinale a alternativa correta:\nA)" no enunciado.
  const gabaritoIdx = block.search(/Gabarito(?: Comentado)?:/i);
  const searchIn = gabaritoIdx >= 0 ? block.slice(gabaritoIdx) : block;

  const patterns = [
    /Alternativa correta:\s*([a-eA-E])\b/i,
    /Gabarito:\s*([a-eA-E])\)/i,
    /Gabarito:\s*Alternativa\s+([a-eA-E])\)/i,
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
    const re = new RegExp(`(?:^|[\\s.])([${letter}])\\)\\s`, 'g');
    let match;
    while ((match = re.exec(text)) !== null) {
      if (match[1] === letter || match[1] === letter.toUpperCase() || match[1] === letter.toLowerCase()) {
        markers.push({
          letter: match[1].toLowerCase(),
          index: match.index + match[0].indexOf(`${match[1]})`) ,
          endOfMarker: match.index + match[0].length,
        });
        break;
      }
    }
  }

  if (markers.length !== 5) {
    const fallback = [...text.matchAll(/(?:^|[\s.])([a-eA-E])\)\s/g)];
    if (fallback.length >= 5) {
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
  }

  return markers.sort((a, b) => a.index - b.index);
}

function splitQuestionBlock(block, exam) {
  const gabaritoIdx = block.search(/Gabarito(?: Comentado)?:|Explicação\/Comentário:/i);
  const body = gabaritoIdx >= 0 ? block.slice(0, gabaritoIdx) : block;

  const headerMatch = body.match(/^Questão\s+(\d{1,2})(?:\s*\([^)]*\))?\s*\n?/i);
  if (!headerMatch) return null;

  const num = parseInt(headerMatch[1], 10);
  const afterHeader = body.slice(headerMatch[0].length);
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

function resolveUnit(exam, num, titleLine, currentUnit, inIneditas) {
  if (exam === 'N2') return undefined;
  if (/Versão Programação Java/i.test(titleLine)) return 'Java';
  if (inIneditas && num >= 11) return 'Inéditas';
  return currentUnit || undefined;
}

function parseExamText(text, exam) {
  const cleaned = cleanPdfText(text);
  const blocks = cleaned.split(/(?=Questão\s+\d{1,2}(?:\s*\(|[\s\n]))/i).filter((b) => /^Questão/i.test(b));

  let currentUnit = null;
  let inIneditas = false;
  const questions = [];

  for (const block of blocks) {
    const headerLine = block.split('\n')[0];
    const unitLine = block.match(/^(U\dS\d)$/m);
    if (unitLine) currentUnit = unitLine[1];

    if (INEDITAS_HEADER.test(block.split('\n').find((l) => INEDITAS_HEADER.test(l.trim())) || '')) {
      inIneditas = true;
    }

    const parsed = splitQuestionBlock(block, exam);
    if (!parsed) continue;

    const id = `${exam}-${String(parsed.num).padStart(2, '0')}`;
    const unit = resolveUnit(exam, parsed.num, headerLine, currentUnit, inIneditas);

    const question = {
      id,
      exam,
      text: parsed.text,
      options: parsed.options,
      answer: parsed.answer,
    };

    if (unit) question.unit = unit;
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

function ensurePublicAssets() {
  const publicDir = path.join(ROOT, 'public');
  const pairs = [
    ['index.html', 'index.html'],
    [path.join('css', 'style.css'), path.join('css', 'style.css')],
    [path.join('js', 'app.js'), path.join('js', 'app.js')],
    [path.join('js', 'study.js'), path.join('js', 'study.js')],
    [path.join('js', 'study-data.js'), path.join('js', 'study-data.js')],
    [path.join('js', 'memory-store.js'), path.join('js', 'memory-store.js')],
    [path.join('js', 'code-display.js'), path.join('js', 'code-display.js')],
    [path.join('js', 'prova-config.js'), path.join('js', 'prova-config.js')],
  ];

  fs.mkdirSync(path.join(publicDir, 'css'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'js'), { recursive: true });

  for (const [src, dest] of pairs) {
    const from = path.join(ROOT, src);
    const to = path.join(publicDir, dest);
    if (fs.existsSync(from)) {
      fs.copyFileSync(from, to);
    }
  }
}

function writeQuestionsJs(questions) {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  const payload = questions.map((q, i) => ({ ...q, number: i + 1 }));
  verifyQuestionsOrder(payload);
  const content = `const QUESTIONS = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(OUTPUT, content, 'utf8');
}

/** Garante ordem A→E do PDF: 5 opções, gabarito válido, índice bate com a letra. */
function verifyQuestionsOrder(questions) {
  const letters = ['a', 'b', 'c', 'd', 'e'];
  let ok = 0;

  for (const q of questions) {
    if (q.options.length !== 5) {
      throw new Error(`${q.id}: esperadas 5 alternativas na ordem do PDF, encontradas ${q.options.length}`);
    }
    if (!letters.includes(q.answer)) {
      throw new Error(`${q.id}: gabarito inválido "${q.answer}"`);
    }
    const idx = letters.indexOf(q.answer);
    if (!q.options[idx] || !q.options[idx].trim()) {
      throw new Error(`${q.id}: alternativa ${q.answer.toUpperCase()} vazia ou fora de ordem`);
    }
    ok++;
  }

  console.log(`✓ Ordem das alternativas verificada: ${ok} questões (A→E conforme PDF)`);
}

async function main() {
  console.log('Extraindo PDF N1...');
  const n1Text = await extractPdfText(PDF_PATHS.N1);
  console.log('Extraindo PDF N2...');
  const n2Text = await extractPdfText(PDF_PATHS.N2);

  const n1 = parseExamText(n1Text, 'N1');
  const n2 = parseExamText(n2Text, 'N2');
  const all = [...n1, ...n2];

  if (n1.length !== 30) {
    throw new Error(`N1: esperadas 30 questões, obtidas ${n1.length}`);
  }
  if (n2.length !== 54) {
    throw new Error(`N2: esperadas 54 questões, obtidas ${n2.length}`);
  }
  if (all.length !== 84) {
    throw new Error(`Total: esperadas 84 questões, obtidas ${all.length}`);
  }

  ensurePublicAssets();
  writeQuestionsJs(all);

  const n2dist = {};
  n2.forEach(q => { n2dist[q.answer] = (n2dist[q.answer] || 0) + 1; });
  console.log(`✓ N2 gabaritos: ${JSON.stringify(n2dist)}`);

  console.log(`\n✓ Gerado: ${OUTPUT}`);
  console.log(`✓ Total: ${all.length} questões (N1: ${n1.length}, N2: ${n2.length})`);
  console.log(`✓ public/index.html, public/css/style.css, public/js/app.js`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
