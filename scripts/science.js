/**
 * MAKE AI BETTER — AI for Science Interactive Hub
 * Powered by Motion One (motion.dev)
 * Date: 2026-09-21
 */

import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
import { lineChart, barChart, dotPlot, stackedBarChart, dataTable, fmtCompact } from './lib/chart.js';
import { transitCurve, REFERENCE_PLANETS } from './lib/transit.js';


let currentLang = 'pt';
let activeDomainId = 'biology';

// --- Scientific Domains Database ---
const scienceDomains = {
  biology: {
    tag_pt: "GENÔMICA & BIOLOGIA MOLECULAR",
    tag_en: "GENOMICS & MOLECULAR BIOLOGY",
    headline_pt: "Decifrando o Código da Vida e Dobras Proteicas",
    headline_en: "Deciphering the Code of Life & Protein Folding",
    desc_pt: "Com o lançamento do AlphaFold 3 e do AlphaGenome em 2026 pela Google DeepMind, a biologia alcançou a capacidade de prever o impacto funcional de mutações em todo o genoma humano (3 bilhões de pares de bases) e desenhar enzimas sintéticas 'de novo'.",
    desc_en: "With the release of AlphaFold 3 and AlphaGenome in 2026 by Google DeepMind, biology gained the capability to predict the functional impact of non-coding mutations across 3 billion base pairs and design bespoke synthetic enzymes.",
    innovations_pt: [
      { title: "AlphaGenome (2026)", text: "Leitura genômica integral que identifica gatilhos de doenças raras em regiões não-codificantes." },
      { title: "Modelos de Fundação Evo 2", text: "Geração de DNA e RNA sintéticos para terapia gênica e captura de CO₂." },
      { title: "Interações Quaternárias", text: "Modelagem precisa de complexos proteína-DNA, proteína-RNA e ligantes terapêuticos." }
    ],
    innovations_en: [
      { title: "AlphaGenome (2026)", text: "End-to-end genomic reading identifying rare disease drivers in non-coding DNA." },
      { title: "Evo 2 Foundation Models", text: "Synthetic DNA and RNA generation tailored for gene therapy and carbon capture." },
      { title: "Quaternary Interactions", text: "Atomic-precision modeling of protein-DNA, protein-RNA, and ligand complexes." }
    ],
    sim_title_pt: "Simulador de Mutação Genômica (AlphaGenome)",
    sim_title_en: "Genomic Mutation Simulator (AlphaGenome)",
    sim_type: "biology"
  },
  astronomy: {
    tag_pt: "ASTRONOMIA & ASTROFÍSICA",
    tag_en: "ASTRONOMY & ASTROPHYSICS",
    headline_pt: "Mapeando o Cosmos nos Petabytes do JWST e Vera Rubin",
    headline_en: "Mapping the Cosmos in JWST & Vera Rubin Petabytes",
    desc_pt: "Os telescópios modernos produzem dezenas de terabytes por noite. Redes neurais como a família Zoobot analisam galáxias instantaneamente, enquanto modelos de IA aceleram simulações cosmológicas da Teia Cósmica em mais de 10.000x.",
    desc_en: "Modern observatories generate terabytes of data nightly. Deep learning models like Zoobot classify galaxy morphology instantaneously, while neural surrogates accelerate cosmic web simulations by over 10,000x.",
    innovations_pt: [
      { title: "Classificação Galáctica Automatizada", text: "Descoberta de dezenas de milhares de galáxias anelares e lentes gravitacionais raras." },
      { title: "Ondas Gravitacionais em Milissegundos", text: "Filtragem instantânea de ruído no LIGO/Virgo para alertas ópticos em tempo real." },
      { title: "Espectroscopia de Exoplanetas", text: "Identificação de bioassinaturas de vapor d'água e metano em zonas habitáveis." }
    ],
    innovations_en: [
      { title: "Automated Galaxy Classification", text: "Discovery of tens of thousands of ring galaxies and rare gravitational lenses." },
      { title: "Sub-Second Gravitational Waves", text: "Instant noise filtering at LIGO/Virgo triggering optical telescope alerts." },
      { title: "Exoplanet Spectroscopy", text: "Detection of atmospheric water vapor and methane biosignatures in habitable zones." }
    ],
    sim_title_pt: "Simulador de Trânsito de Exoplaneta (Curva de Luz)",
    sim_title_en: "Exoplanet Transit Simulator (Light Curve)",
    sim_type: "astronomy"
  },
  medicine: {
    tag_pt: "MEDICINA & DESCOBERTA FARMACÊUTICA",
    tag_en: "MEDICINE & DRUG DISCOVERY",
    headline_pt: "Fármacos em Semanas e Oncologia Sob Medida",
    headline_en: "Drugs in Weeks & Tailored Precision Oncology",
    desc_pt: "Agentes autônomos de pesquisa como Co-Scientist e Robin formulam hipóteses terapêuticas e desenham moléculas candidatas contra câncer e fibrose, reduzindo o tempo inicial de descoberta de anos para semanas.",
    desc_en: "Autonomous multi-agent research systems like Co-Scientist and Robin formulate hypotheses and synthesize drug candidates against cancer and fibrosis, compressing early research from years to weeks.",
    innovations_pt: [
      { title: "Agentes Autônomos de Bancada", text: "Co-Scientist identificando candidatos a fármacos com testes in-silico contínuos." },
      { title: "Oncologia Multimodal de Precisão", text: "Cruzamento de biópsia líquida, histopatologia e DNA do paciente para terapia personalizada." },
      { title: "Triagem ADMET Preditiva", text: "Previsão antecipada de toxicidade e absorção reduzindo custos de ensaios clínicos." }
    ],
    innovations_en: [
      { title: "Autonomous Research Agents", text: "Co-Scientist driving candidate identification with continuous in-silico feedback." },
      { title: "Multimodal Precision Oncology", text: "Fusing liquid biopsies, digital pathology, and genomic sequencing for personalized therapy." },
      { title: "Predictive ADMET Screening", text: "Early toxicity and absorption forecasts dramatically lowering clinical trial attrition." }
    ],
    sim_title_pt: "Afinidade de Ligação e Predição de Toxicidade",
    sim_title_en: "Binding Affinity & Toxicity Predictor",
    sim_type: "medicine"
  },
  chemistry: {
    tag_pt: "QUÍMICA & CIÊNCIA DOS MATERIAIS",
    tag_en: "CHEMISTRY & MATERIALS SCIENCE",
    headline_pt: "O Salto de 800 Anos do GNoME e Baterias Sólidas",
    headline_en: "GNoME's 800-Year Leap & Solid-State Batteries",
    desc_pt: "O modelo GNoME da Google DeepMind expandiu o catálogo de materiais estáveis conhecidos pela humanidade com 2,2 milhões de novas estruturas cristalinas, acelerando catalisadores de captura de carbono e baterias de estado sólido.",
    desc_en: "Google DeepMind's GNoME expanded the known stable materials catalog with 2.2 million new crystal structures, supercharging solid-state battery electrolytes and carbon capture catalysts.",
    innovations_pt: [
      { title: "2,2 Milhões de Novos Cristais", text: "Multiplicação por 10 dos materiais estáveis descobertos em toda a história humana." },
      { title: "Baterias Livres de Cobalto e Lítio", text: "Triagem computacional de eletrólitos com condução iônica recorde." },
      { title: "Laboratórios Autônomos (Self-Driving Labs)", text: "Robôs químicos físicos guiados por IA sintetizando amostras 24/7." }
    ],
    innovations_en: [
      { title: "2.2 Million New Crystals", text: "A 10x expansion of stable materials discovered across human history." },
      { title: "Cobalt-Free Battery Chemistries", text: "Screening solid electrolytes with ultra-high ionic conductivity." },
      { title: "Self-Driving Chemical Labs", text: "Robotic synthesis platforms operating 24/7 guided by generative AI." }
    ],
    sim_title_pt: "Triagem de Estabilidade de Cristal (GNoME Convex Hull)",
    sim_title_en: "Crystal Stability Screening (GNoME Convex Hull)",
    sim_type: "chemistry"
  },
  quantum: {
    tag_pt: "FÍSICA QUÂNTICA & SUPERCONDUTORES",
    tag_en: "QUANTUM PHYSICS & SUPERCONDUCTIVITY",
    headline_pt: "Decodificação Neural do Chip Willow e Estados Quânticos",
    headline_en: "Neural Decoding for Willow & Quantum Many-Body States",
    desc_pt: "A IA é o elo indispensável para a viabilização da computação quântica. Redes neurais em tempo real atuam como decodificadores de código de superfície no processador Willow, além de resolver a equação de Schrödinger para sistemas de muitos corpos.",
    desc_en: "AI is the essential bridge to fault-tolerant quantum computing. Real-time neural networks decode surface codes on processors like Willow, while Neural Quantum States solve many-body Schrödinger equations.",
    innovations_pt: [
      { title: "Decodificadores Neurais em Microssegundos", text: "Correção de erros de fase e bit-flip para estabilizar qubits supercondutores." },
      { title: "Neural Quantum States (NQS)", text: "Superação da barreira exponencial na modelagem de supercondutores de alta temperatura." },
      { title: "Modelos Quantitativos Largos (LQMs)", text: "Simulação de física atômica fundamental com redes fundamentadas em princípios físicos." }
    ],
    innovations_en: [
      { title: "Sub-Microsecond Neural Decoders", text: "Bit-flip and phase-flip error correction stabilizing superconducting qubits." },
      { title: "Neural Quantum States (NQS)", text: "Overcoming exponential barriers in high-temperature superconductor modeling." },
      { title: "Large Quantitative Models (LQMs)", text: "Simulating fundamental atomic physics with physics-informed neural networks." }
    ],
    sim_title_pt: "Decodificador de Ruído Quântico em Tempo Real",
    sim_title_en: "Real-Time Quantum Error Decoder",
    sim_type: "quantum"
  },
  ai4ai: {
    tag_pt: "IA PARA A PRÓPRIA IA (O CICLO RECURSIVO)",
    tag_en: "AI FOR AI (THE RECURSIVE CYCLE)",
    headline_pt: "AlphaChip, Dados Sintéticos em Lean 4 e Auto-Aprimoramento",
    headline_en: "AlphaChip, Lean 4 Synthetic Data & Self-Alignment",
    desc_pt: "A IA está acelerando o desenvolvimento de seus próprios sucessores. O AlphaChip desenha microarquiteturas de hardware em horas, enquanto modelos de raciocínio geram dados sintéticos formalmente provados em Lean 4.",
    desc_en: "AI is recursively accelerating the development of its own successors. AlphaChip designs superhuman hardware layouts in hours, while reasoning models produce Lean 4 formally verified synthetic training loops.",
    innovations_pt: [
      { title: "AlphaChip (Google DeepMind)", text: "Aprendizado por reforço projetando roteamento e eficiência térmica de TPUs em horas." },
      { title: "Geração de Dados Sintéticos Formais", text: "Código e provas matemáticas verificadas por compiladores, sem alucinação humana." },
      { title: "Agentes Red-Teamers Autônomos", text: "Auditoria contínua de alinhamento e mitigação de injeção de prompt." }
    ],
    innovations_en: [
      { title: "AlphaChip (Google DeepMind)", text: "Reinforcement learning optimizing TPU wirelength and thermal performance in hours." },
      { title: "Formal Synthetic Training Loops", text: "Compiler-verified code and Lean 4 mathematical proofs eliminating hallucinations." },
      { title: "Autonomous Red-Teaming Agents", text: "Continuous security audits, alignment verification, and prompt injection defense." }
    ],
    sim_title_pt: "Otimizador de Floorplanning de Chip (AlphaChip)",
    sim_title_en: "Chip Floorplanning Optimizer (AlphaChip)",
    sim_type: "ai4ai"
  }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTablist();
  renderMatrix();
  initLanguage();
  renderActiveDomain();
  initScrollReveal();
  animateScienceHero();
});

