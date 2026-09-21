# Relatório técnico — métricas de IA na ciência

> Levantamento produzido a partir de `research/DEEP_RESEARCH_PROMPT_science_metrics.md`.
> O dataset estruturado correspondente é `research/science_metrics.json`.
> Data do levantamento: 2026-09-18.

---

### **Sumário Executivo**

A análise quantitativa do impacto da inteligência artificial nos seis domínios científicos revela uma assimetria fundamental entre a aceleração computacional da geração de hipóteses e a velocidade dos testes laboratoriais no mundo físico. Em tarefas inteiramente baseadas em software, como a predição da estrutura tridimensional de monómeros polipeptídicos a partir da sequência genética (AlphaFold) e o posicionamento macroespacial em circuitos integrados (AlphaChip), a inteligência artificial proporciona ganhos temporais e operacionais na ordem de ![][image1] a ![][image2]. Por outro lado, nas fases dependentes de experimentação laboratorial, síntese de novos materiais e ensaios clínicos com seres humanos, os ganhos práticos reais raramente superam ![][image3] a ![][image4].

As séries relativas à Biologia Estrutural (S1), Astrofísica Observacional (S2) e Computação Quântica (S5) apresentam dados quantitativos sólidos, validados em artigos revistos por pares e em arquivos institucionais abertos (wwPDB, Google Quantum AI, STScI e Observatório Vera C. Rubin). Pelo contrário, as alegações de aceleração generalizada na descoberta de fármacos (S3 e S7) estão repletas de estimativas de empresas sem metodologia clara ou sem grupos de controlo com que possam ser comparadas. Por essa razão, a aceleração clínica global na medicina foi formalmente classificada como not_found.

Nos domínios da Ciência dos Materiais (S4) e do Desenho Físico de Semicondutores (S6), as investigações originais foram alvo de contestação pública na literatura académica especializada, nomeadamente quanto à novidade cristalográfica dos materiais do GNoME e à reprodutibilidade das linhas de base algorítmicas do AlphaChip. Recomenda-se a publicação dos gráficos destas duas áreas com a inclusão obrigatória das respetivas notas técnicas explicativas.

### **S1 · Biologia Estrutural: Estruturas Proteicas Conhecidas ao Longo do Tempo**

A biologia estrutural experimental teve como objetivo, ao longo de mais de cinquenta anos, determinar com precisão atómica a conformação tridimensional de macromoléculas biológicas1. Historicamente, esta área dependeu quase em exclusivo de técnicas biofísicas de bancada: cristalografia de raios-X, espectroscopia de ressonância magnética nuclear (RMN) e, mais recentemente, microscopia crioeletrónica (crio-EM)1. A necessidade de expressar, purificar e cristalizar ou vitrificar cada proteína limitou o crescimento do Protein Data Bank (PDB) a um ritmo lento e contínuo1.

A introdução de arquiteturas neurais baseadas em mecanismos de atenção com restrições geométricas e de coevolução molecular (AlphaFold 2) alterou profundamente este panorama6. A inferência computacional passou a gerar predições estruturais tridimensionais diretamente a partir de sequências de aminoácidos num intervalo de segundos ou minutos7. O lançamento da base de dados AlphaFold DB (desenvolvida pela DeepMind em parceria com o EMBL-EBI) aumentou exponencialmente o volume de estruturas tridimensionais disponíveis à escala do proteoma global6.

| Ano | wwPDB Experimental (Entradas Cumulativas) | AlphaFold DB (Modelos Computacionais) | Rácio Relativo (AFDB / PDB) | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- |
| 1976 | 13 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 1982 | 100 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 1993 | 1.000 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 1999 | 10.000 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 2014 | 100.000 | 0 | 0,00 | Estatísticas de Crescimento RCSB PDB1 |
| 2017 | 136.000 | 0 | 0,00 | Estatísticas de Crescimento RCSB PDB2 |
| 2020 | 177.000 | 0 | 0,00 | Estatísticas de Crescimento RCSB PDB2 |
| 2021 | 194.000 | 365.000 | 1,88 | Lançamento Inicial EMBL-EBI AFDB6 |
| 2022 | 215.000 | 214.000.000 | 995,34 | Expansão de Proteomas UniProt AFDB6 |
| 2023 | 230.000 | 214.000.000 | 930,43 | Relatórios de Operação RCSB PDB e AFDB6 |
| 2024 | 239.000 | 214.000.000 | 895,39 | Relatórios de Operação RCSB PDB e AFDB6 |
| 2025 | 259.000 | 214.000.000 | 826,25 | Relatórios de Operação RCSB PDB e AFDB6 |
| 2026 | 266.000 | 214.000.000 | 804,51 | Relatórios de Operação RCSB PDB e AFDB10 |

A comparação direta entre as séries exige distinções conceptuais de relevo:

> 1. O Protein Data Bank regista deposições físicas totais10. Estas contagens incorporam redundância de sequências biológicas, incluindo múltiplos ensaios de cristalografia para uma mesma proteína ligada a compostos químicos distintos ou contendo mutações pontuais12. Quando o conjunto de dados é filtrado para aglomerados de sequências não redundantes com corte a 50% de identidade molecular, o total de entidades polipeptídicas únicas no PDB é de aproximadamente 55.718 em 202614.
> 2. O AlphaFold DB contém predições estruturais para cadeias proteicas individuais isoladas6. Cerca de um terço dos resíduos calculados situa-se em regiões intrinsecamente desordenadas (IDRs), onde o índice de fiabilidade local (![][image5]) é inferior a 50, o que indica que a proteína não possui uma forma estática rígida na natureza7. Além disso, o modelo original não prevê diretamente complexos quaternários com outros compostos químicos ou alterações estruturais induzidas pelo ambiente celular7.

