# Vardan Pal Studio — Complete QA & Functional Audit Report

> Historical record — written when the studio operated as Kailash Studios; current name: Vardan Pal Studio.
> Update: the legacy restaurant vardan-original route was removed during Phase 16D and is no longer part of the current project.

**Phase 13 — Complete Multi-Viewport, Accessibility, Functional & Performance Audit**

- **Date:** October 7, 2026
- **Test Environment:** macOS (Darwin arm64) · Node.js v20.18.0 · Python 3 HTTP Server (Port 8088)
- **Browser & Automation:** Google Chrome (Headless) · Playwright v1.63.0
- **Total Test Matrix:** 9 Routes &times; 7 Viewports = **63 Automated Test Runs**
- **Overall Status:** **63 / 63 PASSED (100% Pass Rate &bull; 0 Failures)**

---

## 1. Route & Viewport Test Matrix (63 Runs)

All 9 routes were tested at the 7 mandated viewport widths:
- **Mobile Extra-Small:** 320px (iPhone SE 1st gen / narrow devices)
- **Mobile Small:** 375px (iPhone SE 2nd gen / standard iOS compact)
- **Mobile Modern Standard:** 390px (iPhone 12/13/14/15)
- **Mobile Modern Large:** 430px (iPhone Pro Max / Plus)
- **Tablet Portrait:** 768px (iPad Mini / Portrait Tablets)
- **Tablet Landscape / Small Laptop:** 1024px (iPad Pro / Small Displays)
- **Desktop Standard:** 1440px (MacBook / Desktop Monitors)

### Full Matrix Pass/Fail Table

| # | Route Name | Path | Viewport | Dimensions | HTTP Status | Scroll / Inner Width | Console Errors | Failed Requests | Touch Targets (<44px) | Form Labels | Broken Images | Result |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **home** | `/` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 2 | **home** | `/` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 3 | **home** | `/` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 4 | **home** | `/` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 5 | **home** | `/` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 6 | **home** | `/` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 7 | **home** | `/` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 8 | **404** | `/404.html` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 9 | **404** | `/404.html` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 10 | **404** | `/404.html` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 11 | **404** | `/404.html` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 12 | **404** | `/404.html` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 13 | **404** | `/404.html` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 14 | **404** | `/404.html` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 15 | **salon** | `/demos/salon/` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 16 | **salon** | `/demos/salon/` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 17 | **salon** | `/demos/salon/` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 18 | **salon** | `/demos/salon/` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 19 | **salon** | `/demos/salon/` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 20 | **salon** | `/demos/salon/` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 21 | **salon** | `/demos/salon/` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 22 | **clinic** | `/demos/clinic/` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 23 | **clinic** | `/demos/clinic/` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 24 | **clinic** | `/demos/clinic/` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 25 | **clinic** | `/demos/clinic/` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 26 | **clinic** | `/demos/clinic/` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 27 | **clinic** | `/demos/clinic/` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 28 | **clinic** | `/demos/clinic/` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 29 | **restaurant** | `/demos/restaurant/` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 30 | **restaurant** | `/demos/restaurant/` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 31 | **restaurant** | `/demos/restaurant/` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 32 | **restaurant** | `/demos/restaurant/` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 33 | **restaurant** | `/demos/restaurant/` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 34 | **restaurant** | `/demos/restaurant/` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 35 | **restaurant** | `/demos/restaurant/` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 36 | **privacy** | `/privacy.html` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 37 | **privacy** | `/privacy.html` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 38 | **privacy** | `/privacy.html` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 39 | **privacy** | `/privacy.html` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 40 | **privacy** | `/privacy.html` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 41 | **privacy** | `/privacy.html` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 42 | **privacy** | `/privacy.html` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 43 | **real-estate** | `/demos/real-estate/` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 44 | **real-estate** | `/demos/real-estate/` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 45 | **real-estate** | `/demos/real-estate/` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 46 | **real-estate** | `/demos/real-estate/` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 47 | **real-estate** | `/demos/real-estate/` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 48 | **real-estate** | `/demos/real-estate/` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 49 | **real-estate** | `/demos/real-estate/` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 50 | **interior** | `/demos/interior/` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 51 | **interior** | `/demos/interior/` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 52 | **interior** | `/demos/interior/` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 53 | **interior** | `/demos/interior/` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 54 | **interior** | `/demos/interior/` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 55 | **interior** | `/demos/interior/` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 56 | **interior** | `/demos/interior/` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 57 | **events** | `/demos/events/` | **320px** | 320x900 | 200 | 320 / 320 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 58 | **events** | `/demos/events/` | **375px** | 375x900 | 200 | 375 / 375 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 59 | **events** | `/demos/events/` | **390px** | 390x900 | 200 | 390 / 390 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 60 | **events** | `/demos/events/` | **430px** | 430x900 | 200 | 430 / 430 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 61 | **events** | `/demos/events/` | **768px** | 768x900 | 200 | 768 / 768 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 62 | **events** | `/demos/events/` | **1024px** | 1024x900 | 200 | 1024 / 1024 | 0 | 0 | 0 | 0 | 0 | **PASS** |
| 63 | **events** | `/demos/events/` | **1440px** | 1440x900 | 200 | 1440 / 1440 | 0 | 0 | 0 | 0 | 0 | **PASS** |

