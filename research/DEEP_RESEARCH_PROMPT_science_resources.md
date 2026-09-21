# Prompt de Deep Research — Acervo de links e ferramentas por domínio científico

> **Como usar:** entregue todo o conteúdo abaixo da linha `═══` a um agente de deep
> research. Ele deve devolver **dois arquivos**: `research/science_resources.json` e
> `research/science_resources_report.md`. Nada além desses dois.
>
> Contexto para quem delega: este acervo vira uma seção de recursos em
> `makeaibetter.com/science.html`, publicada nos dois idiomas. Link quebrado ou
> ferramenta que diz ser grátis e pede cartão queima a credibilidade da página
> inteira — por isso o prompt gasta mais linhas em critério de rejeição do que em
> critério de busca.

═══════════════════════════════════════════════════════════════════════════════

## Papel

Você é curador de acervo científico. Sua tarefa é montar, para **seis domínios
científicos**, quatro coleções: onde acompanhar notícias, quais links valem a
visita, quais ferramentas de IA a pessoa pode abrir no navegador e usar de graça,
e quais repositórios open source sustentam o campo.

Data de referência: **setembro de 2026**. O acervo é para leitor curioso de nível
técnico intermediário — não é bibliografia acadêmica nem lista de divulgação rasa.

## Os seis domínios

Use exatamente estes identificadores no JSON:

| `domain` | Assunto |
|---|---|
| `biology` | Biologia molecular, genômica, dobramento de proteínas |
| `astronomy` | Astronomia, astrofísica, exoplanetas, cosmologia |
| `medicine` | Medicina, descoberta de fármacos, oncologia de precisão |
| `chemistry` | Química, ciência dos materiais, laboratórios autônomos |
| `quantum` | Computação quântica, correção de erro, matéria condensada |
| `ai4ai` | IA aplicada à própria IA: projeto de chips, dados sintéticos, NAS |

## As quatro coleções, por domínio

### A · `news` — onde acompanhar o campo
**Meta: 4 a 6 por domínio.**

Fontes que publicam com regularidade e têm linha editorial identificável. Misture
níveis: pelo menos uma de alcance geral bem-feita, uma especializada no domínio, e
uma fonte primária (blog de laboratório, sala de imprensa de instituição).

### B · `links` — o que vale a visita
**Meta: 4 a 6 por domínio.**

Coisas que não são notícia: banco de dados público navegável, visualização
interativa, explicação canônica de um conceito, repositório de referência, painel
de dados ao vivo, curso aberto. Prefira o que a pessoa **usa ou explora**, não o
que ela só lê.

### C · `tools` — ferramentas de IA com interface web
**Meta: 3 a 5 por domínio.**

Ferramentas de IA onde a pessoa **abre o navegador, mexe e vê resultado**, sem
pagar e sem instalar nada. Este é o item mais difícil de acertar e o que mais
gera erro — leia a seção de rejeição antes de começar.

O filtro decisivo é interface, não capacidade. Uma API excelente, um pacote de
Python ou um notebook que exige clonar repositório **não entram aqui** — vão para
a coleção `repos`. Aqui só entra o que tem UI: campo para colar, botão para
rodar, visualização que responde ao que você mexeu.

Prefira, nesta ordem:
1. Roda no navegador **sem cadastro nenhum** — o mais valioso da lista inteira.
2. Exige conta gratuita, sem cartão.
3. Roda em Colab/HuggingFace Space com um clique, sem configurar ambiente.

### D · `repos` — repositórios open source
**Meta: 3 a 5 por domínio.**

Código aberto que sustenta o domínio: a implementação de referência de um
modelo, a biblioteca que todo mundo usa, o simulador, o pipeline de dados.

Aqui o critério muda: não precisa ter UI, mas precisa estar **vivo e utilizável**.
Registre licença, atividade recente e se existe demo hospedada — um repositório
com Space ou Colab pronto vale muito mais para o nosso leitor do que um que exige
montar ambiente.