### **S2 · Astrofísica: Taxa Noturna de Aquisição e Automação de Alertas**

A evolução dos telescópios óticos e infravermelhos transformou a astronomia numa ciência assente em grandes volumes de dados16. O desafio atual centra-se na discrepância entre a capacidade de captação digital das câmaras e a viabilidade da análise humana16. Para contextualizar esta transição, foram analisados o Sloan Digital Sky Survey (SDSS), o Telescópio Espacial James Webb (JWST) e o Observatório Vera C. Rubin (Legacy Survey of Space and Time - LSST)16.

| Instalação de Observação | Taxa Média de Dados Brutos por Noite (TB/noite) | Volume Total Projetado de Imagens Brutas | Alertas Transientes por Noite | Percentagem de Triagem por Aprendizagem Automática | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sloan Digital Sky Survey (SDSS) | 0,20 | 0,14 PB (Acumulado Histórico) | 0 (Não concebido para alertas em tempo real) | 0,0% (Classificação visual através do Galaxy Zoo) | SDSS Data Archiving and Pipeline Reports16 |
| James Webb Space Telescope (JWST) | 0,055 | ~0,21 PB (Missão Decenal Estimada) | Não aplicável (Focado em campos pontuais específicos) | Calibração algorítmica de instrumentos STScI | STScI Science Operations Specifications23 |
| Observatório Vera C. Rubin (LSST) | 15,00 | 60 PB (Levantamento ao Longo de 10 Anos) | ~10.000.000 | 99,999% (Triagem preliminar ![][image6] automatizada) | Rubin Data Management & Architecture Specs19 |

A distinção entre volumes de dados brutos e dados processados é essencial para evitar interpretações equivocadas:

* No caso do JWST, os dados brutos são limitados pelas janelas de transmissão rádio em banda Ka através da rede de espaço profundo Deep Space Network (DSN) da NASA, que permite descarregar entre 54 e 57 GB por dia (~0,055 TB/dia)23.
* O Observatório Rubin obtém entre 600 e 800 pares de exposições por noite através da sua câmara de 3,2 gigapixels, gerando entre 10 e 20 TB de imagens brutas diárias (com valor médio de projeto de 15 TB/noite)19. As suas bases de dados processadas e os catálogos anuais consolidados excederão 500 PB20.

A taxa de produção do Observatório Rubin projeta até 10 milhões de alertas de fenómenos astronómicos transientes por noite, gerados nos primeiros 60 segundos após cada observação através de técnicas de subtração digital de imagens20. O volume de alertas torna impossível a triagem manual por equipas de astrónomos29. Por essa razão, a totalidade do fluxo é processada de modo autónomo por sistemas de filtragem e corretores comunitários com redes neuronais, destinando-se a revisão humana unicamente a um número muito reduzido de alvos prioritários para acompanhamento telescópico (<0,001%)20.

### **S3 · Medicina: Cronogramas Clínicos e o Pipeline da Insilico Medicine**

A avaliação do impacto da inteligência artificial no desenvolvimento farmacêutico encontra-se obscurecida por estimativas agregadas de empresas que omitem as bases de cálculo comparativas. Os dados históricos de referência compilados pelo Center for the Study of Drug Development da Tufts University (Tufts CSDD) e por artigos de síntese publicados na *Nature Reviews Drug Discovery* estabelecem que o ciclo convencional de desenvolvimento de uma pequena molécula, desde a validação biológica até à nomeação de um composto candidato para testes regulamentares em humanos (protocolo IND), demora entre 4,5 e 6 anos (54 a 72 meses)30.

Para analisar o impacto real de métodos assistidos por inteligência artificial com base em dados verificáveis, foi estudado o caso do candidato terapêutico Rentosertib (ISM001-055), concebido pela Insilico Medicine para o tratamento da fibrose pulmonar idiopática (FPI)31. As etapas deste programa foram documentadas e publicadas na revista *Nature Biotechnology* (Ren et al., 2024), acompanhadas pelos respetivos registos regulamentares31.

| Fase do Processo de Descoberta | Linha de Base Tradicional da Indústria (Mediana em Meses) | Caso com IA: Insilico ISM001-055 (Meses) | Relação de Redução Temporal | Mecanismo Primário Responsável |
| :---- | :---- | :---- | :---- | :---- |
| Validação de Alvo Biológico | 18 | ~6 (Integrado) | 3,0x | Análise computacional de dados ómicos em grafos de conhecimento33 |
| Rastreio Hit-to-Lead | 15 | ~4 | 3,75x | Geração molecular de raiz com modelos de química computacional7 |
| Otimização de Composto Líder | 24 | ~8 | 3,0x | Minimização de ciclos de síntese química e ensaios laboratoriais33 |
| Ensaios Pré-Clínicos IND | 15 | ~12 | 1,25x | Cumprimento de ensaios toxicológicos em modelos animais |
| **Total: Alvo até Candidato IND** | **72 meses (6,0 anos)** | **~18 a 30 meses (1,5 a 2,5 anos)** | **~2,4x a 3,0x** | Otimização temporal limitada à química medicinal exploratória31 |
| Ensaios Clínicos de Fase I | 12 a 18 | 12 | 1,0x | Condicionado pela fisiologia humana e monitorização de segurança |

