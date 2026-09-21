/**
 * MAKE AI BETTER — History of Computing Interactive Engine
 * Powered by Motion One (motion.dev) + IntersectionObserver
 * Date: 2026-09-21
 */

import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// ─── Global State ────────────────────────────────────────────────────────────
let currentLang = 'pt';
let turingTape = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];
let turingHeadIdx = 0;
let turingInterval = null;
let turingState = 'q0';

// Backpropagation state
let bpWeights = { w1: 0.50, w2: 0.35 };
const bpInput = { x1: 0.8, x2: 0.2 };
const bpTarget = 1.0;

// Moore's Law Historic Dataset
const mooreData = {
  1971: { chip: "Intel 4004", count: "2.300", raw: 2300 },
  1976: { chip: "MOS 6502 / Z80", count: "8.500", raw: 8500 },
  1982: { chip: "Intel 80286", count: "134.000", raw: 134000 },
  1989: { chip: "Intel 80486", count: "1,2M", raw: 1200000 },
  1995: { chip: "Intel Pentium Pro", count: "5,5M", raw: 5500000 },
  2000: { chip: "AMD Athlon / Pentium 4", count: "42M", raw: 42000000 },
  2006: { chip: "Intel Core 2 Duo", count: "291M", raw: 291000000 },
  2012: { chip: "NVIDIA Kepler GPU (K20)", count: "7,1B", raw: 7100000000 },
  2017: { chip: "AMD EPYC / Apple A11", count: "19,2B", raw: 19200000000 },
  2024: { chip: "NVIDIA Blackwell B200", count: "208B", raw: 208000000000 },
  2026: { chip: "Wafers de IA & Co-proc Quântico", count: "500B+", raw: 500000000000 }
};

