/**
 * Embed de YouTube com fachada.
 *
 * Um <iframe> de YouTube na página custa mais de 1 MB de JavaScript e grava
 * cookie de rastreamento antes de alguém apertar play. Aqui a página mostra só
 * um pôster local com botão; o iframe é criado no clique, já com autoplay, e vai
 * para o domínio youtube-nocookie.com.
 *
 * Uso no HTML:
 *   <div class="yt-embed" data-video="quantica"></div>
 *
 * A configuração (ID do vídeo, pôster, duração, título) vive em
 * assets/videos.json — assim publicar um vídeo novo é colar um ID, não mexer
 * em markup.
 */

let catalog = null;

async function loadCatalog() {
  if (catalog) return catalog;
  try {
    const res = await fetch('/assets/videos.json', { cache: 'no-cache' });
    catalog = res.ok ? (await res.json()).videos : {};
  } catch {
    catalog = {};
  }
  return catalog;
}

const fmtDuration = (s) => {
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
};

const ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">'
  + '<polygon points="8 5 19 12 8 19"/></svg>';

/**
 * Monta a fachada de um slot.
 * @param {HTMLElement} host   elemento com data-video
 * @param {object} cfg         entrada do catálogo
 * @param {'pt'|'en'} lang
 */
function mount(host, cfg, lang) {
  const title = lang === 'pt' ? cfg.title_pt : cfg.title_en;
  const duration = fmtDuration(cfg.seconds);
  const pending = !cfg.youtubeId;

  host.classList.add('yt-embed', `yt-${cfg.orientation || 'landscape'}`);
  host.classList.toggle('is-pending', pending);
  host.replaceChildren();

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'yt-facade';
  btn.disabled = pending;
  btn.setAttribute(
    'aria-label',
    pending
      ? (lang === 'pt' ? `${title} — vídeo em breve` : `${title} — video coming soon`)
      : (lang === 'pt' ? `Assistir: ${title}, ${duration}` : `Play: ${title}, ${duration}`)
  );

  btn.innerHTML = `
    <img class="yt-poster" src="${cfg.poster}" alt="" loading="lazy" decoding="async">
    <span class="yt-scrim" aria-hidden="true"></span>
    <span class="yt-play" aria-hidden="true">${ICON_PLAY}</span>
    <span class="yt-info">
      <span class="yt-title">${title}</span>
      <span class="yt-duration">${pending
        ? (lang === 'pt' ? 'em breve' : 'coming soon')
        : duration}</span>
    </span>`;

  if (!pending) {
    btn.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.className = 'yt-frame';
      // youtube-nocookie + autoplay porque o clique já é a intenção do usuário
      frame.src = `https://www.youtube-nocookie.com/embed/${cfg.youtubeId}`
        + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
      frame.title = title;
      frame.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frame.loading = 'lazy';
      host.replaceChildren(frame);
      frame.focus();
    }, { once: true });
  }

  host.appendChild(btn);
}

/**
 * Renderiza todos os slots .yt-embed[data-video] da página.
 * Idempotente: chamar de novo na troca de idioma reescreve os rótulos.
 */
export async function renderVideos(lang = 'pt') {
  const slots = [...document.querySelectorAll('.yt-embed[data-video]')];
  if (!slots.length) return;

  const cat = await loadCatalog();
  for (const host of slots) {
    // um vídeo já aberto não é desmontado: trocar de idioma não pode
    // interromper a reprodução de quem está assistindo
    if (host.querySelector('.yt-frame')) continue;

    const cfg = cat[host.dataset.video];
    if (!cfg) {
      host.remove();
      continue;
    }
    mount(host, cfg, lang);
  }
}
