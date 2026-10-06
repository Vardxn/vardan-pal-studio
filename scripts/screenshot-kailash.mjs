import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

await page.screenshot({ path: 'audit-shots/kailash-brand-hero.png', clip: { x: 0, y: 0, width: 1440, height: 600 } });
console.log('Saved audit-shots/kailash-brand-hero.png');

await browser.close();
