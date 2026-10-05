#!/usr/bin/env node
// SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and ai-native-architecture-advisor contributors
//
// SPDX-License-Identifier: Apache-2.0
/**
 * publish-brief.mjs — render a Markdown solution brief into ONE self-contained
 * HTML report and (optionally) open it.
 *
 * The output embeds everything the template needs — the Marked parser, the
 * brief's Markdown, and the ref-arch index — so the report renders from a plain
 * file:// URL. No HTTP server, no browser-specific workarounds, no sibling
 * asset files. A brief folder holds exactly three files: the .md brief, the
 * .md reasoning log, and the .html report.
 *
 * Usage:
 *   node scripts/publish-brief.mjs --brief <path/to/slug-solution-brief.md> [--open] [--out <path>]
 *
 * The Markdown stays the content authority: after editing the brief, re-run
 * this command to regenerate the report. All inputs come from local files;
 * publishing never connects to a reference API or downloads assets.
 *
 * Zero dependencies. Node 22+.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve, basename } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const TEMPLATE = resolve(HERE, "..", "assets", "ai-native-solution-brief.html");
const MARKED = resolve(HERE, "..", "assets", "marked.umd.js");
const REF_ARCH_INDEX = resolve(HERE, "..", "references", "ref-arch-index.json");
const DIAGRAMS = resolve(HERE, "..", "assets", "ref-arch-diagrams");
const PLACEHOLDER = /<!-- PUBLISH:PAYLOAD[\s\S]*?-->/;

function parseArgs(argv) {
  const args = { open: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--brief") args.brief = resolve(argv[++i]);
    else if (a === "--out") args.out = resolve(argv[++i]);
    else if (a === "--open") args.open = true;
    else if (a === "--help" || a === "-h") args.help = true;
    else throw new Error(`Unknown option: ${a}`);
  }
  return args;
}

/** JSON-encode a value for inlining inside a <script> block. Escaping "<"
 *  prevents any "</script>" inside the content from terminating the block. */
function inlineJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function openFile(path) {
  const platform = process.platform;
  const cmd = platform === "darwin" ? ["open", [path]]
    : platform === "win32" ? ["cmd", ["/c", "start", "", path]]
    : ["xdg-open", [path]];
  try {
    const child = spawn(cmd[0], cmd[1], { detached: true, stdio: "ignore" });
    child.on("error", () => console.error(`Could not open automatically — open it yourself: ${path}`));
    child.unref();
  } catch {
    console.error(`Could not open automatically — open it yourself: ${path}`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.brief) {
    console.log("Usage: node scripts/publish-brief.mjs --brief <path/to/brief.md> [--open] [--out <path>]");
    process.exit(args.help ? 0 : 1);
  }

  const markdown = readFileSync(args.brief, "utf8");
  if (!markdown.trimStart().startsWith("<!-- Managed artifact:")) {
    console.error(`Warning: ${basename(args.brief)} is missing the managed-artifact comment; the report will refuse to render it.`);
  }

  const template = readFileSync(TEMPLATE, "utf8");
  if (!PLACEHOLDER.test(template)) {
    throw new Error("Template is missing the PUBLISH:PAYLOAD placeholder — cannot embed the brief.");
  }
  const markedSource = readFileSync(MARKED, "utf8");

  let refArchEntries = [];
  try {
    const parsed = JSON.parse(readFileSync(REF_ARCH_INDEX, "utf8"));
    // The agent owns selection and ranking. Embed only local illustrations for
    // references mentioned in the brief, never remote image URLs.
    refArchEntries = parsed.entries.filter(entry => markdown.includes(entry.url)).map(entry => {
      const file = /^[a-z0-9-]+$/i.test(entry.slug) ? resolve(DIAGRAMS, `${entry.slug}.svg`) : null;
      return {
        url: entry.url,
        diagram_data: file && existsSync(file)
          ? `data:image/svg+xml;base64,${readFileSync(file).toString("base64")}` : null,
      };
    });
  } catch {
    console.error("Note: bundled reference illustrations unavailable — authored reference titles, descriptions and links remain.");
  }

  const payload = [
    "<script>",
    markedSource,
    "</script>",
    `<script>window.__BRIEF_MD__ = ${inlineJson(markdown)};</script>`,
    `<script>window.__REF_ARCH_INDEX__ = ${inlineJson(refArchEntries)};</script>`,
  ].join("\n");

  // Function replacements: a string replacement would interpret "$&"-style
  // sequences inside the payload (Marked's source is full of them).
  let html = template.replace(PLACEHOLDER, () => payload);

  const h1 = markdown.match(/^# (.+)$/m)?.[1]?.trim();
  if (h1) {
    const safeTitle = h1.replace(/[<>&]/g, "");
    html = html.replace(
      "<title>AI Native Solution Brief</title>",
      () => `<title>${safeTitle} — AI Native Solution Brief</title>`
    );
  }

  const out = args.out || args.brief.replace(/\.md$/i, ".html");
  if (resolve(out) === resolve(args.brief)) throw new Error("Output must differ from the input brief; use a .md input or --out.");
  writeFileSync(out, html, "utf8");
  console.log(`Published ${out} (self-contained, ${Math.round(html.length / 1024)} KB)`);

  if (args.open) openFile(out);
}

try {
  await main();
} catch (err) {
  console.error("Failed to publish brief:", err.message);
  process.exit(1);
}
