---
workflow: general-video
flow: automation
storyboard: no
message: "Describe a supplier-confirmation problem; the Advisor returns a real AI-native architecture brief"
destination: embed
aspect: 1920x1080
language: en
length: 30s
angle: show-it-as-is
---

## Intent

A product video for the AI Native Architecture Advisor, driven by ONE real
prompt and its REAL output. The prompt: "Help me reimagine our
supplier-confirmation process. Buyers chase missing PO confirmations in
S/4HANA. We want to reduce manual follow-up while keeping approval decisions
with buyers." The Advisor's actual response is the real
`supplier-confirmation-solution-brief.md` (in the repo's examples/), rendered
to the real HTML report with the bundled publish-brief.mjs script. Screens in
the video are crops of that real report. Motion feel is borrowed from a
reference Joule promo (slow eased reveals, 3D-tilt framing, line-draw) — purple
gradient chrome per user request.

## Assets

Real captures from the rendered supplier-confirmation HTML report:
- assets/report-hero.png — report header: title "Supplier confirmations: from one agent to coordinated resolution", Status Draft, Use Case & The AI-Native Direction.
- assets/report-architecture.png — the real four-layer diagram (UX: Joule/Fiori, Process: Confirmation Investigator Agent/PO MCP Server/S4HANA PO APIs, Foundation: AI Core, Platform: BTP/Identity/Logging).
- assets/report-progression.png — real UX capability progression Step 1 → Step 2 (recommended) → Step 3 → ★ Step 5 (North Star).
- assets/report-stack.png — real Solution Stack table grouped by the four layers.

## Customizations

Purple/3D chrome (user chose "like the ref"): soft purple→pink gradient world,
gentle 3D-tilt reveals of each real screen, SAP blue #0070F2 for callout labels.
Seven beats:
1. Hook — product name, blue underline draws.
2. Problem — the real prompt types in, verbatim.
3. Only the questions that matter — 3 real open items from the reasoning log;
   a generic questionnaire ruled out.
4. Four North Star layers — report-architecture.png reveals, punch-in walks the
   four layer bands.
5. Capability progression — report-progression.png, ring on Step 2 and ★ Step 5.
6. Three outputs — report-hero.png + report-stack.png framed; brief · reasoning
   log · HTML report.
7. CTA — the two real install commands + "Draft for human review."

## Notes

- The three real open items (from supplier-confirmation-reasoning-log.md):
  "Confirm the Joule entitlement and supported extension route",
  "Cloud Foundry or Kyma?", "Which S/4HANA PO APIs are released?".
- Install commands (Claude Code route, from README):
  /plugin marketplace add https://github.com/SAP/ai-native-architecture-advisor.git
  /plugin install ai-native-architecture-advisor@sap-ai-native-architecture-advisor
- Silent — on-screen motion carries it.
- Local render only; usage --json returns unknown (unsupported_auth), no cloud quota.
- videos/joule-style-ref/ (the motion study) and everything else are left untouched.
