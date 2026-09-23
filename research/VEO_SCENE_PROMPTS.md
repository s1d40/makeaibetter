# Cenas de 8 segundos — história da computação

Sete cenas, uma por era, para gerar no Google Flow (Veo). A paleta de cada uma
segue a mesma direção de arte das ilustrações do site (`tools/eras.json`), então
o conjunto fica contínuo com o que já está publicado.

Prompts em inglês porque o modelo responde melhor assim.

**Três regras que valem para todas:**

1. **Uma tomada só.** Oito segundos não comportam corte. Todo prompt descreve um
   movimento contínuo de câmera que se resolve dentro do tempo.
2. **Algo precisa se mover.** Oito segundos de coisa parada é desperdício — cada
   cena tem um evento que acontece: uma fita passando, um foco mudando, uma luz
   acendendo.
3. **Nunca peça texto.** Modelo de vídeo escreve letra errada com confiança
   absoluta. Todas terminam com a negativa.

---

## Era 1 · 1936–1950 — Bletchley Park

```
Slow dolly-in through a dark wartime codebreaking hut at night. A long punched
paper tape threads continuously through a mechanical reader in the foreground,
its perforations catching warm amber phosphor light. Behind it, electromechanical
rotor drums step and click in sequence, brass and bakelite, half-lost in shadow.
Dust drifts through a single angled shaft of light. Monochrome graphite palette
with amber accents only, deep shadows, volumetric haze, shallow depth of field,
35mm film grain. Audio: rhythmic mechanical clatter, relay clicks, distant
rainfall on a tin roof. No text, no letters, no numbers, no on-screen titles.
```

## Era 2 · 1945–1960 — O transistor

```
Macro shot with a slow push-in and rack focus. In the background, the orange
filament of a vacuum tube glows, flickers, and dims to black. As it fades, focus
racks forward onto a tiny point-contact transistor on a germanium slab in the
foreground — two gold foil contacts catching a hard specular highlight, suddenly
sharp and cold. Deep cyanide blue palette with metallic copper, single hard key
light, black background, extreme shallow depth of field. Audio: the hum of a
tube fading out, replaced by clean electronic silence and a single soft tone.
No text, no letters, no numbers, no on-screen titles.
```

## Era 3 · 1960–1980 — Lei de Moore

```
Continuous slow pull-back, starting in extreme macro on the copper interconnect
traces of an integrated circuit die that look like a city grid seen from orbit.
The camera retreats steadily, revealing the die sits on a silicon wafer, then
that the wafer is one of many in a polished array, rainbow diffraction rippling
across their surfaces as the angle changes. Copper traces on cyan-blue silicon,
clean room lighting, precise and clinical, anamorphic lens flare. Audio: a low
rising synth drone, faint clean-room ventilation hum. No text, no letters, no
numbers, no on-screen titles.
```

## Era 4 · 1980–2000 — PC e a web

```
Slow orbit around a desk in a dark 1990s bedroom. A beige CRT monitor flickers,
snaps on, and floods the room with light, throwing the shadow of the keyboard
across the wall. From the screen a globe of thin fiber-optic lines rises and
slowly rotates, its filaments reaching past the edges of frame. Electric purple
and magenta, 90s neon gradients, practical light from the CRT as the only source,
soft bloom, slight VHS chromatic aberration. Audio: CRT static pop and degauss
thunk, modem handshake tones, a distant dial tone. No text, no letters, no
numbers, no on-screen titles.
```

## Era 5 · 2000–2016 — GPUs e deep learning

```
Steady low dolly tracking straight down a dense datacenter aisle at night. Racks
of GPUs line both walls, their status lights breathing violet in slow waves that
travel ahead of the camera. Above the corridor, a vast translucent lattice of
tensor matrices drifts like aurora, faintly green. Cold mist near the floor,
cables converging to a vanishing point. Electric violet and tensor green,
volumetric light, wide lens, deep focus. Audio: heavy server fan roar, the hum
of cooling, a subtle pulsing low-frequency throb. No text, no letters, no
numbers, no on-screen titles.
```

## Era 6 · 2017–2024 — Transformers

```
Slow orbit through an obsidian void filled with floating glass tokens suspended
in space. Thousands of luminous cyan filaments ignite between them — all at once,
simultaneously, not sequentially — building a dense constellation of connections
that holds and pulses. Glass refraction and caustics scatter light across the
frame. Holographic cyan over deep black, rim lighting on every glass surface,
macro depth of field, particles drifting. Audio: a single swelling harmonic
chord, crystalline chimes, deep sub-bass bloom on the ignition. No text, no
letters, no numbers, no on-screen titles.
```

## Era 7 · 2024–2026 — Quântico e raciocínio System-2

```
Slow vertical crane up along a dilution refrigerator: a chandelier of gold
coaxial lines and copper plates descending into darkness, breathing with cold
vapor, glowing cyan from within. As the camera rises, the gold structure
dissolves into an expanding tree of light branching upward — some branches
brightening and continuing, others dimming and falling away like ash. Holographic
cyan and quantum green over obsidian, volumetric fog, deep blacks, cinematic
anamorphic. Audio: a deep resonant hum, crystalline ticking, a rising tone that
resolves. No text, no letters, no numbers, no on-screen titles.
```

---

## Cena de abertura (opcional)

Se quiser um plano de abertura antes da Era 1:

```
Extreme macro, static shot with a very slow push-in. A single sheet of blank
paper in near darkness. A mechanical punch descends and perforates it — one hole,
then a row of holes — each puncture throwing a tiny burst of paper dust into a
thin shaft of amber light. The perforations begin to glow faintly from behind,
as if lit from another room. Monochrome graphite with amber, extreme shallow
depth of field, high contrast, film grain. Audio: a single sharp mechanical
punch, then a rhythmic series, paper fibers tearing, silence between strikes.
No text, no letters, no numbers, no on-screen titles.
```

---

## Notas práticas para o Flow

- **Proporção:** 16:9 se for entrar no site ou no YouTube; 9:16 se for Shorts.
  Gere separado, não corte depois — enquadramento pensado para vertical é outro.
- **Se a cena vier morta**, o que costuma faltar é o verbo. Troque "a tape in a
  reader" por "a tape threading continuously through a reader". O modelo precisa
  do movimento nomeado.
- **Se vier com letra na tela** mesmo com a negativa, remova do prompt qualquer
  substantivo que sugira leitura — "display", "screen", "label", "readout".
- **A ordem importa.** Veo dá mais peso ao começo do prompt: o movimento de
  câmera e o sujeito ficam nas primeiras palavras, paleta e áudio no fim.
- **Continuidade entre as sete:** a paleta caminha de monocromático com âmbar até
  ciano holográfico com verde quântico. Se gerar fora de ordem, confira se a cor
  de cada uma ainda bate com a era vizinha.
