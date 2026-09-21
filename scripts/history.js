/**
 * MAKE AI BETTER — History of Computing Interactive Engine
 * Powered by Motion (motion.dev)
 */

import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// --- Global State & i18n ---
let currentLang = 'pt';
let turingTape = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];
let turingHeadIdx = 0;
let turingInterval = null;
let turingState = 'q0';

// Backpropagation state
let bpWeights = { w1: 0.50, w2: 0.35 };
let bpInput = { x1: 0.8, x2: 0.2 };
let bpTarget = 1.0;

// Moore's Law Historic Dataset
const mooreData = {
  1971: { chip: "Intel 4004", count: "2.300 transistores" },
  1976: { chip: "MOS 6502 / Z80", count: "8.500 transistores" },
  1982: { chip: "Intel 80286", count: "134.000 transistores" },
  1989: { chip: "Intel 80486", count: "1,2 milhão de transistores" },
  1995: { chip: "Intel Pentium Pro", count: "5,5 milhões de transistores" },
  2000: { chip: "AMD Athlon / Pentium 4", count: "42 milhões de transistores" },
  2006: { chip: "Intel Core 2 Duo", count: "291 milhões de transistores" },
  2012: { chip: "NVIDIA Kepler GPU (K20)", count: "7,1 bilhões de transistores" },
  2017: { chip: "AMD EPYC / Apple A11", count: "19,2 bilhões de transistores" },
  2024: { chip: "NVIDIA Blackwell B200", count: "208 bilhões de transistores" },
  2026: { chip: "Wafers de IA & Co-processador Quântico", count: "500+ bilhões de transistores" }
};

