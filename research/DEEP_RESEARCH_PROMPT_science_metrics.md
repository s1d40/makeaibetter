# Prompt de Deep Research — Dataset quantitativo para `science.html`

> **Como usar:** entregue todo o conteúdo abaixo da linha `═══` a um agente de deep
> research. Ele deve devolver **dois arquivos**: `research/science_metrics.json` e
> `research/science_metrics_report.md`. Nada além desses dois.
>
> Contexto para quem delega: esses números vão virar gráficos publicados em
> makeaibetter.com — um site que se apresenta como iniciativa de pesquisa. Um número
> errado num gráfico bonito é pior do que gráfico nenhum. O prompt foi escrito para
> tornar o "não encontrei" um resultado aceitável e explícito, em vez de empurrar o
> agente a preencher lacunas com estimativa.

═══════════════════════════════════════════════════════════════════════════════

## Papel

Você é analista de dados de pesquisa científica. Sua tarefa é levantar **séries
numéricas verificáveis** sobre o impacto da IA em seis domínios científicos, para
alimentar gráficos de um site público de pesquisa.

Data de referência: **setembro de 2026**. Priorize dados de 2023–2026, mas séries
históricas podem começar antes quando o gráfico exigir (ex.: crescimento do PDB
desde 1976).

## Regra inegociável

**Nunca invente, estime ou interpole um número para preencher uma lacuna.**

Cada valor numérico entregue precisa de uma fonte primária ou quase-primária
rastreável: paper revisado por pares, preprint (arXiv/bioRxiv), página oficial de
estatísticas de um banco de dados, blog técnico oficial do laboratório, ou
documentação de release. Blog de terceiros, notícia agregada e post de rede social
não servem como fonte primária — no máximo como pista para achar a fonte real.

Se uma série não existir publicamente, **marque-a como `"status": "not_found"` e
explique o que você procurou**. Uma série faltando é um resultado aceitável e útil.
Uma série inventada inutiliza o dataset inteiro.

