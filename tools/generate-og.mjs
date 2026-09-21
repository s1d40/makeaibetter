#!/usr/bin/env node
/**
 * Gera as imagens de compartilhamento (Open Graph) das páginas.
 *
 * Um link sem og:image aparece cru em WhatsApp, LinkedIn e Slack. Estas artes
 * são geradas uma vez, em tempo de build, e commitadas como arquivo estático —
 * a chave nunca vai para o browser.
 *
 *   node tools/generate-og.mjs            # gera o que falta
 *   node tools/generate-og.mjs --force    # regera tudo
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MODEL = 'gemini-3-pro-image';
const FORCE = process.argv.includes('--force');

const STYLE = 'Cinematic dark editorial illustration for a technology research website. '
  + 'Deep obsidian background (#07080c), volumetric fog, holographic cyan and electric violet '
  + 'rim lighting, fine grain, painterly realism. Wide 16:9 composition, subject offset to the '
  + 'right, generous negative space on the left third. Absolutely no text, no letters, no numbers, '
  + 'no logos, no watermarks, no UI chrome.';

const TARGETS = [
  {
    out: 'assets/og/home.webp',
    prompt: 'A dark observation deck overlooking a vast constellation of luminous nodes — a radar '
      + 'of frontier AI models suspended in space, connected by faint cyan filaments, some nodes '
      + 'brighter than others, a faint circular sweep line crossing the field.',
  },
  {
    out: 'assets/og/science.webp',
    prompt: 'Six scientific instruments dissolving into one another in a dark void: a DNA helix, a '
      + 'telescope barrel, a crystal lattice, a molecule, a dilution refrigerator chandelier and a '
      + 'silicon die — arranged as a single converging structure lit from within by cyan and green light.',
  },
];

function apiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  const f = join(ROOT, 'gemini.api.key');
  if (existsSync(f)) return readFileSync(f, 'utf8').trim();
  throw new Error('Defina GEMINI_API_KEY ou crie gemini.api.key na raiz.');
}
const KEY = apiKey();

async function generate(target) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${STYLE}\n\nCena: ${target.prompt}` }] }],
        generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '16:9' } },
      }),
    }
  );
  const json = await res.json();
  if (json.error) throw new Error(`${json.error.status}: ${json.error.message}`);

  const inline = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)?.inlineData;
  if (!inline) throw new Error('resposta sem imagem');

  const out = join(ROOT, target.out);
  mkdirSync(dirname(out), { recursive: true });
  const tmp = `${out}.raw`;
  writeFileSync(tmp, Buffer.from(inline.data, 'base64'));
  // 1200x630 é a proporção que WhatsApp, LinkedIn e X usam no cartão grande
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp,
    '-vf', 'scale=1200:-2,crop=1200:630', '-quality', '82', out]);
  execFileSync('rm', ['-f', tmp]);
  return out;
}

for (const target of TARGETS) {
  const out = join(ROOT, target.out);
  if (!FORCE && existsSync(out)) {
    console.log(`▸ ${target.out} — em cache`);
    continue;
  }
  process.stdout.write(`▸ ${target.out} … `);
  await generate(target);
  console.log('ok');
}
console.log('\n✔ Concluído.');