Esta análise evidencia os limites do processo:

> 1. O encurtamento do tempo incide quase na totalidade sobre as fases de conceção de moléculas e triagem de alvos *in silico*33.
> 2. Assim que a molécula é sintetizada e avança para os testes toxicológicos em animais e os ensaios de dosagem em seres humanos (Fases I e IIa), o ritmo é determinado por processos biológicos fundamentais (absorção celular, depuração hepática e resposta imunológica) e por regras regulamentares estritas7.
> 3. O encurtamento do processo pré-clínico de 6 anos para aproximadamente 18 a 30 meses constitui um ganho prático relevante, mas não elimina a necessidade de cumprir os ensaios clínicos em humanos30.

### **S4 · Ciência dos Materiais: Descoberta de Estruturas no GNoME e Ensaios do A-Lab**

Na área da ciência dos materiais inorgânicos, a pesquisa de cristais termodinamicamente estáveis dependeu durante muito tempo da experimentação laboratorial guiada pela intuição química e complementada por cálculos computacionais da teoria do funcional da densidade (DFT). As bases de dados mundiais históricas acumuladas — com destaque para o Inorganic Crystal Structure Database (ICSD) e o Materials Project — registavam cerca de 48.000 compostos inorgânicos com estabilidade termodinâmica comprovada na chamada envolvente convexa (*convex hull*, ![][image7]).

Em novembro de 2023, investigadores da Google DeepMind publicaram na revista *Nature* o sistema Graph Networks for Materials Exploration (GNoME), recorrendo a redes neuronais em grafos para prever a estabilidade de novas redes cristalinas (Merchant et al.). O modelo computou 2,2 milhões de estruturas cristalinas estáveis, das quais 381.000 representam novas fases na envolvente convexa. Em paralelo, o Lawrence Berkeley National Laboratory desenvolveu o A-Lab (Szymanski et al., *Nature*, 2023), uma infraestrutura robótica com braços articulados e fornos automáticos para realizar síntese cerâmica em estado sólido sem contacto humano.

| Indicador de Investigação Cristalográfica | Quantidade Absoluta | Metodologia de Validação | Fonte Primária |
| :---- | :---- | :---- | :---- |
| Estruturas estáveis históricas (ICSD / MP) | ~48.000 | Cristalografia experimental e cálculos prévios de DFT | Materials Project / ICSD Baseline |
| Total de cristais estáveis calculados pelo GNoME | 2.200.000 | Redes neuronais em grafos aplicadas a redes atómicas | Merchant et al., *Nature* (2023) |
| Novas fases na envolvente convexa (![][image8]) | 381.000 | Otimização e validação quântica por DFT (VASP) | Merchant et al., *Nature* (2023) |
| Compostos selecionados para o A-Lab | 58 | Seleção automática com base na estabilidade de DFT | Szymanski et al., *Nature* (2023) |
| Compostos sintetizados pelo A-Lab | 41 | Síntese robótica autónoma ao longo de 17 dias (Taxa de 71%) | Szymanski et al., *Nature* (2023) |
| Estruturas confirmadas na literatura externa | >736 | Pesquisa bibliográfica em artigos experimentais de terceiros | Merchant et al., *Nature* (2023) |

#### **Controvérsias Técnicas e Debate Científico**

A divulgação destes resultados suscitou discussão crítica na literatura científica da química de materiais, protagonizada por especialistas como Anthony Cheetham e Ram Seshadri:

* Debate sobre a novidade composicional real: Os investigadores apontaram que uma fração expressiva das predições do GNoME não representa classes de materiais inéditas, mas sim modificações pontuais em estruturas cristalinas consolidadas (trocas triviais de catiões em perovskites ou espinelas), quebras de simetria geométrica decorrentes de limites numéricos nos cálculos computacionais ou soluções sólidas desordenadas modeladas incorretamente como cristais ordenados.
* Contestações à pureza de fase no A-Lab: A análise automática por difração de raios-X em pó (PXRD) realizada no A-Lab foi questionada relativamente à precisão dos seus refinamentos cristalográficos. Análises independentes indicaram que várias amostras sintetizadas consistiam em misturas multifásicas com precursores químicos não reagidos e fases secundárias de óxidos, contestando a síntese de compostos únicos puros.

Conclui-se que o critério de cálculo de estabilidade energética teórica a zero Kelvin (![][image8]) não garante, por si só, que um composto químico possa ser preparado e utilizado à temperatura e pressão ambientes.

### **S5 · Computação Quântica: Supressão de Erro Lógico no Google Willow**

Na computação quântica baseada em códigos corretores de superfície, o teorema do limiar (*threshold theorem*) estabelece que, se a probabilidade de falha dos componentes físicos estiver abaixo de uma percentagem crítica, o erro de um qubit lógico decresce exponencialmente com o aumento do número de qubits físicos interligados. Em contrapartida, se o circuito operar acima desse limiar, a adição de qubits acrescenta mais ruído do que aquele que consegue corrigir.

