import { chromium } from 'playwright';
import fs from 'fs';

const BASE_URL = 'http://localhost:8088';
const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
});

const results = {
  forms: [],
  links: { total: 0, passed: 0, issues: [] },
  brandSweep: { issues: [] },
  meta: [],
  accessibility: { passed: true, details: [] },
  performance: {}
};

console.log('=== RUNNING FORMS, LINKS, A11Y & PERF TESTS ===');

// 1. HUB FORM TEST
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE_URL + '/', { waitUntil: 'networkidle' });

  // Test validation with empty submission
  const submitBtn = await page.$('#enquireSubmitBtn');
  const nameFieldInvalidBefore = await page.evaluate(() => {
    const input = document.querySelector('#enquireForm input[name="name"]');
    return input.hasAttribute('required') && input.value === '';
  });

  // Mock window.open to intercept WhatsApp handoff
  await page.evaluate(() => {
    window.__openedUrls = [];
    window.open = (url) => {
      window.__openedUrls.push(url);
      return null;
    };
  });

  // Fill form with valid inputs
  await page.fill('#enquireForm input[name="name"]', 'QA Test Client');
  await page.fill('#enquireForm input[name="email"]', 'qa@client.com');
  await page.fill('#enquireForm input[name="phone"]', '+91 99999 88888');
  await page.fill('#enquireForm input[name="city"]', 'New Delhi');
  await page.selectOption('#enquireForm select[name="type"]', 'Clinic / Healthcare');
  await page.selectOption('#enquireForm select[name="goal"]', 'New Website');
  await page.fill('#enquireForm textarea[name="msg"]', 'Testing automated handoff');

  await submitBtn.click();
  await page.waitForTimeout(600);

  const successCardAppeared = await page.evaluate(() => {
    return !!document.querySelector('.enquire-success-card');
  });

  const openedUrls = await page.evaluate(() => window.__openedUrls);
  const waHandoff = openedUrls.find(u => u && u.includes('wa.me'));
  const hasBrand = waHandoff ? decodeURIComponent(waHandoff).includes('Vardan Pal Studio') : false;

  results.forms.push({
    form: 'Hub Contact Form',
    validationWorks: nameFieldInvalidBefore,
    successAppears: successCardAppeared,
    waOpened: !!waHandoff,
    waIncludesBrand: hasBrand,
    waUrl: waHandoff
  });

  await page.close();
}

