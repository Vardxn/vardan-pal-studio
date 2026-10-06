import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });

await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);

const heroStats = page.locator('.hero-stats-row');
await heroStats.screenshot({ path: 'audit-shots/rupee-icon.png' });
console.log('Saved audit-shots/rupee-icon.png');

await browser.close();