// Bilingual Dictionary
const historyI18n = {
  pt: {
    nav_home: "Home",
    nav_history: "História da Computação",
    nav_science: "IA na Ciência",
    nav_benchmarks: "Radar",
    nav_manifesto: "Manifesto",
    nav_history_badge: "A Epopeia da Computação",
    timeline_nav_label: "CRONOLOGIA",
    history_badge: "90 Anos da História da Computação",
    history_hero_title: "A Epopeia da Computação",
    history_hero_subtitle: "Da Fita de Turing ao Salto Quântico do Willow e à Razão System-2",
    history_hero_lead: "Em 1936, Alan Turing concebeu a máquina que poderia computar qualquer pensamento formalizável. Nove décadas depois, a humanidade atinge a computação quântica abaixo do limiar de erro com o <strong>Google Willow</strong> e modelos de raciocínio deliberado com a <strong>OpenAI</strong>. Esta é a trajetória completa da inteligência mecânica.",
    btn_start_journey: "Iniciar a Viagem",
    btn_view_science_hub: "Explorar IA na Ciência",
    era_1_tag: "ERA 1 • 1936 – 1950",
    era_1_title: "O Oráculo Matemático e a Fita Infinita",
    era_1_p1: "Em 1936, no artigo revolucionário <em>\"On Computable Numbers\"</em>, o jovem matemático britânico <strong>Alan Mathison Turing</strong> formulou o conceito da <strong>Máquina Universal de Turing</strong>. Ele provou que um único dispositivo hipotético, lendo e escrevendo símbolos em uma fita de papel infinitamente longa, era capaz de simular o comportamento de qualquer outro calculador concebível.",
    era_1_p2: "Durante a Segunda Guerra Mundial, em Bletchley Park, o trabalho teórico de Turing tornou-se operacional. Ele desenhou a <strong>Bombe</strong> para decifrar as transmissões militares da máquina cifradora Enigma alemã, enquanto Tommy Flowers construía o <strong>Colossus</strong> (o primeiro computador digital eletrônico com 1.500 válvulas termiônicas). Em 1950, Turing publicou o seminal *\"Computing Machinery and Intelligence\"*, formulando o Teste de Turing.",
    widget_turing_title: "Simulador Interativo: A Fita da Máquina de Turing",
    widget_turing_status: "Emulador Ativo",
    turing_btn_step: "Executar 1 Ciclo (Step)",
    turing_btn_auto: "Execução Contínua",
    turing_btn_auto_stop: "Pausar Execução",
    turing_btn_reset: "Reiniciar Fita",
    turing_explain: "Regra: Inverter bits 0 ↔ 1 e avançar o cabeçote.",
    era_1_t1: "Separação formal entre Hardware (máquina) e Software (programa gravado na fita).",
    era_1_t2: "Bletchley Park salvou milhões de vidas ao automatizar a criptoanálise militar.",
    era_1_t3: "Origem filosófica do Teste de Turing e do campo da Inteligência Artificial.",
    era_2_tag: "ERA 2 • 1945 – 1960",
    era_2_title: "A Arquitetura Von Neumann e o Milagre do Transistor",
    era_2_p1: "Os primeiros computadores eletrônicos gigantes, como o <strong>ENIAC (1946)</strong> com suas 18.000 válvulas, ocupavam salas inteiras e quebravam constantemente pelo calor e queima de filamentos. Em 1945, <strong>John von Neumann</strong> distribuiu seu relatório sobre o EDVAC, definindo o conceito de <strong>Programa Armazenado</strong>: dados e instruções compartilham a mesma memória principal. Essa estrutura governa até hoje quase todos os computadores do planeta.",
    era_2_p2: "Em 16 de dezembro de 1947, nos Bell Laboratories, <strong>John Bardeen, Walter Brattain e William Shockley</strong> inventaram o <strong>transistor de ponto de contato</strong>. Um interruptor de estado sólido sem partes móveis, frio e minúsculo. Em 1956, na conferência de Dartmouth, John McCarthy cunhou oficialmente o termo <strong>\"Inteligência Artificial\"</strong>.",
    widget_transistor_title: "Comparador Físico: Válvula Termiônica vs. Transistor de Silício",
    valve_label: "Válvula Termiônica (1945)",
    transistor_label: "Transistor de Estado Sólido (1947+)",
    era_3_tag: "ERA 3 • 1960 – 1980",
    era_3_title: "Circuitos Integrados, Lei de Moore e o Intel 4004",
    era_3_p1: "Com a invenção do circuito integrado por Robert Noyce e Jack Kilby, múltiplos transistores puderam ser impressos em uma única lâmina de silício. Em 1965, Gordon Moore formulou a previsão empírica mais lucrativa da história: a <strong>Lei de Moore</strong>.",
    era_3_p2: "Em 1971, a Intel lançou o <strong>Intel 4004</strong>: o primeiro microprocessador comercial em um único chip (2.300 transistores). Paralelamente, nos Bell Labs nasciam o <strong>UNIX</strong> e a linguagem <strong>C</strong>, enquanto a <strong>ARPANET</strong> realizava sua primeira transmissão em 1969.",
    widget_moore_title: "Visualizador da Lei de Moore: Crescimento Exponencial de Transistores",
    moore_slider_label: "Selecione o Ano Histórico:",
    era_4_tag: "ERA 4 • 1980 – 2000",
    era_4_title: "Computação Pessoal, a World Wide Web e o Backprop",
    era_4_p1: "Os computadores deixaram os data centers e invadiram os lares com o <strong>IBM PC (1981)</strong> e o <strong>Apple Macintosh (1984)</strong> com mouse e janelas. Em 1989, no CERN, <strong>Tim Berners-Lee</strong> inventou a World Wide Web.",
    era_4_p2: "Em 1986, <strong>David Rumelhart, Geoffrey Hinton e Ronald Williams</strong> popularizaram o algoritmo de <strong>Retropropagação (Backpropagation)</strong>, viabilizando o treino de redes neurais profundas.",
    widget_backprop_title: "Simulador de Backpropagation: Ajuste Sináptico de Erro",
    btn_train_step: "Executar Passo de Gradiente Descendente (Train Step)",
    btn_reset_nn: "Resetar Pesos",
    era_5_tag: "ERA 5 • 2000 – 2016",
    era_5_title: "Computação em Nuvem, GPUs CUDA e o Big Bang do Deep Learning",
    era_5_p1: "A computação em nuvem (AWS) e a arquitetura <strong>NVIDIA CUDA (2006)</strong> liberaram o poder do cálculo massivamente paralelo para tensores e matrizes.",
    era_5_p2: "Em 2012, a <strong>AlexNet</strong> esmagou os concorrentes no ImageNet, desencadeando a era moderna do Deep Learning. Em 2016, o <strong>AlphaGo</strong> derrotou Lee Sedol no jogo de Go.",
    era_6_tag: "ERA 6 • 2017 – 2024",
    era_6_title: "A Revolução dos Transformers e a Explosão da IA Generativa",
    era_6_p1: "Em 2017, o paper <em>\"Attention Is All You Need\"</em> introduziu a arquitetura <strong>Transformer</strong>, viabilizando o treino paralelo de bilhões de parâmetros na web.",
    era_6_p2: "O lançamento do <strong>ChatGPT em 2022</strong> e modelos multimodais nativos (GPT-4o, Gemini 1.5) tornaram a IA generativa um fenômeno universal.",
    era_7_tag: "ERA 7 • 2024 – 2026 (A FRONTEIRA ATUAL)",
    era_7_title: "A Dupla Fronteira: O Salto Quântico (Google Willow) e o Raciocínio System-2 (OpenAI)",
    era_7_p1: "Em 2026, a história da computação atinge sua mais espetacular convergência simultânea entre física de hardware e inteligência cognitiva:",
    willow_sim_title: "Simulador da Malha de Qubits do Willow:",
    system2_sim_title: "Árvore de Raciocínio System-2 em Tempo Real:",
    btn_simulate_thinking: "Simular Deliberação Cognitiva (Thinking Tokens)",
    history_conclusion_title: "O Encontro de Duas Trajetórias Históricas",
    history_conclusion_text: "Em 1936, Turing provou que o cálculo podia ser formalizado. Em 2026, com o chip quântico <strong>Willow</strong> dominando os estados atômicos e a <strong>OpenAI</strong> dominando a verificação de raciocínio passo a passo, entramos em uma era onde o cálculo e a razão tornam-se ilimitados.",
    btn_go_science: "Ver como a IA Acelera a Ciência Global",
    btn_return_home: "Voltar ao Radar Principal"
  },
  en: {
    nav_home: "Home",
    nav_history: "History of Computing",
    nav_science: "AI in Science",
    nav_benchmarks: "Radar",
    nav_manifesto: "Manifesto",
    nav_history_badge: "The Epic of Computing",
    timeline_nav_label: "CHRONOLOGY",
    history_badge: "90 Years of Computing History",
    history_hero_title: "The Epic of Computing",
    history_hero_subtitle: "From Turing's Infinite Tape to Google Willow and OpenAI System-2",
    history_hero_lead: "In 1936, Alan Turing conceived the universal engine of computation. Nine decades later, humanity achieved below-threshold quantum error correction with <strong>Google Willow</strong> and deliberate System-2 reasoning with <strong>OpenAI</strong>.",
    btn_start_journey: "Start the Journey",
    btn_view_science_hub: "Explore AI for Science",
    era_1_tag: "ERA 1 • 1936 – 1950",
    era_1_title: "The Mathematical Oracle & The Infinite Tape",
    era_1_p1: "In 1936, Alan Turing formulated the Universal Turing Machine, proving that a single theoretical device manipulating symbols on an infinite paper tape could simulate any conceivable computer.",
    era_1_p2: "During WWII at Bletchley Park, Turing designed the Bombe to break Enigma ciphers, while Tommy Flowers built Colossus. In 1950, Turing published his seminal paper introducing the Turing Test.",
    widget_turing_title: "Interactive Simulator: Turing Machine Tape",
    widget_turing_status: "Emulator Active",
    turing_btn_step: "Run 1 Cycle (Step)",
    turing_btn_auto: "Continuous Run",
    turing_btn_auto_stop: "Pause Run",
    turing_btn_reset: "Reset Tape",
    turing_explain: "Rule: Invert bits 0 ↔ 1 and advance head right.",
    era_1_t1: "Formal split between Hardware and Software stored on tape.",
    era_1_t2: "Bletchley Park saved millions of lives by automating cryptanalysis.",
    era_1_t3: "Philosophical foundation of the Turing Test and Artificial Intelligence.",
    era_2_tag: "ERA 2 • 1945 – 1960",
    era_2_title: "Von Neumann Architecture & The Solid-State Transistor",
    era_2_p1: "ENIAC's 18,000 vacuum tubes burnt constantly. In 1945, John von Neumann defined the Stored-Program Architecture: unifying data and instructions in a single memory space.",
    era_2_p2: "In 1947, Bardeen, Brattain, and Shockley invented the solid-state transistor at Bell Labs. In 1956, the Dartmouth workshop officially coined 'Artificial Intelligence'.",
    widget_transistor_title: "Physical Comparison: Vacuum Tube vs. Silicon Transistor",
    valve_label: "Vacuum Tube (1945)",
    transistor_label: "Solid-State Transistor (1947+)",
    era_3_tag: "ERA 3 • 1960 – 1980",
    era_3_title: "Integrated Circuits, Moore's Law & Intel 4004",
    era_3_p1: "Integrated circuits enabled multiple transistors on a single silicon slice. Gordon Moore formulated Moore's Law in 1965.",
    era_3_p2: "In 1971, Intel launched the 4004 microprocessor. Concurrently, UNIX, C, and ARPANET laid the foundations of the global internet.",
    widget_moore_title: "Moore's Law Visualizer: Exponential Transistor Growth",
    moore_slider_label: "Select Historic Year:",
    era_4_tag: "ERA 4 • 1980 – 2000",
    era_4_title: "Personal Computers, The World Wide Web & Backprop",
    era_4_p1: "The IBM PC (1981) and Apple Macintosh (1984) brought computing to households. In 1989, Tim Berners-Lee invented the World Wide Web at CERN.",
    era_4_p2: "Rumelhart, Hinton, and Williams repopularized Backpropagation in 1986, unlocking multi-layer neural network training.",
    widget_backprop_title: "Backpropagation Simulator: Synaptic Error Weight Adjustment",
    btn_train_step: "Run Gradient Descent Step",
    btn_reset_nn: "Reset Weights",
    era_5_tag: "ERA 5 • 2000 – 2016",
    era_5_title: "Cloud Computing, CUDA GPUs & The Deep Learning Big Bang",
    era_5_p1: "NVIDIA CUDA (2006) unlocked massive GPU parallelism for tensor algebra.",
    era_5_p2: "AlexNet shattered ImageNet in 2012, sparking the modern deep learning era. In 2016, AlphaGo defeated Go champion Lee Sedol.",
    era_6_tag: "ERA 6 • 2017 – 2024",
    era_6_title: "The Transformer Revolution & Generative AI Boom",
    era_6_p1: "'Attention Is All You Need' (2017) introduced the Transformer, enabling massive parallel scaling on human language.",
    era_6_p2: "ChatGPT (2022) and native multimodal models turned generative AI into an ambient layer of human knowledge.",
    era_7_tag: "ERA 7 • 2024 – 2026 (THE CURRENT FRONTIER)",
    era_7_title: "The Dual Frontier: Quantum Leap (Google Willow) & System-2 Reasoning (OpenAI)",
    era_7_p1: "In 2026, computing converges between quantum physical coherence and deliberate System-2 cognition:",
    willow_sim_title: "Willow Superconducting Qubit Lattice Simulator:",
    system2_sim_title: "Real-Time System-2 Deliberation Tree:",
    btn_simulate_thinking: "Simulate Cognitive Deliberation (Thinking Tokens)",
    history_conclusion_title: "The Convergence of Two Epochal Trajectories",
    history_conclusion_text: "In 1936, Turing formalized computation. In 2026, Google Willow conquers quantum error correction while OpenAI unlocks step-by-step verified reasoning.",
    btn_go_science: "Explore How AI Accelerates Global Science",
    btn_return_home: "Return to Main Radar"
  }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMotionAnimations();
  renderTuringTape();
  renderWillowLattice();
  setupScrubberObserver();
});

