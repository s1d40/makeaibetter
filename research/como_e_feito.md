# Como este site é feito

Quase todo o material visual e sonoro deste site foi gerado com IA. Isso está
declarado em cada peça — a arte de cada capítulo carrega o selo "arte gerada com
Gemini", e a curva de luz do exoplaneta diz na legenda que é modelo físico
calculado, não observação.

Esta página explica o processo inteiro, porque a pergunta "como isso foi feito?"
tem mais valor para quem chega aqui do que a resposta "com IA".

A regra que organiza tudo: **a IA gera em tempo de build, nunca no navegador do
leitor**. Nenhuma chave de API existe no site publicado. O que você carrega é
arquivo estático.

---

## As sete artes dos capítulos

Cada era da história da computação tem uma ilustração. São sete imagens, 400 KB
no total, geradas pelo `gemini-3-pro-image` em 16:9 e convertidas para WebP.

A direção de arte não fica no prompt solto: vive em `tools/eras.json`, com uma
paleta declarada por era. A era de Turing é monocromática com âmbar de fósforo;
a dos transistores é azul cianeto com cobre; a do Willow é obsidiana com ciano
holográfico e verde quântico. O estilo base é o mesmo para as sete, o que muda é
a cena e a paleta — é isso que faz um conjunto parecer um conjunto em vez de
sete imagens avulsas.

Uma instrução que economiza retrabalho: **peça espaço negativo onde o texto vai
entrar**. Todas foram geradas com "generous negative space on the left third",
porque é onde o título aparece. Sem isso, metade das imagens volta bonita e
inutilizável.

E a instrução mais importante: *no text, no letters, no numbers, no logos, no
watermarks*. Modelo de imagem escreve texto errado com confiança absoluta.

## As catorze narrações

Sete capítulos, dois idiomas. Cada um tem cerca de 125 palavras e 85 segundos.

O roteiro não é inventado pelo modelo. Ele é escrito pelo `gemini-3.8-flash` a
partir do texto que já está publicado no capítulo, com uma instrução explícita de
manter nomes, datas e números exatamente como no material de origem e não
acrescentar fato nenhum. O modelo recria o tom, não o conteúdo.

O áudio sai do `gemini-3.1-flash-tts-preview` em PCM de 24 kHz, vira WAV e é
convertido para MP3. A versão em inglês não é tradução literal — é uma recriação
a partir do mesmo material, porque narração traduzida ao pé da letra soa
traduzida.

O player troca a faixa ao vivo quando você muda o idioma, mantendo a posição.

## Os quatro vídeos

Gerados no NotebookLM a partir dos documentos de pesquisa deste repositório: três
verticais de cerca de 75 segundos e um mergulho de 11 minutos, 15 minutos no
total.

Eles não ficam no repositório. Vídeo em Git fica no histórico para sempre, e 95
MB de MP4 tornariam qualquer clone eterno. Ficam no YouTube, e o site carrega uma
**fachada**: pôster local com botão de play, e o iframe do YouTube só é criado no
clique. Um embed padrão puxa mais de 1 MB de JavaScript e grava cookie antes de
alguém apertar play — aqui, zero requisição a terceiros até você decidir assistir.

## Os gráficos

Esses não são gerados por IA. São desenhados por código, com a matemática de
escala delegada ao `d3-scale` e a geometria ao `d3-shape` — 12 KB, só esses dois
módulos, não a biblioteca inteira.

SVG e não canvas, por três razões: o gráfico herda as cores do site via CSS, o
texto continua sendo texto de verdade (selecionável, lido por leitor de tela,
achável no Ctrl+F), e a animação usa a mesma ferramenta do resto da página.

A curva de luz do trânsito planetário é calculada em tempo real pela geometria de
sobreposição de discos com escurecimento de limbo quadrático — o modelo de Mandel
& Agol (2002). Quando você arrasta o raio do planeta, a curva é recomputada.
Nenhum valor ali é observação de um planeta real, e a legenda diz isso.

## A versão em inglês

O site sempre teve os dois idiomas, mas por muito tempo o inglês só aparecia
depois que o JavaScript reescrevia a página — sem endereço próprio. Buscador
indexa uma versão por URL, então metade do conteúdo era invisível.

Hoje um script de build assa o texto em inglês no HTML e publica em `/en/`, lendo
o mesmo dicionário que o site usa em tempo de execução. Uma fonte de tradução,
dois destinos.

---

## O que a IA não fez

Vale ser específico, porque "feito com IA" costuma esconder mais do que revela.

A IA **não** decidiu a estrutura do site, não escolheu quais dados publicar, não
definiu a direção de arte e não julgou o que é fonte confiável. Os números que
aparecem nos gráficos vêm de um levantamento com protocolo escrito, e cada série
carrega a fonte primária e as ressalvas — inclusive as controvérsias públicas,
com os dois lados. Onde não existe estudo comparável, está escrito que não
existe, em vez de estimado.

Essa é a parte que continua sendo trabalho humano: decidir o que merece ser
publicado, e aceitar deixar uma célula vazia quando o dado não sustenta.

---

## Quem construiu isto

Este site é um projeto da [SFAI Solutions](https://sfaisolutions.com).

O processo descrito aqui — gerar imagem, narração e vídeo com IA, com direção de
arte consistente e produção em escala — é o que fazemos como produto no
[Cocreator](https://app.sfaisolutions.com): um hub de criação de conteúdo com
[Canvas Studio](https://canvas.sfaisolutions.com) para carrosséis e imagens,
[Social Studio](https://social.sfaisolutions.com) para agendamento e gestão de
redes, e geração de vídeo.

A diferença é o público: aqui a produção serve a um site de pesquisa; no
Cocreator ela serve a quem precisa publicar todo dia.

Todo o código deste site é aberto, sob licença MIT, em
[github.com/s1d40/makeaibetter](https://github.com/s1d40/makeaibetter) — inclusive
os scripts de geração descritos acima.