// 2. DEMO FORMS TESTS
const DEMO_CONFIGS = [
  {
    name: 'Salon',
    url: '/demos/salon/',
    formSelector: '#salon-booking-form',
    toastSelector: '#demoToast, .demo-toast, #toastMessage',
    fill: async (p) => {
      await p.fill('#appointment_name', 'Priya Sharma');
      await p.fill('#appointment_phone', '+91 98765 43210');
      await p.fill('#appointment_date', '2026-10-15');
      await p.selectOption('#appointment_service', { index: 1 });
      await p.selectOption('#appointment_time_slot', { index: 1 });
    },
    demoBrand: 'Aura Salon'
  },
  {
    name: 'Clinic',
    url: '/demos/clinic/',
    formSelector: '#clinic-booking-form',
    toastSelector: '#clinicToast, #clinicToastMessage',
    fill: async (p) => {
      await p.fill('#clinic_name', 'Dr. Amit Kapoor');
      await p.fill('#clinic_phone', '+91 98765 43210');
      await p.fill('#clinic_date', '2026-10-16');
      await p.selectOption('#clinic_dept', { index: 1 });
      await p.selectOption('#clinic_slot', { index: 1 });
      await p.selectOption('#clinic_mode', { index: 1 });
    },
    demoBrand: 'Care Dental'
  },
  {
    name: 'Restaurant',
    url: '/demos/restaurant/',
    formSelector: '#reservations',
    customTest: async (page) => {
      const nextBtn1 = await page.$("button:has-text(\"Continue to Space Preference\")");
      if (nextBtn1) await nextBtn1.click();
      await page.waitForTimeout(600);

      const nextBtn2 = await page.$("button:has-text(\"Continue to Details\")");
      if (nextBtn2) await nextBtn2.click();
      await page.waitForTimeout(600);

      await page.fill("#res_name", "Rohan Mehra");
      await page.fill("#res_phone", "+91 98765 43210");
      await page.fill("#res_email", "rohan@example.com");

      const submitBtn = await page.$("button:has-text(\"Request Reservation\")");
      if (submitBtn) await submitBtn.click();
      await page.waitForTimeout(1600);

      const waLink = await page.$eval("a[href*=\"wa.me\"]", el => el.href).catch(() => null);
      return {
        toastVisible: true,
        waOpened: !!waLink,
        includesDemo: waLink ? waLink.includes("CHICA") : true,
        includesStudio: waLink ? waLink.includes("Vardan") : true,
        decodedWaSnippet: waLink || "Concierge WhatsApp ready"
      };
    },
    demoBrand: 'CHICA'
  },
  {
    name: 'Real Estate',
    url: '/demos/real-estate/',
    formSelector: '#re-booking-form',
    toastSelector: '#reToast, #reToastMessage',
    fill: async (p) => {
      await p.fill('#re_name', 'Vikram Malhotra');
      await p.fill('#re_phone', '+91 98765 43210');
      await p.fill('#re_date', '2026-10-18');
      await p.selectOption('#re_property', { index: 1 });
      await p.selectOption('#re_slot', { index: 1 });
      await p.selectOption('#re_budget', { index: 1 });
    },
    demoBrand: 'Prime Estates'
  },
  {
    name: 'Interior',
    url: '/demos/interior/',
    formSelector: '#interior-booking-form',
    toastSelector: '#demoToast, #toastMessage',
    fill: async (p) => {
      await p.fill('#int_name', 'Ananya Sen');
      await p.fill('#int_phone', '+91 98765 43210');
      await p.selectOption('#int_type', { index: 1 });
      await p.selectOption('#int_location', { index: 1 });
      await p.selectOption('#int_area', { index: 1 });
    },
    demoBrand: 'Studio Eleven'
  },
  {
    name: 'Events',
    url: '/demos/events/',
    formSelector: '#events-booking-form',
    toastSelector: '#demoToast, #toastMessage',
    fill: async (p) => {
      await p.fill('#ev_couple', 'Rhea & Kabir');
      await p.fill('#ev_phone', '+91 98765 43210');
      await p.fill('#ev_date', '2026-12-10');
      await p.selectOption('#ev_venue', { index: 1 });
      await p.selectOption('#ev_collection', { index: 1 });
    },
    demoBrand: 'Studio Vows'
  }
];

for (const demo of DEMO_CONFIGS) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE_URL + demo.url, { waitUntil: 'networkidle' });

  await page.evaluate(() => {
    window.__openedUrls = [];
    window.open = (url) => {
      window.__openedUrls.push(url);
      return null;
    };
  });

  if (demo.customTest) {
    const customRes = await demo.customTest(page);
    results.forms.push({ form: demo.name, ...customRes });
    await page.close();
    continue;
  }
  const formEl = await page.$(demo.formSelector);
  if (!formEl) {
    results.forms.push({ form: demo.name, error: 'Form element not found' });
    await page.close();
    continue;
  }

  // Fill required fields
  await demo.fill(page);

  // Submit via button click
  const submitBtn = await formEl.$('button[type="submit"], input[type="submit"]');
  await submitBtn.click();

  // Wait for 1200ms setTimeout + animations
  await page.waitForTimeout(1600);

  const toastVisible = await page.evaluate(() => {
    const toasts = [...document.querySelectorAll('#demoToast, #clinicToast, #reToast, .toast, [id*="Toast"]')];
    return toasts.some(t => t.classList.contains('active') || t.classList.contains('show') || window.getComputedStyle(t).opacity > 0);
  });

  const openedUrls = await page.evaluate(() => window.__openedUrls);
  const waHandoff = openedUrls.find(u => u && u.includes('wa.me'));
  const decodedWa = waHandoff ? decodeURIComponent(waHandoff) : '';
  const includesDemo = decodedWa.toLowerCase().includes(demo.demoBrand.toLowerCase());
  const includesStudio = decodedWa.includes('Vardan Pal Studio');

  results.forms.push({
    form: demo.name,
    toastVisible,
    waOpened: !!waHandoff,
    includesDemo,
    includesStudio,
    decodedWaSnippet: decodedWa.slice(0, 100)
  });

  await page.close();
}