Em dezembro de 2024, a Google Quantum AI publicou na revista *Nature* o artigo *Quantum error correction below the surface code threshold*, apresentando os resultados do processador supercondutor Willow34. Fabricado com 105 qubits físicos transmon, o processador operou códigos corretores em malhas planares com três distâncias lógicas: ![][image9], ![][image9] e ![][image10]34.

| Distância de Código (d) | Qubits Físicos Envolvidos no Patch | Erro Lógico Médio por Ciclo (εd​) | Fator de Supressão Experimental (Λ) | Descodificação em Tempo Real | Referência Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **![][image9]** | 17 | ~0,65% | Linha de base de comparação (![][image9]) | Confirmada | Nature (Google Quantum AI, 2024)34 |
| ![][image9] | 49 | ~0,31% | ![][image11] | Latência de ![][image12] (Dispositivo de 72 qubits) | Nature (Google Quantum AI, 2024)34 |
| ![][image10] | 101 | ![][image13] | ![][image14] | Pós-processamento clássico por MWPM | Nature (Google Quantum AI, 2024)34 |

O fator experimental de atenuação de erros verificado a cada aumento de dois pontos na distância (![][image15]) atingiu:

![][image16]

Sendo ![][image17], o sistema demonstrou de forma reprodutível que a correção quântica ativa opera em regime sub-limiar34. O qubit lógico com distância ![][image10] atingiu uma taxa de erro de ![][image18] por ciclo, garantindo uma retenção de informação mais duradoura do que a do melhor qubit físico individual no circuito35.

A interpretação desta experiência exige a consideração de dois aspetos técnicos:

> 1. A taxa de erro reportada de ![][image18] por ciclo diz respeito a uma memória quântica lógica estática em repouso36. O processador não realizou portas lógicas de entrelaçamento de dois qubits entre diferentes blocos lógicos nem rotinas completas de destilação de estados quânticos mágicos, requisitos indispensáveis para a execução de algoritmos genéricos36.
> 2. A taxa de erro observada (![][image19]) permanece distante do patamar de fiabilidade (![][image20] a ![][image21]) necessário para simulações de química molecular complexa ou para a execução de algoritmos de fatorização36.

### **S6 · Desenho de Semicondutores: Macro Floorplanning por Aprendizagem por Reforço**

O desenho físico de semicondutores inclui uma etapa crítica denominada posicionamento macroespacial (*macro floorplanning*). Esta fase consiste na distribuição bidimensional de blocos volumosos de memória (SRAM macros) e unidades computacionais sobre a área de silício, com o objetivo de minimizar a extensão das pistas metálicas condutoras (*wirelength*), evitar pontos de estrangulamento na cablagem física e assegurar o cumprimento de restrições temporais de propagação de sinal (*timing closures*).

Uma equipa de engenheiros humanos que utilize ferramentas clássicas de Electronic Design Automation (EDA) necessita habitualmente de 6 a 8 semanas (cerca de 240 a 320 horas de trabalho altamente especializado) para convergir um único bloco de circuito complexo. No sistema AlphaChip (Mirhoseini et al., *Nature*, 2021), a colocação macroespacial é convertida num processo sequencial de aprendizagem por reforço com redes neuronais sobre grafos. O algoritmo analisa a lista de interconexões lógicas (*netlist*) e posiciona os blocos de modo autónomo, obtendo soluções funcionais em menos de 6 horas com métricas de propagação de sinal e consumo de área equiparáveis ou ligeiramente superiores às obtidas manualmente (redução de cerca de 4% no comprimento total de fios). A Google integrou esta metodologia nas suas unidades de processamento tensorial de produção (TPU v4, v5e, v5p e TPU v6 Trillium).

| Abordagem ao Posicionamento | Tempo de Execução do Projeto | Comprimento Normalizado de Fios | Cumprimento de Regras Físicas (DRC) | Aplicação em Produção Comercial | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Engenharia Humana com EDA | 6 a 8 semanas (~320 h) | 1,00 (Linha de base) | Aprovado após múltiplos ciclos | Padrão comum da indústria | Mirhoseini et al., *Nature* (2021) |
| Agente AlphaChip (RL) | < 6 horas | ~0,96 (Redução de 4%) | Aprovado após 6 horas de cálculo | Tapeouts comerciais das TPU v5 e v6 | Google DeepMind / AlphaChip 2024 |

#### **Controvérsia Académica sobre Métricas e Linhas de Base**

O trabalho esteve no centro de uma polémica pública no meio académico de EDA:

* Contestações da equipa da UC San Diego: Investigadores coordenados pelo professor Andrew Kahng demonstraram que algoritmos heurísticos tradicionais estabelecidos há décadas — como o recozimento simulado (*Simulated Annealing*) ou posicionadores analíticos guiados por forças — alcançam resultados qualitativamente indistinguíveis ou superiores aos do modelo de reforço se lhes for atribuído o mesmo tempo de processamento computacional em máquinas equivalentes.
* Debate sobre a abertura de código e propriedades de generalização: Críticos sublinharam que a publicação original não continha a cadeia completa de processamento interno e as rotinas de afinação proprietárias da Google. Em resposta, a Google disponibilizou os modelos e o código no repositório Circuit Training, documentando que o modelo neural pré-treinado consegue aplicar padrões aprendidos a blocos lógicos nunca antes analisados em minutos, ao passo que as heurísticas locais tradicionais começam cada otimização do zero.

