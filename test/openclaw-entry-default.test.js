import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("OPENCLAW_ENTRY default matches Docker runtime path", () => {
  const src = fs.readFileSync(new URL("../src/server.js", import.meta.url), "utf8");

  assert.match(
    src,
    /const OPENCLAW_ENTRY = process\.env\.OPENCLAW_ENTRY\?\.trim\(\) \|\| "\/openclaw\/dist\/entry\.js";/,
  );
});
