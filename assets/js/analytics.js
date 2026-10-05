(() => {
  // provider: 'none' | 'ga4' | 'plausible'. id: 'G-XXXXXXXXXX' for ga4, 'YOUR-DOMAIN' for plausible.
  const CONFIG = { provider: 'none', id: '' };
  const w = window;

  if (CONFIG.provider === 'ga4' && CONFIG.id) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.id}`;
    document.head.appendChild(s);
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () { w.dataLayer.push(arguments); };
    w.gtag('js', new Date());
    w.gtag('config', CONFIG.id, { anonymize_ip: true });
  }

  if (CONFIG.provider === 'plausible' && CONFIG.id) {
    const s = document.createElement('script');
    s.defer = true;
    s.dataset.domain = CONFIG.id;
    s.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(s);
    w.plausible = w.plausible || function () { (w.plausible.q = w.plausible.q || []).push(arguments); };
  }

  const track = (name, props = {}) => {
    if (CONFIG.provider === 'ga4' && w.gtag) w.gtag('event', name, props);
    if (CONFIG.provider === 'plausible' && w.plausible) w.plausible(name, { props });
  };
  w.track = track;

  document.addEventListener('click', (e) => {
    const el = e.target.closest('a, button');
    if (!el) return;
    const href = el.getAttribute('href') || '';
    const label = el.dataset.label || el.textContent.trim().slice(0, 40);
    if (el.dataset.track) return track(el.dataset.track, { label });
    if (href.includes('wa.me')) return track('whatsapp_click', { label });
    if (href.startsWith('tel:')) return track('call_click', { label });
    if (href.startsWith('mailto:')) return track('email_click', { label });
    if (el.closest('.plan')) return track('pricing_click', { label });
  });
})();
