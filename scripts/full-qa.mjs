import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:8088';

const ROUTES = [
  { name: 'home', path: '/' },
  { name: '404', path: '/404.html' },
  { name: 'salon', path: '/demos/salon/' },
  { name: 'clinic', path: '/demos/clinic/' },
  { name: 'restaurant', path: '/demos/restaurant/' },
  { name: 'real-estate', path: '/demos/real-estate/' },
  { name: 'interior', path: '/demos/interior/' },
  { name: 'events', path: '/demos/events/' }
];

const VIEWPORTS = [
  { width: 320, height: 900, name: '320' },
  { width: 375, height: 900, name: '375' },
  { width: 390, height: 900, name: '390' },
  { width: 430, height: 900, name: '430' },
  { width: 768, height: 900, name: '768' },
  { width: 1024, height: 900, name: '1024' },
  { width: 1440, height: 900, name: '1440' }
];

const fullReport = {
  timestamp: new Date().toISOString(),
  environment: {
    node: process.version,
    baseUrl: BASE_URL,
    totalRoutes: ROUTES.length,
    totalViewports: VIEWPORTS.length,
    totalMatrixTests: ROUTES.length * VIEWPORTS.length
  },
  results: [],
  summary: {
    passed: 0,
    failed: 0,
    overflowIssues: [],
    consoleErrors: [],
    failedRequests: [],
    touchTargetIssues: [],
    labelIssues: [],
    imageIssues: []
  }
};

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
});

console.log(`Starting Full QA Matrix: ${ROUTES.length} routes x ${VIEWPORTS.length} viewports = ${ROUTES.length * VIEWPORTS.length} runs`);

