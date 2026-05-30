/** Gerado por scripts/build-cpl-questions.mjs — 78 questões CPL */
const CPL_QUESTIONS = [
  {
    "id": "N1-01",
    "exam": "N1",
    "text": "O desenvolvimento dos primeiros compiladores está intrinsecamente ligado à evolução das\nlinguagens de programação de alto nível, que visavam facilitar a escrita de software em\ncomparação com a linguagem de montagem (Assembly). Sobre o marco histórico inicial dessa área,\nqual linguagem é amplamente reconhecida por ter tido o primeiro compilador completo e funcional,\ndesenvolvido por John Backus na década de 1950?",
    "options": [
      "COBOL",
      "LISP",
      "FORTRAN",
      "ALGOL 60",
      "Ada"
    ],
    "answer": "c",
    "number": 1
  },
  {
    "id": "N1-02",
    "exam": "N1",
    "text": "No início da computação, a programação era feita diretamente em código de máquina ou Assembly,\no que tornava o desenvolvimento dependente da arquitetura do hardware. Com o surgimento das\nlinguagens de \"Terceira Geração\" (3GL), como o ALGOL, houve um esforço para tornar as\nlinguagens mais independentes de máquina. Qual inovação técnica no design de compiladores foi\namplamente impulsionada pela necessidade de descrever a sintaxe dessas novas linguagens de\nforma rigorosa e sistemática?",
    "options": [
      "A criação dos diagramas de fluxo de dados.",
      "O desenvolvimento da Notação BNF (Backus-Naur Form).",
      "A invenção da arquitetura de Von Neumann.",
      "O uso de fitas magnéticas para armazenamento de símbolos.",
      "A implementação exclusiva de interpretadores em vez de compiladores."
    ],
    "answer": "b",
    "number": 2
  },
  {
    "id": "N1-03",
    "exam": "N1",
    "text": "Durante a década de 1950, Grace Hopper e sua equipe desenvolveram o sistema A-0, que é\nfrequentemente citado na história da computação. Embora operasse de forma diferente dos\ncompiladores modernos de otimização, qual foi a principal contribuição conceitual desse sistema\npara a área de tradução de linguagens?",
    "options": [
      "A invenção da técnica de interpretação linha a linha em tempo real.",
      "A criação da primeira linguagem de programação orientada a objetos.",
      "O conceito de usar sub-rotinas pré-compiladas que poderiam ser combinadas para formar um\nprograma completo.",
      "A implementação da primeira interface gráfica para depuração de código de máquina.",
      "O desenvolvimento do primeiro sistema operacional capaz de multitarefa."
    ],
    "answer": "c",
    "number": 3
  },
  {
    "id": "N1-04",
    "exam": "N1",
    "text": "No contexto da estrutura das linguagens de programação, os elementos são geralmente\nclassificados em diferentes níveis de abstração. O nível que define as regras de formação de frases\nválidas (como a estrutura de um comando if ou a declaração de uma função), determinando como\nos tokens devem ser agrupados, é chamado de:",
    "options": [
      "Sintaxe.",
      "Semântica Estática.",
      "Semântica Dinâmica.",
      "Léxico.",
      "Pragmática."
    ],
    "answer": "a",
    "number": 4
  },
  {
    "id": "N1-05",
    "exam": "N1",
    "text": "Um programador escreve a seguinte linha de código em uma linguagem fictícia: int x = \"vinte\";. O\ncompilador identifica que, embora a construção do comando esteja gramaticalmente correta (segue\na ordem tipo-identificador-atribuição-valor), há uma incompatibilidade de tipos, pois uma variável\ninteira não pode receber uma string. Em qual nível de análise da estrutura da linguagem essa falha\né detectada?",
    "options": [
      "Análise Léxica.",
      "Análise Sintática.",
      "Semântica Estática.",
      "Pragmática.",
      "Geração de Código Intermediário."
    ],
    "answer": "c",
    "number": 5
  },
  {
    "id": "N1-06",
    "exam": "N1",
    "text": "Dentro do estudo da estrutura das linguagens de programação, existe uma dimensão que se\npreocupa com a relação entre os símbolos da linguagem, seus significados e o contexto de uso\npelos programadores e pelo sistema (como eficiência, legibilidade e intenção). Essa dimensão, que\nlida com o \"uso prático\" e a interpretação humana ou do ambiente de execução, é denominada:",
    "options": [
      "Ortogonalidade.",
      "Pragmática.",
      "Gramática Regular.",
      "Análise de Escopo.",
      "Vinculação Tardia (Late Binding)."
    ],
    "answer": "b",
    "number": 6
  },
  {
    "id": "N1-07",
    "exam": "N1",
    "text": "Os paradigmas de programação definem a forma como o programador estrutura sua solução e\ncomo o computador a executa. Um paradigma específico se baseia no conceito de \"efeitos\ncolaterais\" e na alteração de estados por meio de comandos sequenciais que modificam valores\nna memória. Qual é o nome desse paradigma, que é a base de linguagens como C e Pascal?",
    "options": [
      "Paradigma Funcional.",
      "Paradigma Declarativo.",
      "Paradigma Imperativo.",
      "Paradigma Lógico.",
      "Paradigma Orientado a Eventos."
    ],
    "answer": "c",
    "number": 7
  },
  {
    "id": "N1-08",
    "exam": "N1",
    "text": "Diferente do paradigma imperativo, que foca no passo a passo de \"como\" realizar uma tarefa, existe\num paradigma onde o programador descreve \"o que\" deve ser alcançado (o resultado desejado ou\nas propriedades lógicas), deixando para o sistema (compilador ou interpretador) a responsabilidade\nde determinar os passos de execução. Esse paradigma é conhecido como:",
    "options": [
      "Paradigma Estruturado.",
      "Paradigma Declarativo.",
      "Paradigma Procedural.",
      "Paradigma Orientado a Objetos.",
      "Paradigma de Baixo Nível."
    ],
    "answer": "b",
    "number": 8
  },
  {
    "id": "N1-09",
    "exam": "N1",
    "text": "Um dos paradigmas mais utilizados na engenharia de software moderna baseia-se no agrupamento\nde dados e dos comportamentos que os manipulam em unidades coesas. Esse modelo utiliza\nconceitos como herança, polimorfismo e encapsulamento para facilitar a reutilização de código e a\nmanutenção de sistemas complexos. Qual é este paradigma?",
    "options": [
      "Paradigma de Script.",
      "Paradigma Orientado a Objetos.",
      "Paradigma de Fluxo de Dados.",
      "Paradigma de Marcação.",
      "Paradigma de Baixo Nível."
    ],
    "answer": "b",
    "number": 9
  },
  {
    "id": "N1-10",
    "exam": "N1",
    "text": "Um compilador é um programa de sistema que traduz um código escrito em uma linguagem de alto\nnível (linguagem fonte) para uma linguagem de baixo nível (linguagem alvo), como código de\nmáquina ou assembly. Qual é a característica fundamental que define o processo de compilação\npura, diferenciando-o da interpretação?",
    "options": [
      "A execução do programa ocorre simultaneamente à tradução de cada linha de código.",
      "O compilador gera um arquivo executável independente, que pode ser rodado sem a\nnecessidade do código fonte original.",
      "O processo de compilação dispensa a necessidade de análise sintática e léxica do código.",
      "Compiladores são utilizados exclusivamente para linguagens de marcação, como HTML e XML.",
      "A tradução é realizada apenas no momento em que o usuário final interage com a interface do\nprograma."
    ],
    "answer": "b",
    "number": 10
  },
  {
    "id": "N1-11",
    "exam": "N1",
    "text": "Durante o processo de tradução, alguns compiladores realizam todo o trabalho de análise e\ngeração de código em uma única leitura do código-fonte, enquanto outros dividem o trabalho em\nvárias etapas, percorrendo representações do programa múltiplas vezes. Como é denominado o\nmodelo de compilador que processa o código de uma só vez, do início ao fim, para gerar o código\nalvo?",
    "options": [
      "Compilador Multi-pass (múltiplos passos).",
      "Compilador Cruzado (Cross-compiler).",
      "Compilador One-pass (passo único).",
      "Decompilador.",
      "JIT (Just-In-Time)."
    ],
    "answer": "c",
    "number": 11
  },
  {
    "id": "N1-12",
    "exam": "N1",
    "text": "No desenvolvimento de software, é comum que o computador onde o código é escrito e compilado\n(máquina hospedeira) possua uma arquitetura diferente do computador onde o programa será\nefetivamente executado (máquina alvo). Um compilador que é executado num sistema (ex:\nWindows/Intel), mas gera código executável para um sistema diferente (ex: Android/ARM), é\nconhecido como:",
    "options": [
      "Decompilador.",
      "Compilador Cruzado (Cross-compiler).",
      "Pré-processador.",
      "Interpretador Híbrido.",
      "Compilador JIT (Just-in-Time)."
    ],
    "answer": "b",
    "number": 12
  },
  {
    "id": "N1-13",
    "exam": "N1",
    "text": "Embora tanto compiladores quanto interpretadores tenham o objetivo de permitir a execução de\nprogramas escritos em linguagens de alto nível, eles utilizam estratégias distintas. Uma vantagem\ncaracterística do modelo de interpretação em relação à compilação pura é:",
    "options": [
      "Maior velocidade de execução do programa final, pois o código de máquina é gerado\npreviamente.",
      "Facilidade na depuração (debugging) e maior portabilidade do código-fonte entre diferentes\nplataformas.",
      "Menor consumo de memória RAM durante a execução do programa.",
      "Garantia de que todos os erros de lógica serão detectados antes de o programa iniciar a\nexecução.",
      "Produção de um arquivo binário (.exe ou similar) que protege o código-fonte original."
    ],
    "answer": "b",
    "number": 13
  },
  {
    "id": "N1-14",
    "exam": "N1",
    "text": "Linguagens como Java e C# utilizam um modelo de tradução intermediário para equilibrar\ndesempenho e portabilidade. Nesse modelo, o código-fonte é primeiro traduzido para uma\nlinguagem de baixo nível independente de máquina (como o Bytecode ou CIL), que é então\nexecutada por uma máquina virtual. Qual componente de software é responsável por traduzir esse\ncódigo intermediário em código de máquina nativo durante a execução, visando aumentar a\nperformance?",
    "options": [
      "Compilador Cruzado (Cross-compiler).",
      "Pré-processador.",
      "Compilador JIT (Just-In-Time).",
      "Montador (Assembler).",
      "Descompilador."
    ],
    "answer": "c",
    "number": 14
  },
  {
    "id": "N1-15",
    "exam": "N1",
    "text": "Embora os compiladores produzam programas que executam de forma mais eficiente, o uso de um\ncompilador puro pode introduzir uma barreira no fluxo de trabalho do programador, especialmente\nem projetos de grande escala. Qual das alternativas abaixo descreve uma desvantagem típica do\nmodelo de compilação quando comparado à interpretação direta?",
    "options": [
      "O código resultante é sempre mais lento do que o código interpretado.",
      "O erro de sintaxe só é descoberto quando o usuário final tenta rodar o programa.",
      "O ciclo \"editar-compilar-testar\" pode se tornar demorado, pois qualquer alteração no código\nexige uma nova tradução completa ou parcial.",
      "O compilador ocupa toda a memória RAM disponível, impedindo a execução do programa\ntraduzido.",
      "A compilação torna o código-fonte visível e editável por qualquer pessoa que possua o arquivo\nexecutável."
    ],
    "answer": "c",
    "number": 15
  },
  {
    "id": "N1-16",
    "exam": "N1",
    "text": "A tecnologia de compiladores fornece ferramentas poderosas para o processamento de linguagens\ne a transformação de código. Além da tradução de linguagens de alto nível para código de máquina,\nqual das alternativas abaixo representa uma aplicação comum das técnicas de análise léxica e\nsintática (front-end de um compilador) em outras áreas da informática?",
    "options": [
      "Fragmentação de discos rígidos em sistemas de arquivos legados.",
      "Implementação de formatadores de texto (Pretty Printers) e analisadores estáticos de segurança\n(Linters).",
      "Roteamento de pacotes físicos em redes locais sem fio (Wi-Fi).",
      "Compressão de imagens no formato JPEG para redução de espaço em disco.",
      "Gerenciamento de energia em sistemas operacionais para dispositivos móveis."
    ],
    "answer": "b",
    "number": 16
  },
  {
    "id": "N1-17",
    "exam": "N1",
    "text": "As técnicas de tradução e análise sintática desenvolvidas para compiladores de linguagens como\nC e Java também são aplicadas em Ferramentas de Automação de Design Eletrônico (EDA).\nQuando um engenheiro utiliza linguagens como VHDL ou Verilog para descrever o comportamento\nde um circuito digital, qual processo, análogo à compilação, é responsável por transformar essa\ndescrição textual em uma rede de portas lógicas (netlist) para um chip ou FPGA?",
    "options": [
      "Desfragmentação de hardware.",
      "Síntese de Lógica (Logic Synthesis).",
      "Encapsulamento de Dados (Data Encapsulation).",
      "Modulação de Frequência.",
      "Renderização de Layout."
    ],
    "answer": "b",
    "number": 17
  },
  {
    "id": "N1-18",
    "exam": "N1",
    "text": "Sistemas de Gerenciamento de Banco de Dados (SGBD), como PostgreSQL ou Oracle, utilizam\namplamente a tecnologia de compiladores para processar consultas escritas em SQL (Structured\nQuery Language). Quando um usuário envia um comando SELECT, o banco de dados não executa\no texto diretamente. Em vez disso, ele passa por uma fase onde a consulta é analisada e\ntransformada em um \"Plano de Execução\" otimizado. Como se chama o componente do SGBD que\nrealiza essa tradução e otimização, funcionando de forma análoga ao back-end de um compilador?",
    "options": [
      "Driver de Conexão.",
      "Gerenciador de Buffer.",
      "Otimizador de Consultas (Query Optimizer).",
      "Sistema de Arquivos (File System).",
      "Coletor de Lixo (Garbage Collector)."
    ],
    "answer": "c",
    "number": 18
  },
  {
    "id": "N1-19",
    "exam": "N1",
    "text": "A arquitetura moderna de um compilador é geralmente dividida em duas grandes partes: o Front-\nend (fase de análise) e o Back-end (fase de síntese). Qual é a principal função do Front-end e como\nele se comunica com o Back-end?",
    "options": [
      "O Front-end gera o código de máquina final e o envia diretamente para o processador, sem\nintermédio do Back-end.",
      "O Front-end analisa o código-fonte para verificar erros e cria uma Representação Intermediária\n(IR), que serve de entrada para o Back-end.",
      "O Front-end é responsável apenas pela otimização de registros de memória, ignorando a sintaxe\nda linguagem.",
      "O Front-end traduz o código de máquina de volta para a linguagem de alto nível para conferência\ndo programador.",
      "O Front-end gerencia a interface gráfica (GUI) do compilador, enquanto o Back-end faz a\ntradução de texto."
    ],
    "answer": "b",
    "number": 19
  },
  {
    "id": "N1-20",
    "exam": "N1",
    "text": "O processo de compilação é tradicionalmente dividido em uma sequência de fases, cada uma\ntransformando uma representação do programa em outra. Considerando o fluxo de dados em um\ncompilador de múltiplas fases, qual é a ordem correta das etapas iniciais (Front-end) até a geração\nde código?",
    "options": [
      "Geração de Código → Análise Sintática → Análise Léxica → Otimização.",
      "Análise Léxica → Análise Sintática → Análise Semântica → Geração de Código Intermediário.",
      "Análise Semântica → Análise Léxica → Geração de Código → Análise Sintática.",
      "Análise Sintática → Geração de Código Intermediário → Análise Léxica → Tabela de Símbolos.",
      "Otimização de Código → Análise Semântica → Análise Léxica → Geração de Código Alvo."
    ],
    "answer": "b",
    "number": 20
  },
  {
    "id": "N1-21",
    "exam": "N1",
    "text": "Durante as fases de análise (Front-end) e síntese (Back-end), o compilador precisa armazenar e\nconsultar informações sobre os identificadores (nomes de variáveis, funções, classes) encontrados\nno código-fonte. Qual é o nome da estrutura de dados centralizada que armazena atributos como\ntipo, escopo e endereço de memória de cada identificador?",
    "options": [
      "Árvore de Derivação (Parse Tree).",
      "Tabela de Símbolos (Symbol Table).",
      "Buffer de Entrada.",
      "Autômato Finito de Estados.",
      "Pilha de Execução (Runtime Stack)."
    ],
    "answer": "b",
    "number": 21
  },
  {
    "id": "N1-22",
    "exam": "N1",
    "text": "Uma das grandes vantagens da divisão de um compilador em Front-end e Back-end é a\nmodularidade. Imagine que uma empresa deseja criar um compilador para uma nova linguagem de\nprogramação chamada \"LógicaX\", mas quer que ela funcione tanto em processadores Intel (x86)\nquanto em processadores ARM. Seguindo o modelo de fases, qual seria a estratégia mais\neficiente?",
    "options": [
      "Reescrever o compilador inteiro do zero para cada processador diferente.",
      "Criar dois Front-ends diferentes e utilizar um único Back-end para ambos os processadores.",
      "Criar um único Front-end para a linguagem \"LógicaX\" e dois Back-ends distintos (um para x86\ne outro para ARM).",
      "Eliminar o Back-end e fazer com que o Front-end gere o código binário diretamente para todos\nos hardwares.",
      "Utilizar apenas o analisador léxico da linguagem e deixar que o sistema operacional faça a\ntradução final."
    ],
    "answer": "c",
    "number": 22
  },
  {
    "id": "N1-23",
    "exam": "N1",
    "text": "No fluxo de trabalho entre o Front-end e o Back-end, existe uma fase de transição crucial que não\npertence estritamente à análise da linguagem fonte nem à geração final de código de máquina.\nEssa fase trabalha sobre a Representação Intermediária para tornar o programa mais eficiente\n(menor ou mais rápido). Como se chama essa etapa?",
    "options": [
      "Análise Léxica.",
      "Otimização de Código.",
      "Verificação de Tipos.",
      "Pré-processamento de Macros.",
      "Ligação de Bibliotecas (Linking)."
    ],
    "answer": "b",
    "number": 23
  },
  {
    "id": "N1-24",
    "exam": "N1",
    "text": "O Back-end de um compilador tem a responsabilidade de traduzir a Representação Intermediária\n(IR) para o código de máquina alvo. Uma das tarefas mais complexas e essenciais nesta fase é\ndecidir quais variáveis do programa ocuparão os limitados espaços de armazenamento rápido\ndentro da CPU, para minimizar acessos lentos à memória RAM. Como se chama essa tarefa\nespecífica do Back-end?",
    "options": [
      "Análise de Escopo.",
      "Alocação de Registradores (Register Allocation).",
      "Varredura Léxica (Scanning).",
      "Avaliação de Curto-circuito.",
      "Reuso de Código-fonte."
    ],
    "answer": "b",
    "number": 24
  },
  {
    "id": "N1-25",
    "exam": "N1",
    "text": "No processo de análise léxica, o analisador (scanner) lê o fluxo de caracteres do código-fonte e\nagrupa sequências de caracteres que possuem um significado lógico. Nesse contexto, como se\nchama a sequência específica de caracteres (como main, + ou 123) que coincide com a descrição\nde uma unidade léxica?",
    "options": [
      "Token.",
      "Padrão (Pattern).",
      "Lexema.",
      "Expressão Regular.",
      "Atributo."
    ],
    "answer": "c",
    "number": 25
  },
  {
    "id": "N1-26",
    "exam": "N1",
    "text": "No desenvolvimento de um analisador léxico, as Expressões Regulares são utilizadas para definir\nformalmente os padrões de cada token. Suponha que você precise definir um padrão para\nidentificadores em uma linguagem que exige que eles comecem obrigatoriamente com uma letra\n(a-z), podendo ser seguidos por qualquer quantidade de letras ou dígitos (0-9). Qual expressão\nregular representa corretamente esse padrão?",
    "options": [
      "[0-9]([a-z]|[0-9])*",
      "[a-z][a-z0-9]*",
      "[a-z]*[0-9]*",
      "([a-z]|[0-9])+",
      "[a-z][0-9]"
    ],
    "answer": "b",
    "number": 26
  },
  {
    "id": "N1-27",
    "exam": "N1",
    "text": "No desenvolvimento de um analisador léxico para uma linguagem que suporta números reais\n(ponto flutuante), o padrão definido deve aceitar números que possuam uma parte inteira (um ou\nmais dígitos), seguidos obrigatoriamente por um ponto decimal e, então, obrigatoriamente por um\nou mais dígitos na parte fracionária (ex: 10.5, 0.1). Qual das expressões regulares abaixo\nrepresenta estritamente esse padrão, sem permitir números sem parte fracionária?",
    "options": [
      "[0-9]*\\.[0-9]*",
      "[0-9]+\\.[0-9]*",
      "[0-9]+\\.[0-9]+",
      "[0-9]+(.[0-9]+)?",
      "[0-9].[0-9]"
    ],
    "answer": "c",
    "number": 27
  },
  {
    "id": "N1-28",
    "exam": "N1",
    "text": "Considere a seguinte linha de código em uma linguagem de programação baseada em C:\nsoma = total + 42;\nDurante a fase de análise léxica, o scanner identifica diversas unidades. Sobre a relação entre\nTokens e Lexemas presentes nesta instrução, assinale a alternativa correta:",
    "options": [
      "soma e total são tokens diferentes, pois possuem caracteres distintos.",
      "O caractere = é um lexema que pertence à categoria (token) de operadores de atribuição.",
      "O número 42 é um token, enquanto a regra que define números inteiros é o seu lexema.",
      "O ponto e vírgula (;) é um lexema, mas não gera um token por ser um caractere de pontuação.",
      "Todos os itens da linha (soma, =, total, +, 42, ;) pertencem ao mesmo token, chamado\n\"Instrução\"."
    ],
    "answer": "b",
    "number": 28
  },
  {
    "id": "N1-29",
    "exam": "N1",
    "text": "Muitas linguagens de programação utilizam \"Palavras Reservadas\" que possuem significados\nespeciais para o compilador (ex: if, while, return). Do ponto de vista da análise léxica, essas\npalavras costumam seguir o mesmo Padrão (expressão regular) que define os Identificadores.\nComo o analisador léxico geralmente resolve a ambiguidade quando encontra o lexema if no\ncódigo-fonte?",
    "options": [
      "Ele classifica o lexema como um Identificador e deixa que a análise semântica resolva o erro\ndepois.",
      "Ele consulta uma tabela de palavras reservadas (ou palavras-chave) antes de classificar o\nlexema como um Identificador comum.",
      "Ele solicita que o programador utilize um prefixo especial (como @if) para distinguir palavras\nreservadas de variáveis.",
      "Ele ignora o lexema e pula para o próximo conjunto de caracteres, pois palavras reservadas não\ngeram tokens.",
      "Ele trata o lexema como uma String literal, pois ele está contido dentro do arquivo de texto do\ncódigo-fonte."
    ],
    "answer": "b",
    "number": 29
  },
  {
    "id": "N1-30",
    "exam": "N1",
    "text": "Quando o analisador léxico identifica um lexema que corresponde ao token ID (Identificador), como\no nome de uma variável limite_superior, ele não apenas envia o código do token para o analisador\nsintático, mas também associa a ele um atributo. Qual é a função primordial desse atributo no\ncontexto da Tabela de Símbolos?",
    "options": [
      "Armazenar o endereço físico da memória RAM onde a variável será alocada no futuro.",
      "Guardar uma cópia criptografada do código-fonte para fins de segurança.",
      "Fornecer um ponteiro ou índice para a entrada correspondente na Tabela de Símbolos,\npermitindo que fases posteriores acessem o nome e o tipo do identificador.",
      "Indicar se o identificador é uma palavra reservada da linguagem ou um comando do sistema\noperacional.",
      "Contar quantos caracteres o lexema possui para otimizar o espaço em disco do arquivo\nexecutável."
    ],
    "answer": "c",
    "number": 30
  },
  {
    "id": "N2-01",
    "exam": "N2",
    "text": "O analisador sintático é o coração da fase de análise de um compilador. Ele recebe a sequência de tokens gerada pelo\nanalisador léxico e verifica se essa sequência está em conformidade com as regras estruturais da linguagem, que são\ndefinidas por uma Gramática Livre de Contexto (GLC). Para realizar essa verificação, o analisador pode seguir\ndiferentes estratégias de construção da árvore de derivação, sendo as duas principais abordagens conhecidas como\nTop-Down (descendente) e Bottom-Up (ascendente).\nNo contexto das estratégias de análise sintática (parsing), a abordagem Top-Down caracteriza-se por construir a árvore\nde análise sintática a partir:",
    "options": [
      "Dos tokens da entrada (folhas) em direção ao símbolo inicial da gramática (raiz), realizando operações de\nempilhamento (shift) e redução (reduce).",
      "Do símbolo inicial da gramática (raiz) em direção aos tokens da entrada (folhas), substituindo repetidamente os não-\nterminais pelas suas produções correspondentes.",
      "Das regras semânticas associadas, que validam os tipos de dados das variáveis antes de construir a estrutura da\nárvore.",
      "De múltiplos nós intermediários de forma simultânea, sem a necessidade de um símbolo inicial ou de tokens\nterminais específicos.",
      "Do último token da entrada retrocedendo até o primeiro token, invertendo completamente a ordem de leitura do\ncódigo-fonte."
    ],
    "answer": "b",
    "number": 31
  },
  {
    "id": "N2-02",
    "exam": "N2",
    "text": "Para automatizar a construção de analisadores sintáticos Top-Down (descendentes), os projetistas de compiladores\nfrequentemente utilizam a técnica de análise preditiva por tabelas, tipicamente associada aos analisadores do tipo\nLL(1). O primeiro \"L\" indica que a entrada é lida da esquerda para a direita (Left-to-right), o segundo \"L\" indica que é\nutilizada uma derivação mais à esquerda (Leftmost derivation), e o número \"1\" indica que o analisador consulta apenas\num token adiante (lookahead) para tomar a decisão de qual regra de produção aplicar. No entanto, para que uma\ngramática possa ser utilizada diretamente por um analisador LL(1), ela não pode conter certas estruturas que geram\nindeterminação.\nUma limitação clássica que impede uma Gramática Livre de Contexto (GLC) de ser classificada ou utilizada diretamente\ncomo LL(1) é a presença de:",
    "options": [
      "Recursão à esquerda, pois o analisador entraria em um laço infinito ao tentar expandir o mesmo não-terminal sem\nconsumir nenhum token da entrada.",
      "Recursão à direita, visto que ela impede o analisador de alcançar a condição de parada ao chegar no fim do arquivo\n(EOF).",
      "Símbolos terminais que aparecem em mais de uma regra de produção da gramática.",
      "Produções vazias (regras do tipo A → ε), que são proibidas em qualquer tipo de análise sintática descendente.",
      "Identificadores e constantes numéricas definidos fora do analisador léxico."
    ],
    "answer": "a",
    "number": 32
  },
  {
    "id": "N2-03",
    "exam": "N2",
    "text": "Durante o desenvolvimento de um software, é muito comum que os programadores cometam equívocos ao digitar o\ncódigo-fonte. O compilador deve ser capaz de interceptar esses desvios e relatar mensagens de erro claras e úteis\npara o desenvolvedor. Cada fase da análise (léxica, sintática e semântica) possui uma responsabilidade bem delimitada\nna detecção de falhas de acordo com a teoria de linguagens formais. A análise sintática atua especificamente na\nverificação da estrutura e da ordem dos elementos na sentença.\nConsiderando o escopo de atuação do analisador sintático em um compilador para uma linguagem como C ou Java,\nassinale a opção que apresenta um exemplo de erro que é detectado exclusivamente nesta fase:",
    "options": [
      "O uso de um caractere inválido ou não reconhecido pelo alfabeto da linguagem, como o símbolo @ dentro de um\nnome de variável.",
      "A atribuição de um valor do tipo String a uma variável que foi declarada previamente como int.",
      "A tentativa de utilizar uma variável que não foi declarada em nenhum escopo do programa.",
      "A ausência de um fecha-parêntese ) correspondente em uma expressão de teste de uma estrutura condicional if (x\n> 0.",
      "A chamada de uma função passando três argumentos numéricos, quando a assinatura da função exige apenas um\nargumento."
    ],
    "answer": "d",
    "number": 33
  },
  {
    "id": "N2-04",
    "exam": "N2",
    "text": "Quando o analisador sintático processa o código-fonte de um programa, sua função principal é validar a estrutura\ngramatical das instruções. Para demonstrar visualmente que uma sequência de tokens está correta de acordo com as\nregras da linguagem, o analisador constrói, interna ou explicitamente, uma estrutura de dados em formato de árvore,\ndenominada Árvore de Análise Sintática (ou Árvore de Derivação). Nessa estrutura hierárquica, a organização dos nós\nsegue regras muito claras baseadas na Gramática Livre de Contexto (GLC) da linguagem.\nEm uma Árvore de Análise Sintática bem-formada, os nós que representam as folhas (as extremidades finais na base\nda árvore) e o nó que representa a raiz (o topo da árvore) correspondem, respectivamente, a:",
    "options": [
      "Símbolos não-terminais (como estruturas de controle) e Símbolos de erro sintático.",
      "Palavras-chave reservadas e Comentários do código-fonte.",
      "Símbolos terminais (tokens lidos da entrada) e Símbolo inicial da gramática.",
      "Operadores lógicos e Tipos de dados das variáveis.",
      "Funções nativas do sistema e Diretivas de compilação."
    ],
    "answer": "c",
    "number": 34
  },
  {
    "id": "N2-05",
    "exam": "N2",
    "text": "Para construir um compilador eficiente, o processo de análise do código-fonte é dividido em fases bem delimitadas. A\nAnálise Léxica e a Análise Sintática trabalham em estreita colaboração: a primeira lê o fluxo de caracteres do arquivo\nde texto e agrupa-os em unidades significativas chamadas tokens; a segunda recebe esses tokens e valida a\norganização deles com base em regras gramaticais. Compreender onde termina o papel de uma fase e onde começa\no da outra é essencial para entender o fluxo de processamento de um compilador.\nConsidere que um programador digitou a seguinte linha de código em um programa:\nif x > 10 então\nSabendo que, nesta linguagem específica, a palavra correta para a estrutura condicional deveria ser then (em inglês)\ne não então (em português), e que a palavra então não foi definida como um identificador válido, como o compilador\nreagirá ao processar essa linha nas duas primeiras fases?",
    "options": [
      "A análise léxica rejeitará a linha inteira porque o caractere > é um operador e não pode ficar misturado com letras.",
      "A análise léxica gerará os tokens para if, x, > e 10, mas falhará ao tentar gerar um token para então, acusando um\nerro léxico antes mesmo de a análise sintática começar.",
      "A análise léxica gerará os tokens normalmente (identificando então como um texto/identificador isolado), mas a\nanálise sintática acusará um erro, pois a estrutura gramatical do if esperava o token correspondente a then e recebeu\nalgo inesperado.",
      "Ambas as fases processarão a linha com sucesso, deixando para a análise semântica a tarefa de descobrir que a\npalavra então está traduzida de forma incorreta.",
      "A análise sintática corrigirá automaticamente a palavra então para then, permitindo que o compilador gere o código\nde máquina sem emitir alertas."
    ],
    "answer": "c",
    "number": 35
  },
  {
    "id": "N2-06",
    "exam": "N2",
    "text": "No processo de compilação, a análise sintática (ou parsing) é a fase responsável por determinar se a sequência de\ntokens fornecida pela análise léxica segue a estrutura gramatical da linguagem de programação alvo. Essa estrutura é\nformalmente definida por meio de Gramáticas Livres de Contexto (GLCs). Um dos grandes desafios no projeto de\ngramáticas para linguagens de programação é a ambiguidade, que ocorre quando uma mesma cadeia de caracteres\npossui mais de uma árvore de derivação sintática distinta, podendo levar a interpretações semânticas errôneas pelo\ncompilador.\nConsidere a gramática G = (V, Σ, R, S), onde o conjunto de regras de produção R é definido por:\nS → S + S | S X S | id\nOnde id representa um identificador (terminal) e S é o símbolo inicial não-terminal.\nConsiderando a gramática G apresentada e os conceitos de análise sintática e ambiguidade, avalie as asserções a\nseguir:\n• A cadeia de id + id x id evidencia que a gramática G é ambígua, pois permite a construção de duas árvores\nde análise sintática estruturalmente diferentes para essa mesma entrada.\nPORQUE\n• A gramática G não estabelece explicitamente regras de precedência e associatividade entre os operadores\naritméticos de adição (+) e multiplicação (x), permitindo que o operador + seja avaliado com maior prioridade\nque o operador x em uma das derivações possíveis.\nA respeito dessas asserções, assinale a opção correta:",
    "options": [
      "As duas asserções são verdadeiras, e a segunda é uma justificativa correta da primeira.",
      "As duas asserções são verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
      "A primeira asserção é uma proposição verdadeira, e a segunda é uma proposição falsa.",
      "A primeira asserção é uma proposição falsa, e a segunda é uma proposição verdadeira.",
      "Ambas as asserções são proposições falsas."
    ],
    "answer": "a",
    "number": 36
  },
  {
    "id": "N2-07",
    "exam": "N2",
    "text": "Na prática do desenvolvimento de compiladores, os engenheiros de software raramente escrevem todos os\nanalisadores sintáticos manualmente do zero, especialmente para linguagens complexas. Em vez disso, utilizam\nferramentas conhecidas como Geradores de Analisadores Sintáticos (ou Parser Generators). Essas ferramentas\nrecebem como entrada a especificação formal da gramática da linguagem (geralmente em arquivos de texto com regras\nde produção) e geram automaticamente o código-fonte do analisador sintático na linguagem de programação desejada\n(como C, Java ou Python).\nNo universo do desenvolvimento de compiladores, são exemplos amplamente conhecidos de ferramentas geradoras\nde analisadores sintáticos:",
    "options": [
      "Regex, Scanner e Linker.",
      "Yacc, Bison e ANTLR.",
      "GCC, Clang e MSVC.",
      "Git, Docker e Kubernetes.",
      "Kaspersky, Norton e McAfee."
    ],
    "answer": "b",
    "number": 37
  },
  {
    "id": "N2-08",
    "exam": "N2",
    "text": "Durante a fase de análise, o compilador precisa armazenar e consultar constantemente informações sobre os\nidentificadores encontrados no código-fonte (como nomes de variáveis, funções, classes e constantes). A estrutura de\ndados responsável por centralizar essas informações é chamada de Tabela de Símbolos. Embora ela seja preenchida\ninicialmente na análise léxica e amplamente utilizada na análise semântica para checagem de tipos, o analisador\nsintático também interage com ela para auxiliar no reconhecimento do escopo e na organização da árvore sintática.\nPara que o analisador sintático consiga associar corretamente as ocorrências de um identificador (por exemplo, uma\nvariável x) às suas respectivas regras gramaticais, o analisador léxico deve repassar para o analisador sintático:",
    "options": [
      "O endereço de memória física onde a variável será alocada durante a execução do programa.",
      "O código binário correspondente à instrução de máquina daquele identificador.",
      "Um token contendo a categoria gramatical (ex: IDENTIFICADOR) e um ponteiro/índice para a entrada\ncorrespondente na Tabela de Símbolos.",
      "O arquivo de texto original completo para que o analisador sintático busque a palavra manualmente.",
      "Uma lista contendo apenas os comentários que o programador inseriu ao lado da declaração da variável."
    ],
    "answer": "c",
    "number": 38
  },
  {
    "id": "N2-09",
    "exam": "N2",
    "text": "Em linguagens de programação modernas, é muito comum podermos reutilizar o mesmo nome para variáveis\ndiferentes, desde que elas estejam em blocos ou funções distintas (mecanismo conhecido como escopo). Por exemplo,\numa variável chamada total dentro da Funcao_A não se confunde com uma variável também chamada total dentro da\nFuncao_B. Para gerenciar essa característica sem misturar as informações, a Tabela de Símbolos não pode ser\napenas uma lista linear simples; ela precisa ser capaz de refletir a hierarquia de blocos do código-fonte enquanto a\nestrutura do programa é validada.\nPara dar suporte correto ao conceito de múltiplos escopos (locais e globais) em um programa, a Tabela de Símbolos\né frequentemente implementada ou organizada de forma a permitir que:",
    "options": [
      "Todos os dados antigos sejam apagados da tabela sempre que uma nova função for encontrada pelo analisador.",
      "Escopos diferentes sejam organizados em tabelas separadas (ou encadeadas em uma estrutura de pilha/árvore),\nde modo que a busca por um identificador ocorra do escopo mais interno (local) para o mais externo (global).",
      "O compilador proíba o programador de usar o mesmo nome de variável em qualquer parte do sistema, forçando\ncada nome a ser universalmente exclusivo.",
      "A tabela armazene apenas variáveis globais, descartando completamente as variáveis declaradas dentro de\nfunções.",
      "As variáveis sejam organizadas em ordem alfabética reversa para acelerar a execução do código de máquina final."
    ],
    "answer": "b",
    "number": 39
  },
  {
    "id": "N2-10",
    "exam": "N2",
    "text": "A Tabela de Símbolos funciona como um grande banco de dados interno do compilador durante todo o processo de\ntradução. Para cada identificador encontrado no código-fonte, não basta apenas registrar o seu nome (como media ou\ncalcular_total); o compilador precisa associar a esse nome uma série de propriedades adicionais, chamadas de\natributos. Esses atributos variam de acordo com a categoria do identificador e são cruciais para que o compilador\npossa, mais adiante, validar a lógica do programa e gerar o código final correto.\nQuando o compilador registra uma variável na Tabela de Símbolos, quais são os atributos mínimos essenciais que\ndevem ser armazenados junto ao nome dela para permitir as validações das próximas fases (como a análise\nsemântica)?",
    "options": [
      "A cor do texto da variável no editor de código e o número de linhas de comentários do arquivo.",
      "O tipo de dado (ex: int, float, char) e o escopo/bloco onde ela foi declarada.",
      "O nome do programador que criou a variável e a data da última modificação do arquivo.",
      "O algoritmo de ordenação que será usado para exibir as variáveis na tela do usuário.",
      "A quantidade de vezes que a tecla Espaço foi pressionada antes da declaração da variável."
    ],
    "answer": "b",
    "number": 40
  },
  {
    "id": "N2-11",
    "exam": "N2",
    "text": "Até o momento, vimos que a Tabela de Símbolos armazena atributos essenciais para variáveis, como tipo e escopo.\nNo entanto, um programa não é feito apenas de variáveis; ele também possui funções (ou procedimentos). Quando o\ncompilador encontra a declaração de uma função no código-fonte, ele precisa registrar esse nome na Tabela de\nSímbolos de uma maneira muito mais detalhada, pois a verificação de uma chamada de função exige a validação de\ntoda a sua assinatura.\nQuando o compilador armazena uma função na Tabela de Símbolos, além do nome da função, quais informações\nadicionais devem constar como atributos para que o compilador verifique se ela está sendo chamada corretamente no\ncódigo?",
    "options": [
      "O tipo de retorno da função, a quantidade de parâmetros que ela espera e o tipo de cada um desses parâmetros.",
      "O número de linhas de código que existem dentro do corpo da função e a quantidade de comentários.",
      "O nome do arquivo executável final e a quantidade de memória RAM disponível no computador do usuário.",
      "A velocidade em megahertz (MHz) com que o processador executará aquela função específica.",
      "O histórico de erros de sintaxe que o programador cometeu enquanto digitava o nome da função."
    ],
    "answer": "a",
    "number": 41
  },
  {
    "id": "N2-12",
    "exam": "N2",
    "text": "A Tabela de Símbolos é uma estrutura viva e dinâmica. Ela não nasce pronta; é construída incrementalmente à medida\nque o compilador faz a varredura do código-fonte. Cada fase da análise interage com essa tabela de uma maneira\ndiferente: algumas fases têm o papel principal de inserir novos dados (escrever), enquanto outras utilizam esses dados\npredominantemente para consultar e validar regras (ler).\nConsiderando o fluxo padrão de um compilador, as fases que são predominantemente responsáveis por inserir (criar)\nos identificadores na Tabela de Símbolos e por consultar (checar os atributos) desses identificadores para fins de\nvalidação lógica são, respectivamente:",
    "options": [
      "A Otimização de Código e a Geração de Código de Máquina.",
      "A Análise Léxica/Sintática e a Análise Semântica.",
      "O Editor de Texto e o Sistema Operacional.",
      "O Gravador de CD/DVD e o Disco Rígido.",
      "A Análise Semântica e o Ligador (Linker)."
    ],
    "answer": "b",
    "number": 42
  },
  {
    "id": "N2-13",
    "exam": "N2",
    "text": "Após o analisador sintático garantir que o código-fonte segue todas as regras estruturais e gramaticais da linguagem\n(como o posicionamento correto de parênteses, chaves e ponto-e-vírgula), entra em ação a Análise Semântica. Esta\nfase é responsável por verificar se o código faz sentido lógico e contextual, ou seja, se as instruções possuem um\n\"significado\" válido de acordo com as regras da linguagem de programação. Uma das tarefas mais importantes e\nconhecidas da análise semântica é a Verificação de Tipos (Type Checking).\nConsiderando o objetivo da Análise Semântica, assinale a opção que apresenta uma situação que seria detectada\ncomo um erro exclusivamente nesta fase:",
    "options": [
      "Uma linha de código terminando sem o caractere ponto-e-vírgula ;, quando a linguagem exige esse terminador.",
      "O uso de uma palavra que contém caracteres inválidos, como @ ou #, no meio do nome de uma variável.",
      "A tentativa de realizar uma operação de multiplicação entre uma variável do tipo String (texto) e uma variável do tipo\nBooleano (verdadeiro/falso).",
      "A falta do fechamento de uma chave } no final do bloco de uma função.",
      "A digitação da palavra-chave reservada if escrita incorretamente como iff."
    ],
    "answer": "c",
    "number": 43
  },
  {
    "id": "N2-14",
    "exam": "N2",
    "text": "Nem sempre a mistura de tipos de dados diferentes em uma expressão resulta em um erro semântico imediato. Muitas\nlinguagens de programação permitem que o compilador faça uma conversão automática de um tipo mais simples para\num tipo mais complexo para que a operação possa ser realizada com segurança. Por exemplo, ao somar um número\ninteiro (int) com um número de ponto flutuante (float), o compilador transforma o valor inteiro em real antes de efetuar\na soma. Esse processo de conversão automática e implícita de tipos feito pela análise semântica é conhecido como\nCoerção (ou Coercion).\nConsiderando o conceito de coerção de tipos na análise semântica, assinale a opção que apresenta um exemplo\nclássico desse mecanismo em uma linguagem como C ou Java:",
    "options": [
      "Transformar um bloco de comentários em código executável para acelerar o programa.",
      "Mudar o nome de uma variável de x para y automaticamente para evitar duplicidade no código.",
      "Interromper a compilação e forçar o usuário a apagar a linha de código que gerou o aviso (warning).",
      "Converter implicitamente o valor inteiro 5 para o valor real 5.0 ao atribuí-lo a uma variável do tipo float.",
      "Traduzir um comando while para um comando for de maneira invisível para otimizar o laço de repetição."
    ],
    "answer": "d",
    "number": 44
  },
  {
    "id": "N2-15",
    "exam": "N2",
    "text": "Além da verificação de tipos, a Análise Semântica é responsável por aplicar as regras de escopo e visibilidade da\nlinguagem de programação. Uma regra semântica praticamente universal em linguagens compiladas estaticamente\n(como C, C++ e Java) é a exigência de declaração prévia. Isso significa que o compilador precisa saber o que um\nidentificador representa (se é uma variável, uma função ou uma classe) antes que ele possa ser utilizado em qualquer\nexpressão lógica ou matemática do programa.\nConsidere um cenário em que um programador escreve a seguinte linha de código dentro de uma função:\nresultado = valor1 + 5;\nDo ponto de vista estritamente semântico, para que essa linha seja considerada válida e não gere um erro de\ncompilação, o analisador semântico precisa confirmar, por meio de consultas à Tabela de Símbolos, que:",
    "options": [
      "A palavra resultado foi digitada inteiramente em letras maiúsculas em todas as outras linhas do programa.",
      "O operador + foi customizado pelo usuário para funcionar como uma operação de divisão de texto.",
      "O número 5 foi declarado como uma variável global de texto no início do arquivo fonte.",
      "A variável valor1 possui exatamente o mesmo nome do arquivo em que o código foi salvo.",
      "Ambos os identificadores, resultado e valor1, foram declaradas previamente em um escopo acessível e possuem\ntipos de dados compatíveis com a operação."
    ],
    "answer": "e",
    "number": 45
  },
  {
    "id": "N2-16",
    "exam": "N2",
    "text": "A análise semântica realizada pelo compilador é chamada de Análise Semântica Estática, pois acontece inteiramente\nem tempo de compilação, ou seja, antes de o programa ser executado de fato. O compilador analisa o texto do código\ne tenta prever comportamentos lógicos baseando-se em regras fixas. No entanto, existem certos tipos de erros e\ncomportamentos que o compilador não consegue prever ou validar apenas olhando para o código estático, pois eles\ndependem exclusivamente dos valores reais que serão digitados pelo usuário ou processados no momento em que o\nprograma estiver rodando (tempo de execução).\nConsiderando a limitação da análise semântica estática realizada pelo compilador, assinale a opção que apresenta um\nerro que só pode ser detectado em tempo de execução (análise dinâmica) e que o compilador não consegue impedir\nde forma garantida durante a compilação:",
    "options": [
      "Uma tentativa de atribuir um texto literal \"Java\" a uma variável declarada como int.",
      "O uso de uma variável com o nome incorreto que não foi declarada em nenhum lugar do programa.",
      "Uma chamada de função que passa dois argumentos numéricos para uma função que exige quatro parâmetros.",
      "Uma divisão por zero que ocorre porque o usuário digitou o valor 0 em uma variável de entrada durante a execução\ndo programa.",
      "A falta de um ponto-e-vírgula ; ao final de uma instrução de atribuição."
    ],
    "answer": "d",
    "number": 46
  },
  {
    "id": "N2-17",
    "exam": "N2",
    "text": "À medida que o compilador avança pelas fases de análise, a árvore sintática gerada na fase anterior precisa ser\nenriquecida com as informações lógicas validadas pela análise semântica. Esse processo é conhecido como \"decorar\"\nou \"anotar\" a árvore. Uma Árvore Sintática Anotada contém, além da estrutura gramatical, atributos associados aos\nseus nós, como os tipos de dados de cada subexpressão. Isso permite que o compilador verifique a consistência\nsemântica de baixo para cima, propagando os tipos até a raiz da árvore.\nEm uma Árvore Sintática Anotada, o processo de inferência de tipos garante que, se um nó de operação de adição (+)\npossui dois nós filhos anotados como int (inteiro), o nó do resultado dessa operação seja anotado como int. Essa\nvalidação e propagação de atributos entre os nós da árvore é uma atribuição direta da:",
    "options": [
      "Fase de ligação externa realizada pelo sistema operacional.",
      "Análise Léxica, que avalia o tamanho do texto de cada identificador.",
      "Análise Semântica, por meio das regras de avaliação de atributos na árvore de derivação.",
      "Geração de Código Objeto, que converte a árvore diretamente em arquivos executáveis.",
      "Análise Sintática Preditiva, que impede a inserção de números reais em expressões matemáticas."
    ],
    "answer": "c",
    "number": 47
  },
  {
    "id": "N2-18",
    "exam": "N2",
    "text": "Durante a análise semântica, o compilador precisa garantir que o fluxo de controle de certas instruções faça sentido\ncom o contexto onde elas foram inseridas. Um exemplo clássico disso ocorre com as palavras-chave de desvio, como\no comando break (usado em linguagens como C, C++, Java e C#). Sintaticamente, o break é apenas um comando\nsimples isolado. No entanto, semanticamente, o compilador precisa validar se a sua aparição respeita as regras de\ncontexto da linguagem.\nPara que o uso do comando break seja considerado semanticamente válido pelo analisador, a verificação de contexto\ndeve garantir que este comando esteja localizado obrigatoriamente dentro do escopo de:",
    "options": [
      "Uma diretiva de inclusão de biblioteca global (como #include ou import).",
      "Uma estrutura de laço de repetição (como while, for, do-while) ou de um comando de seleção múltipla (switch).",
      "Uma declaração de variável constante do tipo ponto flutuante (float).",
      "Um bloco de comentários de múltiplas linhas criado pelo programador.",
      "Uma função principal que não receba nenhum parâmetro ou argumento de entrada."
    ],
    "answer": "b",
    "number": 48
  },
  {
    "id": "N2-19",
    "exam": "N2",
    "text": "A Análise Semântica não se limita a checar tipos de dados e escopos de variáveis; ela também realiza checagens no\nfluxo de controle do código-fonte para garantir que as regras lógicas de execução da linguagem sejam respeitadas.\nUm exemplo clássico desse tipo de verificação ocorre em funções que prometem retornar um valor de um determinado\ntipo (como uma função declarada para retornar um valor inteiro: int calcular()). O compilador precisa varrer todos os\ncaminhos possíveis dentro dessa função para garantir que o fluxo de execução termine de forma válida.\nEm uma linguagem como Java ou C#, se uma função for declarada com o tipo de retorno int, o analisador semântico\nemitirá uma mensagem de erro se identificar que:",
    "options": [
      "Existe pelo menos um caminho de execução estrutural (por exemplo, dentro de um bloco if/else) que chega ao fim\nda função sem passar por um comando return fornecendo um valor compatível.",
      "O programador utilizou a palavra-chave return mais de uma vez dentro do corpo da função, mesmo que em caminhos\nlógicos totalmente separados.",
      "O comando return está localizado exatamente na primeira linha da função, logo após a abertura das chaves.",
      "A função possui mais de dez linhas de código e utiliza variáveis locais de tipos diferentes.",
      "O valor retornado pela função é usado imediatamente em uma operação matemática na linha onde a função foi\nchamada."
    ],
    "answer": "a",
    "number": 49
  },
  {
    "id": "N2-20",
    "exam": "N2",
    "text": "Uma das grandes vantagens dos analisadores semânticos modernos é a capacidade de realizar análises de fluxo de\ndados para ajudar a melhorar a qualidade do código-fonte, emitindo avisos (warnings) ou otimizando o uso de recursos.\nUm exemplo prático disso ocorre quando o analisador varre o escopo de uma função e detecta que uma variável foi\ndevidamente declarada e até recebeu um valor inicial, mas nunca foi lida ou utilizada em nenhuma outra instrução\nsubsequente do programa.\nQuando o analisador semântico identifica uma variável que foi declarada, mas nunca foi utilizada no código, o\ncomportamento padrão da maioria dos compiladores modernos e o impacto dessa descoberta para o programa são:",
    "options": [
      "O compilador interrompe o processo imediatamente com um erro crítico, pois variáveis não utilizadas causam o\ntravamento físico do processador.",
      "O compilador emite um aviso (warning) para alertar o desenvolvedor sobre o código redundante, e essa variável\npode ser descartada pelas fases de síntese para economizar memória na execução.",
      "A análise semântica duplica automaticamente o tamanho dessa variável na memória para garantir que ela seja\nusada à força em algum momento.",
      "O analisador sintático é obrigado a reiniciar a leitura do arquivo do zero para tentar adivinhar onde o programador\nesqueceu de usar a variável.",
      "O programa gerado se recusa a rodar em sistemas operacionais de 64 bits, tornando-se compatível apenas com\nsistemas antigos de 8 bits."
    ],
    "answer": "b",
    "number": 50
  },
  {
    "id": "N2-21",
    "exam": "N2",
    "text": "Na implementação prática de um analisador léxico, ler o código-fonte caractere por caractere diretamente do disco\nrígido a cada passo seria uma operação extremamente lenta e ineficiente. Para resolver isso, os compiladores utilizam\ntécnicas de buffering, onde grandes blocos de texto são carregados de uma vez para a memória RAM. No modelo\npadrão de leitura de buffers, o analisador léxico gerencia a varredura desse bloco de texto utilizando uma estratégia\nbaseada em dois ponteiros (ou apontadores) que se movem de forma coordenada para isolar e reconhecer cada token.\nConsiderando a mecânica de funcionamento do modelo padrão de buffer com dois ponteiros, a função do Apontador\nde Início (lexemeBegin) e a função do Apontador de Busca (forward) são, respectivamente:",
    "options": [
      "Indicar onde o arquivo de código-fonte termina no disco e apontar para a linha onde o erro de sintaxe aconteceu.",
      "Armazenar o nome do programador que criou o código e contar quantas variáveis globais existem no sistema.",
      "Marcar o caractere inicial do token que está sendo extraído no momento e avançar caractere por caractere para\nescanear o texto até que um padrão válido (ou fim de token) seja reconhecido.",
      "Traduzir os caracteres lidos para código binário e salvar o arquivo em uma pasta compactada de backup.",
      "Ignorar completamente as palavras-chave reservadas da linguagem e focar apenas na leitura de números e\ncomentários."
    ],
    "answer": "c",
    "number": 51
  },
  {
    "id": "N2-22",
    "exam": "N2",
    "text": "Durante o desenvolvimento do analisador léxico, frequentemente nos deparamos com situações em que o programa\nnão consegue ter certeza de qual token está lendo sem olhar o que vem logo em seguida no buffer. Esse mecanismo\né chamado de Lookahead (olhar adiante). Por exemplo, ao ler o caractere >, o analisador não pode gerar imediatamente\no token de \"maior que\", pois o próximo caractere pode ser um =, formando o operador \"maior ou igual\" (>=). Caso o\npróximo caractere seja apenas uma letra ou espaço, o analisador descobre que o operador era realmente apenas >, e\no ponteiro de busca precisa lidar com esse caractere lido a mais.\nNo modelo de leitura com dois ponteiros, quando o analisador avança o Apontador de Busca (forward) para ler um\ncaractere adiante e descobre que aquele caractere já faz parte do próximo token, qual ação o algoritmo deve tomar\npara garantir que nenhum caractere seja perdido ou processado fora de ordem?",
    "options": [
      "Apagar todo o conteúdo do buffer e forçar o usuário a reiniciar o computador para limpar a memória RAM.",
      "Ignorar o caractere lido a mais, deixando que o analisador sintático descubra sozinho qual era a letra que sumiu.",
      "Mover o Apontador de Início para o final do arquivo texto, interrompendo a análise de todo o código-fonte restante.",
      "Decrementar (recuar) o Apontador de Busca em uma posição, fazendo-o voltar para o final do lexema atual antes\nde salvar e emitir o token correto.",
      "Duplicar o caractere misterioso dentro de uma lista encadeada para que ele seja tratado apenas na fase de\notimização de código."
    ],
    "answer": "d",
    "number": 52
  },
  {
    "id": "N2-23",
    "exam": "N2",
    "text": "Embora a leitura caractere por caractere seja resolvida com o uso de um buffer na memória, arquivos de código-fonte\ngrandes ainda podem estourar o espaço alocado para um único array de texto estático. Para resolver esse problema\nsem precisar alocar um espaço gigantesco de memória de forma desnecessária, os desenvolvedores de compiladores\nutilizam a técnica de Buffer Duplo (ou buffers gêmeos). Nessa abordagem, a memória alocada é dividida em duas\nmetades de tamanho fixo (N caracteres cada), e o analisador léxico alterna o processamento entre elas.\nNo esquema de funcionamento de um Buffer Duplo gerenciado por ponteiros, o que acontece imediatamente quando\no Apontador de Busca (forward) atinge o final da primeira metade do buffer?",
    "options": [
      "O compilador trava e emite uma tela azul de erro no sistema operacional por falta de espaço físico.",
      "O programa inverte a ordem de leitura do texto, passando a ler o código de trás para frente.",
      "Os ponteiros param de se mover e a análise léxica é finalizada, assumindo que o programa acabou ali.",
      "O analisador léxico copia todos os tokens já descobertos de volta para o disco rígido e esvazia a lixeira do sistema.",
      "A segunda metade do buffer começa a ser lida pelo ponteiro de busca, enquanto o sistema inicia a recarga\nautomática de novos caracteres do arquivo de disco na primeira metade (se necessário), mantendo o fluxo de leitura\ncontínuo."
    ],
    "answer": "e",
    "number": 53
  },
  {
    "id": "N2-24",
    "exam": "N2",
    "text": "Na implementação prática de compiladores, a teoria clássica dita que o analisador léxico deve ser modelado por meio\nde Autômatos Finitos Determinísticos (AFD). No entanto, para simplificar a arquitetura do software e aproveitar os\nrecursos nativos das linguagens de programação modernas, os desenvolvedores frequentemente adotam uma\nabordagem baseada em Buffers Primários em memória (usando coleções como ArrayList) combinados com o\npoder de processamento de Expressões Regulares (Regex). Essa estratégia permite mapear os padrões de texto\ndos tokens de forma direta e declarativa, sem a necessidade de construir manualmente uma máquina de estados\ncomplexa.\nAo projetar um analisador léxico que carrega as linhas do código-fonte em um buffer do tipo ArrayList e utiliza\nExpressões Regulares (Regex) para identificar os tokens, a principal vantagem prática dessa abordagem em\ncomparação com a implementação manual de um Autômato Finito (AFD) baseado em estruturas de controle\n(switch/case e laços) é:",
    "options": [
      "A facilidade de manutenção e escrita do código, visto que os padrões de tokens (como números e identificadores)\nsão definidos textualmente por regras Regex, reduzindo drasticamente o tamanho do código-fonte do analisador.",
      "A garantia de que o programa consumirá menos memória RAM do que qualquer outra técnica de compilação\nexistente no mercado.",
      "O fato de a Regex dispensar completamente a necessidade de o analisador léxico interagir com a Tabela de\nSímbolos.",
      "A capacidade de corrigir erros de sintaxe e lógica de forma 100% automática diretamente no arquivo do usuário\nantes de rodar o sistema.",
      "A eliminação completa da fase de análise sintática, permitindo que a Regex gere o código binário de máquina de\nmaneira imediata."
    ],
    "answer": "a",
    "number": 54
  },
  {
    "id": "N2-25",
    "exam": "N2",
    "text": "Quando escolhemos implementar um analisador léxico utilizando um buffer baseado em uma coleção do tipo ArrayList\n(que armazena as linhas ou os caracteres do código-fonte), o processo de varredura deixa de ser controlado por\nestados mecânicos e passa a ser guiado por um motor de Expressões Regulares (Regex). O algoritmo percorre o texto\ncontido na coleção e tenta \"casar\" (match) a string atual com os padrões definidos para a linguagem de programação\n(como palavras-chave, operadores e constantes). Para que essa extração funcione corretamente, o motor de Regex\nprecisa testar os padrões na ordem certa e a partir da posição exata onde o último token foi encontrado.\nConsiderando a lógica de programação desse analisador léxico baseado em ArrayList e Regex, o que acontece\nimediatamente após o motor de Regex encontrar um casamento perfeito (ex: identificar que o texto 125 casa com o\npadrão de números ^[0-9]+)?",
    "options": [
      "O compilador interrompe a execução e exige que o usuário reescreva o número em formato binário.",
      "O lexema correspondente é extraído, um objeto Token é gerado e adicionado à lista de tokens, e o índice de leitura\ndo buffer é avançado para o final desse texto casado, preparando a próxima busca.",
      "O texto é apagado permanentemente do ArrayList para impedir que a análise sintática consiga ler os dados do\nprograma.",
      "O motor de Regex entra em um laço infinito, pois o uso de coleções em memória impede o avanço de ponteiros ou\níndices de texto.",
      "A string é enviada para o banco de dados do sistema operacional para ser traduzida para uma linguagem de alto\nnível."
    ],
    "answer": "b",
    "number": 55
  },
  {
    "id": "N2-26",
    "exam": "N2",
    "text": "Um dos maiores desafios ao implementar um analisador léxico baseado puramente em Expressões Regulares (Regex)\ne coleções em memória é lidar com os padrões que se sobrepõem. Por exemplo, a palavra-chave if casa perfeitamente\ncom a Regex de palavras reservadas ^(if|while|else), mas também casa com a Regex genérica de\nidentificadores/nomes de variáveis ^[a-zA-Z_]\\w*. Como o motor de Regex avalia as regras de forma linear, se a\nestrutura do programa não definir uma ordem rígida de teste para as expressões, o compilador pode classificar\nelementos de forma totalmente errônea.\nPara resolver o problema da sobreposição de padrões em um analisador léxico baseado em Regex, o desenvolvedor\ndeve estruturar o código do programa de modo que:",
    "options": [
      "A Regex de identificadores genéricos seja testada antes de qualquer outra regra, pois as variáveis são mais comuns\nque as palavras reservadas.",
      "O programa misture todas as expressões em uma única Regex gigante e deixe que o computador escolha o\nresultado de forma aleatória.",
      "As Regex de maior especificidade (como palavras-chave reservadas e operadores compostos como >=) sejam\ntestadas antes das Regex de escopo geral (como identificadores genéricos e operadores simples como >).",
      "O analisador ignore a ordem dos testes e envie todas as strings ambíguas para serem resolvidas pelo usuário em\ntempo de execução.",
      "As expressões regulares sejam aplicadas apenas nos comentários do código, deixando as instruções do programa\nsem nenhuma verificação de padrão."
    ],
    "answer": "c",
    "number": 56
  },
  {
    "id": "N2-27",
    "exam": "N2",
    "text": "Durante o desenvolvimento de um analisador léxico, uma das estruturas mais importantes é a lista de palavras-chave\nreservadas da linguagem (como if, while, else, return, int). Em vez de criar uma Expressão Regular (Regex) gigantesca\ncontendo todas as palavras ou fazer múltiplos laços de repetição em um vetor simples — o que tornaria a busca lenta\nà medida que a linguagem cresce —, os desenvolvedores utilizam coleções baseadas em tabelas de dispersão, como\no HashMap (em Java) ou Dictionary (em C#). Essas coleções permitem associar uma chave (o texto lido) a um valor\n(o tipo do token) com busca em tempo constante.\nAo utilizar uma coleção do tipo HashMap para gerenciar as palavras reservadas em um analisador léxico, qual é a\nmecânica correta adotada pelo programa para identificar se um texto qualquer (ex: a palavra while) é uma palavra-\nchave ou apenas o nome de uma variável genérica?",
    "options": [
      "O programa limpa todo o conteúdo do HashMap a cada caractere lido e força o computador a reiniciar a contagem\nde linhas do arquivo.",
      "O analisador converte a palavra para o formato decimal e soma o código ASCII de cada letra para ver se o resultado\né um número primo.",
      "A coleção faz uma varredura sequencial comparando a palavra com todos os arquivos salvos no disco rígido do\nusuário.",
      "O analisador faz uma busca direta no HashMap usando o texto como chave: se o método de consulta retornar um\nvalor válido, significa que é uma palavra-chave reservada; caso retorne nulo, o texto é classificado como um\nidentificador comum.",
      "O HashMap altera o texto original da palavra para uma sequência aleatória de símbolos antes de enviar o resultado\npara a análise sintática."
    ],
    "answer": "d",
    "number": 57
  },
  {
    "id": "N2-28",
    "exam": "N2",
    "text": "À medida que o analisador léxico executa a varredura do buffer de texto, cada lexema isolado e validado precisa ser\ntransformado em um objeto da classe Token. Esse objeto armazena informações essenciais como o tipo do token (ex:\nOPERADOR, NUMERO, PALAVRA_RESERVADA), o valor textual (ex: \"+\", \"10\", \"if\") e a linha/coluna onde foi\nencontrado. No entanto, o analisador léxico não pode simplesmente descartar esses objetos após criá-los; ele precisa\nagrupá-los em uma coleção ordenada que preserve exatamente a sequência em que foram digitados, para que possam\nser entregues à fase de análise sintática.\nPara armazenar a sequência linear de objetos Token gerados durante o processamento do código-fonte, os\ndesenvolvedores de compiladores utilizam frequentemente coleções do tipo lista (como ArrayList<Token> ou\nLinkedList<Token>). A principal razão para a escolha desse tipo de coleção nesta etapa específica é que as listas\ngarantem:",
    "options": [
      "Que todos os tokens duplicados (como múltiplos operadores +) sejam automaticamente apagados do programa para\neconomizar espaço.",
      "Que os tokens sejam organizados automaticamente em ordem alfabética, misturando os comandos do programa\npara confundir o montador.",
      "O bloqueio do acesso de outras fases do compilador, impedindo que a análise sintática consiga ler os dados\nestruturados.",
      "Que os números inteiros sejam convertidos em textos criptografados antes de serem salvos na memória RAM.",
      "A preservação da ordem cronológica e sequencial de leitura dos tokens, permitindo que o analisador sintático\nprocesse as instruções exatamente na mesma estrutura em que o programador as escreveu."
    ],
    "answer": "e",
    "number": 58
  },
  {
    "id": "N2-29",
    "exam": "N2",
    "text": "Um analisador léxico robusto não pode simplesmente interromper a execução do compilador no primeiro caractere\ninválido que encontrar. Uma boa prática de engenharia de software é fazer com que o analisador colete o maior número\npossível de anomalias textuais em uma única execução. Para gerenciar essas falhas (como caracteres que não\npertencem ao alfabeto da linguagem ou constantes de texto que nunca foram fechadas), o programa utiliza uma coleção\ndedicada à captura de relatórios de erros, separada da lista de tokens válidos.\nAo implementar uma lista de relatórios de erros usando uma coleção como ArrayList<ErroLexico>, qual é a principal\nutilidade prática dessa estrutura de dados para o usuário do compilador ao final da execução da fase léxica?",
    "options": [
      "Permitir que o compilador acumule todas as falhas encontradas ao longo do arquivo e exiba um relatório completo\ncom as linhas e descrições dos erros, ajudando o programador a corrigir tudo de uma só vez.",
      "Apagar automaticamente os arquivos do sistema operacional que contiverem erros de digitação para punir o\ndesenvolvedor desatento.",
      "Enviar mensagens de texto automáticas para o celular do programador toda vez que ele esquecer de fechar uma\nstring.",
      "Forçar o computador a ignorar os erros lidos e gerar um programa executável perfeito, mesmo que o código-fonte\nesteja incompleto.",
      "Substituir os caracteres inválidos por nomes de Pokémons aleatórios na Tabela de Símbolos para descontrair o\nambiente de desenvolvimento."
    ],
    "answer": "a",
    "number": 59
  },
  {
    "id": "N2-30",
    "exam": "N2",
    "text": "Observe o seguinte trecho de código extraído da classe LeitorDeArquivo.java, utilizada como base no desenvolvimento\ndo nosso analisador léxico para a linguagem Pascal:\npublic void importarArquivoParaLeitor(){\nthis.leitor = null;\ntry {\nthis.leitor = new BufferedReader(new FileReader(this.caminhoDoArquivo));\n} catch (IOException e) {\nSystem.err.println(\"Erro ao ler o arquivo.\");\nSystem.err.println(e);\n}\n}\nDo ponto de vista da arquitetura de compiladores, a escolha de encapsular um FileReader dentro de um\nBufferedReader não é apenas uma conveniência de programação, mas sim uma decisão de projeto alinhada com as\nboas práticas de eficiência na fase de análise léxica.\nEnunciado: Considerando o código acima e os conceitos de manipulação de buffers na análise léxica, assinale a\nalternativa que descreve corretamente o papel técnico do BufferedReader nesse mecanismo e o comportamento do\nbloco try-catch:",
    "options": [
      "O BufferedReader força o compilador a traduzir instantaneamente o código Pascal para Java, enquanto o catch\nimpede que o usuário digite palavras com erros de sintaxe.",
      "O BufferedReader evita acessos repetitivos ao disco rígido ao carregar um bloco de caracteres para a memória RAM\nde uma vez, enquanto o catch garante um tratamento robusto caso o arquivo Pascal não seja encontrado ou esteja\ninacessível.",
      "A função do BufferedReader é criptografar o arquivo fonte para que o sistema operacional não descubra as variáveis\ncriadas pelo programador, invalidando o bloco catch.",
      "O uso do BufferedReader serve exclusivamente para apagar os comentários do código-fonte Pascal antes mesmo\nde o arquivo ser aberto pelo FileReader.",
      "O BufferedReader lê todo o arquivo de trás para frente para acelerar o motor de Regex, e o bloco catch duplica o\ntamanho do arquivo se houver pouca memória RAM disponível."
    ],
    "answer": "b",
    "number": 60
  },
  {
    "id": "N2-31",
    "exam": "N2",
    "text": "Ao analisar a arquitetura da classe LeitorDeArquivo.java, observamos o método carregarArquivoParaLeitor(), cuja\nfunção é interagir com o usuário via console para montar o caminho do arquivo de testes Pascal que será compilado:\npublic void carregarArquivoParaLeitor(){\n// ... trecho omitido ...\nSystem.out.print(\"Digite o caminho do diretório: \");\nString diretorio = sc.next();\nSystem.out.print(\"Digite o nome do arquivo: \");\nString nomeArquivo = sc.next();\nthis.caminhoDoArquivo = diretorio + \"\\\\\" + nomeArquivo;\nsc.close();\n}\nEm sistemas operacionais baseados em Unix/Linux, o caractere separador de diretórios padrão é a barra normal (/),\nenquanto em sistemas Windows utiliza-se a barra invertida (\\). No código implementado, a linha que monta o caminho\ndo arquivo utiliza uma dupla barra invertida (\"\\\\\").\nConsiderando os conceitos de programação em Java aplicados ao desenvolvimento desse compilador, por que foi\nnecessário utilizar duas barras invertidas (\"\\\\\") em vez de apenas uma (\"\\\") na concatenação da string que define o\ncaminho do arquivo?",
    "options": [
      "Porque em Java a barra invertida única é um caractere de escape usado para iniciar comandos especiais (como \\n\nou \\t); portanto, para que o compilador Java interprete uma barra invertida literal no texto, ela precisa ser duplicada.",
      "Porque o compilador Pascal exige que todos os arquivos fontes sejam salvos obrigatoriamente em caminhos\nduplicados na memória RAM para evitar perda de dados.",
      "Porque a segunda barra funciona como um operador de soma binária que acelera a velocidade com que o\nBufferedReader consegue ler o arquivo do disco.",
      "Porque o uso de uma barra única apagaria o conteúdo da variável diretorio antes que ela pudesse ser juntada com\no nomeArquivo.",
      "Porque a linguagem Java proíbe a concatenação de strings se o caminho do diretório contiver letras maiúsculas."
    ],
    "answer": "a",
    "number": 61
  },
  {
    "id": "N2-32",
    "exam": "N2",
    "text": "Um detalhe importante na classe LeitorDeArquivo.java diz respeito ao ciclo de vida e ao estado dos atributos da classe.\nObserve que o método importarArquivoParaLeitor() inicia definindo explicitamente o atributo this.leitor como null, antes\nde tentar instanciar os objetos de leitura dentro do bloco protetor try-catch:\npublic void importarArquivoParaLeitor(){\nthis.leitor = null;\ntry {\nthis.leitor = new BufferedReader(new FileReader(this.caminhoDoArquivo));\n} catch (IOException e) {\nSystem.err.println(\"Erro ao ler o arquivo.\");\nSystem.err.println(e);\n}\n}\nDo ponto de vista da lógica do programa e do gerenciamento de estado do compilador, qual é o impacto prático de\ndefinir this.leitor = null na primeira linha deste método caso o bloco catch seja acionado (por exemplo, se o arquivo\nPascal digitado não existir)?",
    "options": [
      "O método ignora o erro e força a criação de um buffer fantasma contendo um código Pascal genérico de exemplo.",
      "O programa entra em um loop infinito tentando recarregar o arquivo até que o usuário exclua a pasta do sistema.",
      "O atributo this.leitor mantém o arquivo que foi aberto na execução anterior, mascarando o erro atual.",
      "O sistema operacional do computador é notificado para bloquear novas leituras de disco por questões de segurança\nde dados.",
      "Garante que qualquer referência antiga ou leitor aberto anteriormente seja descartado, fazendo com que o objeto\nleitor fique terminantemente nulo, permitindo que as próximas fases do compilador saibam com segurança que o\narquivo atual falhou ao ser carregado."
    ],
    "answer": "e",
    "number": 62
  },
  {
    "id": "N2-33",
    "exam": "N2",
    "text": "Observe o método processarArquivoNoBufferPrimario(), pertencente à classe BufferPrimario.java do nosso projeto de\ncompilador Pascal:\npublic void processarArquivoNoBufferPrimario(){\nthis.bufferPrimario = new ArrayList<>();\ntry {\nString linha = \"\";\nwhile((linha = this.leitor.readLine()) != null){\nthis.bufferPrimario.add(linha);\n}\n} catch (IOException e) {\n// ... tratamento de erro ...\n}\n// ... bloco finally ...\n}\nA estratégia adotada acima transfere todo o conteúdo do arquivo de texto para uma coleção dinâmica em memória\nRAM antes de iniciar o isolamento dos tokens.\nAnalisando a estrutura do laço while presente no método acima, assinale a alternativa que descreve corretamente\ncomo o programa identifica que o arquivo de código-fonte Pascal chegou ao fim (Fim de Arquivo / EOF - End of File) e\nqual a consequência do método readLine() nesse processo:",
    "options": [
      "O método readLine() lê o arquivo linha por linha e retorna null quando não há mais conteúdo a ser lido; ao receber\nesse valor nulo, a condição do while torna-se falsa, encerrando o laço com todas as linhas armazenadas\nsequencialmente no ArrayList.",
      "O laço while roda infinitamente até estourar a memória do computador, pois a variável linha nunca é atualizada com\nos dados do leitor.",
      "O critério de parada acontece quando a variável linha recebe o texto \"EOF\", que o próprio programador é obrigado\na digitar na última linha do seu script Pascal.",
      "O método readLine() joga um erro do tipo IOException de propósito para forçar o programa a sair do laço while pelo\nbloco catch quando o arquivo acaba.",
      "A condição != null serve para verificar se o arquivo possui vírus, limpando o buffer caso encontre caracteres em\nordem alfabética reversa."
    ],
    "answer": "a",
    "number": 63
  },
  {
    "id": "N2-34",
    "exam": "N2",
    "text": "Ao analisarmos o método processarArquivoNoBufferPrimario(), notamos a presença de uma estrutura completa de\ntratamento de exceções composta pelos blocos try, catch e finally. Veja o trecho final do método:\npublic void processarArquivoNoBufferPrimario(){\n// ... trecho try/catch omitido ...\n} finally {\nif(this.leitor != null){\ntry {\nthis.leitor.close();\n} catch (IOException e) {\nSystem.err.println(\"Erro ao fechar o arquivo.\");\nSystem.err.println(e);\n}\n}\n}\n}\nA inclusão do bloco finally para invocar o método close() é uma prática fundamental de engenharia de software ao\nlidarmos com fluxos de Entrada e Saída (I/O).\nConsiderando a lógica de execução da linguagem Java, qual é a principal razão técnica para a existência do bloco\nfinally neste método e o que aconteceria se o método leitor.close() fosse colocado apenas ao término do bloco try?",
    "options": [
      "O bloco finally serve para apagar o ArrayList caso o arquivo seja muito grande, liberando espaço para o sistema\noperacional.",
      "O bloco finally garante a execução do seu código independentemente de ter ocorrido um erro ou não; se o close()\nestivesse apenas no try e um erro acontecesse durante a leitura, o arquivo permaneceria aberto e travado no sistema\noperacional.",
      "O finally é executado apenas quando a memória RAM do computador atinge 100% de uso, servindo como um alarme\nde segurança.",
      "Colocar o close() dentro do finally força o motor de Regex a reiniciar a busca por tokens de trás para frente no buffer\nprimário.",
      "O bloco finally impede que o método processarArquivoNoBufferPrimario() seja chamado novamente por outras\nclasses do sistema."
    ],
    "answer": "b",
    "number": 64
  },
  {
    "id": "N2-35",
    "exam": "N2",
    "text": "Durante o desenvolvimento de sistemas complexos como compiladores, é uma prática comum os programadores\ninserirem métodos auxiliares para inspecionar o estado interno das estruturas de dados. Observe o método\nimprimirConteudoDoBufferPrimario() presente na classe BufferPrimario.java:\npublic void imprimirConteudoDoBufferPrimario(Boolean flag){\nif (flag){\nSystem.out.println(\"------------------------------------\");\nSystem.out.println(\"### Conteúdo do Buffer Primário: ###\");\nfor (String texto : bufferPrimario) {\nSystem.out.println(texto);\n}\n}\n}\nA presença do parâmetro flag do tipo Boolean permite controlar a exibição dessas informações no console.\nSob a perspectiva do desenvolvimento e depuração (debugging) de um analisador léxico, qual é o propósito de\ncondicionar a impressão do ArrayList a uma variável flag e qual seria o impacto de deixar essa impressão ativa por\npadrão em todas as execuções do compilador?",
    "options": [
      "A flag serve para criptografar as linhas do arquivo Pascal, e deixar a impressão ativa apagaria o código-fonte do\nusuário de forma definitiva.",
      "O uso da flag obriga o processador a duplicar o tamanho das strings lidas, tornando o compilador mais lento quando\no valor for falso.",
      "A flag funciona como um interruptor de depuração; mantê-la ativa por padrão em ambiente de produção geraria\npoluição visual desnecessária no console e reduziria a performance de tempo de execução devido ao alto custo das\noperações de saída em tela (System.out.println).",
      "O parâmetro impede que o analisador sintático consiga ler a lista de tokens se o valor enviado for verdadeiro.",
      "A variável flag converte automaticamente comandos Pascal antigos para os padrões modernos de arquiteturas de\n64 bits."
    ],
    "answer": "c",
    "number": 65
  },
  {
    "id": "N2-36",
    "exam": "N2",
    "text": "Analise o método processarBufferSecundario() presente na classe BufferSecundario.java, que realiza a tokenização\ndo código-fonte Pascal armazenado no buffer primário:\npublic void processarBufferSecundario(){\nString capture =\nPadroesLexicos.COMMENT + \"|\" +\nPadroesLexicos.NUMBER + \"|\" +\nPadroesLexicos.LITERAL + \"|\" +\nPadroesLexicos.WORDS + \"|\" +\nPadroesLexicos.CHARACTER;\nthis.bufferSecundario = new ArrayList<>();\nArrayList<String> lexemasProcessados = new ArrayList<>();\nPattern patt = Pattern.compile(capture);\nint linha = 1;\nfor (String texto : bufferPrimario) {\nMatcher mat = patt.matcher(texto);\nToken valor = null;\nwhile(mat.find()){\nString lexema = mat.group();\nint posicao = mat.start();\nif ((lexema.startsWith(\"//\")) || (lexema.startsWith(\"(*\"))){\ncontinue;\n}\nif (lexemasProcessados.contains(lexema) == false){\nlexemasProcessados.add(lexema);\n// ... bloco de classificação e inserção de tokens ...\n}\n}\nlinha++;\n}\n}\nA arquitetura acima adota um mecanismo de busca global baseado na concatenação de padrões via operador de\nalternância (|) da Regex, combinado com uma lista de controle chamada lexemasProcessados.\nUma análise técnica avançada sobre o comportamento desse algoritmo revela um efeito colateral (limitação) gerado\nespecificamente pela verificação if (lexemasProcessados.contains(lexema) == false). Assinale a alternativa que\ndescreve corretamente o impacto dessa condicional no fluxo final da corrente de tokens armazenada em\nbufferSecundario:",
    "options": [
      "O algoritmo entrará em deadlock se o programador declarar duas variáveis com tipos de dados diferentes na mesma\nlinha do arquivo Pascal.",
      "A lista impede o estouro de memória, mas força o motor de Regex a reiniciar a contagem do índice da linha de volta\npara 1 a cada repetição descoberta.",
      "O compilador passará a ignorar comentários duplicados, fazendo com que o código de máquina gerado sofra\nalterações semânticas em tempo de execução.",
      "A corrente de tokens coletada no bufferSecundario perderá a repetição cronológica de lexemas idênticos; se uma\nvariável (ex: x) for utilizada dez vezes ao longo do código Pascal, ela será transformada em um objeto Token e inserida\nna lista final apenas na primeira vez em que aparecer.",
      "A validação faz com que o método mat.group() jogue uma exceção do tipo PatternSyntaxException, interrompendo\na análise léxica imediatamente na primeira linha."
    ],
    "answer": "d",
    "number": 66
  },
  {
    "id": "N2-37",
    "exam": "N2",
    "text": "Analise a definição da string capture utilizada para compilar o padrão global de busca por Expressões Regulares no\nmétodo processarBufferSecundario():\nString capture =\nPadroesLexicos.COMMENT + \"|\" +\nPadroesLexicos.NUMBER + \"|\" +\nPadroesLexicos.LITERAL + \"|\" +\nPadroesLexicos.WORDS + \"|\" +\nPadroesLexicos.CHARACTER;\nNa teoria de compiladores, os padrões léxicos de uma linguagem de programação frequentemente se sobrepõem. Por\nexemplo, uma palavra-chave reservada (como if ou while contidas em WORDS) pode satisfazer perfeitamente a\nexpressão regular destinada a identificar um nome de variável genérico (CHARACTER ou IDENTIFIER). O motor de\nbusca do Java (java.util.regex) avalia as alternativas separadas por barras verticais (|) da esquerda para a direita de\nforma gulosa (greedy) e sequencial.\nConsiderando a arquitetura interna do motor de Regex do Java e a string de captura estruturada acima, qual seria a\nconsequência técnica avançada se um desenvolvedor alterasse a ordem dessa concatenação, movendo o\nPadroesLexicos.CHARACTER (que valida identificadores/letras genéricas) para a primeira posição da string capture?",
    "options": [
      "O método Pattern.compile() falharia acusando um erro de sintaxe de Regex, impedindo a inicialização do buffer\nsecundário.",
      "Os comentários iniciados por // seriam transformados em números inteiros na memória interna do compilador.",
      "O motor de Regex entraria em recursão infinita, travando a máquina virtual do Java (JVM) por falta de memória de\npilha (StackOverflow).",
      "O analisador léxico passaria a classificar todas as strings literais entre aspas como se fossem palavras reservadas\nda tabela de símbolos.",
      "O padrão genérico de caracteres passaria a ter precedência sobre todos os outros; ao ler uma linha de código, o\nmétodo mat.find() casaria palavras-chave e strings como caracteres isolados/identificadores, impedindo que o laço\nidentificasse corretamente palavras reservadas ou comentários subsequentes que dependessem dessa\ncorrespondência inicial."
    ],
    "answer": "e",
    "number": 67
  },
  {
    "id": "N2-38",
    "exam": "N2",
    "text": "Analise a lógica interna de classificação de lexemas executada dentro do laço while do método\nprocessarBufferSecundario():\nif (TabelaSimboloLinguagem.contem(lexema)){\nTokenType tipo = TabelaSimboloLinguagem.buscar(lexema);\nvalor = new Token(tipo, lexema, linha, posicao);\n}\nelse if (this.IsCharacter(lexema)){\nvalor = new Token(TokenType.CHARACTER, lexema, linha, posicao);\n}\nelse if (this.IsIdentifier(lexema)){\nvalor = new Token(TokenType.IDENTIFIER, lexema, linha, posicao);\n}\n// ... outros sub-métodos de validação ...\nNessa estrutura, o analisador léxico consulta primeiro uma classe estática externa global (TabelaSimboloLinguagem)\nantes de recorrer aos seus métodos de validação locais baseados em Regex (como IsCharacter e IsIdentifier).\nConsiderando os princípios de arquitetura de compiladores e engenharia de software, avalie o impacto técnico\navançado desse acoplamento entre a fase de varredura do buffer e a tabela de palavras reservadas estática da\nlinguagem:",
    "options": [
      "Essa ordem garante o correto reconhecimento de palavras-chave, pois se o lexema existir na tabela global (ex:\n\"program\"), ele será imediatamente classificado com seu tipo específico; contudo, introduz uma dependência estática\nrígida, o que significa que qualquer alteração na gramática da linguagem Pascal exigirá uma modificação direta na\nclasse externa e impossibilitará o reuso desse analisador léxico para outra linguagem sem refatoração.",
      "A consulta inicial faz com que o método TabelaSimboloLinguagem.buscar(lexema) altere fisicamente o texto lido,\ninserindo espaços em branco que quebram o casamento com o método IsIdentifier(lexema).",
      "O compilador Java gerará um erro de tempo de execução (NullPointerException) obrigatório caso a tabela de\nsímbolos global retorne um identificador que não comece com uma letra maiúscula.",
      "Essa estratégia elimina completamente a utilidade dos métodos IsLiteral() e IsNumber(), pois a tabela de símbolos\nestática já armazena antecipadamente todos os números inteiros e decimais possíveis da matemática.",
      "A validação impede o funcionamento do laço while, visto que coleções em Java não permitem a leitura de tipos\nTokenType fora de estruturas baseadas em matrizes tridimensionais."
    ],
    "answer": "a",
    "number": 68
  },
  {
    "id": "N2-39",
    "exam": "N2",
    "text": "Considere o método processarArquivoNoBufferPrimario() da classe BufferPrimario.java, cujo objetivo é ler as linhas do\ncódigo-fonte Pascal a partir de um leitor de fluxo e armazená-las em uma lista em memória. No entanto, um trecho\ncrucial do algoritmo de leitura foi removido e substituído por uma lacuna marcada como [LACUNA_LOGICA]:\npublic void processarArquivoNoBufferPrimario(){\nthis.bufferPrimario = new ArrayList<>();\ntry {\nString linha = \"\";\n/* [LACUNA_LOGICA] */\n} catch (IOException e) {\nSystem.err.println(\"Erro ao carregar o arquivo.\");\nSystem.err.println(e);\n} // ... bloco finally ocultado ...\n}\nPara que o método funcione corretamente, preenchendo o bufferPrimario linha por linha até o fim do arquivo sem gerar\nlaços infinitos ou erros de compilação em Java, o trecho /* [LACUNA_LOGICA] */ deve ser preenchido exatamente\npor:",
    "options": [
      "while(this.leitor.readLine() != \"\"){\nthis.bufferPrimario.add(linha);\n}",
      "while((linha = this.leitor.readLine()) != null){\nthis.bufferPrimario.add(linha);\n}",
      "for(linha in this.leitor){\nthis.bufferPrimario.add(this.leitor.toString());\n}",
      "if((linha == this.leitor.readLine()) != null){\nthis.bufferPrimario.add(linha);\n}",
      "while(this.leitor.ready()){\nlinha = \"linha\";\nthis.bufferPrimario.add(linha);\n}"
    ],
    "answer": "b",
    "number": 69
  },
  {
    "id": "N2-40",
    "exam": "N2",
    "text": "Analise o método carregarArquivoParaLeitor() da classe LeitorDeArquivo.java. A função deste método é interagir com\no usuário via console para obter o diretório e o nome do arquivo Pascal que será processado, salvando o caminho\ncompleto no atributo correspondente. Um trecho contendo a lógica de concatenação do caminho e o encerramento\nseguro do fluxo do console foi removido e substituído pela etiqueta [LACUNA_SINTATICA]:\npublic void carregarArquivoParaLeitor(){\nSystem.out.println(\"----------------------------------\");\nSystem.out.println(\"### Carregar Arquivo de Testes ###\");\nScanner sc = new Scanner(System.in);\nSystem.out.print(\"Digite o caminho do diretório: \");\nString diretorio = sc.next();\nSystem.out.print(\"Digite o nome do arquivo: \");\nString nomeArquivo = sc.next();\n/* [LACUNA_SINTATICA] */\n}\nPara manter o comportamento idêntico ao do projeto original, garantindo que o caminho seja gerado corretamente para\nsistemas Windows utilizando o caractere de escape adequado e que os recursos do terminal sejam liberados, o trecho\n/* [LACUNA_SINTATICA] */ deve ser preenchido por:",
    "options": [
      "this.caminhoDoArquivo = diretorio + \"/\" + nomeArquivo;",
      "this.caminhoDoArquivo = diretorio + \"\\\" + nomeArquivo;\nsc.free();",
      "this.caminhoDoArquivo = diretorio + \"\\\\\" + nomeArquivo;\nsc.close();",
      "caminhoDoArquivo = diretorio.concat(nomeArquivo);\nSystem.exit(0);",
      "this.caminhoDoArquivo = diretorio + sc.nextLine() + nomeArquivo;"
    ],
    "answer": "c",
    "number": 70
  },
  {
    "id": "N2-41",
    "exam": "N2",
    "text": "Analise o método processarBufferSecundario() pertencente à classe BufferSecundario.java. Este método é\nencarregado de ler sequencialmente cada linha armazenada no bufferPrimario, submetê-la ao padrão de Expressões\nRegulares compilado em patt e extrair os pedaços de texto que correspondem aos lexemas. Um trecho vital contendo\no laço de varredura interna e a extração do fragmento casado foi omitido e substituído por [LACUNA_ALGORITMICA]:\npublic void processarBufferSecundario(){\n// ... definições de strings de captura e inicialização de listas omitidas ...\nPattern patt = Pattern.compile(capture);\nint linha = 1;\nfor (String texto : bufferPrimario) {\nMatcher mat = patt.matcher(texto);\nToken valor = null;\n/* [LACUNA_ALGORITMICA] */\nif ((lexema.startsWith(\"//\")) || (lexema.startsWith(\"(*\"))){\ncontinue;\n}\nif (lexemasProcessados.contains(lexema) == false){\nlexemasProcessados.add(lexema);\n// ... bloco de classificação omitido ...\nthis.bufferSecundario.add(valor);\n}\n}\nlinha++;\n}\n}\n}\nPara restabelecer a integridade lógica deste analisador léxico avançado, permitindo que o motor de Regex do Java\nlocalize incrementalmente todos os casamentos válidos da linha e recupere o texto correspondente a cada lexema\nidentificado, o trecho /* [LACUNA_ALGORITMICA] */ deve ser preenchido por:",
    "options": [
      "if(mat.matches()){\nString lexema = mat.toString();\nint posicao = mat.regionStart();",
      "for(int i=0; i < texto.length(); i++){\nString lexema = texto.substring(i);\nint posicao = i;",
      "while(mat.find() == false){\nString lexema = mat.group(0);\nint posicao = mat.end();",
      "while(mat.find()){\nString lexema = mat.group();\nint posicao = mat.start();",
      "while(patt.flags() > 0){\nString lexema = text.trim();\nint posicao = 0;"
    ],
    "answer": "d",
    "number": 71
  },
  {
    "id": "N2-42",
    "exam": "N2",
    "text": "Dentro do laço de varredura do método processarBufferSecundario(), o motor de Expressões Regulares localiza tudo\no que casa com o padrão global, incluindo comentários contidos no código-fonte Pascal. Como comentários servem\napenas para documentação e devem ser completamente ignorados pelas fases de síntese do compilador, o algoritmo\nprecisa interceptar esses lexemas imediatamente e saltar para a próxima iteração do laço, descartando-os. Esse trecho\nde interceptação foi removido e substituído pela marcação [LACUNA_DESCARTE]:\nwhile(mat.find()){\nString lexema = mat.group();\nint posicao = mat.start();\n/* [LACUNA_DESCARTE] */\nif (lexemasProcessados.contains(lexema) == false){\nlexemasProcessados.add(lexema);\n// ... bloco de classificação e inserção de tokens omitido ...\n}\n}\nPara garantir que o analisador léxico ignore corretamente os comentários de linha padrão Pascal (//) e os comentários\nde bloco de estilo antigo ((*), impedindo-os de avançar para a fase de classificação sem quebrar o laço de busca pelos\ndemais tokens da linha, o trecho /* [LACUNA_DESCARTE] */ deve ser preenchido por:",
    "options": [
      "if ((lexema.equals(\"//\")) && (lexema.equals(\"(*\"))){\nbreak;\n}",
      "if ((lexema.contains(\"//\")) || (lexema.contains(\"(*\"))){\nSystem.exit(0);\n}",
      "if ((lexema.endsWith(\"//\")) || (lexema.endsWith(\"*)\"))){\nreturn;\n}",
      "while ((lexema.startsWith(\"//\")) && (lexema.startsWith(\"(*\"))){\nthis.bufferSecundario.add(null);\n}",
      "if ((lexema.startsWith(\"//\")) || (lexema.startsWith(\"(*\"))){\ncontinue;\n}"
    ],
    "answer": "e",
    "number": 72
  },
  {
    "id": "N2-43",
    "exam": "N2",
    "text": "Considere a implementação da classe CifraCesar.java, desenvolvida em nossas aulas práticas de criptografia para\nilustrar o conceito de cifras de substituição monoalfabética. O algoritmo percorre uma string, filtra apenas letras\nmaiúsculas de 'A' a 'Z' e aplica um deslocamento fixo baseado em uma constante inteira. No entanto, a fórmula\nmatemática de cifragem por aritmética modular foi removida do laço e substituída pela lacuna [FÓRMULA_CESAR]:\npackage Engine;\npublic class CifraCesar {\nprivate static final int CHAVE = 3;\npublic String cifrar(String palavra) {\nStringBuilder resultado = new StringBuilder();\nString textoParaProcessar = palavra.toUpperCase();\nfor (int i = 0; i < textoParaProcessar.length(); i++) {\nchar caractereOriginal = textoParaProcessar.charAt(i);\nif (caractereOriginal >= 'A' && caractereOriginal <= 'Z') {\n/* [FÓRMULA_CESAR] */\nresultado.append(caractereCifrado);\n} else {\nresultado.append(caractereOriginal);\n}\n}\nreturn resultado.toString();\n}\n// ... restante dos métodos omitidos ...\n}\nPara que o método execute corretamente a Cifra de César com a chave fixa definida no projeto (CHAVE = 3),\nnormalizando o caractere para o intervalo numérico de 0 a 25 e aplicando o módulo da circunferência do alfabeto, o\ntrecho /* [FÓRMULA_CESAR] */ deve ser preenchido exatamente por:",
    "options": [
      "int posicaoOriginal = caractereOriginal - 'A';\nint novaPosicao = (posicaoOriginal + CHAVE) % 26;\nchar caractereCifrado = (char) ('A' + novaPosicao);",
      "int posicaoOriginal = caractereOriginal + CHAVE;\nint novaPosicao = posicaoOriginal * 26;\nchar caractereCifrado = (char) (novaPosicao);",
      "int posicaoOriginal = caractereOriginal - 26;\nint novaPosicao = (posicaoOriginal - CHAVE) % 'A';\nchar caractereCifrado = (char) (novaPosicao);",
      "char caractereCifrado = textoParaProcessar.charAt(i + CHAVE);",
      "int novaPosicao = (caractereOriginal + 26) % CHAVE;\nchar caractereCifrado = (char) (novaPosicao - 'Z');"
    ],
    "answer": "a",
    "hasCode": true,
    "number": 73
  },
  {
    "id": "N2-44",
    "exam": "N2",
    "text": "Analise o método sobrecarregado decifrar(int chaveco, String palavra) pertencente à classe CifraCesar.java. A função\ndeste método é reverter o processo de ocultação, deslocando os caracteres para trás com base em uma chave inteira\nrecebida por parâmetro. No entanto, em linguagens como Java, o operador de resto da divisão (%) pode retornar um\nvalor negativo se o operando da esquerda for negativo. Para mitigar esse problema matemático no cálculo do recuo\ndas letras, o algoritmo adota uma compensação somando o tamanho do alfabeto antes de aplicar o módulo. Esse\ntrecho foi omitido e substituído por [AJUSTE_MODULAR_INVERSO]:\npublic String decifrar(int chaveco, String palavra) {\nStringBuilder resultado = new StringBuilder();\nString textoParaProcessar = palavra.toUpperCase();\nfor (int i = 0; i < textoParaProcessar.length(); i++) {\nchar caractereCifrado = textoParaProcessar.charAt(i);\nif (caractereCifrado >= 'A' && caractereCifrado <= 'Z') {\n// Aplicamos a fórmula inversa: (x - n) mod 26\nint posicaoCifrada = caractereCifrado - 'A';\n/* [AJUSTE_MODULAR_INVERSO] */\nchar caractereOriginal = (char) ('A' + novaPosicao);\nresultado.append(caractereOriginal);\n} else {\nresultado.append(caractereCifrado);\n}\n}\nreturn resultado.toString();\n}\nPara que o algoritmo execute a decifragem de forma correta, tratando com segurança os resultados negativos gerados\npelo recuo da chave na tabela ASCII e restabelecendo o caractere original no intervalo de 0 a 25, a lacuna /*\n[AJUSTE_MODULAR_INVERSO] */ deve ser preenchida exatamente por:",
    "options": [
      "int novaPosicao = (posicaoCifrada - chaveco) % 26;",
      "int novaPosicao = (posicaoCifrada - chaveco + 26) % 26;",
      "int novaPosicao = (posicaoCifrada + chaveco - 26) * 26;",
      "int novaPosicao = Math.abs(posicaoCifrada - 26) + chaveco;",
      "int novaPosicao = (posicaoCifrada - 'Z' + chaveco) % 26;"
    ],
    "answer": "b",
    "hasCode": true,
    "number": 74
  },
  {
    "id": "N2-45",
    "exam": "N2",
    "text": "Diferente da Cifra de César, que desloca todas as letras de forma fixa, a Cifra de Vigenère utiliza uma chave textual\npara aplicar deslocamentos variáveis (polialfabéticos). À medida que cada caractere da palavra é processado, o\nponteiro da chave deve avançar sequencialmente. Quando esse ponteiro atinge o tamanho máximo da chave, ele deve\nretornar ao início (posição 0) de forma circular.\nAnalise o método cifrar(String palavra) da classe CifraVigenere.java desenvolvida para a nossa disciplina, onde a lógica\nde cálculo polialfabético e atualização do índice da chave foi removida e substituída por [LOGICA_VIGENERE]:\npackage Engine;\npublic class CifraVigenere {\nprivate static final String CHAVE = \"UNIDERP\";\npublic String cifrar(String palavra) {\nStringBuilder resultado = new StringBuilder();\nString texto = palavra.toUpperCase();\nString chave = CHAVE.toUpperCase();\nint indiceChave = 0;\nfor (int i = 0; i < texto.length(); i++) {\nchar c = texto.charAt(i);\nif (c >= 'A' && c <= 'Z') {\n/* [LOGICA_VIGENERE] */\n} else {\nresultado.append(c);\n}\n}\nreturn resultado.toString();\n}\n// ... restante do código omitido ...\n}\nPara preencher a lacuna /* [LOGICA_VIGENERE] */ de forma a garantir o correto cálculo da cifra polialfabética e o\navanço circular do ponteiro da chave sem estourar os limites da string chave, o trecho de código correspondente deve\nser exatamente:",
    "options": [
      "int p = c + 'A';\nint k = chave.charAt(indiceChave) + 'A';\nint cifrado = (p + k) * 26;\nresultado.append((char) (cifrado));\nindiceChave++;",
      "int p = c - 'A';\nint k = chave.charAt(i) - 'A';\nint cifrado = (p + k) % 26;\nresultado.append((char) (cifrado + 'A'));\nindiceChave = (indiceChave + 1) / chave.length();",
      "int p = c - 'A';\nint k = chave.charAt(indiceChave) - 'A';\nint cifrado = (p + k) % 26;\nresultado.append((char) (cifrado + 'A'));\n// Avança o ponteiro da chave circularmente\nindiceChave = (indiceChave + 1) % chave.length();",
      "int p = c - 'Z';\nint k = chave.length();\nint cifrado = (p - k) % 26;\nresultado.append(cifrado);\nindiceChave = 0;",
      "int p = c - 'A';\nint k = chave.charAt(indiceChave);\nint cifrado = p + k;\nresultado.append((char) (cifrado));"
    ],
    "answer": "c",
    "hasCode": true,
    "number": 75
  },
  {
    "id": "N2-46",
    "exam": "N2",
    "text": "Na Cifra de Vigenère, o processo de decifragem realiza a operação matemática inversa à da cifragem. Para recuperar\no texto original, o algoritmo subtrai o valor numérico correspondente do caractere da chave a partir do caractere cifrado:\nP = (C - K) (mod 26). Assim como ocorre na Cifra de César, o desenvolvedor em Java deve antecipar que essa\nsubtração pode gerar valores negativos e adicionar uma constante de compensação equivalente ao tamanho do\nalfabeto antes de aplicar o operador de resto da divisão (% 26).\nAnalise o método sobrecarregado decifrar pertencente à classe CifraVigenere.java, onde a expressão matemática\ndessa reversão polialfabética foi omitida e substituída por [DECODER_VIGENERE]:\npublic String decifrar(String chaveco, String palavra) {\nStringBuilder resultado = new StringBuilder();\nString texto = palavra.toUpperCase();\nString chave = chaveco.toUpperCase();\nint indiceChave = 0;\nfor (int i = 0; i < texto.length(); i++) {\nchar c = texto.charAt(i);\nif (c >= 'A' && c <= 'Z') {\nint p = c - 'A';\nint k = chave.charAt(indiceChave) - 'A';\n/* [DECODER_VIGENERE] */\nresultado.append((char) (decifrado + 'A'));\nindiceChave = (indiceChave + 1) % chave.length();\n} else {\nresultado.append(c);\n}\n}\nreturn resultado.toString();\n}\nPara que o método reverta com precisão o cálculo polialfabético da Cifra de Vigenère utilizando a chave recebida por\nparâmetro, neutralizando eventuais resultados negativos na JVM e adicionando o caractere resultante ao acumulador,\na lacuna /* [DECODER_VIGENERE] */ deve ser preenchida exatamente por:",
    "options": [
      "int decifrado = (p + k) % 26;",
      "int decifrado = (p - k) % 26;",
      "int decifrado = Math.abs(p - k) % 26;",
      "int decifrado = (p - k + 26) % 26;",
      "int decifrado = (p - k) + 26 * 26;"
    ],
    "answer": "d",
    "hasCode": true,
    "number": 76
  },
  {
    "id": "N2-47",
    "exam": "N2",
    "text": "A cifra RC4 é um algoritmo de criptografia de fluxo simétrico que baseia a sua segurança em dois blocos lógicos\nprincipais: o KSA (Key-Scheduling Algorithm), que gera uma permutação inicial do vetor de estados com base na chave,\ne o PRGA (Pseudo-Random Generation Algorithm), que extrai a subsequência pseudoaleatória de bytes (keystream)\npara aplicar a operação XOR.\nAnalise o método privado inicializarKSA(byte[] chave) da classe CifraRC4.java desenvolvida para a nossa disciplina,\nonde o bloco responsável por misturar o vetor de estados S de forma determinística foi extraído e substituído pela\nlacuna [ALGORITMO_KSA]:\npackage Engine;\npublic class CifraRC4 {\nprivate static final String CHAVE = \"UNIDERP2026\";\n// ... método processar ocultado ...\nprivate int[] inicializarKSA(byte[] chave) {\nint[] s = new int[256];\nfor (int i = 0; i < 256; i++) s[i] = i;\nint j = 0;\n/* [ALGORITMO_KSA] */\nreturn s;\n}\n}\nPara garantir o correto baralhamento do vetor de estados S de acordo com as especificações matemáticas oficiais do\nRC4, aplicando a aritmética modular com base em 256 e realizando a troca (swap) dos elementos sem perder\nreferências, o trecho /* [ALGORITMO_KSA] */ deve ser preenchido exatamente por:",
    "options": [
      "for (int i = 0; i < 256; i++) {\nj = (j + s[i] + (chave[i % chave.length] & 0xFF)) % 256;\nint temp = s[i];\ns[i] = s[j];\ns[j] = temp;\n}",
      "for (int i = 0; i < chave.length; i++) {\nj = (j + s[i] + chave[i]) / 256;\ns[i] = s[j];\n}",
      "while (j < 256) {\nj = (j + i + chave[j]) % 256;\nint temp = s[j];\ns[j] = s[i];\ns[i] = temp;\n}",
      "for (int i = 0; i < 256; i++) {\nj = (j + s[i]) * (chave[i] & 0xFF);\ns[i] = s[j];\ns[j] = s[i];\n}",
      "for (int i = 256; i > 0; i--) {\nj = (j - s[i] - chave[i]) % 256;\nint temp = s[i];\ns[i] = temp;\n}"
    ],
    "answer": "a",
    "hasCode": true,
    "number": 77
  },
  {
    "id": "N2-48",
    "exam": "N2",
    "text": "Após o vetor de estados S ser devidamente inicializado e misturado pelo algoritmo KSA com base na chave, o RC4\nentra na sua fase de geração e cifragem propriamente dita, conhecida como PRGA (Pseudo-Random Generation\nAlgorithm). A grande elegância matemática do RC4 é que, por se basear na operação simétrica XOR, o exato mesmo\nmétodo e lógica de código servem tanto para cifrar o texto em claro quanto para decifrar o texto cifrado.\nAnalise o método público processar(byte[] dados) pertencente à classe CifraRC4.java do nosso projeto, onde a\nmecânica interna de geração do byte de chave (valorK) e a aplicação do XOR foram removidas do laço principal e\nsubstituídas pela lacuna [MECANICA_PRGA_XOR]:\npackage Engine;\npublic class CifraRC4 {\nprivate static final String CHAVE = \"UNIDERP2026\";\npublic byte[] processar(byte[] dados) {\nint[] s = inicializarKSA(CHAVE.getBytes());\nbyte[] saida = new byte[dados.length];\nint i = 0, j = 0;\nfor (int k = 0; k < dados.length; k++) {\n/* [MECANICA_PRGA_XOR] */\n}\nreturn saida;\n}\n// ... restante dos métodos omitidos ...\n}\nPara que o método processe incrementalmente o array de bytes de entrada, atualizando os ponteiros i e j de forma\nmodular, realizando a troca de posições no vetor S, extraindo o byte gerador e aplicando corretamente a operação\nXOR sobre o byte de dados correspondente, a lacuna /* [MECANICA_PRGA_XOR] */ deve ser preenchida exatamente\npor:",
    "options": [
      "i = i + 1;\nj = j + s[i];\nint temp = s[i]; s[i] = s[j]; s[j] = temp;\nsaida[k] = (byte) (dados[k] + s[i + j]);",
      "i = (i + 1) % 256;\nj = (j + s[i]) % 256;\n// Swap\nint temp = s[i];\ns[i] = s[j];\ns[j] = temp;\nint t = (s[i] + s[j]) % 256;\nint valorK = s[t];\n// Operação XOR\nsaida[k] = (byte) (dados[k] ^ valorK);",
      "i = (i + 1) % dados.length;\nj = (j + s[k]) % dados.length;\ns[i] = s[j];\nint valorK = s[i] + s[j];\nsaida[k] = (byte) (dados[k] & valorK);",
      "i = (i + 1) * 256;\nj = (j + s[i]) * 256;\nint temp = s[i]; s[i] = s[j]; s[j] = temp;\nsaida[k] = (byte) (dados[k] | s[temp]);",
      "i = 0;\nj = 0;\nint t = s[i] + s[j];\nsaida[k] = (byte) (dados[k] ^ s[t]);"
    ],
    "answer": "b",
    "hasCode": true,
    "number": 78
  }
];
