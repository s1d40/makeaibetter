/**
 * MAKE AI BETTER — Interactive Application & Research Radar Logic
 * Date: 2026-09-21
 */

// --- Global State ---
let currentLang = 'pt';
let activeCategory = 'all';
let newsData = [];
let activeModelId = 'gemini-38';

// --- Translation Dictionary ---
const translations = {
  pt: {
    nav_history: "História da Computação",
    nav_science: "IA na Ciência",
    btn_history: "Explorar a Epopeia da Computação",
    btn_science: "Explorar IA na Ciência",
    hero_kw_inference: "computação de inferência (System-2)",
    hero_kw_swarms: "enxames de agentes autônomos",
    hero_kw_open: "pesos abertos de ponta",
    stat_scaling_label: "Escalabilidade em Tempo de Inferência",
    stat_cost_val: "10x Menor",
    stat_labs_val: "50+ Labs",
    stat_audit_label: "Auditorias do EU AI Act",
    footer_rights: "&copy; 2026 Make AI Better Research Initiative. Licença MIT Open Source.",
    manifesto_byline: "Publicado em 21 de Setembro de 2026 • Make AI Better Research Team",
    nav_state_of_ai: "State of AI 2026",
    nav_history: "História",
    nav_science: "IA na Ciência",
    nav_benchmarks: "Radar de Modelos",
    nav_pillars: "Pilares",
    nav_manifesto: "Manifesto",
    btn_history: "História da Computação",
    btn_science: "IA na Ciência",
    github_repo_btn: "GitHub Repo",
    hero_status: "Relatório de Inteligência • 21 de Setembro de 2026",
    hero_headline_sub: "Acelerando a Fronteira com Raciocínio, Rigor e Ciência Aberta",
    hero_subtitle: "A inteligência artificial ultrapassou a era da previsão bruta de tokens. Em 21 de setembro de 2026, exploramos a transição definitiva para <strong>computação de inferência (System-2)</strong>, <strong>enxames de agentes autônomos</strong> e <strong>pesos abertos de ponta</strong>.",
    btn_explore_radar: "Explorar Radar 2026",
    btn_read_state_of_ai: "Ler State of AI 2026 (Completo)",
    stat_swe_bench: "SOTA em SWE-bench Verified",
    stat_test_time: "Paradigma de Test-Time Compute",
    stat_open_moe: "Custo de Inferência Open MoE",
    stat_coalition: "Alinhamento & Pacing Global",
    video_section_tag: "EM VÍDEO",
    video_section_title: "Assista à pesquisa",
    video_section_subtitle: "Um mergulho longo no panorama de 2026 e três recortes curtos sobre as mudanças que mais importam.",
    news_section_tag: "PANORAMA EM TEMPO REAL",
    news_section_title: "Breaking News & Descobertas Científicas (2026)",
    news_section_subtitle: "O compilado curado dos maiores saltos técnicos, anúncios de laboratórios de fronteira e marcos regulatórios registrados até 21 de setembro de 2026.",
    search_placeholder: "Buscar por modelo, laboratório ou conceito...",
    filter_all: "Todos",
    filter_frontier: "Modelos de Fronteira",
    filter_reasoning: "Raciocínio & Compute",
    filter_agents: "Agentes Autônomos",
    filter_open_weights: "Pesos Abertos",
    filter_safety: "Segurança & Governança",
    benchmark_section_tag: "MATRIZ DE CAPACIDADES 2026",
    benchmark_section_title: "Radar dos Modelos de Fronteira",
    benchmark_section_subtitle: "Compare as métricas reais dos principais sistemas em raciocínio formal, engenharia de software, janela de contexto e eficiência de custo.",
    th_model: "Modelo",
    th_lab: "Laboratório",
    th_paradigm: "Paradigma",
    th_swe_bench: "SWE-bench Verified",
    th_math: "FrontierMath / AIME",
    th_access: "Acesso",
    pillars_section_tag: "MISSÃO ESTRATÉGICA",
    pillars_section_title: "Pilares de Pesquisa da Make AI Better",
    pillars_section_subtitle: "Nossa atuação concentra-se em resolver os gargalos fundamentais para que a IA do futuro seja confiável, verificável e acessível.",
    pillar_1_title: "Benchmarks Livres de Contaminação",
    pillar_1_desc: "Desenvolvimento de suites de avaliação dinâmicas e verificadas formalmente (Lean 4, execução em micro-containers) para testar raciocínio genuíno fora de distribuição.",
    pillar_1_item1: "Provas formais de matemática avançada",
    pillar_1_item2: "Testes de engenharia de software ponta a ponta",
    pillar_1_item3: "Mitigação de memorização de dados de treino",
    pillar_2_title: "Raciocínio System-2 Aberto",
    pillar_2_desc: "Investigação de leis de escalabilidade em tempo de inferência, Process Reward Models (PRMs) e cadeias de pensamento transparentes e auditáveis por humanos.",
    pillar_2_item1: "Alocação dinâmica de orçamento de reflexão",
    pillar_2_item2: "Verificação passo a passo anti-alucinação",
    pillar_2_item3: "Arquiteturas de auto-correção autônoma",
    pillar_3_title: "Sandboxing & Segurança de Agentes",
    pillar_3_desc: "Criação de guardrails formais, isolamento de ferramentas, barreiras contra injeção de prompt indireta e protocolos de execução segura para enxames multi-agente.",
    pillar_3_item1: "Separação estrita de canal de instrução/dados",
    pillar_3_item2: "Micro-sandboxes efêmeros para execução de shell",
    pillar_3_item3: "Monitoramento de deriva de objetivos autônomos",
    pillar_4_title: "Ciência Aberta & Dados Públicos",
    pillar_4_desc: "Publicação contínua de relatórios técnicos, datasets de alinhamento com licença permissiva e ferramentas que capacitam pesquisadores e desenvolvedores em todo o mundo.",
    pillar_4_item1: "Publicação de logs e datasets de treino sintético",
    pillar_4_item2: "Ferramentas de código aberto com licença MIT",
    pillar_4_item3: "Colaboração com universidades e centros globais",
    manifesto_tag: "NOSSO MANIFESTO",
    manifesto_title: "\"A IA só é verdadeiramente melhor quando é segura, transparente e de todos.\"",
    manifesto_text: "O nome <strong>Make AI Better</strong> não é apenas uma aspiração técnica — é um compromisso ético e científico. À medida que sistemas de inteligência ganham agência no mundo real, a responsabilidade de medir com rigor, abrir o conhecimento e estabelecer salvaguardas torna-se a missão mais importante da nossa geração.",
    newsletter_title: "Receba nossos briefings de pesquisa mensais",
    newsletter_sub: "Sem spam. Apenas dados técnicos aprofundados, benchmarks e análises de papers.",
    newsletter_placeholder: "seu.email@pesquisa.org",
    newsletter_btn: "Inscrever-se",
    newsletter_success: "✓ Obrigado por se juntar à Make AI Better Research Network.",
    footer_desc: "Iniciativa de pesquisa independente e aberta para o avanço seguro e rigoroso da inteligência artificial.",
    footer_col_research: "Pesquisa",
    footer_col_pillars: "Pilares",
    footer_col_connect: "Conectar",
    footer_whitepaper: "Relatório Técnico (MD)",
    footer_newsletter: "Newsletter de Pesquisa",
    modal_badge: "Relatório Oficial de Pesquisa",
    btn_copy_markdown: "Copiar Markdown",
    btn_copied: "✓ Copiado!",
    btn_close_modal: "Fechar Leitor"
  },
  en: {
    nav_history: "History of Computing",
    nav_science: "AI in Science",
    btn_history: "Explore The Epic of Computing",
    btn_science: "Explore AI in Science",
    hero_kw_inference: "inference-time compute (System-2)",
    hero_kw_swarms: "autonomous agent swarms",
    hero_kw_open: "frontier open weights",
    stat_scaling_label: "Inference-Time Scaling",
    stat_cost_val: "10x Lower",
    stat_labs_val: "50+ Labs",
    stat_audit_label: "EU AI Act audits",
    footer_rights: "&copy; 2026 Make AI Better Research Initiative. MIT Open Source License.",
    manifesto_byline: "Published September 21, 2026 • Make AI Better Research Team",
    nav_state_of_ai: "State of AI 2026",
    nav_benchmarks: "Model Radar",
    nav_pillars: "Research Pillars",
    nav_manifesto: "Manifesto",
    github_repo_btn: "GitHub Repo",
    hero_status: "Intelligence Briefing • September 21, 2026",
    hero_headline_sub: "Advancing the Frontier with Reasoning, Rigor, and Open Science",
    hero_subtitle: "Artificial intelligence has transcended brute-force token prediction. As of September 21, 2026, we explore the definitive shift to <strong>inference-time compute (System-2)</strong>, <strong>autonomous agent swarms</strong>, and <strong>cutting-edge open weights</strong>.",
    btn_explore_radar: "Explore 2026 Radar",
    btn_read_state_of_ai: "Read State of AI 2026 (Full Report)",
    stat_swe_bench: "SOTA on SWE-bench Verified",
    stat_test_time: "Test-Time Compute Paradigm",
    stat_open_moe: "Open MoE Inference Cost",
    stat_coalition: "Global Alignment & Pacing",
    video_section_tag: "ON VIDEO",
    video_section_title: "Watch the research",
    video_section_subtitle: "One long dive into the 2026 landscape and three short cuts on the shifts that matter most.",
    news_section_tag: "REAL-TIME RADAR",
    news_section_title: "Breaking News & Scientific Milestones (2026)",
    news_section_subtitle: "The curated synthesis of major technical leaps, frontier lab announcements, and regulatory checkpoints recorded up to September 21, 2026.",
    search_placeholder: "Search by model, lab, or concept...",
    filter_all: "All",
    filter_frontier: "Frontier Models",
    filter_reasoning: "Reasoning & Compute",
    filter_agents: "Autonomous Agents",
    filter_open_weights: "Open Weights",
    filter_safety: "Safety & Governance",
    benchmark_section_tag: "2026 CAPABILITY MATRIX",
    benchmark_section_title: "Frontier Models Radar",
    benchmark_section_subtitle: "Compare verified metrics across formal reasoning, software engineering, context horizon, and cost efficiency.",
    th_model: "Model",
    th_lab: "Lab",
    th_paradigm: "Paradigm",
    th_swe_bench: "SWE-bench Verified",
    th_math: "FrontierMath / AIME",
    th_access: "Access",
    pillars_section_tag: "STRATEGIC MISSION",
    pillars_section_title: "Make AI Better Research Pillars",
    pillars_section_subtitle: "Our research focuses on resolving the critical bottlenecks so that next-generation AI is reliable, verifiable, and globally accessible.",
    pillar_1_title: "Contamination-Resistant Benchmarks",
    pillar_1_desc: "Developing dynamically generated and formally verified benchmark suites (Lean 4, sandboxed environments) to test genuine out-of-distribution reasoning.",
    pillar_1_item1: "Formal proofs for advanced mathematics",
    pillar_1_item2: "End-to-end software engineering evaluations",
    pillar_1_item3: "Mitigation of training data memorization",
    pillar_2_title: "Open System-2 Reasoning",
    pillar_2_desc: "Investigating inference-time scaling laws, Process Reward Models (PRMs), and human-inspectable chain-of-thought verification.",
    pillar_2_item1: "Dynamic thinking budget allocation",
    pillar_2_item2: "Step-by-step anti-hallucination verification",
    pillar_2_item3: "Autonomous self-correction architectures",
    pillar_3_title: "Agent Sandboxing & Security",
    pillar_3_desc: "Building formal guardrails, tool isolation, indirect prompt-injection firewalls, and secure execution protocols for multi-agent swarms.",
    pillar_3_item1: "Strict instruction/data channel separation",
    pillar_3_item2: "Ephemeral micro-sandboxes for shell execution",
    pillar_3_item3: "Goal-drift monitoring in autonomous loops",
    pillar_4_title: "Open Science & Public Datasets",
    pillar_4_desc: "Continuous publication of technical reports, permissively licensed alignment datasets, and open tools empowering global researchers.",
    pillar_4_item1: "Open logs and synthetic training datasets",
    pillar_4_item2: "MIT-licensed open-source tooling",
    pillar_4_item3: "Global collaboration with academic centers",
    manifesto_tag: "OUR MANIFESTO",
    manifesto_title: "\"AI is only truly better when it is safe, transparent, and built for everyone.\"",
    manifesto_text: "The name <strong>Make AI Better</strong> is not merely a technical ambition — it is an ethical and scientific commitment. As intelligent systems gain real-world agency, the duty to measure rigorously, share openly, and establish robust safeguards becomes our generation's defining mission.",
    newsletter_title: "Subscribe to our monthly research briefings",
    newsletter_sub: "No spam. Purely technical deep-dives, benchmarks, and paper analyses.",
    newsletter_placeholder: "your.email@research.org",
    newsletter_btn: "Subscribe",
    newsletter_success: "✓ Thank you for joining the Make AI Better Research Network.",
    footer_desc: "Independent open research initiative dedicated to the safe and rigorous advancement of artificial intelligence.",
    footer_col_research: "Research",
    footer_col_pillars: "Pillars",
    footer_col_connect: "Connect",
    footer_whitepaper: "Technical Report (MD)",
    footer_newsletter: "Research Newsletter",
    modal_badge: "Official Research Report",
    btn_copy_markdown: "Copy Markdown",
    btn_copied: "✓ Copied!",
    btn_close_modal: "Close Reader"
  }
};