// ─── Bilingual Dictionary ─────────────────────────────────────────────────────
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
    era_1_p2: "Durante a Segunda Guerra Mundial, em Bletchley Park, o trabalho teórico de Turing tornou-se operacional. Ele desenhou a <strong>Bombe</strong> para decifrar as transmissões militares da máquina cifradora Enigma alemã, enquanto Tommy Flowers construía o <strong>Colossus</strong> (o primeiro computador digital eletrônico com 1.500 válvulas termiônicas). Em 1950, Turing publicou o seminal <em>\"Computing Machinery and Intelligence\"</em>, formulando o Teste de Turing.",
    widget_turing_title: "Simulador Interativo: A Fita da Máquina de Turing",
    widget_turing_status: "Emulador Ativo",
    turing_btn_step: "Executar 1 Ciclo (Step)",
    turing_btn_auto: "Execução Contínua",
    turing_btn_auto_stop: "Pausar Execução",
    turing_btn_reset: "Reiniciar Fita",
    turing_explain: "Regra: Inverter bits 0 ↔ 1 e avançar à direita.",
    era_1_t1: "Separação formal entre Hardware (máquina) e Software (programa gravado na fita).",
    era_1_t2: "Bletchley Park salvou milhões de vidas ao automatizar a criptoanálise militar.",
    era_1_t3: "Origem filosófica do Teste de Turing e do campo da Inteligência Artificial.",
    era_2_tag: "ERA 2 • 1945 – 1960",
    era_2_title: "A Arquitetura Von Neumann e o Milagre do Transistor",
    era_2_p1: "Os primeiros computadores eletrônicos gigantes, como o <strong>ENIAC (1946)</strong> com suas 18.000 válvulas, ocupavam salas inteiras e quebravam constantemente pelo calor e queima de filamentos. Em 1945, <strong>John von Neumann</strong> distribuiu seu relatório sobre o EDVAC, definindo o conceito de <strong>Programa Armazenado</strong>: dados e instruções compartilham a mesma memória principal, processados por uma Unidade de Controle e uma ALU.",
    era_2_p2: "Em 16 de dezembro de 1947, nos Bell Laboratories, <strong>John Bardeen, Walter Brattain e William Shockley</strong> inventaram o <strong>transistor de ponto de contato de germânio</strong>. Um interruptor de estado sólido sem partes móveis, frio, minúsculo e infinitamente mais rápido que as válvulas. Em 1956, na conferência de Dartmouth, John McCarthy cunhou oficialmente o termo <strong>\"Inteligência Artificial\"</strong>.",
    widget_transistor_title: "Comparador Físico: Válvula Termiônica vs. Transistor de Silício",
    valve_label: "Válvula Termiônica (1945)",
    transistor_label: "Transistor de Estado Sólido (1947+)",
    era_3_tag: "ERA 3 • 1960 – 1980",
    era_3_title: "Circuitos Integrados, Lei de Moore e o Intel 4004",
    era_3_p1: "Com a invenção do circuito integrado por Robert Noyce e Jack Kilby, múltiplos transistores puderam ser impressos em uma única lâmina de silício. Em 1965, Gordon Moore formulou a previsão empírica mais lucrativa da história: a <strong>Lei de Moore</strong>.",
    era_3_p2: "Em 1971, a Intel lançou o <strong>Intel 4004</strong>: o primeiro microprocessador comercial em um único chip, contendo 2.300 transistores. Paralelamente, nos Bell Labs nasciam o sistema operacional <strong>UNIX</strong> e a linguagem <strong>C</strong> (Dennis Ritchie e Ken Thompson), enquanto a <strong>ARPANET</strong> realizava sua primeira transmissão em 1969, tecendo as fundações da infraestrutura digital global.",
    widget_moore_title: "Visualizador da Lei de Moore: Crescimento Exponencial de Transistores",
    moore_slider_label: "Selecione o Ano Histórico:",
    era_4_tag: "ERA 4 • 1980 – 2000",
    era_4_title: "Computação Pessoal, a World Wide Web e o Backprop",
    era_4_p1: "Os computadores finalmente deixaram os data centers corporativos e invadiram as residências. O lançamento do <strong>IBM PC (1981)</strong> e do icônico <strong>Apple Macintosh (1984)</strong> popularizou a interface gráfica com janelas, ícones e mouse. Em 1989, no CERN, <strong>Tim Berners-Lee</strong> inventou a World Wide Web (HTTP, HTML e URLs), conectando a humanidade em uma única malha de hipertexto.",
    era_4_p2: "No campo da IA, após um longo \"inverno\", <strong>David Rumelhart, Geoffrey Hinton e Ronald Williams</strong> publicaram em 1986 o algoritmo de <strong>Retropropagação (Backpropagation)</strong>, provando que redes neurais multicamadas podiam aprender representações internas complexas através do gradiente descendente.",
    widget_backprop_title: "Simulador de Backpropagation: Ajuste Sináptico de Erro",
    btn_train_step: "Executar Passo de Gradiente Descendente (Train Step)",
    btn_reset_nn: "Resetar Pesos",
    era_5_tag: "ERA 5 • 2000 – 2016",
    era_5_title: "Computação em Nuvem, GPUs CUDA e o Big Bang do Deep Learning",
    era_5_p1: "Na virada do milênio, o cálculo migrou para os data centers elásticos com a computação em nuvem (AWS EC2). Paralelamente, a <strong>NVIDIA</strong> lançou em 2006 a plataforma <strong>CUDA</strong>, desbloqueando o poder de processamento massivamente paralelo das GPUs para álgebra linear e matrizes matemáticas.",
    era_5_p2: "Em outubro de 2012, <strong>Alex Krizhevsky, Ilya Sutskever e Geoffrey Hinton</strong> venceram o concurso ImageNet com a <strong>AlexNet</strong>, esmagando métodos clássicos de visão computacional e iniciando o boom moderno do Deep Learning. Quatro anos depois, em março de 2016, o <strong>AlphaGo</strong> da Google DeepMind chocou o mundo ao derrotar Lee Sedol no milenar jogo de Go.",
    era_6_tag: "ERA 6 • 2017 – 2024",
    era_6_title: "A Revolução dos Transformers e a Explosão da IA Generativa",
    era_6_p1: "Em junho de 2017, oito pesquisadores do Google publicaram o paper histórico <em>\"Attention Is All You Need\"</em>. A arquitetura <strong>Transformer</strong> eliminou redes recorrentes em favor do mecanismo de <strong>Self-Attention (Auto-Atenção)</strong>, permitindo que supercomputadores treinassem em paralelo com bilhões de páginas da web sem gargalos sequenciais.",
    era_6_p2: "O salto com o GPT-3 (2020) e o lançamento global do <strong>ChatGPT (Novembro de 2022)</strong> transformaram a IA no produto de tecnologia de adoção mais acelerada da história humana. O foco expandiu-se rapidamente para a multimodalidade nativa (visão, áudio e código unificados) com GPT-4o e Gemini 1.5.",
    era_7_tag: "ERA 7 • 2024 – 2026 (A FRONTEIRA ATUAL)",
    era_7_title: "A Dupla Fronteira: O Salto Quântico (Google Willow) e o Raciocínio System-2 (OpenAI)",
    era_7_p1: "Em 2026, a história da computação atinge sua mais espetacular convergência simultânea entre física de hardware e inteligência cognitiva:",
    willow_sim_title: "Simulador da Malha de Qubits do Willow:",
    system2_sim_title: "Árvore de Raciocínio System-2 em Tempo Real:",
    btn_simulate_thinking: "Simular Deliberação Cognitiva (Thinking Tokens)",
    history_conclusion_title: "O Encontro de Duas Trajetórias Históricas",
    history_conclusion_text: "Em 1936, Turing provou que o cálculo podia ser formalizado. Em 2026, com o chip quântico <strong>Willow</strong> dominando os estados atômicos e a <strong>OpenAI</strong> dominando a verificação de raciocínio passo a passo, entramos em uma era onde o cálculo e a razão tornam-se ilimitados. A missão da <strong>Make AI Better</strong> é assegurar que esse poder incalculável seja transparente, seguro e acessível a toda a humanidade.",
    btn_go_science: "Ver como a IA Acelera a Ciência Global",
    btn_return_home: "Voltar ao Radar Principal",
    footer_desc: "Iniciativa de pesquisa independente e aberta para o avanço seguro e rigoroso da inteligência artificial.",
    footer_col_nav: "Navegação",
    footer_col_eras: "Eras Principais",
    footer_col_connect: "Conectar"
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
    history_hero_lead: "In 1936, Alan Turing conceived the universal engine of computation. Nine decades later, humanity achieved below-threshold quantum error correction with <strong>Google Willow</strong> and deliberate System-2 reasoning with <strong>OpenAI</strong>. This is the complete trajectory of mechanical intelligence.",
    btn_start_journey: "Start the Journey",
    btn_view_science_hub: "Explore AI for Science",
    era_1_tag: "ERA 1 • 1936 – 1950",
    era_1_title: "The Mathematical Oracle & The Infinite Tape",
    era_1_p1: "In 1936, in the revolutionary paper <em>\"On Computable Numbers\"</em>, British mathematician <strong>Alan Mathison Turing</strong> formulated the <strong>Universal Turing Machine</strong>. He proved that a single hypothetical device, reading and writing symbols on an infinitely long paper tape, could simulate any conceivable calculating machine.",
    era_1_p2: "During WWII at Bletchley Park, Turing's theoretical work became operational. He designed the <strong>Bombe</strong> to break German Enigma cipher transmissions, while Tommy Flowers built <strong>Colossus</strong> (the first electronic digital computer with 1,500 vacuum tubes). In 1950, Turing published the seminal <em>\"Computing Machinery and Intelligence\"</em>, introducing the Turing Test.",
    widget_turing_title: "Interactive Simulator: The Turing Machine Tape",
    widget_turing_status: "Emulator Active",
    turing_btn_step: "Run 1 Cycle (Step)",
    turing_btn_auto: "Continuous Run",
    turing_btn_auto_stop: "Pause Run",
    turing_btn_reset: "Reset Tape",
    turing_explain: "Rule: Invert bits 0 ↔ 1 and advance head right.",
    era_1_t1: "Formal split between Hardware (machine) and Software (program on tape).",
    era_1_t2: "Bletchley Park saved millions of lives by automating military cryptanalysis.",
    era_1_t3: "Philosophical origin of the Turing Test and the field of Artificial Intelligence.",
    era_2_tag: "ERA 2 • 1945 – 1960",
    era_2_title: "Von Neumann Architecture & The Solid-State Transistor",
    era_2_p1: "The first giant electronic computers, like the <strong>ENIAC (1946)</strong> with 18,000 vacuum tubes, filled entire rooms and failed constantly from heat. In 1945, <strong>John von Neumann</strong> published his EDVAC report, defining the <strong>Stored-Program Architecture</strong>: data and instructions share the same main memory, processed by a Control Unit and ALU. This structure governs almost all computers to this day.",
    era_2_p2: "On December 16, 1947, at Bell Laboratories, <strong>John Bardeen, Walter Brattain, and William Shockley</strong> invented the <strong>point-contact germanium transistor</strong> — a solid-state switch with no moving parts, cool, tiny, and infinitely faster than vacuum tubes. In 1956 at Dartmouth, John McCarthy officially coined the term <strong>\"Artificial Intelligence\"</strong>.",
    widget_transistor_title: "Physical Comparison: Vacuum Tube vs. Silicon Transistor",
    valve_label: "Vacuum Tube (1945)",
    transistor_label: "Solid-State Transistor (1947+)",
    era_3_tag: "ERA 3 • 1960 – 1980",
    era_3_title: "Integrated Circuits, Moore's Law & The Intel 4004",
    era_3_p1: "With the invention of the integrated circuit by Robert Noyce and Jack Kilby, multiple transistors could be printed on a single silicon wafer. In 1965, Gordon Moore formulated the most profitable empirical prediction in history: <strong>Moore's Law</strong>.",
    era_3_p2: "In 1971, Intel launched the <strong>Intel 4004</strong>: the first commercial single-chip microprocessor with 2,300 transistors. Concurrently, Bell Labs birthed <strong>UNIX</strong> and the <strong>C language</strong> (Dennis Ritchie and Ken Thompson), while <strong>ARPANET</strong> made its first transmission in 1969, weaving the foundations of the global digital infrastructure.",
    widget_moore_title: "Moore's Law Visualizer: Exponential Transistor Growth",
    moore_slider_label: "Select Historic Year:",
    era_4_tag: "ERA 4 • 1980 – 2000",
    era_4_title: "Personal Computers, The World Wide Web & Backprop",
    era_4_p1: "Computers finally left corporate data centers and invaded homes. The <strong>IBM PC (1981)</strong> and iconic <strong>Apple Macintosh (1984)</strong> popularized the graphical interface with windows, icons, and the mouse. In 1989, at CERN, <strong>Tim Berners-Lee</strong> invented the World Wide Web (HTTP, HTML, and URLs), connecting humanity in a single hypertext web.",
    era_4_p2: "In AI, after a long \"winter\", <strong>David Rumelhart, Geoffrey Hinton, and Ronald Williams</strong> published the <strong>Backpropagation</strong> algorithm in 1986, proving that multilayer neural networks could learn complex internal representations through gradient descent.",
    widget_backprop_title: "Backpropagation Simulator: Synaptic Error Weight Adjustment",
    btn_train_step: "Run Gradient Descent Step (Train Step)",
    btn_reset_nn: "Reset Weights",
    era_5_tag: "ERA 5 • 2000 – 2016",
    era_5_title: "Cloud Computing, CUDA GPUs & The Deep Learning Big Bang",
    era_5_p1: "At the turn of the millennium, computation migrated to elastic data centers with cloud computing (AWS EC2). Concurrently, <strong>NVIDIA</strong> launched the <strong>CUDA</strong> platform in 2006, unlocking massively parallel GPU power for linear algebra and matrix operations.",
    era_5_p2: "In October 2012, <strong>Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton</strong> won ImageNet with <strong>AlexNet</strong>, crushing classical computer vision methods and launching the modern Deep Learning boom. In March 2016, <strong>AlphaGo</strong> shocked the world by defeating Lee Sedol at Go.",
    era_6_tag: "ERA 6 • 2017 – 2024",
    era_6_title: "The Transformer Revolution & The Generative AI Boom",
    era_6_p1: "In June 2017, eight Google researchers published the historic paper <em>\"Attention Is All You Need\"</em>. The <strong>Transformer</strong> architecture replaced recurrent networks with the <strong>Self-Attention mechanism</strong>, enabling supercomputers to train in parallel on billions of web pages without sequential bottlenecks.",
    era_6_p2: "The leap with GPT-3 (2020) and the global launch of <strong>ChatGPT (November 2022)</strong> turned AI into the fastest-adopted technology product in human history. Focus rapidly expanded to native multimodality (vision, audio, and code unified) with GPT-4o and Gemini 1.5.",
    era_7_tag: "ERA 7 • 2024 – 2026 (THE CURRENT FRONTIER)",
    era_7_title: "The Dual Frontier: Quantum Leap (Google Willow) & System-2 Reasoning (OpenAI)",
    era_7_p1: "In 2026, computing history reaches its most spectacular simultaneous convergence between hardware physics and cognitive intelligence:",
    willow_sim_title: "Willow Superconducting Qubit Lattice Simulator:",
    system2_sim_title: "Real-Time System-2 Deliberation Tree:",
    btn_simulate_thinking: "Simulate Cognitive Deliberation (Thinking Tokens)",
    history_conclusion_title: "The Convergence of Two Epochal Trajectories",
    history_conclusion_text: "In 1936, Turing formalized computation. In 2026, Google Willow conquers quantum error correction below threshold while OpenAI unlocks step-by-step verified reasoning. The mission of <strong>Make AI Better</strong> is to ensure this immeasurable power remains transparent, safe, and accessible to all humanity.",
    btn_go_science: "Explore How AI Accelerates Global Science",
    btn_return_home: "Return to Main Radar",
    footer_desc: "Independent open research initiative for the safe and rigorous advancement of artificial intelligence.",
    footer_col_nav: "Navigation",
    footer_col_eras: "Key Eras",
    footer_col_connect: "Connect"
  }
};

