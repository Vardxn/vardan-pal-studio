import { chromium } from 'playwright';
const url = process.argv[2] || 'http://localhost:8088/';
const browser = await chromium.launch();
for (const w of [375, 768, 1440]) {
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
  const r = await page.evaluate(() => ({
    overflowX: document.documentElement.scrollWidth > window.innerWidth,
    hiddenReveals: document.querySelectorAll('.reveal:not(.in)').length,
    showcaseRendered: !!document.querySelector('.showcase-stage .mock'),
    workCards: document.querySelectorAll('.work-card').length,
    wrappedButtons: [...document.querySelectorAll('.btn')].filter(b => b.getBoundingClientRect().height > 60).length
  }));
  await page.screenshot({ path: `audit-${w}.png`, fullPage: true });
  console.log(w, JSON.stringify(r), errors.length ? errors : 'no console errors');
  await page.close();
}
await browser.close();
