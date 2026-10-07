import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(resolve('scripts/og/template.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'assets/og.png' });

await page.setViewportSize({ width: 180, height: 180 });
await page.setContent('<body style="margin:0;width:180px;height:180px;display:grid;place-items:center;background:#141519;color:#fcfbf9;font:600 90px Georgia,serif;letter-spacing:-.04em">VP</body>');
await page.screenshot({ path: 'assets/apple-touch-icon.png' });

await browser.close();
console.log('Regenerated assets/og.png and assets/apple-touch-icon.png');