// --- Frontier Models Benchmark Database ---
const modelsData = {
  "gemini-38": {
    name: "Google Gemini 3.8 Live",
    lab: "Google DeepMind",
    desc_pt: "Arquitetura multimodal nativa com latência de resposta em tempo real (<90ms) combinada ao módulo 'Extended Thinking' para raciocínio analítico profundo e contexto ativo de milhões de tokens.",
    desc_en: "Native multimodal architecture with sub-90ms real-time latency paired with an 'Extended Thinking' reasoning engine capable of active multi-million token recall.",
    highlights_pt: [
      "Percepção contínua de áudio, vídeo e tela em tempo real",
      "Process Reward Models para auto-correção matemática",
      "Líder em SWE-bench Verified 2.0 (82.4%)"
    ],
    highlights_en: [
      "Continuous real-time audio, video, and screen streaming",
      "Process Reward Models for mathematical self-correction",
      "Top score on SWE-bench Verified 2.0 (82.4%)"
    ],
    scores: {
      "SWE-bench Verified": 82.4,
      "FrontierMath (Graduate)": 41.6,
      "System-2 Reasoning Depth": 94,
      "Cost Efficiency": 88,
      "Multimodal Latency": 98
    }
  },
  "gpt-6-astra": {
    name: "OpenAI GPT-6 Astra & o3",
    lab: "OpenAI",
    desc_pt: "Sistema de raciocínio de próxima geração com alocação dinâmica de computação de inferência (System-2). Projetado especificamente para automação de tarefas intelectuais complexas.",
    desc_en: "Next-generation reasoning system with adaptive test-time compute allocation (System-2), engineered for high-complexity intellectual workflows and multi-agent coordination.",
    highlights_pt: [
      "96.8% em problemas de olimpíada AIME 2026",
      "Auto-orquestração de subagentes especializados",
      "Capacidade de síntese lógica de alta fidelidade"
    ],
    highlights_en: [
      "96.8% on AIME 2026 olympiad math problems",
      "Autonomous orchestration of specialized subagents",
      "High-fidelity abstract logic synthesis"
    ],
    scores: {
      "SWE-bench Verified": 81.9,
      "FrontierMath (Graduate)": 42.8,
      "System-2 Reasoning Depth": 97,
      "Cost Efficiency": 76,
      "Multimodal Latency": 85
    }
  },
  "claude-51": {
    name: "Anthropic Claude 5.1 Fable",
    lab: "Anthropic",
    desc_pt: "Modelo com alinhamento Constitucional 3.0, altamente controlável e especializado em refatoração autônoma de código em larga escala e rigor em segurança de ferramentas.",
    desc_en: "Constitutional AI 3.0 frontier model with unprecedented steerability, tailored for multi-day autonomous software engineering and verifiable agent safety.",
    highlights_pt: [
      "Refatoração autônoma contínua de até 48 horas",
      "Cadeias de pensamento transparentes e auditáveis",
      "Isolamento avançado de APIs e uso de ferramentas"
    ],
    highlights_en: [
      "Continuous 48-hour autonomous codebase refactoring",
      "Transparent and human-auditable chains of thought",
      "Advanced API sandboxing and tool containment"
    ],
    scores: {
      "SWE-bench Verified": 79.1,
      "FrontierMath (Graduate)": 38.5,
      "System-2 Reasoning Depth": 91,
      "Cost Efficiency": 80,
      "Multimodal Latency": 82
    }
  },
  "deepseek-v4": {
    name: "DeepSeek V4 (MoE)",
    lab: "DeepSeek AI",
    desc_pt: "Modelo de pesos abertos baseado em Mixture-of-Experts esparso, treinado com reforço massivo em cadeias de raciocínio, entregando desempenho de ponta a custo ultra-baixo.",
    desc_en: "Open-weight sparse Mixture-of-Experts model trained with heavy reinforcement learning over reasoning traces, matching frontier closed models at a fraction of inference compute.",
    highlights_pt: [
      "Pesos 100% abertos e auto-hospedáveis",
      "91.2% em problemas matemáticos AIME",
      "Custo de inferência até 10x menor que APIs fechadas"
    ],
    highlights_en: [
      "100% open weights with self-hosting capability",
      "91.2% on AIME mathematical evaluation",
      "Up to 10x lower inference cost compared to closed APIs"
    ],
    scores: {
      "SWE-bench Verified": 76.5,
      "FrontierMath (Graduate)": 36.2,
      "System-2 Reasoning Depth": 89,
      "Cost Efficiency": 99,
      "Multimodal Latency": 84
    }
  },
  "kimi-k3": {
    name: "Moonshot Kimi K3",
    lab: "Moonshot AI",
    desc_pt: "Especialista em síntese recursiva de literatura científica e leitura de milhares de artigos simultaneamente com verificação cruzada de citações.",
    desc_en: "Specialized in recursive literature synthesis, capable of parsing thousands of research papers concurrently with real-time citation cross-verification.",
    highlights_pt: [
      "Processamento e síntese de mais de 10.000 papers",
      "Precisão de checagem de fatos de 99.1%",
      "Janela de contexto ultra-eficiente para pesquisa"
    ],
    highlights_en: [
      "Concurrent analysis of 10,000+ scientific papers",
      "99.1% fact-checking and cross-citation accuracy",
      "Ultra-efficient long-context research workflows"
    ],
    scores: {
      "SWE-bench Verified": 74.8,
      "FrontierMath (Graduate)": 34.0,
      "System-2 Reasoning Depth": 86,
      "Cost Efficiency": 92,
      "Multimodal Latency": 80
    }
  },
  "llama-4": {
    name: "Meta Llama 4 Suite",
    lab: "Meta FAIR",
    desc_pt: "A espinha dorsal da comunidade open-source em 2026, com módulos nativos de raciocínio e arquitetura adaptada para computação distribuída.",
    desc_en: "The foundation of the 2026 open-source AI community, featuring native reasoning heads and optimized architecture for edge-to-cluster scaling.",
    highlights_pt: [
      "Disponível em variantes de 8B a 400B+ parâmetros",
      "Grande ecossistema de fine-tuning comunitário",
      "Execução otimizada em hardware de consumo e servidores"
    ],
    highlights_en: [
      "Available across 8B to 400B+ parameter sizes",
      "Massive community fine-tuning ecosystem",
      "Optimized inference on local hardware & data centers"
    ],
    scores: {
      "SWE-bench Verified": 75.2,
      "FrontierMath (Graduate)": 35.1,
      "System-2 Reasoning Depth": 87,
      "Cost Efficiency": 96,
      "Multimodal Latency": 86
    }
  }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  initLanguage();
  initNeuralCanvas();
  await loadBreakingNews();
  renderModelTabs();
  renderModelShowcase(activeModelId);
});

