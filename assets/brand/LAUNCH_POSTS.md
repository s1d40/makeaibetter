# Posts de lançamento

Três versões do mesmo ângulo. Todos os números saem de
`research/science_metrics.json` e estão conferíveis na fonte primária citada lá.

> **Leia a última seção antes de postar.** Há um risco de credibilidade que
> precisa ser resolvido primeiro.

---

## 1 · Hacker News

**Título** (69 caracteres — factual, sem isca):

```
GNoME predicted 2.2M stable crystals. 41 have been confirmed in a lab
```

**URL:** `https://makeaibetter.com/en/science.html`

**Primeiro comentário** (o autor comenta o próprio post explicando o método —
no HN isso é esperado e evita a primeira leva de perguntas):

```
Author here. I kept running into the same numbers about AI in science, always
quoted without a denominator: "1000x faster", "millions of new materials". So I
tried to build the dataset those claims would need, one series per domain, each
with a primary source and an explicit basis of comparison.

Three things that surprised me:

The materials funnel is steeper than the headline suggests. GNoME predicted 2.2M
crystal structures, 381k of which sit on the convex hull. 736 have since been
synthesized independently in the literature, and the A-Lab robotic platform
confirmed 41 out of 58 attempted. Each step down is roughly an order of
magnitude. None of that makes GNoME less impressive — predicting is a different
job from verifying — but "2.2 million new materials" and "41 confirmed" are
answers to different questions, and only one of them usually travels.

Structure prediction has the same shape at a different scale. The Protein Data
Bank accumulated 266k experimentally solved structures over five decades.
AlphaFold DB holds 214M predictions. The gap is the point, in both directions.

Of six domains, only four have a speedup factor I could defend. Drug discovery
came back explicitly not-found: the public claims don't carry a comparable
control cohort, so the cell says so instead of guessing. Quantum computing isn't
expressible as a speedup at all — the Willow result is that logical error per
cycle *falls* as the surface code grows (0.65% at d=3, 0.31% at d=5, 0.143% at
d=7), which is a different kind of claim.

The two live disputes are in there with both sides: the criticism that many
GNoME structures are compositional substitutions rather than novel materials,
and the reproducibility challenge to AlphaChip's benchmarks. Those are recorded
as caveats under the relevant chart, not buried.

Dataset is MIT and machine-readable: makeaibetter.com/research/science_metrics.json
The survey methodology and full bibliography:
makeaibetter.com/research/metricas-ia-ciencia.html (Portuguese)

Happy to be told where I got it wrong — that's most of why I'm posting.
```

---

## 2 · r/MachineLearning

**Título:**

```
[D] I tried to source the numbers everyone cites about AI in science. Two of six domains had no comparable study.
```

**Corpo:**

```
Every few weeks a claim circulates about AI compressing decades of science into
months. The numbers are usually real and the framing usually isn't — "10,000x"
with no statement of what the baseline was or how it was measured.

I built the dataset those claims would need. Seven series across six domains,
each with a primary source, an explicit denominator, and recorded caveats.
Anything without a defensible source is marked not-found rather than estimated.

What came out:

| Domain | Factor | Basis |
|---|---|---|
| Structural biology | 50,000x | wet-lab crystallography hours → AlphaFold inference seconds |
| Materials chemistry | 10,000x | VASP DFT relaxation CPU-hours → GNN relaxation GPU-seconds |
| Astronomy | 1,000x | human alert triage minutes → ML broker seconds |
| Chip floorplanning | 53x | human engineer weeks → AlphaChip hours |
| Drug discovery | not found | no comparable published control cohort |
| Quantum | n/a | the result isn't a speedup |

The last two rows are the interesting ones. Drug discovery has plenty of "X
times faster" claims and no study I could find that compares matched cohorts
end to end — the timelines that exist are single programs with verifiable
milestones (Insilico's ISM001-055: 18 months target to IND candidate against a
~72 month industry reference), which is a case study, not a rate.

The verification funnel in materials is the finding I did not expect. GNoME:
2.2M predicted → 381k on the convex hull → 736 independently synthesized → 41
confirmed by A-Lab out of 58 attempted. The published criticism that many
structures are compositional substitutions is recorded alongside the numbers,
as is the contested A-Lab PXRD characterization.

Data is MIT licensed: https://makeaibetter.com/research/science_metrics.json
Charts and sources: https://makeaibetter.com/en/science.html

Corrections welcome, especially on the drug discovery row — if a matched-cohort
study exists I'd rather have the number than the gap.
```

---

## 3 · X / LinkedIn

```
O GNoME previu 2,2 milhões de estruturas cristalinas estáveis.

381 mil estão no convex hull.
736 foram sintetizadas de forma independente na literatura.
41 foram confirmadas pelo A-Lab, de 58 tentativas.

Cada degrau é uma ordem de grandeza — e isso não diminui o GNoME. Prever e
verificar são trabalhos diferentes. Só que "2,2 milhões de materiais novos" e
"41 confirmados" respondem perguntas diferentes, e normalmente só uma viaja.

Levantamos sete séries assim, em seis domínios, cada número com a fonte primária
e a base da comparação. Onde não existe estudo comparável, está escrito que não
existe.

makeaibetter.com
```

---

## Antes de postar: um risco a resolver

O post afirma, em essência, *"fomos conferir os números"*. Isso precisa ser
verdade no nível que um leitor do HN vai testar — e ele vai clicar na fonte do
primeiro número que achar estranho.

O que de fato aconteceu: o levantamento foi produzido por um agente de deep
research seguindo `research/DEEP_RESEARCH_PROMPT_science_metrics.md`, e a
verificação foi por **amostragem e conferência contra conhecimento prévio**, não
uma releitura de cada fonte primária. Os números batem com o que se sabe
publicamente — Willow d=7 em 0,143%/ciclo, A-Lab 41 de 58, PDB 266 mil — mas
"bate com o que eu sabia" não é o mesmo que "reli o paper".

Duas opções, e a escolha é sua:

**A. Verificar as manchetes antes de postar.** Abrir as fontes primárias dos
cinco números que o post lidera (funil do GNoME, PDB vs AlphaFold DB, as três
taxas do Willow, o cronograma da Insilico, o fator do AlphaChip) e confirmar
cada um. É uma hora de trabalho e elimina o risco.

**B. Declarar o método no post.** Acrescentar uma linha ao comentário do HN:
*"The survey was assembled with an AI research agent against a written protocol;
I verified a sample rather than every source. The protocol is in the repo."*
Isso é honesto e o HN respeita — mas convida escrutínio, então só funciona se
A também tiver sido feito nos números principais.

A recomendação é **A, e depois B**. O ângulo do post é credibilidade
metodológica: um erro numa das cinco manchetes custa mais do que o post inteiro
rende.