A metodologia do AlphaChip aplica-se especificamente ao posicionamento de macros, não realizando de forma autónoma as restantes fases industriais de EDA, tais como a síntese lógica, o posicionamento das células padrão, a síntese de árvores de relógio ou o roteamento elétrico final.

### **S7 · Comparativo entre Domínios: Fatores de Aceleração Computacional**

A aplicação de fatores de aceleração (![][image22]) de forma abrangente a ramos científicos inteiros constitui uma simplificação conceitual indevida. Um fator de aceleração apenas adquire validade científica quando estabelecido em função de um numerador computacional exato e de um denominador experimental ou algorítmico bem documentado.

| Ramo Científico | Tarefa Específica Monitorizada | Denominador Operacional (Baseline Tradicional) | Numerador Operacional (Método Assistido por IA) | Fator Escalar de Aceleração (N×) | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Biologia Molecular | Obtenção de modelo conformacional monomérico | Cristalografia / Crio-EM em laboratório: semanas a meses de ensaios (~500 h) | Inferência computacional com AlphaFold 2 em GPU (~30 a 60 s) | **~50.000x** (Restrito à formulação de hipótese estrutural) | Nature (Jumper et al., 2021)7 |
| Astrofísica | Triagem e classificação de alertas de transientes | Filtragem e avaliação visual direta por astrónomo (~10 min/alerta) | Classificação em corretores de aprendizagem automática (~0,5 s/alerta) | **~1.000x** (No débito de processamento de alertas) | Vera C. Rubin Observatory Operations20 |
| Farmacologia | Pipeline global de descoberta de medicamentos | Fluxo farmacêutico padrão com grupo de controlo pareado | Inexistente na literatura empírica global | **not_found** | Nature Reviews Drug Discovery30 |
| Ciência dos Materiais | Relaxação e cálculo energético de cristais | Simulação DFT completa via software VASP em cluster CPU (~2 h por composto) | Avaliação energética por rede neuronal em GPU (~0,7 s por composto) | **~10.000x** (No cálculo energético por estrutura) | Nature (Merchant et al., 2023) |
| Computação Quântica | Atenuação da taxa de erro por distância de código | Linha de base da distância anterior sob supressão ![][image23] | Redução exponencial medida do erro por ciclo (![][image24]) | **not_found** (Métrica física de atenuação de ruído, não de tempo) | Nature (Google Quantum AI, 2024)34 |
| Desenho de Chips | Floorplanning macroespacial de semicondutores | Projeto iterativo por engenharia especializada (~320 h) | Posicionamento autónomo pelo agente AlphaChip (< 6 h) | **~53,3x** (Na duração bruta de posicionamento de layout) | Nature (Mirhoseini et al., 2021)36 |

A exclusão de fatores globais para as áreas médica e quântica fundamenta-se nos seguintes pressupostos:

> 1. Na medicina e farmacologia, não existem estudos clínicos randomizados que tenham acompanhado o desenvolvimento simultâneo de fármacos idênticos com e sem o uso de inteligência artificial. Como as etapas de ensaios toxicológicos e clínicos em voluntários e doentes requerem tempos inalterados de observação biológica, qualquer multiplicador geral para a totalidade do processo seria artificial e metodologicamente incorreto.
> 2. Na computação quântica, a métrica fundamental de progresso abaixo do limiar é o fator de supressão ![][image24] a cada incremento da distância topológica de código, que quantifica a redução da probabilidade de erro por ciclo. Apresentar esta grandeza como uma velocidade de execução clássica ![][image22] representaria uma transposição dimensional incorreta.

### **Lacunas e Riscos Metodológicos**

A auditoria aos dados quantitativos identifica três riscos para a publicação e interpretação destes gráficos:

> 1. Risco de Confundir Predição Digital com Síntese no Mundo Real: O salto volumétrico para 214 milhões de proteínas no AlphaFold DB e para 381.000 materiais inorgânicos na envolvente convexa do GNoME corresponde à formulação de coordenadas e estimativas teóricas de energia6. Se as legendas dos gráficos sugerirem ao público leigo que estas entidades foram isoladas fisicamente em tubos de ensaio ou fornos industriais, a comunicação científica perderá credibilidade. Apenas uma fração diminuta destas estruturas foi objeto de síntese física, caracterização biológica ou aplicação funcional em dispositivos reais.
> 2. Ausência de Séries de Controlo na Indústria Farmacêutica: O estatuto not_found atribuído à aceleração média global na medicina protege a plataforma makeaibetter.com de reproduzir alegações de marketing corporativo. Para alterar esta classificação no futuro, será necessária a publicação de ensaios comparativos transparentes, conduzidos por entidades reguladoras como a FDA ou a EMA, que avaliem tempos, custos e taxas de atrito em programas terapêuticos desenrolados em condições de mercado idênticas.
> 3. Dependência de Ambientes Computacionais Fechados no Desenho de Semicondutores: No domínio do desenho físico de circuitos (AlphaChip), a verificação dos ganhos por terceiros permanece dependente da disponibilização de fluxos de desenho abertos. Dada a disputa metodológica entre equipas académicas e os criadores do modelo, os gráficos sobre desenho eletrónico devem assinalar que os ganhos obtidos se referem a blocos específicos em ambientes laboratoriais controlados.

### **Bibliografia Completa**

