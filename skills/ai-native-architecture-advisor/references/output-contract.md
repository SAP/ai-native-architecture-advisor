# Solution brief output contract

Read when creating, editing, publishing or finding an existing brief—not for every architecture discussion. This is the single contract for the output collection, Markdown source and HTML renderer. Component choices below illustrate the shape, not a default architecture or a claimed current landscape.

## Brief structure

Markdown is the single source of truth. A new or materially changed brief is a managed `Draft`:

````md
<!-- Managed artifact: Request changes through the AI Native Architecture Advisor instead of editing this file manually. -->

# [Solution title]

> AI Native Solution Proposal

| Metadata | Value |
|---|---|
| Status | Draft |
| Last updated | YYYY-MM-DD |

---

## Use Case & Problem Statement

## The AI-Native Direction

---

## Proposed Architecture Overview

```architecture_diagram
{
  "ux": {
    "components": [{"name": "Joule", "type": "joule", "status": "Proposed", "note": "Useful interaction and integration to validate"}, {"name": "Chosen work surface", "type": "primary", "note": "scenario-specific role"}],
    "progression": {"recommended": 3, "target": 5,
      "captions": {"3": "…", "5": "…"}}
  },
  "process": {"agents": [{"name": "Custom Agent", "type": "custom", "note": "what it does"}],
    "assistants": [], "services": [], "mcp": [], "progression": {"recommended": 2, "target": 4, "captions": {"2": "…", "4": "…"}}},
  "foundation": {"ai": [], "data": [], "stores": []},
  "platform": {"components": [{"name": "SAP BTP Cloud Foundry / Kyma", "status": "To confirm", "note": "Runtime choice to confirm"}, {"name": "SAP Cloud Logging"}]},
  "external_integrations": [],
  "marketplace": {"items": [{"name": "Agent Hub", "status": "Candidate", "note": "Assess discovery and management needs"}]},
  "devtools": {"items": [{"name": "Joule Studio", "status": "Candidate", "note": "Select the supported development approach for this scenario"}]}
}
```

### User Experience Layer

### Process Layer

### Foundation Layer

### Platform Layer

---

## Solution Stack

| Component | Layer / Role | Purpose |
|---|---|---|
| [Verified service name](verified-directory-url) | Relevant layer | why it's used |
````

Rules:

- **Use Case & Problem Statement** preserves the user's scenario faithfully (actors, outcome, constraints) in 2–4 sentences. **The AI-Native Direction** describes the reimagined business process in 1–3 technology-light paragraphs.
- Each layer body is the proposal in prose (no mandatory subheadings). A layer with a material capability ladder adds a `**Progression:**` line showing only the meaningful steps (`Step 1 → Step 2 → ★ Step 4`) followed by a caption list — one plain sentence per shown step that says its role ("**Step 1:** where the team works today…", "**Step 2:** recommended next…", "**Step 4:** the North Star…"). Then an **"In this solution:"** callout naming only what this layer introduces, and an **"Open items:"** line only for genuine build decisions. Mirror its primary capability ladder in the `progression` object. Use prose for other dimensions and unranked choices; Platform deployment options do not require a ladder.
- **Solution Stack** lists the recommended design's components, including selected development tooling in the same table. Service names link to their `links.discoveryCenter` URL from the service directory; features/libraries stay plain text. Explain material feasibility dependencies in the relevant layer's open items, without turning the stack into a licensing checklist.
- **Layer ownership:** Process contains business applications, agents, services/APIs and MCP access; Foundation contains model services, grounding, data products and stores; Platform contains runtime and operational services. Group SDKs, frameworks and authoring tools under `Process — Development tooling` in the stack, while retaining the diagram's Development Tooling side panel. This is a presentation grouping, not a claim that an SDK is a hosted runtime or Foundation service. Explain which component the tool builds or connects; match the diagram, prose and stack. Distinguish development approach from runtime and API/MCP exposure, even when asking in one batch.
- The four-layer diagram depicts one coherent recommendation, not a union of ladder steps. Side panels can also show explicitly qualified candidates or later-step options. Marketplace and Development Tooling panels are always present; Agent Hub is a standing discovery/governance consideration, not an assumed deployment. Supply scenario-relevant tools and mark candidates or later-step options explicitly. Agent Gateway is conditional on cross-agent needs and is distinct from an MCP gateway. Keep development tooling associated with Process.
- **Keep diagram labels short:** product or component names only (Fiori Apps, Joule, Confirmation Investigator Agent, PO MCP Server). Details go in the accessible info hint and layer prose. Use `process.services` for business services/APIs, `process.mcp` for MCP access, `foundation.data` for relevant data products, and `foundation.stores` for selected stores, not generic persistence requirements. Show SAP Business Data Cloud alongside proposed BDC data products and follow [the skill's availability rule](../SKILL.md#shape-the-conversation). Omit unused groups and unresolved product placeholders. Use the confirmed runtime or `SAP BTP Cloud Foundry / Kyma` with a `To confirm` qualifier for unresolved custom hosting. Use SAP Cloud Logging for custom-workload telemetry; for product-managed capabilities, establish supported telemetry first. Assess audit-event needs separately.
- **Layout belongs to the template.** Supply JSON components, not sizing or positions. Joule (`type: "joule"`) appears first in a full-width row; other apps use two columns, with the first spanning when the count is odd. Foundation groups contain individual cards. Populate `external_integrations` only with relevant named non-SAP systems or agent platforms (for example Outlook); its gray panel appears above marketplace/tooling only when populated. Omit SAP product inventories and generic channels such as EDI from that panel; describe their role in prose and relevant business APIs in Process.
- The `architecture_diagram` block sits directly under `## Proposed Architecture Overview`; all four layer headings are present even when brief. Joule's icon belongs only to its component; marketplace and development-tool header icons are reusable template elements.

### Diagram data contract

Use exactly one `architecture_diagram` block containing valid JSON. The example above is the shape; use these collection paths, each an **array**:

- `ux.components`
- `process.agents`, `process.assistants`, `process.mcp`, `process.services`
- `foundation.ai`, `foundation.data`, `foundation.stores`
- `platform.components`
- `external_integrations`, `marketplace.items`, `devtools.items`

Each entry is an object with a non-empty text `name`. Optional `note`, `status` and `type` are text too. `note` supplies the info hint; `status` is a short visible qualifier such as `Proposed`, `Candidate`, `Later step` or `To confirm`. A name-only string is also accepted. Use `type: "joule"` for the Joule experience and `type: "primary"` for the main application. Keep labels and hints plain text. Omit unused collections or supply `[]`; use the documented keys rather than inventing fields.

`platform.components` has no fixed service count: put the runtime first, followed by the relevant identity, connectivity, security and operational services in reading order. Select only justified components, keeping unconfirmed choices explicit. The template wraps cards automatically and expands the final row to fill the width; it owns all dimensions and positioning. Development Tooling stays in its side panel immediately above Platform, associated with Process.

Each layer's primary capability ladder may use `progression`: `recommended` and `target` are numbered steps, `today` is optional, and `captions` maps every shown step to non-empty text. Steps accept integers or strings such as `"2a"`; optional `title` names the capability and is text. Set `branched: true` for equal-rank alternatives such as 2a/2b. The renderer retains the Markdown progression when this data is incomplete. Invalid diagram JSON, fields or entries produce a visible review notice while preserving the rest of the brief; correct the source Markdown and republish before handoff.

## Related reference architectures

When useful patterns are selected, add `## Related Reference Architectures` after the Solution Stack as an ordered Markdown list. Each item starts with a linked architecture title, followed by what it does, why it fits and its limitations/adaptations. Keep each item a single paragraph so the renderer preserves the authored order and explanation. Omit this section when no pattern fits.

## The Reasoning Log

Keep decision rationale out of the brief in `<slug>-reasoning-log.md` beside it, updated **at material decision points** (not continuously): confirmed facts, assumptions, recommendations versus user decisions, open questions, and bundled source dates / validation gaps. A challenged or unanswered architectural choice remains open, not accepted or declined. Update prose, diagram, progression and log together when the direction changes. When the user asks *why*, answer from the log.

## Workspace & Publishing

### Output collection

For a new collection, suggest `<user-workspace>/SAP AI Native Solutions/` and confirm its absolute location once, unless already supplied. Reuse it for subsequent proposals in that workspace; users can choose another location. Keep generated projects outside the installed plugin directory and `examples/`, which contains deliberately published samples only. Preserve an existing brief's confirmed location; renaming or moving earlier projects requires a user request.

Each scenario gets a short kebab-case folder (e.g. `ap-invoice-matching/`) containing `<slug>-solution-brief.md`, `<slug>-reasoning-log.md` and the generated `<slug>-solution-brief.html`. Inspect an existing folder before writing: resume the same scenario or choose a distinct slug for a different one.

Maintain one `README.md` at the collection root as a simple proposal index. After creating or updating a brief, update its row with the title, one-sentence summary, status, last-updated date and relative links to its Markdown, reasoning log and available HTML. Preserve other entries and user notes. When asked to list or resume previous work, read this index and inspect the relevant scenario folders; the actual briefs are authoritative. If the index is missing, list the folders; rebuild the index when creating/updating work, not during a read-only request. No database or global history registry is needed.

### Git protection

Before writing generated content, check whether the chosen collection lies inside a Git repository. If so, ensure that repository's `.gitignore` excludes the collection's exact relative directory, preserving existing rules. For a collection at the repository root, the rule is `/SAP AI Native Solutions/`. Verify with `git check-ignore`; the plugin repository's ignore rules do not protect a different user repository. If outputs are already tracked, explain that ignoring them does not untrack them and ask before untracking them. Outside Git, no ignore file is needed. Generated proposals and the collection index stay out of commits or uploads unless the user explicitly requests sharing/versioning.

### Publish

After creating or updating the Markdown, generate and open the visual report with the bundled publisher:

```
node "<absolute-skill-folder>/scripts/publish-brief.mjs" --brief "<absolute-output-folder>/<slug>-solution-brief.md" --open
```

It produces a self-contained `<slug>-solution-brief.html` beside the brief—no server or extra assets. Regenerate after brief changes; the HTML does not watch the Markdown file. Check for diagram-data review notices before handoff, correcting the Markdown if needed. Reuse the bundled template without per-scenario CSS edits. If Node.js is unavailable or opening the report is blocked, hand off the available files and explain the limitation.