// --- Language Switcher ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('makeaibetter_lang', lang);
  
  document.getElementById('btn-lang-pt').classList.toggle('active', lang === 'pt');
  document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
  
  applyTranslations();
  renderNewsGrid();
  renderModelShowcase(activeModelId);
  // app.js é script clássico e o embed de vídeo é módulo ES: o evento é a ponte
  document.dispatchEvent(new CustomEvent('mab:langchange', { detail: lang }));
}

function initLanguage() {
  // A URL manda: /en/ serve HTML já em inglês, e o localStorage não pode
  // sobrescrever isso — senão a página renderizada em EN seria repintada em PT.
  currentLang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
  document.getElementById('btn-lang-pt').classList.toggle('active', currentLang === 'pt');
  document.getElementById('btn-lang-en').classList.toggle('active', currentLang === 'en');
  applyTranslations();
}

function applyTranslations() {
  const dict = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

// --- Breaking News Fetch & Render ---
async function loadBreakingNews() {
  try {
    const res = await fetch('/research/breaking_news_sept_2026.json');
    if (res.ok) {
      newsData = await res.json();
    }
  } catch (err) {
    console.warn('Could not load local JSON, using fallback data:', err);
  }
  renderNewsGrid();
}

function selectCategory(category) {
  activeCategory = category;
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === category);
  });
  renderNewsGrid();
}

