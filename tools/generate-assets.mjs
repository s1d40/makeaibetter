#!/usr/bin/env node
/**
 * MAKE AI BETTER — Gerador de narrações e imagens via Gemini
 * ---------------------------------------------------------
 * Roda em tempo de BUILD (nunca no browser — a chave não pode ir para o GitHub Pages).
 * Produz, para cada uma das 7 eras de history.html:
 *   assets/images/era-N.webp      arte cinematográfica  (gemini-3-pro-image)
 *   assets/audio/era-N-pt.mp3     narração PT-BR        (gemini-3.1-flash-tts-preview)
 *   assets/audio/era-N-en.mp3     narração EN           (gemini-3.1-flash-tts-preview)
 *   assets/narration.json         roteiros/transcrições (gemini-3.8-flash)
 *
 * Uso:
 *   node tools/generate-assets.mjs                 # gera o que ainda falta
 *   node tools/generate-assets.mjs --only=1,7      # só as eras 1 e 7
 *   node tools/generate-assets.mjs --force         # regera tudo
 *   node tools/generate-assets.mjs --skip-image    # pula imagens
 *   node tools/generate-assets.mjs --skip-audio    # pula áudio
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const MODEL_TEXT = 'gemini-3.8-flash';
const MODEL_TTS = 'gemini-3.1-flash-tts-preview';
const MODEL_IMAGE = 'gemini-3-pro-image';
const API = 'https://generativelanguage.googleapis.com/v1beta/models';

// ─── CLI ──────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n) => argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];

const FORCE = flag('force');
const SKIP_IMAGE = flag('skip-image');
const SKIP_AUDIO = flag('skip-audio');
const ONLY = opt('only')?.split(',').map(Number);

// ─── Chave ────────────────────────────────────────────────────────────────────
function apiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  const f = join(ROOT, 'gemini.api.key');
  if (existsSync(f)) return readFileSync(f, 'utf8').trim();
  throw new Error('Defina GEMINI_API_KEY ou crie gemini.api.key na raiz do projeto.');
}
const KEY = apiKey();

// ─── HTTP com retry ───────────────────────────────────────────────────────────
async function callGemini(model, body, { timeout = 300000, tries = 4 } = {}) {
  for (let attempt = 1; ; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeout);
    try {
      const res = await fetch(`${API}/${model}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
        body: JSON.stringify(body),
        signal: ctrl.signal,
      });
      const json = await res.json();
      if (json.error) throw new Error(`${json.error.status}: ${json.error.message}`);
      return json;
    } catch (err) {
      if (attempt >= tries) throw err;
      const wait = 2 ** attempt * 1500;
      console.warn(`   ↻ tentativa ${attempt} falhou (${err.message.slice(0, 90)}) — aguardando ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
    } finally {
      clearTimeout(timer);
    }
  }
}

const partsOf = (json) => json?.candidates?.[0]?.content?.parts ?? [];
const textOf = (json) => partsOf(json).map((p) => p.text).filter(Boolean).join('');
const inlineOf = (json) => partsOf(json).find((p) => p.inlineData)?.inlineData;

// ─── Fonte da verdade: os textos das eras vivem em scripts/history.js ─────────
function readEraCopy() {
  const src = readFileSync(join(ROOT, 'scripts', 'history.js'), 'utf8');
  const dicts = {};
  for (const lang of ['pt', 'en']) {
    const start = src.indexOf(`  ${lang}: {`);
    if (start < 0) throw new Error(`Dicionário "${lang}" não encontrado em scripts/history.js`);
    const block = src.slice(start, src.indexOf('\n  },', start));
    const entries = {};
    for (const m of block.matchAll(/^\s{4}(era_\d_[a-z0-9_]+):\s*(["'`])([\s\S]*?)\2,?\s*$/gm)) {
      entries[m[1]] = m[3].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    }
    dicts[lang] = entries;
  }
  return dicts;
}

// ─── 1. Roteiro de narração ───────────────────────────────────────────────────
async function generateNarration(era, copy) {
  const gather = (lang) =>
    ['title', 'p1', 'p2', 't1', 't2', 't3']
      .map((k) => copy[lang][`era_${era.id}_${k}`])
      .filter(Boolean)
      .join('\n\n');

  const prompt = `Você é roteirista de documentários científicos. Escreva a NARRAÇÃO em voz alta do capítulo ${era.id} (${era.span}) de um documentário sobre a história da computação.

MATERIAL DE ORIGEM — PORTUGUÊS:
${gather('pt')}

MATERIAL DE ORIGEM — INGLÊS:
${gather('en')}

REGRAS:
- Duas versões: "pt" (português do Brasil) e "en" (inglês). A versão EN é uma recriação natural, não uma tradução literal.
- 110 a 140 palavras cada (~50 segundos falados).
- Tom: documental, grave, cinematográfico. Presente histórico. Frases curtas e respiráveis.
- Abra com o ano ou com uma imagem concreta. Feche com uma frase que empurre o ouvinte para a era seguinte.
- Mantenha nomes próprios, datas e números exatamente como no material de origem. Não invente fatos.
- Texto corrido puro: sem markdown, sem aspas, sem marcações de cena, sem indicações de áudio.

Responda apenas com o JSON.`;

  const json = await callGemini(MODEL_TEXT, {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.85,
      responseMimeType: 'application/json',
      responseSchema: {
        type: 'OBJECT',
        properties: { pt: { type: 'STRING' }, en: { type: 'STRING' } },
        required: ['pt', 'en'],
      },
    },
  });

  const out = JSON.parse(textOf(json));
  return { pt: out.pt.trim(), en: out.en.trim() };
}

// ─── 2. TTS ───────────────────────────────────────────────────────────────────
function wavFromPcm(pcm, { rate = 24000, channels = 1, bits = 16 } = {}) {
  const header = Buffer.alloc(44);
  const byteRate = (rate * channels * bits) / 8;
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(rate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE((channels * bits) / 8, 32);
  header.writeUInt16LE(bits, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

async function generateAudio(era, lang, script, voices, outPath) {
  const voice = voices[lang];
  const json = await callGemini(MODEL_TTS, {
    contents: [{ parts: [{ text: `${voice.style}\n\n${script}` }] }],
    generationConfig: {
      responseModalities: ['AUDIO'],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice.name } } },
    },
  });

  const inline = inlineOf(json);
  if (!inline) throw new Error('resposta de TTS sem áudio');
  const rate = Number(/rate=(\d+)/.exec(inline.mimeType)?.[1] ?? 24000);
  const wav = wavFromPcm(Buffer.from(inline.data, 'base64'), { rate });

  const tmp = `${outPath}.wav`;
  writeFileSync(tmp, wav);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp,
    '-ac', '1', '-ar', '44100', '-b:a', '80k', outPath]);
  execFileSync('rm', ['-f', tmp]);
  return outPath;
}

// ─── 3. Imagem ────────────────────────────────────────────────────────────────
async function generateImage(era, style, outPath) {
  const json = await callGemini(MODEL_IMAGE, {
    contents: [{ parts: [{ text: `${style}\n\nCena (era ${era.span}, paleta ${era.palette}): ${era.imagePrompt}` }] }],
    generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '16:9' } },
  });

  const inline = inlineOf(json);
  if (!inline) throw new Error('resposta de imagem sem bitmap');
  const tmp = `${outPath}.raw`;
  writeFileSync(tmp, Buffer.from(inline.data, 'base64'));
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp,
    '-vf', 'scale=1280:-2', '-quality', '76', outPath]);
  execFileSync('rm', ['-f', tmp]);
  return outPath;
}

// ─── Orquestração ─────────────────────────────────────────────────────────────
const manifest = JSON.parse(readFileSync(join(ROOT, 'tools', 'eras.json'), 'utf8'));
const copy = readEraCopy();
const eras = manifest.eras.filter((e) => !ONLY || ONLY.includes(e.id));

for (const dir of ['assets/images', 'assets/audio']) mkdirSync(join(ROOT, dir), { recursive: true });

const narrationPath = join(ROOT, 'assets', 'narration.json');
const narration = existsSync(narrationPath) ? JSON.parse(readFileSync(narrationPath, 'utf8')) : {};

for (const era of eras) {
  console.log(`\n▸ ERA ${era.id} — ${era.span}`);

  if (FORCE || !narration[era.id]) {
    process.stdout.write('   roteiro… ');
    narration[era.id] = await generateNarration(era, copy);
    writeFileSync(narrationPath, `${JSON.stringify(narration, null, 2)}\n`);
    console.log(`ok (${narration[era.id].pt.split(/\s+/).length} palavras PT)`);
  } else {
    console.log('   roteiro… em cache');
  }

  if (!SKIP_IMAGE) {
    const out = join(ROOT, 'assets', 'images', `era-${era.id}.webp`);
    if (FORCE || !existsSync(out)) {
      process.stdout.write('   imagem… ');
      await generateImage(era, manifest.imageStyle, out);
      console.log('ok');
    } else console.log('   imagem… em cache');
  }

  if (!SKIP_AUDIO) {
    for (const lang of ['pt', 'en']) {
      const out = join(ROOT, 'assets', 'audio', `era-${era.id}-${lang}.mp3`);
      if (FORCE || !existsSync(out)) {
        process.stdout.write(`   áudio ${lang}… `);
        await generateAudio(era, lang, narration[era.id][lang], manifest.voices, out);
        console.log('ok');
      } else console.log(`   áudio ${lang}… em cache`);
    }
  }
}

console.log('\n✔ Concluído. Assets em assets/images e assets/audio.');
