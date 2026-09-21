# Documento de Escopo de Projeto: "A Epopeia da Computação" (Turing ao Willow & OpenAI)
**Iniciativa Make AI Better — Setembro de 2026**
*Referência Técnica: `research/history_of_computing_scope.md`*

---

## 1. Visão Geral e Objetivo do Projeto

### 1.1 Missão
Desenvolver uma experiência web interativa, visualmente impactante e cinemática dentro do ecossistema **Make AI Better**, utilizando a biblioteca de animação de alta performance **Motion (motion.dev)**.

A experiência transportará o usuário através de uma jornada imersiva que narra os **90 anos de evolução da computação**:
* Desde o modelo teórico da fita infinita de **Alan Turing (1936)** e a quebra do Enigma;
* Passando pela invenção do transistor, arquitetura Von Neumann, microprocessadores, a explosão da Web e o renascimento do Deep Learning;
* Culminando nos dois pináculos tecnológicos de **2024–2026**: a quebra da barreira de correção de erro quântico com o **Google Willow** e a transição para a era do raciocínio deliberado **System-2 (OpenAI o1, o3 e GPT-6 Astra)**.

---

## 2. Pilares Tecnológicos & Design System

### 2.1 Stack Tecnológico
* **Motion Engine**: `motion.dev` (Motion One / Vanilla JS Modern Animation Library) via CDN/ES Modules (`https://cdn.jsdelivr.net/npm/motion@latest/+esm`).
  - *Funcionalidades chave*: `animate()`, `timeline()`, `scroll()` para animações baseadas no scroll (*scroll-driven*), física de molas (*spring physics*) ultra-fluidas e orquestração de elementos SVG.
* **Core Web**: HTML5 Semântico, Vanilla CSS3 (Custom Properties HSL, Glassmorphism, CSS Grid & Flexbox) e JavaScript ES6+ modular.
* **Visual FX**: Canvas para renderização de partículas quânticas e conexões sinápticas neurais sincronizadas com a rolagem do usuário.
* **Áudio / Imersão (Opcional com toggle)**: Micro-sons sintetizados via Web Audio API (bips da máquina Enigma, clicks de relés eletromecânicos, zumbido quântico).

### 2.2 Estética Visual & Linguagem de Design
* **Paleta Evolutiva Dinâmica**: A atmosfera cromática do site evolui conforme o usuário avança no tempo:
  1. *Era 1 (Turing / Anos 30-40)*: Monocromático, papel perfurado, fósforo âmbar/verde clássico.
  2. *Era 2 & 3 (Transistores / Silício / 50-70)*: Azul cianeto profundo e cobre metálico de placas de circuito impresso.
  3. *Era 4 & 5 (PCs, Web & Deep Learning / 80-2016)*: Roxo elétrico, gradientes neon dos anos 90 e matriz de tensores GPU.
  4. *Era 6 & 7 (Quântico & System-2 / 2024-2026)*: Obsidian profundo com ciano holográfico, malhas quânticas cintilantes e anéis de raciocínio dinâmicos.

---

## 3. Estrutura Narrativa & Módulos da Experiência

A jornada é dividida em **7 Capítulos Cinemáticos**, cada um contendo narrativa explicativa, estatísticas históricas e um **componente interativo**:

### Capítulo 1: O Oráculo Matemático e a Fita Infinita (1936–1950)
* **Figuras Centrais**: Alan Turing, Alonzo Church, Tommy Flowers.
* **Narrativa**: O Entscheidungsproblem de David Hilbert; a concepção da Máquina Universal de Turing; a corrida contra o tempo em Bletchley Park com a *Bombe* e o *Colossus*; o manifesto de 1950 *"Podem as máquinas pensar?"*.
* **Widget Interativo com Motion**: *Simulador da Fita de Turing* — o usuário pode ver o cabeçote mecânico lendo/escrevendo símbolos binários e executando transições de estado animadas com física de mola.

### Capítulo 2: O Silício e o Programa Armazenado (1945–1960)
* **Figuras Centrais**: John von Neumann, John Bardeen, Walter Brattain, William Shockley, John McCarthy.
* **Narrativa**: O salto das válvulas mecânicas frágeis para a física do estado sólido com a invenção do transistor no Bell Labs (1947); a Arquitetura Von Neumann unificando dados e código; a histórica Conferência de Dartmouth (1956) batizando a Inteligência Artificial.
* **Widget Interativo com Motion**: *O Microscópio do Transistor* — controle deslizante mostrando o fluxo de elétrons em uma junção semicondutora p-n vs. uma válvula termiônica gigante.

### Capítulo 3: A Era dos Microchips e a Grande Rede (1960–1980)
* **Figuras Centrais**: Gordon Moore, Robert Noyce, Dennis Ritchie, Ken Thompson, Douglas Engelbart.
* **Narrativa**: A formulação da Lei de Moore; o Intel 4004 (1971) condensando uma CPU inteira em silício; o surgimento do UNIX, da linguagem C e do protocolo TCP/IP na ARPANET; a "Mãe de Todas as Demonstrações" de Engelbart revelando o mouse e hipertexto.
* **Widget Interativo com Motion**: *A Escala da Lei de Moore* — zoom infinito animado partindo dos 2.300 transistores do 4004 até os bilhões dos processadores modernos.

