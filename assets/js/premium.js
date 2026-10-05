(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     PROJECT DATA (SINGLE SOURCE OF TRUTH)
     ========================================================================== */
  const PROJECTS = [
    {
      cat: 'Healthcare',
      name: 'Aurelia Clinic',
      domain: 'aureliaclinic.in',
      headline: 'Care that feels unhurried.',
      tagline: 'Dental and skin aesthetic practice in South Delhi.',
      features: [
        'Online Consultation & Appointment Request',
        'Doctor Credentials & Clinical Specialities',
        'Transparent Treatment Guides & Pricing',
        'Instant WhatsApp Patient Triage'
      ],
      shot: 'assets/shots/clinic.webp',
      dir: 'clinic',
      url: 'demos/clinic/'
    },
    {
      cat: 'Hospitality',
      name: 'Malcha Table',
      domain: 'malchatable.com',
      headline: 'A table worth the evening.',
      tagline: 'Seasonal tasting menus and intimate dining in Chanakyapuri.',
      features: [
        'Real-Time Table Reservation Flow',
        'Dynamic Seasonal Tasting Menu Showcase',
        'Atmospheric Interior & Culinary Lookbook',
        'Sommelier & Private Event Concierge'
      ],
      shot: 'assets/shots/restaurant.webp',
      dir: 'restaurant',
      url: 'demos/restaurant/'
    },
    {
      cat: 'Beauty & Lifestyle',
      name: 'Maison Aura',
      domain: 'maisonaura.in',
      headline: 'Craft in every detail.',
      tagline: 'Haute coiffure and aesthetic grooming studio.',
      features: [
        'Master Stylist Portfolios & Lookbook',
        'Curated Service Rate Cards & Treatments',
        'Direct VIP Appointment Booking',
        'Bespoke Product Range Showcase'
      ],
      shot: 'assets/shots/salon.webp',
      dir: 'salon',
      url: 'demos/salon/'
    },
    {
      cat: 'Property',
      name: 'South Delhi Prime Estates',
      domain: 'sdprime.estate',
      headline: 'Homes with a long view.',
      tagline: 'Prime residential advisory across South Delhi neighbourhoods.',
      features: [
        'Curated Lookbook of Prime Residences',
        'Discreet Confidential Acquisitions',
        'Vasant Vihar & GK Neighbourhood Guides',
        'Private Viewing Scheduling'
      ],
      shot: 'assets/shots/real-estate.webp',
      dir: 'real-estate',
      url: 'demos/real-estate/'
    },
    {
      cat: 'Creative',
      name: 'Atelier Eleven',
      domain: 'atelier11.studio',
      headline: 'Spaces drawn with intent.',
      tagline: 'Interior architecture and material design studio.',
      features: [
        'Editorial Project Monographs & Journals',
        'Tactile Material Palettes & Spatial Studies',
        'Studio Philosophy & Craft Ethos',
        'Client Commission Intake Flow'
      ],
      shot: 'assets/shots/interior.webp',
      dir: 'interior',
      url: 'demos/interior/'
    },
    {
      cat: 'Photography',
      name: 'Studio Vows',
      domain: 'studiovows.in',
      headline: 'Days kept as they felt.',
      tagline: 'Wedding cinema and fine-art destination photography.',
      features: [
        'Full-Bleed Visual Narrative Stories',
        'Cinematic Film Teaser Previews',
        'Transparent Commission Packages',
        'Destination Date Availability Checker'
      ],
      shot: 'assets/shots/events.webp',
      dir: 'events',
      url: 'demos/events/'
    }
  ];

  /* ==========================================================================
     INTERACTIVE SHOWCASE
     ========================================================================== */
  const tabs = $('.category-tabs-bar') || $('.tabs');
  const copy = $('#showcaseCopy') || $('.showcase-copy');
  const screenWrap = $('#showcaseMock') || $('.showcase-screen-wrap');
  const urlEl = $('#showcaseUrl');
  const imgEl = $('#showcaseImg');
  const linkEl = $('#showcaseLink');

  if (tabs && copy && screenWrap) {
    let current = 0;
    let auto = true;
    let timer = null;

    // Render tab buttons
    tabs.innerHTML = PROJECTS.map((p, k) => `
      <button class="cat-pill tab ${k === 0 ? 'active' : ''}" role="tab" id="tab-${k}" aria-selected="${k === 0}" aria-controls="showcaseStage" tabindex="${k === 0 ? 0 : -1}">
        ${p.cat}
      </button>
    `).join('');

    const paint = (k) => {
      const p = PROJECTS[k];

      // Update tabs
      $$('.cat-pill, .tab', tabs).forEach((t, n) => {
        const isMatch = n === k;
        t.setAttribute('aria-selected', String(isMatch));
        t.classList.toggle('active', isMatch);
        t.tabIndex = isMatch ? 0 : -1;
      });

      // Update copy
      copy.innerHTML = `
        <span class="showcase-client-badge">${p.cat} &middot; Portfolio Demo</span>
        <h3 class="showcase-project-name">${p.name}</h3>
        <p class="showcase-tagline">${p.headline} ${p.tagline}</p>
        <div class="showcase-features-list">
          ${p.features.map(f => `
            <div class="showcase-feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
        <div class="showcase-cta-row">
          <a class="btn btn--accent" href="${p.url}" target="_blank" rel="noopener" data-track="demo_click" data-label="${p.name}">
            Explore Live Demo <span class="arr">&rarr;</span>
          </a>
          <span style="font-size: 13px; color: var(--dark-muted);">Direct working build</span>
        </div>
      `;

      // Update screen
      if (urlEl) urlEl.textContent = p.domain;
      if (imgEl) {
        imgEl.src = p.shot;
        imgEl.alt = `${p.name} website preview`;
      }
      if (linkEl) {
        linkEl.href = p.url;
        linkEl.setAttribute('aria-label', `Explore live demo of ${p.name}`);
      }
    };

    const show = (k, user = false) => {
      current = k;
      if (user) {
        auto = false;
        clearInterval(timer);
      }
      if (reduce) return paint(k);

      copy.classList.add('fading');
      screenWrap.classList.add('fading');
      setTimeout(() => {
        paint(k);
        copy.classList.remove('fading');
        screenWrap.classList.remove('fading');
      }, 220);
    };

    paint(0);

    // Click on tab
    tabs.addEventListener('click', e => {
      const b = e.target.closest('.cat-pill, .tab');
      if (b) {
        const idx = $$('.cat-pill, .tab', tabs).indexOf(b);
        if (idx !== -1) show(idx, true);
      }
    });

    // Keyboard navigation
    tabs.addEventListener('keydown', e => {
      if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
      const step = e.key === 'ArrowRight' ? 1 : -1;
      const next = (current + step + PROJECTS.length) % PROJECTS.length;
      show(next, true);
      $$('.cat-pill, .tab', tabs)[next].focus();
    });

    // Auto rotate when section is visible
    const showcaseSection = $('#showcase');
    if (showcaseSection) {
      new IntersectionObserver(([entry]) => {
        clearInterval(timer);
        if (entry.isIntersecting && auto && !reduce) {
          timer = setInterval(() => {
            show((current + 1) % PROJECTS.length);
          }, 5500);
        }
      }, { threshold: 0.3 }).observe(showcaseSection);
    }
  }

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  const burger = $('.nav-toggle');
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  };

  if (burger) {
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }
  addEventListener('keydown', e => e.key === 'Escape' && closeMenu());

  /* ==========================================================================
     SMOOTH SCROLL + ANCHOR HANDLING
     ========================================================================== */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({
      duration: 1.15,
      easing: t => 1 - Math.pow(1 - t, 3)
    });
    const raf = t => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      if (lenis) {
        lenis.scrollTo(target, { offset: -76 });
      } else {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      }
    });
  });

  /* ==========================================================================
     NAVBAR STATE ON SCROLL
     ========================================================================== */
  const nav = $('.nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  /* ==========================================================================
     HERO SUBTLE PARALLAX
     ========================================================================== */
  const heroPrimary = $('.hero-shot-primary');
  const heroSecondary = $('.hero-shot-secondary');
  if (heroPrimary && heroSecondary && !reduce) {
    let ticking = false;
    addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        heroPrimary.style.transform = `translateY(${y * -0.06}px)`;
        heroSecondary.style.transform = `translateY(${y * -0.12}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ==========================================================================
     ENQUIRY FORM
     ========================================================================== */
  const form = $('#enquireForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const name = (d.get('name') || '').toString().trim();
      const type = (d.get('type') || '').toString().trim();
      const msg = (d.get('msg') || '').toString().trim();

      if (!name || !type) {
        form.reportValidity?.();
        return;
      }

      const text = `Hi Vardan, I'm ${name}. I run a ${type} business and I'd like a website.${msg ? ' ' + msg : ''}`;
      if (window.track) {
        window.track('form_submit', { type });
      }
      window.open(`https://wa.me/918279696707?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  /* ==========================================================================
     SCROLL REVEAL OBSERVER
     ========================================================================== */
  $$('[data-stagger]').forEach(g => {
    [...g.children].forEach((c, k) => {
      c.classList.add('reveal');
      c.style.setProperty('--d', `${k * 90}ms`);
    });
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

  $$('.reveal, .steps, .case-card, .plan-card').forEach(el => io.observe(el));
})();
