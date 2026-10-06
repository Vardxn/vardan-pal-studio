import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });

const errors = [];
page.on('console', m => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', e => errors.push(String(e)));

await page.goto('http://localhost:8088/', { waitUntil: 'networkidle' });

// Scroll down to the contact form
await page.locator('#contact').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);

// Fill out the enquiry form
await page.locator('#enquireForm input[name="name"]').fill('Aditya Sharma');
await page.locator('#enquireForm input[name="email"]').fill('aditya.sharma@example.com');
await page.locator('#enquireForm input[name="phone"]').fill('+91 98111 22233');
await page.locator('#enquireForm select[name="type"]').selectOption('Gym / Fitness');
await page.locator('#enquireForm select[name="goal"]').selectOption('Client Portal');
await page.locator('#enquireForm textarea[name="msg"]').fill('Want a member portal with automated booking and WhatsApp reminders.');

console.log('Form inputs filled successfully.');

// Submit the form
await page.locator('#enquireSubmitBtn').click();

// Wait for submission response
await page.waitForTimeout(2500);

const hasSuccessCard = await page.locator('.enquire-success-card').isVisible();
const successCardText = hasSuccessCard ? await page.locator('.enquire-success-card').innerText() : '';

console.log('Submission result:', {
  hasSuccessCard,
  previewText: successCardText.slice(0, 150),
  errors: errors.length ? errors : 'none'
});

await page.screenshot({ path: 'audit-shots/form-submitted.png' });
console.log('Screenshot saved to audit-shots/form-submitted.png');

await browser.close();
