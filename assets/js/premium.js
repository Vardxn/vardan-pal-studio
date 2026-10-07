(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     PROJECT DATA (SINGLE SOURCE OF TRUTH)
     ========================================================================== */
  const PROJECTS = [
    {
      cat: 'Restaurants & Dining',
      name: 'Malcha Table — Restaurant & Bar',
      motive: 'Built for Restaurants, Cafes & Fine Dining',
      domain: 'malchatable.com',
      headline: 'A table worth the evening.',
      tagline: 'Complete website designed for fine-dining restaurants, cafes, cocktail bars, and bistros.',
      features: [
        'Instant Online Table Reservation Flow',
        'Digital Food & Drinks Menu with Pricing',
        'Atmospheric Interior & Dish Photo Lookbook',
        'Private Event & WhatsApp Concierge'
      ],
      shot: 'assets/shots/restaurant.webp',
      dir: 'restaurant',
      url: 'demos/restaurant/'
    },
    {
      cat: 'Doctors & Clinics',
      name: 'Care Dental & Skin Clinic',
      motive: 'Built for Clinics, Doctors & Dentists',
      domain: 'caredental.in',
      headline: 'Care that feels unhurried.',
      tagline: 'Complete website designed for dental practices, dermatologists, clinics, and doctors.',
      features: [
        'Online Consultation & Appointment Booking',
        'Doctor Specialities & Medical Credentials',
        'Clear Treatment Pricing & Service Guides',
        'Direct Patient WhatsApp Triage'
      ],
      shot: 'assets/shots/clinic.webp',
      dir: 'clinic',
      url: 'demos/clinic/'
    },
    {
      cat: 'Salons & Spas',
      name: 'Aura Salon & Spa',
      motive: 'Built for Hair Salons, Spas & Beauty Parlours',
      domain: 'aurasalon.in',
      headline: 'Craft in every detail.',
      tagline: 'Complete website designed for hair salons, luxury spas, nail studios, and beauty parlours.',
      features: [
        'Stylist Portfolios & Hair Makeover Lookbook',
        'Transparent Service Rate Cards & Treatments',
        'Direct VIP Appointment Booking via WhatsApp',
        'Bridal Makeup & Grooming Packages'
      ],
      shot: 'assets/shots/salon.webp',
      dir: 'salon',
      url: 'demos/salon/'
    },
    {
      cat: 'Real Estate',
      name: 'Prime Estates — Luxury Properties',
      motive: 'Built for Real Estate Brokers, Builders & Agents',
      domain: 'primeestates.in',
      headline: 'Homes with a long view.',
      tagline: 'Complete website designed for property brokers, luxury realtors, and builders.',
      features: [
        'Curated Property & Penthouse Lookbook',
        'Discreet Buyer & Seller Consultation Intake',
        'Neighborhood Guides & Local Insights',
        'Direct Private Viewing Scheduling'
      ],
      shot: 'assets/shots/real-estate.webp',
      dir: 'real-estate',
      url: 'demos/real-estate/'
    },
    {
      cat: 'Interior Design',
      name: 'Studio Eleven — Interior Design Studio',
      motive: 'Built for Interior Designers, Architects & Decorators',
      domain: 'studioeleven.in',
      headline: 'Spaces drawn with intent.',
      tagline: 'Complete website designed for interior designers, architects, decorators, and craft studios.',
      features: [
        'High-Resolution Completed Project Gallery',
        'Material Board & Texture Palette Showcase',
        'Design Philosophy & Studio Process',
        'Client Project Consultation Form'
      ],
      shot: 'assets/shots/interior.webp',
      dir: 'interior',
      url: 'demos/interior/'
    },
    {
      cat: 'Wedding Photography',
      name: 'Studio Vows — Wedding Photography & Films',
      motive: 'Built for Wedding Photographers, Studios & Creators',
      domain: 'studiovows.in',
      headline: 'Days kept as they felt.',
      tagline: 'Complete website designed for wedding photographers, cinema studios, and event creators.',
      features: [
        'Cinematic Video Teasers & Highlight Reels',
        'Full Wedding Story Albums & Galleries',
        'Transparent Package Pricing Breakdown',
        'Instant Date & Destination Availability Check'
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
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px; flex-wrap:wrap;">
          <span class="showcase-client-badge">${p.cat}</span>
          <span class="case-motive" style="margin-bottom:0; font-size:11px; padding:3px 9px;">${p.motive}</span>
          <span class="case-live-pill" style="font-size:10px; padding:3px 8px;">&bull; Working Demo</span>
        </div>
        <h3 class="showcase-project-name">${p.name}</h3>
        <p class="showcase-tagline">${p.tagline}</p>
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
          <span style="font-size: 13px; color: var(--dark-muted);">Direct working website</span>
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

  /* ==========================================================================
     NAVBAR ACTIVE SCROLLSPY & SMOOTH SCROLL
     ========================================================================== */
  const navAnchors = $$('.nav-links a[href^="#"]');
  const spyIds = ['work', 'services', 'pricing', 'process', 'about'];

  const updateSpy = () => {
    const scrollMid = window.scrollY + 140;
    let activeId = '';

    for (const id of spyIds) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollMid >= top && scrollMid < bottom) {
          activeId = '#' + id;
          break;
        }
      }
    }

    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === activeId);
    });
  };

  updateSpy();
  addEventListener('scroll', updateSpy, { passive: true });

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();

      if (a.closest('.nav-links')) {
        navAnchors.forEach(l => l.classList.remove('active'));
        a.classList.add('active');
      }

      if (lenis) {
        lenis.scrollTo(target, { offset: -76 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
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
     HERO SUBTLE 3-TIER PARALLAX
     ========================================================================== */
  const heroPrimary = $('.hero-shot-primary');
  const heroSecondary = $('.hero-shot-secondary');
  const heroTertiary = $('.hero-shot-tertiary');
  if (heroPrimary && !reduce) {
    let ticking = false;
    addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        if (heroTertiary) heroTertiary.style.transform = `translateY(${y * -0.04}px) rotate(-2.5deg)`;
        if (heroPrimary) heroPrimary.style.transform = `translateY(${y * -0.08}px) rotate(0.8deg)`;
        if (heroSecondary) heroSecondary.style.transform = `translateY(${y * -0.14}px) rotate(-1.5deg)`;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ==========================================================================
     ENQUIRY FORM (EMAIL INTEGRATION + FAST WHATSAPP CONTINUATION)
     ========================================================================== */
  const escapeHtml = str => String(str || '').replace(/[&<>"']/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[s]));

  const form = $('#enquireForm');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = $('#enquireSubmitBtn');
      const statusEl = $('#enquireStatus');

      const d = new FormData(form);
      const name = (d.get('name') || '').toString().trim();
      const email = (d.get('email') || '').toString().trim();
      const phone = (d.get('phone') || '').toString().trim();
      const city = (d.get('city') || '').toString().trim();
      const type = (d.get('type') || '').toString().trim();
      const goal = (d.get('goal') || '').toString().trim();
      const msg = (d.get('msg') || '').toString().trim();

      if (!name || !email || !phone) {
        form.reportValidity?.();
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        if (statusEl) {
          statusEl.textContent = 'Please enter a valid email address.';
          statusEl.className = 'enquire-status error';
          statusEl.style.display = 'block';
        }
        return;
      }

      const origBtnHtml = btn ? btn.innerHTML : 'Send Enquiry &rarr;';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Sending enquiry... <span class="spinner" style="display:inline-block;animation:spin 1s linear infinite">⏳</span>';
      }
      if (statusEl) {
        statusEl.style.display = 'none';
        statusEl.className = 'enquire-status';
      }

      const payload = {
        name,
        email,
        phone,
        city: city || 'Across India',
        type: type || 'General Business',
        goal: goal || 'Not specified',
        msg: msg || 'None provided',
        _subject: `New Studio Inquiry: ${name} (${city || 'India'} • ${type || 'General Lead'})`,
        _template: 'table',
        _captcha: 'false'
      };

      let sent = false;

      // Primary attempt: Call Vercel serverless function /api/contact
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          sent = true;
        } else {
          throw new Error('API route returned status ' + res.status);
        }
      } catch (err) {
        // Fallback: Direct FormSubmit endpoint
        try {
          const fallbackRes = await fetch('https://formsubmit.co/ajax/vardan2701@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (fallbackRes.ok) {
            sent = true;
          }
        } catch (fallbackErr) {
          console.warn('Form submission fallback error:', fallbackErr);
        }
      }

      if (window.track) {
        window.track('form_submit', { type, goal });
      }

      const waText = `Hi Vardan, I found Vardan Pal Studio online and would like to discuss a website.\n\nName: ${name}\nCity/State: ${city || 'India'}\nPhone: ${phone}\nBusiness: ${type || 'General'}\nNeed: ${goal || 'Website'}${msg ? `\nNotes: ${msg}` : ''}`;
      const waUrl = `https://wa.me/918279696707?text=${encodeURIComponent(waText)}`;

      if (sent) {
        form.innerHTML = `
          <div class="enquire-success-card">
            <div class="success-check-badge">✓</div>
            <h3>Thank you, ${escapeHtml(name)}!</h3>
            <p>Your enquiry has been received and emailed directly to Vardan Pal Studio (<strong>vardan2701@gmail.com</strong>). We will review your project requirements and get back to you within a few hours.</p>
            <div class="success-cta-box">
              <span>Want an immediate response on WhatsApp?</span>
              <a class="btn btn--accent" href="${waUrl}" target="_blank" rel="noopener">
                Continue to WhatsApp Now <span class="arr">&rarr;</span>
              </a>
            </div>
          </div>
        `;
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = origBtnHtml;
        }
        if (statusEl) {
          statusEl.className = 'enquire-status error';
          statusEl.style.display = 'block';
          statusEl.innerHTML = `There was a connection issue sending your enquiry. Please <a href="${waUrl}" target="_blank" rel="noopener" style="color:#FFF;text-decoration:underline;font-weight:600;">click here to message on WhatsApp</a> directly or call <a href="tel:+918279696707" style="color:#FFF;text-decoration:underline;font-weight:600;">+91 82796 96707</a>.`;
        }
      }
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
