import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

await page.goto('http://localhost:8088/demos/salon/', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);

// Scroll down to booking/appointment or form fields
const bookingEl = page.locator('#booking-section, form, .appointment-form, .ftco-appointment');
const count = await bookingEl.count();
console.log('Found booking/form matches:', count);

// Let's scroll to booking section title
await page.evaluate(() => {
  const section = document.getElementById('booking-section');
  if (section) section.scrollIntoView({ behavior: 'instant', block: 'start' });
});
await page.waitForTimeout(500);

await page.screenshot({ path: 'audit-shots/salon-fields-phone.png' });
console.log('Saved salon-fields-phone.png');

const formElement = page.locator('#salon-booking-form');
if (await formElement.count() > 0) {
  await formElement.screenshot({ path: 'audit-shots/salon-form-element.png' });
  console.log('Saved salon-form-element.png');
}

await browser.close();