// ─── Initialization ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initScrollProgress();
  initScrollRevealAnimations();
  renderTuringTape();
  renderWillowLattice();
  initMooreSlider();
  setupScrubberObserver();
  animateHero();
});

// ─── Hero Entry Animation ─────────────────────────────────────────────────────
function animateHero() {
  const badge  = document.querySelector('.history-hero .hero-badge');
  const title  = document.querySelector('.history-title');
  const lead   = document.querySelector('.history-lead');
  const actions = document.querySelector('.hero-action-row');

  [badge, title, lead, actions].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      animate(el,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.7, easing: [0.22, 1, 0.36, 1], delay: i * 0.12 }
      );
    }, 80);
  });
}

// ─── Scroll Progress Bar ──────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

// ─── IntersectionObserver — Scroll-Reveal ────────────────────────────────────
function initScrollRevealAnimations() {
  // Each era card fades + rises when entering viewport
  const cards = document.querySelectorAll('.epoch-card');
  const markerCircles = document.querySelectorAll('.marker-circle');

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animate(
          el,
          { opacity: [0, 1], y: [60, 0], scale: [0.97, 1] },
          { duration: 0.75, easing: [0.22, 1, 0.36, 1] }
        );
        // Animate the takeaway items inside this card with stagger
        const items = el.querySelectorAll('.takeaway-item');
        if (items.length) {
          animate(
            items,
            { opacity: [0, 1], x: [-20, 0] },
            { duration: 0.5, easing: 'ease-out', delay: stagger(0.08, { start: 0.4 }) }
          );
        }
        cardObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(card => {
    card.style.opacity = '0';
    cardObserver.observe(card);
  });

  // Era marker circles — pulse scale
  const markerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(
          entry.target,
          { scale: [0.5, 1.1, 1], opacity: [0, 1] },
          { duration: 0.6, easing: 'ease-out' }
        );
        markerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  markerCircles.forEach(mc => {
    mc.style.opacity = '0';
    markerObserver.observe(mc);
  });

  // Frontier breakthrough cards
  const frontierCards = document.querySelectorAll('.frontier-card');
  const frontierObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animate(
          el,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.8, easing: [0.22, 1, 0.36, 1], delay: idx * 0.15 }
        );
        frontierObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  frontierCards.forEach(fc => {
    fc.style.opacity = '0';
    frontierObserver.observe(fc);
  });

  // Widgets fade in when visible
  const widgets = document.querySelectorAll('.interactive-widget-box, .interactive-mini-box');
  const widgetObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(
          entry.target,
          { opacity: [0, 1], scale: [0.96, 1] },
          { duration: 0.6, easing: 'ease-out', delay: 0.2 }
        );
        widgetObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  widgets.forEach(w => {
    w.style.opacity = '0';
    widgetObserver.observe(w);
  });

  // Conclusion box
  const conclusionBox = document.querySelector('.history-conclusion-box');
  if (conclusionBox) {
    conclusionBox.style.opacity = '0';
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animate(
          conclusionBox,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 1, easing: [0.22, 1, 0.36, 1] }
        );
      }
    }, { threshold: 0.2 }).observe(conclusionBox);
  }
}