> 1. Google Quantum AI. "Quantum error correction below the surface code threshold." *Nature*, vol. 638, pp. 920–926, dezembro de 2024. DOI: 10.1038/s41586-024-08169-3. Consultado a 15 de setembro de 202634.
> 2. Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., Tunyasuvunakool, K., Bates, R., Žídek, A., Potapenko, A., et al. "Highly accurate protein structure prediction with AlphaFold." *Nature*, vol. 596, pp. 583–589, julho de 2021. DOI: 10.1038/s41586-021-03819-2. Consultado a 15 de setembro de 20267.
> 3. Merchant, A., Batzner, S., Schoenholz, S. S., Aykol, M., Cheon, G., Cubuk, E. D. "Scaling deep learning for materials discovery." *Nature*, vol. 624, pp. 80–85, novembro de 2023. DOI: 10.1038/s41586-023-06735-9. Consultado a 15 de setembro de 2026.
> 4. Mirhoseini, A., Goldie, A., Yazgan, M., Jiang, J. W., Songhori, E., Wang, S., Lee, Y.-J., Johnson, E., Pathak, O., Nazi, A., et al. "A graph placement methodology for fast chip design." *Nature*, vol. 594, pp. 207–212, junho de 2021. DOI: 10.1038/s41586-021-03544-w. Consultado a 15 de setembro de 2026.
> 5. Paul, S. M., Mytelka, D. S., Dunwiddie, C. T., Persinger, C. C., Munos, B. H., Lindborg, S. R., Schacht, A. L. "How to improve R&D productivity: the pharmaceutical industry's grand challenge." *Nature Reviews Drug Discovery*, vol. 9, pp. 203–214, março de 2010. DOI: 10.1038/nrd3078. Consultado a 15 de setembro de 2026.
> 6. RCSB Protein Data Bank. "PDB Statistics: Overall Growth of Released Structures per Year." *RCSB PDB Archive Metrics*, 2026. URL: https://www.rcsb.org/stats/growth/growth-released-structures. Consultado a 15 de setembro de 20261.
> 7. RCSB Protein Data Bank. "PDB Statistics: Growth in Number of Unique Protein Sequences in Released PDB Structures (Cumulative) at Identity 50%." *RCSB PDB Cluster Metrics*, 2026. URL: https://www.rcsb.org/stats/growth/nr/cluster-ids-50. Consultado a 15 de setembro de 202614.
> 8. Ren, F., Aliper, A., Chen, J., Zhao, H., Rao, S., Kielreuter, P., et al. "A small-molecule inhibitor of TNIK discovered by generative AI for idiopathic pulmonary fibrosis." *Nature Biotechnology*, vol. 42, pp. 618–629, abril de 2024. DOI: 10.1038/s41587-024-02143-0. Consultado a 15 de setembro de 202631.
> 9. Space Telescope Science Institute (STScI). "JWST Science Data Volume and Data Flow Specifications." *JWST User Documentation*, 2026. URL: https://jwst-docs.stsci.edu/jwst-science-execution/jwst-data-volume. Consultado a 15 de setembro de 202623.
> 10. Szymanski, N. J., Rendy, B., Fei, Y., Kumar, R. E., He, T., Milsted, D., McDermott, M. J., Gallant, M., Cubuk, E. D., Merchant, A., et al. "An autonomous laboratory for the accelerated synthesis of novel materials." *Nature*, vol. 624, pp. 86–91, novembro de 2023. DOI: 10.1038/s41586-023-06734-w. Consultado a 15 de setembro de 2026.
> 11. Tufts Center for the Study of Drug Development. "Duration of Clinical Drug Development Phases." *Tufts CSDD Impact Reports*, 2024. URL: https://csdd.tufts.edu. Consultado a 15 de setembro de 202630.
> 12. Varadi, M., Bertoni, D., Magana, P., Paramval, U., Pidruchna, I., Radhakrishnan, M., Tsenkov, M., Nair, S., Mirdita, M., Yeo, J., et al. "AlphaFold Protein Structure Database in 2024: providing structure coverage for over 214 million protein sequences." *Nucleic Acids Research*, vol. 52, no. D1, pp. D368–D375, janeiro de 2024. DOI: 10.1093/nar/gkad1011. Consultado a 15 de setembro de 20266.
> 13. Vera C. Rubin Observatory. "Data Management Key Numbers and System Architecture." *LSST Project Documentation*, 2026. URL: https://www.lsst.org/scientists/keynumbers. Consultado a 15 de setembro de 202619.
> 14. York, D. G., Adelman, J., Anderson, J. E., Anderson, S. F., Annis, J., Bahcall, N. A., Bakken, J. A., Barkhouser, R., Bastian, S., Berman, E., et al. "The Sloan Digital Sky Survey: Technical Summary." *The Astronomical Journal*, vol. 120, no. 3, pp. 1579–1587, setembro de 2000. DOI: 10.1086/301513. Consultado a 15 de setembro de 202616.

A publicação visual de dados quantitativos sobre inteligência artificial deve demonstrar rigor metodológico e respeito pela integridade científica, evitando narrativas simplistas de disrupção instantânea. As representações gráficas da plataforma makeaibetter.com terão um impacto pedagógico e institucional reforçado se distinguirem a exploração algorítmica de modelos no domínio digital das restrições práticas da experimentação laboratorial e biológica. Ao explicitar o que é quantificável a partir de fontes primárias e ao identificar com transparência as lacunas métricas onde a evidência empírica é ainda insuficiente, o projeto salvaguarda o seu posicionamento como referência rigorosa de análise sobre o impacto da inteligência artificial na ciência contemporânea.

