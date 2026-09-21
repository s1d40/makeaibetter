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
├── history.html                 # The Computing Epic — horizontal timeline, 7 eras
├── science.html                 # AI for Science Hub — 6 scientific domains
├── styles/                      # main.css · history.css · science.css
├── scripts/                     # app.js · history.js · science.js
├── research/
│   ├── state_of_ai_2026.md      # Comprehensive technical State of AI 2026 report
│   └── breaking_news_sept_2026.json # Structured dataset of 2026 AI breakthroughs
├── tools/
│   ├── eras.json                # Era manifest: art direction, palettes, voices
│   └── generate-assets.mjs      # Build-time Gemini generator (art + narration)
├── assets/
│   ├── images/era-N.webp        # Generated chapter artwork (Gemini)
│   ├── audio/era-N-{pt,en}.mp3  # Generated chapter narration (Gemini TTS)
│   └── narration.json           # Narration scripts / transcripts
├── LICENSE                      # MIT Open Source License
└── README.md                    # You are here
```

---

## 🎨 Generated Chapter Assets (Gemini)

`history.html` presents 90 years of computing as a **horizontal timeline**: seven
full-width panels on a scroll-snapping rail, navigated with the arrows, the `←`/`→`
keys, the `CRONOLOGIA` bar, or the mouse wheel. Below 900px the rail falls back to a
vertical stack.

Each panel carries a piece of generated artwork and a bilingual voice-over. These are
produced **at build time** and committed as static files — the site itself never calls
an AI API, so no key is ever shipped to the browser.

| Asset | Model | Output |
|---|---|---|
| Chapter artwork | `gemini-3-pro-image` | `assets/images/era-N.webp` (16:9, 1280px) |
| Narration script | `gemini-3.8-flash` | `assets/narration.json` (PT + EN, ~120 words) |
| Voice-over | `gemini-3.1-flash-tts-preview` | `assets/audio/era-N-{pt,en}.mp3` |

### Regenerating

```bash
export GEMINI_API_KEY="..."          # or drop the key in ./gemini.api.key (gitignored)
node tools/generate-assets.mjs       # only fills in what is missing
node tools/generate-assets.mjs --only=7 --force   # redo a single era
```

Flags: `--only=1,3`, `--force`, `--skip-image`, `--skip-audio`. Requires Node 18+ and
`ffmpeg` on `PATH`. Art direction, colour palettes and narrator voices live in
[`tools/eras.json`](./tools/eras.json); the narration is grounded in the chapter copy
in `scripts/history.js`, which stays the single source of truth for the text.

---

## 📺 Videos

Videos live on YouTube; the site embeds them through a **facade**. A stock
YouTube `<iframe>` pulls over 1 MB of JavaScript and sets a tracking cookie
before anyone presses play, so the page renders a local poster instead and only
creates the iframe on click — pointed at `youtube-nocookie.com`.

To publish a video:

1. Upload it to the YouTube channel.
2. Copy the 11-character ID from the URL (`youtube.com/watch?v=<ID>`).
3. Paste it into the matching entry in [`assets/videos.json`](./assets/videos.json).

That is the whole workflow — no markup changes. While `youtubeId` is empty the
card shows its poster with a "coming soon" badge and a disabled button, so
nothing breaks in the layout.

Posters are extracted from the source file:

```bash
ffmpeg -ss 2 -i video.mp4 -frames:v 1 -vf scale=1280:-2 -quality 82 \
  assets/video-posters/<slot>.webp
```

Source `.mp4` files stay out of git (`.gitignore`) — YouTube is the host.

---

## 🤝 Getting Involved & Contributing

We welcome researchers, engineers, and AI safety advocates:
1. **Submit Benchmarks & Papers:** Open a Pull Request adding new verified papers or benchmarks to `research/breaking_news_sept_2026.json`.
2. **Join the Discussions:** Propose new evaluation metrics and agent sandboxing standards in GitHub Issues.
3. **Connect:** Visit [makeaibetter.org](https://makeaibetter.org) or email `research@makeaibetter.org`.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