function filterNews() {
  renderNewsGrid();
}

function renderNewsGrid() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;

  const searchTerm = (document.getElementById('news-search')?.value || '').toLowerCase();

  const filtered = newsData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const title = currentLang === 'pt' ? item.title_pt : item.title;
    const summary = currentLang === 'pt' ? item.summary_pt : item.summary;
    const tags = item.tags.join(' ');
    
    const matchesSearch = !searchTerm || 
      title.toLowerCase().includes(searchTerm) || 
      summary.toLowerCase().includes(searchTerm) ||
      tags.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p>${currentLang === 'pt' ? 'Nenhuma notícia encontrada para este filtro.' : 'No items found matching this filter.'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const title = currentLang === 'pt' ? item.title_pt : item.title;
    const summary = currentLang === 'pt' ? item.summary_pt : item.summary;
    const category = currentLang === 'pt' ? item.category_pt : item.category;

    const impactBadge = item.impact === 'Crucial' ? 'badge-red' : 
                        item.impact === 'High' ? 'badge-amber' : 'badge-cyan';

    const metricsHtml = item.metrics ? `
      <div class="news-metrics-box">
        ${Object.entries(item.metrics).map(([k, v]) => `
          <div class="news-metric-item">
            <span class="metric-name">${k}</span>
            <span class="metric-val">${v}</span>
          </div>
        `).join('')}
      </div>
    ` : '';

    return `
      <article class="news-card">
        <div>
          <div class="news-card-header">
            <span class="badge ${impactBadge}">${category}</span>
            <span class="news-date">${item.date}</span>
          </div>
          <h3 class="news-card-title">${title}</h3>
          <p class="news-card-desc">${summary}</p>
          ${metricsHtml}
        </div>
        <div class="news-card-tags">
          ${item.tags.map(t => `<span class="tag-pill">#${t}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');
}

