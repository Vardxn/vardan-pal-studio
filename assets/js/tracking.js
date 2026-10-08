/**
 * Vardan Pal Studio — Conversion & Campaign Attribution Tracking
 * 
 * Provides robust, privacy-first event tracking and UTM attribution.
 * Safe to execute in any environment (never throws, never sends PII).
 */
(() => {
  window.dataLayer = window.dataLayer || [];

  const config = window.VPS_ANALYTICS || {
    ga4MeasurementId: "",
    googleAdsConversionId: "",
    googleAdsLeadLabel: ""
  };

  // 1. Conditional Script Injection (ONLY if valid IDs exist)
  if (config.ga4MeasurementId && config.ga4MeasurementId.trim().length > 0) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4MeasurementId.trim())}`;
    document.head.appendChild(s);

    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", config.ga4MeasurementId.trim(), { anonymize_ip: true });

    if (config.googleAdsConversionId && config.googleAdsConversionId.trim().length > 0) {
      window.gtag("config", config.googleAdsConversionId.trim());
    }
  } else if (!window.gtag) {
    // Safe no-op function when no analytics IDs configured
    window.gtag = function() {};
  }

  // 2. Strict PII Sanitization
  const PII_KEYS = new Set([
    "name", "phone", "email", "msg", "message", "city", "notes",
    "address", "client_name", "tel", "first_name", "last_name", "contact"
  ]);

  const isPiiValue = (val) => {
    if (typeof val !== "string") return false;
    // Check for email addresses or numeric phone strings
    if (val.includes("@") && val.includes(".")) return true;
    const digitsOnly = val.replace(/\D/g, "");
    if (digitsOnly.length >= 10 && (val.includes("+") || val.includes("-"))) return true;
    return false;
  };

  const sanitizeParams = (params = {}) => {
    const safe = {};
    for (const [key, val] of Object.entries(params)) {
      const lowerKey = key.toLowerCase();
      if (PII_KEYS.has(lowerKey)) continue;
      if (isPiiValue(val)) continue;
      safe[key] = val;
    }
    return safe;
  };

  // 3. Central Event Tracking Function
  const trackEvent = (eventName, parameters = {}) => {
    try {
      if (!eventName || typeof eventName !== "string") return;
      const safeParams = sanitizeParams(parameters);

      // Record into dataLayer
      window.dataLayer.push({
        event: eventName,
        ...safeParams,
        timestamp: Date.now()
      });

      // Call gtag if real tag is active
      if (typeof window.gtag === "function" && config.ga4MeasurementId && config.ga4MeasurementId.trim().length > 0) {
        window.gtag("event", eventName, safeParams);

        // Google Ads Conversion hook if configured
        if ((eventName === "lead_submit" || eventName === "proposal_request") &&
            config.googleAdsConversionId && config.googleAdsLeadLabel) {
          window.gtag("event", "conversion", {
            send_to: `${config.googleAdsConversionId}/${config.googleAdsLeadLabel}`
          });
        }
      }
    } catch (err) {
      // Never throw error in visitor path
      console.warn("[VPS Analytics] Tracking suppressed safely:", err.message);
    }
  };

  window.trackEvent = trackEvent;
  window.vpsTrackEvent = trackEvent;

  // 4. UTM & Campaign Attribution Preservation
  const UTM_STORAGE_KEY = "vps_utm_attribution";
  const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];

  const captureUrlAttribution = () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let found = false;
      const current = {};

      for (const field of UTM_FIELDS) {
        const val = urlParams.get(field);
        if (val) {
          current[field] = val.trim();
          found = true;
        }
      }

      if (found) {
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(current));
      }
    } catch (e) {
      // sessionStorage might fail in restrictive sandbox
    }
  };

  captureUrlAttribution();

  const getAttribution = () => {
    try {
      const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}

    // Fallback directly to URL search params
    const fallback = {};
    try {
      const urlParams = new URLSearchParams(window.location.search);
      for (const field of UTM_FIELDS) {
        const val = urlParams.get(field);
        if (val) fallback[field] = val.trim();
      }
    } catch (e) {}
    return fallback;
  };

  window.getAttribution = getAttribution;

  const populateFormAttribution = (formEl) => {
    if (!formEl) return;
    const attr = getAttribution();
    if (!attr || Object.keys(attr).length === 0) return;

    for (const [key, val] of Object.entries(attr)) {
      if (!val) continue;
      let input = formEl.querySelector(`input[name="${key}"]`);
      if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.id = key;
        formEl.appendChild(input);
      }
      input.value = val;
    }
  };

  window.populateFormAttribution = populateFormAttribution;

  // 5. Automatic Attribution Population & Click Delegation
  const normalizeTier = (tierStr) => {
    if (!tierStr) return "launch";
    const t = tierStr.toLowerCase().replace(/\s+/g, "_");
    if (t.includes("custom")) return "custom_systems";
    if (t.includes("sig")) return "signature";
    if (t.includes("bus")) return "business";
    return "launch";
  };

  const getLinkLocation = (el) => {
    if (el.dataset.location) return el.dataset.location;
    if (el.closest("header, .nav")) return "header";
    if (el.closest("footer, .footer")) return "footer";
    if (el.closest(".floating-whatsapp-btn, .whatsapp-floating")) return "floating_button";
    if (el.closest("#pricing, .plans-grid")) return "pricing_section";
    if (el.closest("#contact, .cta-banner")) return "contact_section";
    if (el.closest("#work, .portfolio-gallery")) return "portfolio_grid";
    if (el.closest("#heroStage, .hero")) return "hero_section";
    return "content";
  };

  let lastClickTime = 0;
  let lastClickTarget = null;

  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-track], a, button");
    if (!target) return;

    // Deduplicate rapid accidental double clicks
    const now = Date.now();
    if (target === lastClickTarget && (now - lastClickTime) < 350) {
      return;
    }
    lastClickTime = now;
    lastClickTarget = target;

    const trackType = target.dataset.track;
    const href = target.getAttribute("href") || "";

    // A. Explicit data-track attributes
    if (trackType === "whatsapp_click" || href.includes("wa.me")) {
      trackEvent("whatsapp_click", {
        location: target.dataset.location || getLinkLocation(target),
        page: window.location.pathname,
        demo_category: target.dataset.demo || ""
      });
      return;
    }

    if (trackType === "phone_click" || href.startsWith("tel:")) {
      trackEvent("phone_click", {
        location: target.dataset.location || getLinkLocation(target),
        page: window.location.pathname
      });
      return;
    }

    if (trackType === "email_click" || href.startsWith("mailto:")) {
      trackEvent("email_click", {
        location: target.dataset.location || getLinkLocation(target),
        page: window.location.pathname
      });
      return;
    }

    if (trackType === "demo_open" || target.classList.contains("case-action-cta") || target.classList.contains("case-action-link") || target.hasAttribute("data-demo") || (href && href.includes("/demos/"))) {
      const demoCat = target.dataset.demo || target.dataset.previewDomain || "demo";
      const slugMatch = (href || "").match(/demos\/([^/]+)/);
      const demoSlug = slugMatch ? slugMatch[1] : demoCat;
      trackEvent("demo_open", {
        demo_category: demoCat,
        demo_slug: demoSlug,
        location: target.dataset.location || getLinkLocation(target),
        page: window.location.pathname
      });
      return;
    }

    if (trackType === "pricing_cta" || target.classList.contains("select-package-btn") || target.hasAttribute("data-package")) {
      trackEvent("pricing_cta", {
        tier: normalizeTier(target.dataset.tier || target.dataset.package),
        location: target.dataset.location || getLinkLocation(target)
      });
      return;
    }
  }, { passive: true });

  // On DOM ready, populate all forms with stored attribution
  const onReady = () => {
    document.querySelectorAll("form").forEach(populateFormAttribution);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
