# CLAUDE.md — Vardan Pal Studio

## 1. Project & Business Identity
- **Studio Name:** Vardan Pal Studio
- **Wordmark:** `VARDAN PAL / DIGITAL STUDIO · NEW DELHI`
- **Founder & Lead Engineer:** Vardan Pal (Software Engineer · B.Tech IT, NIT Srinagar)
- **Portfolio:** https://vardxn.vercel.app
- **Production URL:** https://vardanpalstudio.vercel.app (and https://vardxn.me)
- **GitHub Repository:** https://github.com/Vardxn/vardan-pal-studio (branch: `main`)
- **Direct WhatsApp:** +91 82796 96707 (`https://wa.me/918279696707`)
- **Direct Email:** vardan2701@gmail.com
- **Base Location:** New Delhi, India (serving businesses nationwide remotely; never claim an office outside Delhi)

---

## 2. Core Motive & Business Philosophy
1. **The Problem:** Indian business owners (doctors, salon directors, restaurateurs, architects) are plagued by slow, bloated WordPress templates, broken mobile layouts, and cumbersome 10-field forms that kill lead conversion.
2. **The Solution — "Show, Don't Tell":** Before paying anything, a prospective client can click and test a working, mobile-first concept website built specifically for their vertical.
3. **WhatsApp-First Conversion:** Local Indian businesses convert on WhatsApp. Every inquiry, booking, or reservation leads to a pre-filled WhatsApp conversation or our verified contact API.
4. **Honest, Upfront Pricing:** Transparent Indian Rupee pricing, fixed delivery timelines (3–14 days), and realistic scope boundaries.

---

## 3. The 6 Client Concept Verticals (under `demos/`)
All demos use same-tab navigation, a shared 48px `.demo-context` bar with scroll restoration to the homepage, and zero modals/iframes:
- `demos/salon/`: **Aura Salon & Spa** (`aurasalon.in`) — Sensory luxury, bridal menus, chair booking.
- `demos/clinic/`: **Care Dental & Skin Clinic** (`caredental.in`) — High medical trust, doctor credentials, instant consults.
- `demos/restaurant/` & `chica/`: **CHICA Luxury Dining & Hearth Lounge** (`chicadelhi.com`) — Hearth narrative, sommelier cellar, multi-step reservations.
- `demos/real-estate/`: **Prime Estates** (`primeestates.in`) — South Delhi/NCR luxury residences, floorplans, brochure intake.
- `demos/interior/`: **Studio Eleven** (`studioeleven.in`) — Architectural monographs, material palettes, turnkey consultation.
- `demos/events/`: **Studio Vows** (`studiovows.in`) — Luxury wedding production, timeline, bespoke event booking.

*Note: Demos are fictional concept projects and must never be referred to as "live clients".*

---

## 4. Approved 4-Tier Pricing (Strict — Do Not Modify Without Instruction)
- **Launch — from ₹9,900:** 1-page custom site, 5-day delivery, 1 revision round, 15 days support.
- **Business — from ₹19,900 (Most Popular):** 4–5 custom sections/pages, service catalog, WhatsApp booking, 7-day delivery, 2 revision rounds, 30 days support.
- **Signature — from ₹34,900:** Multi-page bespoke build (up to 8 pages), custom motion, analytics, 10–14 day delivery, 3 revision rounds, 60 days support.
- **Custom Systems — Quoted after discovery:** Dynamic portals, intake automations, custom dashboards.
- **Strict Claims Governance:** Never promise #1 Google rankings, guaranteed lead volumes, free CMS, or unlimited revisions.

---

## 5. Technology Stack & Directory Map
- **Frontend:** Pure Static HTML5, Vanilla CSS3, Vanilla ES2022 JavaScript. **No React, Next.js, Vue, or Tailwind.**
- **Backend:** Vercel Serverless Function at `api/contact.js` (Node.js ESM) with honeypot validation, 8s timeout guard, and upstream delivery verification.
- **Design Systems:**
  - **Homepage (`index.html`):** *Bahi-khata* ledger aesthetic (`assets/css/bahi.css`, `assets/js/bahi.js`) featuring red cloth `#a3121c`, ledger paper `#eef1e4`, blue ruling lines, violet stamps, and *Anek Latin* + *Kalam* fonts.
  - **Demos & Legal Pages (`demos/*`, `privacy.html`, `terms.html`):** Quiet luxury editorial aesthetic (`assets/css/premium.css`) with Ivory `#fcfbf9`, Charcoal `#141519`, Champagne Gold `#b58d53`, and *Cormorant Garamond* + *Plus Jakarta Sans*.
- **Tracking (`assets/js/tracking.js`):** Privacy-first dataLayer events (`whatsapp_click`, `lead_submit`, `demo_open`, `pricing_cta`), 100% PII-free sanitization, UTM persistence, and GCLID tracking.

---

## 6. Daily Workflow & QA Verification Commands
Always use Node at `/Users/vardan/.local/node-v20.18.0-darwin-arm64/bin` if calling from scripts.

```bash
# 1. Start local dev server (required for Playwright QA)
python3 -m http.server 8088

# 2. Run the complete automated test suite (must pass 100%)
export PATH="/Users/vardan/.local/node-v20.18.0-darwin-arm64/bin:$PATH"
node scripts/full-qa.mjs                     # 63-run responsive audit (9 routes x 7 viewports)
node scripts/verify-direct-demo-navigation.mjs # 14-run same-tab navigation & scroll restore
node scripts/test-tracking.mjs                # 11-run conversion tracking & 0-PII audit
node scripts/test-contact-api.mjs             # 28-run API failover & timeout tests
node scripts/rebrand-audit.mjs                # 10-run brand integrity check

# 3. Deploy to production (automatic CI/CD via Vercel)
git push -u origin main
```

---

## 7. Hard Rules for Claude Code
1. **Never read, print, or commit `.env.local` or any API keys.**
2. **Zero frontend frameworks:** Do not install or introduce React, Next.js, Tailwind, or bundlers. Keep it pure vanilla.
3. **Touch targets:** Interactive elements must maintain a minimum touch target of **44px × 44px**.
4. **No horizontal scroll:** Never patch layout overflow with `overflow-x: hidden` on `<body>`; always diagnose and fix the root element causing the spill.
5. **No PII in dataLayer:** Never send customer names, emails, or phone numbers to analytics events.
6. **Master Reference:** Full project history and deep specifications live in `VARDAN_PAL_STUDIO_MASTER.md` and `PRODUCT.md`.
