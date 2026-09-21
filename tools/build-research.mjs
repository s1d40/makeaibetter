#!/usr/bin/env node
/**
 * Publica os relatórios de pesquisa como páginas HTML.
 *
 * Eram ~9.600 palavras de conteúdo apurado servidas como arquivo .md cru —
 * legível para quem abre o repositório, invisível para quem chega pelo site.
 * Isto leva o site de 6 para 12 páginas indexáveis sem escrever conteúdo novo.
 *
 * O conversor de markdown vive aqui dentro, em vez de vir de um pacote. O
 * subconjunto usado pelos relatórios é fechado (títulos, listas, tabelas,
 * citações, links, ênfase, código, régua) e o site não tem `package.json`:
 * uma dependência obrigaria a instalar node_modules no deploy para renderizar
 * cinco documentos.
 *
 *   node tools/build-research.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://makeaibetter.com';

const REPORTS = [
  {
    src: 'como_e_feito.md', slug: 'como-e-feito',
    title: 'Como este site é feito',
    desc: 'Sete artes, catorze narrações e quatro vídeos gerados com IA em tempo de build — a direção de arte, as instruções que economizam retrabalho e o que a IA não fez.',
    kind: 'Bastidores', date: '2026-09-21',
  },
  {
    src: 'science_metrics_report.md', slug: 'metricas-ia-ciencia',
    title: 'Métricas verificadas de IA na ciência',
    desc: 'Levantamento de sete séries quantitativas em seis domínios científicos, com fonte primária, denominador de cada comparação e as controvérsias registradas.',
    kind: 'Levantamento', date: '2026-09-18',
  },
  {
    src: 'frontier_report_2026.md', slug: 'fronteira-tecnologica-2026',
    title: 'A fronteira tecnológica em 2026',
    desc: 'Do silício à superinteligência quântica: evolução da computação, modelos de fronteira, governança sob o EU AI Act e a convergência quântica.',
    kind: 'Relatório', date: '2026-09-21',
  },
  {
    src: 'state_of_ai_2026.md', slug: 'state-of-ai-2026',
    title: 'State of AI 2026',
    desc: 'O panorama técnico do ano: escalonamento em tempo de inferência, enxames de agentes autônomos e pesos abertos.',
    kind: 'Panorama', date: '2026-09-21',
  },
  {
    src: 'ai_for_science_research.md', slug: 'ia-catalisador-da-ciencia',
    title: 'A IA como catalisador da ciência',
    desc: 'Dossiê das seis grandes fronteiras científicas impulsionadas por IA, da genômica ao projeto de semicondutores.',
    kind: 'Dossiê', date: '2026-09-21',
  },
  {
    src: 'history_of_computing_research.md', slug: 'historia-da-computacao',
    title: 'História da computação',
    desc: 'Dossiê de pesquisa das sete eras, da máquina universal de Turing em 1936 ao raciocínio System-2 em 2026.',
    kind: 'Dossiê', date: '2026-09-21',
  },
];

/* ══ Conversor de Markdown ═══════════════════════════════════════════════════
   Escopo deliberadamente fechado: só o que os relatórios usam. Qualquer coisa
   fora disso passa como texto, em vez de virar HTML quebrado. */

const escapeHtml = (s) => s
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Âncora estável a partir do texto do título, para o sumário e para links. */
function slugify(text) {
  return text.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-').slice(0, 60);
}

/** Ênfase, código, links — aplicado dentro de um bloco já escapado. */
function inline(text) {
  return text
    // código primeiro: o que está dentro dele não sofre mais nenhuma troca
    .replace(/`([^`]+)`/g, (_m, code) => `<code>${code}</code>`)
    .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<![*\w])\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, href) => {
      const external = /^https?:/.test(href);
      const rel = external ? ' target="_blank" rel="noopener"' : '';
      return `<a href="${href}"${rel}>${label}</a>`;
    });
}

function renderTable(rows) {
  const cells = (line) => line.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
  const head = cells(rows[0]);
  const body = rows.slice(2).map(cells);   // rows[1] é a linha de separação
  return `<div class="table-scroll"><table>