---

## 2. Issues Discovered & Resolved During Audit

### A. Horizontal Overflow Fixes
1. **Aura Salon (`demos/salon/` @ 1024px):**
   - **Root Cause:** In `delhi-custom.css`, desktop navigation link margins and `.btn-nav-whatsapp` button padding expanded the total navbar width to 1084px against the 1024px viewport width, causing a 60px horizontal overflow.
   - **Resolution:** Added refined `@media (min-width: 992px) and (max-width: 1199px)` styles in `delhi-custom.css` adjusting `.navbar-brand` font size (17px/15px), nav link padding (6px), button padding (6px 10px), and `flex-shrink: 1` on `#ftco-nav`.
   - **Verification:** Scroll width reduced from 1084px to 1024px (`overflow = false`).
2. **Malcha Table (`demos/restaurant/` @ 320px):**
   - **Root Cause:** Menu grid columns previously used `minmax(300px, 1fr)`, exceeding 320px screens when container padding (30px) was factored in.
   - **Resolution:** Updated grid definition to `minmax(min(100%, 280px), 1fr)` and set `max-width: 100%` with `overflow-wrap: break-word`.
   - **Verification:** Scroll width at 320px is exactly 320px.

### B. Form Labels & Accessibility Fixes
1. **Salon Demo (`demos/salon/index.html`):**
   - Added `for="appointment_stylist"` and `aria-label="Preferred Master Stylist"` to `<select id="appointment_stylist">`.
   - Added `for="appointment_message"` and `aria-label="Special Notes or Hair History"` to `<textarea id="appointment_message">`.
2. **Real Estate Demo (`demos/real-estate/index.html`):**
   - Added explicit IDs, `for` labels, and `aria-label` attributes to property filter dropdowns:
     - `id="filter_location"`, `aria-label="Location in Delhi"`
     - `id="filter_typology"`, `aria-label="Property Typology"`
     - `id="filter_price"`, `aria-label="Price Bracket"`
3. **Interior Design Demo (`demos/interior/index.html`):**
   - Added `for="int_timeline"` and `aria-label="Target Timeline"` to `<select id="int_timeline">`.
4. **Events Demo (`demos/events/index.html`):**
   - Added `for="ev_guests"` and `aria-label="Approximate Guest Count"` to `<select id="ev_guests">`.

### C. Touch Target Compliance (>= 44px)
1. **Chica Luxury Restaurant Demo (`demos/restaurant/`):**
   - **Implementation:** All interactive controls (navigation tabs, table reservation wizard, audio toggle, and WhatsApp concierge buttons) are explicitly sized with `min-height: 44px` and `min-width: 44px` touch targets.
   - **Verification:** 0 touch target violations across all mobile viewports (320, 375, 390, 430). Legacy experimental prototypes have been completely removed.
2. **Real Estate Demo Mobile Nav Toggle:**
   - In `real-estate-custom.css`, updated `.site-nav` to `position: relative !important; z-index: 100 !important; margin-bottom: -80px !important;` preventing the top demo bar from intercepting touch events on the burger toggle button.

