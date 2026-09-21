#!/usr/bin/env node
/**
 * Laboratório de marcas — gera variações do símbolo em SVG.
 *
 * Não é aleatoriedade solta: os parâmetros vivem numa grade fechada (casca,
 * número de nós, ligação, núcleo, rotação, traço) e uma semente escolhe uma
 * combinação. A paleta é sempre a da marca, então toda variante nasce dentro
 * da identidade — o que muda é a geometria, não a cor.
 *
 *   node tools/logo-lab.mjs             # 16 variantes com a semente padrão
 *   node tools/logo-lab.mjs --n=24 --seed=7
 *   node tools/logo-lab.mjs --sheet     # também monta a folha de contato
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'assets/brand/lab');

const arg = (n, d) => {
  const hit = process.argv.find((a) => a.startsWith(`--${n}=`));
  return hit ? Number(hit.split('=')[1]) : d;
};
const N = arg('n', 16);
const SEED = arg('seed', 1);
const SHEET = process.argv.includes('--sheet');

/* ── gerador determinístico (mulberry32) ─────────────────────────────────── */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── geometria ───────────────────────────────────────────────────────────── */
const C = 16;                       // centro do viewBox 32×32
const pt = (r, deg) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
};
const f = (n) => Number(n.toFixed(2));
const poly = (sides, r, rot = 0) => Array.from({ length: sides }, (_, i) =>
  pt(r, rot + (360 / sides) * i));
const path = (points, close = true) =>
  points.map(([x, y], i) => `${i ? 'L' : 'M'}${f(x)} ${f(y)}`).join('') + (close ? 'Z' : '');

/* ── vocabulário de formas ───────────────────────────────────────────────── */
const SHELLS = {
  hexagon: (r, rot) => `<path d="${path(poly(6, r, rot))}" fill="none" stroke="url(#g)" stroke-width="{sw}" stroke-linejoin="round"/>`,
  circle: (r) => `<circle cx="${C}" cy="${C}" r="${f(r)}" fill="none" stroke="url(#g)" stroke-width="{sw}"/>`,
  diamond: (r, rot) => `<path d="${path(poly(4, r, rot))}" fill="none" stroke="url(#g)" stroke-width="{sw}" stroke-linejoin="round"/>`,
  triangle: (r, rot) => `<path d="${path(poly(3, r, rot))}" fill="none" stroke="url(#g)" stroke-width="{sw}" stroke-linejoin="round"/>`,
  squircle: (r) => `<rect x="${f(C - r)}" y="${f(C - r)}" width="${f(r * 2)}" height="${f(r * 2)}" rx="${f(r * 0.42)}" fill="none" stroke="url(#g)" stroke-width="{sw}"/>`,
  openHex: (r, rot) => {
    const p = poly(6, r, rot);
    // casca aberta no topo: pesquisa aberta, não sistema fechado
    return `<path d="${path([p[5], ...p.slice(0, 5)], false)}" fill="none" stroke="url(#g)" stroke-width="{sw}" stroke-linejoin="round" stroke-linecap="round"/>`;
  },
  none: () => '',
};

const LINKS = {
  /** raios do centro para cada nó */
  spokes: (nodes, coreR) => nodes.map(([x, y]) => {
    const dx = x - C; const dy = y - C;
    const len = Math.hypot(dx, dy);
    const k = (coreR + 1.1) / len;
    return `M${f(C + dx * k)} ${f(C + dy * k)}L${f(x)} ${f(y)}`;
  }).join(''),
  /** anel ligando nós vizinhos */
  ring: (nodes) => path(nodes),
  /** cada nó ligado ao oposto: malha cruzada */
  cross: (nodes) => nodes.map(([x, y], i) => {
    const [ox, oy] = nodes[(i + Math.floor(nodes.length / 2)) % nodes.length];
    return `M${f(x)} ${f(y)}L${f(ox)} ${f(oy)}`;
  }).join(''),
  /** só metade dos raios: assimetria controlada */
  half: (nodes, coreR) => LINKS.spokes(nodes.filter((_, i) => i % 2 === 0), coreR),
  none: () => '',
};

const CORES = {
  dot: (r) => `<circle cx="${C}" cy="${C}" r="${f(r)}" fill="url(#c)"/>`,
  ring: (r) => `<circle cx="${C}" cy="${C}" r="${f(r)}" fill="none" stroke="url(#c)" stroke-width="{sw}"/>`,
  diamond: (r) => `<path d="${path(poly(4, r * 1.25, 0))}" fill="url(#c)"/>`,
  hex: (r) => `<path d="${path(poly(6, r * 1.15, 0))}" fill="url(#c)"/>`,
  pulse: (r) => `<circle cx="${C}" cy="${C}" r="${f(r)}" fill="url(#c)"/>`
    + `<circle cx="${C}" cy="${C}" r="${f(r * 1.9)}" fill="none" stroke="url(#c)" stroke-opacity=".38" stroke-width="{sw-thin}"/>`,
  none: () => '',
};