// ─── Scrubber: Active dot tracking ───────────────────────────────────────────
function setupScrubberObserver() {
  const sections = document.querySelectorAll('.epoch-section');
  const dots = document.querySelectorAll('.scrub-dot');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach(dot => {
          const isActive = dot.getAttribute('href') === `#${id}`;
          dot.classList.toggle('active', isActive);
          if (isActive) {
            animate(dot, { scale: [1, 1.2, 1] }, { duration: 0.4, easing: 'ease-out' });
          }
        });
      }
    });
  }, { threshold: 0.45, rootMargin: '-10% 0px -10% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ─── TURING TAPE SIMULATOR ────────────────────────────────────────────────────
function renderTuringTape() {
  const container = document.getElementById('turing-tape');
  if (!container) return;

  container.innerHTML = turingTape.map((val, idx) => `
    <div class="turing-cell ${idx === turingHeadIdx ? 'active-cell' : ''}" id="cell-${idx}">
      ${val}
    </div>
  `).join('');

  // Position head pointer
  const head = document.getElementById('turing-head');
  const stateBadge = document.getElementById('turing-state');

  if (head) {
    const cellWidth = 58; // px per cell
    const offset = (turingHeadIdx - 4.5) * cellWidth;
    animate(head,
      { x: [parseFloat(head.style.transform?.replace(/[^-\d.]/g, '') || offset), offset] },
      { duration: 0.3, easing: [0.34, 1.56, 0.64, 1] }
    );
  }
  if (stateBadge) {
    stateBadge.textContent = `Estado: ${turingState} (Pos: ${turingHeadIdx})`;
  }
}

window.stepTuringMachine = function() {
  if (turingHeadIdx >= turingTape.length) {
    turingHeadIdx = 0;
    turingState = 'q0';
  }
  const cell = document.getElementById(`cell-${turingHeadIdx}`);
  if (cell) {
    animate(cell, { scale: [1, 1.4, 1], background: ['rgba(0,240,255,0.6)', 'rgba(0,240,255,0.1)'] }, { duration: 0.35 });
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
    turingInterval = setInterval(window.stepTuringMachine, 400);
    if (btn) btn.textContent = historyI18n[currentLang].turing_btn_auto_stop;
  }
};

window.resetTuringMachine = function() {
  if (turingInterval) { clearInterval(turingInterval); turingInterval = null; }
  const btn = document.getElementById('turing-run-text');
  if (btn) btn.textContent = historyI18n[currentLang].turing_btn_auto;
  turingTape = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];
  turingHeadIdx = 0;
  turingState = 'q0';
  renderTuringTape();
};

