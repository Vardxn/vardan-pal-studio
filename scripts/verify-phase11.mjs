import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});

const viewports = [
  { width: 375, height: 667, name: 'mobile-375' },
  { width: 390, height: 844, name: 'mobile-390' },
  { width: 768, height: 1024, name: 'tablet-768' },
  { width: 1440, height: 900, name: 'desktop-1440' }
];

let allPassed = true;

for (const vp of viewports) {
  const consoleErrors = [];
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2
  });

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  // 1. Check Horizontal Overflow
  const overflow = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  });
  console.log(`[${vp.name}] Overflow: scrollWidth=${overflow.scrollWidth}, innerWidth=${overflow.innerWidth}, hasOverflow=${overflow.hasOverflow}`);
  if (overflow.hasOverflow) {
    console.error(`ERROR: Horizontal overflow detected at ${vp.name}`);
    allPassed = false;
  }

  // 2. Check Console Errors
  console.log(`[${vp.name}] Console errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error(`ERROR: Console errors at ${vp.name}:`, consoleErrors);
    allPassed = false;
  }

  // 3. Check Category Tabs Visibility (especially tab 6 "Wedding Photography")
  const tabsInfo = await page.evaluate(() => {
    const tabs = [...document.querySelectorAll('.cat-pill, .tab')];
    return tabs.map(t => ({
      text: t.textContent.trim(),
      width: t.offsetWidth,
      height: t.offsetHeight,
      top: t.offsetTop,
      left: t.offsetLeft,
      visible: t.offsetWidth > 0 && t.offsetHeight > 0
    }));
  });
  const allTabsVisible = tabsInfo.length === 6 && tabsInfo.every(t => t.visible);
  console.log(`[${vp.name}] Category tabs count=${tabsInfo.length}, allVisible=${allTabsVisible}`);
  if (!allTabsVisible) {
    console.error(`ERROR: Tabs not fully visible at ${vp.name}`);
    allPassed = false;
  }

  // 4. Check Floating WhatsApp Button specs & CTA overlap
  const waBtn = await page.evaluate(() => {
    const btn = document.querySelector('.floating-whatsapp-btn');
    if (!btn) return null;
    const rect = btn.getBoundingClientRect();
    const style = getComputedStyle(btn);

    // Check overlap with submit button or cta
    const submitBtn = document.querySelector('#enquireSubmitBtn');
    let overlapsSubmit = false;
    if (submitBtn) {
      const sRect = submitBtn.getBoundingClientRect();
      overlapsSubmit = !(rect.right < sRect.left || rect.left > sRect.right || rect.bottom < sRect.top || rect.top > sRect.bottom);
    }

    return {
      width: rect.width,
      height: rect.height,
      borderRadius: style.borderRadius,
      backgroundColor: style.backgroundColor,
      overlapsSubmit
    };
  });
  console.log(`[${vp.name}] WhatsApp Button:`, waBtn);

  // 5. Check Disclaimers
  const disclaimersCount = await page.evaluate(() => {
    return document.querySelectorAll('.concept-disclaimer').length;
  });
  console.log(`[${vp.name}] Portfolio concept disclaimers count=${disclaimersCount}`);
  if (disclaimersCount !== 6) {
    console.error(`ERROR: Expected 6 concept disclaimers, found ${disclaimersCount}`);
    allPassed = false;
  }

  // Screenshots
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
  await page.screenshot({ path: `audit-shots/${vp.name}-top.png`, clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 750) } });

  const workSec = await page.$('#work');
  if (workSec) {
    await workSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await page.screenshot({ path: `audit-shots/${vp.name}-work.png`, clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 800) } });
  }

  const showcaseSec = await page.$('#showcase');
  if (showcaseSec) {
    await showcaseSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await page.screenshot({ path: `audit-shots/${vp.name}-showcase.png`, clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 800) } });
  }

  const contactSec = await page.$('#contact');
  if (contactSec) {
    await contactSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await page.screenshot({ path: `audit-shots/${vp.name}-contact.png`, clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 800) } });
  }

  await page.close();
}

// 6. Check Anchor Links
const pageAnchor = await browser.newPage();
await pageAnchor.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
const anchors = await pageAnchor.evaluate(() => {
  const links = [...document.querySelectorAll('a[href^="#"]')];
  return links.map(a => {
    const href = a.getAttribute('href');
    const target = href === '#' || href === '#top' ? document.body : document.querySelector(href);
    return {
      href,
      text: a.textContent.trim(),
      exists: !!target
    };
  });
});
console.log(`Total on-page anchors checked: ${anchors.length}`);
const brokenAnchors = anchors.filter(a => !a.exists);
if (brokenAnchors.length > 0) {
  console.error('ERROR: Broken anchors found:', brokenAnchors);
  allPassed = false;
} else {
  console.log('All anchor links resolve to valid targets on page!');
}

// 7. Print-to-PDF Test
console.log('Generating print PDF...');
const printPage = await browser.newPage();
await printPage.goto('http://localhost:8088/', { waitUntil: 'networkidle' });
await printPage.evaluate(() => document.fonts.ready);
await printPage.pdf({
  path: 'audit-shots/homepage-print.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
});
console.log('Generated audit-shots/homepage-print.pdf cleanly!');
await printPage.close();

await browser.close();

if (allPassed) {
  console.log('SUCCESS: All Phase 11 verifications passed perfectly!');
} else {
  console.error('FAILED: Some verifications did not pass.');
  process.exit(1);
}