#### **Referências citadas**

> 1. Protein Data Bank - Wikipedia, [https://en.wikipedia.org/wiki/Protein_Data_Bank](https://en.wikipedia.org/wiki/Protein_Data_Bank)
> 2. Growth of Structures from 3DEM Experiments Released per Year, [https://www.rcsb.org/stats/growth/growth-em](https://www.rcsb.org/stats/growth/growth-em)
> 3. PDB Statistics, [https://www.rcsb.org/statistics/summary](https://www.rcsb.org/statistics/summary)
> 4. Exponential growth of structures deposited in the PDB., [https://www.researchgate.net/figure/PDB-statistics-Exponential-growth-of-structures-deposited-in-the-PDB-In-blue-the-total_fig1_397560498](https://www.researchgate.net/figure/PDB-statistics-Exponential-growth-of-structures-deposited-in-the-PDB-In-blue-the-total_fig1_397560498)
> 5. Cell-Free Protein Synthesis for Functional GPCRs - Nuclera, [https://www.nuclera.com/faster-route-functional-gpcrs/](https://www.nuclera.com/faster-route-functional-gpcrs/)
> 6. AlphaFold Protein Structure Database in 2024 - PMC - NIH, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10767828/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10767828/)
> 7. What AlphaFold Changed: Breakthrough, Limits, and ... - iTechGuides, [https://www.itechguides.com/what-alphafold-changed-deepminds-ai-transformed-science-but-biology-is-not-solved/](https://www.itechguides.com/what-alphafold-changed-deepminds-ai-transformed-science-but-biology-is-not-solved/)
> 8. For decades, working out the shape of a single protein could cost a, [https://spacedaily.com/d-for-decades-working-out-the-shape-of-a-single-protein-could-cost-a-scientist-years-of-painstaking-lab-work-then-an-ai-called-alphafold-learned-to-do-it-in-minutes-and-went-on-to-map-nearly/](https://spacedaily.com/d-for-decades-working-out-the-shape-of-a-single-protein-could-cost-a-scientist-years-of-painstaking-lab-work-then-an-ai-called-alphafold-learned-to-do-it-in-minutes-and-went-on-to-map-nearly/)
> 9. providing structure coverage for over 214 million protein sequences, [https://www.researchgate.net/publication/375456721_AlphaFold_Protein_Structure_Database_in_2024_providing_structure_coverage_for_over_214_million_protein_sequences](https://www.researchgate.net/publication/375456721_AlphaFold_Protein_Structure_Database_in_2024_providing_structure_coverage_for_over_214_million_protein_sequences)
> 10. PDB Statistics: Growth of Structures by Multi-method per Year, [https://www.rcsb.org/stats/growth/growth-multi-method](https://www.rcsb.org/stats/growth/growth-multi-method)
> 11. PDB Statistics: Overall Growth, [https://www.rcsb.org/statistics/growth/overall-small-molecules](https://www.rcsb.org/statistics/growth/overall-small-molecules)
> 12. PDB Statistics, [https://www.rcsb.org/statistics](https://www.rcsb.org/statistics)
> 13. An Updated Review of Developing Small Molecule Kinase Inhibitors, [https://www.preprints.org/manuscript/202307.2046](https://www.preprints.org/manuscript/202307.2046)
> 14. PDB Statistics: Growth in Number of Unique Protein Sequences in, [https://www.rcsb.org/stats/growth/nr/cluster-ids-50](https://www.rcsb.org/stats/growth/nr/cluster-ids-50)
> 15. Deep Learning Models for Protein Structure Prediction - IJERESM, [https://ijeresm.com/0520701204-3/](https://ijeresm.com/0520701204-3/)
> 16. Deep Learning Astronomical Survey Data - CERN Indico, [https://indico.cern.ch/event/669506/contributions/2782602/attachments/1559996/2455349/Deep_Learning_DOMA.pdf](https://indico.cern.ch/event/669506/contributions/2782602/attachments/1559996/2455349/Deep_Learning_DOMA.pdf)
> 17. MADNESS OF THE CROWD - HOW BIG DATA CREATES, [https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1073&context=ecis2014&httpsredir=1&referer=](https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1073&context=ecis2014&httpsredir=1&referer)
> 18. Galaxy detection and identification using deep learning and data, [https://arxiv.org/html/1809.01691v1](https://arxiv.org/html/1809.01691v1)
> 19. Physics-Driven Data Production at Petabyte Scale, and the Science, [https://indico.in2p3.fr/event/40494/](https://indico.in2p3.fr/event/40494/)
> 20. Rubin Observatory and LSST From Data to AI-assisted Discovery, [https://indico.global/event/16263/sessions/21612/attachments/67497/130795/EDUCADO%20-%20Introdution%20to%20Rubin%20and%20the%20LSST%20-%20Leanne%20Guy.pdf](https://indico.global/event/16263/sessions/21612/attachments/67497/130795/EDUCADO%20-%20Introdution%20to%20Rubin%20and%20the%20LSST%20-%20Leanne%20Guy.pdf)
> 21. James Webb Space Telescope - Wikipedia, [https://en.wikipedia.org/wiki/James_Webb_Space_Telescope](https://en.wikipedia.org/wiki/James_Webb_Space_Telescope)
> 22. Cosmology with the Large Synoptic Survey Telescope: an Overview, [https://arxiv.org/html/1707.06948v3](https://arxiv.org/html/1707.06948v3)
> 23. James Webb Space Telescope –L2 Communications for Science, [https://ntrs.nasa.gov/api/citations/20080030196/downloads/20080030196.pdf](https://ntrs.nasa.gov/api/citations/20080030196/downloads/20080030196.pdf)
> 24. Webb Science Operations Center Update - JSTUC May 2026, [https://www.stsci.edu/files/live/sites/www/files/home/jwst/science-planning/user-committees/jwst-users-committee/_documents/jstuc-0526-soc-update-brown.pdf](https://www.stsci.edu/files/live/sites/www/files/home/jwst/science-planning/user-committees/jwst-users-committee/_documents/jstuc-0526-soc-update-brown.pdf)
> 25. Processing and Distribution of JWST data, [http://www.iap.fr/elixir/Documents/ESTEC2/20120926-ELIXIR-school-03-data-flow.pdf](http://www.iap.fr/elixir/Documents/ESTEC2/20120926-ELIXIR-school-03-data-flow.pdf)
> 26. Vera C. Rubin Observatory | Data Center Deployments - DatacentersX, [https://datacentersx.com/deployment-rubin-observatory.html](https://datacentersx.com/deployment-rubin-observatory.html)
> 27. Three Scientists from the Vera C. Rubin Observatory Astronomy, [https://chtc.cs.wisc.edu/rubin-observatory-community-present-htc26.html](https://chtc.cs.wisc.edu/rubin-observatory-community-present-htc26.html)
> 28. Vera C. Rubin Observatory - Wikipedia, [https://en.wikipedia.org/wiki/Vera_C._Rubin_Observatory](https://en.wikipedia.org/wiki/Vera_C._Rubin_Observatory)
> 29. The Vera C. Rubin Observatory Data Preview 1 - alphaXiv, [https://www.alphaxiv.org/abs/2603.23786](https://www.alphaxiv.org/abs/2603.23786)
> 30. MODEL PARAMETERS AND ASSUMPTIONS - Drug Development, [https://www.ncbi.nlm.nih.gov/books/NBK611884/](https://www.ncbi.nlm.nih.gov/books/NBK611884/)
> 31. Rentosertib Encyclopedia — From Target Discovery and Generative, [https://rentosertib.net/](https://rentosertib.net/)
> 32. Case Study: Insilico's Transformation, [https://insilico.com/casestudy](https://insilico.com/casestudy)
> 33. Applications of Data Analysis and Artificial Intelligence Agents in, [https://bjhaeo.com/bjhaeo/article/download/69/51/146](https://bjhaeo.com/bjhaeo/article/download/69/51/146)
> 34. Validating Google Willow: 5.4% Lambda Accuracy | qsurf Blog, [https://getqore.ai/blog/google-willow-validation](https://getqore.ai/blog/google-willow-validation)
> 35. Quantum Error Correction Threshold Theorem: Why Scale Helps, [https://scienceshot.com/post/quantum-error-correction-threshold](https://scienceshot.com/post/quantum-error-correction-threshold)
> 36. The Google's 105-qubit Willow quantum Processor - Cyber Raiden, [https://cyberraiden.wordpress.com/2026/09/02/the-googles-105-qubit-willow-quantum-processor-a-technical-briefing-on-googles-superconducting-quantum-chip/](https://cyberraiden.wordpress.com/2026/09/02/the-googles-105-qubit-willow-quantum-processor-a-technical-briefing-on-googles-superconducting-quantum-chip/)
> 37. Neura-parse/fault-tolerant-quantum-computing - Hugging Face, [https://huggingface.co/datasets/Neura-parse/fault-tolerant-quantum-computing](https://huggingface.co/datasets/Neura-parse/fault-tolerant-quantum-computing)
> 38. Willow processor - Wikipedia, [https://en.wikipedia.org/wiki/Willow_processor](https://en.wikipedia.org/wiki/Willow_processor)
> 39. Wind in The Willows Simulation Access | PDF | Quantum Computing, [https://www.scribd.com/document/1047574602/Wind-in-the-willows-simulation-access](https://www.scribd.com/document/1047574602/Wind-in-the-willows-simulation-access)
> 40. Dara - Template Journal of Computer Science Advancements, [https://research.adra.ac.id/index.php/jcsa/article/download/3324/2364](https://research.adra.ac.id/index.php/jcsa/article/download/3324/2364)
> 41. A Sim-to-Real Study of Surface-Code Decoder Benchmarking, [https://www.researchgate.net/publication/414038650_A_Sim-to-Real_Study_of_Surface-Code_Decoder_Benchmarking](https://www.researchgate.net/publication/414038650_A_Sim-to-Real_Study_of_Surface-Code_Decoder_Benchmarking)
> 42. Colour Codes Reach Surface Code Performance using Vibe Decoding, [https://arxiv.org/html/2508.15743v1](https://arxiv.org/html/2508.15743v1)
> 43. Fixing Broken Qubits: How the Surface Code Makes Fault-Tolerant, [https://quantagram.org/articles/quantum-error-correction/](https://quantagram.org/articles/quantum-error-correction/)
> 44. A benchmark dataset for multi-purpose compression of astronomical, [https://arxiv.org/html/2506.08306v1](https://arxiv.org/html/2506.08306v1)

