---
name: Vardan Pal Studio (homepage)
description: A red-cloth bahi-khata ledger opened on the desk; ruled paper, hand-written notes, violet stamps, one yellow cord.
colors:
  cloth: "#a3121c"
  cloth-deep: "#7d0d16"
  cloth-dark: "#5c0910"
  on-cloth: "#f7ead6"
  on-cloth-soft: "#edd3bf"
  paper: "#eef1e4"
  paper-edge: "#dfe3d2"
  ink: "#17161a"
  ink-soft: "#3f3d45"
  rule: "#3a63b8"
  margin: "#b3221f"
  stamp: "#5b3a8c"
  cord: "#e8b31c"
  whatsapp: "#25d366"
  whatsapp-ink: "#0b2912"
typography:
  display:
    fontFamily: "Anek Latin, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Anek Latin, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Anek Latin, Segoe UI, system-ui, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Anek Latin, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  hand:
    fontFamily: "Kalam, Segoe Print, cursive"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.45
  stamp:
    fontFamily: "Anek Latin, Segoe UI, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  sharp: "3px"
  stamp: "6px"
  mark: "8px"
spacing:
  row: "1.5rem"
  gutter: "clamp(16px, 4vw, 56px)"
  page-pad-x: "clamp(20px, 4.4vw, 64px)"
  page-pad-left: "clamp(40px, 6vw, 92px)"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.sharp}"
    height: "52px"
    padding: "0 1.5rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    height: "52px"
    padding: "0 1.5rem"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    height: "52px"
  nav-whatsapp:
    backgroundColor: "{colors.on-cloth}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    height: "44px"
    padding: "0 16px"
  stamp:
    textColor: "{colors.stamp}"
    rounded: "{rounded.stamp}"
    typography: "{typography.stamp}"
    padding: "0.45em 0.8em 0.35em"
---

# Design System: Vardan Pal Studio (homepage)

Scope: this records the homepage only (`index.html`, styled by `assets/css/bahi.css`, with `assets/js/bahi.js`). The six concept demos, 404, privacy and terms still use `assets/css/premium.css` and keep the older ivory / charcoal / champagne-gold system. Do not apply the tokens below to those pages, and do not back-port the old ones here.

## Overview

**Creative North Star: "The Open Bahi-Khata"**

The page is a red cloth-bound ledger opened on a desk. The viewport ground is cloth with a faint diagonal weave; on it sit ruled paper pages with a double red margin line, blue ruling, hand-written marginalia, violet rubber stamps, and a single yellow cord stitched down the gutter. Everything that is information is set in a clean, heavy sans; everything that is "written by a person" is in a handwriting face. Entries, rates and enquiries are literally ledger rows.

Density is generous but ordered: rows divided by thin blue rules, large confident prices and headings, narrow measures for reading text. Depth is physical (paper on cloth, taped photos, pressed stamps), never glassy or gradient.

**Key Characteristics:**
- Red cloth ground, pale green-grey ruled paper, blue-black ink.
- Two voices: set type (Anek Latin) and pen (Kalam).
- Violet stamps are the only emphasis device; yellow cord is the only bright accent.
- Open book spread on desktop (two pages, cord between); single sheets or stacked pages below 1100px.
- Reduced-motion respected: all transitions collapse to near zero.

## Colors

A saturated cloth red as ground, a cool pale paper as the working surface, ink-blue ruling, and two small spot colours (violet stamp, yellow cord).

### Primary
- **Bahi Cloth Red** (cloth): the page ground, hero headline emphasis (`h1 em`), arrow links such as the entry "go" cue, and hover colour on FAQ questions.
- **Deep Cloth** (cloth-deep): scrolled and mobile nav background, mobile menu panel, the divider between stacked pages.
- **Binding Dark** (cloth-dark): scrollbar thumb only.

### Secondary
- **Stamp Violet** (stamp): stamps, the success badge, and one hand-written side note per ledger row. Always rotated, always multiplied into the paper.
- **Ruling Blue** (rule): ledger rules, double-rule totals, hand-written links and notes, form underlines, tick marks, and focus outline inside paper.

