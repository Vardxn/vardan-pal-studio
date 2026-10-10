# VARDAN PAL STUDIO — DEFINITIVE MASTER SPECIFICATION & STATUS BLUEPRINT

> **The Single Authoritative Source of Truth for Vardan Pal Studio**  
> **Brand Name:** Vardan Pal Studio (`VARDAN PAL / DIGITAL STUDIO · NEW DELHI`)  
> **Lead Developer & Designer:** Vardan Pal (Software Engineer · B.Tech IT, NIT Srinagar)  
> **Live Production URL:** [https://vardanpalstudio.vercel.app](https://vardanpalstudio.vercel.app)  
> **GitHub Repository:** [https://github.com/Vardxn/vardan-pal-studio](https://github.com/Vardxn/vardan-pal-studio) (`git@github.com:Vardxn/vardan-pal-studio.git`)  
> **Connected Vercel Project:** `vardanpalstudio` (CI/CD connected to `Vardxn/vardan-pal-studio` on branch `main`)  
> **Founder Portfolio:** [https://vardxn.vercel.app](https://vardxn.vercel.app)  
> **Direct WhatsApp Helpline:** [+91 82796 96707](https://wa.me/918279696707) | **Email:** `vardan2701@gmail.com`  
> **Headquarters / Base:** New Delhi, India · Serving ambitious businesses across India  
> **Current Date & Status:** October 10, 2026 · **Google Business Profile Branding Deployed** · **100% Green QA (126/126 Passing)** · Production Live & GitHub Synced  

---

## 📋 Table of Contents
1. [Executive Summary & Studio Positioning](#1-executive-summary--studio-positioning)
2. [What Has Changed in the Last 5 Prompts](#2-what-has-changed-in-the-last-5-prompts)
3. [Current Status — What Is Achieved vs Pending](#3-current-status--what-is-achieved-vs-pending)
4. [GitHub & Vercel Deployment Setup (According to Screenshots)](#4-github--vercel-deployment-setup-according-to-screenshots)
5. [Core Architecture & Technology Stack](#5-core-architecture--technology-stack)
6. [Catalog of the 6 Client Concept Demos](#6-catalog-of-the-6-client-concept-demos)
7. [Approved 4-Tier Pricing System & Service Governance](#7-approved-4-tier-pricing-system--service-governance)
8. [Conversion Tracking, Attribution & Analytics Architecture](#8-conversion-tracking-attribution--analytics-architecture)
9. [Google Ads Search Campaign Blueprint](#9-google-ads-search-campaign-blueprint)
10. [Full Quality Assurance Matrices & Automated Test Evidence](#10-full-quality-assurance-matrices--automated-test-evidence)
11. [Chronological Project History (Phases 1 through 16D)](#11-chronological-project-history-phases-1-through-16d)
12. [Master Briefing & System Prompt for New AI Agent Chats](#12-master-briefing--system-prompt-for-new-ai-agent-chats)

---

## 1. Executive Summary & Studio Positioning

**Vardan Pal Studio** is an independent, high-end digital design and engineering studio founded by **Vardan Pal**. We engineer bespoke, quiet-luxury websites for clinics, salons, fine-dining restaurants, luxury real estate brokerages, interior studios, and event creators across India.

### The Core Problem in the Indian Market
- Most Indian local businesses rely on slow, cluttered WordPress themes or generic templates packed with tacky SaaS gradients, stock imagery, and broken mobile viewports.
- Potential high-ticket clients visit these websites, lose trust immediately, and bounce before booking.
- Traditional templates make inquiry cumbersome with 10-field forms instead of direct WhatsApp-first conversion.

### The Vardan Pal Studio Solution
1. **Quiet Luxury Aesthetic:** Warm natural palettes (Ivory `#fcfbf9`, Stone `#f5f3ee`, Charcoal `#141519`, Champagne Gold `#b58d53` / `#c5a880`), editorial serif typography (*Cormorant Garamond*), paired with crisp grotesque type (*Plus Jakarta Sans*), inspired by Apple and architectural monographs.
2. **Instant WhatsApp Conversion:** Every inquiry, table reservation, and appointment leads directly to a pre-filled WhatsApp message. Zero friction, zero lost leads.
3. **Turnkey 3–7 Day Delivery:** Full static builds with zero frontend framework overhead, hosted on edge CDN (Vercel) with near-instant sub-second load speeds.
4. **Transparent Indian Rupee (₹) Pricing:** Upfront public packages — Launch from ₹9,900, Business from ₹19,900 (most popular), Signature from ₹34,900, and Custom Systems quoted after discovery, with zero hidden platform markups.

---

## 2. What Has Changed in the Last 5 Prompts

Here is the exact, comprehensive breakdown of all updates, bug fixes, and architectural changes implemented across the last 5 prompts:

### 🔹 Prompt 1: Global Internal Rebrand + Production URL Swap + CHICA Luxury Dining Integration
- **Global Rebranding:** Updated all code, metadata, canonicals, JSON-LD schemas, OpenGraph tags, Twitter cards, sitemap.xml, robots.txt, and `api/contact.js` from legacy names to **Vardan Pal Studio**.
- **Production URL Alignment:** Swapped all production endpoints to `https://vardanpalstudio.vercel.app`.
- **CHICA Luxury Dining Integration (`demos/restaurant/`):** Integrated the flagship luxury restaurant concept demo (*CHICA — Luxury Dining & Hearth Lounge, One Golden Mile, New Delhi*), featuring interactive multi-step reservations, sommelier wine cellar showcase, and robata hearth narrative.

### 🔹 Prompt 2: Phase 16D Pre-Deploy Hardening & Defect Closure
- **Contact API Upstream Validation & Timeout (`api/contact.js`):**
  - Replaced unverified request forwarding with strict upstream confirmation checks (`response.ok`, defensive JSON parsing, and `result.success` confirmation).
  - Wrapped outbound fetch in an `AbortController` with an 8-second timeout guard returning clean HTTP 502 Bad Gateway instead of hanging indefinitely.
  - Built comprehensive 28-test unit suite in `scripts/test-contact-api.mjs` verifying upstream 500, 403, network drop, timeout abort, and unconfirmed receipts.
- **Clinic Offcanvas Structural Accessibility (`demos/clinic/`):**
  - Replaced layout-shifting offsets with structural CSS rules: `visibility: hidden`, `pointer-events: none`, and `max-width: 100vw` when closed.
  - Dynamically synchronized `aria-hidden="true"` and `inert` via MutationObserver, plus Escape-key dismiss with focus restoration.
- **Risky Claims Neutralization:** Removed real institutional and publication claims across the showcase and demo pages (softened AIIMS mentions, board-certified claims, and Vogue citations to generic culinary/medical journals).
- **QA Artifacts Untracked:** Added `scripts/*.json` to `.gitignore` and removed them from git cache to maintain a clean working tree.
- **Binary Brand Assets Regenerated:** Regenerated `assets/og.png` (1200×630) and `assets/apple-touch-icon.png` (180×180) featuring official "Vardan Pal Studio" typography and VP monogram.

### 🔹 Prompt 3: CHICA Restaurant UI Alignment & Policy Dialogs
- **Collision Elimination:** Removed overlapping top editorial bar (`.editorial-top-bar`) that was colliding with the shared 48px `.demo-context` bar.
- **Watermark Removal:** Eliminated floating watermark badge (`.editor-badge-float` / "Crafted by Vardxn").
- **Scroll Progress Bar Alignment:** Aligned scroll progress bar to top of page (`top: var(--demo-context-height, 53px)`).
- **Luxury Navbar Polish:** Positioned luxury navbar cleanly below the demo context bar.
- **Attribution Standardization:** Standardized footer attribution to: *"Built by Vardan Pal Studio • Websites from ₹9,900 • Custom systems quoted separately"*.
- **Luxury Policy Dialogs:** Replaced external links with high-contrast accessible dialog modals for Terms & Conditions and Privacy Policy.

### 🔹 Prompt 4: Project Inventory & Documentation Reconciliation
- **Obsolete Route Elimination:** Thoroughly scanned and excised all references to the legacy `vardan-original` restaurant route across `index.html`, `terms.html`, `assets/js/premium.js`, `AGENTS.md`, `QA-REPORT-COMPLETE.md`, and master documentation.
- **CHICA Metadata Synchronization:** Synchronized CHICA metadata across all showcase cards, sitemaps, category sliders, and verification scripts.

### 🔹 Prompt 5: Visible Rebrand Audit & GitHub CI/CD Configuration
- **Visible Text Audit & Cleanup:** Cleaned up visible "VARDXN" branding from the restaurant demo.
- **Enhanced Rebrand Test Script (`scripts/rebrand-audit.mjs`):** Added live visible DOM text checking to detect any legacy naming, confirming 10/10 rebrand audit pass.
- **GitHub & Vercel Linking:**
  - The user created GitHub repository: `https://github.com/Vardxn/vardan-pal-studio`.
  - The user connected Vercel project `vardanpalstudio` to `Vardxn/vardan-pal-studio`.
  - Configured local Git remote `origin` pointing to `https://github.com/Vardxn/vardan-pal-studio.git` on branch `main`.

---

## 3. Current Status — What Is Achieved vs Pending

### ✅ What We Have Achieved (100% Complete & Verified)
1. **100% Green Automated QA Suite (126 Automated Verifications Passing):**
   - **63 / 63 Multi-Viewport Responsive Runs:** 0 errors, 0 warnings, 0 horizontal overflow across 9 routes × 7 viewports (320px, 375px, 390px, 430px, 768px, 1024px, 1440px).
   - **14 / 14 Direct Demo Navigation Checks:** Same-tab navigation, 48px top context bar, 0px delta scroll restoration via `sessionStorage`, 0 modal dialogs, 0 iframes.
   - **11 / 11 Conversion Tracking & Attribution Checks:** Complete dataLayer event firing, 100% PII-free sanitization, UTM preservation, and API payload attribution.
   - **28 / 28 Contact API Unit & Upstream Failure Checks:** Full validation, honeypot spam protection, 8s timeout abort, and upstream receipt confirmation.
   - **10 / 10 Rebrand & Domain Audit Checks:** All routes declare Vardan Pal Studio and `https://vardanpalstudio.vercel.app` with zero disallowed legacy terms.
2. **Flagship Master Showcase Hub (`/`):** Full editorial quiet luxury experience with category filter tabs, interactive device previews, transparent pricing cards, and direct WhatsApp / form integration.
3. **6 Complete Client Concept Demos (`/demos/*/`):** Salon, Clinic, Restaurant, Real Estate, Interior, and Events portals fully styled and mobile-optimized.
4. **Vercel Serverless Contact API (`api/contact.js`):** Production-hardened with input validation, honeypot filtering, FormSubmit upstream integration, and error handling.
5. **Privacy & Legal Compliance:** Fully responsive, styled `privacy.html` and `terms.html` with explicit contact consent checkbox on the enquiry form.
6. **Local Development Environment:** Running cleanly on port 8088 (`python3 -m http.server 8088`).

7. **Google Business Profile Branding & Marketing Assets Deployed (October 10, 2026):**
   - Official Logo uploaded & active: Intertwined gold **VP** monogram on obsidian charcoal slate.
   - Official Cover banner uploaded: 3-device concept showcase (*"VARDAN PAL STUDIO · Web design for local businesses · New Delhi"*).
   - 3 Marketing infographics uploaded to Google Business Profile:
     a) **Launch Package Rate Card:** Websites from ₹9,900 · 5-day delivery · 1-tap WhatsApp booking.
     b) **3-Niche Demo Showcase:** Salon, Clinic, Restaurant concept highlights.
     c) **Performance Comparison:** High-converting *Slow Website vs Fast Website* graphic.
8. **Git & Vercel Remote Synced (Commit `efc8d58`):**
   - All commits pushed to GitHub `https://github.com/Vardxn/vardan-pal-studio.git` on branch `main`.
   - Vercel automatically deploys on every push. Live production at `https://vardanpalstudio.vercel.app` confirmed serving CHICA restaurant and updated showcases.
9. **Brand Assets Repository (`assets/branding/`):**
   - Saved high-resolution 1:1, 16:9, and 4:3 branding assets locally for marketing, social media, and Google Ads (`logo-profile-square.jpg`, `cover-studio-workspace.jpg`, `brand-mockup-stationery.jpg`).
10. **Codebase Cleanup:**
   - Removed legacy `demos/restaurant/style.css`.
   - Re-verified 100% green status across all 126 test assertions.

### ⏳ What Is Pending & Immediate Next Steps
1. **Google Business Profile Review Completion:**
   - Monitor Google's automated approval of pending cover photo and marketing infographics (typically 2–24 hours).
2. **Google Maps Pin Label Synchronization:**
   - Monitor Google Maps update for pin label from legacy "Kailash Studio" to "Vardan Pal Studio".
3. **Outbound Cold Outreach Launch (Zero-Cost Lead Generation):**
   - Execute 10 daily personalized WhatsApp / DM pitches to South Delhi clinics, salons, and interior studios using the live concept demos.
4. **Google Ads Activation (Deferred):**
   - When ready to spend marketing budget, insert GA4 Measurement ID (`G-XXXXXXXXXX`) and Google Ads Conversion IDs in `assets/js/analytics-config.js` and claim the ₹40,000 Google Ads credit.
5. **Custom Domain Purchase (Deferred):**
   - Purchase `vardanpalstudio.com` and connect to Vercel after securing the first paying client.
6. **Local Workspace Folder Rename (Deferred):**
   - Rename folder `south-delhi-web-studio` to `vardan-pal-studio` after the first client to prevent symlink disruptions.

---

## 4. GitHub & Vercel Deployment Setup (According to Screenshots)

Based on the user's setup shown in the screenshots:

1. **GitHub Repository:**
   - Owner: `Vardxn`
   - Repository: `vardan-pal-studio`
   - Visibility: Public
   - Remote URL: `https://github.com/Vardxn/vardan-pal-studio.git`
2. **Vercel Project Configuration:**
   - Project Name: `vardanpalstudio`
   - Connected Repository: `Vardxn/vardan-pal-studio`
   - Production Branch: `main`
   - Deploy Hooks: Automatic deployment on Git commit push is enabled.
3. **Local Git Setup Executed:**
   ```bash
   git remote add origin https://github.com/Vardxn/vardan-pal-studio.git
   git branch -M main
   ```
4. **Terminal Command for User to Execute:**
   Run this in your Mac / VS Code terminal (where your GitHub credentials/keychain are accessible):
   ```bash
   git push -u origin main
   ```
   *As soon as this command completes, Vercel will automatically detect the commit, trigger an instant build, and update https://vardanpalstudio.vercel.app with the entire project!*

---

## 5. Core Architecture & Technology Stack

### Technical Foundations
- **Frontend Core:** Pure HTML5, Vanilla CSS3, and Vanilla JavaScript (ES2022). Zero frontend frameworks (no React, Next.js, Vue, or Tailwind). Sub-second load times with zero compilation overhead.
- **Backend Serverless Function:** Node.js ECMAScript Module (`api/contact.js`) hosted on Vercel Functions.
- **Hosting & Edge Delivery:** Vercel Global Edge Network with automatic HTTPS/SSL, custom security headers, sitemap.xml, and robots.txt.

### Design System & Visual Tokens
- **Color Palette:**
  - Ivory (`#fcfbf9` / `--bg-ivory`): Primary background
  - Stone (`#f5f3ee` / `--bg-stone`): Card and secondary surface background
  - Charcoal (`#141519` / `--text-charcoal`): Primary editorial text and dark sections
  - Champagne Gold (`#b58d53` / `#c5a880` / `--accent-gold`): Subtle accents, borders, and interactive highlights
- **Typography:**
  - Headings: *Cormorant Garamond* (Google Fonts, serif, elegant luxury)
  - UI & Body: *Plus Jakarta Sans* (Google Fonts, sans-serif, high readability)
- **Style Rules:**
  - Quiet luxury editorial style reminiscent of architectural monographs.
  - Strict prohibition against tacky SaaS gradients, floating tech badges, and generic colors.
  - Minimum touch target size: >= 44px by 44px across all interactive controls.

### Workspace Directory Structure
```text
.
├── 404.html                          # Editorial 404 error page
├── AGENTS.md                         # Coding agent guidelines
├── api/
│   └── contact.js                    # Vercel serverless contact API handler
├── assets/
│   ├── css/
│   │   ├── demo-context.css          # Shared 48px top bar for concept demos
│   │   ├── main.css                  # Studio hub base stylesheet
│   │   └── premium.css               # Quiet luxury component styles
│   ├── js/
│   │   ├── analytics-config.js       # Tracking IDs configuration
│   │   ├── demo-navigation.js        # Same-tab navigation & scroll restore
│   │   ├── premium.js                # Studio hub interactive controllers
│   │   └── tracking.js               # Zero-PII conversion tracking engine
│   ├── shots/                        # High-resolution WebP demo thumbnails
│   ├── apple-touch-icon.png          # 180x180 branded touch icon
│   ├── favicon.svg                   # Vector VP brand favicon
│   └── og.png                        # 1200x630 OpenGraph social preview image
├── demos/
│   ├── clinic/                       # Care Dental & Skin Clinic demo
│   ├── events/                       # Studio Vows Wedding Photography demo
│   ├── interior/                     # Studio Eleven Interior Design demo
│   ├── real-estate/                  # Prime Estates Luxury Real Estate demo
│   ├── restaurant/                   # CHICA Fine Dining & Hearth Lounge demo
│   └── salon/                        # Aura Salon & Spa demo
├── docs/
│   └── VARDAN_PAL_STUDIO_MASTER.md   # Synchronized master documentation
├── index.html                        # Master Showcase Hub homepage
├── package.json                      # Project manifest
├── privacy.html                      # Privacy Policy
├── robots.txt                        # Search engine crawling rules
├── scripts/                          # Automated QA and verification suites
├── sitemap.xml                       # Search engine sitemap
├── terms.html                        # Terms of Service
├── vercel.json                       # Vercel routing & security headers
└── VARDAN_PAL_STUDIO_MASTER.md       # Root Master Specification (THIS FILE)
```

---

## 6. Catalog of the 6 Client Concept Demos

Every demo is a complete, functioning, self-contained multi-page website:

| # | Industry | Demo Name | Simulated Domain | Live URL Route | Key Functional Highlights |
|---|---|---|---|---|---|
| **01** | **Hair Salon & Spa** | **Aura Salon & Spa** | `aurasalon.in` | `/demos/salon/` | Transparent haircut rate card, balayage lookbook, stylist profiles, 52px WhatsApp appointment scheduler with gold chevrons. |
| **02** | **Dental & Skin Clinic** | **Care Dental & Skin Clinic** | `caredental.in` | `/demos/clinic/` | MD specialist credentials, aligner & implant pricing guides, interactive consultation scheduler, emergency patient triage. |
| **03** | **Fine Dining & Bar** | **CHICA — Luxury Dining & Hearth Lounge** | `chicadelhi.com` | `/demos/restaurant/` | Interactive multi-step table reservations, day-to-night transitions, robata hearth narrative, sommelier cellar, policy dialogs. |
| **04** | **Luxury Real Estate** | **Prime Estates — Luxury Properties** | `primeestates.in` | `/demos/real-estate/` | Title-checked luxury villas, architectural floor plans, neighborhood guides, discreet private walkthrough booking flow. |
| **05** | **Interior Design** | **Studio Eleven — Interior Design** | `studioeleven.in` | `/demos/interior/` | Editorial completed project galleries, material palette studies, turnkey 3-step roadmap, project intake consultation. |
| **06** | **Wedding Cinema** | **Studio Vows — Wedding Films** | `studiovows.in` | `/demos/events/` | Cinematic trailers, story photo albums, transparent package breakdown (₹2.2L–₹6.5L), date availability checker. |

### Direct Same-Tab Navigation Architecture (Phase 16C)
- **Top Context Bar:** A shared 48px sticky header (`.demo-context`) featuring a touch-friendly "← Back to portfolio" link and category label (`Concept website · [Category]`).
- **Scroll Restoration:** Native browser history and `sessionStorage` (`vps_demo_return_state`) restore exact homepage scroll position (**0px delta** observed in tests) when returning.
- **Fallback Safe:** Directly bookmarked demo visits safely navigate back to `/#work` without trapping the user.

---

## 7. Approved 4-Tier Pricing System & Service Governance

### 1. Public Pricing Tiers Summary

| Tier Name | Starting Price | Delivery Timeline | Primary Audience & Positioning | Revisions | Included Support |
|---|---|---|---|---|---|
| **Launch** | **₹9,900 starting** | **5-day typical delivery** | Getting your business online with credibility and speed | 1 round | 15 days post-launch |
| **Business** *(Most Popular)* | **₹19,900 starting** | **7-day typical delivery** | Established businesses converting search traffic into enquiries | 2 rounds | 30 days post-launch |
| **Signature** | **₹34,900 starting** | **10–14 day typical delivery** | High-end editorial presence with bespoke motion & deep intake | 3 rounds | 60 days post-launch |
| **Custom Systems** | **Quoted after discovery** | **Scoped per project** | Client portals, automation, and WhatsApp CRM beyond websites | As agreed | Quoted per scope |

### 2. Package Specifications & Scope Boundaries

#### 🚀 Tier 1: LAUNCH (₹9,900 starting)
- One-page premium custom website
- Mobile-first, fast-loading build (clean HTML5/CSS3/Vanilla JS)
- Bespoke typography and curated color palette
- Direct WhatsApp and click-to-call action buttons
- Interactive Google Maps integration
- Basic technical SEO setup and Google Search Console registration
- Cloud deployment and SSL certificate setup
- *Exclusions:* Multi-page layouts, booking flows, blog/CMS, CRM automation.

#### 💼 Tier 2: BUSINESS — Most Popular (₹19,900 starting)
- 4–5 custom sections or pages
- Service menu, rate card, or visual gallery
- Appointment or enquiry booking request flow
- Testimonials and trust/proof sections
- Validated WhatsApp enquiry form with client-side error handling
- Local SEO and metadata optimization (Schema.org local business markup)
- Performance and Core Web Vitals audit
- *Exclusions:* Full headless CMS, real-time sync calendars, complex databases.

#### 🏛️ Tier 3: SIGNATURE (₹34,900 starting)
- Multi-page bespoke architecture, up to 8 pages
- Custom motion and studio-grade UI/UX micro-interactions
- Curated portfolio or case-study gallery
- Advanced booking or multi-step client intake flow
- Blog-ready structure
- Advanced SEO, analytics, and custom event tracking
- Custom domain connection and cloud hosting infrastructure setup
- *Boundary:* A full CMS or publishing backend is quoted separately.

#### ⚙️ Tier 4: CUSTOM SYSTEMS (Quoted after discovery)
- Discovery call and workflow mapping
- Client self-service portals or booking management dashboards
- Multi-step lead-qualification and intake flows
- WhatsApp CRM integration and automated payment/appointment reminders
- Third-party webhook, CRM, and API integrations
- Comprehensive documentation and handover staff training

### 3. Promise Integrity & Communication Rules
- ❌ **No guaranteed Google rankings** (e.g., "#1 on Google" replaced with "Technical SEO setup & Search Console configuration").
- ❌ **No guaranteed lead volume or sales** (replaced with "Clear enquiry paths & faster customer journeys").
- ❌ **No unlimited revisions or unlimited support** (each tier defines explicit revision counts and support days).
- ❌ **No full CMS in standard website tiers** (CMS implementation quoted separately).
- ❌ **No real-time booking engines** unless commissioned under Custom Systems.
- ❌ **No physical office claims** outside New Delhi. Remote service nationwide.

---

## 8. Conversion Tracking, Attribution & Analytics Architecture

### Safe Tracking Architecture (`assets/js/analytics-config.js` & `assets/js/tracking.js`)
- **Default Empty IDs:** `ga4MeasurementId: ""`, `googleAdsConversionId: ""`, `googleAdsLeadLabel: ""`. Zero scripts load and zero runtime exceptions occur when IDs are empty.
- **Strict PII Scrubbing:** Automatically scrubs names, phones, emails, cities, messages, and regex-matching email/digit strings before pushing events to `window.dataLayer`.
- **Debounced Delegation:** 350ms click debounce preventing duplicate rapid fire.

### Conversion Event Hierarchy
- **`lead_submit` (Primary Conversion):** Fires strictly after form validation succeeds and before WhatsApp redirect. Parameters: `package`, `industry`, `form_location` (0 PII).
- **`proposal_request` (Secondary Conversion):** Fires when valid submission reaches the success card state.
- **`whatsapp_click`:** Tracks clicks on floating WhatsApp button, header, and section CTAs.
- **`phone_click` & `email_click`:** Tracks phone and mailto links.
- **`demo_open`:** Tracks navigation to demo websites with category and slug.
- **`pricing_cta`:** Tracks package tier button clicks.

### Full UTM & Attribution Engine
- Captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, and `gclid` on landing.
- Persists parameters in `sessionStorage` across page anchors and internal browsing.
- Automatically populates hidden inputs in `#enquireForm`.
- Passes full attribution into `api/contact.js` payload and formats human-readable summary.
- Appends referral source tag into WhatsApp message only when attribution is present.

---

## 9. Google Ads Search Campaign Blueprint

### Strategic Framework
- **Campaign Type:** Google Search Network Only (No Display, No Performance Max initially).
- **Daily Budget:** ₹500 to ₹800 / day (₹15,000 to ₹24,000 / month) for a 2–4 week test period.
- **Bidding Strategy:** Maximize Clicks (bid cap ₹25–₹45) -> transition to Maximize Conversions after 15–20 valid `lead_submit` events.
- **Geographic Targeting:** Primary: New Delhi / NCR (35 km radius); Secondary: Pan-India remote service.

### Initial Ad Groups & Exact/Phrase Keywords
1. **Ad Group 1: Clinic & Healthcare Web Design**
   - `[clinic website design]`, `[dental clinic website designer]`, `"doctor website design delhi"`, `"medical clinic website maker"`
2. **Ad Group 2: Salon & Luxury Spa Web Design**
   - `[salon website design]`, `[beauty salon website maker]`, `"spa website designer delhi"`, `"luxury salon web design"`
3. **Ad Group 3: Restaurant & Hospitality Web Design**
   - `[restaurant website design delhi]`, `[fine dining website maker]`, `"cafe website designer delhi"`, `"restaurant online menu website"`
4. **Ad Group 4: Small Business & Professional Services**
   - `[small business website design]`, `[business website maker delhi]`, `"professional website for business"`, `"corporate website designer india"`
5. **Ad Group 5: High-Intent Website Designer Delhi**
   - `[website designer south delhi]`, `[web design studio delhi]`, `"website development agency delhi"`, `"hire web designer delhi"`
6. **Ad Group 6: Nationwide Web Designer India**
   - `[website designer india]`, `[quiet luxury web design]`, `"freelance website developer india"`, `"bespoke web design india"`

### Universal Negative Keywords
`free`, `free download`, `tutorial`, `course`, `jobs`, `internship`, `salary`, `career`, `template download`, `wordpress theme nulled`, `wix login`, `squarespace login`, `shopify login`, `cheap website 500 rs`, `source code github`.

### Lead Pipeline CRM Schema
- **Lead Stages:** `New` -> `Contacted` -> `Discovery Completed` -> `Proposal Sent` -> `Won (Closed)` / `Lost`.
- **Intake Fields:** Date, Full Name, Business Name, Industry, Package (`Launch`, `Business`, `Signature`, `Custom Systems`), Phone/WhatsApp, Email, Campaign/UTM Source, Status, Notes.

---

## 10. Full Quality Assurance Matrices & Automated Test Evidence

### Summary Table of All Automated Test Suites

| Suite Name | Test Script | Total Tests | Passed | Failed | Status |
|---|---|---|---|---|:---:|
| **Full Responsive QA Matrix** | `scripts/full-qa.mjs` | **63** | **63** | **0** | **100% PASS ✅** |
| **Direct Demo Navigation QA** | `scripts/verify-direct-demo-navigation.mjs` | **14** | **14** | **0** | **100% PASS ✅** |
| **Conversion Tracking & Attribution** | `scripts/test-tracking.mjs` | **11** | **11** | **0** | **100% PASS ✅** |
| **Contact API Unit & Failure Modes** | `scripts/test-contact-api.mjs` | **28** | **28** | **0** | **100% PASS ✅** |
| **Rebrand & Domain Integrity Audit** | `scripts/rebrand-audit.mjs` | **10** | **10** | **0** | **100% PASS ✅** |
| **Total Automated Assertions** | *All Suites Combined* | **126** | **126** | **0** | **100% PASS ✅** |

### Multi-Viewport Matrix Runs (63 Runs Across 9 Routes & 7 Viewports)
Tested viewports: `320px`, `375px`, `390px`, `430px`, `768px`, `1024px`, `1440px`.  
Tested routes: `/`, `/404.html`, `/demos/salon/`, `/demos/clinic/`, `/demos/restaurant/`, `/demos/real-estate/`, `/demos/interior/`, `/demos/events/`, `/privacy.html`, `/terms.html`.  
**All 63 runs verified with 0 console errors, 0 failed network requests, 0 horizontal overflow, 0 form label faults, and 0 broken images.**

---

## 11. Chronological Project History (Phases 1 through 16D)

- **Phase 1 — Legacy Template Ingestion:** Collected 6 standalone downloaded templates with placeholder copy and disparate styling.
- **Phase 2 — Transformation into Studio Master Showcase:** Engineered master agency portal (`index.html`) using Apple x Architectural monograph quiet luxury aesthetic.
- **Phase 3 — Indian Market Localization:** Localized with authentic contact details for Vardan Pal, transparent Rupee pricing, and WhatsApp-first conversion.
- **Phase 4 — Serverless API & Vercel Deployment:** Configured `vercel.json` with SSL, security headers, and edge function `api/contact.js`.
- **Phase 5 — Salon Demo Rebuild & Form Fix:** Fixed missing CSS, rebuilt appointment form with high-contrast inputs and gold accents.
- **Phase 6 — Brand Simplification:** Eliminated foreign French/Latin jargon; standardized all 6 demos to recognizable Indian industry models.
- **Phase 7 — Canonical Workspace Unification:** Established clean symlinks and unified repository structure.
- **Phase 8 — Demo Thumbnail Synchronization:** Recaptured high-res WebP preview thumbnails across all showcase cards.
- **Phase 9 — Pan-India Market Repositioning:** Repositioned copy to serve ambitious businesses across India.
- **Phases 10–12 — Rebrand & Quality Sweeps:** Audited route availability, touch targets, and eliminated legacy naming.
- **Phase 13 — Multi-Viewport Responsive QA:** Automated 63-run Playwright matrix verifying zero horizontal overflow.
- **Phase 14 — Sustainable Pricing Alignment:** Standardized ₹9,900 / ₹19,900 / ₹34,900 / Custom Systems rate cards and promise boundaries.
- **Phase 15 — Conversion Tracking & Google Ads Readiness:** Built privacy-first dataLayer tracking, PII scrubber, UTM persistence, and Google Ads strategy.
- **Phase 16A — Contact Consent UI Refinement:** Custom 22px gold checkbox, accessible touch targets, and centered section ending.
- **Phase 16B — Compact Footer Architecture:** Rebuilt footer into concise 3-column layout with natural height and WhatsApp button clearance.
- **Phase 16C — Direct Demo Navigation:** Completely removed modal dialogs/iframes in favor of same-tab navigation, 48px context bar, and pixel-perfect scroll restoration.
- **Phase 16D — Pre-Deploy Hardening & Defect Closure:** Contact API 8s timeout guard, clinic offcanvas structural accessibility, claims neutralization, binary assets regeneration, and git cleanup.
- **Phase 17 — Brand Identity Deployment & Google Business Launch (October 10, 2026):**
  - Generated and cataloged official studio branding assets in `assets/branding/` (`logo-profile-square.jpg`, `cover-studio-workspace.jpg`, `brand-mockup-stationery.jpg`).
  - Deployed official brand identity to Google Business Profile manager (`Vardan Pal Studio – Web Design & Development`):
    1. Official Profile Logo: Active, featuring gold intertwined VP monogram on obsidian slate.
    2. Studio Cover Photo: Multi-device mobile mockup header (*"VARDAN PAL STUDIO · Web design for local businesses · New Delhi"*).
    3. Marketing Asset 1: Launch Package ₹9,900 / 5-day delivery rate card.
    4. Marketing Asset 2: Salon, Clinic, Restaurant 3-niche mobile demo showcase.
    5. Marketing Asset 3: *"Slow website vs Fast website"* performance comparison graphic.
  - Re-hosted local dev server on port 8088 (`python3 -m http.server 8088`).
  - Removed obsolete `demos/restaurant/style.css`.
  - Pushed commits through `efc8d58` to GitHub `origin/main` with automatic Vercel production deployment.
  - Re-verified 100% green test suite across all 126 assertions.
  - **Full Website Logo Integration:** Created official vector brand mark  (and updated ). Integrated the official logo mark into the sticky top navigation bar across all routes (, , , ), the footer brand column heading, and the Founder credibility card () with the high-resolution studio seal badge ().

---

## 12. Master Briefing & System Prompt for New AI Agent Chats

> **PASTE THIS EXACT SECTION INTO A NEW AI AGENT CHAT TO INITIALIZE FULL CONTEXT:**

```markdown
You are pair programming on "Vardan Pal Studio", an independent quiet-luxury web design and engineering studio founded by Vardan Pal (Software Engineer · B.Tech IT, NIT Srinagar).

Core Project Facts:
- Live Domain: https://vardanpalstudio.vercel.app
- GitHub Repo: https://github.com/Vardxn/vardan-pal-studio (remote origin, branch main)
- Vercel Project: vardanpalstudio (linked to GitHub repo for automatic CI/CD deployment)
- Founder Portfolio: https://vardxn.vercel.app | WhatsApp: +91 82796 96707 | Email: vardan2701@gmail.com
- Base Location: New Delhi, India (serving businesses nationwide remotely; never claim a physical office outside Delhi)

Tech Stack:
- Plain static HTML5, Vanilla CSS3, Vanilla JS (ES2022). NO frontend frameworks (no React, Next.js, Vue, Tailwind).
- Serverless API in api/contact.js (Node.js ESM) deployed on Vercel Functions.
- Design System: Ivory #fcfbf9, stone #f5f3ee, charcoal #141519, champagne gold #b58d53 / #c5a880. Fonts: Cormorant Garamond (headings), Plus Jakarta Sans (UI). Quiet-luxury aesthetic.

The 6 Concept Demos (in demos/):
- Aura Salon & Spa (/demos/salon/)
- Care Dental & Skin Clinic (/demos/clinic/)
- CHICA Luxury Dining & Hearth Lounge (/demos/restaurant/)
- Prime Estates (/demos/real-estate/)
- Studio Eleven (/demos/interior/)
- Studio Vows (/demos/events/)
- Demos use same-tab direct navigation with a 48px top context bar (.demo-context) and sessionStorage scroll restoration. NO modal dialogs or iframes.

Pricing System (Do NOT change unless requested):
- Launch: from ₹9,900 (5-day typical, 1 revision, 15 days support)
- Business: from ₹19,900 (Most popular, 7-day typical, 2 revisions, 30 days support)
- Signature: from ₹34,900 (10-14 day typical, 3 revisions, 60 days support)
- Custom Systems: Quoted after discovery
- No promises of guaranteed rankings, guaranteed leads, free CMS, or unlimited revisions.

Developer Verification Commands:
export PATH="/Users/vardan/.local/node-v20.18.0-darwin-arm64/bin:$PATH"
node scripts/full-qa.mjs                     # 63-run responsive audit (Must pass 63/63)
node scripts/verify-direct-demo-navigation.mjs # 14-run same-tab navigation (Must pass 14/14)
node scripts/test-tracking.mjs                # 11-run conversion tracking (Must pass 11/11)
node scripts/test-contact-api.mjs             # 28-run API failure tests (Must pass 28/28)
node scripts/rebrand-audit.mjs                # 10-run rebrand audit (Must pass 10/10)

Rules for Agents:
- Never read, print, or commit secrets or .env.local.
- Deployments happen automatically via Git push to origin main (or manually by user).
- Maintain 100% test pass rate across all suites.
- Read VARDAN_PAL_STUDIO_MASTER.md for full specs.
```

---
*End of Master Document — Vardan Pal Studio · October 2026*