// --- Benchmark Showcase Renderer ---
function renderModelTabs() {
  const tabsContainer = document.getElementById('model-tabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = Object.entries(modelsData).map(([id, model]) => `
    <button class="model-tab-btn ${id === activeModelId ? 'active' : ''}" onclick="selectModel('${id}')">
      ${model.name}
    </button>
  `).join('');
}

function selectModel(modelId) {
  activeModelId = modelId;
  renderModelTabs();
  renderModelShowcase(modelId);
}

function renderModelShowcase(modelId) {
  const showcase = document.getElementById('model-showcase');
  const model = modelsData[modelId];
  if (!showcase || !model) return;

  const desc = currentLang === 'pt' ? model.desc_pt : model.desc_en;
  const highlights = currentLang === 'pt' ? model.highlights_pt : model.highlights_en;

  const barsHtml = Object.entries(model.scores).map(([name, score]) => `
    <div class="bar-item">
      <div class="bar-label-wrap">
        <span class="bar-name">${name}</span>
        <span class="bar-val">${score}${typeof score === 'number' && score <= 100 ? (name.includes('Math') || name.includes('SWE') ? '%' : '/100') : ''}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${typeof score === 'number' ? Math.min(score, 100) : 80}%"></div>
      </div>
    </div>
  `).join('');

  showcase.innerHTML = `
    <div class="showcase-info">
      <h3>${model.name}</h3>
      <div class="showcase-lab">${model.lab}</div>
      <p class="showcase-desc">${desc}</p>
      <div class="showcase-highlights">
        ${highlights.map(h => `
          <div class="highlight-row">
            <span class="highlight-dot"></span>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="showcase-bars">
      ${barsHtml}
    </div>
  `;
}

// --- Modal State of AI Reader ---
function openReportModal() {
  const modal = document.getElementById('report-modal');
  const body = document.getElementById('modal-report-content');
  if (!modal || !body) return;

  if (currentLang === 'pt') {
    body.innerHTML = `
      <h4>1. A Revolução do Raciocínio em Tempo de Inferência (System-2)</h4>
      <p>A escala de parâmetros de pré-treino atingiu retornos decrescentes. O avanço em 2026 é impulsionado por <strong>Process Reward Models (PRMs)</strong> e <strong>Monte Carlo Tree Search (MCTS)</strong>, permitindo aos modelos "pensar" e auto-corrigir suas decisões antes de responder.</p>
      
      <h4>2. O Panorama dos Modelos de Fronteira (Setembro de 2026)</h4>
      <p>Os principais laboratórios mundiais agora competem em margens mínimas de desempenho:</p>
      <ul>
        <li><strong>Google Gemini 3.8 Live:</strong> Líder em multimodalidade nativa em tempo real (<90ms) e raciocínio estendido sobre milhões de tokens.</li>
        <li><strong>OpenAI GPT-6 Astra & o3:</strong> Alocador dinâmico de computação de inferência estabelecendo novos recordes de resolução matemática.</li>
        <li><strong>Anthropic Claude 5.1 Fable:</strong> Engenharia autônoma de software por até 48 horas com alinhamento Constitucional rigoroso.</li>
        <li><strong>DeepSeek V4:</strong> Democratização com pesos abertos de altíssima eficiência a 1/10 do custo de inferência de APIs proprietárias.</li>
      </ul>

      <h4>3. Agentes Autônomos e Sandboxing de Segurança</h4>
      <p>Com agentes executando comandos no terminal e interagindo com navegadores, a pesquisa de segurança prioriza micro-sandboxes efêmeros e a separação estrita entre dados e canais de instrução.</p>

      <h4>4. Governança e O Debate sobre Pacing</h4>
      <p>Com a plena vigência da Lei de IA da União Europeia (EU AI Act), mais de 50 instituições globais formaram a Coalizão de Pacing, estabelecendo checagens de alinhamento antes de escaladas de modelo.</p>
    `;
  } else {
    body.innerHTML = `
      <h4>1. The Inference-Time Reasoning Revolution (System-2)</h4>
      <p>Pre-training parameter scaling has hit diminishing returns. Breakthroughs in 2026 are driven by <strong>Process Reward Models (PRMs)</strong> and <strong>Monte Carlo Tree Search (MCTS)</strong>, allowing models to deliberate and self-correct prior to generating output.</p>
      
      <h4>2. The Frontier Model Landscape (September 2026)</h4>
      <p>Leading global labs are competing within razor-thin performance deltas:</p>
      <ul>
        <li><strong>Google Gemini 3.8 Live:</strong> Leading native real-time multimodal perception (<90ms) with deep extended thinking over millions of tokens.</li>
        <li><strong>OpenAI GPT-6 Astra & o3:</strong> Adaptive test-time compute allocator setting new milestones in complex formal problem solving.</li>
        <li><strong>Anthropic Claude 5.1 Fable:</strong> 48-hour continuous autonomous codebase refactoring and Constitutional AI 3.0 safety guarantees.</li>
        <li><strong>DeepSeek V4:</strong> Open-weights democratization delivering near-frontier reasoning at 1/10th the inference cost.</li>
      </ul>

      <h4>3. Autonomous Agents & Sandboxed Execution</h4>
      <p>As agents gain real operating system agency, security research focuses on ephemeral micro-sandboxes and architectural separation of instruction vs data channels.</p>

      <h4>4. Governance & The Pacing Debate</h4>
      <p>With the EU AI Act fully operational, over 50 global organizations have joined the Pacing Coalition to enforce verified capability-alignment checkpoints.</p>
    `;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReportModal() {
  const modal = document.getElementById('report-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeReportModalOnBackdrop(e) {
  if (e.target.id === 'report-modal') {
    closeReportModal();
  }
}

function copyReportLink() {
  const text = `# State of AI 2026: The Paradigm Shift\nMake AI Better Research Report — September 21, 2026\n\nRead the full report at: https://github.com/s1d40/makeaibetter`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btn-copy-link');
    const originalText = btn.innerHTML;
    btn.innerHTML = translations[currentLang].btn_copied;
    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 2000);
  });
}

// --- Newsletter Handler ---
function handleSubscribe(e) {
  e.preventDefault();
  const feedback = document.getElementById('form-feedback');
  const input = document.getElementById('subscriber-email');
  if (feedback && input) {
    feedback.textContent = translations[currentLang].newsletter_success;
    feedback.className = 'form-feedback success';
    input.value = '';
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 5000);
  }
}

// --- Interactive Neural Network Canvas ---
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const nodeCount = Math.min(Math.floor(window.innerWidth / 20), 70);
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(0, 240, 255,' : 'rgba(138, 43, 226,'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx;
      a.y += a.vy;

      if (a.x < 0 || a.x > width) a.vx *= -1;
      if (a.y < 0 || a.y > height) a.vy *= -1;

      // Draw node dot
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${a.color} 0.8)`;
      ctx.fill();

      // Connect nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}
