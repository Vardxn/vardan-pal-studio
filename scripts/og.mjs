import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(resolve('scripts/og/template.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'assets/og.png' });

await page.setViewportSize({ width: 180, height: 180 });
await page.setContent('<body style="margin:0;width:180px;height:180px;display:grid;place-items:center;background:#1c1b19;color:#f7f4ee;font:400 84px Georgia,serif;letter-spacing:-.02em">VP</body>');
await page.screenshot({ path: 'assets/apple-touch-icon.png' });

await browser.close();
console.log('wrote assets/og.png and assets/apple-touch-icon.png');
