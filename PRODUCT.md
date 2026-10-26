# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Owners of local Indian businesses (clinics, salons and spas, fine-dining restaurants, real-estate brokerages, interior studios, wedding and event creators) deciding whether to hire a studio for their website. They arrive about equally from two places: a personal WhatsApp or DM pitch from Vardan, where they tap a link on their phone to judge whether he is credible; and Google search or ads, where they are comparing website designers in Delhi or India. Most visits are on a phone.

## Product Purpose
Vardan Pal Studio is an independent web design and development studio in New Delhi that builds fast, custom websites with WhatsApp-first enquiry flows for local businesses across India. The site exists to turn an owner's visit into a WhatsApp conversation or an enquiry form submission. Success is a qualified enquiry that names the business type and package.

## Positioning
Live, clickable concept websites built for the visitor's own industry: before paying anything, an owner can open a working salon, clinic, restaurant, real-estate, interior or wedding site and use it. A cheap freelancer shows screenshots; an agency shows a deck. This studio shows the thing itself. Supporting it: fixed public rupee pricing, 5 to 14 day delivery, one-tap WhatsApp enquiries for the client's customers, and direct work with the founder-engineer.

## Operating Context
- Owners open the link from WhatsApp, often mid-workday, on mid-range Android phones and iPhones.
- Each concept demo lives at `/demos/<industry>/` and is opened in the same tab, with a 48px context bar and scroll restoration back to the homepage.
- Enquiries go to a pre-filled WhatsApp message (`wa.me/918279696707`) or the form posting to `api/contact.js`.
- Conversion events (`lead_submit`, `whatsapp_click`, `demo_open`, `pricing_cta`) are tracked without PII by `assets/js/tracking.js`.

## Capabilities and Constraints
- Stack: plain HTML5, CSS3 and vanilla JS with no framework and no build step; Vercel static hosting plus one serverless function (`api/contact.js`). No new frameworks or build tooling.
- Pricing (approved, do not change unless asked): Launch from ₹9,900 (5-day typical, 1 revision, 15 days support); Business from ₹19,900, most popular (7-day, 2 revisions, 30 days); Signature from ₹34,900 (10 to 14 days, 3 revisions, 60 days); Custom Systems quoted after discovery.
- Never promise guaranteed rankings, guaranteed leads, a free CMS, unlimited revisions or unlimited support.
- Never claim a physical office outside New Delhi; service is remote across India.
- The demos are fictional concept projects and must never be presented as live clients.
- Tracking hooks, form IDs (`#enquireForm`), demo routes and the QA scripts in `scripts/` must keep working.
- The 6 concept demos are out of scope for homepage redesigns.

## Brand Commitments
- Name: Vardan Pal Studio. Mark: the VP monogram (`assets/logo.svg`, `assets/favicon.svg`).
- Only the name and monogram are binding. The current palette (ivory, stone, charcoal, champagne gold), typefaces (Cormorant Garamond, Plus Jakarta Sans) and "quiet luxury" styling are free to replace (confirmed by the founder on 2026-10-26).
- Approved proof phrases: mobile-first development, direct founder communication, WhatsApp enquiry integration, Core Web Vitals optimisation, transparent scope and pricing.

## Evidence on Hand
- 6 working concept demos under `demos/` plus preview shots in `assets/shots/` (`salon.webp`, `clinic.webp`, `restaurant.webp`, `real-estate.webp`, `interior.webp`, `events.webp`, and others).
- Branding assets in `assets/branding/` and `assets/og.png`.
- Founder: Vardan Pal, software engineer, B.Tech IT from NIT Srinagar. Portfolio at https://vardxn.vercel.app.
- No paying-client case studies, testimonials, client logos or performance numbers yet. Do not invent any.

## Product Principles
1. Show, don't tell: the working demo is the proof; every page path should lead into one.
2. One tap to talk: WhatsApp is the primary action and is never more than a thumb away on mobile.
3. Honest scope: public prices, stated timelines and revision limits, no inflated claims.
4. Phone first: the WhatsApp-link visitor on a phone is the hardest case and sets the bar.

## Accessibility & Inclusion
Touch targets of at least 44px, WCAG AA contrast, 16px minimum form inputs on mobile (no iOS zoom), visible focus states, reduced-motion support. English copy for an Indian audience; prices in ₹ with Indian digit grouping.
