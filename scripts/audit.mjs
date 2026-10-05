import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const url = process.argv[2] || 'http://localhost:8088/';
mkdirSync('audit-shots', { recursive: true });
const browser = await chromium.launch();

for (const w of [375, 768, 1024, 1180, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  const errors = [];
  page.on('console', m => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
  const r = await page.evaluate((width) => {
    const nameEl = document.querySelector('.enquire input[name="name"]');
    const selectEl = document.querySelector('.enquire select');
    let formOverlap = false;
    if (nameEl && selectEl) {
      const a = nameEl.getBoundingClientRect();
      const b = selectEl.getBoundingClientRect();
      formOverlap = !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
    }
    const res = {
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
      hiddenReveals: document.querySelectorAll('.reveal:not(.in)').length,
      showcaseRendered: !!document.querySelector('.showcase-stage .mock'),
      workCards: document.querySelectorAll('.work-card').length,
      wrappedButtons: [...document.querySelectorAll('.btn')].filter(b => b.getBoundingClientRect().height > 60).length,
      formOverlap
    };
    if (width === 375) {
      const list = [...document.querySelectorAll('.btn, .tab, button, summary, .nav-links a, .enquire input, .enquire select')];
      res.smallTargets = list.filter(el => {
        const rect = el.getBoundingClientRect();
        const s = window.getComputedStyle(el);
        return s.display !== 'none' && s.visibility !== 'hidden' && rect.height > 0 && rect.height < 44;
      }).length;
    }
    return res;
  }, w);
  await page.screenshot({ path: `audit-shots/audit-${w}.png`, fullPage: true });
  console.log(w, JSON.stringify(r), errors.length ? errors : 'no console errors');
  await page.close();
}
await browser.close();