---

## 3. Section 4 — Functional Tests for Main Studio Hub (`/`)

| Feature Tested | Criteria | Result | Notes |
|---|---|---|---|
| **Portfolio Device Preview Modal** | All 6 cards trigger accessible `<dialog>` modal | **PASS** | Evaluated for CHICA Restaurant, Care Dental, Aura Salon, Prime Estates, Studio Eleven, and Studio Vows. |
| **Modal Device Toggles** | Switches between Desktop (1280px) and Mobile (390px) viewports | **PASS** | Frame container classes and dimensions toggle cleanly. |
| **Modal Keyboard Dismissal** | Escape key closes modal and returns focus to trigger | **PASS** | Tested across all 6 preview triggers; 100% focus restoration. |
| **Modal Backdrop Dismissal** | Click on backdrop closes dialog safely | **PASS** | Native dialog `cancel` / click listener fires properly. |
| **Category Tabs Roving Focus** | W3C APG Tab Pattern with Arrow keys, Home, End | **PASS** | ArrowRight advances, ArrowLeft wraps, Home moves to Tab 0, End moves to Tab 5. |
| **Category Tabs Accessibility** | `aria-selected` and roving `tabindex` (0 vs -1) | **PASS** | Active tab has `tabindex="0"`; inactive tabs have `tabindex="-1"`. |
| **FAQ Accordions** | Click, Space, and Enter toggle expand/collapse state | **PASS** | Tested on `details.faq-item` elements; native keyboard triggers work cleanly. |
| **Navigation Anchors** | 9 anchor targets exist with sticky header offset | **PASS** | All anchors (`#top`, `#work`, `#services`, `#pricing`, `#process`, `#about`, `#faq`, `#contact`, `#beyond`) verified with `scroll-margin-top: 96px`. |
| **Pricing Buttons** | WhatsApp CTAs prefilled with package names | **PASS** | Direct links formatted with `https://wa.me/918279696707` and URL-encoded inquiries for Starter, Business, Premium, and Complete. |
| **Contact Form Validation** | HTML5 validation prevents empty submission | **PASS** | Flagged all 6 required inputs upon empty submit; valid submit dispatches cleanly. |

---

## 4. Section 5 — Functional Tests Across Client Demos

| Demo Project | Route | Mobile Nav Open/Close | Booking Form Validation | Toast Notification | WhatsApp URL Generation | Number Verified (+918279696707) |
|---|---|---|---|---|---|---|
| **Aura Salon & Spa** | `/demos/salon/` | **PASS** | **PASS** | **PASS** (`#demoToast`) | **PASS** | **PASS** |
| **Care Dental & Skin Clinic** | `/demos/clinic/` | **PASS** | **PASS** | **PASS** (`#clinicToast`) | **PASS** | **PASS** |
| **CHICA Luxury Restaurant** | `/demos/restaurant/` | **PASS** | **PASS** | **PASS** (Modal & Form State) | **PASS** | **PASS** |
| **Prime Estates Advisory** | `/demos/real-estate/` | **PASS** | **PASS** | **PASS** (`#reToast`) | **PASS** | **PASS** |
| **Studio Eleven Interiors** | `/demos/interior/` | **PASS** | **PASS** | **PASS** (`#demoToast`) | **PASS** | **PASS** |
| **Studio Vows Photography** | `/demos/events/` | **PASS** | **PASS** | **PASS** (`#demoToast`) | **PASS** | **PASS** |

---

## 5. Section 6 — Serverless Contact API (`api/contact.js`)

- **Runtime Specification:** ES Module Serverless Function designed for Vercel Serverless environment.
- **Python Static Server Behavior:** *Not executable under Python static server (`python3 -m http.server`); requires Vercel-compatible runtime.*
- **Automated Node.js Unit Audit Results:**
  1. **OPTIONS Preflight (CORS):** Returns HTTP 200 with headers `Access-Control-Allow-Origin: *`, `Access-Control-Allow-Methods: POST, OPTIONS`, `Access-Control-Allow-Headers: Content-Type`.
  2. **GET Method Request:** Returns HTTP 405 `{"error": "Method not allowed"}`.
  3. **Empty POST Request:** Returns HTTP 400 `{"error": "Name, email, and phone are required."}`.
  4. **Missing Phone Field:** Returns HTTP 400 `{"error": "Name, email, and phone are required."}`.
  5. **Missing Email Field:** Returns HTTP 400 `{"error": "Name, email, and phone are required."}`.
  6. **Security & Secrets Scan:** Zero secrets, tokens, or private keys committed to source.