Prefira a implementação oficial do laboratório que publicou o trabalho à
reimplementação de terceiro, salvo quando a reimplementação for claramente a que
a comunidade adotou — e nesse caso diga isso no campo `what`.

## Critérios de rejeição

Rejeite e não inclua:

1. **Link que não responde 200.** Verifique cada URL. Redirecionamento para a home
   do site conta como quebrado: o alvo específico sumiu.
2. **Conteúdo atrás de paywall rígido** na coleção `news`, salvo se houver uma
   cota gratuita mensal real — e então registre-a em `access`.
3. **"Grátis" que não é grátis.** Teste por tempo limitado, "grátis" que exige
   cartão de crédito, e camada gratuita que não deixa rodar nada útil são
   rejeições. Se a ferramenta é gratuita só para acadêmicos com e-mail
   institucional, ela entra com `access: "academic"` — nunca como `"free"`.
4. **Listicle de SEO, agregador de afiliados, blog que republica press release**
   sem apuração. Se a página existe para ranquear, não entra.
5. **Ferramenta abandonada.** Sem commit, release ou post há mais de 18 meses, ou
   com demo online fora do ar. Registre a data do último sinal de vida em
   `last_activity`.
6. **Conteúdo gerado por IA sem curadoria humana** se apresentando como notícia.
7. **Em `tools`: qualquer coisa sem interface web.** API, pacote, CLI e notebook
   que exige clonar repositório são rejeição nesta coleção — reclassifique em
   `repos` em vez de descartar.
8. **Em `repos`: licença ausente ou proibitiva.** Sem arquivo de licença, o código
   não é utilizável juridicamente, por mais aberto que pareça. Licença apenas para
   pesquisa não comercial entra, mas com o fato registrado em `license`.

Quando uma coleção não atingir a meta mínima depois de busca honesta, entregue
menos itens e explique no relatório. **Preencher a cota com item fraco é pior do
que entregar cinco de seis.**

## O que registrar sobre cada ferramenta

Para a coleção `tools`, a pergunta que o leitor faz é "consigo clicar e usar
agora?". Responda isso nos campos:

- `access`: `"free"` (uso real sem pagar e sem cartão), `"freemium"` (cota
  gratuita útil, com o limite descrito em `access_note`), `"academic"` (grátis
  mediante vínculo institucional), `"open_source"` (roda localmente, sem serviço
  pago envolvido).
- `needs_account`: `true` ou `false`. Ferramenta que roda no navegador sem
  cadastro é a mais valiosa desta lista — marque isso com clareza.
- `runs_in_browser`: `true` se não exige instalação.
- `made_by`: quem opera. Uma ferramenta mantida pelo laboratório que publicou o
  modelo tem peso diferente de um wrapper de terceiro.

## Formato de saída

### Arquivo 1 — `research/science_resources.json`

```json
{
  "generated_at": "2026-09-__",
  "domains": {
    "biology": {
      "news": [
        {
          "title": "Nome da fonte",
          "url": "https://...",
          "lang": "en",
          "what": "Uma frase dizendo o que esta fonte cobre e por que ela é diferente das outras da lista.",
          "kind": "general | specialist | primary",
          "access": "free",
          "access_note": null,
          "verified": "2026-09-__",
          "http_status": 200
        }
      ],
      "links": [
        {
          "title": "...",
          "url": "https://...",
          "lang": "en",
          "what": "O que a pessoa consegue fazer ou ver aqui.",
          "kind": "database | visualization | explainer | repository | dashboard | course",
          "access": "free",
          "verified": "2026-09-__",
          "http_status": 200
        }
      ],
      "tools": [
        {
          "title": "...",
          "url": "https://...",
          "lang": "en",
          "what": "O que a ferramenta faz, em uma frase concreta — não 'plataforma de IA para biologia'.",
          "try_this": "Uma primeira ação de 2 minutos que mostra a ferramenta funcionando. Ex.: colar uma sequência de aminoácidos e ver a estrutura prevista.",
          "ui_kind": "web_app | notebook_hosted | huggingface_space | interactive_viz",
          "access": "free",
          "access_note": null,
          "needs_account": false,
          "runs_in_browser": true,
          "made_by": "EMBL-EBI / Google DeepMind",
          "last_activity": "2026-08",
          "verified": "2026-09-__",
          "http_status": 200
        }
      ],
      "repos": [
        {
          "title": "org/repositorio",
          "url": "https://github.com/...",
          "what": "O que o código faz e por que este repositório é a referência do assunto.",
          "license": "Apache-2.0",
          "language": "Python",
          "stars": 12400,
          "last_commit": "2026-09-__",
          "has_demo": true,
          "demo_url": "https://huggingface.co/spaces/...",
          "official": true,
          "verified": "2026-09-__",
          "http_status": 200
        }
      ]
    }
  },
  "rejected": [
    {
      "title": "...",
      "url": "https://...",
      "domain": "chemistry",
      "collection": "tools",
      "reason": "Anuncia camada gratuita, mas o cadastro exige cartão de crédito."
    }
  ]
}
```

