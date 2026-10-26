const ALLOWED_ORIGIN = /^https?:\/\/(localhost(:\d+)?|(www\.)?vardxn\.(com|me)|vardanpalstudio\.vercel\.app)$/;
const clip = (v, n) => (typeof v === "string" ? v.slice(0, n) : v);

export default async function handler(req, res) {
  // CORS: only our own sites may call this from a browser
  const origin = req.headers?.origin;
  if (origin && !ALLOWED_ORIGIN.test(origin)) {
    return res.status(403).json({ error: "Origin not allowed." });
  }
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Only POST requests are supported." });
  }

  try {
    const body = req.body || {};
    const { honeypot } = body;
    // Cap field sizes so one request cannot carry megabytes into the owner's inbox
    const name = clip(body.name, 100), email = clip(body.email, 200), phone = clip(body.phone, 30);
    const city = clip(body.city, 100), type = clip(body.type, 100), goal = clip(body.goal, 100);
    const pkg = clip(body.package, 60), msg = clip(body.msg, 2000);
    const attribution = body.attribution && typeof body.attribution === "object" ? body.attribution : {};

    // 1. Anti-Spam Honeypot Check
    if (honeypot && honeypot.trim().length > 0) {
      return res.status(422).json({ error: "Spam submission rejected." });
    }

    // 2. Strict Input Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({ error: "Validation error: Name is required." });
    }
    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({ error: "Validation error: A valid email address is required." });
    }
    if (!phone || typeof phone !== "string" || phone.trim().replace(/\D/g, "").length < 8) {
      return res.status(400).json({ error: "Validation error: A valid phone or WhatsApp number is required." });
    }

    // 3. Human-Readable Attribution Line
    const attrSource = attribution.utm_source || "";
    const attrMedium = attribution.utm_medium || "";
    const attrCampaign = attribution.utm_campaign || "";
    const attrTerm = attribution.utm_term || "";
    const gclid = attribution.gclid || "";

    const attributionSummary = (attrSource || gclid)
      ? `${attrSource || "ads"} / ${attrMedium || "cpc"} / ${attrCampaign || "none"}${attrTerm ? ` (Term: ${attrTerm})` : ""}${gclid ? " [Google Ads Click]" : ""}`
      : "Direct / Organic Navigation";

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      location_city: (city && city.trim()) || "Across India",
      business_industry: (type && type.trim()) || "Not specified",
      selected_package: (pkg && pkg.trim()) || "Website",
      primary_goal: (goal && goal.trim()) || "Not specified",
      project_notes: (msg && msg.trim()) || "None provided",
      campaign_attribution: attributionSummary,
      submitted_at: new Date().toISOString(),
      _subject: `New Inquiry — Vardan Pal Studio: ${name.trim()} (${city || "India"} • ${pkg || "Website"} • ${type || "General Lead"})`,
      _template: "table",
      _captcha: "false"
    };

    // 4. Upstream Forwarding with AbortController (~8s timeout)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    let response;
    try {
      response = await fetch("https://formsubmit.co/ajax/vardan2701@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Origin": "https://vardanpalstudio.vercel.app",
          "Referer": "https://vardanpalstudio.vercel.app/"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeoutId);
    }

    // 5. Upstream HTTP Status Guard
    if (!response.ok) {
      return res.status(502).json({
        error: "Delivery service temporarily unavailable. Please connect directly via WhatsApp (+91 82796 96707)."
      });
    }

    // 6. Defensive Body Parsing & Upstream Confirmation Guard
    let result;
    try {
      const rawText = await response.text();
      result = JSON.parse(rawText);
    } catch {
      return res.status(502).json({
        error: "Invalid response from delivery service. Please connect directly via WhatsApp (+91 82796 96707)."
      });
    }

    // FormSubmit returns { success: "true" } or { success: true }
    const confirmed = result && (result.success === true || result.success === "true");
    if (!confirmed) {
      return res.status(502).json({
        error: "Delivery service did not confirm receipt. Please connect directly via WhatsApp (+91 82796 96707)."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry received successfully.",
      data: {
        submitted_at: payload.submitted_at,
        package: payload.selected_package,
        industry: payload.business_industry
      }
    });
  } catch (err) {
    if (err && err.name === "AbortError") {
      return res.status(502).json({
        error: "Submission timed out reaching delivery server. Please connect directly via WhatsApp (+91 82796 96707)."
      });
    }

    // Log internally but never reveal raw stack traces or internals to the client
    console.error("[Contact API Error]:", err?.message || err);
    return res.status(500).json({
      error: "Failed to process enquiry. Please connect directly via WhatsApp (+91 82796 96707)."
    });
  }
}