// --- Motion.dev Animations ---
function initMotionAnimations() {
  // 1. Scroll-linked progress bar
  try {
    scroll(animate("#scroll-progress-bar", { width: ["0%", "100%"] }));
  } catch (err) {
    console.warn("Motion scroll binding fallback:", err);
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (window.scrollY / h) * 100;
      const bar = document.getElementById('scroll-progress-bar');
      if (bar) bar.style.width = `${pct}%`;
    });
  }

  // 2. Animate cards into view
  document.querySelectorAll('.motion-card').forEach((card) => {
    try {
      animate(card, { opacity: [0.2, 1], y: [30, 0] }, { duration: 0.6, easing: "ease-out" });
    } catch (e) {
      // Fallback
    }
  });
}

// --- Scrubber Active Indicator on Scroll ---
function setupScrubberObserver() {
  const sections = document.querySelectorAll('.epoch-section');
  const dots = document.querySelectorAll('.scrub-dot');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 200;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    dots.forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('href') === `#${currentId}`);
    });
  });
}

// --- Interactive Turing Machine ---
function renderTuringTape() {
  const container = document.getElementById('turing-tape');
  if (!container) return;

  container.innerHTML = turingTape.map((val, idx) => `
    <div class="turing-cell ${idx === turingHeadIdx ? 'active-cell' : ''}" id="cell-${idx}">
      ${val}
    </div>
  `).join('');

  // Position pointer
  const head = document.getElementById('turing-head');
  const stateBadge = document.getElementById('turing-state');
  if (head && stateBadge) {
    head.style.transform = `translateX(${(turingHeadIdx - 4.5) * 58}px)`;
    stateBadge.textContent = `Estado: ${turingState} (Pos: ${turingHeadIdx})`;
  }
}

