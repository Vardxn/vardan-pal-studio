import { chromium } from "playwright";

const BASE_URL = "http://localhost:8088";
const EXPECTED_BRAND = "Vardan Pal Studio";
const EXPECTED_PROD_URL = "https://vardxn.com";

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

const ROUTES = [
  { name: "hub", path: "/" },
  { name: "privacy", path: "/privacy.html" },
  { name: "terms", path: "/terms.html" },
  { name: "404", path: "/404.html" },
  { name: "salon", path: "/demos/salon/" },
  { name: "clinic", path: "/demos/clinic/" },
  { name: "restaurant", path: "/demos/restaurant/" },
  { name: "real-estate", path: "/demos/real-estate/" },
  { name: "interior", path: "/demos/interior/" },
  { name: "events", path: "/demos/events/" }
];

let totalViolations = 0;

console.log("=== RUNNING REBRAND & DOMAIN AUDIT ===");

for (const route of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE_URL + route.path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  // 1. Check Brand & Canonical on Hub / Main pages
  if (route.name === "hub") {
    const brandText = await page.evaluate(() => {
      const el = document.querySelector(".brand-name");
      return el ? el.textContent.trim() : "";
    });
    const subText = await page.evaluate(() => {
      const el = document.querySelector(".brand-sub");
      return el ? el.textContent.trim() : "";
    });
    const canonical = await page.evaluate(() => {
      const el = document.querySelector('link[rel="canonical"]');
      return el ? el.getAttribute("href") : "";
    });

    console.log(`[Hub Brand Verification]`, { brandText, subText, canonical });
    if (!brandText.includes("VARDAN PAL")) {
      console.error("FAIL: Expected brand name 'VARDAN PAL' on Hub");
      totalViolations++;
    }
    if (canonical !== EXPECTED_PROD_URL + "/") {
      console.error(`FAIL: Expected canonical '${EXPECTED_PROD_URL}/', got '${canonical}'`);
      totalViolations++;
    }
  }

  // 2. Visible Legacy Brand (Kailash) & VARDXN Audit
  const disallowedOccurrences = await page.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const issues = [];
    let node;
    while ((node = walker.nextNode())) {
      if (
        node.parentElement &&
        getComputedStyle(node.parentElement).display !== "none" &&
        getComputedStyle(node.parentElement).visibility !== "hidden"
      ) {
        const text = node.textContent || "";

        // Check Kailash (allowlist: "Greater Kailash")
        if (/kailash/i.test(text)) {
          const sanitized = text.replace(/Greater\s+Kailash/gi, "");
          if (/kailash/i.test(sanitized)) {
            issues.push({
              text: text.trim(),
              term: "Kailash",
              tag: node.parentElement.tagName,
              class: (node.parentElement.className || "").toString().slice(0, 40)
            });
          }
        }

        // Check VARDXN / Vardxn in visible page text
        if (/\b(vardxn)\b/i.test(text)) {
          // Allowed exception: explicit portfolio URL string without studio branding
          const isAllowedPortfolioUrl = /vardxn\.vercel\.app/i.test(text) && !/studio|brand|architecture|experience\s+by/i.test(text);
          if (!isAllowedPortfolioUrl) {
            issues.push({
              text: text.trim(),
              term: "VARDXN",
              tag: node.parentElement.tagName,
              class: (node.parentElement.className || "").toString().slice(0, 40)
            });
          }
        }
      }
    }
    return issues;
  });

  if (disallowedOccurrences.length > 0) {
    console.error(`[Route: ${route.name}] Found ${disallowedOccurrences.length} disallowed legacy references:`);
    console.error(JSON.stringify(disallowedOccurrences, null, 2));
    totalViolations += disallowedOccurrences.length;
  } else {
    console.log(`[Route: ${route.name}] Clean ✅ (0 disallowed legacy terms)`);
  }

  await page.close();
}

await browser.close();

if (totalViolations > 0) {
  console.error(`\n❌ REBRAND AUDIT FAILED with ${totalViolations} violations.`);
  process.exit(1);
} else {
  console.log("\n✅ REBRAND AUDIT PASSED: All pages reflect Vardan Pal Studio branding and vardxn.com with zero disallowed legacy text.");
}
