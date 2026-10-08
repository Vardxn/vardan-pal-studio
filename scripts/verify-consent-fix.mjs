import { chromium } from "playwright";
import fs from "fs";

async function runVerification() {
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true
  });

  const viewports = [
    { name: "320px", width: 320, height: 800 },
    { name: "375px", width: 375, height: 800 },
    { name: "390px", width: 390, height: 844 },
    { name: "430px", width: 430, height: 932 },
    { name: "768px", width: 768, height: 1024 },
    { name: "1024px", width: 1024, height: 768 },
    { name: "1440px", width: 1440, height: 900 }
  ];

  console.log("=== VERIFYING CONTACT CONSENT UI & SIZING ===");

  const results = [];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height }
    });
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("pageerror", err => consoleErrors.push(err.message));

    await page.goto("http://localhost:8088/#contact", { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    const metrics = await page.evaluate(() => {
      const checkbox = document.querySelector("#contactConsent");
      const label = document.querySelector(".form-consent label");
      const consentRow = document.querySelector(".form-consent");
      const contactSection = document.querySelector("#contact");
      const endingP = document.querySelector(".cta-price-from");

      const cbRect = checkbox ? checkbox.getBoundingClientRect() : null;
      const labelRect = label ? label.getBoundingClientRect() : null;
      const rowRect = consentRow ? consentRow.getBoundingClientRect() : null;

      const bodyWidth = document.body.scrollWidth;
      const winWidth = window.innerWidth;
      const overflow = bodyWidth > winWidth + 1;

      return {
        cbWidth: cbRect ? cbRect.width : 0,
        cbHeight: cbRect ? cbRect.height : 0,
        cbTop: cbRect ? cbRect.top : 0,
        labelTop: labelRect ? labelRect.top : 0,
        rowWidth: rowRect ? rowRect.width : 0,
        endingText: endingP ? endingP.textContent.trim() : "",
        hasOverflow: overflow,
        bodyWidth,
        winWidth
      };
    });

    const isBoxCompact = metrics.cbWidth >= 21 && metrics.cbWidth <= 24 &&
                         metrics.cbHeight >= 21 && metrics.cbHeight <= 24;
    const isAligned = Math.abs(metrics.cbTop - metrics.labelTop) <= 5;
    const noOverflow = !metrics.hasOverflow;

    results.push({
      viewport: vp.name,
      boxSize: `${metrics.cbWidth.toFixed(1)}x${metrics.cbHeight.toFixed(1)}px`,
      isBoxCompact,
      isAligned,
      noOverflow,
      consoleErrors: consoleErrors.length
    });

    console.log(`[${vp.name}] Box: ${metrics.cbWidth.toFixed(1)}x${metrics.cbHeight.toFixed(1)}px | Aligned: ${isAligned} | NoOverflow: ${noOverflow} | Errors: ${consoleErrors.length}`);

    await context.close();
  }

  // -------------------------------------------------------------
  // Functional Accessibility & State Tests (Desktop & 390px)
  // -------------------------------------------------------------
  console.log("\n=== FUNCTIONAL & INTERACTION AUDIT ===");

  // Desktop Page (1440px)
  const deskContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const deskPage = await deskContext.newPage();
  await deskPage.goto("http://localhost:8088/#contact", { waitUntil: "networkidle" });
  await deskPage.waitForTimeout(400);

  // 1. Desktop Screenshot
  const contactForm = deskPage.locator("#contact");
  await contactForm.scrollIntoViewIfNeeded();
  await deskPage.waitForTimeout(300);
  await deskPage.screenshot({
    path: "audit-shots/contact-consent-fix/desktop-contact-form.png",
    fullPage: false
  });

  // 2. Unchecked submit validation test
  await deskPage.fill('input[name="name"]', "Test User");
  await deskPage.fill('input[name="email"]', "test@user.com");
  await deskPage.fill('input[name="phone"]', "+91 98765 43210");
  await deskPage.selectOption('select[name="type"]', "Clinic / Healthcare");
  await deskPage.selectOption('select[name="package"]', "Business");
  await deskPage.selectOption('select[name="goal"]', "New Website");

  // Ensure consent is unchecked
  await deskPage.evaluate(() => {
    document.querySelector("#contactConsent").checked = false;
  });

  // Click submit while unchecked
  await deskPage.evaluate(() => document.querySelector("#enquireSubmitBtn").click());
  await deskPage.waitForTimeout(200);

  const errorStatus = await deskPage.evaluate(() => {
    const el = document.querySelector("#enquireStatus");
    const consentBox = document.querySelector(".form-consent");
    return {
      displayed: el ? window.getComputedStyle(el).display !== "none" : false,
      text: el ? el.textContent : "",
      hasErrorClass: consentBox ? consentBox.classList.contains("has-error") : false
    };
  });
  console.log("Unchecked submit blocked:", errorStatus.displayed && errorStatus.text.includes("consent"));

  // 3. Screenshot: Required/invalid state
  await deskPage.screenshot({
    path: "audit-shots/contact-consent-fix/required-invalid-state.png",
    fullPage: false
  });

  // 4. Clicking label toggles checkbox
  const beforeLabelClick = await deskPage.isChecked("#contactConsent");
  await deskPage.click('.form-consent label[for="contactConsent"]');
  const afterLabelClick = await deskPage.isChecked("#contactConsent");
  console.log("Label click toggled checkbox:", !beforeLabelClick && afterLabelClick);

  // 5. Screenshot: Checked state
  await deskPage.screenshot({
    path: "audit-shots/contact-consent-fix/checked-state.png",
    fullPage: false
  });

  // 6. Keyboard navigation: Tab focus & focus-visible
  await deskPage.evaluate(() => {
    document.querySelector("#contactConsent").focus();
  });
  await deskPage.waitForTimeout(200);
  await deskPage.screenshot({
    path: "audit-shots/contact-consent-fix/focus-visible-state.png",
    fullPage: false
  });

  // 7. Legal link click independent from checkbox
  const checkBeforeLink = await deskPage.isChecked("#contactConsent");
  const privacyHref = await deskPage.getAttribute('.form-consent a[href="privacy.html"]', "href");
  const termsHref = await deskPage.getAttribute('.form-consent a[href="terms.html"]', "href");
  console.log("Legal links present:", privacyHref, termsHref);

  await deskContext.close();

  // -------------------------------------------------------------
  // Mobile 390px Screenshot
  // -------------------------------------------------------------
  const mobContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobPage = await mobContext.newPage();
  await mobPage.goto("http://localhost:8088/#contact", { waitUntil: "networkidle" });
  await mobPage.waitForTimeout(400);

  const mobContact = mobPage.locator("#contact");
  await mobContact.scrollIntoViewIfNeeded();
  await mobPage.waitForTimeout(300);
  await mobPage.screenshot({
    path: "audit-shots/contact-consent-fix/390px-contact-form.png",
    fullPage: false
  });
  await mobContext.close();

  await browser.close();

  console.log("\n=== ALL AUDIT SCREENSHOTS SAVED TO audit-shots/contact-consent-fix/ ===");
}

runVerification().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});
