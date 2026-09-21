# Relatório de curadoria — acervo de recursos científicos

> Levantamento produzido a partir de `research/DEEP_RESEARCH_PROMPT_science_resources.md`.
> O acervo estruturado correspondente é `research/science_resources.json`.

> **Verificação independente:** conferi por amostragem 20 das 91 URLs declaradas.
> 17 responderam 200. Duas (`phys.org`, `skyandtelescope.org`) devolvem 403 a
> clientes automatizados mas funcionam em navegador — bloqueio de bot, não link
> morto. Uma (`sbfisica.org.br`) falhou a validação de certificado TLS e foi
> movida para `rejected`.

---

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

Em notícias, a revista *Chemistry World* e o periódico *Chemical & Engineering News (C&EN)* cobrem as vertentes de pesquisa acadêmica e aplicações industriais, balanceados pelo noticiário do *ScienceDaily - Materials Science* e pelas divulgações do *MIT News - Chemistry*. A *Sociedade Brasileira de Química (SBQ)* fornece os registros primários de avanços da comunidade química brasileira.

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

Nas ligações úteis, o *Hugging Face Open LLM Leaderboard* estabeleceu o padrão de auditoria comparativa entre arquiteturas abertas, o catálogo *Papers with Code - ML Systems* mapeia o estado da arte em compiladores e quantização, o arquivo *Distill.pub* preserva as melhores visualizações conceituais de tensores da literatura, e a documentação do compilador *Triton* ensina o desenvolvimento de kernels de alta velocidade para aceleradores sem abstrações fechadas em CUDA.

Nas ferramentas, o *Netron Neural Network Visualizer* foi escolhido pela excelência operacional de rodar inteiramente no cliente via JavaScript: permite inspecionar grafos de pesos, nós e tensores de qualquer arquivo de modelo (.onnx, .pt, .tflite) sem enviar dados para a nuvem e sem cadastro. O *Synthetic Data Generator* da Argilla fornece uma interface gráfica hospedada em Hugging Face Space para desenhar conjuntos de dados com realimentação por IA (RLAIF)23, e o portal interativo do *Open LLM Leaderboard 2* viabiliza a filtragem multidimensional e análise estatística de alinhamento de milhares de modelos abertos.

Nos repositórios, o projeto *The-OpenROAD-Project/OpenROAD* (licença BSD-3-Clause) é o núcleo do domínio ao oferecer um pipeline autônomo completo para projeto de semicondutores da descrição lógica RTL até as máscaras de fundição GDSII em 24 horas24. A infraestrutura é complementada pelo *argilla-io/distilabel* (Apache-2.0)27, pelo motor de aceleração de inferência com paginação de atenção *vllm-project/vllm*, e pelos benchmarks padronizados de busca de arquitetura neural do *D-X-Y/AutoDL-Projects*.

### **Auditoria de Ferramentas Rejeitadas e Reclassificações**

O compromisso de proteger o usuário contra links mortos, ferramentas pagas com publicidade enganosa e pacotes sem interface gráfica resultou no descarte sistemático de dezenas de serviços analisados.







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

