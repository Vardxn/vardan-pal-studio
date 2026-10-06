import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });

await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
await page.locator('#contact').scrollIntoViewIfNeeded();
await page.waitForTimeout(400);

// Focus or click the select
await page.locator('select[name="goal"]').focus();
// Capture options text
const options = await page.$$eval('select[name="goal"] option', opts => opts.map(o => o.text));
console.log('Goal Options:', options);

const industryOptions = await page.$$eval('select[name="type"] option', opts => opts.map(o => o.text));
console.log('Industry Options:', industryOptions);

await browser.close();
