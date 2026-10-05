import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = '/Users/vardan/.gemini/antigravity-ide/brain/6d2465d6-a05f-4952-baba-a01f84bbd4fe/qa-shots-v2';
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Scroll through the entire page smoothly to trigger all IntersectionObservers
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 50);
    });
  });
  await page.waitForTimeout(800);

  // Helper to scroll and screenshot
  const shoot = async (sel, name) => {
    const el = await page.$(sel);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await el.screenshot({ path: path.join(outDir, name) });
    }
  };

  await shoot('#top', 'desk-hero.png');
  await shoot('#services', 'desk-services.png');
  await shoot('#showcase', 'desk-showcase.png');
  await shoot('.visual-statement', 'desk-statement.png');
  await shoot('#work', 'desk-portfolio.png');
  await shoot('#beyond', 'desk-beyond.png');
  await shoot('#pricing', 'desk-pricing.png');
  await shoot('#contact', 'desk-contact.png');

  // Mobile viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 50);
    });
  });
  await page.waitForTimeout(800);

  await shoot('#top', 'mob-hero.png');
  await shoot('#services', 'mob-services.png');
  await shoot('#showcase', 'mob-showcase.png');
  await shoot('#work', 'mob-portfolio.png');

  await browser.close();
  console.log('Scroll-triggered QA screenshots captured successfully!');
})();