// ─── MOORE'S LAW SLIDER ───────────────────────────────────────────────────────
function initMooreSlider() {
  const slider = document.getElementById('moore-year-slider');
  if (slider) {
    updateMooreDisplay(1971);
    slider.addEventListener('input', (e) => updateMooreDisplay(parseInt(e.target.value)));
  }
}

window.updateMooreDisplay = function(year) {
  // Snap to nearest key
  const keys = Object.keys(mooreData).map(Number).sort((a, b) => a - b);
  const closest = keys.reduce((prev, curr) =>
    Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
  );
  const data = mooreData[closest];

  const yearEl  = document.getElementById('moore-year');
  const chipEl  = document.getElementById('moore-chip');
  const countEl = document.getElementById('moore-count');
  const barEl   = document.getElementById('moore-bar');

  if (yearEl)  yearEl.textContent  = `Ano: ${closest}`;
  if (chipEl)  chipEl.textContent  = `Chip: ${data.chip}`;
  if (countEl) countEl.textContent = `Transistores: ${data.count}`;

  // Logarithmic bar fill
  if (barEl) {
    const logMin = Math.log10(mooreData[1971].raw);
    const logMax = Math.log10(mooreData[2026].raw);
    const logVal = Math.log10(data.raw);
    const pct = ((logVal - logMin) / (logMax - logMin)) * 100;
    animate(barEl, { width: [`${pct}%`] }, { duration: 0.5, easing: 'ease-out' });
    barEl.style.width = `${pct}%`;
  }
};