### Capítulo 4: A Democratização: PCs, a Teia Mundial e o Backprop (1980–1999)
* **Figuras Centrais**: Steve Jobs, Steve Wozniak, Tim Berners-Lee, Geoffrey Hinton.
* **Narrativa**: O computador sai dos laboratórios para a mesa de cada família (Macintosh, Windows); Tim Berners-Lee inventa a World Wide Web no CERN; Hinton, Rumelhart e Williams ressuscitam as redes neurais com o algoritmo de Retropropagação (*Backpropagation*).
* **Widget Interativo com Motion**: *Simulador de Backpropagation* — uma pequena rede neural animada ajustando pesos sinápticos com gradiente descendente em tempo real.

### Capítulo 5: O Triunfo da Força Bruta: CUDA, ImageNet e AlphaGo (2000–2016)
* **Figuras Centrais**: Jensen Huang, Alex Krizhevsky, Ilya Sutskever, Demis Hassabis.
* **Narrativa**: A virada do cálculo sequencial para o paralelismo massivo com placas de vídeo (GPUs NVIDIA CUDA); o ponto de inflexão da ImageNet em 2012 com a AlexNet; o AlphaGo derrotando Lee Sedol em 2016 combinando deep learning e busca Monte Carlo.
* **Widget Interativo com Motion**: *Matriz de Tensores em Paralelo* — visualização do cálculo matricial simultâneo de milhões de parâmetros em GPU.

### Capítulo 6: A Era dos Transformers e da Linguagem Generativa (2017–2024)
* **Figuras Centrais**: Ashish Vaswani, Noam Shazeer (equipe do Google Brain), Sam Altman, Dario Amodei.
* **Narrativa**: O paper revolucionário *"Attention Is All You Need"* eliminando recorrências e viabilizando o treino com todos os dados da internet pública; o surgimento da série GPT e o fenômeno global do ChatGPT; a transição para multimodalidade nativa.
* **Widget Interativo com Motion**: *O Mecanismo de Auto-Atenção (Self-Attention)* — conexões luminosas traçadas entre palavras de uma frase mostrando vetores de atenção dinâmicos.

### Capítulo 7: A Dupla Fronteira: O Salto Quântico (Willow) e a Razão Deliberada (OpenAI System-2) (2024–2026)
* **Figuras Centrais**: Equipe Google Quantum AI (Hartmut Neven / Julian Kelly), Equipe de Raciocínio OpenAI (o1, o3, Astra).
* **O Chip Quântico Google Willow (Dezembro/2024–2026)**:
  - 105 qubits supercondutores operando abaixo do limiar de erro (*below-threshold*).
  - Cálculo de amostragem em menos de 5 minutos que levaria 10 septilhões de anos ($10^{25}$) em supercomputadores clássicos.
  - Vantagem quântica comprovada com *Quantum Echoes*.
* **O Paradigma System-2 da OpenAI (2024–2026)**:
  - O fim do mito de que pre-training bruto resolveria tudo.
  - Alocação dinâmica de computação no tempo de inferência (*Test-Time Compute*).
  - Process Reward Models (PRMs) verificando passos intermediários, eliminando alucinações matemáticas e habilitando auto-correção autônoma.
* **Widget Interativo com Motion**:
  - *O Lattice do Willow*: Simulação da malha quântica de código de superfície mostrando como o aumento do entrelaçamento diminui os erros lógicos.
  - *O Pensador System-2*: Árvore de hipóteses animada onde o modelo testa caminhos lógicos, descarta ramos inválidos e alcança a resposta correta com verificação formal.

---

## 4. Recursos de Interface e Usabilidade

1. **Barra de Progresso Temporal (Timeline Scrubber)**:
   - Uma régua cronológica lateral/superior interativa com marcadores de ano (1936, 1947, 1971, 1984, 2012, 2017, 2024, 2026).
   - Permite saltar instantaneamente para qualquer era com transição suave controlada por `motion.dev`.
2. **Suporte Bilíngue Nativo (PT-BR / EN)**:
   - Alternância contínua sem recarregar a página.
3. **Modo Didático / Ficha Técnica (Deep Dive Modal)**:
   - Em cada marco, o usuário pode clicar em *"Ver Documento Histórico"* para ler trechos dos papers originais (Turing 1936, Von Neumann 1945, Moore 1965, Attention 2017, Willow 2024, OpenAI Reasoning 2024-2026).
4. **Integração Total com a Make AI Better**:
   - Conexão natural entre a história da computação e a missão atual da Make AI Better: garantir que o próximo capítulo dessa história seja seguro, rigoroso e aberto.

---

## 5. Plano de Entrega e Etapas de Desenvolvimento

| Fase | Entregável | Descrição |
| :--- | :--- | :--- |
| **Fase 1 (Atual)** | **Pesquisa & Escopo** | Levantamento histórico minucioso, especificações de arquitetura e aprovação do plano. |
| **Fase 2** | **Estrutura HTML & Design System da Timeline** | Criação da página `history.html` (ou integração direta) com tokens de design e layout das 7 eras. |
| **Fase 3** | **Integração do Motion (`motion.dev`)** | Implementação das animações baseadas em rolagem (`scroll`), revelação escalonada e física de mola. |
| **Fase 4** | **Simuladores Interativos** | Desenvolvimento dos widgets interativos (Fita de Turing, Matriz de Atenção, Lattice do Willow, Árvore System-2). |
| **Fase 5** | **Testes, Otimização 60 FPS & Deploy** | Verificação de performance em mobile/desktop, validação de acessibilidade e push para o repositório GitHub e domínio oficial. |

---
*Documento aprovado pela iniciativa de pesquisa Make AI Better para execução técnica.*
