# Documento de Escopo: "AI for Science" — A IA como Motor de Descoberta Científica
**Iniciativa Make AI Better — Setembro de 2026**
*Referência Técnica: `research/ai_for_science_scope.md`*

---

## 1. Visão Geral e Objetivo

### 1.1 Missão
Criar um hub imersivo, interativo e educacional dentro da plataforma **Make AI Better** dedicado a documentar e demonstrar visualmente como a inteligência artificial está revolucionando e acelerando 6 grandes domínios da ciência contemporânea:
1. **Biologia Molecular & Genômica** (AlphaFold 3, AlphaGenome, Evo 2)
2. **Astronomia & Astrofísica** (Zoobot, dados do JWST e Vera Rubin, detecção de ondas gravitacionais)
3. **Medicina & Descoberta Farmacêutica** (Agentes Co-Scientist, oncologia de precisão, redução de fases clínicas)
4. **Química & Ciência dos Materiais** (GNoME, baterias de estado sólido, laboratórios autônomos)
5. **Física Quântica** (Decodificadores neurais para o chip Willow, estados quânticos neurais)
6. **Aceleração da Própria IA** (AlphaChip, dados sintéticos com provas formais em Lean 4, auto-alinhamento)

---

## 2. Estrutura da Página e Experiência do Usuário (`science.html`)

### 2.1 Componentes Principais
* **Hero Científico**:
  - Título inspirador com gradiente biocibernético.
  - Métrica de destaque: *"De décadas para semanas: como modelos de raciocínio e redes neurais comprimem o tempo da descoberta científica"*.
* **Seletor de Domínios (Filtro Hexagonal / Tabs Interativas)**:
  - 6 abas principais com ícones vetorizados e temas cromáticos específicos:
    - 🧬 Biologia (Verde Esmeralda)
    - 🔭 Astronomia (Azul Cósmico / Violeta)
    - 💊 Medicina (Vermelho Coral / Rosa)
    - 🧪 Química & Materiais (Âmbar / Laranja)
    - ⚛️ Física Quântica (Ciano Neon)
    - 🤖 IA para a Própria IA (Elétrico Magenta / Azul)
* **Showcase Interativo com Micro-Simuladores por Domínio**:
  - *Biologia*: Visualizador de complexo proteico e mutação genética.
  - *Astronomia*: Simulador de curva de luz de trânsito de exoplaneta e detecção de sinal no ruído.
  - *Química*: Explorador de cristais GNoME com previsão de estabilidade termodinâmica.
  - *Física Quântica*: Decodificador de ruído em tempo real de qubits.
  - *IA para IA*: Simulador de floorplanning de chip com aprendizado por reforço (AlphaChip).
* **Galeria de Casos Reais e Papers Pioneiros**:
  - Cartões detalhados com sumário leigo e sumário técnico aprofundado, instituições envolvidas (Google DeepMind, Stanford, CERN, NASA, MIT) e links para os papers originais.
* **Barra de Navegação Unificada**:
  - Transição contínua entre a Home (`index.html`), a Linha do Tempo da Computação (`history.html`) e o Hub de Ciência (`science.html`).

---

## 3. Especificação Técnica e Responsividade

* **Estilo & CSS**: `styles/science.css` integrando com o design system global (Dark Mode, Glassmorphism, Neon Accents, Typography Space Grotesk / Inter).
* **Lógica & Animações**: `scripts/science.js` com suporte a `motion.dev` para transições suaves entre abas, renderização reativa e cálculos interativos nos micro-simuladores.
* **Internacionalização**: 100% bilíngue (Português / Inglês) com persistência em `localStorage`.
* **SEO e Metatags**: Otimizado para indexação com dados estruturados sobre IA na Ciência.

---

## 4. Cronograma e Entregáveis

1. **Pesquisa e Escopo** (Concluído: `ai_for_science_research.md` e `ai_for_science_scope.md`).
2. **Desenvolvimento do Hub `science.html`** integrado com `styles/science.css` e `scripts/science.js`.
3. **Atualização da Navegação Geral** no `index.html` e `history.html`.
4. **Validação, Testes e Deploy** no repositório GitHub e domínio oficial `makeaibetter.com`.