### Tertiary
- **Cord Yellow** (cord): the cord down the gutter (striped with a darker `#c9950f`), selection highlight, focus outline on cloth, nav active underline, and washi tape on pasted photos (at 55% alpha). Never a fill for large areas or buttons.

### Neutral
- **Ledger Paper** (paper) and **Paper Edge** (paper-edge): page surface and page-fold hairline.
- **Ink** (ink) and **Soft Ink** (ink-soft): primary text and secondary text on paper.
- **Margin Red** (margin): the double margin line, entry numbers, hand-written column labels, error states.
- **Cloth Cream** (on-cloth) and **Warm Cream** (on-cloth-soft): text on red cloth.
- **WhatsApp Green** (whatsapp, whatsapp-ink): the floating chat button only, a platform-brand exception.

### Named Rules
**The Cloth-and-Paper Rule.** Text on cloth is cream; text on paper is ink or ruling blue. Never put ink on cloth or cream on paper.
**The One Cord Rule.** Yellow appears as a thread, tape, highlight or focus ring, never as a surface.
**The Stamp Is Emphasis Rule.** Emphasis is a violet stamp or a cloth-red word, not bold colour blocks.

## Typography

**Display / UI Font:** Anek Latin (weights 400-800; fallback Segoe UI, system-ui, sans-serif), loaded from Google Fonts.
**Hand Font:** Kalam (400, 700; fallback Segoe Print, cursive), loaded from Google Fonts.

**Character:** Anek Latin at weight 800 gives headings the authority of a printed ledger ruling; Kalam supplies the clerk's pen. Tabular numerals are on globally so prices and counts align in columns.

### Hierarchy
- **Display** (800, clamp 2.5rem to 5rem, 0.98, -0.025em): hero h1 only, balanced wrap.
- **Headline** (800, clamp 2rem to 3.4rem, 1.02, -0.02em): sheet and spread h2.
- **Title** (700-800, 1.2rem to 1.75rem, ~1.1): entry names, rate names (1.6rem), ledger row titles, process step titles.
- **Body** (400, 1.0625rem, 1.55): paragraphs; lede paragraphs up to 1.3rem; reading measure capped at 34-62ch.
- **Hand** (Kalam 400/700, 1.05rem to 1.2rem): run-heads, hand-notes, column labels, "from" captions, links like the secondary hero link, signature (2.2rem, rotated -3deg).
- **Stamp** (800, 0.8rem to 1.35rem, 0.1em tracking, uppercase): stamps only.

### Named Rules
**The Two Voices Rule.** Set type states facts; Kalam annotates them. Do not set body paragraphs or headings in Kalam, and do not set annotations in Anek.
**The Uppercase-Is-A-Stamp Rule.** Tracked uppercase exists only inside a stamp.

## Layout

Page container is up to 1360px wide (`min(1360px, 100% - 2*gutter)`); the book is a two-column grid with the cord at 50%; lower "sheets" are single pages up to 1240px, and the process/founder "spread" is a second two-page book. Left page padding is large (40-92px) to leave room for the margin line; right padding is 20-64px. At 1099px and below the book and spread collapse to one column, the cord disappears, taped photos are hidden, and entry rows add a larger thumbnail column. At 900px the nav becomes a cloth-deep drop panel with a 48px toggle. At 640px page padding tightens (34px left, 18px right) and rates, ledger rows and the form go single column.

Rhythm is the 1.5rem ledger row (paper ruling every 36px, offset 14px). Content blocks sit on clean paper so ruling never cuts through set text (text containers get a solid paper background). Touch targets are at least 44px (buttons 52px, inputs 48px, FAQ rows 64px). Do not hide overflow to fix layout; fix the cause.

## Elevation & Depth