window.stepTuringMachine = function() {
  if (turingHeadIdx >= turingTape.length) {
    turingHeadIdx = 0;
    turingState = 'q0';
  }

  // Invert bit
  turingTape[turingHeadIdx] = turingTape[turingHeadIdx] === 1 ? 0 : 1;
  turingHeadIdx++;
  turingState = turingHeadIdx % 2 === 0 ? 'q1' : 'q0';

  renderTuringTape();
};

window.toggleTuringAuto = function() {
  const btn = document.getElementById('turing-run-text');
  if (turingInterval) {
    clearInterval(turingInterval);
    turingInterval = null;
    if (btn) btn.textContent = historyI18n[currentLang].turing_btn_auto;
  } else {
    turingInterval = setInterval(() => {
      window.stepTuringMachine();
    }, 450);
    if (btn) btn.textContent = historyI18n[currentLang].turing_btn_auto_stop;
  }
};

window.resetTuringMachine = function() {
  if (turingInterval) {
    clearInterval(turingInterval);
    turingInterval = null;
    const btn = document.getElementById('turing-run-text');
    if (btn) btn.textContent = historyI18n[currentLang].turing_btn_auto;
  }
  turingTape = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];
  turingHeadIdx = 0;
  turingState = 'q0';
  renderTuringTape();
};

