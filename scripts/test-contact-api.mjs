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

const originalFetch = globalThis.fetch;

function createValidReq(overrides = {}) {
  return {
    method: "POST",
    body: {
      name: "Rohan Mehra",
      email: "rohan@example.com",
      phone: "+91 98765 43210",
      city: "New Delhi",
      type: "Restaurant",
      goal: "New Website",
      msg: "Looking for high-end dining digital showcase",
      package: "Bespoke",
      ...overrides
    }
  };
}

async function runTests() {
  console.log("=== RUNNING CONTACT API UNIT & UPSTREAM FAILURE SUITE ===");
  let passedCount = 0;
  let totalCount = 0;

  function assert(condition, message) {
    totalCount++;
    if (!condition) {
      throw new Error("FAILED: " + message);
    }
    passedCount++;
    console.log("  [PASS] #" + totalCount + ": " + message);
  }

  // 1. OPTIONS CORS preflight
  {
    const req = { method: "OPTIONS" };
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 200, "OPTIONS returns 200");
    assert(res.headers["Access-Control-Allow-Origin"] === "*", "CORS header present");
  }

  // 2. GET method guard
  {
    const req = { method: "GET" };
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 405, "GET method returns 405 Method Not Allowed");
  }

  // 2b. Foreign website origin is refused
  {
    const req = createValidReq();
    req.headers = { origin: "https://evil.example" };
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 403, "Foreign Origin is rejected with 403");
  }

  // 2c. Oversized text is capped before it is forwarded
  {
    const req = createValidReq({ msg: "x".repeat(50000) });
    req.headers = { origin: "https://vardxn.me" };
    let forwarded = "";
    const realFetch = globalThis.fetch;
    globalThis.fetch = async (url, opts) => { forwarded = opts.body; return { ok: true, text: async () => '{"success":"true"}' }; };
    const res = new MockRes();
    await handler(req, res);
    globalThis.fetch = realFetch;
    assert(res.statusCode === 200, "Own-site Origin is accepted");
    assert(JSON.parse(forwarded).project_notes.length === 2000, "Message is capped at 2000 characters");
  }

  // 3. Honeypot guard
  {
    const req = createValidReq({ honeypot: "spam_bot_field" });
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 422, "Honeypot triggers 422 Unprocessable Entity");
    assert(!res.body?.success, "Honeypot does not report success");
  }

  // 4. Missing required name
  {
    const req = createValidReq({ name: "" });
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 400, "Empty name returns 400 Bad Request");
  }

  // 5. Invalid email address
  {
    const req = createValidReq({ email: "not-an-email" });
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 400, "Malformed email returns 400 Bad Request");
  }

  // 6. Invalid phone number
  {
    const req = createValidReq({ phone: "123" });
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 400, "Short phone returns 400 Bad Request");
  }

  // 7. UPSTREAM SUCCESS: 200 + valid JSON ({ success: "true" })
  {
    globalThis.fetch = async (url, opts) => {
      return new Response(JSON.stringify({ success: "true", message: "Form submitted successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    };
    const req = createValidReq();
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode === 200, "Upstream 200 + valid JSON returns HTTP 200");
    assert(res.body?.success === true, "Upstream 200 + valid JSON returns success: true");
    globalThis.fetch = originalFetch;
  }

  // 8. UPSTREAM HTTP 500: API must NOT return success
  {
    globalThis.fetch = async () => {
      return new Response("Internal Server Error", { status: 500 });
    };
    const req = createValidReq();
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode !== 200, "Upstream HTTP 500 returns non-200 (actual: " + res.statusCode + ")");
    assert(!res.body?.success, "Upstream HTTP 500 must NOT return success: true");
    assert(res.statusCode === 502, "Upstream HTTP 500 returns 502 Bad Gateway");
    globalThis.fetch = originalFetch;
  }

  // 9. UPSTREAM HTTP 403: API must NOT return success
  {
    globalThis.fetch = async () => {
      return new Response("Forbidden", { status: 403 });
    };
    const req = createValidReq();
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode !== 200, "Upstream HTTP 403 returns non-200 (actual: " + res.statusCode + ")");
    assert(!res.body?.success, "Upstream HTTP 403 must NOT return success: true");
    assert(res.statusCode === 502, "Upstream HTTP 403 returns 502 Bad Gateway");
    globalThis.fetch = originalFetch;
  }

  // 10. NETWORK ERROR: fetch throws TypeError
  {
    globalThis.fetch = async () => {
      throw new TypeError("Failed to fetch: DNS lookup failed");
    };
    const req = createValidReq();
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode !== 200, "Network error returns non-200 (actual: " + res.statusCode + ")");
    assert(!res.body?.success, "Network error must NOT return success: true");
    assert(res.statusCode === 500, "Network error returns 500 Internal Server Error");
    globalThis.fetch = originalFetch;
  }

  // 11. TIMEOUT: fetch hangs past AbortController timeout (~8s in handler, tested via signal abort)
  {
    globalThis.fetch = async (url, opts) => {
      return new Promise((resolve, reject) => {
        if (opts?.signal) {
          opts.signal.addEventListener("abort", () => {
            const err = new Error("The operation was aborted");
            err.name = "AbortError";
            reject(err);
          });
        }
      });
    };
    const req = createValidReq();
    const res = new MockRes();
    // Simulate abort quickly for fast test execution by overriding AbortController signal
    const origAC = globalThis.AbortController;
    globalThis.AbortController = class FastAbortController {
      constructor() {
        this.inner = new origAC();
        this.signal = this.inner.signal;
        setTimeout(() => this.inner.abort(), 50);
      }
      abort() { this.inner.abort(); }
    };

    try {
      await handler(req, res);
      assert(res.statusCode !== 200, "Hanging fetch timeout returns non-200");
      assert(!res.body?.success, "Hanging fetch timeout must NOT return success: true");
      assert(res.statusCode === 502, "Hanging fetch timeout returns 502 Gateway Timeout / Bad Gateway");
    } finally {
      globalThis.AbortController = origAC;
      globalThis.fetch = originalFetch;
    }
  }

  // 12. UPSTREAM 200 WITH UNPARSEABLE BODY (HTML error page)
  {
    globalThis.fetch = async () => {
      return new Response("<html><body>502 Cloudflare Bad Gateway</body></html>", {
        status: 200,
        headers: { "Content-Type": "text/html" }
      });
    };
    const req = createValidReq();
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode !== 200, "Unparseable upstream body returns non-200 (actual: " + res.statusCode + ")");
    assert(!res.body?.success, "Unparseable upstream body must NOT return success: true");
    assert(res.statusCode === 502, "Unparseable upstream body returns 502 Bad Gateway");
    globalThis.fetch = originalFetch;
  }

  // 13. UPSTREAM 200 WITH UNCONFIRMED RECEIPT ({ success: false })
  {
    globalThis.fetch = async () => {
      return new Response(JSON.stringify({ success: false, message: "Rate limit exceeded" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    };
    const req = createValidReq();
    const res = new MockRes();
    await handler(req, res);
    assert(res.statusCode !== 200, "Unconfirmed upstream receipt returns non-200");
    assert(!res.body?.success, "Unconfirmed upstream receipt must NOT return success");
    assert(res.statusCode === 502, "Unconfirmed upstream receipt returns 502 Bad Gateway");
    globalThis.fetch = originalFetch;
  }

  console.log("\n=======================================================");
  console.log("  ALL " + passedCount + "/" + totalCount + " CONTACT API TESTS PASSED PERFECTLY!");
  console.log("=======================================================\n");
}

runTests().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
