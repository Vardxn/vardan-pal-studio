(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- single source of truth for hero, showcase and work grid ---- */
  const PROJECTS = [
    { cat: 'Healthcare',  name: 'Aurelia Clinic',          domain: 'aureliaclinic.in',   headline: 'Care that feels unhurried.',     tagline: 'Dental and skin care in South Delhi.',   nav: ['Services', 'Doctors', 'About', 'Book'],         bg: '#eef3f1', ink: '#17302b', accent: '#5b8f84', url: 'demos/clinic/index.html' },
    { cat: 'Hospitality', name: 'Malcha Table',            domain: 'malchatable.com',    headline: 'A table worth the evening.',     tagline: 'Seasonal menus and private dining.',     nav: ['Menu', 'Experience', 'Gallery', 'Reserve'],     bg: '#f3ebdf', ink: '#2a1d14', accent: '#b0653a', url: 'demos/restaurant/index.html' },
    { cat: 'Beauty',      name: 'Maison Aura',             domain: 'maisonaura.in',      headline: 'Craft in every detail.',         tagline: 'Hair, skin and grooming studio.',        nav: ['Services', 'Team', 'Gallery', 'Book'],          bg: '#efe7e2', ink: '#33231f', accent: '#b9805f', url: 'demos/salon/index.html' },
    { cat: 'Property',    name: 'South Delhi Prime Estates', domain: 'sdprime.estate',   headline: 'Homes with a long view.',        tagline: 'Residences and advisory in South Delhi.', nav: ['Properties', 'About', 'Locations', 'Enquire'], bg: '#ebe9e4', ink: '#1d2024', accent: '#8a7a56', url: 'demos/real-estate/index.html' },
    { cat: 'Creative',    name: 'Atelier Eleven',          domain: 'atelier11.studio',   headline: 'Spaces drawn with intent.',      tagline: 'Interior and architecture studio.',      nav: ['Projects', 'Process', 'Studio', 'Contact'],     bg: '#1c1b19', ink: '#f1ede4', accent: '#c8ad7c', url: 'demos/interior/index.html' },
    { cat: 'Photography', name: 'Studio Vows',             domain: 'studiovows.in',      headline: 'Days kept as they felt.',        tagline: 'Wedding and event photography.',         nav: ['Portfolio', 'Packages', 'Stories', 'Enquire'],  bg: '#f5ece8', ink: '#3a2622', accent: '#c98f86', url: 'demos/events/index.html' }
  ];

  const mock = (p) => `
    <div class="mock" style="--m-bg:${p.bg};--m-ink:${p.ink};--m-accent:${p.accent}">
      <div class="mock-bar"><span class="mock-dots"><i></i><i></i><i></i></span><span class="mock-url">${p.domain}</span></div>
      <div class="mock-body">
        <div class="mock-nav"><b>${p.name}</b><span>${p.nav.map(n => `<em style="font-style:normal">${n}</em>`).join('')}</span></div>
        <div class="mock-hero">
          <div><h4>${p.headline}</h4><p>${p.tagline}</p><span class="mock-btn">${p.nav[3]}</span></div>
          <div class="mock-img"></div>
        </div>
        <div class="mock-cards"><i></i><i></i><i></i></div>
      </div>
    </div>`;

  const fit = (p) => `<div class="mock-fit"><div class="mock-canvas">${mock(p)}</div></div>`;

  const ro = new ResizeObserver(entries => entries.forEach(e =>
    e.target.style.setProperty('--s', e.contentRect.width / 760)));
  const watchFits = (root = document) => $$('.mock-fit', root).forEach(el => {
    el.style.setProperty('--s', el.clientWidth / 760);
    ro.observe(el);
  });

  /* ---- hero stage ---- */
  const stage = $('#heroStage');
  if (stage) {
    const picks = [PROJECTS[0], PROJECTS[1], PROJECTS[3]];
    const speeds = [0.05, 0.1, 0.02];
    stage.innerHTML = picks.map((p, i) =>
      `<div class="stage-card" data-speed="${speeds[i]}"><div class="float" style="animation-delay:${i * -3}s">${fit(p)}</div></div>`).join('');
    watchFits(stage);
  }

  /* ---- work grid ---- */
  const grid = $('#workGrid');
  if (grid) {
    grid.innerHTML = PROJECTS.map((p, i) => {
      const ext = p.url.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
      return `<a class="work-card reveal" style="--d:${(i % 3) * 90}ms" href="${p.url}"${ext}>
        <div class="work-cover" style="--c:${p.accent}">${fit(p)}</div>
        <div class="work-meta"><div><h3>${p.name}</h3><p class="eyebrow">${p.cat}</p></div><span class="link">View project <span class="arr">→</span></span></div>
      </a>`;
    }).join('');
    watchFits(grid);
  }

  /* ---- showcase ---- */
  const tabs = $('.tabs'), copy = $('.showcase-copy'), pane = $('.showcase-stage');
  if (tabs && copy && pane) {
    let current = 0, auto = true, timer = null;
    tabs.innerHTML = PROJECTS.map((p, k) =>
      `<button class="tab" role="tab" id="tab-${k}" aria-selected="${k === 0}" aria-controls="showcasePanel" tabindex="${k === 0 ? 0 : -1}">${p.cat}</button>`).join('');
    pane.id = 'showcasePanel'; pane.setAttribute('role', 'tabpanel');

    const paint = (k) => {
      const p = PROJECTS[k];
      $$('.tab', tabs).forEach((t, n) => {
        t.setAttribute('aria-selected', String(n === k));
        t.tabIndex = n === k ? 0 : -1;
        t.classList.toggle('auto', auto && n === k && !reduce);
      });
      copy.innerHTML = `<p class="eyebrow">${p.cat}</p><h3>${p.name}</h3><p class="muted">${p.tagline}</p>
        <p class="path">${p.nav.join('  →  ')}</p>
        <a class="link" href="${p.url}">View project <span class="arr">→</span></a>`;
      pane.innerHTML = fit(p);
      pane.setAttribute('aria-labelledby', `tab-${k}`);
      watchFits(pane);
    };
    const show = (k, user = false) => {
      current = k;
      if (user) { auto = false; clearInterval(timer); }
      if (reduce) return paint(k);
      copy.classList.add('swap'); pane.classList.add('swap');
      setTimeout(() => { paint(k); copy.classList.remove('swap'); pane.classList.remove('swap'); }, 260);
    };
    paint(0);

    tabs.addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) show($$('.tab', tabs).indexOf(b), true); });
    tabs.addEventListener('keydown', e => {
      if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
      const n = (current + (e.key === 'ArrowRight' ? 1 : -1) + PROJECTS.length) % PROJECTS.length;
      show(n, true); $$('.tab', tabs)[n].focus();
    });
    new IntersectionObserver(([en]) => {
      clearInterval(timer);
      if (en.isIntersecting && auto && !reduce) timer = setInterval(() => show((current + 1) % PROJECTS.length), 5200);
    }, { threshold: 0.35 }).observe($('#showcase'));
  }

  /* ---- mobile menu ---- */
  const burger = $('.nav-toggle');
  const closeMenu = () => { document.body.classList.remove('menu-open'); burger && burger.setAttribute('aria-expanded', 'false'); };
  burger && burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  addEventListener('keydown', e => e.key === 'Escape' && closeMenu());

  /* ---- smooth scroll + anchors ---- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.1, easing: t => 1 - Math.pow(1 - t, 3) });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = $(id);
    if (!target) return;
    e.preventDefault(); closeMenu();
    lenis ? lenis.scrollTo(target, { offset: -72 }) : target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }));

  /* ---- navbar state ---- */
  const nav = $('.nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', scrollY > 24);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  /* ---- hero parallax ---- */
  const cards = $$('.stage-card');
  if (cards.length && !reduce) {
    let ticking = false;
    addEventListener('scroll', () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(scrollY, innerHeight);
        cards.forEach(c => c.style.setProperty('--py', `${-y * c.dataset.speed}px`));
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---- enquiry form ---- */
  const form = $('#enquireForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    if (!d.get('name') || !d.get('type')) { form.reportValidity?.(); return; }
    const text = `Hi, I'm ${d.get('name')}. I run a ${d.get('type')} business and I'd like a website.${d.get('msg') ? ' ' + d.get('msg') : ''}`;
    window.open(`https://wa.me/918279696707?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  /* ---- reveal (keep this block last, after all rendering) ---- */
  $$('[data-stagger]').forEach(g => [...g.children].forEach((c, k) => {
    c.classList.add('reveal'); c.style.setProperty('--d', `${k * 90}ms`);
  }));
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('.reveal, .steps').forEach(el => io.observe(el));
})();
