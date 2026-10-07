export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, city, type, goal, msg } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    const payload = {
      name,
      email,
      phone,
      location_city: city || 'Across India',
      business_industry: type || 'Not specified',
      primary_goal: goal || 'Not specified',
      project_notes: msg || 'None provided',
      submitted_at: new Date().toISOString(),
      _subject: `New Inquiry — Vardan Pal Studio: ${name} (${city || 'India'} • ${type || 'General Lead'})`,
      _template: 'table',
      _captcha: 'false'
    };

    // Forward to FormSubmit to send email to vardan2701@gmail.com
    const response = await fetch('https://formsubmit.co/ajax/vardan2701@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://kailashstudio.vercel.app',
        'Referer': 'https://kailashstudio.vercel.app/'
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
      message: result.message || 'Enquiry processed successfully',
      data: result
    });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Failed to process enquiry', details: err.message });
  }
}
