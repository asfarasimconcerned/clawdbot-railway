import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("gateway readiness timeout is configurable and defaults to 45s", () => {
  const src = fs.readFileSync(new URL("../src/server.js", import.meta.url), "utf8");
  assert.match(src, /const GATEWAY_READY_TIMEOUT_MS = Number\.parseInt\(process\.env\.OPENCLAW_GATEWAY_READY_TIMEOUT_MS \?\? "45000", 10\);/);
  assert.match(src, /waitForGatewayReady\(\{ timeoutMs: GATEWAY_READY_TIMEOUT_MS \}\)/);
});


test("default OPENCLAW_ENTRY matches runtime image path", () => {
  const src = fs.readFileSync(new URL("../src/server.js", import.meta.url), "utf8");
  assert.match(src, /const OPENCLAW_ENTRY = process\.env\.OPENCLAW_ENTRY\?\.trim\(\) \|\| "\/openclaw\/dist\/entry\.js";/);
});
