/**
 * MAKE AI BETTER — AI for Science Interactive Hub
 * Powered by Motion One (motion.dev)
 * Date: 2026-09-21
 */

import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";


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

// --- Domain Selection ---
window.selectDomain = function(domainId) {
  activeDomainId = domainId;
  document.querySelectorAll('.domain-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-domain') === domainId);
  });
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
        <h4>${simTitle}</h4>
        <span class="badge badge-cyan">${currentLang === 'pt' ? 'Interativo' : 'Interactive'}</span>
      </div>
      <div class="sim-canvas-area" id="sim-canvas-container">
        ${renderSimulatorWidget(d.sim_type)}
      </div>
      <div class="sim-footer-controls" id="sim-footer-controls">
        ${renderSimulatorControls(d.sim_type)}
      </div>
    </div>
  `;
}

// --- Dynamic Simulator Widgets ---
function renderSimulatorWidget(type) {
  if (type === 'biology') {
    return `
      <div class="protein-structure-mock" id="protein-mock">
        <div class="amino-acid-node" id="aa-1">Met</div>
        <div class="amino-acid-node" id="aa-2">Lys</div>
        <div class="amino-acid-node" id="aa-3">Ala</div>
        <div class="amino-acid-node" id="aa-4">Leu</div>
        <div class="amino-acid-node" id="aa-5">Trp</div>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 1rem;" id="bio-feedback">
        ${currentLang === 'pt' ? 'Estrutura nativa estável. Dobra validada.' : 'Native fold stable. Verified conformation.'}
      </p>
    `;
  } else if (type === 'astronomy') {
    return `
      <div class="transit-curve-box">
        <div class="star-orb"></div>
        <div class="planet-orb" id="planet-orb"></div>
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--accent-cyan); text-align: center;">
        <span id="light-flux">${currentLang === 'pt' ? 'Fluxo Luminoso: 100%' : 'Luminosity Flux: 100%'}</span>
      </div>
    `;
  } else if (type === 'medicine') {
    return `
      <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
        <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.85rem;">
          <span>${currentLang === 'pt' ? 'Afinidade de Ligação (Kd):' : 'Binding Affinity (Kd):'}</span>
          <strong style="color: var(--accent-green);" id="kd-val">0.42 nM (Excelente)</strong>
        </div>
        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px;">
          <div style="width: 88%; height: 100%; background: #00ff88; border-radius: 4px;" id="kd-bar"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.85rem; margin-top: 0.5rem;">
          <span>${currentLang === 'pt' ? 'Risco de Toxicidade ADMET:' : 'ADMET Toxicity Risk:'}</span>
          <strong style="color: var(--accent-cyan);" id="tox-val">Baixo (&lt; 2%)</strong>
        </div>
      </div>
    `;
  } else if (type === 'chemistry') {
    return `
      <div style="text-align: center; font-family: var(--font-mono);">
        <div style="font-size: 1.8rem; color: var(--accent-amber); margin-bottom: 0.3rem;">Li₁₀GeP₂S₁₂</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${currentLang === 'pt' ? 'Condutor de Estado Sólido para Baterias' : 'Solid-State Electrolyte Candidate'}</div>
        <div style="margin-top: 1rem; color: var(--accent-green); font-weight: bold;" id="crystal-status">
          ${currentLang === 'pt' ? '✓ Estabilidade Abaixo do Convex Hull: -0.045 eV/átomo' : '✓ Below Convex Hull: -0.045 eV/atom (Stable)'}
        </div>
      </div>
    `;
  } else if (type === 'quantum') {
    return `
      <div style="text-align: center; font-family: var(--font-mono);">
        <div style="font-size: 2rem; color: var(--accent-cyan); font-weight: 800;" id="q-latency">0.34 µs</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${currentLang === 'pt' ? 'Latência do Decodificador Neural' : 'Neural Decoder Latency'}</div>
        <div style="margin-top: 0.75rem; color: var(--accent-green); font-size: 0.85rem;">
          ${currentLang === 'pt' ? '100% dos Bit-Flips Corrigidos no Ciclo' : '100% of Bit-Flips Corrected in-Cycle'}
        </div>
      </div>
    `;
  } else if (type === 'ai4ai') {
    return `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; width: 100%;">
        <div style="background: rgba(0, 240, 255, 0.2); border: 1px solid var(--accent-cyan); border-radius: 6px; padding: 0.6rem; text-align: center; font-size: 0.75rem; font-family: var(--font-mono);">ALU 0</div>
        <div style="background: rgba(138, 43, 226, 0.2); border: 1px solid var(--accent-purple); border-radius: 6px; padding: 0.6rem; text-align: center; font-size: 0.75rem; font-family: var(--font-mono);">Matrix Core</div>
        <div style="background: rgba(0, 255, 136, 0.2); border: 1px solid var(--accent-green); border-radius: 6px; padding: 0.6rem; text-align: center; font-size: 0.75rem; font-family: var(--font-mono);">HBM Router</div>
        <div style="background: rgba(255, 183, 3, 0.2); border: 1px solid var(--accent-amber); border-radius: 6px; padding: 0.6rem; text-align: center; font-size: 0.75rem; font-family: var(--font-mono);">SRAM Block</div>
      </div>
      <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); text-align: center;" id="alphachip-readout">
        ${currentLang === 'pt' ? 'Comprimento de Fio: -18% vs Engenheiro Humano' : 'Wirelength: -18% vs Human Expert'}
      </div>
    `;
  }
}

function renderSimulatorControls(type) {
  if (type === 'biology') {
    return `
      <button class="btn btn-primary" onclick="simulateMutation()" style="width: 100%;">
        ${currentLang === 'pt' ? 'Simular Mutação no Codon 3 (Ala → Pro)' : 'Simulate Mutation at Codon 3 (Ala → Pro)'}
      </button>
    `;
  } else if (type === 'astronomy') {
    return `
      <button class="btn btn-primary" onclick="simulateTransit()" style="width: 100%;">
        ${currentLang === 'pt' ? 'Iniciar Trânsito Planetário' : 'Simulate Planetary Transit'}
      </button>
    `;
  } else if (type === 'medicine') {
    return `
      <button class="btn btn-primary" onclick="testNewMolecule()" style="width: 100%;">
        ${currentLang === 'pt' ? 'Otimizar Afinidade Molecular com Co-Scientist' : 'Optimize Molecular Affinity with Co-Scientist'}
      </button>
    `;
  } else if (type === 'chemistry') {
    return `
      <button class="btn btn-primary" onclick="testNewCrystal()" style="width: 100%;">
        ${currentLang === 'pt' ? 'Testar Novo Cristal Sintético (GNoME)' : 'Test New Synthetic Crystal (GNoME)'}
      </button>
    `;
  } else if (type === 'quantum') {
    return `
      <button class="btn btn-primary" onclick="injectQuantumNoise()" style="width: 100%;">
        ${currentLang === 'pt' ? 'Injetar Ruído Térmico no Qubit' : 'Inject Thermal Noise in Qubit'}
      </button>
    `;
  } else if (type === 'ai4ai') {
    return `
      <button class="btn btn-primary" onclick="runAlphaChipOpt()" style="width: 100%;">
        ${currentLang === 'pt' ? 'Executar Reinforcement Learning (AlphaChip Step)' : 'Run Reinforcement Learning (AlphaChip Step)'}
      </button>
    `;
  }
}

// --- Simulator Interactive Handlers ---
window.simulateMutation = function() {
  const node = document.getElementById('aa-3');
  const feedback = document.getElementById('bio-feedback');
  if (node && feedback) {
    node.classList.toggle('mutated');
    const isMut = node.classList.contains('mutated');
    node.textContent = isMut ? 'Pro' : 'Ala';
    feedback.textContent = isMut 
      ? (currentLang === 'pt' ? '⚠️ Mutação pontual destabilizou hélice alfa. Risco de patogenicidade: 92%.' : '⚠️ Point mutation destabilized alpha helix. Pathogenicity: 92%.')
      : (currentLang === 'pt' ? 'Estrutura nativa estável. Dobra validada.' : 'Native fold stable. Verified conformation.');
    feedback.style.color = isMut ? 'var(--accent-red)' : 'var(--text-muted)';
  }
};

window.simulateTransit = function() {
  const planet = document.getElementById('planet-orb');
  const flux = document.getElementById('light-flux');
  if (!planet || !flux) return;

  // Animate planet across star
  animate(planet, { left: ['10%', '45%', '80%'] }, { duration: 2.5, easing: 'linear' })
    .finished.then(() => {
      setTimeout(() => {
        animate(planet, { left: ['80%', '10%'] }, { duration: 0.01 });
        flux.textContent = currentLang === 'pt' ? 'Flux Luminoso: 100%' : 'Luminosity Flux: 100%';
      }, 300);
    });

  // Simulate flux drop during transit
  setTimeout(() => {
    flux.textContent = currentLang === 'pt'
      ? 'Queda de Flux: 98.6% — Bioassinatura H₂O confirmada ✓'
      : 'Flux Drop: 98.6% — H₂O Biosignature confirmed ✓';
    animate(flux, { color: ['#00f0ff', '#00ff88'] }, { duration: 0.5 });
  }, 1200);
};

window.testNewMolecule = function() {
  const kd = (0.15 + Math.random() * 0.3).toFixed(2);
  document.getElementById('kd-val').textContent = `${kd} nM (Super-afinidade)`;
  document.getElementById('kd-bar').style.width = '96%';
};

window.testNewCrystal = function() {
  const status = document.getElementById('crystal-status');
  if (status) {
    status.textContent = currentLang === 'pt' 
      ? '✓ Cristal Sintetizado em Robô de Bancada (Acurácia: 99.1%)' 
      : '✓ Crystal Synthesized in Automated Lab (99.1% Accuracy)';
  }
};

window.injectQuantumNoise = function() {
  const latency = document.getElementById('q-latency');
  if (latency) {
    latency.textContent = '0.28 µs';
    latency.style.color = 'var(--accent-green)';
    setTimeout(() => { latency.style.color = 'var(--accent-cyan)'; }, 1000);
  }
};

window.runAlphaChipOpt = function() {
  const readout = document.getElementById('alphachip-readout');
  if (readout) {
    readout.textContent = currentLang === 'pt' 
      ? 'Consumo Energético: -23% | Latência de Clock: +12% Superior' 
      : 'Energy Consumption: -23% | Clock Latency: +12% Superior';
  }
};

// --- Language Switcher ---
window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('makeaibetter_lang', lang);
  
  document.getElementById('btn-lang-pt')?.classList.toggle('active', lang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', lang === 'en');
  
  applyScienceTranslations();
  renderActiveDomain();
};

function initLanguage() {
  const saved = localStorage.getItem('makeaibetter_lang');
  if (saved && (saved === 'pt' || saved === 'en')) {
    currentLang = saved;
  }
  document.getElementById('btn-lang-pt')?.classList.toggle('active', currentLang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', currentLang === 'en');
  applyScienceTranslations();
}

function applyScienceTranslations() {
  const dict = {
    pt: {
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
