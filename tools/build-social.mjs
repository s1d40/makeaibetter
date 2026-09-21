#!/usr/bin/env node
/**
 * Gera o kit de imagens para os canais sociais a partir do logo do site.
 *
 * Renderiza HTML em Chrome headless no tamanho exato de cada peça — assim a
 * arte sai do mesmo SVG e dos mesmos tokens de cor do site, sem redesenho
 * manual e sem divergir quando a marca mudar.
 *
 * Cada plataforma tem sua própria área segura: o YouTube corta o banner de
 * 2560x1440 para 1546x423 no celular, e todo avatar é cortado em círculo.
 * As margens abaixo existem por causa disso, não por estética.
 *
 *   node tools/build-social.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'assets/brand/social');
const CHROME = process.env.CHROME_PATH || '/usr/bin/google-chrome';

const LOGO = readFileSync(join(ROOT, 'assets/brand/logo.svg'), 'utf8')
  .replace(/ width="\d+" height="\d+"/, '');

const FONTS = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;800'
  + '&family=JetBrains+Mono:wght@400;500&display=swap';

const CSS = `
  *{margin:0;padding:0;box-sizing:border-box}
  body{
    font-family:'Space Grotesk',system-ui,sans-serif;
    background:#07080c; color:#f0f4fc; overflow:hidden;
    display:flex; align-items:center; justify-content:center;
  }
  .stage{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden}
  /* mesma atmosfera do site: brilho radial sobre obsidiana */
  .stage::before{content:'';position:absolute;inset:-30%;
    background:
      radial-gradient(45% 55% at 26% 30%, rgba(0,240,255,.22), transparent 62%),
      radial-gradient(42% 52% at 74% 68%, rgba(138,43,226,.22), transparent 62%),
      radial-gradient(38% 46% at 52% 92%, rgba(0,255,136,.14), transparent 60%);}
  .stage::after{content:'';position:absolute;inset:0;
    background-image:linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px);
    background-size:44px 44px;}
  .content{position:relative;z-index:2;display:flex;align-items:center;justify-content:center}
  svg{display:block;filter:drop-shadow(0 0 26px rgba(0,240,255,.45))}
  .wordmark{font-weight:800;letter-spacing:-.02em;line-height:1;white-space:nowrap}
  .tagline{font-family:'JetBrains Mono',monospace;font-weight:400;
    letter-spacing:.16em;text-transform:uppercase;color:#94a3b8;white-space:nowrap}
`;

/** Avatar: o corte circular come os cantos, então o símbolo fica folgado. */
const avatar = (size) => `
  <div class="stage">
    <div class="content">${LOGO.replace('<svg', `<svg width="${size * 0.52}" height="${size * 0.52}"`)}</div>
  </div>`;

/** Banner: tudo dentro da faixa central que toda plataforma preserva. */
const banner = ({ w, h, safeH, mark, title, tag }) => `
  <div class="stage">
    <div class="content" style="flex-direction:column;gap:${Math.round(safeH * 0.07)}px;
         max-height:${safeH}px;padding:0 ${Math.round(w * 0.06)}px">
      <div style="display:flex;align-items:center;gap:${Math.round(mark * 0.34)}px">
        ${LOGO.replace('<svg', `<svg width="${mark}" height="${mark}"`)}
        <span class="wordmark" style="font-size:${title}px">MAKE AI BETTER</span>
      </div>
      <span class="tagline" style="font-size:${tag}px">Pesquisa aberta · Dados verificados · makeaibetter.com</span>
    </div>
  </div>`;

const PIECES = [
  // avatares — todo canal corta em círculo
  { name: 'avatar-1080', w: 1080, h: 1080, body: () => avatar(1080), use: 'master de avatar, serve todos os canais' },
  { name: 'avatar-800', w: 800, h: 800, body: () => avatar(800), use: 'YouTube (mínimo 800×800)' },
  { name: 'avatar-400', w: 400, h: 400, body: () => avatar(400), use: 'Instagram, Threads, TikTok, X, Facebook' },

  // banners de canal
  { name: 'youtube-banner', w: 2560, h: 1440, use: 'YouTube — área segura central 1546×423',
    body: () => banner({ w: 2560, h: 1440, safeH: 423, mark: 150, title: 116, tag: 27 }) },
  { name: 'x-header', w: 1500, h: 500, use: 'X / Twitter',
    body: () => banner({ w: 1500, h: 500, safeH: 420, mark: 104, title: 78, tag: 20 }) },
  { name: 'facebook-cover', w: 1640, h: 856, use: 'Facebook (página)',
    body: () => banner({ w: 1640, h: 856, safeH: 640, mark: 120, title: 88, tag: 22 }) },
  { name: 'linkedin-cover', w: 1128, h: 191, use: 'LinkedIn (página)',
    body: () => banner({ w: 1128, h: 191, safeH: 170, mark: 58, title: 40, tag: 13 }) },

  // peça vertical para primeiro post / destaque
  { name: 'post-1080', w: 1080, h: 1350, use: 'post 4:5 (Instagram, Threads)',
    body: () => banner({ w: 1080, h: 1350, safeH: 900, mark: 130, title: 74, tag: 20 }) },
];

const page = (piece) => `<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="${FONTS}"><style>${CSS}
html,body{width:${piece.w}px;height:${piece.h}px}</style></head>
<body>${piece.body()}</body></html>`;

mkdirSync(OUT, { recursive: true });
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb', '--font-render-hinting=none'],
});

const manifest = [];
for (const piece of PIECES) {
  const tab = await browser.newPage();
  await tab.setViewport({ width: piece.w, height: piece.h, deviceScaleFactor: 1 });
  await tab.setContent(page(piece), { waitUntil: 'networkidle0' });
  await tab.evaluateHandle('document.fonts.ready');

  const file = join(OUT, `${piece.name}.png`);
  await tab.screenshot({ path: file, type: 'png' });
  await tab.close();

  manifest.push({ arquivo: `assets/brand/social/${piece.name}.png`, tamanho: `${piece.w}×${piece.h}`, uso: piece.use });
  console.log(`${piece.name.padEnd(18)} ${String(piece.w).padStart(4)}×${String(piece.h).padEnd(4)}  ${piece.use}`);
}
await browser.close();

writeFileSync(join(OUT, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\n✔ ${PIECES.length} peças em assets/brand/social/`);
