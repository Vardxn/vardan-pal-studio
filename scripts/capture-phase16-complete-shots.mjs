import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("audit-shots/phase16-complete");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function captureEvidence() {
  console.log("Launching headless Chrome for Phase 16 Complete Visual Audit...");
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true
  });

  // 1. Desktop Context (1440px)
  const desktopCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const dPage = await desktopCtx.newPage();

  // 1. Homepage hero at 1440px
  await dPage.goto("http://localhost:8088/", { waitUntil: "domcontentloaded" });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, "01-homepage-hero-1440px.png"), fullPage: false });
  console.log("📸 Saved: 01-homepage-hero-1440px.png");

  // 2a. Contact form area showing consent checkbox at 1440px
  const contactForm = await dPage.$("#enquireForm, .enquire-form, #contact");
  if (contactForm) {
    await contactForm.scrollIntoViewIfNeeded();
    await dPage.waitForTimeout(300);
    await contactForm.screenshot({ path: path.join(OUT_DIR, "02a-contact-consent-1440px.png") });
    console.log("📸 Saved: 02a-contact-consent-1440px.png");
  }

  // 3. Footer at 1440px (showing it is compact, not fullscreen)
  const dFooter = await dPage.$(".footer");
  if (dFooter) {
    await dFooter.scrollIntoViewIfNeeded();
    await dPage.waitForTimeout(300);
    await dFooter.screenshot({ path: path.join(OUT_DIR, "03-footer-compact-1440px.png") });
    console.log("📸 Saved: 03-footer-compact-1440px.png");
  }

  // 6. Demo page roundtrip & Back scroll restoration
  const demoCta = await dPage.$("#demo-cta-salon");
  if (demoCta) {
    await demoCta.scrollIntoViewIfNeeded();
    await dPage.waitForTimeout(300);
    await demoCta.click();
    await dPage.waitForLoadState("domcontentloaded");
    await dPage.waitForTimeout(300);
    // Hit browser back
    await dPage.goBack({ waitUntil: "domcontentloaded" });
    await dPage.waitForTimeout(400);
    await dPage.screenshot({ path: path.join(OUT_DIR, "06-homepage-restored-after-back-1440px.png"), fullPage: false });
    console.log("📸 Saved: 06-homepage-restored-after-back-1440px.png");
  }

  // 7. Privacy page footer
  await dPage.goto("http://localhost:8088/privacy.html", { waitUntil: "domcontentloaded" });
  await dPage.waitForTimeout(300);
  const privFooter = await dPage.$(".footer");
  if (privFooter) {
    await privFooter.scrollIntoViewIfNeeded();
    await privFooter.screenshot({ path: path.join(OUT_DIR, "07-privacy-page-footer.png") });
    console.log("📸 Saved: 07-privacy-page-footer.png");
  }

  // 8. Terms page footer
  await dPage.goto("http://localhost:8088/terms.html", { waitUntil: "domcontentloaded" });
  await dPage.waitForTimeout(300);
  const termsFooter = await dPage.$(".footer");
  if (termsFooter) {
    await termsFooter.scrollIntoViewIfNeeded();
    await termsFooter.screenshot({ path: path.join(OUT_DIR, "08-terms-page-footer.png") });
    console.log("📸 Saved: 08-terms-page-footer.png");
  }

  await desktopCtx.close();

  // 2. Mobile Context (390px)
  const mobileCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2
  });
  const mPage = await mobileCtx.newPage();

  // 2b. Contact form area showing consent checkbox at 390px
  await mPage.goto("http://localhost:8088/", { waitUntil: "domcontentloaded" });
  await mPage.waitForTimeout(400);
  const mContactForm = await mPage.$("#enquireForm, .enquire-form, #contact");
  if (mContactForm) {
    await mContactForm.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(300);
    await mContactForm.screenshot({ path: path.join(OUT_DIR, "02b-contact-consent-390px.png") });
    console.log("📸 Saved: 02b-contact-consent-390px.png");
  }

  // 4. Footer at 390px
  const mFooter = await mPage.$(".footer");
  if (mFooter) {
    await mFooter.scrollIntoViewIfNeeded();
    await mPage.waitForTimeout(300);
    await mFooter.screenshot({ path: path.join(OUT_DIR, "04-footer-compact-390px.png") });
    console.log("📸 Saved: 04-footer-compact-390px.png");
  }

  // 5. One demo page (/demos/salon/) at 390px showing the new context bar ("Back to Portfolio")
  await mPage.goto("http://localhost:8088/demos/salon/", { waitUntil: "domcontentloaded" });
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT_DIR, "05-salon-demo-context-bar-390px.png"), fullPage: false });
  console.log("📸 Saved: 05-salon-demo-context-bar-390px.png");

  await mobileCtx.close();
  await browser.close();
  console.log("All Phase 16 Complete screenshots saved successfully!");
}

captureEvidence().catch(err => {
  console.error("Screenshot capture failed:", err);
  process.exit(1);
});
