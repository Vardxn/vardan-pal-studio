export default async function handler(req, res) {
  // CORS configuration
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Only POST requests are supported." });
  }

  try {
    const { name, email, phone, city, type, goal, msg, package: pkg, attribution = {}, honeypot } = req.body || {};

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

    // Forward to FormSubmit to dispatch notification email to vardan2701@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/vardan2701@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://kailashstudio.vercel.app",
        "Referer": "https://kailashstudio.vercel.app/"
      },
      body: JSON.stringify(payload)
    });

    const rawText = await response.text();
    let result = {};
    try {
      result = JSON.parse(rawText);
    } catch {
      result = { raw: rawText };
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
    // Log internally but never reveal raw stack traces to the public
    console.error("[Contact API Error]:", err.message);
    return res.status(500).json({
      error: "Failed to process enquiry. Please connect directly via WhatsApp (+91 82796 96707)."
    });
  }
}
