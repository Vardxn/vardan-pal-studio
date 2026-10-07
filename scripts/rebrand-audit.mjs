import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});

async function capture(width, height, prefix) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 2
  });

  await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  // Check for any visible text with "Kailash"
  const visibleKailash = await page.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const matches = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement && getComputedStyle(node.parentElement).display !== 'none' && getComputedStyle(node.parentElement).visibility !== 'hidden') {
        if (/kailash/i.test(node.textContent)) {
          matches.push({
            text: node.textContent.trim(),
            tag: node.parentElement.tagName,
            cls: node.parentElement.className
          });
        }
      }
    }
    return matches;
  });

  console.log(`[${prefix}] Visible 'Kailash' count on rendered page: ${visibleKailash.length}`);
  if (visibleKailash.length > 0) {
    console.log(JSON.stringify(visibleKailash, null, 2));
  }

  // Screenshot Top (Header & Hero)
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `audit-shots/${prefix}-top.png`, clip: { x: 0, y: 0, width, height: Math.min(height, 800) } });

  // Screenshot Footer
  const footer = await page.$('footer.footer');
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await footer.screenshot({ path: `audit-shots/${prefix}-footer.png` });
  }

  await page.close();
}

console.log('Running rebrand visual audit...');
await capture(1440, 900, 'rebrand-desktop-1440');
await capture(390, 844, 'rebrand-mobile-390');

await browser.close();
console.log('Audit completed successfully!');