// ─── BACKPROPAGATION SIMULATOR ────────────────────────────────────────────────
window.stepBackpropagation = function() {
  const rawOut  = bpInput.x1 * bpWeights.w1 + bpInput.x2 * bpWeights.w2;
  const sigmoid = 1 / (1 + Math.exp(-rawOut));
  const loss    = Math.pow(bpTarget - sigmoid, 2);

  const dLoss_dOut = 2 * (sigmoid - bpTarget);
  const dOut_dRaw  = sigmoid * (1 - sigmoid);

  bpWeights.w1 -= 0.2 * dLoss_dOut * dOut_dRaw * bpInput.x1;
  bpWeights.w2 -= 0.2 * dLoss_dOut * dOut_dRaw * bpInput.x2;

  const w1El    = document.getElementById('w1-val');
  const w2El    = document.getElementById('w2-val');
  const outEl   = document.getElementById('node-out');
  const lossEl  = document.getElementById('loss-val');
  const lossBar = document.getElementById('loss-bar');

  if (w1El)   w1El.textContent   = `w1: ${bpWeights.w1.toFixed(3)}`;
  if (w2El)   w2El.textContent   = `w2: ${bpWeights.w2.toFixed(3)}`;
  if (outEl)  outEl.textContent  = `Y: ${sigmoid.toFixed(3)}`;
  if (lossEl) lossEl.textContent = `Loss: ${loss.toFixed(4)}`;
  if (lossBar) {
    const pct = Math.min(loss * 200, 100);
    animate(lossBar, { width: [`${pct}%`] }, { duration: 0.4, easing: 'ease-out' });
  }

  // Pulse the output node
  if (outEl) {
    animate(outEl,
      { scale: [1, 1.2, 1], boxShadow: ['0 0 0px #00f0ff', '0 0 20px #00f0ff', '0 0 0px #00f0ff'] },
      { duration: 0.4, easing: 'ease-out' }
    );
  }
  // Animate weight labels
  [w1El, w2El].forEach(el => {
    if (el) animate(el, { color: ['#00ff88', '#00f0ff'] }, { duration: 0.5 });
  });
};

