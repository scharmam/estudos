import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CLOUD_UNITS } from './cloud-question-bank.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'js', 'cloud-questions.js');

function fixPt(str) {
  return String(str)
    .replace(/\bModularizacao\b/g, 'Modularização')
    .replace(/\bArquitetura Hibrida\b/g, 'Arquitetura Híbrida')
    .replace(/\bnao\b/g, 'não')
    .replace(/\bNao\b/g, 'Não')
    .replace(/\be\b/g, (m, off, s) => {
      const prev = s[off - 1];
      if (prev && /[a-záéíóúâêôãõ]/.test(prev)) return m;
      return m;
    });
}

const ACCENT_MAP = [
  [/Qual e /g, 'Qual é '],
  [/significa:/g, 'significa:'],
  [/indisponibilidade/g, 'indisponibilidade'],
  [/seguranca/g, 'segurança'],
  [/politicas/g, 'políticas'],
  [/variacao/g, 'variação'],
  [/contratacao/g, 'contratação'],
  [/cobranca/g, 'cobrança'],
  [/exclusao/g, 'exclusão'],
  [/criptografia/g, 'criptografia'],
  [/durabilidade/g, 'durabilidade'],
  [/disponibilidade/g, 'disponibilidade'],
  [/elasticidade/g, 'elasticidade'],
  [/redundancia/g, 'redundância'],
  [/migracao/g, 'migração'],
  [/integracao/g, 'integração'],
  [/implementacao/g, 'implementação'],
  [/distribuicao/g, 'distribuição'],
  [/execucao/g, 'execução'],
  [/decisao/g, 'decisão'],
  [/avaliacao/g, 'avaliação'],
  [/organizacao/g, 'organização'],
  [/autenticacao/g, 'autenticação'],
  [/autorizacao/g, 'autorização'],
  [/conexao/g, 'conexão'],
  [/aplicacao/g, 'aplicação'],
  [/informacao/g, 'informação'],
  [/operacao/g, 'operação'],
  [/solucao/g, 'solução'],
  [/producao/g, 'produção'],
  [/escalabilidade/g, 'escalabilidade'],
  [/virtualizacao/g, 'virtualização'],
  [/containerizacao/g, 'containerização'],
  [/orquestracao/g, 'orquestração'],
  [/sincronizacao/g, 'sincronização'],
  [/replicacao/g, 'replicação'],
  [/consistencia/g, 'consistência'],
  [/transacao/g, 'transação'],
  [/persistencia/g, 'persistência'],
  [/manutencao/g, 'manutenção'],
  [/configuracao/g, 'configuração'],
  [/identificacao/g, 'identificação'],
  [/classificacao/g, 'classificação'],
  [/priorizacao/g, 'priorização'],
  [/centralizacao/g, 'centralização'],
  [/descentralizacao/g, 'descentralização'],
  [/modularizacao/g, 'modularização'],
  [/hibrida/g, 'híbrida'],
  [/hibrido/g, 'híbrido'],
  [/unico/g, 'único'],
  [/unica/g, 'única'],
  [/unicos/g, 'únicos'],
  [/unicas/g, 'únicas'],
  [/indice/g, 'índice'],
  [/indices/g, 'índices'],
  [/metricas/g, 'métricas'],
  [/analise/g, 'análise'],
  [/codigo/g, 'código'],
  [/servico/g, 'serviço'],
  [/servicos/g, 'serviços'],
  [/beneficio/g, 'benefício'],
  [/beneficios/g, 'benefícios'],
  [/cenario/g, 'cenário'],
  [/cenarios/g, 'cenários'],
  [/numero/g, 'número'],
  [/numeros/g, 'números'],
  [/periodo/g, 'período'],
  [/tecnica/g, 'técnica'],
  [/tecnicas/g, 'técnicas'],
  [/critico/g, 'crítico'],
  [/critica/g, 'crítica'],
  [/logica/g, 'lógica'],
  [/fisico/g, 'físico'],
  [/fisica/g, 'física'],
  [/basico/g, 'básico'],
  [/basica/g, 'básica'],
  [/automatico/g, 'automático'],
  [/automatica/g, 'automática'],
  [/especifico/g, 'específico'],
  [/especifica/g, 'específica'],
  [/generico/g, 'genérico'],
  [/generica/g, 'genérica'],
  [/publico/g, 'público'],
  [/publica/g, 'pública'],
  [/privado/g, 'privado'],
  [/multiplos/g, 'múltiplos'],
  [/multiplas/g, 'múltiplas'],
  [/unico ponto/g, 'único ponto'],
  [/e responsavel/g, 'é responsável'],
  [/e um /g, 'é um '],
  [/e uma /g, 'é uma '],
  [/e o /g, 'é o '],
  [/e a /g, 'é a '],
  [/e principalmente/g, 'é principalmente'],
  [/e considerada/g, 'é considerada'],
  [/e considerado/g, 'é considerado'],
  [/e mais/g, 'é mais'],
  [/e menos/g, 'é menos'],
  [/nao /g, 'não '],
  [/ tambem /g, ' também '],
  [/ ate /g, ' até '],
  [/ ja /g, ' já '],
  [/ so /g, ' só '],
  [/ atraves /g, ' através '],
  [/ pos /g, ' pós '],
  [/ pre /g, ' pré '],
];

function applyAccents(text) {
  let out = fixPt(text);
  for (const [re, rep] of ACCENT_MAP) out = out.replace(re, rep);
  return out;
}

const questions = [];
let num = 0;
for (const unit of CLOUD_UNITS) {
  const unitName = applyAccents(unit.name);
  unit.questions.forEach((q, i) => {
    num += 1;
    questions.push({
      id: `CN-${String(num).padStart(3, '0')}`,
      exam: 'CLOUD',
      unit: unitName,
      unitSlug: unit.slug,
      text: applyAccents(q.text),
      options: q.options.map(applyAccents),
      answer: q.answer.toLowerCase(),
    });
  });
}

const header = `/** Gerado por scripts/build-cloud-questions.mjs — ${questions.length} questões */\n`;
const body = `const CLOUD_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(outPath, header + body, 'utf8');

const answers = questions.map(q => q.answer);
const dist = answers.reduce((a, x) => ((a[x] = (a[x] || 0) + 1), a), {});
console.log(`✓ ${questions.length} questões → ${outPath}`);
console.log('  Unidades:', CLOUD_UNITS.length);
console.log('  Gabaritos:', dist);
