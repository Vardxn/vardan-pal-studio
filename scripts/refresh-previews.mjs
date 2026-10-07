import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});

const demos = [
  { name: 'clinic', url: 'http://localhost:8088/demos/clinic/' },
  { name: 'salon', url: 'http://localhost:8088/demos/salon/' },
  { name: 'restaurant', url: 'http://localhost:8088/demos/restaurant/' },
  { name: 'real-estate', url: 'http://localhost:8088/demos/real-estate/' },
  { name: 'interior', url: 'http://localhost:8088/demos/interior/' },
  { name: 'events', url: 'http://localhost:8088/demos/events/' }
];

for (const demo of demos) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1.5
  });
  console.log(`Navigating to ${demo.url}...`);
  await page.goto(demo.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `assets/shots/${demo.name}.webp` });
  console.log(`Captured assets/shots/${demo.name}.webp`);
  await page.close();
}

await browser.close();
console.log('All 6 demo previews refreshed!');