window.resetBackprop = function() {
  bpWeights.w1 = 0.50;
  bpWeights.w2 = 0.35;
  document.getElementById('w1-val')  && (document.getElementById('w1-val').textContent   = 'w1: 0.500');
  document.getElementById('w2-val')  && (document.getElementById('w2-val').textContent   = 'w2: 0.350');
  document.getElementById('node-out') && (document.getElementById('node-out').textContent = 'Y: 0.473');
  document.getElementById('loss-val') && (document.getElementById('loss-val').textContent = 'Loss: 0.2769');
  const lossBar = document.getElementById('loss-bar');
  if (lossBar) { lossBar.style.width = '55%'; }
};

// ─── GOOGLE WILLOW QUBIT LATTICE ──────────────────────────────────────────────
function renderWillowLattice() {
  const grid = document.getElementById('qubit-grid');
  if (!grid) return;

  grid.innerHTML = Array.from({ length: 25 }, (_, i) => `
    <div class="qubit-node" id="qubit-${i}" onclick="pulseQubit(this, ${i})" title="Qubit q${i}">
      <span class="qubit-label">q${i}</span>
    </div>
  `).join('');

  // Animate entry
  animate('.qubit-node',
    { opacity: [0, 1], scale: [0.5, 1] },
    { duration: 0.5, easing: [0.34, 1.56, 0.64, 1], delay: stagger(0.03) }
  );

  // Background random qubit flickering
  startQuantumFlicker();
}

function startQuantumFlicker() {
  setInterval(() => {
    const randomIdx = Math.floor(Math.random() * 25);
    const el = document.getElementById(`qubit-${randomIdx}`);
    if (el && !el.classList.contains('excited')) {
      el.classList.add('flicker');
      setTimeout(() => el.classList.remove('flicker'), 300);
    }
  }, 800);
}