// --- Interactive Moore's Law Slider ---
window.updateMooreDisplay = function(year) {
  const data = mooreData[year] || mooreData[1971];
  document.getElementById('moore-year').textContent = `Ano: ${year}`;
  document.getElementById('moore-chip').textContent = `Chip: ${data.chip}`;
  document.getElementById('moore-count').textContent = `Transistores: ${data.count}`;
};

// --- Interactive Backpropagation Simulator ---
window.stepBackpropagation = function() {
  // Simple perceptron with sigmoid
  const rawOut = bpInput.x1 * bpWeights.w1 + bpInput.x2 * bpWeights.w2;
  const sigmoid = 1 / (1 + Math.exp(-rawOut));
  const loss = Math.pow(bpTarget - sigmoid, 2);

  // Gradient step (learning rate 0.2)
  const dLoss_dOut = 2 * (sigmoid - bpTarget);
  const dOut_dRaw = sigmoid * (1 - sigmoid);
  
  bpWeights.w1 -= 0.2 * dLoss_dOut * dOut_dRaw * bpInput.x1;
  bpWeights.w2 -= 0.2 * dLoss_dOut * dOut_dRaw * bpInput.x2;

  document.getElementById('w1-val').textContent = `w1: ${bpWeights.w1.toFixed(3)}`;
  document.getElementById('w2-val').textContent = `w2: ${bpWeights.w2.toFixed(3)}`;
  document.getElementById('node-out').textContent = `Y: ${sigmoid.toFixed(3)}`;
  document.getElementById('loss-val').textContent = `Loss: ${loss.toFixed(4)}`;

  // Pulse animation on node
  const node = document.getElementById('node-out');
  if (node) {
    node.style.transform = 'scale(1.15)';
    setTimeout(() => { node.style.transform = 'scale(1)'; }, 200);
  }
};

