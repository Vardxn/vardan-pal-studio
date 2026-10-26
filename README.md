# Vardan Pal Studio — Master Repository & Blueprint

> **Independent Quiet-Luxury Web Design & Development Studio · New Delhi, India**  
> Serving clinics, salons, fine-dining restaurants, real estate, interior studios, and event creators across India.  
> **Live Production URL:** [https://vardxn.com](https://vardxn.com)  
> **Founder Portfolio:** [https://vardxn.vercel.app](https://vardxn.vercel.app)  
> **WhatsApp Helpline:** [+91 82796 96707](https://wa.me/918279696707) | **Email:** `vardan2701@gmail.com`

---

## 📖 Definitive Master Documentation
The single, authoritative source of truth for this entire project — containing the full 16-phase history, approved pricing system, Google Ads setup, 6 client demos, architecture, and complete QA matrices — is consolidated in:

👉 **[VARDAN_PAL_STUDIO_MASTER.md](./VARDAN_PAL_STUDIO_MASTER.md)**

---

## 🚀 Quick Local Development
```bash
# Start local development server on port 8088
python3 -m http.server 8088
```
- Studio Hub: [http://localhost:8088/](http://localhost:8088/)
- Concept Demos: [http://localhost:8088/demos/salon/](http://localhost:8088/demos/salon/), [clinic/](http://localhost:8088/demos/clinic/), [restaurant/](http://localhost:8088/demos/restaurant/), [real-estate/](http://localhost:8088/demos/real-estate/), [interior/](http://localhost:8088/demos/interior/), [events/](http://localhost:8088/demos/events/)

---

## 🧪 Developer QA Test Suite
```bash
export PATH="/Users/vardan/.local/node-v20.18.0-darwin-arm64/bin:$PATH"
node scripts/full-qa.mjs                     # 63-run responsive audit (Pass: 63/63)
node scripts/verify-direct-demo-navigation.mjs # 14-run same-tab navigation (Pass: 14/14)
node scripts/test-tracking.mjs                # 11-run conversion tracking (Pass: 11/11)
node scripts/test-contact-api.mjs             # 28-run API failure tests (Pass: 28/28)
node scripts/rebrand-audit.mjs                # 10-run rebrand audit (Pass: 10/10)
```

---

## 🚢 Push & Automatic Vercel Deployment
```bash
git push -u origin main
```
*Pushing to `main` automatically triggers an instant build and deployment on Vercel at `https://vardxn.com`.*
