# Kit de marca e canais sociais

Gerado por `tools/build-social.mjs` (imagens) e revisado à mão (textos).
As contagens abaixo foram conferidas por script — não confie no olho para limite de caractere.

## Textos por canal

### Instagram — Bio

Limite: **150** caracteres.

**Português** (122) ✓

```
Pesquisa aberta em IA. Publicamos os números com a fonte primária — e dizemos quando o estudo não existe.
makeaibetter.com
```

**English** (127) ✓

```
Open AI research. We publish the numbers with their primary source — and say so when the study does not exist.
makeaibetter.com
```

### Threads — Bio

Limite: **150** caracteres.

**Português** (119) ✓

```
IA na ciência, com fonte. 2,2 mi de materiais previstos, 41 confirmados em laboratório — a diferença é o nosso assunto.
```

**English** (105) ✓

```
AI in science, with sources. 2.2M materials predicted, 41 confirmed in the lab — that gap is our subject.
```

### TikTok — Bio

Limite: **80** caracteres.

**Português** (63) ✓

```
IA na ciência sem hype. Todo número tem fonte.
makeaibetter.com
```

**English** (67) ✓

```
AI in science, no hype. Every number has a source.
makeaibetter.com
```

### X / Twitter — Bio

Limite: **160** caracteres.

**Português** (145) ✓

```
Iniciativa de pesquisa independente em IA. Dados verificados, denominador explícito, ressalva registrada. Onde não há estudo, dizemos que não há.
```

**English** (130) ✓

```
Independent AI research initiative. Verified data, explicit denominators, caveats on the record. Where no study exists, we say so.
```

### Facebook — Descrição curta

Limite: **255** caracteres.

**Português** (251) ✓

```
Make AI Better é uma iniciativa de pesquisa independente sobre inteligência artificial. Publicamos dados quantitativos sobre o impacto da IA na ciência, cada número com sua fonte primária e suas ressalvas metodológicas. Conteúdo em português e inglês.
```

**English** (236) ✓

```
Make AI Better is an independent research initiative on artificial intelligence. We publish quantitative data on AI's impact in science, every number with its primary source and methodological caveats. Content in Portuguese and English.
```

### LinkedIn — Slogan (tagline)

Limite: **120** caracteres.

**Português** (84) ✓

```
Pesquisa aberta em IA — dados verificados, fontes primárias e ressalvas no registro.
```

**English** (73) ✓

```
Open AI research — verified data, primary sources, caveats on the record.
```

### YouTube — Descrição do canal

Limite: **1000** caracteres.

**Português** (830) ✓

```
Make AI Better é uma iniciativa de pesquisa independente sobre inteligência artificial.

Aqui a gente faz uma coisa simples e incomum: publica o número junto com a base de comparação e a fonte primária. Quando não existe estudo comparável, a gente escreve que não existe, em vez de estimar.

Dois exemplos do que isso significa na prática. O GNoME previu 2,2 milhões de estruturas cristalinas estáveis — 41 foram confirmadas por síntese autônoma no A-Lab. O AlphaFold DB tem 214 milhões de estruturas preditas; o Protein Data Bank acumulou 266 mil determinadas em laboratório em cinco décadas. A distância entre prever e verificar é o nosso assunto.

Os vídeos cobrem a história da computação, IA na ciência e o panorama de modelos de fronteira. O dataset completo, com fonte e ressalva por série, fica aberto em makeaibetter.com.
```

**English** (796) ✓

```
Make AI Better is an independent research initiative on artificial intelligence.

We do something simple and uncommon: we publish the number together with its basis of comparison and its primary source. When no comparable study exists, we write that it doesn't, instead of estimating.

Two examples of what that means. GNoME predicted 2.2 million stable crystal structures — 41 were confirmed by autonomous synthesis at the A-Lab. AlphaFold DB holds 214 million predicted structures; the Protein Data Bank accumulated 266,000 lab-solved ones over five decades. The distance between predicting and verifying is our subject.

Videos cover the history of computing, AI in science, and the frontier model landscape. The full dataset, with a source and caveats per series, is open at makeaibetter.com.
```

### GitHub — Descrição da organização

Limite: **160** caracteres.

**Português** (97) ✓

```
Pesquisa aberta em IA · dataset verificado de IA na ciência · site interativo em makeaibetter.com
```

**English** (89) ✓

```
Open AI research · verified AI-for-science dataset · interactive site at makeaibetter.com
```

## Imagens

Regeradas com `node tools/build-social.mjs` — renderiza o `logo.svg` em Chrome
headless no tamanho exato de cada peça, então mudar a marca é mudar um arquivo.

| Arquivo | Tamanho | Uso |
|---|---|---|
| `assets/brand/social/avatar-1080.png` | 1080×1080 | master de avatar, serve todos os canais |
| `assets/brand/social/avatar-800.png` | 800×800 | YouTube (mínimo 800×800) |
| `assets/brand/social/avatar-400.png` | 400×400 | Instagram, Threads, TikTok, X, Facebook |
| `assets/brand/social/youtube-banner.png` | 2560×1440 | YouTube — área segura central 1546×423 |
| `assets/brand/social/x-header.png` | 1500×500 | X / Twitter |
| `assets/brand/social/facebook-cover.png` | 1640×856 | Facebook (página) |
| `assets/brand/social/linkedin-cover.png` | 1128×191 | LinkedIn (página) |
| `assets/brand/social/post-1080.png` | 1080×1350 | post 4:5 (Instagram, Threads) |

### Área segura
Todo avatar é cortado em círculo pelas plataformas — por isso o símbolo ocupa
52% do quadro, não a borda inteira. O banner do YouTube é enviado em 2560×1440
mas o celular mostra só os 1546×423 centrais; todo texto está dentro dessa faixa.

## Arquivos de marca

| Arquivo | Quando usar |
|---|---|
| `assets/brand/logo.svg` | Padrão. Gradiente ciano → roxo → verde sobre fundo escuro. |
| `assets/brand/logo-mono.svg` | Uma cor via `currentColor`: carimbo, bordado, fundo claro, favicon. |

### Cores

| Token | Hex | Uso |
|---|---|---|
| Ciano | `#00f0ff` | Acento primário, início do gradiente |
| Roxo | `#8a2be2` | Meio do gradiente |
| Verde | `#00ff88` | Fim do gradiente, núcleo do símbolo |
| Obsidiana | `#07080c` | Fundo. A marca nunca vai sobre branco sem a versão mono. |

### Tipografia

Space Grotesk 800 para o wordmark, JetBrains Mono 400 para a linha de apoio.
Ambas no Google Fonts, as mesmas do site.
