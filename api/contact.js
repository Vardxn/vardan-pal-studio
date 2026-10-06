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
    const { name, email, phone, type, goal, msg } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    const payload = {
      name,
      email,
      phone,
      business_industry: type || 'Not specified',
      primary_goal: goal || 'Not specified',
      project_notes: msg || 'None provided',
      submitted_at: new Date().toISOString(),
      _subject: `New Studio Inquiry: ${name} (${type || 'General Lead'})`,
      _template: 'table',
      _captcha: 'false'
    };

    // Forward to FormSubmit to send email directly to vardan2701@gmail.com
    const response = await fetch('https://formsubmit.co/ajax/vardan2701@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    return res.status(200).json({ success: true, message: 'Enquiry emailed successfully', data: result });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Failed to process enquiry', details: err.message });
  }
}
