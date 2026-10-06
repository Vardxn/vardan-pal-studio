import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });

await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
await page.locator('#contact').scrollIntoViewIfNeeded();
await page.waitForTimeout(400);

await page.screenshot({ path: 'audit-shots/form-clean.png' });
console.log('Saved audit-shots/form-clean.png');

await browser.close();
