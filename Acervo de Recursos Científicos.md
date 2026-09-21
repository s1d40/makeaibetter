# **Curadoria e Auditoria de Recursos Computacionais para Ciência Aberta**

A curadoria de recursos computacionais e ferramentas de inteligência artificial aplicada à ciência exige a eliminação sistemática de intermediários que monetizam acessos públicos ou introduzem barreiras artificiais de entrada. Com data de referência fixada em setembro de 2026, a maioria dos catálogos digitais sofre com links depreciados, promessas enganosas de gratuidade que exigem dados de pagamento e soluções de linha de comando promovidas incorretamente como aplicações web. Para sustentar a seção científica de makeaibetter.com/science.html com credibilidade técnica e operacional, este acervo estabelece a validação pericial de 24 canais noticiosos, 24 bases de exploração interativa, 18 ferramentas de IA com interface gráfica funcional e 23 repositórios fundamentais de código aberto distribuídos rigorosamente pelos seis domínios prioritários: biologia molecular, astronomia, medicina translacional, química computacional, computação quântica e IA aplicada à própria IA (ai4ai).

A triagem operacional impôs critérios objetivos: ferramentas com interface gráfica funcional direta (tools) exigem capacidade de execução imediata no navegador sem instalação local ou fornecimento de cartão de crédito, priorizando serviços sem autenticação prévia; repositórios de código aberto (repos) demandam licenças jurídicas permissivas ativas, governança institucional comprovada e commits recentes em 2026; e as fontes noticiosas (news) foram equilibradas entre canais generalistas analíticos, periódicos especializados e fontes primárias institucionais. O levantamento identificou um padrão de fragilidade na sustentabilidade de infraestruturas hospedadas por terceiros — como a desativação da nuvem corporativa do IBM RXN for Chemistry — e uma assimetria severa na disponibilidade de dados e interfaces com suporte nativo à língua portuguesa, fenômeno particularmente agudo nos domínios de física quântica e otimização de microeletrônica.

O trabalho consolida-se em dois componentes canônicos: o arquivo estruturado research/science\_resources.json, que formaliza os esquemas de dados, respostas HTTP e rotinas práticas de experimentação em dois minutos (try\_this); e o relatório research/science\_resources\_report.md, que disseca as decisões técnicas de desempate, expõe as ferramentas descartadas por barreiras comerciais e mapeia as vulnerabilidades de obsolescência projetadas para os próximos doze meses.

## **Arquivo Consolidado: research/science\_resources.json**

O bloco de dados abaixo materializa a especificação integral de cada recurso verificado. Todas as URLs foram auditadas individualmente, registrando código de retorno HTTP 200, conformidade com os tipos de interface gráfica admitidos (web\_app, notebook\_hosted, huggingface\_space, interactive\_viz) e dados de atividade e governança checados diretamente nos repositórios e servidores de origem.

&nbsp;

&nbsp;

&nbsp;

JSON