// --- Hero Animation ---
function animateScienceHero() {
  const els = [
    document.querySelector('.science-hero .hero-badge'),
    document.querySelector('.science-title'),
    document.querySelector('.science-lead'),
    document.querySelector('.science-stats-strip')
  ];
  els.forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    setTimeout(() => {
      animate(el, { opacity: [0, 1], y: [24, 0] },
        { duration: 0.65, easing: [0.22, 1, 0.36, 1], delay: i * 0.10 });
    }, 60);
  });
}

// --- Scroll-Reveal via IntersectionObserver ---
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.science-stat-box, .matrix-section, .domain-selector-section, .science-cta'
  );
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.7, easing: [0.22, 1, 0.36, 1] });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(el => { el.style.opacity = '0'; obs.observe(el); });

  // Matrix rows staggered
  const matrixRows = document.querySelectorAll('.matrix-table tbody tr');
  const rowObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(matrixRows, { opacity: [0, 1], x: [-20, 0] },
          { duration: 0.4, easing: 'ease-out', delay: stagger(0.06) });
        rowObs.disconnect();
      }
    });
  }, { threshold: 0.1 });
  if (matrixRows.length) rowObs.observe(matrixRows[0]);
}

/** Teclado de tablist conforme o padrão WAI-ARIA: setas, Home e End. */
function initTablist() {
  const tabs = [...document.querySelectorAll('.domain-pill')];
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => selectDomain(tab.dataset.domain));
  });

  document.getElementById('domain-pills')?.addEventListener('keydown', (e) => {
    const idx = tabs.indexOf(document.activeElement);
    if (idx < 0) return;
    const last = tabs.length - 1;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = idx === last ? 0 : idx + 1;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = idx === 0 ? last : idx - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    selectDomain(tabs[next].dataset.domain, { focus: true });
  });
}

