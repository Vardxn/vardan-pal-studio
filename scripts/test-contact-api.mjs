import handler from "../api/contact.js";

class MockRes {
  constructor() {
    this.statusCode = 200;
    this.headers = {};
    this.body = null;
  }
  setHeader(k, v) { this.headers[k] = v; return this; }
  status(code) { this.statusCode = code; return this; }
  json(data) { this.body = data; return this; }
  end() { return this; }
}

async function testContactApi() {
  console.log("Testing api/contact.js...");

  // 1. OPTIONS request (CORS preflight)
  {
    const req = { method: "OPTIONS" };
    const res = new MockRes();
    await handler(req, res);
    if (res.statusCode !== 200) throw new Error("OPTIONS failed");
    if (res.headers["Access-Control-Allow-Origin"] !== "*") throw new Error("Missing CORS header");
    console.log("✅ PASS: OPTIONS CORS preflight returns 200");
  }

  // 2. GET request (Method not allowed)
  {
    const req = { method: "GET" };
    const res = new MockRes();
    await handler(req, res);
    if (res.statusCode !== 405) throw new Error("GET should return 405");
    console.log("✅ PASS: Non-POST methods return 405 Method Not Allowed");
  }

  // 3. Honeypot check (Spam rejected)
  {
    const req = {
      method: "POST",
      body: { name: "Bot", email: "bot@example.com", phone: "+919999999999", honeypot: "spam-token" }
    };
    const res = new MockRes();
    await handler(req, res);
    if (res.statusCode !== 422) throw new Error("Honeypot should return 422");
    console.log("✅ PASS: Honeypot trap triggers 422");
  }

  // 4. Missing required fields validation
  {
    const req = { method: "POST", body: { name: "", email: "invalid" } };
    const res = new MockRes();
    await handler(req, res);
    if (res.statusCode !== 400) throw new Error("Empty name should return 400");
    console.log("✅ PASS: Input validation returns 400 for incomplete submissions");
  }

  console.log("All contact API unit tests passed successfully!");
}

testContactApi().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
