(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

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
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  if (window.Lenis && !reduce && !isTouchDevice) {
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
  const spyIds = ['work', 'services', 'pricing', 'process', 'about', 'faq', 'contact'];

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
     ENQUIRY FORM (EMAIL INTEGRATION + FAST WHATSAPP CONTINUATION)
     ========================================================================== */
  const escapeHtml = str => String(str || '').replace(/[&<>"']/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[s]));

  let isEnquirySubmitting = false;
  const form = $('#enquireForm');
  if (form) {
    if (typeof window.populateFormAttribution === 'function') {
      window.populateFormAttribution(form);
    }

    const consentEl = form.querySelector('#contactConsent');
    if (consentEl) {
      consentEl.addEventListener('change', () => {
        const consentBox = form.querySelector('.form-consent');
        if (consentBox) consentBox.classList.remove('has-error');
        const statusEl = $('#enquireStatus');
        if (statusEl && statusEl.textContent.includes('consent terms')) {
          statusEl.style.display = 'none';
        }
      });
    }

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (isEnquirySubmitting) return;

      const btn = $('#enquireSubmitBtn');
      const statusEl = $('#enquireStatus');

      const d = new FormData(form);
      const name = (d.get('name') || '').toString().trim();
      const email = (d.get('email') || '').toString().trim();
      const phone = (d.get('phone') || '').toString().trim();
      const city = (d.get('city') || '').toString().trim();
      const type = (d.get('type') || '').toString().trim();
      const pkg = (d.get('package') || '').toString().trim();
      const goal = (d.get('goal') || '').toString().trim();
      const msg = (d.get('msg') || '').toString().trim();
      const honeypot = (d.get('honeypot') || '').toString().trim();
      const consent = form.querySelector('#contactConsent');

      // 1. Anti-Spam Honeypot Check
      if (honeypot) {
        if (statusEl) {
          statusEl.textContent = 'Submission rejected.';
          statusEl.className = 'enquire-status error';
          statusEl.style.display = 'block';
        }
        return;
      }

      // 2. Visible Validation
      if (!name || !email || !phone) {
        if (statusEl) {
          statusEl.textContent = 'Please provide your name, email, and phone/WhatsApp number.';
          statusEl.className = 'enquire-status error';
          statusEl.style.display = 'block';
        }
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

      if (consent && !consent.checked) {
        const consentBox = form.querySelector('.form-consent');
        if (consentBox) consentBox.classList.add('has-error');
        if (statusEl) {
          statusEl.textContent = 'Please agree to the privacy and contact consent terms to continue.';
          statusEl.className = 'enquire-status error';
          statusEl.style.display = 'block';
        }
        consent.focus({ preventScroll: false });
        return;
      }

      // Prevent duplicate submissions
      isEnquirySubmitting = true;

      const origBtnHtml = btn ? btn.innerHTML : 'Send Enquiry &rarr;';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Sending enquiry... <span class="spinner" style="display:inline-block;animation:spin 1s linear infinite">⏳</span>';
      }
      if (statusEl) {
        statusEl.style.display = 'none';
        statusEl.className = 'enquire-status';
      }

      // Retrieve Campaign Attribution
      const attribution = (typeof window.getAttribution === 'function' ? window.getAttribution() : {}) || {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'].forEach(key => {
        const val = (d.get(key) || '').toString().trim();
        if (val && !attribution[key]) attribution[key] = val;
      });

      // SECTION 2.A — Fire lead_submit only after valid form validation succeeds and before WhatsApp handoff
      // Strictly do not send personal data (name, phone, email, message, city)
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('lead_submit', {
          package: pkg || 'Website',
          industry: type || 'General Business',
          form_location: 'main_enquiry_form'
        });
      }

      const payload = {
        name,
        email,
        phone,
        city: city || 'Across India',
        type: type || 'General Business',
        package: pkg || 'Website',
        goal: goal || 'Not specified',
        msg: msg || 'None provided',
        attribution,
        honeypot,
        _subject: `New Studio Inquiry: ${name} (${city || 'India'} • ${pkg || 'Website'} • ${type || 'General Lead'})`,
        _template: 'table',
        _captcha: 'false'
      };

      // Internal WhatsApp message — include attribution tag ONLY if attribution is present
      const attrParts = [];
      if (attribution.utm_source) attrParts.push(`Source: ${attribution.utm_source}`);
      if (attribution.utm_campaign) attrParts.push(`Campaign: ${attribution.utm_campaign}`);
      if (attribution.utm_term) attrParts.push(`Keyword: ${attribution.utm_term}`);
      if (attribution.gclid) attrParts.push('Google Ads Click');
      const waAttrLine = attrParts.length > 0 ? `\n\n[Ref: ${attrParts.join(' • ')}]` : '';

      const waText = `Hi Vardan, I found Vardan Pal Studio online and would like to discuss a project.\n\nName: ${name}\nCity/State: ${city || 'India'}\nPhone: ${phone}\nPackage: ${pkg || 'Website'}\nBusiness: ${type || 'General'}\nNeed: ${goal || 'New Website'}${msg ? `\nNotes: ${msg}` : ''}${waAttrLine}`;
      const waUrl = `https://wa.me/918279696707?text=${encodeURIComponent(waText)}`;

      // 1. Send the enquiry email; resolves true only if a service confirmed it
      const post = async url => {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        return res.ok;
      };
      const sendPromise = (async () => {
        try { if (await post('/api/contact')) return true; } catch (e) {}
        try { return await post('https://formsubmit.co/ajax/vardan2701@gmail.com'); } catch (e) { return false; }
      })();

      // 2. Open WhatsApp handoff directly
      try {
        window.open(waUrl, '_blank');
      } catch (openErr) {
        console.warn('Popup blocked:', openErr);
      }

      // WhatsApp is opened first (needs the click gesture); then wait for the email result
      const sent = await sendPromise;

      // SECTION 2.G — proposal_request: fire when valid enquiry is submitted and user reaches success state
      if (sent && typeof window.trackEvent === 'function') {
        window.trackEvent('proposal_request', {
          package: pkg || 'Website',
          industry: type || 'General Business',
          form_location: 'main_enquiry_form'
        });
      }

      // 3. Show the real outcome: confirmed by the email service, or not
      const outcome = sent
        ? `<h3>Thank you, ${escapeHtml(name)}!</h3>
          <p>Your enquiry has been received directly by Vardan Pal Studio (<strong>vardan2701@gmail.com</strong>). We will review your project requirements and get back to you within a few hours.</p>`
        : `<h3>We couldn&rsquo;t send your enquiry by email</h3>
          <p>Please send it on WhatsApp instead. Your details are already filled in, so one tap is enough. You can also write to <strong>vardan2701@gmail.com</strong>.</p>`;
      form.innerHTML = `
        <div class="enquire-success-card">
          <div class="success-check-badge">${sent ? '✓' : '!'}</div>
          ${outcome}
          <div class="success-cta-box">
            <span>${sent ? 'Opening WhatsApp conversation with prefilled details...' : 'WhatsApp opens with your details prefilled.'}</span>
            <a class="btn btn--accent" href="${waUrl}" target="_blank" rel="noopener" data-track="whatsapp_click" data-location="success_card">
              Continue to WhatsApp Now <span class="arr">&rarr;</span>
            </a>
          </div>
        </div>
      `;
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  
  
  /* ==========================================================================
     PACKAGE PRE-SELECTION FROM PRICING CTAS
     ========================================================================== */
  const selectPackage = (pkgName) => {
    const pkgSelect = $('#contactPackage') || $('select[name="package"]');
    if (!pkgSelect || !pkgName) return;
    for (let i = 0; i < pkgSelect.options.length; i++) {
      if (pkgSelect.options[i].value.toLowerCase() === pkgName.toLowerCase() ||
          pkgSelect.options[i].value.toLowerCase().includes(pkgName.toLowerCase())) {
        pkgSelect.selectedIndex = i;
        pkgSelect.dispatchEvent(new Event('change', { bubbles: true }));
        break;
      }
    }
    const contactSection = $('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => pkgSelect.focus({ preventScroll: true }), 400);
    }
  };

  document.querySelectorAll('.select-package-btn, [data-package]').forEach(btn => {
    btn.addEventListener('click', e => {
      const pkg = btn.getAttribute('data-package');
      if (pkg) {
        e.preventDefault();
        selectPackage(pkg);
        if (history.replaceState) {
          history.replaceState(null, null, '#contact');
        }
      }
    });
  });

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qPkg = urlParams.get('package');
    if (qPkg) selectPackage(qPkg);
  } catch (e) {}

  /* ==========================================================================
     DIRECT DEMO NAVIGATION & SCROLL RESTORATION (PHASE 16C)
     ========================================================================== */
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto';
  }

  // Record homepage scroll position and demo link before navigating
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="/demos/"], a[href^="demos/"]');
    if (!link) return;

    try {
      const returnState = {
        url: window.location.href,
        path: window.location.pathname,
        scrollY: window.scrollY || window.pageYOffset || 0,
        linkId: link.id || link.getAttribute('data-demo') || link.getAttribute('href'),
        timestamp: Date.now()
      };
      sessionStorage.setItem('vps_demo_return_state', JSON.stringify(returnState));
    } catch (err) {}
  }, { capture: true, passive: true });

  // Restore scroll position on back/forward return
  const checkAndRestoreDemoPosition = (isBackForward) => {
    try {
      const raw = sessionStorage.getItem('vps_demo_return_state');
      if (!raw) return;
      const state = JSON.parse(raw);
      if (!state || typeof state.scrollY !== 'number') return;

      const targetY = state.scrollY;
      const linkId = state.linkId;

      const performRestore = () => {
        const currentY = window.scrollY || window.pageYOffset || 0;
        // Fallback restoration only if browser did not return near the stored position
        if (Math.abs(currentY - targetY) > 60) {
          window.scrollTo({ top: targetY, behavior: 'instant' });
        }

        // Restore keyboard focus to the original link if available
        if (linkId) {
          let el = document.getElementById(linkId);
          if (!el) {
            el = document.querySelector(`[data-demo="${linkId}"], [href="${linkId}"], [href*="${linkId}"]`);
          }
          if (el && typeof el.focus === 'function') {
            try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
          }
        }

        // Clear pending restoration state after successful restoration
        sessionStorage.removeItem('vps_demo_return_state');
      };

      if (isBackForward) {
        requestAnimationFrame(() => {
          setTimeout(performRestore, 50);
        });
      } else {
        const referrerFromDemo = document.referrer && document.referrer.includes('/demos/');
        if (referrerFromDemo) {
          requestAnimationFrame(() => {
            setTimeout(performRestore, 50);
          });
        } else {
          sessionStorage.removeItem('vps_demo_return_state');
        }
      }
    } catch (err) {}
  };

  window.addEventListener('pageshow', (event) => {
    const navEntries = (typeof performance !== 'undefined' && performance.getEntriesByType)
      ? performance.getEntriesByType('navigation')
      : [];
    const isBackForward = event.persisted || (navEntries.length > 0 && navEntries[0].type === 'back_forward');
    checkAndRestoreDemoPosition(isBackForward);
  });

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
