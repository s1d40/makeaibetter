# Prompts para o Google NotebookLM

Prontos para copiar e colar. Antes de usar qualquer um, **suba as fontes** — sem
elas o NotebookLM não tem do que falar, e a qualidade do resultado depende mais
das fontes do que do prompt.

---

## 1. Fontes a subir neste notebook

Do repositório, nesta ordem de importância:

| Arquivo | Por que importa |
|---|---|
| `research/science_metrics_report.md` | Relatório com todos os números, fontes e controvérsias |
| `research/science_metrics.json` | Dataset estruturado — o NotebookLM lê JSON como texto |
| `research/ai_for_science_research.md` | Dossiê dos 6 domínios científicos |
| `research/history_of_computing_research.md` | Dossiê das 7 eras da computação |
| `research/state_of_ai_2026.md` | Panorama de IA em 2026 |
| `assets/narration.json` | Narrações já escritas das 7 eras (PT e EN) |
| `research/breaking_news_sept_2026.json` | Dataset de marcos de 2026 |

Vale subir também os papers primários citados na bibliografia do relatório
(AlphaFold, GNoME, Willow, AlphaChip). O NotebookLM aceita PDF e URL, e ter o
paper original do lado reduz muito a chance de o modelo inventar.

> **Um aviso que economiza retrabalho:** o NotebookLM só fala do que está nas
> fontes. Se um número não estiver num arquivo que você subiu, ele não vai
> aparecer no áudio, no vídeo nem no relatório — e isso é uma proteção, não uma
> limitação.

---

## 2. Áudio — Audio Overview

Cole na caixa **"Customize"** antes de gerar.

### 2.1 Episódio principal, português (~15 min)

```
Público: pessoas curiosas por ciência e tecnologia, sem formação técnica.

Conte a história da IA na ciência em 2026 seguindo esta espinha dorsal:
1. Abra com o funil dos materiais do GNoME — 2,2 milhões de estruturas previstas,
   381 mil estáveis, 736 sintetizadas de forma independente, 41 confirmadas pelo
   A-Lab. Use esse funil para estabelecer a diferença entre prever e verificar.
2. Biologia: o salto do Protein Data Bank (266 mil estruturas em cinco décadas de
   laboratório) para o AlphaFold DB (214 milhões de previsões em um ano).
3. Química, medicina e projeto de chips, nessa ordem.
4. Feche com o Willow e o que significa "abaixo do limiar de erro".

Regras inegociáveis:
- Todo número vem acompanhado da base de comparação. Nunca diga "mil vezes mais
  rápido" sem dizer mais rápido do que quê e medido como.
- Dedique pelo menos dois minutos às controvérsias documentadas nas fontes: a
  crítica ao número de materiais "novos" do GNoME e a disputa de reprodutibilidade
  do AlphaChip. Apresente os dois lados sem escolher um.
- Não diga que a IA "resolveu" nenhum desses campos. O tema é aceleração de
  etapas específicas, não substituição do método científico.
- Onde o relatório diz que não há estudo comparável (aceleração em medicina),
  diga isso explicitamente em vez de pular o assunto.

Tom: documental e curioso. Sem hype, sem vocabulário de marketing.
```

### 2.2 Mesmo episódio em inglês

```
Audience: science-curious general public, no technical background.

Same structure as the Portuguese episode: open with the GNoME materials funnel
(2.2M predicted, 381k stable, 736 independently synthesized, 41 A-Lab confirmed)
to establish the gap between predicting and verifying. Then biology (PDB's 266k
lab-solved structures vs AlphaFold DB's 214M predictions), then chemistry,
medicine and chip design, closing on Willow and what "below threshold" means.

Non-negotiable: every number carries its denominator. Spend at least two minutes
on the documented controversies — the criticism of GNoME's "novel materials"
count and the AlphaChip reproducibility dispute — presenting both sides. Where
the report says no comparable study exists (drug discovery speedup), say so.

Tone: documentary, curious, no hype.
```

### 2.3 Episódio curto de divulgação (~6 min, para redes)

