const QUESTIONS = [
  {
    "id": "N1-01",
    "exam": "N1",
    "unit": "U1S1",
    "text": "Um professor desenvolveu um aplicativo para celular que permite registrar ocorrências de buracos nas ruas. O usuário tira uma foto e o aplicativo envia para um servidor. Foi desenvolvido um módulo que classifica a imagem como contendo ou não um buraco. Assinale o tipo de processamento usado para auxiliar essa classificação.",
    "options": [
      "Compressão.",
      "Captura.",
      "Extração de características.",
      "Reconstrução.",
      "Modelagem tridimensional."
    ],
    "answer": "c",
    "number": 1
  },
  {
    "id": "N1-02",
    "exam": "N1",
    "unit": "U1S1",
    "text": "Um neurocirurgião utiliza imagens de ressonância magnética e uma ferramenta interativa de visualização 3D do cérebro, que desenha sobre o crânio a posição menos invasiva para a incisão. Assinale as duas subáreas da computação gráfica a que esta ferramenta melhor se enquadra.",
    "options": [
      "Processamento de imagens e visão computacional.",
      "Visão computacional e modelagem tridimensional.",
      "Visão computacional e síntese de imagens.",
      "Processamento de imagens e síntese de imagens.",
      "Modelagem tridimensional e processamento de imagens."
    ],
    "answer": "d",
    "number": 2
  },
  {
    "id": "N1-03",
    "exam": "N1",
    "unit": "U1S1",
    "text": "A realidade aumentada sobrepõe objetos virtuais sobre imagens do mundo real. Sobre os processamentos gráficos de um app que mostra personagens virtuais sobre a câmera com base na geolocalização, assinale a alternativa correta.",
    "options": [
      "Captura e transformações para transportar a imagem ao ambiente de imersão virtual.",
      "Reconstrução 3D a partir de imagens capturadas de diferentes ângulos.",
      "Descompressão e transformações da imagem capturada sobreposta ao modelo virtual.",
      "Filtragem e segmentação da imagem da câmera para posicionar o objeto virtual.",
      "Digitalização de modelos para gerar imagem 2D sobreposta à câmera."
    ],
    "answer": "d",
    "number": 3
  },
  {
    "id": "N1-04",
    "exam": "N1",
    "unit": "U1S2",
    "text": "Sobre modelos de cor RGB e HSL, assinale a principal diferença entre eles.",
    "options": [
      "RGB é aditivo como CMY; HSL é subtrativo como Lab e YCbCr.",
      "RGB é composição de cores primárias; HSL é luminância e cromaticidade.",
      "RGB usa primárias do espectro; HSL usa cores secundárias.",
      "RGB tem luminância e cromaticidade; HSL usa primárias.",
      "RGB é subtrativo; HSL é aditivo."
    ],
    "answer": "b",
    "number": 4
  },
  {
    "id": "N1-05",
    "exam": "N1",
    "unit": "U1S2",
    "text": "Você deseja manter conteúdo gráfico de designers aplicável em chaveiros e outdoors. Assinale a melhor escolha e justificativa.",
    "options": [
      "Imagens matriciais, pois vetoriais não podem ser visualizadas sem vetorização.",
      "Imagens vetoriais, pois capturam cenas reais com impressões realísticas.",
      "Imagens matriciais, pois vetoriais não podem ser impressas sem digitalização.",
      "Imagens vetoriais, pois estão no espaço contínuo e podem ser ampliadas sem distorções.",
      "Imagens matriciais, pois no espaço discreto podem ser ampliadas sem distorções."
    ],
    "answer": "d",
    "number": 5
  },
  {
    "id": "N1-06",
    "exam": "N1",
    "unit": "U1S3",
    "text": "Qual tipo de imagem é utilizado pelos profissionais da subárea de visão computacional e por quê?",
    "options": [
      "Vetorial, pois descritores contínuos facilitam extração de informações.",
      "Matricial, pois visão computacional trabalha com imagens capturadas do mundo real.",
      "Ambos, pois visão computacional extrai informações de qualquer tipo.",
      "Vetorial, pois visão computacional analisa imagens sintéticas vetoriais.",
      "Matricial, pois visão computacional apenas aplica filtros de transformação."
    ],
    "answer": "b",
    "number": 6
  },
  {
    "id": "N1-07",
    "exam": "N1",
    "unit": "U1S3",
    "text": "Sobre o algoritmo de Bresenham para desenho de retas, assinale a alternativa verdadeira.",
    "options": [
      "Desenha apenas retas verticais e horizontais sobre coordenadas inteiras.",
      "Trabalha com variáveis reais exigindo aproximações da reta contínua.",
      "Prioriza variáveis inteiras para reduzir o custo computacional.",
      "Desenha apenas retas verticais, horizontais e diagonais perfeitas.",
      "Usa exclusivamente inteiros visando reduzir a complexidade assintótica."
    ],
    "answer": "c",
    "number": 7
  },
  {
    "id": "N1-08",
    "exam": "N1",
    "unit": "U1S3",
    "text": "Sobre o algoritmo de Bresenham para desenho de círculos em 2D, assinale a alternativa verdadeira.",
    "options": [
      "Itera sobre metade de uma coordenada e um quarto da outra, explorando simetria vertical.",
      "Itera sobre todos os valores de cada coordenada, pois o círculo discreto não tem simetrias.",
      "Itera sobre todos os valores de um eixo; a cada iteração dois pontos são desenhados pela simetria horizontal.",
      "Itera sobre um quarto dos valores de um eixo; os demais pontos vêm das simetrias horizontal, vertical e diagonal.",
      "Itera sobre metade dos valores de um eixo; os demais vêm das simetrias horizontal e vertical."
    ],
    "answer": "d",
    "number": 8
  },
  {
    "id": "N1-09",
    "exam": "N1",
    "unit": "U2S2",
    "text": "Sobre polilinhas, polígonos e poliedros, assinale a alternativa correta.",
    "options": [
      "Com polilinhas só é possível desenhar polígonos convexos simples.",
      "A estrutura de dados de polilinha é complexa pois armazena inclinações de todos os segmentos.",
      "Em 3D, três vértices garantem polígono simples, convexo e planar.",
      "Polilinha é mais simples que B-Spline pois B-Spline precisa de enorme número de pontos.",
      "Poliedros têm faces poligonais convexas e não necessariamente planares."
    ],
    "answer": "c",
    "number": 9
  },
  {
    "id": "N1-10",
    "exam": "N1",
    "unit": "U2S2",
    "text": "Sobre curvas de Bézier e B-Splines, assinale a alternativa correta.",
    "options": [
      "Bézier e B-Splines são splines idênticas com restrições geométricas diferentes.",
      "O número de pontos de controle de Bézier define a ordem do polinômio; B-Spline não.",
      "Bézier e B-Splines são definidas exclusivamente para o plano, não extensíveis a 3D.",
      "B-Splines são mais usadas porque suas equações são mais simples.",
      "B-Splines e Bézier são sequências de segmentos de reta para polígonos convexos."
    ],
    "answer": "b",
    "number": 10
  },
  {
    "id": "N1-11",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Sistema de logística lê códigos de barras em esteiras. Para isolar a região da etiqueta antes da leitura, assinale a sequência correta de etapas de Visão Computacional.",
    "options": [
      "Compressão seguida de Reconstrução 3D.",
      "Filtragem, Segmentação e Extração de Características.",
      "Digitalização vetorial para identificar posição no espaço contínuo.",
      "Modelo HSL para preto e branco seguido de Transformação de Escala.",
      "Captura seguida de Síntese de Imagem com etiqueta virtual."
    ],
    "answer": "b",
    "number": 11
  },
  {
    "id": "N1-12",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Sobre Limiarização (Thresholding) e análise de histogramas para segmentação, assinale a alternativa correta.",
    "options": [
      "O histograma é representação vetorial das equações das curvas da cena.",
      "Em histograma bimodal, o limiar ideal deve ser no topo do pico mais alto.",
      "Limiarização transforma imagem em tons de cinza em binária (preto e branco).",
      "Limiarização é Síntese de Imagem pois cria novos pixels coloridos.",
      "Limiarização só é possível com imagens capturadas em CMYK."
    ],
    "answer": "c",
    "number": 12
  },
  {
    "id": "N1-13",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Sistema identifica artéria (Processo B) e projeta linha vermelha no monitor (Saída C). Assinale as subáreas predominantes em B e C.",
    "options": [
      "B: Síntese; C: Processamento de Imagens.",
      "B: Visão Computacional; C: Síntese de Imagens.",
      "B: Processamento de Imagens; C: Visão Computacional.",
      "B: Síntese; C: Visão Computacional.",
      "B: Visão Computacional; C: Processamento de Imagens."
    ],
    "answer": "b",
    "number": 13
  },
  {
    "id": "N1-14",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Artista define geometria 3D do personagem; outro configura luzes, sombras e reflexos. Assinale as subáreas de cada especialista.",
    "options": [
      "1: Síntese; 2: Processamento de Imagens.",
      "1: Visão Computacional; 2: Modelagem Tridimensional.",
      "1: Modelagem Tridimensional; 2: Síntese de Imagens.",
      "1: Processamento de Imagens; 2: Visão Computacional.",
      "1: Modelagem Tridimensional; 2: Processamento de Imagens."
    ],
    "answer": "c",
    "number": 14
  },
  {
    "id": "N1-15",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "App de RA identifica moldura e sobrepõe animação alinhada ao quadro usando Registro e Rastreamento. Assinale o papel das subáreas.",
    "options": [
      "Visão Computacional identifica pontos e calcula posição; Síntese renderiza a animação na perspectiva correta.",
      "Processamento comprime vídeo; Modelagem 3D reconstrói o quadro físico.",
      "Síntese entende iluminação; Visão Computacional cria modelo 3D da animação.",
      "RA usa exclusivamente Modelagem 3D para converter sinal analógico em vetores.",
      "Rastreamento por modelos RGB identifica cor predominante e aplica filtro."
    ],
    "answer": "a",
    "number": 15
  },
  {
    "id": "N1-16",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "App de decoração coloca sofá virtual no chão sem marcadores (RA Sem Marcadores). Assinale a técnica e processos envolvidos.",
    "options": [
      "Cromaqui substitui cor do chão eliminando Visão Computacional.",
      "SLAM mapeia ambiente e identifica planos horizontais por pontos de interesse na matriz.",
      "Sensores GPS informam altitude exata para desenhar modelo vetorial do sofá.",
      "Modelo CMYK detecta pigmentação do piso para Síntese criar sombra virtual.",
      "Reconstrução 3D por imagens vetoriais pré-existentes da casa do usuário."
    ],
    "answer": "b",
    "number": 16
  },
  {
    "id": "N1-17",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Cores vibrantes no monitor ficam foscas na impressão. Assinale a explicação com base em RGB e CMYK.",
    "options": [
      "Monitor usa CMYK subtrativo com gamut maior que RGB aditivo.",
      "RGB usa pigmentos refletindo luz; CMYK emite luz por LEDs.",
      "RGB é aditivo (luz); CMYK é subtrativo (pigmentos); gamut CMYK é geralmente menor.",
      "RGB tem 4 canais; CMYK tem 3, causando perda cromática.",
      "HSL deveria ser usado na impressão para paridade total com a tela."
    ],
    "answer": "c",
    "number": 17
  },
  {
    "id": "N1-18",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Filtro de Brilho Inteligente deve aumentar claridade sem alterar matiz. Assinale a solução com HSL.",
    "options": [
      "Converter para HSL, aumentar Hue e converter de volta.",
      "HSL é inadequado pois é subtrativo; brilho só em RGB.",
      "Converter para HSL e manipular apenas Lightness (L).",
      "Usar CMYK aumentando canal K para clarear.",
      "HSL só funciona em imagens vetoriais."
    ],
    "answer": "c",
    "number": 18
  },
  {
    "id": "N1-19",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Fotógrafo decide entre Raster e Vetorial para paisagens com milhões de variações de cor. Assinale a melhor decisão.",
    "options": [
      "Vetorial, pois descreve texturas orgânicas com arquivos menores.",
      "Matricial, pois complexidade fotográfica é impraticável de descrever por equações vetoriais.",
      "Vetorial é única escolha pois matricial não suporta monitores 4K/8K.",
      "Vetor só se objetivo for impressão grande; matricial não imprime acima de A4.",
      "Ambos idênticos; diferença é RGB no vetor e CMYK no matricial."
    ],
    "answer": "b",
    "number": 19
  },
  {
    "id": "N1-20",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "CAD vetorial precisa ser convertido em grade de pixels para exibição no monitor. Assinale o nome e característica desse processo.",
    "options": [
      "Vetorização: transformar pixels em equações matemáticas.",
      "Rasterização: amostragem de descrição vetorial contínua para imagem matricial discreta.",
      "Interpolação de Cores: criar cores entre vetores para exibir CMYK aditivamente.",
      "Digitalização Geométrica: converter matriciais de câmera em modelos CAD.",
      "Compressão de Dados: reduzir equações para caber na memória de vídeo."
    ],
    "answer": "b",
    "number": 20
  },
  {
    "id": "N1-21",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Como o Bresenham decide entre manter y ou incrementar y+1 ao avançar de x para x+1?",
    "options": [
      "Calcula y=mx+b com arredondamento de ponto flutuante.",
      "Usa variável de decisão (erro acumulado) com aritmética de inteiros.",
      "Divide distância total usando seno e cosseno para inclinação exata.",
      "Só funciona com inclinação de 45°; caso contrário usa DDA.",
      "Decisão pela média aritmética das cores dos pixels vizinhos (Antialiasing)."
    ],
    "answer": "b",
    "number": 21
  },
  {
    "id": "N1-22",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Qual a principal desvantagem do DDA em relação ao Bresenham em hardware de alto desempenho?",
    "options": [
      "DDA não desenha retas com inclinação maior que 45°.",
      "DDA usa ponto flutuante e arredondamento a cada iteração, mais caro que inteiros.",
      "DDA consome mais memória armazenando todos os pontos antes de exibir.",
      "DDA gera retas serrilhadas; Bresenham aplica Antialiasing automaticamente.",
      "DDA só funciona em imagens vetoriais."
    ],
    "answer": "b",
    "number": 22
  },
  {
    "id": "N1-23",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "No DDA, com Δx > Δy, assinale o funcionamento correto.",
    "options": [
      "Incrementa y de 1 em 1 e calcula x somando 1/m.",
      "Incrementa x de 1 em 1 e calcula y somando m, arredondando.",
      "Calcula todos os pontos simultaneamente com matrizes de rotação.",
      "Para se m for fracionário, DDA para a execução.",
      "Ignora m e acende pixels em diagonal perfeita."
    ],
    "answer": "b",
    "number": 23
  },
  {
    "id": "N1-24",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Translação de P(x,y) por vetor T(dx,dy). Assinale a relação matemática correta.",
    "options": [
      "x'=x*dx e y'=y*dy (operação multiplicativa).",
      "x'=x+dx e y'=y+dy (soma das constantes de deslocamento).",
      "x'=x*cos(θ)-y*sin(θ) (rotação em torno da origem).",
      "x'=dx e y'=dy (substitui coordenadas originais).",
      "x'=x-dx e y'=y-dy (sempre em direção à origem)."
    ],
    "answer": "b",
    "number": 24
  },
  {
    "id": "N1-25",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Para unificar translação, rotação e escala em multiplicação de matrizes, assinale o sistema e mudança estrutural.",
    "options": [
      "Coordenadas Polares: (x,y) em (r,θ).",
      "Coordenadas Homogêneas: (x,y) como (x,y,w) com w=1, matrizes 3×3.",
      "Coordenadas Cartesianas Discretas: arredondar decimais para inteiros.",
      "Sistema de Coordenadas de Tela: origem no canto superior esquerdo.",
      "Coordenadas Baricêntricas: converter polígonos em triângulos."
    ],
    "answer": "b",
    "number": 25
  },
  {
    "id": "N1-26",
    "exam": "N1",
    "unit": "Java",
    "text": "Código Java rotaciona ponto (x,y) por ângulo em graus em torno da origem. Assinale a alternativa correta.",
    "options": [
      "Math.sin/cos aceitam graus; toRadians é redundante e causa erros.",
      "Implementa corretamente rotação 2D com conversão para radianos.",
      "Realiza Translação Circular pela subtração em novoX.",
      "Para rotação horária, trocar cos por tan.",
      "Só funciona se (x,y) for vetor unitário."
    ],
    "answer": "b",
    "number": 26
  },
  {
    "id": "N1-27",
    "exam": "N1",
    "unit": "Java",
    "text": "Método Java aplica escala Sx e Sy na origem a pontos Point2D.Double. Assinale a alternativa correta.",
    "options": [
      "Escala em Java só pode ser feita por somas sucessivas.",
      "Com sx=2 e sy=2, área quadruplica e pontos se afastam da origem.",
      "Para reduzir à metade, usar sx=-2 e sy=-2.",
      "Realiza Translação Uniforme sem alterar forma.",
      "Erro de compilação: Java não permite multiplicação de double em laço for."
    ],
    "answer": "b",
    "number": 27
  },
  {
    "id": "N1-28",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Sobre estrutura e propriedades de polilinhas, assinale a alternativa correta.",
    "options": [
      "Segmentos independentes onde ponto final nunca coincide com início do próximo.",
      "Lista ordenada de vértices P0..Pn onde cada par consecutivo define um segmento.",
      "Polilinha é polígono fechado por definição.",
      "Polilinhas limitadas ao 2D; coordenada z transforma em spline.",
      "10 segmentos exigem 20 pontos distintos sem compartilhamento."
    ],
    "answer": "b",
    "number": 28
  },
  {
    "id": "N1-29",
    "exam": "N1",
    "unit": "Inéditas",
    "text": "Assinale propriedade que define um Polígono Convexo.",
    "options": [
      "Todos os ângulos internos superiores a 180° com reentrâncias.",
      "Qualquer segmento entre dois pontos internos está totalmente contido no polígono.",
      "Possui pelo menos uma ponta voltada para dentro.",
      "Mais de 5 vértices implica côncavo em 2D.",
      "Arestas se cruzam formando subáreas independentes."
    ],
    "answer": "b",
    "number": 29
  },
  {
    "id": "N1-30",
    "exam": "N1",
    "unit": "Java",
    "text": "Código Java usa Polygon com 4 pontos formando retângulo e contains(30,20). Assinale a alternativa correta.",
    "options": [
      "addPoint exige ordem alfabética de coordenadas.",
      "Define retângulo e contains(30,20) retorna true por algoritmos de geometria computacional.",
      "Polygon é polilinha aberta sem close() automático.",
      "contains só funciona para polígonos convexos.",
      "Polygon armazena coordenadas como String único de vetores."
    ],
    "answer": "b",
    "number": 30
  },
  {
    "id": "N2-01",
    "exam": "N2",
    "text": "Sobre translação e coordenadas homogêneas em 2D, assinale a alternativa correta.",
    "options": [
      "Translação cartesiana é adição vetorial, impossível como multiplicação 2×2.",
      "Translação é linear pura mantendo origem fixa em (0,0).",
      "Homogêneas reduzem matrizes de 3×3 para 2×2 economizando RAM.",
      "Translação insere deslocamento na diagonal principal da matriz.",
      "Translação e rotação não podem ser combinadas em uma matriz."
    ],
    "answer": "a",
    "number": 31
  },
  {
    "id": "N2-02",
    "exam": "N2",
    "text": "Em coordenadas homogêneas 2D com matrizes 3×3, assinale a alternativa correta sobre composição.",
    "options": [
      "Multiplicação de matrizes é comutativa.",
      "Escala e translação podem ser expressas em matriz 3×3 com escala na diagonal e translação na última coluna.",
      "Componente w deve ser 0 para translação funcionar.",
      "Inverter ordem de rotação e translação mantém posição final idêntica.",
      "Matrizes homogêneas 2D precisam ser 2×2."
    ],
    "answer": "b",
    "number": 32
  },
  {
    "id": "N2-03",
    "exam": "N2",
    "text": "Para rotacionar em torno de ponto arbitrário (xc,yc) e não da origem, assinale a sequência correta.",
    "options": [
      "Rotacionar, transladar por (xc,yc), transladar por (-xc,-yc).",
      "Transladar (-xc,-yc), rotacionar θ, transladar (xc,yc).",
      "Transladar (xc,yc), rotacionar θ, transladar (-xc,-yc).",
      "Multiplicar matriz de rotação por (xc,yc) na diagonal.",
      "Cisalhar eixos antes de rotacionar."
    ],
    "answer": "b",
    "number": 33
  },
  {
    "id": "N2-04",
    "exam": "N2",
    "text": "Cisalhamento horizontal: x'=x+k*y, y'=y. Assinale a alternativa correta.",
    "options": [
      "Pontos com y=0 sofrem deslocamento máximo ao infinito.",
      "Fator k fica na diagonal principal da matriz 2×2.",
      "Pontos com y=0 permanecem imóveis pois k*0=0.",
      "Cisalhamento altera alturas verticais na mesma proporção.",
      "Quebra paralelismo transformando retângulos em curvas."
    ],
    "answer": "c",
    "number": 34
  },
  {
    "id": "N2-05",
    "exam": "N2",
    "text": "Sobre transformações lineares puras vs afins, assinale a alternativa correta.",
    "options": [
      "Rotação/escala 2×2 move origem para coordenadas aleatórias.",
      "Afins incluem translação e perdem linearidade estrita em (x,y).",
      "Afins operam em matrizes 2×2 dispensando homogêneas.",
      "Rotação e cisalhamento são afins puras com somas externas.",
      "Homogêneas servem só para círculos e elipses."
    ],
    "answer": "b",
    "number": 35
  },
  {
    "id": "N2-06",
    "exam": "N2",
    "text": "Sobre composição de R, S e T em matrizes 3×3 homogêneas, assinale a alternativa correta.",
    "options": [
      "Multiplicação é comutativa: R*S*T = T*S*R.",
      "Em P'=(T*R*S)*P, escala é a primeira transformação aplicada.",
      "Escala uniforme comuta com rotação: R*Suniforme = Suniforme*R.",
      "(T*R)⁻¹ = T⁻¹*R⁻¹.",
      "Transformações afins compostas mantêm ângulos e distâncias mesmo com cisalhamento."
    ],
    "answer": "c",
    "number": 36
  },
  {
    "id": "N2-07",
    "exam": "N2",
    "text": "Sobre Projeção Paralela e Perspectiva, assinale a alternativa correta.",
    "options": [
      "Perspectiva: centro de projeção a distância infinita, raios paralelos.",
      "Ortogonal reproduz encurtamento por perspectiva.",
      "Perspectiva: linhas paralelas 3D podem convergir a pontos de fuga.",
      "Ortogonal emula visão humana em jogos FPS.",
      "Ambas usam raios convergentes em coordenada finita."
    ],
    "answer": "c",
    "number": 37
  },
  {
    "id": "N2-08",
    "exam": "N2",
    "text": "Sobre matrizes 4×4 de projeção ortogonal e perspectiva e divisão perspectiva, assinale a alternativa correta.",
    "options": [
      "Ortogonal: frustum em pirâmide truncada.",
      "Encurtamento ocorre na divisão perspectiva dividindo X,Y,Z por w' com profundidade.",
      "Perspectiva mantém w'=1 dispensando divisão.",
      "Ortogonal distorce ângulos de linhas paralelas.",
      "Após perspectiva, profundidade no Z-buffer varia linearmente com Z original."
    ],
    "answer": "b",
    "number": 38
  },
  {
    "id": "N2-09",
    "exam": "N2",
    "text": "Sobre Geometria Sólida Construtiva (CSG), assinale a alternativa correta.",
    "options": [
      "CSG armazena vértices, arestas e faces soltas gerando superfícies abertas.",
      "CSG armazena árvore binária de operações booleanas sobre primitivas sólidas.",
      "CSG facilita criação de sólidos impossíveis sem integridade.",
      "Operações CSG operam sobre imagens raster 2D.",
      "Árvore CSG descarta histórico salvando só malha final."
    ],
    "answer": "b",
    "number": 39
  },
  {
    "id": "N2-10",
    "exam": "N2",
    "text": "Sobre malhas e Representação por Fronteira (B-Rep), assinale a opção correta.",
    "options": [
      "Malha regular: cada aresta compartilhada por número indefinido de faces.",
      "Lista de triângulos indexados duplica coordenadas de cada vértice por face.",
      "Superfícies não orientáveis são aceitas facilitando iluminação.",
      "Malha fechada válida: exatamente duas faces por aresta comum.",
      "Estruturas topológicas focam só posição espacial sem conectividade."
    ],
    "answer": "d",
    "number": 40
  },
  {
    "id": "N2-11",
    "exam": "N2",
    "text": "I: B-Splines permitem controle local superior a Bézier em modelos complexos. II: Alterar um ponto de controle em B-Spline propaga distorção globalmente. Assinale a opção correta.",
    "options": [
      "I e II verdadeiras; II justifica I.",
      "I e II verdadeiras; II não justifica I.",
      "I verdadeira; II falsa.",
      "I falsa; II verdadeira.",
      "Ambas falsas."
    ],
    "answer": "c",
    "number": 41
  },
  {
    "id": "N2-12",
    "exam": "N2",
    "text": "Sobre subdivisão de superfícies poligonais, assinale a opção correta.",
    "options": [
      "Refinamento só na renderização final impossibilitando manter topologia inicial.",
      "Catmull-Clark: malha limite passa obrigatoriamente por cada vértice original.",
      "Esquemas interpolativos movem vértices originais a cada iteração.",
      "Vantagem sobre NURBS patches: topologia arbitrária sem costuras visíveis.",
      "Subdivisão é pura duplicação de polígonos sem deslocamento geométrico."
    ],
    "answer": "d",
    "number": 42
  },
  {
    "id": "N2-13",
    "exam": "N2",
    "text": "Sobre Octrees para voxels, assinale a alternativa correta.",
    "options": [
      "Armazena cada coordenada vazia individualmente exigindo mais RAM.",
      "Subdivide recursivamente em 8 subvolumes quando há mistura cheio/vazio; para se homogêneo.",
      "Divisões fixas até profundidade máxima independente do objeto.",
      "Octree é unidimensional impossibilitando profundidade espacial.",
      "Região totalmente preenchida é descartada gerando buracos."
    ],
    "answer": "b",
    "number": 43
  },
  {
    "id": "N2-14",
    "exam": "N2",
    "text": "Sobre malhas de quadriláteros vs triângulos, assinale a opção correta.",
    "options": [
      "Três pontos 3D definem superfície não plana tornando triângulos instáveis.",
      "Quadriláteros preferidos em animação facial pois edge loops acompanham musculatura.",
      "GPU rasteriza nativamente quadriláteros sem subdivisão.",
      "Interpolação em quadrilátero é mais simples que em triângulo.",
      "Malhas só de triângulos não representam volumes fechados."
    ],
    "answer": "b",
    "number": 44
  },
  {
    "id": "N2-15",
    "exam": "N2",
    "text": "Sobre Nível de Detalhe (LOD), assinale a alternativa correta.",
    "options": [
      "LOD substitui modelos simples por versões mais densas quando objeto se afasta.",
      "Objetos distantes ocupam área pequena permitindo reduzir detalhes sem perda perceptível.",
      "Nuvem de pontos dispensa LOD por renderização sem custo.",
      "LOD é puramente estético para objetos 2D planos.",
      "LOD impede renderizar cenários distantes."
    ],
    "answer": "b",
    "number": 45
  },
  {
    "id": "N2-16",
    "exam": "N2",
    "text": "Sobre modelagem procedural, Sistemas L e fractais, assinale a opção correta.",
    "options": [
      "Sistemas L impedem ramificação limitando-se a rochas planas.",
      "Fractais têm autossimilaridade: padrões repetitivos em diferentes escalas.",
      "Modelagem procedural consome mais disco que malha finalizada.",
      "Vegetação procedural não permite aleatoriedade.",
      "Sistemas L convertem imagens 2D por filtros de borda."
    ],
    "answer": "b",
    "number": 46
  },
  {
    "id": "N2-17",
    "exam": "N2",
    "text": "Sobre Matriz de Visualização (View Matrix), assinale a alternativa correta.",
    "options": [
      "Mover câmera 10 unidades para cima equivale a mover objetos 10 unidades para cima.",
      "View matrix move universo na direção inversa à posição/orientação da câmera.",
      "Origem (0,0,0) no espaço da câmera fica no centro do mundo global.",
      "View matrix é mesma matriz do objeto com diagonal nula.",
      "Eixos da câmera apontam aleatoriamente sem alinhamento."
    ],
    "answer": "b",
    "number": 47
  },
  {
    "id": "N2-18",
    "exam": "N2",
    "text": "Sobre modelo de câmera pinhole em CG, assinale a opção correta.",
    "options": [
      "Imagem no plano traseiro fica orientada identicamente ao objeto.",
      "Sistemas posicionam plano de projeção virtual à frente do orifício entre câmera e objetos.",
      "Desvantagem: aberrações cromáticas nas bordas do orifício.",
      "Aproximar plano do orifício diminui campo de visão (teleobjetiva).",
      "Raios convergentes em paralelo eliminando profundidade."
    ],
    "answer": "b",
    "number": 48
  },
  {
    "id": "N2-19",
    "exam": "N2",
    "text": "Sobre precisão do Z-buffer e Z-fighting, assinale a alternativa correta.",
    "options": [
      "Z-fighting ocorre por precisão infinita do Z-buffer.",
      "Near plane muito perto comprime precisidade e causa Z-fighting em objetos distantes.",
      "Precisão Z-buffer é linear e idêntica por todo volume.",
      "Far plane é único fator de precisão.",
      "Z-fighting afeta só cores texturizadas."
    ],
    "answer": "b",
    "number": 49
  },
  {
    "id": "N2-20",
    "exam": "N2",
    "text": "Sobre parâmetros intrínsecos e extrínsecos da câmera virtual, assinale a opção correta.",
    "options": [
      "Campo de visão é parâmetro extrínseco.",
      "Extrínsecos mapeiam projeção controlando aspect ratio e distorção.",
      "Posição, alvo e vetor up são extrínsecos gerando matriz de visualização.",
      "Transladar câmera modifica parâmetro intrínseco.",
      "Intrínsecos dependem da rotação do mundo."
    ],
    "answer": "c",
    "number": 50
  },
  {
    "id": "N2-21",
    "exam": "N2",
    "text": "Sobre espaço NDC no pipeline gráfico, assinale a alternativa correta.",
    "options": [
      "NDC depende da resolução física do monitor.",
      "NDC converte volume de visualização em cubo fixo facilitando clipping.",
      "Coordenadas NDC variam de zero a infinito.",
      "NDC acende LEDs do monitor diretamente.",
      "NDC aplica texturas descartando posições X,Y,Z."
    ],
    "answer": "b",
    "number": 51
  },
  {
    "id": "N2-22",
    "exam": "N2",
    "text": "Sobre Depth of Field e Motion Blur, assinale a opção correta.",
    "options": [
      "Profundidade de campo ocorre naturalmente por espessamento de polígonos distantes.",
      "Plano focal: região de nitidez máxima; desfoque aumenta afastando-se dele.",
      "Motion blur atua só em objetos estáticos simulando falha de refresh.",
      "Motion blur controlado pela distância do near plane.",
      "Efeitos alteram topologia da malha antes das transformações."
    ],
    "answer": "b",
    "number": 52
  },
  {
    "id": "N2-23",
    "exam": "N2",
    "text": "Sobre projeção ortográfica e raios projetores, assinale a alternativa correta.",
    "options": [
      "Objeto distante diminui até sumir em ponto de fuga central.",
      "Volume ortográfico: raios divergem de ponto focal atrás da câmera.",
      "Objeto distante mantém mesmo tamanho na tela com raios paralelos.",
      "Isométrica quebra paralelismo transformando cubos em esferas.",
      "Ortográfica exige w' variável para foreshortening."
    ],
    "answer": "c",
    "number": 53
  },
  {
    "id": "N2-24",
    "exam": "N2",
    "text": "Sobre Transformação de Viewport, assinale a opção correta.",
    "options": [
      "Viewport converte NDC em coordenadas de pixels da janela.",
      "Viewport mantém pixels estáticos ao redimensionar janela.",
      "Viewport descarta faces traseiras mapeando cores logarítmicas.",
      "Viewport descarta coordenada de profundidade impedindo Z-buffer.",
      "Viewport exige janela em tela cheia."
    ],
    "answer": "a",
    "number": 54
  },
  {
    "id": "N2-25",
    "exam": "N2",
    "text": "Sobre Rasterização no pipeline, assinale a alternativa correta.",
    "options": [
      "Rasterização transforma primitivas contínuas em fragmentos discretos na grade de pixels.",
      "Ocorre antes de projeção e transformações de vértices.",
      "Calcula física e colisões descartando malha 3D.",
      "Sombreamento ocorre antes da rasterização.",
      "Opera exclusivamente sobre vetores tipográficos."
    ],
    "answer": "a",
    "number": 55
  },
  {
    "id": "N2-26",
    "exam": "N2",
    "text": "Sobre Clipping e Backface Culling, assinale a opção correta.",
    "options": [
      "Clipping deleta polígonos inteiros se aresta tocar borda gerando furos.",
      "Backface Culling elimina faces voltadas para trás pela winding order reduzindo carga.",
      "Ambas operam sobre Color Buffer após pintura.",
      "Backface Culling substitui Z-buffer completamente.",
      "Clipping ocorre exclusivamente no espaço do mundo antes da câmera."
    ],
    "answer": "b",
    "number": 56
  },
  {
    "id": "N2-27",
    "exam": "N2",
    "text": "Sobre Vertex Shader e Fragment Shader, assinale a alternativa correta.",
    "options": [
      "Vertex Shader roda por pixel aplicando texturas fotorrealistas.",
      "Fragment Shader executa com frequência muito maior que Vertex Shader.",
      "Efeitos por pixel devem ser no Vertex Shader por executar mais vezes.",
      "Ambos operam sobre mesmas unidades de dados identicamente.",
      "Fragment Shader executa uma vez por vértice ignorando preenchimento."
    ],
    "answer": "b",
    "number": 57
  },
  {
    "id": "N2-28",
    "exam": "N2",
    "text": "Sobre interpolação de atributos na rasterização, assinale a opção correta.",
    "options": [
      "Interpolação ignora distâncias relativas aplicando cor aleatória.",
      "Vértices com cores diferentes geram transição suave de tonalidades.",
      "Coordenadas de textura interpoladas linearmente na tela são perfeitas sem correção de perspectiva.",
      "Interpolação duplica vértices na memória de vídeo.",
      "Interpolação atua só em posição espacial, não em mapas de relevo."
    ],
    "answer": "b",
    "number": 58
  },
  {
    "id": "N2-29",
    "exam": "N2",
    "text": "Sobre Z-buffer e Double Buffering, assinale a alternativa correta.",
    "options": [
      "Double Buffering resolve oclusão comparando distâncias Z.",
      "Double Buffering: Front Buffer exibe, Back Buffer desenha oculto evitando screen tearing.",
      "Z-buffer divide tela em duas metades para duas GPUs.",
      "Troca Front/Back ocorre linha por linha visível ao usuário.",
      "Ambos aplicam iluminação fotorrealista."
    ],
    "answer": "b",
    "number": 59
  },
  {
    "id": "N2-30",
    "exam": "N2",
    "text": "Sobre Antialiasing no pipeline, assinale a opção correta.",
    "options": [
      "Serrilhamento ocorre pois monitores processam só cores primárias puras.",
      "Superamostragem calcula cor de cada pixel por múltiplas subamostras suavizando contornos.",
      "Antialiasing altera posição física dos vértices 3D.",
      "Antialiasing reduz consumo de memória e esforço da GPU.",
      "Suavização atua no início do pipeline antes dos vertex shaders."
    ],
    "answer": "b",
    "number": 60
  },
  {
    "id": "N2-31",
    "exam": "N2",
    "text": "Sobre Montagem de Primitivas (Primitive Assembly), assinale a alternativa correta.",
    "options": [
      "Converte triângulos em pixels dispensando conectividade.",
      "Agrupa vértices isolados em entidades geométricas para clipping e rasterização.",
      "Pipeline funciona sem ela interpretando vértices desconectados.",
      "Função única é aplicar filtros de textura.",
      "Opera na fase de fragmentos após Front Buffer."
    ],
    "answer": "b",
    "number": 61
  },
  {
    "id": "N2-32",
    "exam": "N2",
    "text": "Sobre Rasterização Scanline, assinale a opção correta.",
    "options": [
      "Preenche polígono aleatoriamente testando proximidade ao centroide.",
      "Usa Tabela de Arestas Ativas rastreando interseções na linha de varredura atual.",
      "Varredura vertical da direita para esquerda.",
      "Exige subdivisão prévia em círculos perfeitos.",
      "Descarta arestas horizontais causando loops infinitos."
    ],
    "answer": "b",
    "number": 62
  },
  {
    "id": "N2-33",
    "exam": "N2",
    "text": "Sobre Mipmapping, assinale a alternativa correta.",
    "options": [
      "Aumenta resolução da textura quando objeto se afasta.",
      "Textura alta resolução em objeto distante causa subamostragem; mipmapping usa cópias menores pré-calculadas.",
      "Mipmaps armazenados exclusivamente na CPU.",
      "Mipmapping quebra linhas retas alterando topologia.",
      "Aplicado antes do Vertex Shader alterando coordenadas X,Y,Z."
    ],
    "answer": "b",
    "number": 63
  },
  {
    "id": "N2-34",
    "exam": "N2",
    "text": "Sobre Alpha Blending, assinale a opção correta.",
    "options": [
      "Blending é comutativo independente da ordem de desenho.",
      "Objetos opacos primeiro; transparentes de trás para frente em relação à câmera.",
      "Alpha Blending desativa buffer frontal tornando fragmentos invisíveis.",
      "Canal alfa descreve reflexão especular, não opacidade.",
      "Blending ocorre no vertex shader impedindo alteração na fase de fragmentos."
    ],
    "answer": "b",
    "number": 64
  },
  {
    "id": "N2-35",
    "exam": "N2",
    "text": "Sobre Ray Casting básico, assinale a alternativa correta.",
    "options": [
      "Determina cor pelo primeiro ponto de interseção do raio com superfície mais próxima.",
      "Técnica recursiva global com raios secundários de refração e reflexão nativos.",
      "Projeta vértices na CPU antes de criar raios.",
      "Incapaz de determinar visibilidade exigindo Z-buffer obrigatório.",
      "Raios viajam em trajetórias curvas e espirais."
    ],
    "answer": "a",
    "number": 65
  },
  {
    "id": "N2-36",
    "exam": "N2",
    "text": "Sobre Ray Casting em grade (estilo Wolfenstein 3D), assinale a opção correta.",
    "options": [
      "Varre pixel por pixel ignorando linhas da grade.",
      "Raio avança saltando linha/coluna da matriz (DDA) reduzindo testes de colisão.",
      "Grade exige iluminação global com sombras de ray tracing.",
      "Permite inclinar câmera livremente em 3 graus de liberdade.",
      "Redefine malha de vértices a cada movimento consumindo VRAM."
    ],
    "answer": "b",
    "number": 66
  },
  {
    "id": "N2-37",
    "exam": "N2",
    "text": "Sobre Volumes Delimitadores (Bounding Volumes), assinale a alternativa correta.",
    "options": [
      "GPU calcula todos triângulos internos antes do volume externo.",
      "Raio que não intercepta volume delimitador descarta malha interna com baixo custo.",
      "Teste raio-esfera é mais pesado que testar milhões de triângulos.",
      "Volumes delimitadores alteram cores e texturas.",
      "Caixas envolventes desativam ray casting permanentemente."
    ],
    "answer": "b",
    "number": 67
  },
  {
    "id": "N2-38",
    "exam": "N2",
    "text": "Sobre Ray Casting Volumétrico, assinale a opção correta.",
    "options": [
      "Raio para imediatamente na primeira camada externa como superfície opaca.",
      "Raio amostra sequencialmente acumulando opacidade e cor por função de transferência.",
      "Dados são polígonos triangulares vazios.",
      "Função de transferência altera posição geométrica dos vértices.",
      "Incapaz de simular transparências graduais em tecidos biológicos."
    ],
    "answer": "b",
    "number": 68
  },
  {
    "id": "N2-39",
    "exam": "N2",
    "text": "Sobre Raios de Sombra (Shadow Rays), assinale a alternativa correta.",
    "options": [
      "Calculam refração por saltos recursivos infinitos.",
      "Colisão opaca antes da luz marca ponto sombreado recebendo só iluminação ambiente.",
      "Viajam em trajetórias circulares ao redor do objeto.",
      "Movem vértices da malha alterando escala geométrica.",
      "Obstáculo opaco é ignorado iluminando com intensidade máxima."
    ],
    "answer": "b",
    "number": 69
  },
  {
    "id": "N2-40",
    "exam": "N2",
    "text": "Sobre Shadow Acne e Shadow Bias, assinale a opção correta.",
    "options": [
      "Shadow Acne ocorre por canal alfa invertendo normais.",
      "Shadow Bias desloca origem do raio ligeiramente para fora da superfície na direção da normal.",
      "Solução é duplicar resolução da viewport.",
      "Listras escuras só em superfícies planas.",
      "Deslocamento deve ser na direção oposta à luz, para dentro do objeto."
    ],
    "answer": "b",
    "number": 70
  },
  {
    "id": "N2-41",
    "exam": "N2",
    "text": "Sobre geração de raios primários em projeção perspectiva, assinale a alternativa correta.",
    "options": [
      "Raios têm origens diferentes mas mesma direção paralela.",
      "Origem coincide com centro de projeção (câmera); muda só direção por pixel.",
      "Direção gerada aleatoriamente sem relação com pixels ou FOV.",
      "Origem fixada no ponto focal infinito descartando posição da câmera.",
      "Geração modifica cor de fundo das texturas da CPU."
    ],
    "answer": "b",
    "number": 71
  },
  {
    "id": "N2-42",
    "exam": "N2",
    "text": "Sobre Ray Casting para física e IA em jogos, assinale a opção correta.",
    "options": [
      "Raio modifica texturas para detectar colisão na CPU.",
      "IA usa raios invisíveis para Line of Sight verificando obstrução por paredes.",
      "Hitscan simula trajetória parabólica lenta com gravidade.",
      "Raios disparados exclusivamente do centro do cenário para o teto.",
      "Incapaz de retornar ponto exato de impacto ou normal da superfície."
    ],
    "answer": "b",
    "number": 72
  },
  {
    "id": "N2-43",
    "exam": "N2",
    "text": "Código Bresenham: se erro>0, incrementa y e ajusta erro. Assinale a opção correta sobre as lacunas.",
    "options": [
      "LACUNA 1: inclinação float; LACUNA 2: exceção se horizontal.",
      "LACUNA 2: erro>0 indica aproximação da próxima fileira Y exigindo incremento de y.",
      "else teleporta para (x1,y1) quebrando o laço.",
      "if falso decrementa x em duas unidades.",
      "LACUNA 1 determina cor do pixel."
    ],
    "answer": "b",
    "number": 73
  },
  {
    "id": "N2-44",
    "exam": "N2",
    "text": "Sobre o laço for do Bresenham (x de x0 a x1), assinale a opção correta.",
    "options": [
      "x0=x1 causa loop infinito.",
      "Laço avança x de x0 até x1 inclusive garantindo todos pixels horizontais.",
      "Para retas longas para na metade evitando stack overflow.",
      "x<x1 não altera visual pois pixel final é pintado.",
      "Laço controla X e Y simultaneamente na assinatura do for."
    ],
    "answer": "b",
    "number": 74
  },
  {
    "id": "N2-45",
    "exam": "N2",
    "text": "Sobre variáveis yi e dy no Bresenham quando dy<0, assinale a opção correta.",
    "options": [
      "dy negativo: if(dy<0) configura yi=-1 e dy=-dy tornando dy positivo.",
      "yi conta pixels vermelhos perdendo função se reta preta.",
      "dy<0 interrompe programa pois Bresenham não calcula passos negativos.",
      "dy=-dy duplica deslocamento vertical saltando duas fileiras.",
      "Reta horizontal configura yi=0 impedindo uso de y0."
    ],
    "answer": "a",
    "number": 75
  },
  {
    "id": "N2-46",
    "exam": "N2",
    "text": "Limitação do código Bresenham apresentado (varredura fixa em X), assinale a opção correta.",
    "options": [
      "Funciona perfeitamente para retas verticais com ΔY>>ΔX.",
      "JVM inverte automaticamente eixos se ΔY>ΔX.",
      "Assume ΔX≥ΔY; retas >45° geram linha tracejada/incompleta.",
      "Falha se x0<x1 exigindo desenho da direita para esquerda.",
      "dx=x1-x0 impossibilita desenho 3D por exigir coordenada Z."
    ],
    "answer": "c",
    "number": 76
  },
  {
    "id": "N2-47",
    "exam": "N2",
    "text": "Java TranslacaoExemplo: I: xNovo=x+dx move 100 direita e 80 baixo. II: origem Java no centro da tela. III: drawLine conecta centros dos retângulos. Assinale.",
    "options": [
      "I apenas.",
      "II apenas.",
      "I e III apenas.",
      "II e III apenas.",
      "I, II e III."
    ],
    "answer": "c",
    "number": 77
  },
  {
    "id": "N2-48",
    "exam": "N2",
    "text": "Relacione métodos Java: 1.super.paintComponent 2.drawRect 3.drawString 4.drawLine — ( ) linha de translação ( ) limpa buffer ( ) retângulo original ( ) rótulo Original. Sequência correta:",
    "options": [
      "4–1–2–3",
      "4–2–1–3",
      "2–1–4–3",
      "1–4–3–2",
      "3–1–2–4"
    ],
    "answer": "a",
    "number": 78
  },
  {
    "id": "N2-49",
    "exam": "N2",
    "text": "Se xNovo=x e yNovo=y (sem adicionar dx,dy), qual o impacto visual?",
    "options": [
      "Erro crítico de compilação por duplicidade de escopo.",
      "Retângulos na mesma posição; linha preta vira ponto invisível.",
      "Retângulo vermelho fora da janela; azul dobra de tamanho.",
      "Texto Transladado de ponta-cabeça no centro invertendo cores.",
      "Anula super.paintComponent deixando retângulos borrados."
    ],
    "answer": "b",
    "number": 79
  },
  {
    "id": "N2-50",
    "exam": "N2",
    "text": "LACUNA A, B, C para translação correta com retângulo vermelho:",
    "options": [
      "x*dx / y*dy / setColor(BLUE)",
      "x-dx / y-dy / setColor(BLUE)",
      "x+dx / y+dy / setColor(RED)",
      "dx / dy / setColor(BLACK)",
      "x+y / dx+dy / setColor(WHITE)"
    ],
    "answer": "c",
    "number": 80
  },
  {
    "id": "N2-51",
    "exam": "N2",
    "text": "RotacaoExemplo Java: I: toRadians necessário pois cos/sin usam radianos. II: rotação em torno de (0,0) canto superior esquerdo. III: (int) arredonda para double de subpixels. Assinale.",
    "options": [
      "I apenas.",
      "II apenas.",
      "I e II apenas.",
      "II e III apenas.",
      "I, II e III."
    ],
    "answer": "c",
    "number": 81
  },
  {
    "id": "N2-52",
    "exam": "N2",
    "text": "Relacione rotação Java: 1.cos/sin 2.(int) 3.xNovo/yNovo 4.drawLine — ( ) coords resultantes ( ) componentes trigonométricos ( ) linha conectando cantos ( ) truncamento para pixels. Sequência:",
    "options": [
      "3–1–4–2",
      "3–4–1–2",
      "1–3–4–2",
      "2–1–4–3",
      "4–1–3–2"
    ],
    "answer": "a",
    "number": 82
  },
  {
    "id": "N2-53",
    "exam": "N2",
    "text": "Se xNovo usa + em vez de - (x*cos + y*sin), qual impacto?",
    "options": [
      "Retângulo mantém forma mas rotação espelhada/incorreta por matriz desconfigurada.",
      "Out of memory instantâneo na JVM.",
      "Retângulo desaparece por número complexo imaginário.",
      "Redimensiona 10x convertendo em círculo preto.",
      "Texto Original piscando no centro."
    ],
    "answer": "a",
    "number": 83
  },
  {
    "id": "N2-54",
    "exam": "N2",
    "text": "LACUNA A, B, C para rotação rígida com retângulo vermelho:",
    "options": [
      "sin / cos / setColor(BLUE)",
      "cos / sin / setColor(RED)",
      "tan / cos / setColor(BLACK)",
      "cos / tan / setColor(RED)",
      "sin / sin / setColor(WHITE)"
    ],
    "answer": "b",
    "number": 84
  }
];