window.resetBackprop = function() {
  bpWeights = { w1: 0.50, w2: 0.35 };
  document.getElementById('w1-val').textContent = `w1: 0.50`;
  document.getElementById('w2-val').textContent = `w2: 0.35`;
  document.getElementById('node-out').textContent = `Y: 0.47`;
  document.getElementById('loss-val').textContent = `Loss: 0.530`;
};

// --- Interactive Google Willow Lattice ---
function renderWillowLattice() {
  const grid = document.getElementById('qubit-grid');
  if (!grid) return;

  grid.innerHTML = Array.from({ length: 25 }).map((_, i) => `
    <div class="qubit-node" onclick="pulseQubit(this, ${i})">q${i}</div>
  `).join('');
}

window.pulseQubit = function(el, i) {
  el.classList.add('excited');
  const err = (0.000010 + Math.random() * 0.000005).toFixed(6);
  document.getElementById('qubit-error-rate').textContent = `Qubit q${i} entrelaçado. Taxa de Erro: ${err}% (Estável)`;
  setTimeout(() => { el.classList.remove('excited'); }, 600);
};

// --- Interactive OpenAI System-2 Reasoning Simulator ---
const reasoningSimSteps = [
  [
    { text: "✓ Etapa 1: Formalizando problema no espaço matemático", ok: true },
    { text: "✗ Hipótese 2A: Dedução heurística falhou (Rejeitada via PRM)", ok: false },
    { text: "✓ Hipótese 2B: Teorema provado em Lean 4", ok: true },
    { text: "✓ Resposta verificada: AIME 2026 Score 100%", ok: true }
  ],
  [
    { text: "✓ Etapa 1: Ingestão de 1M tokens de código", ok: true },
    { text: "✓ Etapa 2: Localização do bug de memória em C++", ok: true },
    { text: "✗ Tentativa 1 de patch: Regressão em teste unitário", ok: false },
    { text: "✓ Patch final: Validação completa em micro-sandbox", ok: true }
  ]
];
let simIndex = 0;

window.runReasoningSimulation = function() {
  const container = document.getElementById('reasoning-tree');
  if (!container) return;

  simIndex = (simIndex + 1) % reasoningSimSteps.length;
  const steps = reasoningSimSteps[simIndex];

  container.innerHTML = steps.map(s => `
    <div class="tree-step ${s.ok ? 'step-ok' : 'step-bad'}">${s.text}</div>
  `).join('');
};

// --- Language Switching Logic ---
window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('makeaibetter_lang', lang);
  
  document.getElementById('btn-lang-pt')?.classList.toggle('active', lang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', lang === 'en');
  
  applyHistoryTranslations();
};

function initLanguage() {
  const saved = localStorage.getItem('makeaibetter_lang');
  if (saved && (saved === 'pt' || saved === 'en')) {
    currentLang = saved;
  }
  document.getElementById('btn-lang-pt')?.classList.toggle('active', currentLang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', currentLang === 'en');
  applyHistoryTranslations();
}

function applyHistoryTranslations() {
  const dict = historyI18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}