Quando um número for uma estimativa **do próprio autor da fonte** (ex.: "equivalente
a cerca de 800 anos de pesquisa"), entregue-o marcado com
`"value_type": "author_estimate"` e cite a frase original em `quote`.

## As sete séries

Para cada uma: o gráfico pretendido está descrito para você entender a forma que o
dado precisa ter. Se durante a pesquisa você encontrar uma série **melhor** para
contar a mesma história, proponha-a em `alternative_suggestion` — mas entregue
também a que foi pedida, ou o `not_found`.

### S1 · Biologia — estruturas proteicas conhecidas ao longo do tempo
**Gráfico:** área empilhada em escala log, eixo x = ano.
**Precisa de:** contagem anual cumulativa de (a) estruturas determinadas
experimentalmente no Protein Data Bank e (b) estruturas preditas disponíveis no
AlphaFold Protein Structure Database, de 1976 (ou primeiro ano disponível) até 2026.
**Onde procurar:** estatísticas oficiais do RCSB PDB (`rcsb.org/stats`), EMBL-EBI
AlphaFold DB, papers de release do AlphaFold 2/3.
**Cuidado:** não confunda "estruturas depositadas no ano" com "total cumulativo" —
entregue explicitamente qual das duas, no campo `measure`.

### S2 · Astronomia — volume de dados e triagem automatizada
**Gráfico:** barras comparativas, escala log.
**Precisa de:** taxa de dados bruta por noite (TB/noite) de levantamentos
astronômicos — pelo menos SDSS, JWST e Vera C. Rubin Observatory / LSST — e, se
existir, a fração ou o número absoluto de alertas/objetos triados por modelos de
aprendizado de máquina versus inspeção humana.
**Onde procurar:** documentação técnica do Rubin Observatory, papers de data
management do LSST, documentação de pipeline do STScI para o JWST.
**Cuidado:** distinga dado bruto de dado processado/arquivado — são ordens de
grandeza diferentes.

### S3 · Medicina — duração das fases de descoberta de fármacos
**Gráfico:** barras horizontais empilhadas, duas linhas (tradicional vs assistida por IA).
**Precisa de:** duração média, em meses, por fase (descoberta de alvo → hit →
lead optimization → pré-clínico → Fase I), para o pipeline farmacêutico tradicional
e para programas conduzidos com IA. Se existirem casos concretos com cronograma
publicado (ex.: candidatos da Insilico Medicine, Exscientia, Recursion, ou os agentes
Robin / AI Co-Scientist), entregue caso a caso em vez de médias.
**Onde procurar:** relatórios do Tufts CSDD, papers de revisão em *Nature Reviews
Drug Discovery*, press releases regulatórios com datas (IND filing), registros em
ClinicalTrials.gov.
**Cuidado:** este é o item mais poluído por marketing de empresa. Prefira cronogramas
com data verificável (submissão de IND, início de Fase I) a alegações de "X vezes
mais rápido" sem denominador.

### S4 · Química — materiais cristalinos estáveis conhecidos
**Gráfico:** antes/depois em escala log, com a série histórica se existir.
**Precisa de:** número de estruturas cristalinas estáveis conhecidas antes do GNoME
(baseline do Materials Project / ICSD) e depois (as ~2,2 milhões anunciadas pelo
GNoME, mais quantas foram efetivamente sintetizadas e confirmadas em laboratório —
esse segundo número é o mais importante e o mais difícil).
**Onde procurar:** paper do GNoME na *Nature* (2023) e follow-ups, estatísticas do
Materials Project, papers do A-Lab (Berkeley).
**Cuidado:** "predito estável" ≠ "sintetizado" ≠ "verificado". Os três números são
diferentes por ordens de grandeza e a distinção é o ponto do gráfico. Houve crítica
publicada ao número de materiais "novos" do GNoME — registre-a em `caveats`.

### S5 · Quântica — erro lógico abaixo do limiar (Google Willow)
**Gráfico:** linha, eixo x = distância do código de superfície (d=3, 5, 7…),
eixo y = taxa de erro lógico por ciclo, escala log.
**Precisa de:** taxa de erro lógico medida por distância de código, do trabalho de
correção de erro quântico do Google (Willow, 2024–2026), incluindo o fator Λ
(supressão por incremento de distância). Se houver dados de latência do decodificador
neural em tempo real, entregue como série auxiliar.
**Onde procurar:** paper do Willow na *Nature* (dez/2024) e sucessores, arXiv do
Google Quantum AI.
**Cuidado:** distinga erro *lógico* de erro *físico* por qubit, e por ciclo de erro
*por ciclo* de erro *por experimento*.

### S6 · IA para IA — design de chips por aprendizado por reforço
**Gráfico:** comparação de tempo de projeto e qualidade de resultado.
**Precisa de:** tempo de floorplanning humano vs AlphaChip (em horas/semanas) e
métricas de qualidade comparáveis (wirelength, congestionamento, densidade) nas TPUs
do Google ou em benchmarks abertos.
**Onde procurar:** paper do AlphaChip na *Nature* (2021) e o follow-up de 2024,
documentação do repositório aberto de circuit training.
**Cuidado:** houve disputa pública sobre a reprodutibilidade desses resultados
(inclusive um artigo de retratação contestado). Registre os dois lados em `caveats` —
não escolha um lado.

### S7 · Comparativo entre domínios — fator de aceleração
**Gráfico:** dot plot em escala log, um ponto por domínio.
**Precisa de:** para cada um dos seis domínios, **um** fator de aceleração numérico
com denominador explícito ("Nx mais rápido que *o quê*, medido *como*"). A tabela
atual do site usa valores como "100x a 1.000x", "10.000x", "anos para semanas" — sem
fonte e com unidades incompatíveis. Sua tarefa é substituir cada um por um número
defensável **ou** marcá-lo como `not_found`.
**Cuidado:** é esperado e aceitável que vários fiquem `not_found`. Um dot plot com
três pontos sólidos vale mais do que seis pontos inventados.

## Formato de saída

### Arquivo 1 — `research/science_metrics.json`

```json
{
  "generated_at": "2026-09-__",
  "series": [
    {
      "id": "S1_protein_structures",
      "domain": "biology",
      "status": "ok",
      "title_pt": "Estruturas proteicas conhecidas",
      "title_en": "Known protein structures",
      "measure": "contagem cumulativa ao fim de cada ano",
      "unit": "estruturas",
      "scale_hint": "log",
      "value_type": "measured",
      "data": [
        { "x": 2020, "series": "pdb_experimental", "y": 170000 },
        { "x": 2021, "series": "alphafold_predicted", "y": 365000 }
      ],
      "sources": [
        {
          "label": "RCSB PDB — Statistics",
          "url": "https://...",
          "accessed": "2026-09-__",
          "kind": "official_database",
          "quote": "trecho curto que sustenta o número"
        }
      ],
      "caveats": [
        "PDB conta entradas, não proteínas únicas; redundância não removida."
      ]
    },
    {
      "id": "S7_speedup_medicine",
      "domain": "medicine",
      "status": "not_found",
      "searched": [
        "Tufts CSDD phase duration AI 2025",
        "Insilico Medicine IND timeline"
      ],
      "why_not_found": "As alegações públicas de aceleração não trazem denominador comparável; não localizei estudo com coorte de controle."
    }
  ]
}
```

Regras do JSON:
- `status` é `"ok"` ou `"not_found"`. Sem estados intermediários.
- Toda série `"ok"` tem pelo menos uma entrada em `sources` com `url` e `accessed`.
- `value_type` é `"measured"`, `"author_estimate"` ou `"modeled"`.
- Números são números JSON, nunca strings. Sem separador de milhar, sem sufixo "M"/"k".
- `caveats` é obrigatório quando a série tem qualquer ressalva metodológica, disputa
  pública ou ambiguidade de definição. Preferir listar demais a listar de menos.

### Arquivo 2 — `research/science_metrics_report.md`

Relatório extenso em português, estruturado assim:

1. **Sumário executivo** — o que foi encontrado, o que não foi, em até 300 palavras.
2. **Uma seção por série (S1–S7)** contendo: o que foi procurado, onde, o que foi
   encontrado, a tabela de números com a fonte de cada linha, e a discussão das
   ressalvas. Onde houver disputa pública sobre o resultado (S4 e S6 certamente
   têm), apresente os dois lados com as respectivas referências.
3. **Lacunas e riscos** — quais séries ficaram `not_found` e o que precisaria existir
   para preenchê-las.
4. **Bibliografia completa** — todas as fontes, com URL e data de acesso.

Escreva o relatório para um leitor que vai **decidir se publica ou não** cada
gráfico. Seja explícito sobre incerteza; não suavize.

## Critério de aceitação

O trabalho está pronto quando:
- Todo número no JSON é rastreável até uma fonte primária listada.
- Toda série sem fonte primária está marcada `not_found`, com o que foi buscado.
- As disputas públicas sobre GNoME (S4) e AlphaChip (S6) estão documentadas.
- O relatório permite a um terceiro refazer a verificação sem falar com você.
