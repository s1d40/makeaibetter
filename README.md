# Make AI Better (makeaibetter) 🌐🤖

> **"Advancing AI capabilities through rigorous evaluation, transparent reasoning, and open-science safety architectures."**

Welcome to the official open repository of **Make AI Better**, an independent research initiative dedicated to tracking, evaluating, and building the foundational tools required to make frontier artificial intelligence systems safer, more capable, transparent, and universally beneficial.

---

## 📅 State of AI 2026: September 21, 2026 Panorama

This repository hosts the **State of AI 2026 Intelligence Briefing**, covering the monumental shift from *brute-force pre-training parameter scaling* to **inference-time compute (System-2 deliberate reasoning)**, **autonomous multi-agent swarms**, and **open-weights democratized intelligence**.

### 🌟 Key Research Highlights in 2026
* **Inference-Time Scaling (System-2):** Dynamic test-time search, Monte Carlo Tree Search (MCTS), and Process Reward Models (PRMs) replacing next-token hallucinations.
* **Frontier Model Parity:** Tight competition between Google DeepMind (Gemini 3.8 Live / Extended Thinking), OpenAI (GPT-6 Astra / o3), Anthropic (Claude 5.1 Fable/Mythos), and DeepSeek (V4 Open Weights).
* **Autonomous Agent Sandboxing:** Transitioning from conversational chatbots to long-horizon agent execution environments with strict security layers and tool isolation.
* **Global Governance & Pacing:** Full operational phase of the EU AI Act and international alignment coalitions establishing verifiable safety checkpoints.

📖 Read the full technical briefing: [`research/state_of_ai_2026.md`](./research/state_of_ai_2026.md)  
📊 Explore the structured news dataset: [`research/breaking_news_sept_2026.json`](./research/breaking_news_sept_2026.json)

---

## 🏛️ Research Pillars of Make AI Better

```
                       ┌─────────────────────────────────┐
                       │        MAKE AI BETTER           │
                       │   Independent Research Lab      │
                       └────────────────┬────────────────┘
                                        │
      ┌──────────────────┬──────────────┴───────────────┬──────────────────┐
      │                  │                              │                  │
┌─────▼────────┐   ┌─────▼────────┐              ┌──────▼───────┐   ┌──────▼───────┐
│  Contamin-   │   │   System-2   │              │   Agentic    │   │  Open Science│
│  ation-Proof │   │  Inference   │              │  Sandboxing  │   │  & Public    │
│  Evals       │   │  Reasoning   │              │  & Security  │   │  Datasets    │
└──────────────┘   └──────────────┘              └──────────────┘   └──────────────┘
```

1. **Contamination-Resistant Benchmarks:** Real-world verified coding, formal math proofs (Lean 4), and live out-of-distribution evaluation.
2. **Open Reasoning & Inference-Time Compute:** Inspectable reasoning chains, step-by-step verification, and test-time budget optimization.
3. **Agentic Sandboxing & Security:** Micro-containerized isolation for autonomous tool use, anti-prompt-injection architectures, and formal permission systems.
4. **Democratized Open Science:** Reproducible datasets, public model scorecards, and accessible tooling for global researchers.

---

## 🚀 Interactive Portal & Web App

The repository contains the complete source code for the **Make AI Better** web application:
- **Interactive State of AI 2026 Radar:** Filter breaking news by category (Frontier Models, Reasoning, Agents, Open Weights, Safety).
- **Interactive Model Comparison Matrix:** Visual capability radar across frontier models.
- **Bilingual Interface:** Instant toggle between English and Portuguese (PT-BR).
- **Responsive & Ultra-Fast:** Pure modern HTML5/CSS3/JavaScript with zero bloated dependencies.

### Running Locally

You can launch the web app with any static HTTP server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node / npx
npx serve .
```

Open your browser at `http://localhost:8080`.

---

## 📁 Repository Structure

```
makeaibetter/
├── index.html                   # Main interactive website portal
├── styles/
│   └── main.css                 # Cyber-research glassmorphism styling & design system
├── scripts/
│   └── app.js                   # Particles canvas, interactive radar, filters & i18n
├── research/
│   ├── state_of_ai_2026.md      # Comprehensive technical State of AI 2026 report
│   └── breaking_news_sept_2026.json # Structured dataset of 2026 AI breakthroughs
├── assets/
│   └── icons/                   # Vector assets and badges
├── LICENSE                      # MIT Open Source License
└── README.md                    # You are here
```

---

## 🤝 Getting Involved & Contributing

We welcome researchers, engineers, and AI safety advocates:
1. **Submit Benchmarks & Papers:** Open a Pull Request adding new verified papers or benchmarks to `research/breaking_news_sept_2026.json`.
2. **Join the Discussions:** Propose new evaluation metrics and agent sandboxing standards in GitHub Issues.
3. **Connect:** Visit [makeaibetter.org](https://makeaibetter.org) or email `research@makeaibetter.org`.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