```
Um único fio condutor: a diferença entre "a IA previu" e "alguém verificou".

Use exatamente três exemplos, nessa ordem:
- GNoME: 2,2 milhões de estruturas previstas, 41 confirmadas em laboratório pelo A-Lab.
- AlphaFold: 214 milhões de estruturas previstas, e o que uma previsão de estrutura
  não substitui.
- Willow: por que erro que cai quando o código cresce é um resultado diferente em
  natureza de "temos mais qubits".

Termine com uma pergunta aberta ao ouvinte, não com uma conclusão fechada.
Sem introdução longa: comece direto no primeiro número.
```

### 2.4 Episódio da história da computação (~12 min)

Use este com as fontes de história (`history_of_computing_research.md` e
`assets/narration.json`).

```
Sete capítulos, um por era: 1936 Turing, 1947 transistor, 1971 Intel 4004,
1984 PC e web, 2012 deep learning, 2017 transformers, 2024-2026 Willow e
raciocínio System-2.

Em cada era, amarre em uma ideia só: o que passou a ser possível que não era
antes. Não liste especificações técnicas.

O fio condutor do episódio é a separação entre hardware e software que Turing
formalizou em 1936, e como cada era seguinte redefine onde fica essa fronteira.

As narrações em assets/narration.json já são o roteiro aprovado de cada capítulo —
use-as como base factual e de tom, expandindo com o dossiê de pesquisa.
```

---

## 3. Vídeo — Video Overview

O Video Overview gera slides narrados. Ele se beneficia muito de instruções
sobre **o que mostrar**, não só o que falar.

### 3.1 Vídeo explicativo dos dados

```
Formato: explicação visual de dados, não apresentação corporativa.

Um slide por ideia, nesta sequência:
1. O funil do GNoME em escala logarítmica: 2,2 mi previstas → 381 mil estáveis →
   736 sintetizadas → 41 confirmadas. Deixe claro visualmente que cada degrau é
   uma ordem de grandeza.
2. Duas curvas no mesmo eixo log: PDB (1976-2026) e AlphaFold DB (2021-2026).
   O salto vertical de 2021 para 2022 é o ponto do slide.
3. Cronograma comparado de descoberta de fármacos: 72 meses do pipeline
   tradicional contra 30 meses do caso ISM001-055 da Insilico. Marque que são
   recortes diferentes, não a mesma medida.
4. Erro lógico por ciclo contra distância do código no Willow: d=3, d=5, d=7.
   A linha desce quando o código cresce — esse é o resultado.
5. Um slide final só com as ressalvas metodológicas.

Em todo slide que traz um número, escreva na tela a base da comparação.
Sem ícones decorativos, sem stock photo, sem gradiente de fundo animado.
```

### 3.2 Vídeo da linha do tempo da computação

```
Formato: linha do tempo horizontal, sete paradas, de 1936 a 2026.

Cada parada tem: o ano, o nome próprio de quem fez, e a única frase que explica
por que aquilo mudou o que era possível.

Visual: escuro, tipografia grande, uma imagem conceitual por era. Evite retratos
de pessoas — prefira o objeto ou o conceito (fita perfurada, transistor, wafer,
CRT, rack de GPU, malha de atenção, criostato).

Ritmo: sem pressa nas três primeiras eras, mais ágil de 1984 em diante.
```

### 3.3 Vídeo curto vertical (formato rede social)

```
Menos de 60 segundos, orientação vertical, um único número na tela por vez.

Roteiro: "A IA previu 2,2 milhões de materiais novos. Quantos foram realmente
feitos em laboratório? Quarenta e um."

Depois disso, cinco segundos explicando por que a diferença não é um escândalo —
é como funciona a verificação científica — e o convite para ver o levantamento
completo.

Sem música épica. Sem contagem regressiva.
```

---

## 4. Relatórios

O NotebookLM tem formatos prontos (Briefing, Guia de estudos, FAQ, Linha do
tempo) e aceita relatório personalizado. Estes são para a opção personalizada.

### 4.1 Briefing para tomada de decisão editorial

```
Escreva um briefing de no máximo duas páginas para alguém que precisa decidir
quais desses dados publicar num site de pesquisa.

Estrutura:
- Tabela: cada série (S1 a S7), o que ela mede, a fonte, e um veredito de
  "publicar / publicar com ressalva / não publicar".
- Para cada "publicar com ressalva", qual ressalva precisa aparecer junto do
  gráfico na página.
- Lista dos números que aparecem em material de divulgação por aí mas que este
  levantamento NÃO sustenta.
- As duas controvérsias documentadas, em um parágrafo cada, com o que ainda está
  em aberto.

Seja explícito sobre incerteza. Não suavize.
```

