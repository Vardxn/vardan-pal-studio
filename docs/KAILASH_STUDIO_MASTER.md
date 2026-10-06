# Kailash Studios — Master System Blueprint & Architectural Reference

> **The Single Source of Truth for Kailash Studios (South Delhi Web Studio)**  
> **Lead Developer & Designer:** Vardan Pal  
> **Studio Base:** Chanakyapuri & South Delhi, New Delhi  
> **Live Production URL:** [https://south-delhi-web-studio.vercel.app](https://south-delhi-web-studio.vercel.app)  
> **Developer Portfolio:** [https://vardxn.vercel.app](https://vardxn.vercel.app)  
> **WhatsApp Direct:** [+91 82796 96707](https://wa.me/918279696707) | **Email:** `vardan2701@gmail.com`  
> **Last Synchronized & Verified:** October 2026

---

## 1. Executive Summary & Brand Identity

**Kailash Studios** (operating also as *South Delhi Web Studio* and *Vardan Pal Digital Studio*) is a solo, high-end freelance web development and digital design studio.

### Core Business Positioning
- **Target Audience:** High-trust local and small-to-medium businesses in South Delhi (Chanakyapuri, Malcha Marg, Diplomatic Enclave, Shanti Niketan, Greater Kailash, Vasant Vihar, Defence Colony) and broader Indian metro markets.
- **The Core Problem Solved:** Most local businesses in Delhi rely on generic, slow, outdated WordPress or unstyled templates that do not inspire confidence, fail on mobile phones, and make client booking cumbersome.
- **The Solution:** Ultra-clean, high-converting, mobile-first websites designed with **quiet luxury aesthetics** (editorial typography, warm natural palettes, zero tacky SaaS gradients) combined with **instant WhatsApp-first booking flows**, transparent ₹ INR pricing rate cards, and sub-5-day delivery.

---

## 2. File Organization System (Unified Canonical Architecture)

To resolve file divergence when working across different AI agents (**Antigravity IDE** and **Codex**), the project structure has been unified into a **single canonical source of truth**.

### 📁 Unified Path Mapping
| Tool / Context | Path Used | Resolution |
| :--- | :--- | :--- |
| **Canonical Repository (Source of Truth)** | `/Users/vardan/Developer/personal/03-Experiments/south-delhi-web-studio/` | **Physical Disk Location (Git, Vercel linked)** |
| **Codex / Shell Shortcut** | `/Users/vardan/Coding/personal/03-Experiments/south-delhi-web-studio/` | Native symlink to `~/Developer/...` |
| **Antigravity IDE Default Scratch** | `/Users/vardan/.gemini/antigravity-ide/scratch/south-delhi-digital/` | **Direct symlink to canonical repository** |

Because `scratch/south-delhi-digital` is now a direct symlink to `south-delhi-web-studio`, **both Antigravity IDE and Codex edit the exact same files simultaneously**. There are no duplicate copies, no manual sync steps, and zero risk of code divergence.

### 🌳 Canonical Directory Structure
```
south-delhi-web-studio/
├── index.html                   # Master Showcase Hub (The Kailash Studios main site)
├── 404.html                     # Custom 404 page styled with luxury brand typography
├── vercel.json                  # Production Vercel edge deployment & cache headers
├── package.json                 # Node.js dev dependencies (Playwright, tools)
├── package-lock.json
├── sitemap.xml                  # Canonical sitemap listing hub + all 6 demo portals
├── robots.txt                   # Search crawler directives
├── .env.local                   # Local environment credentials (OIDC / Vercel)
│
├── assets/                      # Shared Static Assets for the Showcase Hub
│   ├── css/
│   │   └── premium.css          # Master Design System (Tokens, Layout, Editorial Fonts, Dark Mode)
│   ├── js/
│   │   └── premium.js           # Showcase Engine (Project Data, Category Tabs, Device Modal)
│   ├── shots/                   # Optimized 1280x800 WebP Screenshots of Client Demos
│   │   ├── clinic.webp          # Care Dental & Skin Clinic preview
│   │   ├── salon.webp           # Aura Salon & Spa preview
│   │   ├── restaurant.webp      # Malcha Table preview
│   │   ├── real-estate.webp     # Prime Estates preview
│   │   ├── interior.webp        # Studio Eleven preview
│   │   └── events.webp          # Studio Vows preview
│   ├── og.png                   # OpenGraph social preview card (1200x630)
│   └── apple-touch-icon.png     # Brand favicon & iOS home screen icon
│
├── demos/                       # 6 Complete, Independent Client Demo Websites
│   ├── salon/                   # 01: Aura Salon & Spa (Haute Coiffure, Rate Cards, Mobile Booking)
│   ├── clinic/                  # 02: Care Dental & Skin Clinic (Doctor profiles, WhatsApp triage)
│   ├── restaurant/              # 03: Malcha Table (Food/cocktail menus, Table reservations)
│   ├── real-estate/             # 04: Prime Estates (Diplomatic villas, Jor Bagh/GK listings)
│   ├── interior/                # 05: Studio Eleven (Architectural portfolios, consultation intake)
│   └── events/                  # 06: Studio Vows (Wedding reels, transparent pricing, date checker)
│
├── api/                         # Vercel Serverless Backend Functions
│   └── contact.js               # Handles contact form submissions & notification dispatch
│
├── scripts/                     # Developer & QA Automation Test Suite
│   ├── audit.mjs                # Multi-viewport automated screenshot generator (Playwright)
│   ├── test-form.mjs            # Contact API endpoint validation script
│   ├── og.mjs                   # Generates OpenGraph image programmatically
│   ├── screenshot-salon-fields.mjs # Dedicated mobile viewport form inspector
│   └── screenshot-salon-phone.mjs  # Header & mobile hero screenshot validator
│
├── audit-shots/                 # QA Screen Captures Across Viewports (375px, 768px, 1440px)
├── docs/                        # Permanent System Blueprints & Master References
│   └── KAILASH_STUDIO_MASTER.md # This Master Document
└── README.md                    # Project overview & quick deployment instructions
```

---

## 3. Master Showcase Hub (`index.html`) — Complete Feature Breakdown

The main website at `index.html` acts as the high-converting agency storefront for Vardan Pal.

### Visual Aesthetic & Design System
- **Color Palette:** Warm Ivory base (`#fcfbf9`), Stone grey surfaces (`#f5f3ee`), Deep Charcoal typography (`#141519`), Muted Champagne Gold accents (`#b58d53` / `#c5a880`).
- **Typography:** *Cormorant Garamond* (editorial luxury serif for hero & major headings) paired with *Plus Jakarta Sans* (clean, legible grotesque for interface elements, rate cards, and forms).
- **Zero Generic Styling:** No bright purple/blue SaaS gradients, no harsh neon cards. Every section feels like an architectural monograph or high-end design atelier.

### Core Sections & Functions
1. **Header & Navigation:**
   - Wordmark: `Kailash Digital` (with Chanakyapuri location tag).
   - Smooth navigation links to `#work` (Portfolio), `#services` (Scope), `#pricing` (Packages), `#process` (Timeline), and `#contact` (Inquiry).
   - Sticky WhatsApp Quick-Action button.
2. **Hero Section:**
   - Editorial headline: *“Websites designed for your exact business.”*
   - Sub-copy highlighting bespoke craft, local customer discovery, and 3–5 day delivery.
   - Dual floating browser mockup chrome showing Malcha Table and Care Dental.
   - Interactive live status badge: `● Live Interactive Portfolio`.
3. **Trust & Delivery Strip (Section 01B):**
   - 4 quick-assurance pillars: **3–5 days** typical delivery, **From ₹3,000** transparent packages, **One contact** (direct builder access), **WhatsApp first** (zero bureaucracy).
4. **Selected Portfolio Grid (Section 02):**
   - 6 detailed case study cards arranged in asymmetrical wide and duo editorial layouts.
   - Each card features:
     - Browser chrome mockup with simulated domain (`caredental.in`, `aurasalon.in`, etc.).
     - Live category badge & motive tag (*“Built for Hair Salons, Spas & Beauty Parlours”*).
     - 4 feature tags highlighting business capabilities.
     - Direct CTA: `Explore Live Demo →` opening the working client demo in a new tab.
5. **Interactive Category Showcase (Section 03 — Dark Mode Signature Section):**
   - High-contrast charcoal section (`#141519`) with dynamic category tabs (*Restaurants, Clinics, Salons, Real Estate, Interior, Weddings*).
   - Powered by `assets/js/premium.js`.
   - Features automated 5.5s cross-fade rotation, keyboard arrow navigation, live feature checkmarks, and instant screenshot swapping.
6. **Studio Philosophy Visual Statement (Section 04):**
   - Architectural quote banner: *“Your website is often the first conversation.”*
7. **Services Editorial Scope (Section 05):**
   - Numbered breakdown of the 4 deliverables: **01 Design**, **02 Development**, **03 Launch**, **04 Management**.
8. **Transparent INR Pricing (Section 06):**
   - 4 market-tailored packages with Indian Rupee (`₹`) symbols:
     - **Starter (₹3,000):** 1-page modern landing page, mobile responsive, WhatsApp button, Google Maps integration, 3-day turnaround.
     - **Business (₹5,000):** *Most Popular* — 3–5 pages, service menus / rate cards, appointment booking flow, SEO setup, 5-day turnaround.
     - **Premium (₹7,500):** Custom multi-page design, animated showcases, patient/client intake forms, Google business optimization.
     - **Complete (₹10,000):** Full digital suite, custom CMS integration, ongoing monthly maintenance, priority support.
9. **5-Step Execution Roadmap (Section 07):**
   - Step 1: Tell us what you need → Step 2: Experience design → Step 3: Build & QA → Step 4: Domain & Launch → Step 5: Start receiving clients.
10. **Integrated Inquiry & Contact Form (Section 09):**
    - High-contrast inputs for Name, Phone (WhatsApp preferred), Business Type, Package, and Notes.
    - Dual submission mode: Submit directly to `api/contact.js` and open WhatsApp with a prefilled message.
11. **Interactive Device Drawer Modal:**
    - Allows potential clients to preview any demo inside simulated **Desktop (1280px)** or **iPhone (390px)** frames right on the portfolio.

---

## 4. The 6 Client Demo Websites — Complete Catalog & Capabilities

All 6 client websites are fully implemented, self-contained multi-page projects residing in `demos/`.

| # | Demo Category | Standardized Brand Name | Inspired By (Big Brands) | Simulated Domain | Live Production URL | Key Functional Features |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Hair Salon & Spa** | **Aura Salon & Spa** | Looks Salon, Geetanjali Salon | `aurasalon.in` | https://south-delhi-web-studio.vercel.app/demos/salon/ | Master stylist portfolios, transparent haircut rate card, hair color balayage lookbook, touch-friendly 52px WhatsApp appointment booking form with custom gold chevron dropdowns. |
| **02** | **Dental & Skin Clinic** | **Care Dental & Skin Clinic** | Clove Dental, Kaya Skin Clinic | `caredental.in` | https://south-delhi-web-studio.vercel.app/demos/clinic/ | Verified doctor credentials, clear aligner & implant pricing guides, interactive consultation scheduler, emergency patient WhatsApp triage. |
| **03** | **Fine Dining & Bar** | **Malcha Table — Restaurant & Bar** | Olive Bar & Kitchen, Social | `malchatable.com` | https://south-delhi-web-studio.vercel.app/demos/restaurant/ | Interactive chef's table reservations, digital seasonal food & cocktail menus with pricing, interior lookbook, private party inquiry. |
| **04** | **Luxury Real Estate** | **Prime Estates — Luxury Properties** | DLF Prime, India Sotheby's | `primeestates.in` | https://south-delhi-web-studio.vercel.app/demos/real-estate/ | Diplomatic enclave & Shanti Niketan villa listings, floor plans, neighborhood guides, discreet private walkthrough scheduler. |
| **05** | **Interior Design** | **Studio Eleven — Interior Design Studio** | Livspace, HomeLane | `studioeleven.in` | https://south-delhi-web-studio.vercel.app/demos/interior/ | Editorial completed project galleries, material palette studies, turnkey execution roadmap, client project intake consultation. |
| **06** | **Wedding Cinema** | **Studio Vows — Wedding Films & Photography** | WedMeGood, The Wedding Filmer | `studiovows.in` | https://south-delhi-web-studio.vercel.app/demos/events/ | Cinematic video trailers, wedding story photo albums, transparent package breakdown, instant date availability checker. |

---

## 5. History & Evolution (How We Got Here)

1. **Phase 1 — Legacy Template Ingestion:**  
   Collected 6 standalone downloaded templates (`salon`, `clinic`, `restaurant`, `real-estate`, `interior`, `events`). The templates originally had foreign names, lorem ipsum placeholder text, and disjointed styles.
2. **Phase 2 — Transformation into Kailash Studios Master Showcase:**  
   Engineered the master agency website (`index.html`) using the Apple × Architectural Studio quiet luxury aesthetic. Replaced all SaaS gradients with editorial typography (*Cormorant Garamond* + *Plus Jakarta Sans*).
3. **Phase 3 — Indian Market & South Delhi Localization:**  
   Every demo was localized for South Delhi (Chanakyapuri, Malcha Marg, Shanti Niketan, Jor Bagh). Integrated authentic contact information for Vardan Pal, transparent Rupee (`₹`) pricing, and WhatsApp-first action flows.
4. **Phase 4 — Serverless API & Vercel Deployment:**  
   Configured `vercel.json` with SSL, security headers, and an edge function at `api/contact.js` to process customer inquiries. Successfully aliased to https://south-delhi-web-studio.vercel.app.
5. **Phase 5 — Salon Demo Rebuild & Form Fix:**  
   Discovered that `bootstrap.min.css` was missing from `demos/salon/`, which caused grid collapse ('just HTML no CSS'). Overhauled `delhi-custom.css`, fixed overlapping brand logo headers on mobile, and rebuilt the appointment booking form with elevated dark inputs, gold borders, and high contrast.
6. **Phase 6 — Brand Simplification & Alignment:**  
   Eliminated confusing foreign French/Latin jargon (e.g. *“Maison Aura”*, *“Haute Coiffure”*, *“Aurelia”*, *“Atelier Eleven”*). Standardized all 6 demos to match recognizable Indian industry brand models (*Aura Salon & Spa*, *Care Dental & Skin Clinic*, *Prime Estates*, *Studio Eleven*).
7. **Phase 7 — Canonical Workspace Unification:**  
   Replaced scratch duplicate folders with a clean direct symlink to the canonical developer repository, establishing a single source of truth for seamless pairing between Codex and Antigravity IDE.
8. **Phase 8 — Demo Thumbnail & Brand Visual Consistency (Completed):**  
   Re-captured all 6 high-resolution (2160×1350 WebP) demo preview thumbnails (`assets/shots/`) using headless Playwright CDP capture. All mockup frames across the main portfolio homepage now render the exact synchronized brand titles (*Care Dental & Skin Clinic*, *Aura Salon & Spa*, *Prime Estates*, *Studio Eleven*, *Studio Vows*, *Malcha Table*).

---

## 6. Current Status & What We Are Dealing With Right Now

### ✅ What is Completed & Fully Working
- [x] **Canonical File Structure:** Zero duplicate files. All AI tools point to `/Users/vardan/Developer/personal/03-Experiments/south-delhi-web-studio/`.
- [x] **Production Deployment:** Live on Vercel at `https://south-delhi-web-studio.vercel.app/` with HTTP 200 on all routes.
- [x] **Showcase Hub Consistency:** All case cards, interactive category tabs, chrome URLs, and copy match the demo websites 100%.
- [x] **Salon Demo Overhaul:** `demos/salon/` now renders cleanly on mobile (375px) with high-contrast form fields, legible white text, custom dropdown chevrons, and zero header overlap.
- [x] **Mockup Thumbnail Synchronization:** Re-rendered all 6 live browser mockup screenshots in `assets/shots/` with updated logos, headlines, and domain URLs.

### 🟡 In-Flight Tasks (Immediate Next Steps)
1. **Systematic Mobile Optimization Across Remaining Demos:**
   - Audit and tune mobile viewports (375px iPhone SE and 390px iPhone 14/15) for:
     - `demos/clinic/` (Care Dental & Skin Clinic)
     - `demos/restaurant/` (Malcha Table)
     - `demos/real-estate/` (Prime Estates)
     - `demos/interior/` (Studio Eleven)
     - `demos/events/` (Studio Vows)
   - Ensure every demo has touch-friendly inputs (>= 48px), high-contrast labels, no horizontal scrollbars, and floating WhatsApp buttons positioned safely away from CTAs.
2. **Automated Visual Regression Suite:**
   - Run `scripts/audit.mjs` to capture and compare before/after screenshots across mobile, tablet, and desktop viewports.

---

## 7. Developer Quick Commands Reference

```bash
# Canonical Repository Path
cd /Users/vardan/Developer/personal/03-Experiments/south-delhi-web-studio

# Start Local Dev Server (Port 8088)
python3 -m http.server 8088

# Run Mobile Screenshot Audit (Playwright)
node scripts/screenshot-salon-phone.mjs
node scripts/screenshot-salon-fields.mjs

# Deploy to Vercel Production
npx vercel --prod --yes
```