<thead><tr>${head.map((h) => `<th scope="col">${inline(h)}</th>`).join('')}</tr></thead>
<tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('\n')}</tbody>
</table></div>`;
}

/**
 * Prepara os títulos para a página.
 *
 * Dois ajustes, nesta ordem. Primeiro, se o documento abre com um título único
 * no nível mais raso, ele é o título do documento — e a página já tem o seu
 * próprio <h1>, então repeti-lo cria dois títulos concorrentes. Descartamos.
 *
 * Depois, o nível restante mais raso vira <h2>. Sem isso um relatório que
 * estrutura em ### e outro em #### renderizam com hierarquias diferentes, e o
 * sumário — que procura <h2> — volta vazio num deles.
 */
function normalizeHeadings(md) {
  let lines = md.replace(/\r\n/g, '\n').split('\n');
  const headings = () => lines
    .map((l, idx) => ({ idx, m: /^(#{1,6})\s+\S/.exec(l) }))
    .filter((h) => h.m)
    .map((h) => ({ idx: h.idx, level: h.m[1].length }));

  let hs = headings();
  if (!hs.length) return md;

  const top = Math.min(...hs.map((h) => h.level));
  const atTop = hs.filter((h) => h.level === top);
  if (atTop.length === 1 && atTop[0].idx === hs[0].idx) {
    lines = lines.filter((_, idx) => idx !== atTop[0].idx);
    hs = headings();
    if (!hs.length) return lines.join('\n');
  }

  const shift = 2 - Math.min(...hs.map((h) => h.level));
  if (shift === 0) return lines.join('\n');
  return lines
    .map((l) => l.replace(/^(#{1,6})(\s+)/, (_m, hashes, sp) =>
      `${'#'.repeat(Math.min(6, Math.max(2, hashes.length + shift)))}${sp}`))
    .join('\n');
}

/**
 * Remove definições de referência de link (`[rotulo]: url`). São metadado do
 * markdown, nunca conteúdo — e quando o alvo é um data URI em base64, viram um
 * parágrafo de dezenas de milhares de caracteres sem espaço para quebrar, que
 * empurra a largura da página inteira.
 */
const stripLinkDefs = (md) =>
  md.replace(/^\[[^\]]+\]:\s*<?(?:data:|https?:|#)[^\n]*$/gm, '');

function markdownToHtml(md) {
  const prepared = normalizeHeadings(stripLinkDefs(md)).replace(/\r\n/g, '\n');
  const lines = escapeHtml(prepared).split('\n');
  const out = [];
  const toc = [];
  let i = 0;

  const flushList = (ordered, items) => {
    const tag = ordered ? 'ol' : 'ul';
    out.push(`<${tag}>${items.map((t) => `<li>${inline(t)}</li>`).join('')}</${tag}>`);
  };

  while (i < lines.length) {
    const line = lines[i];

    // bloco de código cercado
    if (/^```/.test(line)) {
      const buf = [];
      i += 1;
      while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i += 1; }
      i += 1;
      out.push(`<pre><code>${buf.join('\n')}</code></pre>`);
      continue;
    }

    // tabela
    if (/^\|/.test(line) && /^\|[\s:|-]+\|?\s*$/.test(lines[i + 1] || '')) {
      const buf = [];
      while (i < lines.length && /^\|/.test(lines[i])) { buf.push(lines[i]); i += 1; }
      out.push(renderTable(buf));
      continue;
    }

    // título
    const h = /^(#{1,6})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      // título inteiro em negrito é redundante: o <h2> já carrega o peso
      const text = h[2].replace(/\s*#+\s*$/, '').replace(/^\*\*(.+)\*\*$/, '$1').trim();
      const id = slugify(text);
      if (level === 2 || level === 3) toc.push({ level, text, id });
      out.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
      i += 1;
      continue;
    }

    // régua
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) { out.push('<hr>'); i += 1; continue; }

    // citação
    if (/^&gt;\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^&gt;\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^&gt;\s?/, '')); i += 1;
      }
      out.push(`<blockquote>${inline(buf.join(' '))}</blockquote>`);
      continue;
    }

    // lista
    const bullet = /^\s*[-*]\s+(.*)$/.exec(line);
    const numbered = /^\s*\d+\.\s+(.*)$/.exec(line);
    if (bullet || numbered) {
      const ordered = Boolean(numbered);
      const items = [];
      while (i < lines.length) {
        const b = /^\s*[-*]\s+(.*)$/.exec(lines[i]);
        const n = /^\s*\d+\.\s+(.*)$/.exec(lines[i]);
        const hit = ordered ? n : b;
        if (hit) { items.push(hit[1]); i += 1; continue; }
        // continuação indentada do item anterior
        if (/^\s{2,}\S/.test(lines[i]) && items.length) {
          items[items.length - 1] += ` ${lines[i].trim()}`; i += 1; continue;
        }
        break;
      }
      flushList(ordered, items);
      continue;
    }

    // linha em branco
    if (!line.trim()) { i += 1; continue; }

    // parágrafo
    const buf = [];
    while (i < lines.length && lines[i].trim()
           && !/^(#{1,6}\s|```|\||&gt;|\s*[-*]\s|\s*\d+\.\s)/.test(lines[i])
           && !/^(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i])) {
      buf.push(lines[i].trim()); i += 1;
    }
    if (buf.length) out.push(`<p>${inline(buf.join(' '))}</p>`);
  }

  return { html: out.join('\n'), toc };
}

