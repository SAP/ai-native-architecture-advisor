// SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and ai-native-architecture-advisor contributors
//
// SPDX-License-Identifier: Apache-2.0
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import vm from "node:vm";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skill = resolve(root, "skills/ai-native-architecture-advisor");
const template = readFileSync(resolve(skill, "assets/ai-native-solution-brief.html"), "utf8");

test("publisher embeds the example with no network or remote resource loaders", () => {
  const out = resolve(mkdtempSync(resolve(tmpdir(), "ai-native-architecture-advisor-test-")), "demo.html");
  const noFetch = "data:text/javascript," + encodeURIComponent("globalThis.fetch = () => { throw new Error('Network is disabled'); };");
  const result = spawnSync(process.execPath, ["--import", noFetch, resolve(skill, "scripts/publish-brief.mjs"),
    "--brief", resolve(root, "examples/supplier-confirmation-solution-brief.md"), "--out", out], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const html = readFileSync(out, "utf8");
  assert.match(html, /window.__BRIEF_MD__/);
  assert.match(html, /AI Native Solution Brief/);
  for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
  for (const source of [template, readFileSync(resolve(root, "docs/index.html"), "utf8"), readFileSync(resolve(skill, "scripts/publish-brief.mjs"), "utf8")]) {
    assert.doesNotMatch(source, /\bfetch\s*\(|XMLHttpRequest|WebSocket|EventSource|sendBeacon|node:https?|\brefreshCaches\b/);
    assert.doesNotMatch(source, /<(?:script|img)[^>]+src=["']https?:|<link[^>]+href=["']https?:|@import|url\(["']?https?:/);
  }
  for (const page of [html, readFileSync(resolve(root, "docs/index.html"), "utf8")]) {
    assert.match(page, /Content-Security-Policy/);
    assert.match(page, /connect-src 'none'/);
    assert.match(page, /img-src data:/);
  }
});

test("renderer keeps safe source links and authored order, but only embeds local image data", () => {
  const marked = createRequire(import.meta.url)(resolve(skill, "assets/marked.umd.js"));
  const context = vm.createContext({ module: { exports: {} }, marked, URL });
  vm.runInContext([...template.matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1], context);
  const render = markdown => context.module.exports.renderTokens(marked.lexer(markdown));
  for (const url of ["javascript:alert(1)", "java\tscript:alert(1)", "java\nscript:alert(1)", "data:text/html,unsafe", "vbscript:unsafe"]) {
    assert.doesNotMatch(render(`[example](<${url}>)`), /href=/);
  }
  for (const url of ["https://example.com", "mailto:team@example.com", "../notes.html", "#process"]) {
    assert.match(render(`[example](<${url}>)`), /href=/);
  }
  assert.doesNotMatch(render("![Remote image](https://example.com/image.svg)"), /<img/);

  let section;
  context.document = {
    querySelector: () => ({ querySelector: () => ({ appendChild: value => { section = value; } }) }),
    createElement: () => ({}),
  };
  const embedded = "data:image/svg+xml;base64," + Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"/>').toString("base64");
  context.window = { __REF_ARCH_INDEX__: [
    { url: "https://example.com/one", diagram_url: "https://example.com/remote.svg", diagram_data: "https://example.com/remote.svg" },
    { url: "https://example.com/two", diagram_data: embedded },
  ] };
  context.model = { relatedArchitectures: [
    { url: "https://example.com/two", title: "Chosen first", description: "Scenario fit" },
    { url: "https://example.com/one", title: "Chosen second", description: "Supporting pattern" },
  ] };
  vm.runInContext("renderRefArchSection(model)", context);
  assert.match(section.innerHTML, /img src="data:image\/svg\+xml;base64,/);
  assert.doesNotMatch(section.innerHTML, /remote\.svg/);
  assert.ok(section.innerHTML.indexOf("Chosen first") < section.innerHTML.indexOf("Chosen second"));
});

test("diagram contract supports growing component lists and contains malformed data", () => {
  const marked = createRequire(import.meta.url)(resolve(skill, "assets/marked.umd.js"));
  const context = vm.createContext({ module: { exports: {} }, marked, URL });
  vm.runInContext([...template.matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1], context);
  const { buildReportModel, normalizeArchitectureDiagram } = context.module.exports;
  const example = readFileSync(resolve(root, "examples/supplier-confirmation-solution-brief.md"), "utf8");
  const original = buildReportModel(example);
  assert.equal(original.architectureWarnings.length, 0);
  const contract = readFileSync(resolve(skill, "references/output-contract.md"), "utf8");
  const contractExample = contract.match(/````md\n([\s\S]*?)\n````/)[1];
  assert.equal(buildReportModel(contractExample).architectureWarnings.length, 0);
  for (const count of [0, 1, 2, 3, 5, 12, 30]) {
    const components = Array.from({ length: count }, (_, i) => ({ name: `Service ${i} — ${"long label ".repeat(10)}`, note: "Details", status: "Candidate" }));
    const { data, warnings } = normalizeArchitectureDiagram({
      ux: { components }, process: { agents: components, assistants: components, mcp: components, services: components },
      foundation: { ai: components, data: components, stores: components }, platform: { components },
      external_integrations: components, marketplace: { items: components }, devtools: { items: components }
    });
    assert.equal(warnings.length, 0);
    for (const section of Object.values(data)) {
      for (const list of Array.isArray(section) ? [section] : Object.values(section)) assert.equal(list.length, count);
    }
  }
  const modelFor = json => buildReportModel(example.replace(/```architecture_diagram\n[\s\S]*?\n```/, () => `\`\`\`architecture_diagram\n${json}\n\`\`\``));
  const malformed = modelFor(JSON.stringify({
    ux: { components: [null, 42, { name: " " }, " Fiori "] },
    process: { services: { name: "API" } }, marketplace: { items: [null] },
    platform: { components: [{ name: "Runtime", status: 42 }, { name: "Logging" }], typo: [] },
    foundation: { progression: { recommended: 1, target: 2, captions: null } }
  }));
  assert.equal(malformed.architectureDiagram.ux.components[0].name, "Fiori");
  assert.equal(malformed.architectureDiagram.process.services.length, 0);
  assert.equal(malformed.architectureDiagram.platform.components.length, 2);
  assert.equal(malformed.architectureDiagram.platform.components[0].status, undefined);
  assert.match(malformed.architectureWarnings.join("\n"), /platform.typo/);
  assert.match(malformed.architectureWarnings.join("\n"), /foundation.progression/);
  assert.match(malformed.layers[2].content, /Progression/);
  for (const json of ["{invalid", "null", "[]", "42"]) {
    const result = modelFor(json);
    assert.equal(result.architectureDiagram, null);
    assert.ok(result.architectureWarnings.length);
    assert.equal(result.originalUseCase, original.originalUseCase);
    assert.equal(result.layers.length, 4);
  }
});