Regras do JSON:

- As seis chaves de `domains` são obrigatórias, mesmo que alguma coleção venha
  curta. Nunca invente domínio novo nem renomeie os existentes.
- `lang` usa código ISO: `"en"`, `"pt"`, `"es"`. Se a fonte for bilíngue, use um
  array.
- `what` é uma frase específica. "Plataforma de IA para descoberta de fármacos"
  não diz nada; "prevê afinidade de ligação entre uma molécula e uma proteína a
  partir do SMILES" diz.
- `try_this` só existe em `tools` e é obrigatório. Se você não conseguiu descrever
  uma primeira ação concreta, provavelmente não abriu a ferramenta — abra.
- `ui_kind` também só existe em `tools`. Se nenhum dos valores se aplica, o item
  não pertence a esta coleção.
- Em `repos`, `stars` e `last_commit` saem da API do GitHub ou da página do
  repositório, não de estimativa. `official: true` significa que quem mantém é o
  laboratório ou grupo autor do trabalho.
- `demo_url` só é preenchido se você abriu a demo e ela respondeu. Demo fora do ar
  vira `has_demo: false`, com o fato registrado no relatório.
- `verified` é a data em que você carregou a URL. `http_status` é o código real
  que ela devolveu.
- `rejected` não é opcional. Ele é o que permite a alguém auditar seu critério, e
  evita que a próxima rodada de pesquisa repita o mesmo caminho sem saída.

### Arquivo 2 — `research/science_resources_report.md`

Relatório em português, nesta ordem:

1. **Sumário** — o que você encontrou, quais coleções ficaram curtas e por quê.
2. **Uma seção por domínio** — apresente as quatro coleções e justifique as escolhas
   em uma linha cada. Onde você escolheu entre dois recursos parecidos, diga qual
   critério desempatou.
3. **Ferramentas: o que foi rejeitado e por quê** — a seção mais útil do relatório.
   Nomeie as que se anunciam como gratuitas e não são, e as que foram movidas para
   `repos` por não terem interface.
4. **Repositórios sem demo** — quais mereciam uma e não têm. É candidato a
   contribuição nossa.
5. **Lacunas de idioma** — quais domínios não têm nenhuma fonte boa em português.
   Não invente uma para preencher; registre a ausência.
6. **Risco de validade** — quais itens têm maior chance de quebrar ou virar pago em
   doze meses.

## Critério de aceitação

- Toda URL foi carregada e o código de resposta está registrado.
- Toda entrada de `tools` tem `try_this` escrito por quem abriu a ferramenta, e
  um `ui_kind` válido — nada sem interface web sobrou nesta coleção.
- Toda entrada de `repos` tem licença, data do último commit e o campo `official`
  preenchido.
- Nenhum item marcado `access: "free"` exige cartão de crédito.
- `rejected` tem pelo menos uma entrada por domínio — se você não rejeitou nada em
  algum domínio, provavelmente não procurou fundo o bastante.
- As seis chaves de domínio existem, cada uma com as quatro coleções (`news`,
  `links`, `tools`, `repos`), na nomenclatura exata da tabela.
