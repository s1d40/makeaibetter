/**
 * MAKE AI BETTER — Motor de gráficos
 * ----------------------------------
 * SVG inline desenhado por nós, com a matemática de escala delegada ao d3-scale
 * e a geometria de curvas ao d3-shape. Nada de canvas: assim o gráfico herda as
 * custom properties do site, o texto continua sendo texto (selecionável, lido
 * por leitor de tela, achável no Ctrl+F) e o motion.dev anima os mesmos nós.
 *
 * Toda cor sai de var(--chart-*), definida em styles/science.css — trocar tema
 * não exige tocar neste arquivo.
 */

import { scaleLinear, scaleLog, scaleBand, scalePoint } from 'https://cdn.jsdelivr.net/npm/d3-scale@4/+esm';
import { line as d3line, area as d3area, curveMonotoneX, curveLinear } from 'https://cdn.jsdelivr.net/npm/d3-shape@3/+esm';

const NS = 'http://www.w3.org/2000/svg';

/** Cria um nó SVG com atributos — evita 200 linhas de setAttribute. */
function el(tag, attrs = {}, children = []) {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v !== null && v !== undefined) node.setAttribute(k, String(v));
  }
  for (const c of [].concat(children)) {
    if (c) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

/** Formata números para rótulo: 2_200_000 -> "2,2 mi" */
export function fmtCompact(n, lang = 'pt') {
  const abs = Math.abs(n);
  const loc = lang === 'pt' ? 'pt-BR' : 'en-US';
  if (abs >= 1e9) return `${(n / 1e9).toLocaleString(loc, { maximumFractionDigits: 1 })} ${lang === 'pt' ? 'bi' : 'B'}`;
  if (abs >= 1e6) return `${(n / 1e6).toLocaleString(loc, { maximumFractionDigits: 1 })} ${lang === 'pt' ? 'mi' : 'M'}`;
  if (abs >= 1e3) return `${(n / 1e3).toLocaleString(loc, { maximumFractionDigits: abs < 1e4 ? 1 : 0 })} ${lang === 'pt' ? 'mil' : 'k'}`;
  if (abs > 0 && abs < 0.01) return n.toExponential(1);
  return n.toLocaleString(loc, { maximumFractionDigits: 2 });
}

const DEFAULT_MARGIN = { top: 18, right: 20, bottom: 34, left: 52 };

/**
 * Cria a moldura comum: <figure> + <svg> responsivo + camadas de grade, eixos,
 * marcas e interação, já na ordem de pintura correta.
 */
function frame(opts) {
  const {
    width = 640, height = 300, margin = {}, title, desc, className = '',
  } = opts;
  const m = { ...DEFAULT_MARGIN, ...margin };
  const iw = width - m.left - m.right;
  const ih = height - m.top - m.bottom;

  const titleId = `ct-${Math.random().toString(36).slice(2, 9)}`;
  const descId = `${titleId}-d`;

  const svg = el('svg', {
    viewBox: `0 0 ${width} ${height}`,
    class: `mab-chart ${className}`.trim(),
    role: 'img',
    'aria-labelledby': desc ? `${titleId} ${descId}` : titleId,
    preserveAspectRatio: 'xMidYMid meet',
  });
  svg.appendChild(el('title', { id: titleId }, title || ''));
  if (desc) svg.appendChild(el('desc', { id: descId }, desc));

  const plot = el('g', { transform: `translate(${m.left},${m.top})` });
  const layers = {};
  for (const name of ['grid', 'axis', 'marks', 'labels', 'hover']) {
    layers[name] = el('g', { class: `layer-${name}` });
    plot.appendChild(layers[name]);
  }
  svg.appendChild(plot);

  return { svg, layers, iw, ih, m };
}

/** Eixo Y com grade recessiva. Ticks vêm da escala (d3 escolhe valores redondos). */
function axisY(layers, y, iw, { ticks = 5, format = (v) => fmtCompact(v) } = {}) {
  const values = y.ticks ? y.ticks(ticks) : y.domain();
  for (const v of values) {
    const py = y(v);
    if (!Number.isFinite(py)) continue;
    layers.grid.appendChild(el('line', { x1: 0, x2: iw, y1: py, y2: py, class: 'chart-gridline' }));
    layers.axis.appendChild(el('text', { x: -10, y: py, dy: '0.32em', class: 'chart-tick chart-tick-y' }, format(v)));
  }
}

/** Eixo X. Aceita escala contínua (ticks) ou de banda/ponto (domain). */
function axisX(layers, x, ih, { ticks = 6, format = (v) => String(v) } = {}) {
  const values = x.ticks ? x.ticks(ticks) : x.domain();
  const center = x.bandwidth ? x.bandwidth() / 2 : 0;
  for (const v of values) {
    const px = x(v) + center;
    if (!Number.isFinite(px)) continue;
    layers.axis.appendChild(el('text', { x: px, y: ih + 20, class: 'chart-tick chart-tick-x' }, format(v)));
  }
}

/**
 * GRÁFICO DE LINHA / ÁREA
 * Para séries contínuas: curva de luz, crescimento ao longo do tempo,
 * erro lógico por distância de código.
 *
 * series: [{ id, label, color?, points: [{x, y}], area?: boolean, dashed?: boolean }]
 */
export function lineChart(opts) {
  const {
    series, xLabel, yLabel, yScale = 'linear', xScale = 'linear',
    xFormat, yFormat, curve = true, lang = 'pt', yDomain, zero = true,
    xTicks = 6, yTicks = 5, ...rest
  } = opts;

  const { svg, layers, iw, ih } = frame(rest);
  const all = series.flatMap((s) => s.points);
  if (!all.length) return svg;

  const xs = all.map((p) => p.x);
  const ys = all.map((p) => p.y);

  const mkScale = (kind) => (kind === 'log' ? scaleLog() : scaleLinear());
  const x = mkScale(xScale).domain([Math.min(...xs), Math.max(...xs)]).range([0, iw]);

  // `zero: false` é obrigatório para séries que medem desvio de uma linha de base
  // (curva de luz, taxa de erro): ancorar em zero comprime o sinal até sumir.
  // Ancorar em zero segue valendo para comprimento de barra, onde o zero é o sentido da marca.
  let dom = yDomain;
  if (!dom) {
    const lo = Math.min(...ys);
    const hi = Math.max(...ys);
    if (yScale === 'log') dom = [Math.min(...ys.filter((v) => v > 0)), hi];
    else if (zero) dom = [Math.min(0, lo), hi];
    else {
      const pad = (hi - lo) * 0.18 || Math.abs(hi) * 0.001 || 1;
      dom = [lo - pad, hi + pad];
    }
  }
  const y = mkScale(yScale).domain(dom).range([ih, 0]);
  if (!yDomain && zero && yScale !== 'log') y.nice();

  axisY(layers, y, iw, { ticks: yTicks, format: yFormat || ((v) => fmtCompact(v, lang)) });
  axisX(layers, x, ih, { ticks: xTicks, format: xFormat || ((v) => fmtCompact(v, lang)) });

  if (yLabel) {
    layers.axis.appendChild(el('text', {
      class: 'chart-axis-label', transform: `translate(${-(rest.margin?.left ?? DEFAULT_MARGIN.left) + 12},${ih / 2}) rotate(-90)`,
      'text-anchor': 'middle',
    }, yLabel));
  }
  if (xLabel) {
    layers.axis.appendChild(el('text', {
      class: 'chart-axis-label', x: iw / 2, y: ih + 33, 'text-anchor': 'middle',
    }, xLabel));
  }

  const curveFn = curve ? curveMonotoneX : curveLinear;
  const linePath = d3line().x((p) => x(p.x)).y((p) => y(p.y)).curve(curveFn);
  const areaPath = d3area().x((p) => x(p.x)).y0(ih).y1((p) => y(p.y)).curve(curveFn);

  series.forEach((s, i) => {
    const stroke = s.color || `var(--chart-c${(i % 6) + 1})`;
    if (s.area) {
      layers.marks.appendChild(el('path', {
        d: areaPath(s.points), fill: stroke, 'fill-opacity': 0.14, stroke: 'none',
        class: 'chart-area', 'data-series': s.id,
      }));
    }
    layers.marks.appendChild(el('path', {
      d: linePath(s.points), fill: 'none', stroke, 'stroke-width': 2,
      'stroke-linecap': 'round', 'stroke-linejoin': 'round',
      'stroke-dasharray': s.dashed ? '5 4' : null,
      class: 'chart-line', 'data-series': s.id,
    }));
    if (s.markers) {
      for (const p of s.points) {
        layers.marks.appendChild(el('circle', {
          cx: x(p.x), cy: y(p.y), r: 4.5, fill: stroke,
          stroke: 'var(--chart-surface)', 'stroke-width': 2, class: 'chart-marker',
        }));
      }
    }
  });

  attachCrosshair(svg, layers, { series, x, y, iw, ih, lang, yFormat, xFormat });
  return svg;
}

/**
 * BARRAS HORIZONTAIS ordenadas por magnitude.
 * Rótulo de categoria e valor sempre visíveis: a identidade nunca depende da cor.
 */
export function barChart(opts) {
  const {
    data, xScale = 'linear', valueFormat, lang = 'pt', sort = true, ...rest
  } = opts;

  const rows = sort ? [...data].sort((a, b) => b.value - a.value) : [...data];
  const margin = { left: 150, right: 76, top: 10, bottom: 30, ...(rest.margin || {}) };
  const { svg, layers, iw, ih } = frame({ ...rest, margin });

  const vals = rows.map((r) => r.value);
  const x = (xScale === 'log' ? scaleLog() : scaleLinear())
    .domain([xScale === 'log' ? Math.min(...vals.filter((v) => v > 0)) : 0, Math.max(...vals)])
    .range([0, iw]).nice();

  const y = scaleBand().domain(rows.map((r) => r.label)).range([0, ih]).padding(0.34);
  const fmt = valueFormat || ((v) => fmtCompact(v, lang));

  x.ticks(5).forEach((v) => {
    layers.grid.appendChild(el('line', { x1: x(v), x2: x(v), y1: 0, y2: ih, class: 'chart-gridline' }));
    layers.axis.appendChild(el('text', { x: x(v), y: ih + 19, class: 'chart-tick chart-tick-x' }, fmt(v)));
  });

  const base = xScale === 'log' ? 0 : x(x.domain()[0]);
  rows.forEach((r, i) => {
    const w = Math.max(2, x(r.value) - base);
    const fill = r.color || `var(--chart-c${(i % 6) + 1})`;
    // cantos arredondados só na ponta do dado, ancorado na linha de base
    layers.marks.appendChild(el('rect', {
      x: base, y: y(r.label), width: w, height: y.bandwidth(), rx: 4,
      fill, class: 'chart-bar', 'data-label': r.label,
    }));
    layers.axis.appendChild(el('text', {
      x: -12, y: y(r.label) + y.bandwidth() / 2, dy: '0.32em',
      class: 'chart-tick chart-tick-cat', 'text-anchor': 'end',
    }, r.label));
    layers.labels.appendChild(el('text', {
      x: base + w + 9, y: y(r.label) + y.bandwidth() / 2, dy: '0.32em',
      class: 'chart-value-label',
    }, r.display || fmt(r.value)));
  });

  return svg;
}

/**
 * Linha-guia + tooltip. Um gráfico em SVG é interativo por natureza; deixar
 * sem hover é jogar fora a principal vantagem sobre uma imagem.
 */
function attachCrosshair(svg, layers, ctx) {
  const { series, x, y, iw, ih, lang, yFormat, xFormat } = ctx;
  if (!series.length) return;

  const guide = el('line', { y1: 0, y2: ih, class: 'chart-crosshair', opacity: 0 });
  const dots = series.map((s, i) => el('circle', {
    r: 4.5, class: 'chart-focus-dot', opacity: 0,
    fill: s.color || `var(--chart-c${(i % 6) + 1})`,
  }));
  layers.hover.appendChild(guide);
  dots.forEach((d) => layers.hover.appendChild(d));
  layers.hover.appendChild(el('rect', {
    x: 0, y: 0, width: iw, height: ih, fill: 'transparent', class: 'chart-capture',
  }));

  const tip = document.createElement('div');
  tip.className = 'chart-tooltip';
  tip.hidden = true;

  const fmtY = yFormat || ((v) => fmtCompact(v, lang));
  const fmtX = xFormat || ((v) => fmtCompact(v, lang));

  /** Converte coordenada de tela para o sistema do grupo de plotagem. */
  const toPlot = (evt) => {
    const ctm = layers.marks.getScreenCTM();
    if (!ctm) return null;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    return pt.matrixTransform(ctm.inverse());
  };

  const move = (evt) => {
    const local = toPlot(evt);
    if (!local || local.x < -4 || local.x > iw + 4) return;
    const xv = x.invert(local.x);
    if (!Number.isFinite(xv)) return;

    let px = 0;
    let headX = xv;
    const rows = series.map((s, i) => {
      const near = s.points.reduce((a, b) => (Math.abs(b.x - xv) < Math.abs(a.x - xv) ? b : a));
      px = x(near.x);
      headX = near.x;
      dots[i].setAttribute('cx', px);
      dots[i].setAttribute('cy', y(near.y));
      dots[i].setAttribute('opacity', 1);
      const color = s.color || `var(--chart-c${(i % 6) + 1})`;
      return `<span class="tip-key"><i style="background:${color}"></i>${s.label}</span><b>${fmtY(near.y)}</b>`;
    });

    guide.setAttribute('opacity', 1);
    guide.setAttribute('x1', px);
    guide.setAttribute('x2', px);

    tip.innerHTML = `<div class="tip-head">${fmtX(headX)}</div>${rows.join('')}`;
    tip.hidden = false;

    const host = svg.parentElement;
    if (!host) return;
    if (tip.parentElement !== host) host.appendChild(tip);
    const hb = host.getBoundingClientRect();
    tip.style.left = `${evt.clientX - hb.left}px`;
    tip.style.top = `${evt.clientY - hb.top}px`;
  };

  const leave = () => {
    guide.setAttribute('opacity', 0);
    dots.forEach((d) => d.setAttribute('opacity', 0));
    tip.hidden = true;
  };

  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerleave', leave);
}

/**
 * Fallback tabular. Exigido pela diretriz de acessibilidade: a mesma informação
 * precisa existir fora do canal visual, e serve de conferência para quem quer
 * o número exato.
 */
export function dataTable(series, { xLabel = 'x', lang = 'pt', xFormat } = {}) {
  const xs = [...new Set(series.flatMap((s) => s.points.map((p) => p.x)))].sort((a, b) => a - b);
  const table = document.createElement('table');
  table.className = 'chart-data-table';
  const fx = xFormat || ((v) => fmtCompact(v, lang));

  table.innerHTML = `
    <thead><tr><th scope="col">${xLabel}</th>${series.map((s) => `<th scope="col">${s.label}</th>`).join('')}</tr></thead>
    <tbody>${xs.map((xv) => `
      <tr><th scope="row">${fx(xv)}</th>${series.map((s) => {
        const p = s.points.find((q) => q.x === xv);
        return `<td>${p ? fmtCompact(p.y, lang) : '—'}</td>`;
      }).join('')}</tr>`).join('')}
    </tbody>`;
  return table;
}

export { scaleLinear, scaleLog, scaleBand, scalePoint };

/**
 * DOT PLOT em escala log.
 *
 * Substitui a barra quando a escala é logarítmica: o comprimento de uma barra
 * codifica magnitude a partir do zero, e num eixo log esse comprimento deixa de
 * ser proporcional ao valor — o olho lê uma razão que não existe. O ponto marca
 * a posição sem afirmar nada sobre área, e o fio até a margem só guia o olho.
 *
 * data: [{ label, value, display?, color?, note? }]
 */
export function dotPlot(opts) {
  const { data, xScale = 'log', valueFormat, lang = 'pt', sort = true, ...rest } = opts;
  const rows = sort ? [...data].sort((a, b) => b.value - a.value) : [...data];
  const margin = { left: 190, right: 92, top: 12, bottom: 34, ...(rest.margin || {}) };
  const { svg, layers, iw, ih } = frame({ ...rest, margin });

  const vals = rows.map((r) => r.value).filter((v) => v > 0);
  const x = (xScale === 'log' ? scaleLog() : scaleLinear())
    .domain([Math.min(...vals), Math.max(...vals)]).range([0, iw]).nice();
  const y = scalePoint().domain(rows.map((r) => r.label)).range([0, ih]).padding(0.6);
  const fmt = valueFormat || ((v) => fmtCompact(v, lang));

  x.ticks(4).forEach((v) => {
    layers.grid.appendChild(el('line', { x1: x(v), x2: x(v), y1: 0, y2: ih, class: 'chart-gridline' }));
    layers.axis.appendChild(el('text', { x: x(v), y: ih + 20, class: 'chart-tick chart-tick-x' }, fmt(v)));
  });

  rows.forEach((r, i) => {
    const py = y(r.label);
    const px = x(Math.max(r.value, x.domain()[0]));
    layers.marks.appendChild(el('line', {
      x1: 0, x2: px, y1: py, y2: py, class: 'chart-leader',
    }));
    layers.marks.appendChild(el('circle', {
      cx: px, cy: py, r: 6, fill: r.color || `var(--chart-c${(i % 6) + 1})`,
      stroke: 'var(--chart-surface)', 'stroke-width': 2, class: 'chart-dot',
    }));
    layers.axis.appendChild(el('text', {
      x: -14, y: py, dy: '0.32em', class: 'chart-tick chart-tick-cat', 'text-anchor': 'end',
    }, r.label));
    layers.labels.appendChild(el('text', {
      x: px + 12, y: py, dy: '0.32em', class: 'chart-value-label',
    }, r.display || fmt(r.value)));
  });

  return svg;
}

/**
 * BARRAS HORIZONTAIS EMPILHADAS — para somar etapas de um processo.
 * rows: [{ label, segments: [{ id, label, value }] }]
 */
export function stackedBarChart(opts) {
  const { rows, valueFormat, lang = 'pt', colorFor, ...rest } = opts;
  const margin = { left: 172, right: 76, top: 12, bottom: 34, ...(rest.margin || {}) };
  const { svg, layers, iw, ih } = frame({ ...rest, margin });

  const totals = rows.map((r) => r.segments.reduce((a, sgm) => a + sgm.value, 0));
  const x = scaleLinear().domain([0, Math.max(...totals)]).range([0, iw]).nice();
  const y = scaleBand().domain(rows.map((r) => r.label)).range([0, ih]).padding(0.42);
  const fmt = valueFormat || ((v) => fmtCompact(v, lang));

  x.ticks(5).forEach((v) => {
    layers.grid.appendChild(el('line', { x1: x(v), x2: x(v), y1: 0, y2: ih, class: 'chart-gridline' }));
    layers.axis.appendChild(el('text', { x: x(v), y: ih + 20, class: 'chart-tick chart-tick-x' }, fmt(v)));
  });

  rows.forEach((r, ri) => {
    let acc = 0;
    r.segments.forEach((sgm, si) => {
      const x0 = x(acc);
      const x1 = x(acc + sgm.value);
      const last = si === r.segments.length - 1;
      // 2px de respiro entre segmentos: separa sem precisar de borda colorida
      const w = Math.max(1, x1 - x0 - (last ? 0 : 2));
      // A cor segue a IDENTIDADE do segmento, nunca sua posição na pilha: duas
      // linhas com etapas diferentes não podem reusar a mesma cor só porque
      // ambas começam na posição 0 — a legenda passaria a mentir.
      const rect = el('rect', {
        x: x0, y: y(r.label), width: w, height: y.bandwidth(),
        rx: last ? 4 : 0,
        fill: colorFor ? colorFor(sgm.id) : `var(--chart-c${(si % 6) + 1})`,
        class: 'chart-bar', 'data-segment': sgm.id,
      });
      rect.appendChild(el('title', {}, `${sgm.label}: ${fmt(sgm.value)}`));
      layers.marks.appendChild(rect);
      acc += sgm.value;
    });

    layers.axis.appendChild(el('text', {
      x: -14, y: y(r.label) + y.bandwidth() / 2, dy: '0.32em',
      class: 'chart-tick chart-tick-cat', 'text-anchor': 'end',
    }, r.label));
    layers.labels.appendChild(el('text', {
      x: x(totals[ri]) + 10, y: y(r.label) + y.bandwidth() / 2, dy: '0.32em',
      class: 'chart-value-label',
    }, fmt(totals[ri])));
  });

  return svg;
}
