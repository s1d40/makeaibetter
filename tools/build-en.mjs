#!/usr/bin/env node
/**
 * Gera a versão em inglês do site em /en/.
 *
 * Por que isso existe: o site sempre teve os dois idiomas, mas o inglês só
 * aparecia depois que o JavaScript reescrevia o DOM — sem URL própria. Um
 * buscador indexa uma versão por URL, então metade do conteúdo era invisível.
 * Aqui o texto em inglês é assado no HTML em tempo de build, cada idioma ganha
 * sua URL e as duas se apontam por hreflang.
 *
 * A fonte da tradução continua sendo o dicionário `en` dentro de cada script —
 * um lugar só, usado tanto pelo runtime quanto por este build.
 *
 *   node tools/build-en.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'en');
const BASE = 'https://makeaibetter.com';

const PAGES = [
  { file: 'index.html', script: 'scripts/app.js', ptUrl: '/', enUrl: '/en/' },
  { file: 'history.html', script: 'scripts/history.js', ptUrl: '/history.html', enUrl: '/en/history.html' },
  { file: 'science.html', script: 'scripts/science.js', ptUrl: '/science.html', enUrl: '/en/science.html' },
];

/**
 * Extrai o dicionário `en` de um script sem executá-lo: os scripts importam de
 * CDN, então não dá para importar aqui. O formato é estável (chave: "valor"),
 * e uma chave que não casar simplesmente não é traduzida — o build falha alto
 * se a contagem despencar, em vez de publicar página meio traduzida.
 */
function readDictionary(scriptPath) {
  const src = readFileSync(join(ROOT, scriptPath), 'utf8');

  // a indentação do bloco varia: em app.js/history.js o dicionário é módulo,
  // em science.js ele vive dentro de uma função. Detectamos o recuo em vez de
  // assumir um valor — assumir foi exatamente o que fez este build sair vazio.
  const m = /^([ \t]*)en:\s*\{/m.exec(src);
  if (!m) throw new Error(`${scriptPath}: dicionário "en" não encontrado`);

  const indent = m[1];
  const start = m.index;
  const end = src.indexOf(`\n${indent}}`, start);
  if (end < 0) throw new Error(`${scriptPath}: fim do dicionário "en" não encontrado`);
  const block = src.slice(start, end);

  const dict = {};
  const re = new RegExp(`^${indent}  ([a-zA-Z0-9_]+):\\s*(["'\`])([\\s\\S]*?)\\2,?\\s*$`, 'gm');
  for (const hit of block.matchAll(re)) dict[hit[1]] = hit[3];
  if (!Object.keys(dict).length) throw new Error(`${scriptPath}: dicionário "en" veio vazio`);
  return dict;
}

/** Troca o conteúdo de todo [data-i18n] pelo texto em inglês. */
function translate(html, dict) {
  let hits = 0;
  let misses = 0;
  const missing = new Set();

  const out = html.replace(
    /(<([a-zA-Z0-9]+)([^>]*\sdata-i18n="([^"]+)"[^>]*)>)([\s\S]*?)(<\/\2>)/g,
    (full, open, tag, attrs, key, _inner, close) => {
      if (dict[key] === undefined) { misses += 1; missing.add(key); return full; }
      hits += 1;
      return `${open}${dict[key]}${close}`;
    }
  );
  return { html: out, hits, misses, missing: [...missing] };
}

/** Reescreve caminhos relativos para absolutos: /en/ está um nível abaixo. */
function absolutize(html) {
  return html
    .replace(/(\s(?:href|src))="(?!https?:|\/|#|mailto:|data:)([^"]+)"/g, '$1="/$2"')
    // links internos entre páginas passam a apontar para a versão em inglês
    .replace(/\shref="\/index\.html"/g, ' href="/en/"')
    .replace(/\shref="\/history\.html"/g, ' href="/en/history.html"')
    .replace(/\shref="\/science\.html"/g, ' href="/en/science.html"')
    .replace(/\shref="\/#/g, ' href="/en/#');
}

/** Ajusta head: lang, canonical, hreflang, og:url e o seletor de idioma. */
function retarget(html, page) {
  const enAbs = `${BASE}${page.enUrl}`;

  return html
    .replace(/<html lang="pt-BR"/, '<html lang="en"')
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${enAbs}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${enAbs}">`)
    .replace(/<meta property="og:locale" content="[^"]*">/, '')
    // o botão ativo passa a ser o EN
    .replace(
      /<a class="lang-btn active" id="btn-lang-pt"[^>]*>PT<\/a>/,
      `<a class="lang-btn" id="btn-lang-pt" href="${page.ptUrl}" hreflang="pt-BR" lang="pt-BR">PT</a>`
    )
    .replace(
      /<a class="lang-btn" id="btn-lang-en"[^>]*>EN<\/a>/,
      `<a class="lang-btn active" id="btn-lang-en" href="${page.enUrl}" hreflang="en" lang="en" aria-current="true">EN</a>`
    )
    // o JSON-LD declara o idioma da página
    .replace(/"inLanguage": "pt-BR"/g, '"inLanguage": "en"')
    .replace(/  <a class="skip-link" href="(#[^"]+)">[^<]*<\/a>/, '  <a class="skip-link" href="$1">Skip to content</a>');
}

if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });

let total = 0;
for (const page of PAGES) {
  const src = readFileSync(join(ROOT, page.file), 'utf8');
  const dict = readDictionary(page.script);

  let { html, hits, misses, missing } = translate(src, dict);
  html = retarget(absolutize(html), page);

  const name = page.file === 'index.html' ? 'index.html' : page.file;
  writeFileSync(join(OUT, name), html);

  total += hits;
  console.log(`en/${name}: ${hits} traduzidas, ${misses} sem chave, ${Object.keys(dict).length} no dicionário`);
  if (missing.length) console.log(`    faltando: ${missing.join(', ')}`);
}

if (total < 50) throw new Error(`apenas ${total} traduções aplicadas — dicionário provavelmente não foi lido`);
console.log(`\n✔ ${total} strings traduzidas em ${PAGES.length} páginas.`);