/* ══ Página ══════════════════════════════════════════════════════════════════ */

const NAV = readFileSync(join(ROOT, 'science.html'), 'utf8');
const chunk = (start, end) => {
  const a = NAV.indexOf(start);
  const b = NAV.indexOf(end, a);
  return a < 0 || b < 0 ? '' : NAV.slice(a, b + end.length);
};
const HEADER = chunk('<header class="navbar"', '</header>');
const FOOTER = chunk('<footer class="footer">', '</footer>');

function page({ title, desc, kind, date, body, toc, slug, words }) {
  const url = `${BASE}/research/${slug}.html`;
  const tocHtml = toc.length > 2 ? `
      <nav class="report-toc" aria-label="Sumário">
        <p class="toc-label">Neste relatório</p>
        <ol>${toc.filter((t) => t.level === 2)
          .map((t) => `<li><a href="#${t.id}">${t.text}</a></li>`).join('')}</ol>
      </nav>` : '';

  return `<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Make AI Better</title>
  <meta name="description" content="${desc}">
  <link rel="canonical" href="${url}">

  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Make AI Better">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${BASE}/assets/og/science.webp">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${url}">
  <meta name="twitter:card" content="summary_large_image">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Report",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(desc)},
    "url": "${url}",
    "datePublished": "${date}",
    "inLanguage": "pt-BR",
    "wordCount": ${words},
    "author": { "@id": "${BASE}/#org" },
    "publisher": { "@id": "${BASE}/#org" },
    "isAccessibleForFree": true,
    "license": "https://opensource.org/licenses/MIT"
  }
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="/styles/research.css">
</head>
<body class="research-body">
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
${HEADER}

  <main class="report" id="conteudo" tabindex="-1">
    <div class="container report-container">
      <nav class="crumbs" aria-label="Trilha">
        <a href="/">Make AI Better</a> <span aria-hidden="true">/</span>
        <a href="/research/">Pesquisa</a>
      </nav>

      <header class="report-head">
        <div class="report-meta">
          <span class="badge badge-cyan">${kind}</span>
          <time datetime="${date}">${new Date(`${date}T00:00:00Z`)
            .toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>
          <span>${words.toLocaleString('pt-BR')} palavras</span>
        </div>
        <h1>${title}</h1>
        <p class="report-lede">${desc}</p>
      </header>
${tocHtml}

      <article class="report-body">
${body}
      </article>

      <aside class="report-foot">
        <p>Este relatório é publicado sob licença MIT. Ao citar, atribua a Make AI Better
           com link para esta página — e cite junto a fonte primária referida no trecho.</p>
        <a class="btn btn-outline" href="/research/${REPORTS.find((r) => r.slug === slug).src}">Ver o arquivo Markdown</a>
      </aside>
    </div>
  </main>

${FOOTER}
</body>
</html>
`;
}

