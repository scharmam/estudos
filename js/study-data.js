/** Dicas por questão (quando disponível) e por unidade. */
const QUESTION_HINTS = {
  'N1-01': 'Classificação de imagem = extrair características (features) para decidir a categoria.',
  'N1-02': 'Visualização 3D interativa sobre volume de RM → síntese de imagens + processamento.',
  'N1-03': 'RA posiciona objeto virtual sobre cena real → filtragem/segmentação da câmera.',
  'N1-04': 'RGB = primárias aditivas; HSL separa matiz, saturação e luminância.',
  'N1-05': 'Vetorial = equações no contínuo → escala sem perda (chaveiro até outdoor).',
  'N1-06': 'Visão computacional trabalha com imagens capturadas → matriciais (discretas).',
};

const UNIT_HINTS = {
  U1S2: 'Subáreas da CGPI, RA, modelos de cor (RGB, HSL, CMY).',
  U1S3: 'Raster vs vetorial, resolução, digitalização e formatos.',
  U2S2: 'Pipeline gráfico, transformações e coordenadas.',
  Inéditas: 'Questões extras — revise conceitos transversais de CGPI.',
  Java: 'Implementação Java aplicada aos conceitos de imagem/gráficos.',
};

const CONCEPT_COMPARISONS = [
  {
    id: 'raster-vs-vetor',
    title: 'Raster vs Vetorial',
    rows: [
      { label: 'Representação', a: 'Matriz de pixels (discreto)', b: 'Equações geométricas (contínuo)' },
      { label: 'Escala', a: 'Perde qualidade ao ampliar', b: 'Escala sem distorção' },
      { label: 'Uso típico', a: 'Fotos, visão computacional', b: 'Logos, ilustração, CAD' },
      { label: 'Subárea CGPI', a: 'Processamento de imagens', b: 'Modelagem / síntese' },
    ],
  },
  {
    id: 'rgb-vs-cmy',
    title: 'RGB vs CMY(K)',
    rows: [
      { label: 'Tipo', a: 'Aditivo (luz)', b: 'Subtrativo (tinta/papel)' },
      { label: 'Primárias', a: 'Vermelho, Verde, Azul', b: 'Ciano, Magenta, Amarelo' },
      { label: 'Uso', a: 'Monitores, telas', b: 'Impressão' },
      { label: 'Branco', a: 'Soma das cores = branco', b: 'Ausência de cor = branco' },
    ],
  },
  {
    id: 'rgb-vs-hsl',
    title: 'RGB vs HSL',
    rows: [
      { label: 'Componentes', a: 'R, G, B', b: 'Matiz, Saturação, Luminância' },
      { label: 'Vantagem', a: 'Captura de cor por canal', b: 'Ajuste intuitivo de brilho/saturação' },
      { label: 'Processamento', a: 'Operações por canal', b: 'Edição de cor mais natural' },
    ],
  },
  {
    id: 'pi-vs-cv',
    title: 'Processamento de Imagens vs Visão Computacional',
    rows: [
      { label: 'Foco', a: 'Melhorar/analisar a imagem', b: 'Extrair significado da cena' },
      { label: 'Exemplos', a: 'Filtros, compressão, segmentação', b: 'Reconhecimento, rastreamento' },
      { label: 'Saída', a: 'Nova imagem ou mapa', b: 'Decisão / descrição da cena' },
    ],
  },
  {
    id: '2d-vs-3d',
    title: 'Imagem 2D vs Modelagem 3D',
    rows: [
      { label: 'Dados', a: 'Pixels ou vetores planos', b: 'Malha, vértices, superfícies' },
      { label: 'Pipeline', a: 'Captura → processamento', b: 'Modelagem → renderização' },
      { label: 'Aplicação', a: 'Fotos, filtros', b: 'Jogos, simulação, VR' },
    ],
  },
];

function getQuestionHint(q) {
  if (QUESTION_HINTS[q.id]) return QUESTION_HINTS[q.id];
  if (q.unit && UNIT_HINTS[q.unit]) return UNIT_HINTS[q.unit];
  const ans = q.options[['a', 'b', 'c', 'd', 'e'].indexOf(q.answer)];
  return `Gabarito ${q.answer.toUpperCase()}: ${ans}. Releia o enunciado e elimine alternativas incoerentes.`;
}

function getUniqueUnits(questions) {
  const units = new Set();
  questions.forEach(q => { if (q.unit) units.add(q.unit); });
  return [...units].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}
