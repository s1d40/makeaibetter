/**
 * Curva de luz de trânsito planetário — modelo físico, não dado inventado.
 *
 * O fluxo observado cai quando o disco do planeta cobre parte do disco estelar.
 * A queda é calculada a partir da geometria de sobreposição de dois círculos,
 * ponderada por escurecimento de limbo quadrático (a borda da estrela é menos
 * brilhante que o centro — é o que dá à curva o formato de "U" arredondado em
 * vez de um degrau).
 *
 * Referência do modelo: Mandel & Agol (2002), "Analytic Light Curves for Planetary
 * Transit Searches". Implementação numérica simplificada por anéis concêntricos,
 * suficiente para a escala de um gráfico explicativo.
 *
 * Todos os valores saem de fórmula. Nenhum é observação de um planeta real.
 */

/** Área de interseção de dois círculos de raios r1, r2 com centros a distância d. */
function lensArea(d, r1, r2) {
  if (d >= r1 + r2) return 0;
  if (d <= Math.abs(r1 - r2)) return Math.PI * Math.min(r1, r2) ** 2;
  const a1 = Math.acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1));
  const a2 = Math.acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2));
  return r1 * r1 * (a1 - Math.sin(2 * a1) / 2) + r2 * r2 * (a2 - Math.sin(2 * a2) / 2);
}

/**
 * Intensidade relativa da superfície estelar a uma distância radial r (0 = centro,
 * 1 = limbo), com lei de escurecimento quadrática I(mu)/I(0) = 1 - u1(1-mu) - u2(1-mu)^2.
 */
function limbIntensity(r, u1, u2) {
  if (r >= 1) return 0;
  const mu = Math.sqrt(1 - r * r);
  return 1 - u1 * (1 - mu) - u2 * (1 - mu) ** 2;
}

/**
 * Fluxo normalizado (1 = estrela sem obstrução) para o planeta a uma separação
 * projetada `sep`, em raios estelares.
 *
 * @param {number} sep  separação centro-a-centro, em raios estelares
 * @param {number} k    razão de raios Rp/Rs
 * @param {number} u1   coeficiente linear de escurecimento de limbo
 * @param {number} u2   coeficiente quadrático
 * @param {number} rings número de anéis da integração numérica
 */
export function fluxAt(sep, k, u1 = 0.44, u2 = 0.23, rings = 220) {
  if (sep >= 1 + k) return 1;

  let total = 0;
  let blocked = 0;
  const dr = 1 / rings;

  for (let i = 0; i < rings; i++) {
    const rIn = i * dr;
    const rOut = rIn + dr;
    const rMid = (rIn + rOut) / 2;
    const intensity = limbIntensity(rMid, u1, u2);
    const ringArea = Math.PI * (rOut * rOut - rIn * rIn);
    total += intensity * ringArea;

    // fração do anel coberta pelo disco do planeta
    const covOut = lensArea(sep, rOut, k);
    const covIn = lensArea(sep, rIn, k);
    const covered = Math.max(0, covOut - covIn);
    blocked += intensity * covered;
  }

  return total > 0 ? (total - blocked) / total : 1;
}

/**
 * Gera a curva de luz completa de um trânsito.
 *
 * @param {object} p
 * @param {number} p.k       razão de raios Rp/Rs (ex.: 0.09 ≈ Júpiter quente)
 * @param {number} p.b       parâmetro de impacto (0 = central, 1 = raspando o limbo)
 * @param {number} p.points  resolução da curva
 * @param {number} p.span    meia-janela em raios estelares
 * @returns {{points: {x:number,y:number}[], depthPpm:number, durationRel:number}}
 */
export function transitCurve({ k = 0.09, b = 0.3, points = 181, span = 1.45 } = {}) {
  const out = [];
  for (let i = 0; i < points; i++) {
    // x = deslocamento orbital projetado, em raios estelares
    const x = -span + (2 * span * i) / (points - 1);
    const sep = Math.hypot(x, b);
    out.push({ x, y: fluxAt(sep, k) });
  }

  const minFlux = out.reduce((a, p) => Math.min(a, p.y), 1);
  const inTransit = out.filter((p) => p.y < 0.999995);
  const durationRel = inTransit.length
    ? inTransit[inTransit.length - 1].x - inTransit[0].x
    : 0;

  return {
    points: out,
    depthPpm: Math.round((1 - minFlux) * 1e6),
    durationRel: +durationRel.toFixed(3),
  };
}

/** Planetas de referência, para o usuário ter escala do que k significa. */
export const REFERENCE_PLANETS = [
  { id: 'earth', k: 0.0092, label_pt: 'Terra em torno do Sol', label_en: 'Earth around the Sun' },
  { id: 'neptune', k: 0.0355, label_pt: 'Netuno', label_en: 'Neptune' },
  { id: 'jupiter', k: 0.1028, label_pt: 'Júpiter', label_en: 'Jupiter' },
  { id: 'hotjup', k: 0.15, label_pt: 'Júpiter quente inflado', label_en: 'Inflated hot Jupiter' },
];
