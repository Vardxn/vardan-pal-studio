import { chromium } from 'playwright';
import fs from 'fs';

const BASE_URL = 'http://localhost:8088';
const ROUTES = [
  { name: 'Hub', path: '/' },
  { name: 'Salon', path: '/demos/salon/' },
  { name: 'Clinic', path: '/demos/clinic/' },
  { name: 'Restaurant', path: '/demos/restaurant/' },
  { name: 'Real Estate', path: '/demos/real-estate/' },
  { name: 'Interior', path: '/demos/interior/' },
  { name: 'Events', path: '/demos/events/' },
];

const VIEWPORTS = [
  { name: 'mobile-375', width: 375, height: 667 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 }
];

const report = {
  routes: {},
  overflow: [],
  consoleErrors: [],
  failedRequests: [],
  touchTargetIssues: [],
  formSubmissions: [],
  linkCrawl: { total: 0, passed: 0, failed: [] },
  brandSweep: [],
  metadata: {},
  accessibility: {},
  performance: {}
};

if (!fs.existsSync('audit-shots')) {
  fs.mkdirSync('audit-shots', { recursive: true });
}

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
});

console.log('=== STARTING COMPREHENSIVE FULL-SITE QA SWEEP ===');

for (const r of ROUTES) {
  report.routes[r.name] = {};
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2
    });

    const consoleErrs = [];
    const failedReqs = [];

    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrs.push(msg.text());
    });
    page.on('pageerror', err => consoleErrs.push(err.message));
    page.on('requestfailed', req => {
      failedReqs.push({ url: req.url(), failure: req.failure()?.errorText });
    });

    const res = await page.goto(BASE_URL + r.path, { waitUntil: 'networkidle' });
    const status = res ? res.status() : 0;
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);

    const overflowInfo = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      let offenders = [];
      if (scrollW > innerW) {
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > innerW + 1) {
            offenders.push({
              tag: el.tagName,
              id: el.id,
              class: el.className,
              rectRight: Math.round(rect.right),
              innerW
            });
          }
        });
      }
      return { scrollW, innerW, hasOverflow: scrollW > innerW, offenders: offenders.slice(0, 5) };
    });

    if (overflowInfo.hasOverflow) {
      report.overflow.push({ route: r.name, viewport: vp.name, ...overflowInfo });
    }

    if (consoleErrs.length > 0) {
      report.consoleErrors.push({ route: r.name, viewport: vp.name, errors: consoleErrs });
    }
    if (failedReqs.length > 0) {
      report.failedRequests.push({ route: r.name, viewport: vp.name, failed: failedReqs });
    }

    report.routes[r.name][vp.name] = {
      status,
      hasOverflow: overflowInfo.hasOverflow,
      consoleErrorsCount: consoleErrs.length,
      failedRequestsCount: failedReqs.length
    };

    // Save screenshots
    if (r.name === 'Hub' && vp.name === 'mobile-375') {
      await page.screenshot({ path: 'audit-shots/qa-home-375.png', fullPage: false });
    }
    if (r.name === 'Hub' && vp.name === 'desktop-1440') {
      await page.screenshot({ path: 'audit-shots/qa-home-1440.png', fullPage: false });
      const founderEl = await page.$('#about');
      if (founderEl) {
        await founderEl.screenshot({ path: 'audit-shots/qa-founder-section.png' });
      }
    }
    if (r.name !== 'Hub' && vp.name === 'mobile-375') {
      const slug = r.name.toLowerCase().replace(/\s+/g, '-');
      await page.screenshot({ path: 'audit-shots/qa-demo-' + slug + '-375.png', fullPage: false });
    }

    // Touch targets check on mobile (375)
    if (vp.name === 'mobile-375') {
      const touchIssues = await page.evaluate(() => {
        const issues = [];
        const targets = document.querySelectorAll('button, a, input, select, textarea, .floating-whatsapp-btn');
        targets.forEach(el => {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;
          if (rect.bottom < 0 || rect.top > 3000) return;
          const isInline = el.tagName === 'A' && style.display === 'inline';
          if (!isInline && (rect.width < 44 || rect.height < 44)) {
            issues.push({
              tag: el.tagName,
              id: el.id,
              class: el.className,
              text: (el.textContent || el.value || '').trim().slice(0, 30),
              width: Math.round(rect.width),
              height: Math.round(rect.height)
            });
          }
        });
        return issues;
      });
      if (touchIssues.length > 0) {
        report.touchTargetIssues.push({ route: r.name, issues: touchIssues });
      }
    }

    await page.close();
  }
}

console.log('Routes and viewports pass completed.');
console.log('Overflow issues:', report.overflow.length);
console.log('Console errors:', report.consoleErrors.length);
console.log('Failed requests:', report.failedRequests.length);

fs.writeFileSync('scripts/qa-raw-report.json', JSON.stringify(report, null, 2));
await browser.close();