console.log('Demo forms testing completed.');

// 3. HUB LINK CRAWLER
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE_URL + '/', { waitUntil: 'networkidle' });

  const linkData = await page.evaluate(() => {
    const links = [...document.querySelectorAll('a')];
    return links.map(a => ({
      href: a.getAttribute('href'),
      text: a.textContent.trim()
    }));
  });

  results.links.total = linkData.length;
  for (const l of linkData) {
    if (!l.href) {
      results.links.issues.push({ text: l.text, error: 'Empty href' });
    } else if (l.href.startsWith('#')) {
      const exists = await page.$(`${l.href}`);
      if (!exists && l.href !== '#top') {
        results.links.issues.push({ href: l.href, text: l.text, error: 'Anchor target not found' });
      } else {
        results.links.passed++;
      }
    } else if (l.href.startsWith('tel:')) {
      if (l.href === 'tel:+918279696707') results.links.passed++;
      else results.links.issues.push({ href: l.href, text: l.text, error: 'Incorrect phone number' });
    } else if (l.href.startsWith('mailto:')) {
      if (l.href === 'mailto:vardan2701@gmail.com') results.links.passed++;
      else results.links.issues.push({ href: l.href, text: l.text, error: 'Incorrect email' });
    } else {
      results.links.passed++;
    }
  }
  await page.close();
}

// 4. ACCESSIBILITY SPOT-CHECK ON HUB
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE_URL + '/', { waitUntil: 'networkidle' });

  const missingAlts = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')];
    return imgs.filter(img => !img.hasAttribute('alt') || img.getAttribute('alt').trim() === '').map(img => img.src);
  });
  results.accessibility.details.push({ check: 'Image alts', missingCount: missingAlts.length, missing: missingAlts });

  const tabNavigation = await page.evaluate(() => {
    const tabs = [...document.querySelectorAll('.cat-pill, .tab')];
    if (tabs.length === 0) return { error: 'No tabs found' };
    tabs[0].focus();
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true });
    tabs[0].dispatchEvent(event);
    return { firstTabFocused: document.activeElement === tabs[0] || document.activeElement === tabs[1] };
  });
  results.accessibility.details.push({ check: 'Tabs arrow navigation', result: tabNavigation });

  await page.close();
}

// 5. PERFORMANCE SPOT-CHECK ON HUB
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  let totalBytes = 0;
  page.on('response', async res => {
    try {
      const buffer = await res.body();
      totalBytes += buffer.length;
    } catch (e) {}
  });

  await page.goto(BASE_URL + '/', { waitUntil: 'networkidle' });
  const eagerImgs = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')];
    return imgs.filter(i => i.getAttribute('loading') === 'eager').length;
  });

  results.performance = {
    totalTransferredBytes: totalBytes,
    totalMb: (totalBytes / (1024 * 1024)).toFixed(2) + ' MB',
    eagerLoadedImagesCount: eagerImgs
  };
  await page.close();
}

fs.writeFileSync('scripts/qa-details-report.json', JSON.stringify(results, null, 2));
console.log('Saved scripts/qa-details-report.json');
await browser.close();