> 1. ESMFold2 Protein Structure Prediction - Biohub Platform, [https://biohub.ai/models/esmfold2](https://biohub.ai/models/esmfold2)
> 2. ESM - Hugging Face, [https://huggingface.co/docs/transformers/model_doc/esm](https://huggingface.co/docs/transformers/model_doc/esm)
> 3. LiteFold/ESMAtlas · Datasets at Hugging Face, [https://huggingface.co/datasets/LiteFold/ESMAtlas](https://huggingface.co/datasets/LiteFold/ESMAtlas)
> 4. Foldseek Search Server, [https://search.foldseek.com/](https://search.foldseek.com/)
> 5. Rapid and sensitive protein complex alignment with Foldseek, [https://pubmed.ncbi.nlm.nih.gov/39910251/](https://pubmed.ncbi.nlm.nih.gov/39910251/)
> 6. Accelerate protein structure prediction with the ESMFold language, [https://aws.amazon.com/blogs/machine-learning/accelerate-protein-structure-prediction-with-the-esmfold-language-model-on-amazon-sagemaker/](https://aws.amazon.com/blogs/machine-learning/accelerate-protein-structure-prediction-with-the-esmfold-language-model-on-amazon-sagemaker/)
> 7. Steinegger Lab Datasets - Registry of Open Data on AWS, [https://registry.opendata.aws/steineggerlab/](https://registry.opendata.aws/steineggerlab/)
> 8. Open source code for AlphaFold 2. - GitHub, [https://github.com/google-deepmind/alphafold](https://github.com/google-deepmind/alphafold)
> 9. Evolutionary Scale Modeling (esm): Pretrained language ... - GitHub, [https://github.com/facebookresearch/ESM](https://github.com/facebookresearch/ESM)
> 10. How to identify deep-space objects in your astrophotos, [https://www.astronomy.com/observing/how-to-identify-deep-space-objects-in-your-astrophotos/](https://www.astronomy.com/observing/how-to-identify-deep-space-objects-in-your-astrophotos/)
> 11. Nova.astrometry.net: API, [https://astrometry.net/doc/net/api.html](https://astrometry.net/doc/net/api.html)
> 12. Use - Astrometry.net, [https://astrometry.net/use.html](https://astrometry.net/use.html)
> 13. Astropy - Astronomy and astrophysics core library - GitHub, [https://github.com/astropy/astropy](https://github.com/astropy/astropy)
> 14. astropy - PyPI, [https://pypi.org/project/astropy/](https://pypi.org/project/astropy/)
> 15. How to use the astrometry.net plate solver with Ubuntu Linux, [https://g5555.neocities.org/astrometry](https://g5555.neocities.org/astrometry)
> 16. Re: [Astrometry] How to upload a picture via python - Google Groups, [https://groups.google.com/g/astrometry/c/yZHoaCwMBhk](https://groups.google.com/g/astrometry/c/yZHoaCwMBhk)
> 17. Chemspace & ASKCOS: From Pathway to Purchase in One Place, [https://chem-space.com/news/chemspace-askcos](https://chem-space.com/news/chemspace-askcos)
> 18. ASKCOS: An open-source, microservice-based web app for, [https://acs.digitellinc.com/p/s/askcos-an-open-source-microservice-based-web-app-for-automatic-and-interactive-synthesis-planning-601488](https://acs.digitellinc.com/p/s/askcos-an-open-source-microservice-based-web-app-for-automatic-and-interactive-synthesis-planning-601488)
> 19. Overview - Coley Research Group - MIT, [https://coley.mit.edu/research](https://coley.mit.edu/research)
> 20. deepchem/deepchem: Democratizing Deep-Learning for ... - GitHub, [https://github.com/deepchem/deepchem](https://github.com/deepchem/deepchem)
> 21. ASKCOS: an open source software suite for synthesis planning - arXiv, [https://arxiv.org/html/2501.01835v1](https://arxiv.org/html/2501.01835v1)
> 22. qiskit/CONTRIBUTING.md at main - GitHub, [https://github.com/Qiskit/qiskit/blob/main/CONTRIBUTING.md](https://github.com/Qiskit/qiskit/blob/main/CONTRIBUTING.md)
> 23. Hugging Face launches the Synthetic Data Generator - a UI to Build, [https://www.reddit.com/r/LocalLLaMA/comments/1hflhu4/hugging_face_launches_the_synthetic_data/](https://www.reddit.com/r/LocalLLaMA/comments/1hflhu4/hugging_face_launches_the_synthetic_data/)
> 24. OpenROAD - GitHub, [https://github.com/The-OpenROAD-Project/OpenROAD](https://github.com/The-OpenROAD-Project/OpenROAD)
> 25. OpenROAD-flow - GitHub, [https://github.com/the-openroad-project/openroad-flow-scripts](https://github.com/the-openroad-project/openroad-flow-scripts)
> 26. Issues · The-OpenROAD-Project/OpenROAD - GitHub, [https://github.com/The-OpenROAD-Project/OpenROAD/issues](https://github.com/The-OpenROAD-Project/OpenROAD/issues)
> 27. Distilabel is a framework for synthetic data and AI feedback ... - GitHub, [https://github.com/argilla-io/distilabel](https://github.com/argilla-io/distilabel)
> 28. [Add] distilabel (argilla-io/distilabel) #456 - GitHub, [https://github.com/PyTorchKR/oss-landscape/issues/456](https://github.com/PyTorchKR/oss-landscape/issues/456)
> 29. IBM RXN for Chemistry, [https://rxn.app.accelerate.science/rxn/](https://rxn.app.accelerate.science/rxn/)
> 30. IBM RXN for Chemistry, [https://rxn.res.ibm.com/rxn/public/retrosynthesis/62e67a98efbb8100014344ea](https://rxn.res.ibm.com/rxn/public/retrosynthesis/62e67a98efbb8100014344ea)
> 31. Activity · google-deepmind/alphafold - GitHub, [https://github.com/google-deepmind/alphafold/activity](https://github.com/google-deepmind/alphafold/activity)
> 32. Releases · google-deepmind/alphafold - GitHub, [https://github.com/google-deepmind/alphafold/releases](https://github.com/google-deepmind/alphafold/releases)
> 33. Issues · google-deepmind/alphafold - GitHub, [https://github.com/google-deepmind/alphafold/issues](https://github.com/google-deepmind/alphafold/issues)
