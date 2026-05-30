import fs from 'fs';
import vm from 'vm';

const code = fs.readFileSync('public/js/questions.js', 'utf8');
const sandbox = {};
vm.runInNewContext(code + '\nthis.QUESTIONS = QUESTIONS;', sandbox);
const { QUESTIONS } = sandbox;

const codeRe = /public void|public class|package Transformacoes|rasterizarRetaBresenham|Analise o c[oó]digo|Considere o c[oó]digo|trecho de c[oó]digo|c[oó]digo Java/i;

const n2code = QUESTIONS.filter(q => q.exam === 'N2' && codeRe.test(q.text)).map(q => q.id);
const n2plain = QUESTIONS.filter(q => q.exam === 'N2' && !codeRe.test(q.text)).map(q => q.id);

console.log('N2 com codigo:', n2code.length);
console.log(n2code.join(', '));
console.log('N2 sem codigo:', n2plain.length);