---

## 6. Section 7 — Accessibility & Performance

### Accessibility (WCAG 2.1 AA Compliance)
- **Contrast Ratios:** Checked body copy, ivory card surfaces (#fcfbf9, #ffffff), dark containers (#141519), and champagne gold accents (#c5a880, #b58d53). Contrast exceeds 4.5:1 for body copy and 3.0:1 for large display titles.
- **Form Controls:** 100% of inputs, selects, and textareas have programmatic labels via `<label for="...">` or `aria-label`.
- **Keyboard Trapping & Modals:** `<dialog>` modal properly traps focus and restores active trigger element on close.
- **Heading Hierarchy:** Valid single `<h1>` per route with structured `<h2>` and `<h3>` section landmarks.

### Performance & Asset Optimization (Mobile 390px Audit)
- **First Contentful Paint (FCP):** **84ms**
- **DOM Content Loaded:** **68ms**
- **Full Load Time:** **129ms**
- **Network Requests:** 10 total requests on initial load (3 CSS, 3 JS, 3 Images, 0 render-blocking font files).
- **Font Loading Strategy:** Non-blocking async loading via `media="print" onload="this.media=all"` with fallback `<noscript>` links.
- **Image Optimization:** Modern WebP format utilized across mockups and demo cards.

---

## 7. Section 8 — JavaScript-Disabled Resilience

All pages were validated with **JavaScript disabled** (`javaScriptEnabled: false`):
- **Studio Hub (`/`):** Header branding (`VARDAN PAL`), Hero H1 (`Websites that mean business.`), Primary CTA, Portfolio cards, Pricing cards, Contact form, and Footer remain 100% visible and fully readable.
- **Scroll Reveal Fallback:** All animated cards use `.js .reveal` scoping; when JavaScript is disabled, elements render with `opacity: 1` and standard layout immediately.
- **Client Demos Fallback:** Added universal `<noscript>` styles across all 6 demo headers ensuring `.ftco-animate`, `[data-aos]`, and `.reveal` containers are immediately visible without script hydration.

---

## 8. Screenshot Artifacts

All 63 full-page screenshots are organized and saved in:
`audit-shots/full-qa/{route-name}/{viewport}.png`

- **Home:** `audit-shots/full-qa/home/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **404 Page:** `audit-shots/full-qa/404/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **Aura Salon:** `audit-shots/full-qa/salon/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **Care Dental Clinic:** `audit-shots/full-qa/clinic/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **CHICA Luxury Restaurant:** `audit-shots/full-qa/restaurant/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **Vardan Original Restaurant:** `audit-shots/full-qa/restaurant-original/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **Prime Estates:** `audit-shots/full-qa/real-estate/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **Studio Eleven Interior:** `audit-shots/full-qa/interior/{320, 375, 390, 430, 768, 1024, 1440}.png`
- **Studio Vows Photography:** `audit-shots/full-qa/events/{320, 375, 390, 430, 768, 1024, 1440}.png`

---

## 9. Definition of Done Checklist

- [x] All 9 discovered routes tested
- [x] All 7 viewports tested (320, 375, 390, 430, 768, 1024, 1440px)
- [x] 0 console errors across all viewports and routes
- [x] 0 failed network asset requests
- [x] 0 horizontal overflow issues
- [x] All interactive mobile controls & touch targets $ge 44	ext{px}$
- [x] All forms have visible labels and `aria-label` attributes
- [x] WhatsApp, Phone, and Email links verified with correct numbers and clean URL encoding
- [x] Portfolio preview modal, tabs, accordions, and navigation anchors tested and passing
- [x] Complete QA report generated: `QA-REPORT-COMPLETE.md`
- [x] Zero new demo variants created
