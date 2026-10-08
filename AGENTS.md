# AGENTS.md — Vardan Pal Studio

## Project
Static marketing site + 6 concept demo sites for Vardan Pal Studio (independent web design & development studio, New Delhi, serving businesses across India). Plain HTML5/CSS3/vanilla JS, no framework, no build step. Serverless contact API in api/contact.js (Vercel).

## Commands
- Serve: python3 -m http.server 8088
- QA: node scripts/full-qa.mjs ; node scripts/test-tracking.mjs ; node scripts/verify-direct-demo-navigation.mjs ; node scripts/test-contact-api.mjs ; node scripts/rebrand-audit.mjs
- Deploy: HUMAN ONLY (npx vercel --prod --yes). Agents must never deploy.

## Hard rules
- Never read, print, or commit .env.local or any secrets.
- Do not deploy. Do not change pricing, brand name, or tracking IDs unless the task says so.
- No new frameworks or build tooling.
- No PII in analytics events.
- Never claim a physical office, never mention Bangalore, never use "Kailash" in visible text.
- Commit a checkpoint before and after every task. One logical change per commit.
- Do not hide overflow bugs with overflow-x:hidden; fix the root cause.
- Run the QA scripts after changes and report results honestly, including failures.

## Design system
Ivory #fcfbf9, stone #f5f3ee, charcoal #141519, champagne gold #b58d53 / #c5a880. Fonts: Cormorant Garamond (headings), Plus Jakarta Sans (UI). Quiet-luxury editorial style. No SaaS gradients.

## Brand and pricing (current, approved)
Launch from ₹9,900 · Business from ₹19,900 (most popular) · Signature from ₹34,900 · Custom Systems quoted after discovery.
Revisions 1/2/3, support 15/30/60 days. No promises of rankings, leads, free CMS, or unlimited revisions.
Approved proof phrases: Mobile-first development · Direct founder communication · WhatsApp enquiry integration · Core Web Vitals optimisation · Transparent scope and pricing.

## Contact
WhatsApp +91 82796 96707 (wa.me/918279696707) · vardan2701@gmail.com · portfolio https://vardxn.vercel.app
Production: https://vardanpalstudio.vercel.app

## Demos (fictional concept projects, never "live clients")
demos/salon (Aura Salon & Spa), clinic (Care Dental & Skin Clinic), restaurant (Malcha Table), real-estate (Prime Estates), interior (Studio Eleven), events (Studio Vows).

## Source of truth for history
docs/VARDAN_PAL_STUDIO_MASTER.md and PHASE-16-ABC-COMPLETION-SUMMARY.md
