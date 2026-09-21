/**
 * Ponte entre o app.js (script clássico) e o embed de vídeo (módulo ES).
 * Renderiza as fachadas no carregamento e as reescreve quando o idioma muda.
 */
import { renderVideos } from './lib/youtube.js';

const lang = () => (localStorage.getItem('makeaibetter_lang') === 'en' ? 'en' : 'pt');

renderVideos(lang());
document.addEventListener('mab:langchange', (e) => renderVideos(e.detail || lang()));