Physical, not digital. The book and sheets lie on the cloth with one long soft drop shadow (`0 34px 60px -24px rgba(0,0,0,0.55)` for the book, `0 30px 50px -26px rgba(0,0,0,0.5)` for sheets and spread). Page folds are inset gradients at the gutter (`inset +-26px 0 30px -26px rgba(0,0,0,0.22)`). Pasted photos and thumbnails sit on a hairline shadow (`0 1px 2px rgba(23,22,26,0.28)`) with a white mat. The floating WhatsApp button has one ambient shadow. Buttons have no shadow.

### Named Rules
**The Paper-On-Cloth Rule.** Shadows are soft, long and directionless; no hard offset shadows and no glow.

## Shapes

Almost square. Buttons and the nav action are 3px, stamps 6px with a 3px solid border, the brand mark 8px, the WhatsApp button a circle. Pasted photos and thumbnails are slightly rotated (±1.2 to ±3deg) with a white mat. Form fields have no box: a 1.5px ruling-blue underline only. Consent box is a dashed ruling-blue border. Double rules (3px double) close runheads, totals and the price footer.

## Components

### Buttons
- **Shape:** 3px corners, 52px min height, 2px border, 700 weight at 1.0625rem.
- **Ink (primary):** ink fill, white text; hover goes to pure black.
- **Line:** transparent, ink border and text; hover fills with ink and white text.
- **Paper:** paper fill, ink text (on cloth).
- **States:** 1px press (`translateY(1px)`), 0.6 opacity while disabled; focus ring is 3px cord on cloth and 3px ruling blue on paper, offset 3px.

### Stamps
Violet text, 3px border, 6px radius, multiply blend, rotated (default -6deg, tilt variant 5deg). On scroll they "press" in (0.42s, scale 1.6 to 1, expo-out). Rate-tier stamps sit on the top right corner of a rate row.

### Ledger entries (demo list)
Numbered rows: hand-written margin-red number, bold name with soft-ink sub line, rotated thumbnail, arrow cue. Hovering or focusing one highlights it with cord at 24% and swaps the pasted preview on the right page; siblings dim to 75% opacity on desktop only.

### Rate rows
One row per tier: name and hand-written timing, tick list in two columns, right-aligned large price with a "from" hand caption and a full-width button. Tiers with a badge carry a stamp.

### Inputs / Fields
Underline-only fields (48px min height, 1.1rem Anek), hand-written margin-red labels above. Focus: border and shadow go ink with a faint blue wash. Error: margin-red text/border on a 6% red wash. Selects use a custom ruling-blue chevron.

### Navigation
Sticky on cloth, cream text, transparent at top and cloth-deep once scrolled. Links are 600 weight with a 2px cord underline on hover/active. A cream "WhatsApp" action sits at right; below 900px it moves into the drop panel under a 48px bordered toggle.

### FAQ
Native details/summary rows, 64px min height, bold questions, a margin-red plus icon that rotates 45deg when open.

## Do's and Don'ts

### Do:
- **Do** keep text on a solid paper surface so the ruling shows only in margins and blank space.
- **Do** write annotations in Kalam in ruling blue or margin red, at 1.05rem or larger.
- **Do** use rotation only on physical objects: stamps, photos, thumbnails, signature.
- **Do** keep motion short (0.12 to 0.42s) and honour `prefers-reduced-motion`.
- **Do** keep 44px minimum targets and a visible focus ring tuned to the surface it sits on.

### Don't:
- **Don't** use gradients as decoration; the only gradients are the cloth weave, the cord stripe, paper ruling and fold shading.
- **Don't** use hard offset shadows, glassmorphism or glows.
- **Don't** use cord yellow as a button or panel fill.
- **Don't** use the ivory/champagne-gold/charcoal or Cormorant Garamond system of premium.css on this homepage.

Not canonized (defects the build carries, not rules): `.signature` relies on `!important` to override `.founder p` colour; `.entry-n` and the other Kalam notes at 0.95 to 1.05rem are small for a handwriting face; the `.entries { counter-reset: none }` and unused `@keyframes spin` are dead code.