function indexPage(items) {
  const url = `${BASE}/research/`;
  return `<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pesquisa | Make AI Better</title>
  <meta name="description" content="Relatórios, dossiês e datasets abertos da Make AI Better: métricas verificadas de IA na ciência, história da computação e o panorama de 2026.">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Make AI Better">
  <meta property="og:title" content="Pesquisa — Make AI Better">
  <meta property="og:description" content="Relatórios, dossiês e datasets abertos, cada número com sua fonte primária.">
  <meta property="og:image" content="${BASE}/assets/og/science.webp">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${url}">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="/styles/research.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pesquisa — Make AI Better",
    "url": "${url}",
    "inLanguage": "pt-BR",
    "isAccessibleForFree": true,
    "publisher": { "@id": "${BASE}/#org" },
    "hasPart": [
${items.map((r) => `      { "@type": "Report", "name": ${JSON.stringify(r.title)}, "url": "${BASE}/research/${r.slug}.html" }`).join(',\n')}
    ]
  }
  </script>
</head>
<body class="research-body">
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
${HEADER}

  <main class="report" id="conteudo" tabindex="-1">
    <div class="container report-container">
      <header class="report-head">
        <div class="report-meta"><span class="badge badge-cyan">Acervo</span></div>
        <h1>Pesquisa</h1>
        <p class="report-lede">Tudo publicado aqui segue a mesma regra: o número vem com a base
          da comparação e a fonte primária. Quando não existe estudo comparável, está escrito
          que não existe.</p>
      </header>

      <ul class="report-list">
${items.map((r) => `        <li>
          <a href="/research/${r.slug}.html">
            <span class="rl-kind">${r.kind}</span>
            <span class="rl-title">${r.title}</span>
            <span class="rl-desc">${r.desc}</span>
            <span class="rl-meta">${r.words.toLocaleString('pt-BR')} palavras · ${r.date}</span>
          </a>
        </li>`).join('\n')}
      </ul>

      <aside class="report-foot">
        <p>Os datasets estruturados ficam abertos em JSON, prontos para reuso:</p>
        <ul class="data-links">
          <li><a href="/research/science_metrics.json">science_metrics.json</a> — sete séries com fonte e ressalvas</li>
          <li><a href="/research/breaking_news_sept_2026.json">breaking_news_sept_2026.json</a> — marcos de 2026</li>
        </ul>
      </aside>
    </div>
  </main>

${FOOTER}
</body>
</html>
`;
}

/* ══ Execução ════════════════════════════════════════════════════════════════ */

if (!HEADER || !FOOTER) throw new Error('não consegui extrair navbar/footer de science.html');

const built = [];
for (const r of REPORTS) {
  const path = join(ROOT, 'research', r.src);
  if (!existsSync(path)) { console.warn(`  ⚠ ausente: ${r.src}`); continue; }

  const md = readFileSync(path, 'utf8');
  const { html, toc } = markdownToHtml(md);
  const words = md.split(/\s+/).filter(Boolean).length;

  writeFileSync(join(ROOT, 'research', `${r.slug}.html`),
    page({ ...r, body: html, toc, words }));
  built.push({ ...r, words });
  console.log(`research/${r.slug}.html  ${String(words).padStart(5)} palavras · ${toc.filter((t) => t.level === 2).length} seções`);
}

writeFileSync(join(ROOT, 'research', 'index.html'), indexPage(built));
console.log(`research/index.html      índice com ${built.length} relatórios`);
console.log(`\n✔ ${built.length + 1} páginas geradas.`);