// --- Domain Selection ---
window.selectDomain = function(domainId, { focus = false } = {}) {
  activeDomainId = domainId;

  const tabs = [...document.querySelectorAll('.domain-pill')];
  tabs.forEach((btn) => {
    const on = btn.dataset.domain === domainId;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-selected', String(on));
    // roving tabindex: só a aba ativa entra na ordem de tabulação
    btn.tabIndex = on ? 0 : -1;
    if (on && focus) btn.focus();
  });
  document.getElementById('domain-content-card')?.setAttribute('aria-labelledby', `tab-${domainId}`);
  // Fade out, then re-render and fade in
  const card = document.getElementById('domain-content-card');
  if (card) {
    animate(card, { opacity: [1, 0], scale: [1, 0.97] }, { duration: 0.2, easing: 'ease-in' })
      .finished.then(() => {
        renderActiveDomain();
        animate(card, { opacity: [0, 1], scale: [0.97, 1], y: [12, 0] },
          { duration: 0.45, easing: [0.22, 1, 0.36, 1] });
      });
  } else {
    renderActiveDomain();
  }
};

function renderActiveDomain() {
  const container = document.getElementById('domain-content-card');
  const d = scienceDomains[activeDomainId];
  if (!container || !d) return;

  const tag = currentLang === 'pt' ? d.tag_pt : d.tag_en;
  const headline = currentLang === 'pt' ? d.headline_pt : d.headline_en;
  const desc = currentLang === 'pt' ? d.desc_pt : d.desc_en;
  const innovations = currentLang === 'pt' ? d.innovations_pt : d.innovations_en;
  const simTitle = currentLang === 'pt' ? d.sim_title_pt : d.sim_title_en;

  container.innerHTML = `
    <div class="domain-left-info">
      <div class="domain-theme-tag">
        <span>●</span>
        <span>${tag}</span>
      </div>
      <h2 class="domain-headline">${headline}</h2>
      <p class="domain-description">${desc}</p>
      
      <div class="domain-innovations-list">
        ${innovations.map(item => `
          <div class="innovation-item">
            <span class="innovation-bullet">▹</span>
            <div class="innovation-content">
              <h5>${item.title}</h5>
              <p>${item.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="domain-right-sim">
      <div class="sim-header">
        <h4 id="domain-chart-title">${simTitle}</h4>
        <span class="badge badge-cyan">${currentLang === 'pt' ? 'Dados' : 'Data'}</span>
      </div>
      <div class="chart-slot" id="domain-chart-slot"></div>
    </div>
  `;

  renderDomainChart(activeDomainId);
  renderResources(activeDomainId);
}

// --- Painel de dados do domínio ---
//
// Astronomia tem duas vistas: a curva de luz, calculada em tempo real pelo
// modelo físico em lib/transit.js, e o volume de dados medido por levantamento.
// Os outros cinco domínios têm uma vista cada, ligada à sua série no dataset.

// Dataset produzido pelo levantamento descrito em
// research/DEEP_RESEARCH_PROMPT_science_metrics.md. Carregado uma vez e mantido
// em memória; séries sem fonte primária ficam com status "not_found" e o painel
// mostra estado pendente em vez de número sem procedência.
let scienceMetrics = null;

async function loadMetrics() {
  if (scienceMetrics !== null) return scienceMetrics;
  try {
    const res = await fetch('/research/science_metrics.json', { cache: 'no-cache' });
    scienceMetrics = res.ok ? await res.json() : { series: [] };
  } catch {
    scienceMetrics = { series: [] };
  }
  return scienceMetrics;
}

const t = (pt, en) => (currentLang === 'pt' ? pt : en);

/** Estado pendente — nomeia a série que falta, em vez de fingir que há dado. */
function pendingState(seriesId) {
  const el = document.createElement('div');
  el.className = 'chart-pending';
  el.innerHTML = `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
    </svg>
    <p class="chart-pending-title">${t('Dados em levantamento', 'Data under review')}</p>
    <p class="chart-pending-desc">${t(
      'Este gráfico só será publicado quando a série tiver fonte primária verificada.',
      'This chart ships only once the series has a verified primary source.'
    )}</p>
    <code class="chart-pending-id">${seriesId}</code>`;
  return el;
}

// Rótulos legíveis para as chaves técnicas do dataset. O JSON guarda
// identificadores estáveis; a tradução para leitura humana vive aqui.
const LABELS = {
  pdb_experimental: ['PDB — determinadas em laboratório', 'PDB — experimentally solved'],
  alphafold_predicted: ['AlphaFold DB — preditas', 'AlphaFold DB — predicted'],

  SDSS: ['SDSS', 'SDSS'],
  JWST: ['JWST', 'JWST'],
  Rubin_LSST: ['Vera Rubin / LSST', 'Vera Rubin / LSST'],

  target_discovery: ['Descoberta do alvo', 'Target discovery'],
  hit_to_lead: ['Hit para lead', 'Hit to lead'],
  lead_optimization: ['Otimização do lead', 'Lead optimization'],
  preclinical_toxicology: ['Toxicologia pré-clínica', 'Preclinical toxicology'],
  target_to_ind_candidate: ['Alvo até candidato IND', 'Target to IND candidate'],
  phase_1_clinical: ['Fase I clínica', 'Phase I clinical'],
  traditional_industry_average: ['Pipeline tradicional', 'Traditional pipeline'],
  insilico_ism001_055: ['Insilico ISM001-055', 'Insilico ISM001-055'],

  pre_gnome_convex_hull_icsd_mp: ['Estáveis conhecidas antes do GNoME', 'Known stable before GNoME'],
  gnome_total_predictions: ['GNoME — estruturas previstas', 'GNoME — predicted structures'],
  gnome_convex_hull_stable: ['GNoME — estáveis no convex hull', 'GNoME — stable on convex hull'],
  external_literature_independent_synthesis: ['Sintetizadas de forma independente', 'Independently synthesized'],
  a_lab_autonomous_synthesis_targets: ['A-Lab — alvos tentados', 'A-Lab — attempted targets'],
  a_lab_autonomous_synthesis_confirmed: ['A-Lab — sintetizadas', 'A-Lab — synthesized'],

  human_expert_baseline: ['Equipe humana especialista', 'Human expert team'],
  alphachip_rl_agent: ['AlphaChip (RL)', 'AlphaChip (RL)'],

  structural_inference_per_protein: ['Inferência de estrutura por proteína', 'Structural inference per protein'],
  transient_alert_triage: ['Triagem de alertas transientes', 'Transient alert triage'],
  crystal_relaxation_dft_surrogate: ['Relaxação de cristal (substituto de DFT)', 'Crystal relaxation (DFT surrogate)'],
  macro_floorplanning_design_time: ['Tempo de macro floorplanning', 'Macro floorplanning design time'],

  biology: ['Biologia estrutural', 'Structural biology'],
  astronomy: ['Astronomia', 'Astronomy'],
  chemistry: ['Química de materiais', 'Materials chemistry'],
  ai_hardware: ['Projeto de chips', 'Chip design'],
};

const label = (key) => {
  const pair = LABELS[key];
  if (!pair) return String(key).replace(/_/g, ' ');
  return currentLang === 'pt' ? pair[0] : pair[1];
};

// Cada domínio declara suas vistas. Astronomia tem duas: a curva calculada e a
// série medida. As demais têm uma, ligada à série correspondente do dataset.
const DOMAIN_VIEWS = {
  biology: [{ id: 'S1_protein_structures', render: viewProteinStructures }],
  astronomy: [
    { id: null, titlePt: 'Curva de luz', titleEn: 'Light curve', render: null },
    { id: 'S2_astronomy_data_volume', titlePt: 'Volume de dados', titleEn: 'Data volume', render: viewDataVolume },
  ],
  medicine: [{ id: 'S3_drug_discovery_timelines', render: viewDrugTimeline }],
  chemistry: [{ id: 'S4_materials_crystalline_structures', render: viewCrystals }],
  quantum: [{ id: 'S5_quantum_error_suppression', render: viewQuantumError }],
  ai4ai: [{ id: 'S6_ai_for_chip_design', render: viewChipDesign }],
};

let activeViewIndex = 0;

// Contador de renderizações: uma chamada que volta de um await só pode escrever
// no painel se ainda for a mais recente. Sem isso, trocar de aba durante o fetch
// do dataset faz a aba antiga apagar o gráfico da aba nova.
let chartRenderToken = 0;

/** Desenha o painel do domínio ativo dentro de #domain-chart-slot. */
async function renderDomainChart(domainId, viewIndex = 0) {
  const slot = document.getElementById('domain-chart-slot');
  if (!slot) return;
  const token = ++chartRenderToken;
  activeViewIndex = viewIndex;
  slot.replaceChildren();

  const views = DOMAIN_VIEWS[domainId] || [];
  const view = views[viewIndex] || views[0];
  if (!view) return;

  if (views.length > 1) slot.appendChild(viewSwitcher(domainId, views, viewIndex));

  // vista calculada (curva de trânsito) não depende do dataset
  if (!view.id) {
    setPanelTitle(t('Curva de luz de trânsito planetário', 'Planetary transit light curve'));
    renderTransitExplorer(slot);
    return;
  }

  const metrics = await loadMetrics();
  if (token !== chartRenderToken) return;   // outra aba assumiu enquanto buscávamos

  const serie = metrics.series?.find((s) => s.id === view.id && s.status === 'ok');
  if (!serie) {
    slot.appendChild(pendingState(view.id));
    return;
  }

  // o cabeçalho do painel tem que nomear o gráfico que está à vista
  setPanelTitle(currentLang === 'pt' ? serie.title_pt : serie.title_en);

  const fig = document.createElement('figure');
  fig.className = 'chart-figure';
  view.render(fig, serie);
  fig.appendChild(caption(serie));
  slot.appendChild(fig);
}

function setPanelTitle(text) {
  const h = document.getElementById('domain-chart-title');
  if (h && text) h.textContent = text;
}

/** Alternador de vistas, quando o domínio tem mais de um gráfico. */
function viewSwitcher(domainId, views, current) {
  const nav = document.createElement('div');
  nav.className = 'view-switcher';
  nav.setAttribute('role', 'group');
  nav.setAttribute('aria-label', t('Escolher gráfico', 'Choose chart'));
  views.forEach((v, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `view-switch${i === current ? ' active' : ''}`;
    btn.textContent = currentLang === 'pt' ? v.titlePt : v.titleEn;
    btn.setAttribute('aria-pressed', String(i === current));
    btn.addEventListener('click', () => renderDomainChart(domainId, i));
    nav.appendChild(btn);
  });
  return nav;
}

/** Legenda com medida, ressalvas e link para a fonte primária. */
function caption(serie) {
  const cap = document.createElement('figcaption');
  cap.className = 'chart-caption';

  const src = serie.sources?.[0];
  const parts = [];
  if (serie.measure) parts.push(`<span>${serie.measure}</span>`);
  if (src) parts.push(`<a href="${src.url}" target="_blank" rel="noopener">${src.label}</a>`);
  cap.innerHTML = parts.join(' · ');

  if (serie.caveats?.length) {
    const det = document.createElement('details');
    det.className = 'chart-caveats';
    det.innerHTML = `<summary>${t('Ressalvas metodológicas', 'Methodological caveats')} (${serie.caveats.length})</summary>`
      + `<ul>${serie.caveats.map((c) => `<li>${c}</li>`).join('')}</ul>`;
    cap.appendChild(det);
  }
  return cap;
}

function legend(items) {
  const box = document.createElement('div');
  box.className = 'chart-legend';
  box.innerHTML = items.map((it, i) =>
    `<span class="legend-item"><i style="background:${it.color || `var(--chart-c${(i % 6) + 1})`}"></i>${it.label}</span>`
  ).join('');
  return box;
}

const box = () => (window.matchMedia('(max-width: 860px)').matches
  ? { width: 330, height: 250 }
  : { width: 620, height: 300 });

// --- Uma vista por série ---

/** S1 · crescimento das estruturas proteicas — duas séries, escala log. */
function viewProteinStructures(fig, serie) {
  const grouped = new Map();
  for (const d of serie.data) {
    if (!grouped.has(d.series)) grouped.set(d.series, []);
    grouped.get(d.series).push({ x: d.x, y: d.y });
  }
  // Sem preenchimento de área: num eixo log a base do preenchimento é arbitrária
  // e a mancha resultante sugere um volume que a escala não representa.
  const series = [...grouped.entries()].map(([id, points]) => ({
    id,
    label: label(id),
    points: points.sort((p, q) => p.x - q.x),
    markers: true,
  }));

  fig.appendChild(lineChart({
    ...box(),
    series,
    yScale: 'log',
    lang: currentLang,
    margin: { left: 58 },
    xFormat: (v) => String(Math.round(v)),
    xLabel: t('Ano', 'Year'),
    title: currentLang === 'pt' ? serie.title_pt : serie.title_en,
    desc: serie.measure,
  }));
  fig.appendChild(legend(series.map((s) => ({ label: s.label }))));
  fig.appendChild(tableToggle(series));
}

/** S2 · volume de dados por levantamento — magnitude em escala log. */
function viewDataVolume(fig, serie) {
  const data = serie.data.map((d) => ({
    label: label(d.survey),
    value: d.raw_data_tb_per_night,
    display: `${d.raw_data_tb_per_night} TB`,
  }));
  fig.appendChild(dotPlot({
    ...box(),
    data,
    xScale: 'log',
    lang: currentLang,
    margin: window.matchMedia('(max-width: 860px)').matches
      ? { left: 118, right: 64 } : { left: 156, right: 82 },
    valueFormat: (v) => `${fmtCompact(v, currentLang)} TB`,
    title: currentLang === 'pt' ? serie.title_pt : serie.title_en,
    desc: serie.measure,
  }));

  const rubin = serie.data.find((d) => d.survey === 'Rubin_LSST');
  if (rubin) {
    const note = document.createElement('p');
    note.className = 'chart-readout';
    note.innerHTML = t(
      `O Rubin gera <b>${fmtCompact(rubin.alerts_per_night, 'pt')}</b> alertas por noite, com <b>${rubin.automated_triage_pct}%</b> triados automaticamente.`,
      `Rubin produces <b>${fmtCompact(rubin.alerts_per_night, 'en')}</b> alerts per night, <b>${rubin.automated_triage_pct}%</b> triaged automatically.`
    );
    fig.appendChild(note);
  }
}

/** S3 · cronograma de descoberta de fármacos — etapas somadas. */
function viewDrugTimeline(fig, serie) {
  const byPipeline = new Map();
  for (const d of serie.data) {
    if (!byPipeline.has(d.pipeline)) byPipeline.set(d.pipeline, []);
    byPipeline.get(d.pipeline).push({ id: d.phase, label: label(d.phase), value: d.duration_months });
  }
  const rows = [...byPipeline.entries()].map(([pipeline, segments]) => ({
    label: label(pipeline), segments,
  }));

  // um slot de cor por etapa, compartilhado entre o gráfico e a legenda
  const phases = [...new Set(serie.data.map((d) => d.phase))];
  const palette = new Map(phases.map((ph, i) => [ph, `var(--chart-c${(i % 6) + 1})`]));

  fig.appendChild(stackedBarChart({
    ...box(),
    rows,
    colorFor: (id) => palette.get(id),
    lang: currentLang,
    margin: window.matchMedia('(max-width: 860px)').matches
      ? { left: 104, right: 56 } : { left: 152, right: 72 },
    valueFormat: (v) => `${Math.round(v)} ${t('m', 'mo')}`,
    title: currentLang === 'pt' ? serie.title_pt : serie.title_en,
    desc: serie.measure,
  }));
  fig.appendChild(legend(phases.map((ph) => ({ label: label(ph), color: palette.get(ph) }))));
}

/** S4 · estruturas cristalinas — previsto ≠ estável ≠ sintetizado. */
function viewCrystals(fig, serie) {
  const data = serie.data.map((d) => ({ label: label(d.category), value: d.count }));
  fig.appendChild(dotPlot({
    ...box(),
    height: window.matchMedia('(max-width: 860px)').matches ? 280 : 320,
    data,
    xScale: 'log',
    lang: currentLang,
    margin: window.matchMedia('(max-width: 860px)').matches
      ? { left: 130, right: 58 } : { left: 236, right: 76 },
    title: currentLang === 'pt' ? serie.title_pt : serie.title_en,
    desc: serie.measure,
  }));
}

/** S5 · supressão de erro lógico por distância de código. */
function viewQuantumError(fig, serie) {
  const points = serie.data
    .map((d) => ({ x: d.code_distance, y: d.logical_error_per_cycle }))
    .sort((p, q) => p.x - q.x);

  fig.appendChild(lineChart({
    ...box(),
    series: [{ id: 'err', label: t('Erro lógico por ciclo', 'Logical error per cycle'), points, markers: true }],
    yScale: 'log',
    lang: currentLang,
    margin: { left: 66 },
    xTicks: 3,
    xFormat: (v) => `d=${Math.round(v)}`,
    yFormat: (v) => `${(v * 100).toFixed(2)}%`,
    xLabel: t('Distância do código de superfície', 'Surface code distance'),
    title: currentLang === 'pt' ? serie.title_pt : serie.title_en,
    desc: serie.measure,
  }));

  const sorted = points;
  const lambda = sorted.length > 1 ? sorted[0].y / sorted[sorted.length - 1].y : null;
  if (lambda) {
    const note = document.createElement('p');
    note.className = 'chart-readout';
    note.innerHTML = t(
      `Cada aumento de distância corta o erro: de d=${sorted[0].x} a d=${sorted[sorted.length - 1].x} o erro cai <b>${lambda.toFixed(1)}×</b>. Erro que diminui ao crescer o código é o que significa operar <b>abaixo do limiar</b>.`,
      `Each distance step cuts the error: from d=${sorted[0].x} to d=${sorted[sorted.length - 1].x} it drops <b>${lambda.toFixed(1)}×</b>. Error falling as the code grows is what operating <b>below threshold</b> means.`
    );
    fig.appendChild(note);
  }
}

/** S6 · tempo de floorplanning — horas, escala linear ancorada no zero. */
function viewChipDesign(fig, serie) {
  const data = serie.data.map((d) => ({
    label: label(d.method),
    value: d.execution_time_hours,
    display: `${fmtCompact(d.execution_time_hours, currentLang)} h`,
  }));
  fig.appendChild(barChart({
    ...box(),
    height: 210,
    data,
    lang: currentLang,
    margin: window.matchMedia('(max-width: 860px)').matches
      ? { left: 112, right: 62 } : { left: 178, right: 78 },
    valueFormat: (v) => `${fmtCompact(v, currentLang)} h`,
    title: currentLang === 'pt' ? serie.title_pt : serie.title_en,
    desc: serie.measure,
  }));

  const ai = serie.data.find((d) => d.method === 'alphachip_rl_agent');
  if (ai) {
    const note = document.createElement('p');
    note.className = 'chart-readout';
    note.innerHTML = t(
      `Comprimento de fio normalizado: <b>${ai.wirelength_normalized}</b> contra 1,0 da linha de base humana.`,
      `Normalized wirelength: <b>${ai.wirelength_normalized}</b> against the human baseline of 1.0.`
    );
    fig.appendChild(note);
  }
}

function tableToggle(series) {
  const details = document.createElement('details');
  details.className = 'chart-table-toggle';
  details.innerHTML = `<summary>${t('Ver dados em tabela', 'View data as table')}</summary>`;
  details.appendChild(dataTable(series, { lang: currentLang, xLabel: t('Ano', 'Year'), xFormat: (v) => String(Math.round(v)) }));
  return details;
}

/** Multiplicadores se leem melhor por extenso: 10.000× e não "10 mil×". */
const fmtFactor = (v) => {
  const loc = currentLang === 'pt' ? 'pt-BR' : 'en-US';
  return `${v.toLocaleString(loc, { maximumFractionDigits: v < 100 ? 1 : 0 })}\u00d7`;
};

// --- Seção comparativa: fatores de aceleração entre domínios ---
//
// A coluna "fator de aceleração" da tabela era preenchida à mão com valores sem
// fonte e de unidades incompatíveis entre si ("10.000x" ao lado de "anos para
// semanas"). Agora ela vem da série S7, que exige denominador explícito, e um
// domínio sem estudo comparável aparece como tal em vez de receber um número.

const DOMAIN_OF_S7 = {
  biology: 'biology',
  astronomy: 'astronomy',
  chemistry: 'chemistry',
  ai4ai: 'ai_hardware',
};

async function renderMatrix() {
  const metrics = await loadMetrics();
  const serie = metrics.series?.find(
    (x) => x.id === 'S7_cross_domain_acceleration_factors' && x.status === 'ok'
  );
  const missing = metrics.series?.filter((x) => x.status === 'not_found') || [];

  fillSpeedupCells(serie, missing);
  if (serie) renderMatrixChart(serie);
}

/** Preenche a coluna de aceleração da tabela a partir do dataset. */
function fillSpeedupCells(serie, missing) {
  document.querySelectorAll('tr[data-domain]').forEach((row) => {
    const cell = row.querySelector('[data-speedup]');
    if (!cell) return;
    const key = DOMAIN_OF_S7[row.dataset.domain];
    const point = key && serie?.data.find((d) => d.domain === key);

    if (!point) {
      const why = missing.length
        ? t('Sem estudo comparável publicado', 'No comparable published study')
        : t('Não levantado', 'Not surveyed');
      cell.innerHTML = `<span class="score-absent" title="${why}">—</span>`;
      cell.setAttribute('aria-label', why);
      return;
    }

    const factor = fmtFactor(point.speedup_factor);
    // o denominador acompanha o número: "Nx" sozinho não significa nada
    cell.innerHTML = `<span class="score-highlight">${factor}</span>`
      + `<span class="score-basis">${label(point.subtask)}</span>`;
  });
}

function renderMatrixChart(serie) {
  const host = document.getElementById('matrix-chart');
  if (!host) return;
  host.replaceChildren();

  const narrow = window.matchMedia('(max-width: 860px)').matches;
  const fig = document.createElement('figure');
  fig.className = 'chart-figure';

  fig.appendChild(dotPlot({
    width: narrow ? 340 : 860,
    height: narrow ? 230 : 250,
    data: serie.data.map((d) => ({
      label: label(d.domain),
      value: d.speedup_factor,
      display: fmtFactor(d.speedup_factor),
    })),
    xScale: 'log',
    lang: currentLang,
    margin: narrow ? { left: 122, right: 62 } : { left: 178, right: 86 },
    valueFormat: fmtFactor,
    title: currentLang === 'pt' ? serie.title_pt : serie.title_en,
    desc: serie.measure,
  }));

  const list = document.createElement('dl');
  list.className = 'matrix-basis';
  list.innerHTML = serie.data.map((d) => `
    <dt>${label(d.domain)}</dt>
    <dd>${d.baseline.replace(/_/g, ' ')} → ${d.ai_method.replace(/_/g, ' ')}</dd>`).join('');
  fig.appendChild(list);
  fig.appendChild(caption(serie));

  host.appendChild(fig);
}

// --- Acervo de recursos por domínio ---
//
// Consome research/science_resources.json, produzido pelo levantamento descrito
// em research/DEEP_RESEARCH_PROMPT_science_resources.md. Cada item traz a data
// em que a URL foi carregada; o que não passou na verificação está em
// `rejected` no próprio arquivo, fora do ar público.

let scienceResources = null;

const COLLECTIONS = [
  { id: 'tools', pt: 'Ferramentas para usar agora', en: 'Tools you can use now' },
  { id: 'links', pt: 'Vale a visita', en: 'Worth a visit' },
  { id: 'repos', pt: 'Código aberto', en: 'Open source' },
  { id: 'news', pt: 'Onde acompanhar', en: 'Where to follow' },
];

const ACCESS_LABEL = {
  free: ['grátis', 'free'],
  freemium: ['cota grátis', 'free tier'],
  academic: ['acadêmico', 'academic'],
  open_source: ['open source', 'open source'],
};

async function loadResources() {
  if (scienceResources !== null) return scienceResources;
  try {
    const res = await fetch('/research/science_resources.json', { cache: 'no-cache' });
    scienceResources = res.ok ? await res.json() : { domains: {} };
  } catch {
    scienceResources = { domains: {} };
  }
  return scienceResources;
}

const host = (url) => { try { return new URL(url).host.replace(/^www\./, ''); } catch { return url; } };

/** Selos que respondem "consigo clicar e usar agora?" sem abrir a página. */
function toolBadges(item) {
  const out = [];
  const acc = ACCESS_LABEL[item.access];
  if (acc) out.push({ text: t(acc[0], acc[1]), tone: item.access === 'free' ? 'good' : 'neutral' });
  if (item.needs_account === false) {
    out.push({ text: t('sem cadastro', 'no signup'), tone: 'good' });
  } else if (item.needs_account === true) {
    out.push({ text: t('exige conta', 'account needed'), tone: 'neutral' });
  }
  return out;
}

function resourceCard(item, collection) {
  const a = document.createElement('a');
  a.className = `res-card res-${collection}`;
  a.href = item.url;
  a.target = '_blank';
  a.rel = 'noopener';

  const badges = collection === 'tools' ? toolBadges(item) : [];
  if (collection === 'repos') {
    if (item.official) badges.push({ text: t('oficial', 'official'), tone: 'good' });
    if (item.license) badges.push({ text: item.license, tone: 'neutral' });
  }
  if (collection === 'news' && item.kind) {
    const k = { general: ['geral', 'general'], specialist: ['especializada', 'specialist'], primary: ['fonte primária', 'primary source'] }[item.kind];
    if (k) badges.push({ text: t(k[0], k[1]), tone: 'neutral' });
  }

  a.innerHTML = `
    <span class="res-head">
      <span class="res-title">${item.title}</span>
      <span class="res-host">${host(item.url)}</span>
    </span>
    <span class="res-what">${item.what}</span>
    ${item.try_this ? `<span class="res-try"><b>${t('Experimente', 'Try this')}:</b> ${item.try_this}</span>` : ''}
    ${badges.length ? `<span class="res-badges">${badges
      .map((b) => `<span class="res-badge is-${b.tone}">${b.text}</span>`).join('')}</span>` : ''}`;
  return a;
}

/** Desenha o acervo do domínio ativo dentro de #resources-slot. */
async function renderResources(domainId) {
  const slot = document.getElementById('resources-slot');
  if (!slot) return;

  const data = await loadResources();
  const dom = data.domains?.[domainId];
  slot.replaceChildren();

  if (!dom) {
    slot.appendChild(pendingState('science_resources.json'));
    return;
  }

  for (const col of COLLECTIONS) {
    const items = dom[col.id] || [];
    if (!items.length) continue;

    const group = document.createElement('section');
    group.className = 'res-group';
    const h = document.createElement('h3');
    h.className = 'res-group-title';
    h.textContent = currentLang === 'pt' ? col.pt : col.en;
    group.appendChild(h);

    const grid = document.createElement('div');
    grid.className = 'res-grid';
    items.forEach((it) => grid.appendChild(resourceCard(it, col.id)));
    group.appendChild(grid);
    slot.appendChild(group);
  }

  const note = document.createElement('p');
  note.className = 'res-note';
  const dates = Object.values(dom).flat().map((i) => i.verified).filter(Boolean).sort();
  note.innerHTML = t(
    `Links verificados em ${dates[dates.length - 1] || '—'}. O que não passou na verificação está registrado em <a href="/research/science_resources_report.md">relatório de curadoria</a>.`,
    `Links verified on ${dates[dates.length - 1] || '—'}. What failed verification is recorded in the <a href="/research/science_resources_report.md">curation report</a>.`
  );
  slot.appendChild(note);
}

// --- Explorador de trânsito de exoplaneta (modelo físico) ---

let transitState = { k: 0.1028, b: 0.3 };

/** Geometria do gráfico conforme a largura disponível. */
function chartBox() {
  const narrow = window.matchMedia('(max-width: 860px)').matches;
  return narrow
    ? { width: 330, height: 235, margin: { left: 54, right: 12, top: 12, bottom: 34 }, xTicks: 3, yTicks: 4 }
    : { width: 620, height: 300, margin: { left: 78, right: 24 }, xTicks: 6, yTicks: 5 };
}

function renderTransitExplorer(slot) {
  const wrap = document.createElement('figure');
  wrap.className = 'chart-figure transit-explorer';

  const plot = document.createElement('div');
  plot.className = 'chart-plot';
  wrap.appendChild(plot);

  const controls = document.createElement('div');
  controls.className = 'chart-controls';
  controls.innerHTML = `
    <label class="chart-control">
      <span class="control-label">${t('Raio do planeta', 'Planet radius')}
        <output id="out-k"></output></span>
      <input type="range" id="ctl-k" min="0.01" max="0.18" step="0.001"
             value="${transitState.k}" aria-describedby="transit-readout">
    </label>
    <label class="chart-control">
      <span class="control-label">${t('Parâmetro de impacto', 'Impact parameter')}
        <output id="out-b"></output></span>
      <input type="range" id="ctl-b" min="0" max="1.05" step="0.01"
             value="${transitState.b}" aria-describedby="transit-readout">
    </label>`;
  wrap.appendChild(controls);

  const readout = document.createElement('p');
  readout.className = 'chart-readout';
  readout.id = 'transit-readout';
  readout.setAttribute('role', 'status');
  wrap.appendChild(readout);

  const cap = document.createElement('figcaption');
  cap.className = 'chart-caption';
  cap.innerHTML = t(
    'Curva calculada a partir da geometria de sobreposição de discos com escurecimento de limbo quadrático — modelo de Mandel &amp; Agol (2002). Nenhum valor é observação de um planeta real.',
    'Curve computed from disc-overlap geometry with quadratic limb darkening — Mandel &amp; Agol (2002) model. No value here is an observation of a real planet.'
  );
  wrap.appendChild(cap);

  slot.appendChild(wrap);

  const draw = () => {
    const { points, depthPpm, durationRel } = transitCurve(transitState);
    plot.replaceChildren();
    plot.appendChild(lineChart({
      series: [{ id: 'flux', label: t('Fluxo relativo', 'Relative flux'), points, color: 'var(--chart-c2)' }],
      // O texto do SVG escala junto com o viewBox. Num painel estreito, um
      // viewBox de 620 é renderizado a ~0,5x e os rótulos viram 5px. Encolher
      // o viewBox mantém a escala perto de 1:1 e o texto no tamanho real.
      ...chartBox(),
      lang: currentLang,
      // enquadra a profundidade do trânsito: o eixo cobre a faixa do dado,
      // não de 0 a 1 — senão a queda de alguns por mil vira uma linha reta
      zero: false,
      yDomain: [1 - (depthPpm / 1e6) * 1.35 - 0.0002, 1 + (depthPpm / 1e6) * 0.18 + 0.0002],
      xLabel: t('Deslocamento orbital (raios estelares)', 'Orbital offset (stellar radii)'),
      yLabel: t('Fluxo relativo da estrela', 'Relative stellar flux'),
      yFormat: (v) => v.toFixed(depthPpm > 5000 ? 4 : 5),
      xFormat: (v) => v.toFixed(2),
      title: t('Curva de luz de trânsito planetário', 'Planetary transit light curve'),
      desc: t(
        `Queda de ${depthPpm} partes por milhão no brilho da estrela durante o trânsito.`,
        `A ${depthPpm} parts-per-million dip in stellar brightness during transit.`
      ),
    }));

    const nearest = REFERENCE_PLANETS.reduce((acc, p) =>
      (Math.abs(p.k - transitState.k) < Math.abs(acc.k - transitState.k) ? p : acc));
    const refLabel = currentLang === 'pt' ? nearest.label_pt : nearest.label_en;

    document.getElementById('out-k').textContent = `Rp/Rs = ${transitState.k.toFixed(3)}`;
    document.getElementById('out-b').textContent = `b = ${transitState.b.toFixed(2)}`;
    readout.innerHTML = t(
      `Profundidade <b>${fmtCompact(depthPpm, 'pt')} ppm</b> · duração relativa <b>${durationRel}</b> raios estelares · mais próximo de <b>${refLabel}</b>`,
      `Depth <b>${fmtCompact(depthPpm, 'en')} ppm</b> · relative duration <b>${durationRel}</b> stellar radii · closest to <b>${refLabel}</b>`
    );
  };

  controls.querySelector('#ctl-k').addEventListener('input', (e) => {
    transitState = { ...transitState, k: +e.target.value };
    draw();
  });
  controls.querySelector('#ctl-b').addEventListener('input', (e) => {
    transitState = { ...transitState, b: +e.target.value };
    draw();
  });

  draw();
}

// --- Language Switcher ---
window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('makeaibetter_lang', lang);
  
  document.getElementById('btn-lang-pt')?.classList.toggle('active', lang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', lang === 'en');
  
  applyScienceTranslations();
  renderActiveDomain();
  renderMatrix();
};

function initLanguage() {
  currentLang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
  document.getElementById('btn-lang-pt')?.classList.toggle('active', currentLang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', currentLang === 'en');
  applyScienceTranslations();
}

function applyScienceTranslations() {
  const dict = {
    pt: {
      maker_label: "QUEM FAZ",
      maker_text: "Um projeto da <a href=\"https://sfaisolutions.com\" target=\"_blank\" rel=\"noopener\">SFAI Solutions</a>, que desenvolve o <a href=\"https://app.sfaisolutions.com\" target=\"_blank\" rel=\"noopener\">Cocreator</a> — ferramentas de criação de conteúdo com IA. <a href=\"/research/como-e-feito.html\">Como este site é feito</a>.",
      res_tag: "ACERVO",
      res_title: "Onde explorar cada área",
      res_subtitle: "Fontes para acompanhar, links que valem a visita, ferramentas de IA que rodam no navegador e o código aberto que sustenta cada campo. Cada URL foi carregada e verificada.",
      nav_research: "Pesquisa",
      footer_desc: "Iniciativa de pesquisa independente e aberta para o avanço seguro e rigoroso da inteligência artificial.",
      footer_col_nav: "Navegação",
      footer_col_disciplines: "Disciplinas",
      footer_col_connect: "Conectar",
      hero_stat_1_sub: "800 anos de pesquisa condensados",
      hero_stat_2_val: "3 Bilhões",
      hero_stat_2_sub: "AlphaGenome (DeepMind 2026)",
      hero_stat_3_sub: "Modelos de IA para o JWST",
      hero_stat_4_val: "Horas vs Meses",
      hero_stat_4_sub: "AlphaChip (IA desenhando IA)",
      mx_bio_area: "Biologia Molecular",
      mx_bio_mark: "AlphaFold 3 & AlphaGenome (Genômica não-codificante)",
      mx_bio_role: "Validação anti-alucinação de dobras proteicas",
      mx_astro_area: "Astronomia",
      mx_astro_mark: "Zoobot & Redes Neurais para JWST / Vera Rubin",
      mx_astro_role: "Filtragem de dados astronômicos abertos",
      mx_med_area: "Medicina & Fármacos",
      mx_med_mark: "Agentes Autônomos Co-Scientist & Robin",
      mx_med_role: "Sandboxing e segurança de ensaios in-silico",
      mx_chem_area: "Química & Materiais",
      mx_chem_mark: "GNoME (2,2M novos cristais) & Self-Driving Labs",
      mx_chem_role: "Benchmarks de síntese física reproduzível",
      mx_quantum_area: "Física Quântica",
      mx_quantum_mark: "Decodificador neural de código de superfície (Willow)",
      mx_quantum_role: "Modelagem aberta de estados quânticos",
      mx_ai_area: "IA para IA",
      mx_ai_mark: "AlphaChip & Dados sintéticos provados em Lean 4",
      mx_ai_role: "Verificação formal e governança de auto-aprimoramento",
      footer_rights: "&copy; 2026 Make AI Better Research Initiative. Licença MIT Open Source.",
      nav_home: "Home",
      nav_history: "História da Computação",
      nav_science: "IA na Ciência",
      nav_benchmarks: "Radar",
      nav_manifesto: "Manifesto",
      nav_science_badge: "AI for Science Hub",
      science_hero_badge: "Ciência na Velocidade Digital • 2026",
      science_hero_title: "A IA como Catalisador Universal da Ciência",
      science_hero_lead: "A inteligência artificial deixou de ser um simples assistente estatístico. Em 2026, modelos de raciocínio, agentes autônomos e redes neurais profundas estão formulando hipóteses, descobrindo materiais supercondutores, mapeando o universo e acelerando a própria criação de hardware de IA.",
      sci_stat_crystals: "Novos Cristais (GNoME)",
      sci_stat_genome: "Pares de Bases Mapeados",
      sci_stat_cosmic: "Simulação da Teia Cósmica",
      sci_stat_alphachip: "Design de Chips TPU",
      domain_pill_bio: "Biologia & Genômica",
      domain_pill_astro: "Astronomia & Cosmo",
      domain_pill_med: "Medicina & Fármacos",
      domain_pill_chem: "Química & Materiais",
      domain_pill_quantum: "Física Quântica",
      domain_pill_ai4ai: "IA para a Própria IA",
      matrix_tag: "PANORAMA COMPARATIVO",
      matrix_title: "Como a IA Redefine Cada Disciplina em 2026",
      matrix_subtitle: "Um comparativo das ferramentas líderes, métricas de aceleração e o papel da Make AI Better em cada fronteira.",
      matrix_caption: "Cada fator de aceleração traz o denominador da comparação e vem de fonte primária citada. Um traço (—) significa que não há estudo comparável publicado — não que o ganho seja nulo.",
      th_science_area: "Área Científica",
      th_breakthrough: "Marco Central (2025/2026)",
      th_speedup: "Fator de Aceleração",
      th_ai_role: "Papel da Make AI Better",
      cta_science_title: "Conheça também a história de como chegamos até aqui",
      cta_science_desc: "Descubra a linha do tempo completa de 90 anos, de Alan Turing em 1936 até os chips quânticos e modelos de raciocínio de 2026.",
      btn_explore_history: "Explorar a Epopeia da Computação",
      btn_return_radar: "Voltar ao Radar de Modelos 2026"
    },
    en: {
      maker_label: "WHO MAKES THIS",
      maker_text: "A project by <a href=\"https://sfaisolutions.com\" target=\"_blank\" rel=\"noopener\">SFAI Solutions</a>, makers of <a href=\"https://app.sfaisolutions.com\" target=\"_blank\" rel=\"noopener\">Cocreator</a> — AI content creation tools. <a href=\"/research/como-e-feito.html\">How this site is made</a>.",
      res_tag: "ARCHIVE",
      res_title: "Where to explore each field",
      res_subtitle: "Sources to follow, links worth visiting, AI tools that run in the browser, and the open source that holds each field up. Every URL was loaded and verified.",
      nav_research: "Research",
      footer_desc: "Independent, open research initiative for the safe and rigorous advancement of artificial intelligence.",
      footer_col_nav: "Navigation",
      footer_col_disciplines: "Disciplines",
      footer_col_connect: "Connect",
      hero_stat_1_sub: "800 years of research compressed",
      hero_stat_2_val: "3 Billion",
      hero_stat_2_sub: "AlphaGenome (DeepMind 2026)",
      hero_stat_3_sub: "AI models for JWST",
      hero_stat_4_val: "Hours vs Months",
      hero_stat_4_sub: "AlphaChip (AI designing AI)",
      mx_bio_area: "Molecular Biology",
      mx_bio_mark: "AlphaFold 3 & AlphaGenome (non-coding genomics)",
      mx_bio_role: "Anti-hallucination validation of protein folds",
      mx_astro_area: "Astronomy",
      mx_astro_mark: "Zoobot & neural networks for JWST / Vera Rubin",
      mx_astro_role: "Open astronomical data filtering",
      mx_med_area: "Medicine & Pharma",
      mx_med_mark: "Co-Scientist & Robin autonomous agents",
      mx_med_role: "Sandboxing and safety for in-silico trials",
      mx_chem_area: "Chemistry & Materials",
      mx_chem_mark: "GNoME (2.2M new crystals) & self-driving labs",
      mx_chem_role: "Reproducible physical synthesis benchmarks",
      mx_quantum_area: "Quantum Physics",
      mx_quantum_mark: "Neural surface-code decoder (Willow)",
      mx_quantum_role: "Open modeling of quantum states",
      mx_ai_area: "AI for AI",
      mx_ai_mark: "AlphaChip & synthetic data proved in Lean 4",
      mx_ai_role: "Formal verification and self-improvement governance",
      footer_rights: "&copy; 2026 Make AI Better Research Initiative. MIT Open Source License.",
      nav_home: "Home",
      nav_history: "History of Computing",
      nav_science: "AI in Science",
      nav_benchmarks: "Radar",
      nav_manifesto: "Manifesto",
      nav_science_badge: "AI for Science Hub",
      science_hero_badge: "Science at Digital Speed • 2026",
      science_hero_title: "AI as the Universal Scientific Catalyst",
      science_hero_lead: "Artificial intelligence has transcended passive data crunching. In 2026, reasoning models, autonomous agents, and foundation networks are formulating hypotheses, discovering superconductors, mapping the cosmos, and engineering next-gen AI hardware.",
      sci_stat_crystals: "New Crystals (GNoME)",
      sci_stat_genome: "Base Pairs Mapped",
      sci_stat_cosmic: "Cosmic Web Simulation",
      sci_stat_alphachip: "TPU Floorplanning",
      domain_pill_bio: "Biology & Genomics",
      domain_pill_astro: "Astronomy & Cosmo",
      domain_pill_med: "Medicine & Pharma",
      domain_pill_chem: "Chemistry & Materials",
      domain_pill_quantum: "Quantum Physics",
      domain_pill_ai4ai: "AI for AI",
      matrix_tag: "COMPARATIVE PANORAMA",
      matrix_title: "How AI Redefines Every Scientific Discipline in 2026",
      matrix_subtitle: "A comparative matrix of landmark breakthroughs, acceleration factors, and Make AI Better's role in open verification.",
      matrix_caption: "Every acceleration factor carries the denominator of its comparison and comes from a cited primary source. A dash (—) means no comparable published study exists — not that the gain is zero.",
      th_science_area: "Scientific Discipline",
      th_breakthrough: "Core Breakthrough (2025/2026)",
      th_speedup: "Acceleration Factor",
      th_ai_role: "Make AI Better's Role",
      cta_science_title: "Explore the 90-Year Journey of How We Got Here",
      cta_science_desc: "Discover the cinematic timeline from Alan Turing in 1936 to Google Willow's quantum leap and OpenAI System-2.",
      btn_explore_history: "Explore The Epic of Computing",
      btn_return_radar: "Return to 2026 Model Radar"
    }
  };

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[currentLang] && dict[currentLang][key]) {
      el.innerHTML = dict[currentLang][key];
    }
  });
}