window.pulseQubit = function(el, i) {
  // Spread excitation to neighbors
  const neighbors = [i - 1, i + 1, i - 5, i + 5].filter(n => n >= 0 && n < 25);

  el.classList.add('excited');
  neighbors.forEach(n => {
    const neighbor = document.getElementById(`qubit-${n}`);
    if (neighbor) {
      setTimeout(() => {
        neighbor.classList.add('entangled');
        setTimeout(() => neighbor.classList.remove('entangled'), 700);
      }, 150);
    }
  });

  const err = (0.0000120 + Math.random() * 0.0000040).toFixed(7);
  const errEl = document.getElementById('qubit-error-rate');
  if (errEl) {
    errEl.textContent = `Qubit q${i} entrelaçado. Taxa de Erro Lógico: ${err}% (Below-Threshold ✓)`;
    animate(errEl, { color: ['#00ff88', '#00f0ff'] }, { duration: 0.8 });
  }

  setTimeout(() => el.classList.remove('excited'), 700);
};

// ─── SYSTEM-2 REASONING SIMULATOR ────────────────────────────────────────────
const reasoningSimScenarios = [
  {
    title: "Prova Matemática (AIME 2026)",
    steps: [
      { text: "✓ Etapa 1: Formalização do problema no espaço polinomial", ok: true },
      { text: "✗ Hipótese 2A: Indução fraca falhou — rejeitada via PRM", ok: false },
      { text: "✓ Hipótese 2B: Bijection provada em Lean 4 (verificado)", ok: true },
      { text: "✓ Etapa 4: Resposta verificada. Score AIME: 100%", ok: true }
    ]
  },
  {
    title: "Engenharia de Software (SWE-bench)",
    steps: [
      { text: "✓ Etapa 1: Ingestão de 1M tokens de código", ok: true },
      { text: "✓ Etapa 2: Localização do memory leak em C++ (linha 2847)", ok: true },
      { text: "✗ Patch 1: Regressão detectada em test_suite_3", ok: false },
      { text: "✓ Patch 2: Validação completa em micro-sandbox. PR aprovado.", ok: true }
    ]
  },
  {
    title: "Síntese de Hipótese Científica (Co-Scientist)",
    steps: [
      { text: "✓ Etapa 1: Leitura de 2.500 papers de biologia molecular", ok: true },
      { text: "✗ Hipótese A: Mecanismo de RNA já descartado em 2023", ok: false },
      { text: "✓ Hipótese B: Nova proteína CRISPR-adjacent — Novelty Score: 0.94", ok: true },
      { text: "✓ Etapa Final: Protocolo experimental gerado e validado", ok: true }
    ]
  }
];
let simIndex = 0;

window.runReasoningSimulation = function() {
  const container = document.getElementById('reasoning-tree');
  const titleEl = document.getElementById('reasoning-title');
  if (!container) return;

  simIndex = (simIndex + 1) % reasoningSimScenarios.length;
  const scenario = reasoningSimScenarios[simIndex];

  if (titleEl) titleEl.textContent = scenario.title;

  container.innerHTML = scenario.steps.map(s => `
    <div class="tree-step ${s.ok ? 'step-ok' : 'step-bad'}" style="opacity:0">
      ${s.text}
    </div>
  `).join('');

  const steps = container.querySelectorAll('.tree-step');
  animate(steps,
    { opacity: [0, 1], x: [-15, 0] },
    { duration: 0.4, easing: 'ease-out', delay: stagger(0.12) }
  );
};

// ─── LANGUAGE & i18n ──────────────────────────────────────────────────────────
window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('makeaibetter_lang', lang);
  document.getElementById('btn-lang-pt')?.classList.toggle('active', lang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', lang === 'en');
  applyHistoryTranslations();
};

function initLanguage() {
  const saved = localStorage.getItem('makeaibetter_lang');
  if (saved === 'pt' || saved === 'en') currentLang = saved;
  document.getElementById('btn-lang-pt')?.classList.toggle('active', currentLang === 'pt');
  document.getElementById('btn-lang-en')?.classList.toggle('active', currentLang === 'en');
  applyHistoryTranslations();
}

function applyHistoryTranslations() {
  const dict = historyI18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
}