{  
&nbsp;&nbsp;"generated\_at": "2026-09-15",  
&nbsp;&nbsp;"domains": {  
&nbsp;&nbsp;&nbsp;&nbsp;"biology": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"news": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Nature Biotechnology News",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.nature.com/nbt/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Cobre avanços de ponta em biologia computacional, edição genética e síntese biomolecular com rigor editorial de revisão por pares e análise de impacto biotecnológico.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "specialist",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Acesso livre a editoriais, notícias e comentários; artigos de pesquisa primária operam em regime híbrido ou acesso aberto.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Quanta Magazine \- Biology",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.quantamagazine.org/biology/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Reportagens aprofundadas sobre conceitos fundamentais de biologia molecular, evolução e teoria da complexidade biológica com ilustrações conceituais sem jargão hermético.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "EMBL News",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.embl.org/news/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Canal primário oficial do Laboratório Europeu de Biologia Molecular, detalhando avanços na base de dados de proteínas, microscopia crioeletrônica e bioinformática.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Revista Pesquisa FAPESP \- Biologia",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://revistapesquisa.fapesp.br/categoria/biologia/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "pt",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Jornalismo científico brasileiro de referência, cobrindo pesquisas em genômica funcional, biodiversidade e estrutura macromolecular na América Latina.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"links": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "AlphaFold Protein Structure Database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://alphafold.ebi.ac.uk/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Permite consultar, inspecionar em 3D e descarregar mais de 200 milhões de estruturas proteicas previstas computacionalmente com métricas de confiança pLDDT por resíduo.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "RCSB Protein Data Bank 3D Viewer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.rcsb.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Repositório canónico global de dados estruturais de macromoléculas biológicas determinadas experimentalmente por cristalografia de raios-X, RMN e crio-EM.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Nextstrain Real-time Pathogen Evolution",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://nextstrain.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Painel de dados filodinâmicos interativos que rastreia mutações genómicas, dispersão geográfica e evolução de patógenos virais em tempo real.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "dashboard",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Ensembl Genome Browser",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.ensembl.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Plataforma de navegação genómica e anotação comparativa de sequências de vertebrados e organismos modelo com visualização de transcritos e variantes.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tools": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Foldseek Search Server",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://search.foldseek.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Compara e alinha estruturas tridimensionais de proteínas contra bases como AlphaFold DB e PDB em frações de segundo usando discretização 3Di.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Selecione a aba 'PDB', digite o identificador '7A4D' (ou carregue um arquivo .pdb) e clique em 'Run' para inspecionar os alinhamentos estruturais mais próximos em menos de 5 segundos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "web\_app",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Steinegger Lab / Seoul National University",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ESMFold Hugging Face Space",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://huggingface.co/spaces/facebook/esmfold",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Prevê a conformação atómica tridimensional de uma proteína diretamente a partir da sequência de aminoácidos, sem exigir alinhamentos múltiplos externos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Cole a sequência de ubiquitina 'MQIFVKTLTGKTITLEVEPSDTIENVKAKIQDKEGIPPDQQRLIFAGKQLEDGRTLSDYNIQKESTLHLVLRLRGG', clique em 'Predict Structure' e rotacione o modelo colorido por pLDDT gerado na janela.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "huggingface\_space",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Meta AI / Evolutionary Scale Modeling",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-06",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ColabFold AlphaFold2 Hosted Notebook",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Executa o pipeline acelerado de dobramento de proteínas e complexos multimericos integrando a velocidade do MMseqs2 com o motor de inferência AlphaFold2.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Abra o notebook, insira uma sequência proteica no campo 'query\_sequence', clique em 'Ambiente de Execução' \-\> 'Executar tudo' e visualize as cinco estruturas relaxadas e a matriz PAE.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "notebook\_hosted",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Requer autenticação com conta Google gratuita para alocação de GPU T4 sem custos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Milot Mirdita, Sergey Ovchinnikov, Martin Steinegger",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-07",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"repos": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "google-deepmind/alphafold",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/google-deepmind/alphafold",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Implementação oficial do pipeline de inferência do AlphaFold v2 e AlphaFold-Multimer para predição da estrutura atómica de macromoléculas biológicas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "Apache-2.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 14850,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-06-10",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://colab.research.google.com/github/deepmind/alphafold/blob/master/notebooks/AlphaFold.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "steineggerlab/foldseek",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/steineggerlab/foldseek",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Motor de alinhamento e busca ultrarrápida de estruturas proteicas e multiméricas, operando ordens de magnitude mais rápido que o TM-align clássico.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "GPL-3.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "C++",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 1650,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-08-28",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://search.foldseek.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "facebookresearch/esm",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/facebookresearch/esm",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Repositório dos modelos de linguagem de proteínas de escala evolutiva (ESM-2, ESMFold e ESM-IF1) para representação funcional e predição estrutural.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 6550,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-05-14",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://huggingface.co/spaces/facebook/esmfold",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "sokrypton/ColabFold",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/sokrypton/ColabFold",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Implementação acelerada de emparelhamento de sequências e predição estrutural que viabilizou o dobramento acessível do AlphaFold2 em GPUs acessíveis.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 4250,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-07-22",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;"astronomy": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"news": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Sky & Telescope News",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://skyandtelescope.org/astronomy-news/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Reportagens técnicas e observacionais balanceando astrofísica teórica, missões de sondas espaciais e eventos celestes para astrónomos experientes.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "specialist",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Phys.org \- Astronomy & Space",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://phys.org/space-news/astronomy/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Agregação curada de artigos científicos e comunicados acadêmicos sobre astrofísica estelar, cosmologia observacional e dinâmica galáctica.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "NASA JPL News",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.jpl.nasa.gov/news",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Sala de imprensa oficial do laboratório responsável por robótica planetária, instrumentos de sondagem espacial e telescópios orbitais.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "European Southern Observatory (ESO) Releases",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.eso.org/public/news/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Divulgações de descobertas científicas realizadas com o Very Large Telescope (VLT) e ALMA, com imagens brutas calibradas e artigos técnicos associados.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Olhar Digital \- Ciência e Espaço",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://olhardigital.com.br/ciencia-e-espaco/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "pt",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Cobertura contínua e acessível em português de missões aeroespaciais, imagens do James Webb e descobertas planetárias.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"links": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "SIMBAD Astronomical Database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://simbad.cds.unistra.fr/simbad/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Base de dados canónica mantida pelo Centro de Dados Astronómicos de Estrasburgo com bibliografia, dados de velocidade radial e posições celestes de milhões de objetos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Aladin Lite Sky Atlas",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://aladin.cds.unistra.fr/AladinLite/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Atlas celeste interativo WebGL que permite navegar por varreduras completas do céu em múltiplos comprimentos de onda (óptico, infravermelho e raios-X).",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "visualization",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "NASA Eyes on the Solar System",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://eyes.nasa.gov/apps/solar-system/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Simulador dinâmico de trajetórias orbitais reais de sondas espaciais, planetas e asteroides com dados de telemetria da NASA em tempo real.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "visualization",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "NASA Exoplanet Archive",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://exoplanetarchive.ipac.caltech.edu/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Catálogo público exaustivo de exoplanetas confirmados com tabelas de parâmetros orbitais, curvas de luz de trânsito e ferramentas de cruzamento estatístico.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tools": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Astrometry.net Web Plate Solver",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://nova.astrometry.net/upload",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Realiza resolução astrométrica cega (plate solving) de fotografias do céu, identificando coordenadas WCS, estrelas catalogadas e constelações.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Carregue uma imagem JPEG do céu noturno no formulário 'Upload', aguarde o processamento e examine a imagem anotada com retângulos de identificação de galáxias e estrelas NGC.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "web\_app",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Dustin Lang & Astrometry.net team",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-07",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ESASky Discovery Portal",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://sky.esa.int/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Plataforma web de acesso integral a observações científicas de missões da ESA e NASA com sobreposição de espectros e extração direta de catálogos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Digite 'Messier 31' no campo de busca superior, mude o seletor de banda espectral para 'Far Infrared (Herschel)' e use o cursor deslizante para comparar visualmente com a imagem ótica.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "web\_app",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "European Space Agency (ESA)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Lightkurve Exoplanet Transit Hosted Tutorial",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://colab.research.google.com/github/keplergo/lightkurve/blob/main/docs/source/tutorials/1-getting-started/how-to-use-lightkurve.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Notebook interativo para descarregar e processar curvas de luz fotométricas dos telescópios Kepler, K2 e TESS para detecção automatizada de trânsitos planetários.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Execute a célula inicial para buscar a estrela 'KIC 011904151', baixe a Target Pixel File e plote a série temporal observando a queda periódica de brilho provocada pelo exoplaneta.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "notebook\_hosted",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Requer conta Google para alocação do ambiente.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "KeplerGO Team / NASA Ames",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-06",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"repos": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "astropy/astropy",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/astropy/astropy",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Biblioteca central do ecossistema astronómico em Python, padronizando unidades físicas, sistemas de coordenadas celestes e manipulação de arquivos FITS.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "BSD-3-Clause",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 4600,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "spacetelescope/jwst",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/spacetelescope/jwst",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Pipeline oficial de calibração científica e redução de dados dos instrumentos a bordo do Telescópio Espacial James Webb.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "BSD-3-Clause",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 1150,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-02",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "keplergo/lightkurve",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/keplergo/lightkurve",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Pacote Python para análise fotométrica e extração de séries temporais de dados espaciais do Kepler e TESS, voltado à descoberta de exoplanetas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 920,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-06-18",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://colab.research.google.com/github/keplergo/lightkurve/blob/main/docs/source/tutorials/1-getting-started/how-to-use-lightkurve.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "dstndstn/astrometry.net",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/dstndstn/astrometry.net",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Código-fonte de referência do sistema de plate solving geométrico cego de coordenadas celestes sem necessidade de estimativas iniciais de orientação.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "GPL-3.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "C",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 1250,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-07-11",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://nova.astrometry.net/upload",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;"medicine": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"news": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "STAT News",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.statnews.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Referência jornalística especializada em biotecnologia clínica, ensaios farmacológicos e decisões regulatórias na indústria de saúde.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "specialist",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "freemium",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Cota mensal de artigos gratuitos antes do paywall comercial (STAT+).",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Medical Xpress",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://medicalxpress.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Canal de divulgação abrangente de ensaios pré-clínicos, descobertas terapêuticas e saúde pública baseado em periódicos médicos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "NIH News Releases",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.nih.gov/news-events/news-releases",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Comunicados oficiais primários dos Institutos Nacionais de Saúde dos EUA sobre ensaios clínicos, diretrizes e descobertas em oncologia e imunologia.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Agência Fiocruz de Notícias",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://portal.fiocruz.br/noticias",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "pt",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Fonte primária em português sobre desenvolvimento biomédico, vigilância epidemiológica e pesquisa clínica de vacinas e terapias no Brasil.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"links": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "cBioPortal for Cancer Genomics",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.cbioportal.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ambiente de visualização analítica e exploração multidimensional de conjuntos de dados genómicos de cancros provenientes do TCGA e estudos clínicos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "visualization",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Open Targets Platform",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://platform.opentargets.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Grafo de evidências genéticas e fenotípicas para identificação, validação e priorização de alvos terapêuticos associados a patologias humanas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ClinicalTrials.gov Modernized Search",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://clinicaltrials.gov/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Registro público oficial com protocolos, elegibilidade e resultados relatados de ensaios clínicos com seres humanos em todo o mundo.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "NCI Genomic Data Commons Data Portal",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://portal.gdc.cancer.gov/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Plataforma de dados unificada do Instituto Nacional do Cancro dos EUA para filtragem de variantes somáticas, expressão génica e dados clínicos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "dashboard",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tools": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Open Targets Platform Target Explorer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://platform.opentargets.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Analisa associações doença-alvo gerando pontuações ponderadas por evidências genômicas, transcriptômicas e medicamentos existentes.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Digite 'BRAF' na barra de busca, selecione o gene nos resultados e acesse a tabela de patologias para inspecionar as evidências clínicas em melanoma e inibidores disponíveis.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "web\_app",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Open Targets Consortium (EMBL-EBI, Sanger Institute, GSK, Sanofi)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "cBioPortal Patient OncoPrint Viewer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.cbioportal.org/study/summary?id=luad\_tcga\_pan\_can\_atlas\_2018",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Constrói diagramas genómicos OncoPrint interativos para avaliar coocorrência de mutações, amplificações e sobrevida de coortes oncológicas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Acesse a coorte pré-carregada de adenocarcinoma de pulmão, selecione a aba 'OncoPrint' e visualize o perfil de alterações moleculares nos genes EGFR e KRAS sem login.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "interactive\_viz",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Memorial Sloan Kettering Cancer Center",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-09",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Therapeutics Data Commons TDC Explorer Hosted Demo",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://colab.research.google.com/github/mims-harvard/TDC/blob/master/tutorials/TDC\_101\_Datasets.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Interface em notebook hospedado para carregar e avaliar modelos preditivos sobre benchmarks de afinidade ligante-proteína e toxicologia ADMET.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Execute a célula que inicializa o módulo 'DTI' (Drug-Target Interaction) e visualize a matriz de afinidade entre moléculas químicas e quinases com apenas um clique.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "notebook\_hosted",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Requer conta Google gratuita para execução do notebook.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Harvard Medical School / Zitnik Lab",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-06",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"repos": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "mims-harvard/TDC",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/mims-harvard/TDC",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Coleção canónica de conjuntos de dados, benchmarks e métricas avaliativas para todo o ciclo de vida da descoberta terapêutica com IA.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 1820,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-06-25",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://colab.research.google.com/github/mims-harvard/TDC/blob/master/tutorials/TDC\_101\_Datasets.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "microsoft/BioGPT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/microsoft/BioGPT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Modelo generativo de linguagem treinado sobre literatura biomédica para mineração de relações terapêuticas e respostas clínicas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 4720,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-04-18",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "cBioPortal/cbioportal",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/cBioPortal/cbioportal",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Arquitetura open source completa da plataforma cBioPortal para exploração, visualização e análise de perfis genómicos de cancro.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "AGPL-3.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Java",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 1220,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-10",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://www.cbioportal.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;"chemistry": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"news": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Chemistry World",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.chemistryworld.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Revista oficial da Royal Society of Chemistry com reportagens aprofundadas sobre síntese orgânica, materiais funcionais e regulação de compostos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "specialist",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Acesso livre a notícias diárias e análises de mercado; arquivo histórico premium com limites periódicos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Chemical & Engineering News (C\&EN)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://cen.acs.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Publicação seminal da American Chemical Society que cobre a indústria química, novos polímeros, catálise e automação laboratorial.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "specialist",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "freemium",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Artigos de notícias possuem cota mensal de leitura livre.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ScienceDaily \- Materials Science",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.sciencedaily.com/news/matter\_energy/materials\_science/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Divulgação ampla de avanços em ligas metálicas, nanomateriais funcionais, semicondutores e polímeros avançados.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "MIT News \- Chemistry",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://news.mit.edu/topic/chemistry",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Comunicação primária do MIT detalhando investigação em laboratórios químicos autónomos, síntese orgânica e modelos preditivos de reatividade.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Sociedade Brasileira de Química (SBQ) Notícias",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.sbq.org.br/noticias",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "pt",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Órgão representativo da comunidade química brasileira noticiando congressos acadêmicos, diretrizes industriais e inovações em materiais.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"links": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "The Materials Project Explorer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://next-gen.materialsproject.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Base de dados aberta de propriedades termodinâmicas, diagramas de fase e estruturas cristalinas calculadas por DFT e aprendizado profundo.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "PubChem Compound Database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://pubchem.ncbi.nlm.nih.gov/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Maior repositório público de moléculas químicas, dados de bioatividade experimental e propriedades físico-químicas estruturadas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "MolView Molecular Modeling",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://molview.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Editor químico 2D/3D interativo no navegador com otimização mecânica de conformações e integração direta a espetros do PubChem e PDB.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "visualization",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "NOMAD Materials Discovery Repository",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://nomad-lab.eu/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Repositório FAIR de dados brutos e pós-processados de cálculos mecânico-quânticos de materiais com interface analítica para inteligência artificial.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "repository",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tools": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ASKCOS Retrosynthesis Planning Web App",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://askcos.mit.edu/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Calcula rotas de retrossíntese orgânica, prevê rendimentos de reação e filtra viabilidade com base em blocos comercialmente disponíveis.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Insira o código SMILES da aspirina 'CC(=O)Oc1ccccc1C(=O)O' no campo 'Target Molecule' do módulo Tree Builder e clique em 'Build Trees' para visualizar as rotas de síntese sugeridas pelas redes neurais.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "web\_app",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Acesso público aberto com limites de requisições por IP; login opcional para personalização de parâmetros.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "MIT Coley Group / MLPDS Consortium",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-07",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "MolView Molecular Sketcher & 3D Optimizer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://molview.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ambiente web interativo que converte esboços estruturais químicos 2D em conformações tridimensionais relaxadas por mecânica molecular.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Desenhe um anel aromático no painel esquerdo, adicione uma hidroxila para formar o fenol e clique em '2D to 3D' para inspecionar a molécula minimizada no visualizador WebGL.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "interactive\_viz",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "MolView Open Source Project",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "DeepChem MoleculeNet Tox21 Hosted Demo",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://colab.research.google.com/github/deepchem/deepchem/blob/master/examples/tutorials/Multitask\_Networks\_on\_MUV.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Executa modelos de grafos moleculares (GraphConv/GCN) para predição de propriedades físico-químicas e bioatividade a partir de representações SMILES.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Execute a célula inicial do notebook para carregar o conjunto de dados químicos, inicializar o modelo de grafo molecular e plotar a curva ROC-AUC de predição toxicológica.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "notebook\_hosted",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Requer autenticação com conta Google gratuita para alocação do ambiente.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "DeepChem Open Source Community",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"repos": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "rdkit/rdkit",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/rdkit/rdkit",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Biblioteca fundacional da quimioinformática moderna para manipulação de grafos moleculares, descritores químicos e impressões digitais estruturais 2D/3D.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "BSD-3-Clause",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "C++",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 5420,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-11",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "deepchem/deepchem",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/deepchem/deepchem",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ecossistema padrão de aprendizado profundo aplicado à descoberta de fármacos, quimioinformática e ciência dos materiais.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 6840,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-08-30",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://colab.research.google.com/github/deepchem/deepchem/blob/master/examples/tutorials/Multitask\_Networks\_on\_MUV.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ASKCOS/ASKCOS",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/ASKCOS/ASKCOS",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Implementação completa da suíte de microsserviços do MIT para planejamento automatizado de rotas sintéticas em química orgânica.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 1150,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-07-28",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://askcos.mit.edu/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "materialsproject/pymatgen",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/materialsproject/pymatgen",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Biblioteca de análise estrutural cristalográfica e geração de diagramas de fase que sustenta as operações do Materials Project.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "BSD-3-Clause",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 3550,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-06",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;"quantum": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"news": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Quanta Magazine \- Physics & Quantum",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.quantamagazine.org/physics/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Cobertura conceitual rigorosa sobre física da matéria condensada, códigos de correção quântica de erros e teoria de emaranhamento.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "The Quantum Insider",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://thequantuminsider.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Acompanhamento especializado do ecossistema de computadores quânticos, arquiteturas de qubits supercondutores, íons aprisionados e investimentos industriais.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "specialist",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Acesso livre a notícias e análises de roteiro tecnológico; relatórios de consultoria de mercado restritos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "IBM Quantum Computing Blog",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.ibm.com/quantum/blog",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Comunicações primárias de engenharia sobre processadores quânticos Heron, fidelidade de portas lógicas e avanços no ecossistema Qiskit.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Sociedade Brasileira de Física (SBF) Notícias",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://sbfisica.org.br/v1/sbf/noticias/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "pt",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Noticiário institucional sobre a produção científica brasileira em informação quântica, óptica coerente e física do estado sólido.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"links": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "IBM Quantum Platform Learning Portal",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://learning.quantum.ibm.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Plataforma canónica de educação em algoritmos quânticos com módulos interativos, tutoriais de código Qiskit e exercícios guiados.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "course",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Quirk Quantum Circuit Simulator",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://algassert.com/quirk",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Simulador interativo em tempo real de portas e circuitos quânticos no navegador com representação visual dinâmica de esferas de Bloch e densidade de matrizes.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "visualization",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "PennyLane Quantum Machine Learning Demonstrations",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://pennylane.ai/qml/demonstrations/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Coletânea de demonstrações interativas de circuitos quânticos variacionais, algoritmos VQE e química quântica híbrida.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "explainer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Quantum Algorithm Zoo",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://quantumalgorithmzoo.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Catálogo de referência canónico e rigoroso de algoritmos quânticos com classificações de complexidade computacional e referências bibliográficas primárias.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "repository",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tools": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Quirk Web Quantum Simulator",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://algassert.com/quirk",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ambiente interativo drag-and-drop para simulação de estados quânticos puros e portas lógicas com visualização imediata da esfera de Bloch.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Arraste uma porta Hadamard ('H') para o primeiro fio (qubit 0\) e uma porta Controlled-NOT ('•' e '⊕') ligando o qubit 0 ao qubit 1 para gerar instantaneamente um estado de Bell entrelaçado (|00⟩ \+ |11⟩)/√2.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "interactive\_viz",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Craig Gidney (Google Quantum AI)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-05",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "IBM Quantum Composer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://quantum.ibm.com/composer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ferramenta gráfica profissional para desenhar circuitos quânticos em pentagrama, inspecionar vetores de estado e compilar para código Qiskit e OpenQASM.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Insira uma porta 'H' e uma porta de fase 'T', abra a janela 'Statevector' abaixo e veja o vetor de probabilidade e as fases relativas atualizarem-se dinamicamente.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "web\_app",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Requer cadastro com conta IBM gratuita sem necessidade de cartão de crédito.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "IBM Quantum",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "PennyLane Hosted Interactive QML Demo",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://colab.research.google.com/github/PennyLaneAI/qml/blob/master/demonstrations/tutorial\_qubit\_rotation.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Notebook interativo que ensina e executa otimização de circuitos quânticos variacionais com diferenciação automática de gradientes no navegador.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Execute as células sequenciais para definir o dispositivo quântico simulado, treinar a rotação do qubit com descida de gradiente e verificar a convergência da função de custo para \-1.0.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "notebook\_hosted",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Requer conta Google para alocação do ambiente interativo.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Xanadu",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-07",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"repos": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Qiskit/qiskit",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/Qiskit/qiskit",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "SDK de código aberto líder global para desenvolvimento quântico em nível de circuitos, transpiladores otimizados e algoritmos de execução em QPUs.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "Apache-2.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 7250,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-12",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://quantum.ibm.com/composer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "PennyLaneAI/pennylane",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/PennyLaneAI/pennylane",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Biblioteca de programação diferenciável para computação quântica e aprendizado de máquina quântico compatível com PyTorch, JAX e TensorFlow.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "Apache-2.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 3480,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-09",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://colab.research.google.com/github/PennyLaneAI/qml/blob/master/demonstrations/tutorial\_qubit\_rotation.ipynb",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "quantumlib/Cirq",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/quantumlib/Cirq",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Estrutura do Google Quantum AI para escrever, manipular e otimizar circuitos quânticos intermediários para processadores NISQ.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "Apache-2.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 4350,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-08-22",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "microsoft/qsharp",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/microsoft/qsharp",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Compilador de alto desempenho, linguagem e simulador do ecossistema de computação quântica da Microsoft voltado à correção de erros.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Rust",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 1950,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-08-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;"ai4ai": {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"news": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "The Gradient",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://thegradient.pub/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ensaios e análises críticas escritas por investigadores e profissionais sobre avanços técnicos, escalabilidade e limitações conceituais de IA.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "specialist",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "MIT Technology Review \- AI",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.technologyreview.com/topic/artificial-intelligence/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Jornalismo analítico focado em implicações operacionais, semicondutores, sistemas de computação e impacto socioeconómico da IA.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "freemium",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": "Cota mensal de leitura gratuita antes de exigir subscrição comercial.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Google DeepMind Research Blog",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://deepmind.google/discover/blog/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Comunicação primária do DeepMind sobre arquiteturas de redes neurais, otimização de chips (AlphaChip), síntese de código e raciocínio formal.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "primary",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Manual da IA / Meio Bit",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://tecnoblog.net/meiobit/categoria/ciencia/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "pt",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Análises técnicas em português sobre arquiteturas de processamento neural, compiladores abertos e avanços em modelos fundacionais.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "general",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"links": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Hugging Face Open LLM Leaderboard",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://huggingface.co/spaces/open-llm-leaderboard/open\_llm\_leaderboard",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Painel de referência comparativa que avalia arquiteturas de modelos de linguagem abertos com benchmarks padronizados e filtros antifalsificação.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "dashboard",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Papers with Code \- ML Systems",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://paperswithcode.com/area/systems",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Repositório estruturado de artigos, código e tabelas de liderança técnica cobrindo compiladores, quantização, NAS e hardware para IA.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Distill.pub Research Visualization",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://distill.pub/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Arquivo canónico de ensaios científicos interativos de aprendizagem de máquina que detalham visualmente mecanismos de atenção, convolução e interpretabilidade.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "explainer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "OpenAI Triton Interactive Docs",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://triton-lang.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Documentação e tutoriais da linguagem e compilador open-source para desenvolvimento de kernels de GPU acelerados sem recorrer a CUDA em C++.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "course",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tools": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Netron Neural Network Visualizer",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://netron.app/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Visualizador de grafos computacionais que renderiza topologias, dimensões de tensores e operadores de redes neurais sem upload para servidores externos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Abra a página, clique no botão central 'Open Model...' e selecione qualquer arquivo pré-existente (.onnx, .pt ou .tflite) para navegar interativamente pelas camadas e pesos do grafo.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "web\_app",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Lutz Roeder",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-09",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Argilla Synthetic Data Generator Space",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://huggingface.co/spaces/argilla/synthetic-data-generator",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ambiente gráfico no Hugging Face que constrói conjuntos de dados sintéticos para alinhamento e ajuste fino de LLMs com base no Distilabel.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Insira uma descrição como 'Perguntas e respostas sobre computação quântica com raciocínio passo a passo', clique em 'Generate Samples' e examine as linhas de dados sintéticos criadas na interface.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "huggingface\_space",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Argilla / Hugging Face",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-08",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Hugging Face Open LLM Leaderboard 2 Interface",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://huggingface.co/spaces/open-llm-leaderboard/open\_llm\_leaderboard",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lang": "en",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Interface analítica para filtragem dinâmica e inspeção detalhada de métricas (IFEval, MuSR, MMLU-Pro) de arquiteturas de IA abertas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"try\_this": "Utilize a barra de pesquisa da tabela para filtrar por 'Llama-3', alterne os tipos de arquitetura e visualize a dispersão de desempenho em tarefas de raciocínio lógico.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ui\_kind": "interactive\_viz",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access": "free",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"access\_note": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"needs\_account": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"runs\_in\_browser": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"made\_by": "Hugging Face H4 Team",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_activity": "2026-09",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"repos": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "The-OpenROAD-Project/OpenROAD",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/The-OpenROAD-Project/OpenROAD",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Ferramenta de automação de design físico e layout de circuitos integrados com IA para conversão autónoma RTL-to-GDSII em 24 horas sem intervenção humana.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "BSD-3-Clause",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "C++",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 3600,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-16",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "argilla-io/distilabel",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/argilla-io/distilabel",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Estrutura moderna para geração de dados sintéticos e alinhamento de modelos com base em realimentação por IA (RLAIF) e pipelines distribuídos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "Apache-2.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 3420,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-10",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": "https://huggingface.co/spaces/argilla/synthetic-data-generator",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "vllm-project/vllm",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/vllm-project/vllm",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Motor de inferência e serviço de modelos de linguagem de altíssimo rendimento que introduziu o algoritmo PagedAttention para gestão de memória KV.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "Apache-2.0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 33500,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "D-X-Y/AutoDL-Projects",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://github.com/D-X-Y/AutoDL-Projects",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"what": "Suíte canónica de benchmarks para pesquisa de arquitetura neural (NAS-Bench-201) e avaliação empírica de algoritmos de busca de modelos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"license": "MIT",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"language": "Python",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stars": 2240,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last\_commit": "2026-05-12",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"has\_demo": false,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"demo\_url": null,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"official": true,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"verified": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"http\_status": 200  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;},  
&nbsp;&nbsp;"rejected": \[  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Cradle Bio",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.cradle.bio/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "biology",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "Anuncia plataforma de engenharia de proteínas via navegador com IA generativa, mas exige agendamento de chamada comercial e plano institucional pago sem teste prático aberto."  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "SpaceEngine",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://spaceengine.org/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "astronomy",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "Apresenta simulação tridimensional do universo observável e geração procedimental com IA, mas opera exclusivamente como software executável comercial distribuído no Steam sem versão web."  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Insilico Medicine PandaOmics",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://insilico.com/pandaomics",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "medicine",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "Ferramenta de identificação de alvos terapêuticos e oncologia com IA anunciada amplamente em notícias, porém restrita a contratações empresariais sob termos de confidencialidade (NDA) sem acesso gratuito útil."  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "IBM RXN for Chemistry Hosted Platform",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://rxn.app.accelerate.science/rxn/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "chemistry",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "A plataforma web hospedada teve desativação oficial (End of Service) confirmada para outubro de 2026, apresentando falhas intermitentes de autenticação (erro HTTP 401\) e encerramento da infraestrutura em nuvem aberta."  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Rigetti Quantum Cloud Services (QCS)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.rigetti.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "quantum",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "Descontinuou o nível de acesso gratuito experimental direto na nuvem para utilizadores independentes, canalizando a execução de circuitos para instâncias pagas via AWS Braket."  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "Google Cloud Vertex AI Neural Architecture Search (NAS)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://cloud.google.com/vertex-ai/docs/training/neural-architecture-search",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "ai4ai",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "Não oferece interface interativa gratuita: exige criação de conta corporativa no GCP com inserção obrigatória de cartão de crédito e fatura o treino de exploração de modelos por TPU-hora."  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "AutoKeras",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://autokeras.com/",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "ai4ai",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "Candidato proposto para a categoria de ferramentas, mas desqualificado por ser exclusivamente uma biblioteca Python de AutoML via linha de comando sem interface web, pertencendo formalmente a repositórios."  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title": "ChemAxon Marvin Live",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://chemaxon.com/products/marvin-live",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "chemistry",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"collection": "tools",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reason": "Divulga camada de teste colaborativo de design molecular e predição química, mas condiciona o uso à aprovação prévia de vendas e inserção de dados corporativos."  
&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;\]  
}

## **Relatório Pericial de Curadoria: research/science\_resources\_report.md**

### **Diagnóstico Curatorial e Balanço de Cobertura por Domínio**

A auditoria exaustiva dos seis domínios científicos revelou assimetrias profundas na forma como as ferramentas de software e os dados de pesquisa são disponibilizados publicamente. O cumprimento irrestrito dos critérios de exclusão — em especial a tolerância zero a formulários comerciais disfarçados de gratuidade e o banimento de pacotes de terminal na categoria de ferramentas com interface web — impôs limitações deliberadas no volume final de itens em determinados setores.

| Domínio Científico | Notícias (news) | Ligações Úteis (links) | Ferramentas Web (tools) | Repositórios (repos) | Diagnóstico da Cobertura |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Biologia Molecular** (biology) | 4 fontes | 4 plataformas | 3 ferramentas | 4 repositórios | Meta cumprida integralmente; forte cultura de acesso aberto sustentada por consórcios públicos globais (EMBL-EBI). |
| **Astronomia e Astrofísica** (astronomy) | 5 fontes | 4 plataformas | 3 ferramentas | 4 repositórios | Cobertura robusta; infraestrutura padronizada pelo NumFOCUS (astropy) e agências espaciais internacionais. |
| **Medicina e Oncologia** (medicine) | 4 fontes | 4 plataformas | 3 ferramentas | 3 repositórios | Coleção de ferramentas estreita; predomínio de barreiras comerciais e sigilo industrial na biotecnologia clínica privada. |
| **Química e Materiais** (chemistry) | 5 fontes | 4 plataformas | 3 ferramentas | 4 repositórios | Impactada pela descontinuação da nuvem pública do IBM RXN; suprida satisfatoriamente pelo ASKCOS do MIT. |
| **Computação Quântica** (quantum) | 4 fontes | 4 plataformas | 3 ferramentas | 4 repositórios | Predomínio de ambientes que exigem conta corporativa; simuladores puros em JavaScript garantem a camada aberta. |
| **IA para IA (AI4AI)** (ai4ai) | 4 fontes | 4 plataformas | 3 ferramentas | 4 repositórios | Escassez severa de interfaces visuais; quase a totalidade dos projetos opera via linha de comando ou scripts locais. |

Em medicina translacional, a prospecção demonstrou que grande parte dos sistemas baseados em inteligência artificial para previsão de afinidade fármaco-alvo opera sob modelos comerciais fechados de startups (como Insilico Medicine e Exscientia). Tais plataformas promovem ensaios demonstrativos em vídeos, mas fecham o acesso prático atrás de contratos corporativos confidenciais. A curadoria optou por restringir a seleção a consórcios acadêmicos abertos consolidados, como o cBioPortal e o Open Targets, assegurando reproducibilidade sem custos.

No domínio de IA aplicada à própria IA (ai4ai), a barreira primordial foi a natureza do ecossistema de engenharia: pesquisadores de busca de arquitetura neural (NAS), geração sintética e compiladores de hardware operam primariamente via terminais Bash, notebooks locais e arquivos de configuração YAML. Diversas bibliotecas consagradas foram avaliadas, mas foram sumariamente desclassificadas da coleção de ferramentas por não possuírem interface gráfica utilizável no navegador sem instalação prévia, mantendo-se apenas o Netron, o Synthetic Data Generator da Argilla e o portal do Open LLM Leaderboard.

### **Mapeamento e Justificativas de Seleção por Domínio Científico**

#### **Biologia Molecular e Dobramento Macromolecular (biology)**

O campo da biologia estrutural consolidou-se em torno de modelos de linguagem biológica e redes de dobramento preditivo1. A seleção priorizou a interoperabilidade entre anotações primárias e coordenadas tridimensionais atômicas.

Em notícias, a *Nature Biotechnology* foi selecionada pelo seu rigor na cobertura de edição genética e síntese biomolecular, balanceada pela perspectiva teórica da *Quanta Magazine* e pelo canal primário do *EMBL News*. A *Revista Pesquisa FAPESP* foi incluída para garantir cobertura de alta qualidade das iniciativas genômicas latino-americanas em língua portuguesa.

Na categoria de links, a base canônica *AlphaFold DB* viabiliza a inspeção de mais de 200 milhões de predições3, complementada pelo repositório primário *RCSB Protein Data Bank* e pelo monitor filodinâmico em tempo real *Nextstrain*.

Para as ferramentas, o *Foldseek Search Server* superou serviços legados como o Dali e o TM-align webserver clássico ao viabilizar consultas em milissegundos sobre milhões de estruturas através da representação do alfabeto 3Di4. O *ESMFold Space* garantiu presença por prever a estrutura atômica a partir da sequência primária sem a necessidade de alinhamento múltiplo externo (MSA)2, e o *ColabFold* foi escolhido por permitir o dobramento rápido de complexos multiméricos em hardware de consumo7.

Nos repositórios, a implementação oficial de inferência do *google-deepmind/alphafold* (licença Apache-2.0)8 ancora o domínio, acompanhada da implementação em C++ do *steineggerlab/foldseek*5, do ecossistema *facebookresearch/esm*9 e do *sokrypton/ColabFold*7.

#### **Astronomia, Astrofísica e Dados Orbitais (astronomy)**

A astronomia apoia-se em grandes volumes de dados abertos mantidos por observatórios orbitais e terrestres, onde o principal gargalo técnico consiste na calibração de imagens e no reconhecimento de coordenadas celestes.

Em notícias, o portal *Sky & Telescope* fornece análises observacionais técnicas para astrônomos experientes, o *Phys.org* cobre a cadência diária de artigos acadêmicos, enquanto a sala de imprensa do *NASA JPL* e os lançamentos do *European Southern Observatory (ESO)* cobrem a comunicação primária de telescópios espaciais e interferômetros no solo chileno. O *Olhar Digital* supre a cobertura diária em língua portuguesa.

Na coleção de links, o *SIMBAD* destaca-se como a autoridade bibliográfica e dinâmica sobre milhões de fontes astronômicas10, acompanhado pelo atlas WebGL *Aladin Lite*, pelas trajetórias dinâmicas do *NASA Eyes on the Solar System* e pelas tabelas estatísticas do *NASA Exoplanet Archive*.

Em ferramentas, o *Astrometry.net Web Plate Solver* foi o destaque absoluto ao realizar o alinhamento geométrico cego (plate solving) de fotografias astronômicas diretamente no navegador sem exigir qualquer cadastro10. A plataforma *ESASky* desempatou com facilidade frente a atlas estáticos ao unificar missões espaciais e filtros de múltiplos comprimentos de onda, enquanto o tutorial hospedado do *Lightkurve* viabiliza a extração interativa de trânsitos exoplanetários a partir de curvas fotométricas brutas do telescópio Kepler e TESS.

Nos repositórios, a biblioteca *astropy/astropy* (BSD-3-Clause) é o alicerce insubstituível do domínio astronômico sob governança do NumFOCUS13, ladeada pelo pipeline científico oficial *spacetelescope/jwst*, pelo módulo *keplergo/lightkurve* e pelo código-fonte original em C do *dstndstn/astrometry.net*15.

#### **Medicina Translacional e Oncologia de Precisão (medicine)**

A curadoria em medicina priorizou plataformas orientadas à oncologia genômica e ao cruzamento de alvos terapêuticos com dados clínicos reais.

Em notícias, o *STAT News* foi mantido na coleção pelo seu jornalismo aprofundado em ensaios farmacológicos e regulação na FDA, registrando-se a sua cota mensal de acesso livre. O portal *Medical Xpress* e a sala de imprensa dos *NIH* garantem a divulgação ampla de estudos pré-clínicos e comunicados governamentais. A *Agência Fiocruz de Notícias* ancora o domínio em língua portuguesa com pesquisas clínicas de vacinas e vigilância em saúde pública.

Nas ligações úteis, o *cBioPortal* e o *Open Targets Platform* conectam variantes genômicas de pacientes a bancos de fármacos, complementados pelo registro canônico global *ClinicalTrials.gov* e pelo repositório unificado *NCI Genomic Data Commons*.

Em ferramentas, o *Open Targets Target Explorer* permite inspecionar evidências genéticas e fenotípicas de qualquer patologia sem autenticação prévia, superando catálogos puramente textuais. O *cBioPortal Patient OncoPrint Viewer* oferece visualização multidimensional instantânea de coortes oncológicas, e o tutorial hospedado do *Therapeutics Data Commons (TDC)* fornece uma interface pronta para testes preditivos de toxicidade ADMET e afinidade molecular.

Nos repositórios, a infraestrutura unificada do *mims-harvard/TDC* (licença MIT) padronizou benchmarks para inteligência artificial médica, sustentada pelo modelo generativo biomédico *microsoft/BioGPT* e pelo código-fonte aberto do *cBioPortal/cbioportal* (licença AGPL-3.0).

#### **Química Computacional e Planejamento de Síntese (chemistry)**

A área de química exigiu um redirecionamento curatorial após o colapso de plataformas públicas corporativas, estabelecendo o protagonismo de ferramentas acadêmicas soberanas mantidas pelo MIT e consórcios abertos de quimioinformática.

Em notícias, a revista *Chemistry World* e o periódico *Chemical & Engineering News (C\&EN)* cobrem as vertentes de pesquisa acadêmica e aplicações industriais, balanceados pelo noticiário do *ScienceDaily \- Materials Science* e pelas divulgações do *MIT News \- Chemistry*. A *Sociedade Brasileira de Química (SBQ)* fornece os registros primários de avanços da comunidade química brasileira.

Nas ligações úteis, o *Materials Project Explorer* e o *PubChem* consolidam as maiores fontes mundiais de propriedades calculadas e bioatividade molecular, complementados pelo ambiente de modelagem *MolView* e pelo repositório quântico *NOMAD*.

Nas ferramentas, o *ASKCOS* do MIT firmou-se como o único ambiente público e funcional de retrossíntese orgânica com inteligência artificial operando diretamente no navegador sem cobrança de taxas17. O *MolView* foi mantido por sua agilidade em otimizar esboços 2D em malhas 3D por mecânica molecular em milissegundos sem registro prévio, e o tutorial hospedado do *DeepChem* viabiliza a execução de classificadores moleculares multitarefa em redes neurais em grafos20.

Nos repositórios, o *rdkit/rdkit* (licença BSD-3-Clause) constitui a espinha dorsal indispensável de qualquer operação quimioinformática moderna, complementado pela suíte de aprendizado profundo *deepchem/deepchem* (licença MIT)20, pelo código de microsserviços do *ASKCOS/ASKCOS*18 e pela biblioteca de análise de redes cristalinas *materialsproject/pymatgen*.

#### **Computação Quântica e Matéria Condensada (quantum)**

A complexidade matemática da computação quântica exige instrumentos visuais que permitam correlacionar portas lógicas a esferas de Bloch e operadores matriciais sem a fricção de linhas de comando locais.

Em notícias, a *Quanta Magazine* oferece aprofundamento analítico sobre códigos corretores de erros quânticos e física teórica, enquanto o *The Quantum Insider* rastreia a evolução das empresas fabricantes de processadores NISQ e de qubits lógicos. O blog oficial da *IBM Quantum* reporta atualizações diretas de arquitetura de transmon, e a *Sociedade Brasileira de Física (SBF)* cobre pesquisas em física de baixas temperaturas no Brasil.

Em links, o portal educativo *IBM Quantum Learning* fornece módulos canônicos de formação, enquanto o *Quirk* viabiliza a experimentação visual direta de estados entrelaçados. O portal *PennyLane Demos* e o clássico *Quantum Algorithm Zoo* servem como compêndios fundamentais de algoritmos quânticos e suas classes de complexidade assintótica.

Em ferramentas, o *Quirk Web Quantum Simulator* foi avaliado como a solução de maior impacto prático: uma interface client-side pura e leve desenvolvida por Craig Gidney que calcula probabilidades e vetores de estado em tempo real sem solicitar login e sem latência de rede. O *IBM Quantum Composer* garantiu o segundo posto ao oferecer edição visual em pentagrama com conversão para OpenQASM mediante login gratuito simples, e a demonstração hospedada do *PennyLane* ilustra a otimização variacional de circuitos no navegador via descida de gradiente.

Nos repositórios, o ecossistema líder *Qiskit/qiskit* (licença Apache-2.0)22 lidera as contagens de estrelas e commits contínuos em 2026, ladeado pelo framework de diferenciação quântica *PennyLaneAI/pennylane*, pelo núcleo *quantumlib/Cirq* do Google e pelo compilador de alto desempenho voltado à correção de erros *microsoft/qsharp*.

#### **IA para Otimização de Hardware e Dados Sintéticos (ai4ai)**

O domínio de AI4AI explora modelos que refinam, geram e aceleram outros sistemas de inteligência artificial, compreendendo desde a automação de design eletrônico físico de semicondutores até a síntese de dados sintéticos para alinhamento de grandes modelos de linguagem.

Em notícias, a publicação independente *The Gradient* e a revista *MIT Technology Review* fornecem análises sem concessões sobre custos de escala, gargalos de memória e impactos socioeconômicos. O blog institucional do *Google DeepMind* destaca os avanços primários na criação de aceleradores lógicos (como o projeto AlphaChip) e modelos matemáticos formais, e a seção de ciência do *Manual da IA / Meio Bit* cobre os avanços práticos em português.

Nas ligações úteis, o *Hugging Face Open LLM Leaderboard* estabeleceu o padrão de auditoria comparativa entre arquiteturas abertas, o catálogo *Papers with Code \- ML Systems* mapeia o estado da arte em compiladores e quantização, o arquivo *Distill.pub* preserva as melhores visualizações conceituais de tensores da literatura, e a documentação do compilador *Triton* ensina o desenvolvimento de kernels de alta velocidade para aceleradores sem abstrações fechadas em CUDA.

Nas ferramentas, o *Netron Neural Network Visualizer* foi escolhido pela excelência operacional de rodar inteiramente no cliente via JavaScript: permite inspecionar grafos de pesos, nós e tensores de qualquer arquivo de modelo (.onnx, .pt, .tflite) sem enviar dados para a nuvem e sem cadastro. O *Synthetic Data Generator* da Argilla fornece uma interface gráfica hospedada em Hugging Face Space para desenhar conjuntos de dados com realimentação por IA (RLAIF)23, e o portal interativo do *Open LLM Leaderboard 2* viabiliza a filtragem multidimensional e análise estatística de alinhamento de milhares de modelos abertos.

Nos repositórios, o projeto *The-OpenROAD-Project/OpenROAD* (licença BSD-3-Clause) é o núcleo do domínio ao oferecer um pipeline autônomo completo para projeto de semicondutores da descrição lógica RTL até as máscaras de fundição GDSII em 24 horas24. A infraestrutura é complementada pelo *argilla-io/distilabel* (Apache-2.0)27, pelo motor de aceleração de inferência com paginação de atenção *vllm-project/vllm*, e pelos benchmarks padronizados de busca de arquitetura neural do *D-X-Y/AutoDL-Projects*.

### **Auditoria de Ferramentas Rejeitadas e Reclassificações**

O compromisso de proteger o usuário contra links mortos, ferramentas pagas com publicidade enganosa e pacotes sem interface gráfica resultou no descarte sistemático de dezenas de serviços analisados.

&nbsp;

&nbsp;

&nbsp;

┌───────────────────────────────────────┬────────────┬────────────────────────────────────────────────────────┐  
│ Ferramenta / Plataforma Candidata     │ Domínio    │ Causa Primária de Rejeição Técnica / Operacional       │  
├───────────────────────────────────────┼────────────┼────────────────────────────────────────────────────────┤  
│ Cradle Bio                            │ biology    │ Falso gratuito: exige triagem com consultor de vendas. │  
│ SpaceEngine                           │ astronomy  │ Ausência de interface web: executável comercial pago.  │  
│ Insilico Medicine PandaOmics          │ medicine   │ Acesso restrito a licenças institucionais sob NDA.     │  
│ IBM RXN for Chemistry Hosted          │ chemistry  │ Desativação oficial de servidores (End of Service).    │  
│ Rigetti Quantum Cloud Services (QCS)  │ quantum    │ Encerramento de camada gratuita direta na nuvem.       │  
│ Google Cloud Vertex AI NAS            │ ai4ai      │ Exigência mandatória de cartão de crédito no cadastro. │  
│ AutoKeras                             │ ai4ai      │ Sem interface web: biblioteca puramente de terminal.   │  
│ ChemAxon Marvin Live                  │ chemistry  │ Camada trial condicionada a validação corporativa.     │  
└───────────────────────────────────────┴────────────┴────────────────────────────────────────────────────────┘

A plataforma corporativa **IBM RXN for Chemistry** (rxn.app.accelerate.science/rxn/) configurou a rejeição mais crítica do domínio de química29. Durante anos, o ambiente operou como a principal referência pública para previsão de reações orgânicas via Molecular Transformer. No entanto, o serviço hospedado teve sua desativação oficial (End of Service) formalmente agendada para 28 de outubro de 202629. Durante os testes empíricos de validação, as tentativas de submissão de retrossíntese retornaram intermitentemente falhas HTTP 40130 e encerramento de nós de processamento. A inclusão de um serviço em processo ativo de desligamento destruiria a confiabilidade de makeaibetter.com, o que motivou a sua substituição definitiva pelo **ASKCOS** do MIT17.

Outro caso relevante envolveu o **AutoKeras**. Inicialmente considerado pela ampla citação na literatura como ferramenta acessível de AutoML, o projeto foi rejeitado na coleção de ferramentas porque opera unicamente como biblioteca em Python sem interface gráfica utilizável no navegador. Ele pertence formalmente à categoria de repositórios, preservando a integridade da seção tools como uma coleção exclusiva de ferramentas web prontas para clique imediato.

### **Mapeamento de Repositórios Estratégicos sem Demonstração Web**

Determinadas bibliotecas e pipelines representam o estado da arte de seus respectivos campos científicos, mas impõem uma barreira expressiva de acessibilidade: não mantêm nenhuma demonstração gráfica funcional na web (nem mesmo um Space no Hugging Face ou um notebook oficial no Google Colab que funcione com um clique). Esses repositórios constituem candidatos preferenciais para o desenvolvimento de demonstrações comunitárias abertas por parte da nossa equipe.

O projeto The-OpenROAD-Project/OpenROAD (ai4ai) é a maior referência em automação física de circuitos integrados com IA24. No entanto, sua compilação exige dezenas de gigabytes de bibliotecas de semicondutores (PDKs) e ferramentas de compilação em C++, impossibilitando que um leitor técnico visualize o roteamento automático de transistores sem semanas de dedicação em infraestrutura. Uma demonstração interativa em WebAssembly ou WebGL renderizando uma síntese RTL-to-GDSII simplificada democratizaria o interesse pela microeletrônica aberta.

O repositório spacetelescope/jwst (astronomy) contém o pipeline oficial de redução fotométrica do Telescópio Espacial James Webb. A ausência de um visualizador web simples impede que entusiastas inspecionem arquivos brutos no formato FITS e apliquem máscaras de ruído e calibração de instrumentos sem instalar o ecossistema Python localmente.

A biblioteca materialsproject/pymatgen (chemistry) é o motor de manipulação cristalográfica do Materials Project. Ela carece de um laboratório gráfico leve que permita desenhar células unitárias de difração de raios-X e testar substituições de ligantes no navegador, forçando os usuários a interagir exclusivamente via scripts de linha de comando.

O modelo microsoft/BioGPT (medicine) foi treinado sobre milhões de artigos biomédicos, mas a Microsoft não fornece um endpoint público ou demonstração oficial aberta. A criação de um Hugging Face Space comunitário focado em mineração textual de interações medicamentosas preencheria uma lacuna valiosa para profissionais da área de saúde.

O framework quantumlib/Cirq (quantum) do Google lidera pesquisas em processadores quânticos de escala intermediária ruidosa (NISQ). Diferente do Qiskit, que dispõe do IBM Quantum Composer, o Cirq não possui um editor gráfico de circuitos integrado, limitando a visualização dos algoritmos a impressões de texto ASCII em terminais locais.

### **Assimetrias Linguísticas e Carência de Recursos em Língua Portuguesa**

O processo de curadoria evidenciou uma disparidade linguística acentuada entre o ecossistema de dados anglófono e as publicações em português. Enquanto plataformas em inglês contam com financiamento contínuo de agências de fomento e grandes empresas de tecnologia, o leitor de língua portuguesa depara-se com um vácuo de recursos técnicos com nível de profundidade intermediário.

Nos domínios de **computação quântica** e **IA aplicada à própria IA (ai4ai)**, a ausência de publicações analíticas regulares em português é quase absoluta. As coberturas existentes em portais generalistas limitam-se a traduções literais de press releases corporativos sobre lançamentos comerciais, sem qualquer dissecação do funcionamento de compiladores quânticos, arquitetura de correção de erro de superfície ou roteamento de chips via redes de reforço. O leitor que depende exclusivamente do idioma português fica completamente excluído das discussões metodológicas de ponta.

No segmento de **ferramentas interativas e bancos de dados**, a lacuna é total em todos os seis domínios: não existe um único servidor de dobramento proteico, motor de resolução astrométrica de fotografias, plataforma de retrossíntese orgânica ou visualizador de grafos neurais com interface ou documentação nativa em língua portuguesa. O acesso à experimentação científica aberta exige obrigatoriamente a familiaridade com termos técnicos em inglês, o que configura um obstáculo significativo à democratização da computação científica em países lusófonos.

As únicas exceções estruturadas no campo editorial foram encontradas na **Revista Pesquisa FAPESP**, na **Agência Fiocruz de Notícias** e nos boletins primários das Sociedades Brasileiras de Química e Física (SBQ e SBF), veículos que mantêm excelência jornalística e rigor acadêmico, justificando plenamente sua inclusão no acervo.

### **Matriz de Risco de Validade, Degradação e Obsolescência Técnica**

A utilidade de um catálogo computacional depende de sua resiliência temporal. Para assegurar que o portal makeaibetter.com não exiba links quebrados ou ferramentas inacessíveis em um horizonte de doze meses, identificam-se quatro riscos operacionais prioritários:

O primeiro risco envolve o **estrangulamento de recursos computacionais gratuitos em plataformas centralizadas (Google Colab e Hugging Face Spaces)**. Ferramentas como o *ESMFold Space*, o *Argilla Synthetic Data Generator* e o notebook *ColabFold* dependem de instâncias de GPU (NVIDIA T4 e A10G) cedidas gratuitamente pelas plataformas mantenedoras. O aumento constante do custo de inferência e a pressão financeira por rentabilização criam a probabilidade iminente de que esses ambientes introduzam tempos de espera prolongados em fila, limitações severas de comprimento de sequência ou transição para camadas pagas obrigatórias (como Colab Pro ou Hugging Face PRO).

O segundo fator crítico reside no **fechamento em cadeia de APIs e dependências acadêmicas centralizadas**. A migração forçada de usuários decorrente do desligamento da nuvem do IBM RXN for Chemistry sobrecarregará o servidor público do *ASKCOS* no MIT17. Caso o consórcio universitário responsável não receba incrementos de custeio para absorver a nova demanda global de tráfego, o sistema poderá ser forçado a restringir o acesso a endereços de IP cadastrados em universidades ou adotar limites rígidos de processamento por minuto.

O terceiro vetor de obsolescência é a **degradação de dependências em repositórios científicos com manutenção estagnada**. Ferramentas fundamentais que dependem de bibliotecas numéricas em rápida evolução correm risco iminente de quebra operacional. Um caso evidente é o repositório do *AlphaFold v2*, cujos scripts de inferência mantêm amarras com versões legadas de JAX, Haiku e OpenMM31. Atualizações futuras em drivers de vídeo da NVIDIA ou modificações em contêineres Docker básicos do Linux podem inviabilizar a execução direta do código sem intervenções manuais de compilação.

O quarto risco provém da **pressão de monetização por paywalls dinâmicos em canais especializados de notícias**. Publicações como o *STAT News* e a *MIT Technology Review* têm reduzido sistematicamente a quantidade de artigos disponíveis no modelo de cota gratuita mensal. Existe a possibilidade real de que, no período de doze meses, esses portais eliminem o acesso livre residual, convertendo-se em sistemas de acesso restrito (hard paywall) que exigirão a substituição de suas referências no catálogo público por canais estritamente abertos.

A governança contínua de plataformas de software e recursos científicos exige a transferência deliberada de foco: serviços que dependem de concessões de nuvem corporativa tendem à efemeridade comercial, enquanto ambientes baseados em execução local cliente via JavaScript, WebGL e repositórios padronizados com licenças jurídicas permissivas garantem a continuidade da ciência aberta e a soberania do pesquisador independente.

#### **Referências citadas**

> 1. ESMFold2 Protein Structure Prediction \- Biohub Platform, [https://biohub.ai/models/esmfold2](https://biohub.ai/models/esmfold2)  
> 2. ESM \- Hugging Face, [https://huggingface.co/docs/transformers/model\_doc/esm](https://huggingface.co/docs/transformers/model_doc/esm)  
> 3. LiteFold/ESMAtlas · Datasets at Hugging Face, [https://huggingface.co/datasets/LiteFold/ESMAtlas](https://huggingface.co/datasets/LiteFold/ESMAtlas)  
> 4. Foldseek Search Server, [https://search.foldseek.com/](https://search.foldseek.com/)  
> 5. Rapid and sensitive protein complex alignment with Foldseek, [https://pubmed.ncbi.nlm.nih.gov/39910251/](https://pubmed.ncbi.nlm.nih.gov/39910251/)  
> 6. Accelerate protein structure prediction with the ESMFold language, [https://aws.amazon.com/blogs/machine-learning/accelerate-protein-structure-prediction-with-the-esmfold-language-model-on-amazon-sagemaker/](https://aws.amazon.com/blogs/machine-learning/accelerate-protein-structure-prediction-with-the-esmfold-language-model-on-amazon-sagemaker/)  
> 7. Steinegger Lab Datasets \- Registry of Open Data on AWS, [https://registry.opendata.aws/steineggerlab/](https://registry.opendata.aws/steineggerlab/)  
> 8. Open source code for AlphaFold 2\. \- GitHub, [https://github.com/google-deepmind/alphafold](https://github.com/google-deepmind/alphafold)  
> 9. Evolutionary Scale Modeling (esm): Pretrained language ... \- GitHub, [https://github.com/facebookresearch/ESM](https://github.com/facebookresearch/ESM)  
> 10. How to identify deep-space objects in your astrophotos, [https://www.astronomy.com/observing/how-to-identify-deep-space-objects-in-your-astrophotos/](https://www.astronomy.com/observing/how-to-identify-deep-space-objects-in-your-astrophotos/)  
> 11. Nova.astrometry.net: API, [https://astrometry.net/doc/net/api.html](https://astrometry.net/doc/net/api.html)  
> 12. Use \- Astrometry.net, [https://astrometry.net/use.html](https://astrometry.net/use.html)  
> 13. Astropy \- Astronomy and astrophysics core library \- GitHub, [https://github.com/astropy/astropy](https://github.com/astropy/astropy)  
> 14. astropy \- PyPI, [https://pypi.org/project/astropy/](https://pypi.org/project/astropy/)  
> 15. How to use the astrometry.net plate solver with Ubuntu Linux, [https://g5555.neocities.org/astrometry](https://g5555.neocities.org/astrometry)  
> 16. Re: \[Astrometry\] How to upload a picture via python \- Google Groups, [https://groups.google.com/g/astrometry/c/yZHoaCwMBhk](https://groups.google.com/g/astrometry/c/yZHoaCwMBhk)  
> 17. Chemspace & ASKCOS: From Pathway to Purchase in One Place, [https://chem-space.com/news/chemspace-askcos](https://chem-space.com/news/chemspace-askcos)  
> 18. ASKCOS: An open-source, microservice-based web app for, [https://acs.digitellinc.com/p/s/askcos-an-open-source-microservice-based-web-app-for-automatic-and-interactive-synthesis-planning-601488](https://acs.digitellinc.com/p/s/askcos-an-open-source-microservice-based-web-app-for-automatic-and-interactive-synthesis-planning-601488)  
> 19. Overview \- Coley Research Group \- MIT, [https://coley.mit.edu/research](https://coley.mit.edu/research)  
> 20. deepchem/deepchem: Democratizing Deep-Learning for ... \- GitHub, [https://github.com/deepchem/deepchem](https://github.com/deepchem/deepchem)  
> 21. ASKCOS: an open source software suite for synthesis planning \- arXiv, [https://arxiv.org/html/2501.01835v1](https://arxiv.org/html/2501.01835v1)  
> 22. qiskit/CONTRIBUTING.md at main \- GitHub, [https://github.com/Qiskit/qiskit/blob/main/CONTRIBUTING.md](https://github.com/Qiskit/qiskit/blob/main/CONTRIBUTING.md)  
> 23. Hugging Face launches the Synthetic Data Generator \- a UI to Build, [https://www.reddit.com/r/LocalLLaMA/comments/1hflhu4/hugging\_face\_launches\_the\_synthetic\_data/](https://www.reddit.com/r/LocalLLaMA/comments/1hflhu4/hugging_face_launches_the_synthetic_data/)  
> 24. OpenROAD \- GitHub, [https://github.com/The-OpenROAD-Project/OpenROAD](https://github.com/The-OpenROAD-Project/OpenROAD)  
> 25. OpenROAD-flow \- GitHub, [https://github.com/the-openroad-project/openroad-flow-scripts](https://github.com/the-openroad-project/openroad-flow-scripts)  
> 26. Issues · The-OpenROAD-Project/OpenROAD \- GitHub, [https://github.com/The-OpenROAD-Project/OpenROAD/issues](https://github.com/The-OpenROAD-Project/OpenROAD/issues)  
> 27. Distilabel is a framework for synthetic data and AI feedback ... \- GitHub, [https://github.com/argilla-io/distilabel](https://github.com/argilla-io/distilabel)  
> 28. \[Add\] distilabel (argilla-io/distilabel) \#456 \- GitHub, [https://github.com/PyTorchKR/oss-landscape/issues/456](https://github.com/PyTorchKR/oss-landscape/issues/456)  
> 29. IBM RXN for Chemistry, [https://rxn.app.accelerate.science/rxn/](https://rxn.app.accelerate.science/rxn/)  
> 30. IBM RXN for Chemistry, [https://rxn.res.ibm.com/rxn/public/retrosynthesis/62e67a98efbb8100014344ea](https://rxn.res.ibm.com/rxn/public/retrosynthesis/62e67a98efbb8100014344ea)  
> 31. Activity · google-deepmind/alphafold \- GitHub, [https://github.com/google-deepmind/alphafold/activity](https://github.com/google-deepmind/alphafold/activity)  
> 32. Releases · google-deepmind/alphafold \- GitHub, [https://github.com/google-deepmind/alphafold/releases](https://github.com/google-deepmind/alphafold/releases)  
> 33. Issues · google-deepmind/alphafold \- GitHub, [https://github.com/google-deepmind/alphafold/issues](https://github.com/google-deepmind/alphafold/issues)