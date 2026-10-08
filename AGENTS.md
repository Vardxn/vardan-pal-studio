# AGENTS.md — Vardan Pal Studio

## Project Identity
Static marketing site + 6 concept demo sites for Vardan Pal Studio (independent web design & development studio, New Delhi, serving businesses across India). Plain HTML5/CSS3/vanilla JS, no framework, no build step. Serverless contact API in api/contact.js (Vercel).

## Master Specification & Single Source of Truth
All project specs, full history, pricing, Google Ads campaigns, and architecture are in:
👉 **[VARDAN_PAL_STUDIO_MASTER.md](./VARDAN_PAL_STUDIO_MASTER.md)**

## Commands
- Serve: `python3 -m http.server 8088`
- QA: `export PATH="/Users/vardan/.local/node-v20.18.0-darwin-arm64/bin:$PATH" && node scripts/full-qa.mjs && node scripts/test-tracking.mjs && node scripts/verify-direct-demo-navigation.mjs && node scripts/test-contact-api.mjs && node scripts/rebrand-audit.mjs`
- Push & Deploy: `git push -u origin main` (triggers automatic build and deploy on Vercel)

## Hard Rules
- Never read, print, or commit `.env.local` or any secrets.
- Do not change pricing, brand name, or tracking IDs unless requested.
- No new frontend frameworks or build tooling. Pure HTML5 / CSS3 / Vanilla JS.
- No PII in analytics events.
- Never claim a physical office outside New Delhi.
- Commit a checkpoint before and after every task.
- Do not hide overflow bugs with `overflow-x:hidden`; fix the root cause.
- Run the QA scripts after changes and report results honestly.

## Design System
Ivory `#fcfbf9`, stone `#f5f3ee`, charcoal `#141519`, champagne gold `#b58d53` / `#c5a880`. Fonts: Cormorant Garamond (headings), Plus Jakarta Sans (UI). Quiet-luxury editorial style. No SaaS gradients.

## Brand and Pricing (Approved)
Launch from ₹9,900 · Business from ₹19,900 (most popular) · Signature from ₹34,900 · Custom Systems quoted after discovery.
Revisions 1/2/3, support 15/30/60 days. No promises of rankings, leads, free CMS, or unlimited revisions.
Approved proof phrases: Mobile-first development · Direct founder communication · WhatsApp enquiry integration · Core Web Vitals optimisation · Transparent scope and pricing.

## Contact
WhatsApp +91 82796 96707 (wa.me/918279696707) · vardan2701@gmail.com · portfolio https://vardxn.vercel.app
Production: https://vardanpalstudio.vercel.app

## Demos (Fictional Concept Projects, Never "Live Clients")
demos/salon (Aura Salon & Spa), clinic (Care Dental & Skin Clinic), restaurant (CHICA — Luxury Dining & Hearth Lounge), real-estate (Prime Estates), interior (Studio Eleven), events (Studio Vows).