### 4.2 Guia de checagem para jornalista

```
Produza um guia de verificação para um jornalista que vai escrever sobre IA na
ciência e não é especialista.

Para cada uma das seis áreas:
- A afirmação que ele provavelmente vai receber de uma assessoria de imprensa.
- A pergunta que ele deve fazer para testar essa afirmação.
- O que as fontes deste notebook respondem a essa pergunta.
- O erro de interpretação mais comum.

Um exemplo do tipo de par que quero: afirmação "o GNoME descobriu 2,2 milhões de
materiais"; pergunta "descobriu, previu ou sintetizou?".
```

### 4.3 Linha do tempo cruzada

```
Monte uma linha do tempo única, de 2020 a 2026, cruzando as seis áreas
científicas com os marcos de modelos de IA.

Cada entrada: data, o que aconteceu, em qual área, e se o resultado foi
verificado de forma independente até hoje.

Ordene por data, não por área. Quero enxergar o que foi simultâneo.
```

### 4.4 Glossário

```
Glossário dos termos técnicos que aparecem nas fontes, para leitor não
especialista. Cada verbete em no máximo três frases, com um exemplo concreto
tirado das próprias fontes.

Inclua obrigatoriamente: convex hull, distância de código, erro lógico por ciclo,
limiar de correção de erro, escurecimento de limbo, ADMET, candidato IND,
floorplanning, wirelength, modelo substituto (surrogate).
```

### 4.5 Perguntas para checar o próprio notebook

Cole no chat, uma por vez. Servem para testar se as fontes sustentam o que você
pretende publicar:

```
Liste todo número que aparece nas fontes sem uma citação primária associada.
```
```
Onde as fontes se contradizem entre si? Cite os trechos.
```
```
Que afirmação deste conjunto de fontes tem maior chance de envelhecer mal em
doze meses, e por quê?
```
```
Se um revisor cético quisesse derrubar a conclusão mais forte destas fontes,
qual seria o argumento mais eficaz dele?
```

---

## 5. Mapa mental

O mapa mental do NotebookLM é gerado sem prompt, mas dá para guiar por chat
antes de gerar:

```
Antes de montar o mapa mental, organize o material em torno de um eixo só:
o ciclo previsão → verificação → publicação. Cada área científica é um ramo, e
em cada ramo os nós são as etapas desse ciclo, não os nomes dos modelos.
```

---

## 6. Sobre imagens

**O NotebookLM não gera imagens avulsas.** Ele produz slides ilustrados dentro do
Video Overview e, onde o formato Infográfico estiver disponível, uma peça única
de resumo visual. Para gerar imagem solta você já tem ferramenta melhor no
próprio repositório:

```bash
node tools/generate-assets.mjs --only=3 --force --skip-audio
```

Isso usa `gemini-3-pro-image` com a direção de arte em `tools/eras.json`. Para
uma arte nova, acrescente uma entrada nesse arquivo em vez de pedir ao NotebookLM.

Se quiser mesmo assim uma peça visual de resumo no NotebookLM, use o formato
Infográfico com:

```
Uma peça vertical, escura, sem ícone decorativo.

Conteúdo: o funil de verificação do GNoME em quatro degraus, com a contagem em
cada degrau e a fonte no rodapé. Nada além disso.

Tipografia grande nos números, pequena nos rótulos. A queda entre o primeiro e o
último degrau é o único efeito visual necessário.
```

---

## 7. O que não pedir

Coisas que produzem resultado ruim ou enganoso com estas fontes:

- **"Faça um resumo geral"** — devolve genérico. Sempre dê um eixo narrativo.
- **"Quanto a IA acelerou a ciência?"** — a pergunta não tem denominador, e o
  relatório registra justamente que medicina ficou sem estudo comparável.
- **Pedir projeção para 2027 ou além** — nenhuma fonte sustenta previsão, e o
  modelo vai preencher a lacuna com plausibilidade.
- **Pedir para "deixar mais impactante"** — nestas fontes, impacto vem do
  contraste entre 2,2 milhões e 41. Inflar adjetivo só reduz a credibilidade.
