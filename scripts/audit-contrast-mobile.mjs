import { chromium } from "playwright";

const BASE_URL = "http://localhost:8088";
const ROUTES = [
  { name: "homepage", path: "/" },
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

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

console.log("=== STARTING MOBILE CONTRAST & READABILITY AUDIT (Viewport: 390x844) ===");

const allFindings = [];

for (const route of ROUTES) {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 }
  });

  await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  // Evaluate interactive and readable elements
  const results = await page.evaluate(() => {
    // Helper to calculate luminance
    function parseRgba(colorStr) {
      if (!colorStr || colorStr === "transparent") return null;
      const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (!match) return null;
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
        a: match[4] !== undefined ? parseFloat(match[4]) : 1
      };
    }

    function getLuminance(r, g, b) {
      const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    function blend(fg, bg) {
      if (!fg) return bg;
      if (!bg) bg = { r: 255, g: 255, b: 255, a: 1 };
      const a = fg.a + bg.a * (1 - fg.a);
      const r = Math.round((fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / a);
      const g = Math.round((fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / a);
      const b = Math.round((fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / a);
      return { r, g, b, a };
    }

    function getEffectiveBg(el) {
      let cur = el;
      let blended = null;
      while (cur && cur !== document.documentElement) {
        const style = window.getComputedStyle(cur);
        const bg = parseRgba(style.backgroundColor);
        if (bg && bg.a > 0) {
          if (!blended) blended = bg;
          else blended = blend(blended, bg);
          if (blended.a >= 0.99) break;
        }
        cur = cur.parentElement;
      }
      if (!blended || blended.a < 0.99) {
        blended = blend(blended, { r: 245, g: 242, b: 234, a: 1 }); // default light canvas
      }
      return blended;
    }

    function getContrast(fgRgb, bgRgb) {
      const l1 = getLuminance(fgRgb.r, fgRgb.g, fgRgb.b);
      const l2 = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    }

    const issues = [];
    
    // Select targets: buttons, links, badges, form inputs, labels
    const selectors = [
      "button",
      "a",
      "[role='button']",
      "input",
      "select",
      "textarea",
      "label",
      ".badge",
      ".chip",
      ".eyebrow",
      ".hero-badge-text",
      ".plan-badge",
      ".plan-popular-badge",
      ".screen-url-badge",
      ".case-badge",
      ".demo-context__btn",
      ".demo-context__back"
    ];

    const elements = document.querySelectorAll(selectors.join(","));

    elements.forEach(el => {
      // Must be visible
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0 || window.getComputedStyle(el).display === "none" || window.getComputedStyle(el).visibility === "hidden") {
        return;
      }

      const style = window.getComputedStyle(el);
      const fg = parseRgba(style.color);
      const bg = getEffectiveBg(el);
      const text = (el.innerText || el.getAttribute("aria-label") || el.getAttribute("placeholder") || el.value || "").trim().substring(0, 40);
      const fontSize = parseFloat(style.fontSize);
      const fontWeight = parseInt(style.fontWeight) || 400;
      const isLarge = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
      const minRequired = isLarge ? 3.0 : 4.5;

      if (fg && bg) {
        const ratio = getContrast(fg, bg);
        if (ratio < minRequired && text.length > 0) {
          issues.push({
            tag: el.tagName.toLowerCase(),
            selector: el.className ? `.${el.className.split(' ').slice(0, 2).join('.')}` : el.tagName.toLowerCase(),
            text,
            ratio: ratio.toFixed(2),
            minRequired,
            color: style.color,
            bg: `rgb(${bg.r}, ${bg.g}, ${bg.b})`,
            fontSize: `${fontSize}px`,
            isLarge
          });
        }
      }

      // Check placeholder if input or textarea
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        const placeholder = el.getAttribute("placeholder");
        if (placeholder) {
          // Check placeholder pseudo-element style if available
          const phStyle = window.getComputedStyle(el, "::placeholder");
          const phFg = parseRgba(phStyle.color);
          if (phFg && bg) {
            const phRatio = getContrast(phFg, bg);
            if (phRatio < 3.0) { // WCAG AA for UI / minimum readability
              issues.push({
                tag: `${el.tagName.toLowerCase()}::placeholder`,
                selector: el.className ? `.${el.className.split(' ').slice(0, 2).join('.')}` : el.tagName.toLowerCase(),
                text: placeholder,
                ratio: phRatio.toFixed(2),
                minRequired: 3.0,
                color: phStyle.color,
                bg: `rgb(${bg.r}, ${bg.g}, ${bg.b})`,
                fontSize: `${fontSize}px`,
                isLarge: false
              });
            }
          }
        }
      }
    });

    return issues;
  });

  if (results.length > 0) {
    console.log(`\n[Route: ${route.name}] Found ${results.length} contrast/readability items:`);
    results.forEach(iss => {
      console.log(`  - [${iss.tag}] ${iss.selector} ("${iss.text}") -> Contrast: ${iss.ratio}:1 (Required: ${iss.minRequired}:1) | Color: ${iss.color} on ${iss.bg}`);
      allFindings.push({ route: route.name, ...iss });
    });
  } else {
    console.log(`[Route: ${route.name}] All audited items pass contrast! ✅`);
  }

  await page.close();
}

await browser.close();
console.log(`\nAudit completed with total ${allFindings.length} findings.`);