for (const route of ROUTES) {
  const routeDir = path.join('audit-shots', 'full-qa', route.name);
  fs.mkdirSync(routeDir, { recursive: true });

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2
    });

    const consoleErrors = [];
    const failedRequests = [];
    let pageTitle = '';
    let hasMetaDesc = false;

    page.on('console', msg => {
      // Capture error types, exclude harmless migrator log
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', err => {
      consoleErrors.push(`PageError: ${err.message}`);
    });

    page.on('requestfailed', req => {
      // ignore aborts on navigation
      const failure = req.failure();
      if (failure && !failure.errorText.includes('ERR_ABORTED')) {
        failedRequests.push({ url: req.url(), error: failure.errorText });
      }
    });

    let httpStatus = 0;
    try {
      const res = await page.goto(BASE_URL + route.path, { waitUntil: 'networkidle', timeout: 15000 });
      httpStatus = res ? res.status() : 0;
    } catch (navErr) {
      // Retry once with domcontentloaded if networkidle timed out
      try {
        const res = await page.goto(BASE_URL + route.path, { waitUntil: 'domcontentloaded', timeout: 10000 });
        httpStatus = res ? res.status() : 0;
      } catch (e2) {
        httpStatus = 500;
        consoleErrors.push(`Navigation failed: ${e2.message}`);
      }
    }

    await page.evaluate(() => document.fonts.ready).catch(() => {});
    await page.waitForTimeout(250);

    // Metadata
    const metaInfo = await page.evaluate(() => {
      const title = document.title || '';
      const descEl = document.querySelector('meta[name="description"]');
      const desc = descEl ? descEl.getAttribute('content') : '';
      return { title, hasMetaDesc: !!desc && desc.trim().length > 0, desc };
    });
    pageTitle = metaInfo.title;
    hasMetaDesc = metaInfo.hasMetaDesc;

    // Check Horizontal Overflow
    const overflowInfo = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const hasOverflow = scrollW > innerW + 1;
      let culprits = [];
      if (hasOverflow) {
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > innerW + 1) {
            culprits.push({
              tag: el.tagName,
              id: el.id,
              class: el.className,
              rectRight: Math.round(rect.right),
              innerW
            });
          }
        });
      }
      return { scrollW, innerW, hasOverflow, culprits: culprits.slice(0, 5) };
    });

    // Images check (missing assets, alt text, overflow)
    const imageInfo = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll('img')];
      const issues = [];
      imgs.forEach(img => {
        const naturalW = img.naturalWidth;
        const complete = img.complete;
        const alt = img.getAttribute('alt');
        const src = img.getAttribute('src');

        // Check broken image
        if (complete && naturalW === 0 && src && !src.startsWith('data:')) {
          issues.push({ type: 'broken-image', src, alt });
        }
        // Missing alt attribute
        if (alt === null) {
          issues.push({ type: 'missing-alt-attr', src });
        }
      });
      return { totalImages: imgs.length, issues };
    });

    // Form labels check
    const formLabelInfo = await page.evaluate(() => {
      const fields = [...document.querySelectorAll('input, select, textarea')];
      const unlabelled = [];
      fields.forEach(f => {
        // ignore hidden fields
        if (f.type === 'hidden' || f.style.display === 'none') return;
        const id = f.id;
        const ariaLabel = f.getAttribute('aria-label');
        const ariaLabelledBy = f.getAttribute('aria-labelledby');
        let hasLabel = false;
        if (ariaLabel || ariaLabelledBy) hasLabel = true;
        if (id && document.querySelector(`label[for="${id}"]`)) hasLabel = true;
        if (f.closest('label')) hasLabel = true;

        if (!hasLabel) {
          unlabelled.push({
            tag: f.tagName,
            type: f.type,
            name: f.name,
            id: f.id,
            placeholder: f.placeholder
          });
        }
      });
      return { totalFields: fields.length, unlabelled };
    });

    // Touch targets check (for viewports <= 430px)
    const touchIssues = [];
    if (vp.width <= 430) {
      const touchData = await page.evaluate(() => {
        const issues = [];
        const targets = document.querySelectorAll('button, a, input, select, textarea, summary, [role="button"]');
        targets.forEach(el => {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;
          // check if in realistic interactable zone
          if (rect.top > 4000) return;
          const isInline = el.tagName === 'A' && style.display === 'inline';
          if (!isInline && (rect.width < 44 || rect.height < 44)) {
            issues.push({
              tag: el.tagName,
              id: el.id,
              class: (el.className || '').toString().slice(0, 40),
              text: (el.textContent || el.value || '').trim().slice(0, 25),
              width: Math.round(rect.width),
              height: Math.round(rect.height)
            });
          }
        });
        return issues;
      });
      touchIssues.push(...touchData);
    }

    // Save screenshot
    const screenshotPath = path.join(routeDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    const isPass = (
      (httpStatus === 200 || (route.name === '404' && (httpStatus === 200 || httpStatus === 404))) &&
      !overflowInfo.hasOverflow &&
      consoleErrors.length === 0 &&
      failedRequests.length === 0 &&
      imageInfo.issues.length === 0 &&
      formLabelInfo.unlabelled.length === 0 &&
      touchIssues.length === 0
    );

    if (isPass) {
      fullReport.summary.passed++;
    } else {
      fullReport.summary.failed++;
      if (overflowInfo.hasOverflow) {
        fullReport.summary.overflowIssues.push({ route: route.name, viewport: vp.name, ...overflowInfo });
      }
      if (consoleErrors.length > 0) {
        fullReport.summary.consoleErrors.push({ route: route.name, viewport: vp.name, errors: consoleErrors });
      }
      if (failedRequests.length > 0) {
        fullReport.summary.failedRequests.push({ route: route.name, viewport: vp.name, failed: failedRequests });
      }
      if (touchIssues.length > 0) {
        fullReport.summary.touchTargetIssues.push({ route: route.name, viewport: vp.name, issues: touchIssues });
      }
      if (formLabelInfo.unlabelled.length > 0) {
        fullReport.summary.labelIssues.push({ route: route.name, viewport: vp.name, fields: formLabelInfo.unlabelled });
      }
      if (imageInfo.issues.length > 0) {
        fullReport.summary.imageIssues.push({ route: route.name, viewport: vp.name, issues: imageInfo.issues });
      }
    }

    const testEntry = {
      route: route.name,
      path: route.path,
      viewport: vp.name,
      dimensions: `${vp.width}x${vp.height}`,
      httpStatus,
      pageTitle,
      hasMetaDesc,
      hasOverflow: overflowInfo.hasOverflow,
      scrollWidth: overflowInfo.scrollW,
      innerWidth: overflowInfo.innerW,
      consoleErrorsCount: consoleErrors.length,
      failedRequestsCount: failedRequests.length,
      touchIssuesCount: touchIssues.length,
      labelIssuesCount: formLabelInfo.unlabelled.length,
      imageIssuesCount: imageInfo.issues.length,
      screenshot: screenshotPath,
      passed: isPass
    };

    fullReport.results.push(testEntry);
    process.stdout.write(isPass ? '.' : 'F');

    await page.close();
  }
}

console.log('\nMatrix tests complete.');
console.log(`Passed: ${fullReport.summary.passed} / ${fullReport.results.length}`);
console.log(`Failed: ${fullReport.summary.failed}`);

fs.writeFileSync('scripts/full-qa-results.json', JSON.stringify(fullReport, null, 2));
console.log('Saved scripts/full-qa-results.json');
await browser.close();
