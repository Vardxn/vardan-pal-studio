import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

await page.goto('http://localhost:8088/demos/salon/', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

await page.screenshot({ path: 'audit-shots/salon-phone-before.png', fullPage: false });
console.log('Saved salon-phone-before.png');

await browser.close();