const GRID = {
  shell: ['hexagon', 'hexagon', 'circle', 'diamond', 'triangle', 'squircle', 'openHex', 'none'],
  nodeCount: [3, 4, 6, 6, 8],
  link: ['spokes', 'spokes', 'ring', 'cross', 'half', 'none'],
  core: ['dot', 'dot', 'ring', 'diamond', 'hex', 'pulse', 'none'],
  nodeR: [9.5, 10.5, 11.5],
  coreR: [3, 3.6, 4.2],
  sw: [2, 2.5, 3],
  rot: [0, 15, 30, 90],
  showNodes: [true, false, true],
};

const DEFS = `<defs>
    <linearGradient id="g" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00f0ff"/><stop offset=".5" stop-color="#8a2be2"/><stop offset="1" stop-color="#00ff88"/>
    </linearGradient>
    <linearGradient id="c" x1="12" y1="12" x2="20" y2="20" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00f0ff"/><stop offset="1" stop-color="#00ff88"/>
    </linearGradient>
  </defs>`;

function build(p) {
  const nodes = poly(p.nodeCount, p.nodeR, p.rot);
  const sw = String(p.sw);
  const thin = String(Math.max(1, p.sw - 1));
  const fill = (s) => s.replaceAll('{sw-thin}', thin).replaceAll('{sw}', sw);

  const shell = fill(SHELLS[p.shell](p.nodeR + 1.5, p.rot));
  const linkD = LINKS[p.link](nodes, p.coreR);
  const links = linkD
    ? `<path d="${linkD}" fill="none" stroke="#00f0ff" stroke-opacity=".62" stroke-width="${thin}" stroke-linecap="round" stroke-linejoin="round"/>`
    : '';
  const dots = p.showNodes && p.link !== 'none'
    ? nodes.map(([x, y]) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(p.sw * 0.62)}" fill="#00f0ff" fill-opacity=".85"/>`).join('')
    : '';
  const core = fill(CORES[p.core](p.coreR));

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="512" height="512" role="img" aria-label="Make AI Better">
  <title>Make AI Better</title>
  ${DEFS}
  ${[shell, links, dots, core].filter(Boolean).join('\n  ')}
</svg>
`;
}

/* ── amostragem sem repetir combinação ───────────────────────────────────── */
const rand = rng(SEED);
const pick = (arr) => arr[Math.floor(rand() * arr.length)];

if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });

const seen = new Set();
const made = [];
let guard = 0;
while (made.length < N && guard < N * 60) {
  guard += 1;
  const p = Object.fromEntries(Object.entries(GRID).map(([k, v]) => [k, pick(v)]));

  // descarta combinações que não leem como marca
  if (p.shell === 'none' && p.link === 'none') continue;
  if (p.core === 'none' && p.link === 'none') continue;
  if (p.link === 'ring' && p.shell !== 'none' && p.nodeCount === 6 && p.shell === 'hexagon') continue;
  if (p.coreR >= p.nodeR - 5) continue;

  const key = JSON.stringify(p);
  if (seen.has(key)) continue;
  seen.add(key);

  const id = String(made.length + 1).padStart(2, '0');
  writeFileSync(join(OUT, `logo-${id}.svg`), build(p));
  made.push({ id, ...p });
}

writeFileSync(join(OUT, 'variants.json'), `${JSON.stringify(made, null, 2)}\n`);
console.log(`${made.length} variantes em assets/brand/lab/ (semente ${SEED})`);
for (const m of made) {
  console.log(`  ${m.id}  ${m.shell.padEnd(9)} ${String(m.nodeCount)}nós ${m.link.padEnd(7)} core:${m.core.padEnd(8)} rot${m.rot}`);
}

/* ── folha de contato ────────────────────────────────────────────────────── */
if (SHEET) {
  const puppeteer = (await import('puppeteer-core')).default;
  const cols = 4;
  const cell = 260;
  const rows = Math.ceil(made.length / cols);

  const html = `<!DOCTYPE html><meta charset="utf-8"><style>
    body{margin:0;background:#07080c;font-family:'JetBrains Mono',monospace;
      display:grid;grid-template-columns:repeat(${cols},${cell}px);}
    .cell{width:${cell}px;height:${cell}px;display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:14px;
      border:1px solid rgba(255,255,255,.06)}
    .cell svg{width:118px;height:118px;filter:drop-shadow(0 0 18px rgba(0,240,255,.35))}
    .id{color:#64748b;font-size:12px;letter-spacing:.14em}
  </style>${made.map((m) => `<div class="cell">${
    build(m).replace(/<svg[^>]*>/, '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">')
      .replace(/id="g"/g, `id="g${m.id}"`).replace(/url\(#g\)/g, `url(#g${m.id})`)
      .replace(/id="c"/g, `id="c${m.id}"`).replace(/url\(#c\)/g, `url(#c${m.id})`)
  }<span class="id">${m.id}</span></div>`).join('')}`;

  const b = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  const tab = await b.newPage();
  await tab.setViewport({ width: cols * cell, height: rows * cell });
  await tab.setContent(html, { waitUntil: 'networkidle0' });
  await tab.screenshot({ path: join(OUT, 'contact-sheet.png') });
  await b.close();
  console.log(`\nfolha de contato: assets/brand/lab/contact-sheet.png`);
}
