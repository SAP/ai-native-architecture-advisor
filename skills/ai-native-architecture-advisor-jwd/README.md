# AI Native Architecture Advisor — Joule Work Desktop (JWD) build

The Joule-native build of the AI Native Architecture Advisor. It runs the same guided
discovery and produces the same **AI Native Solution Brief** as the Claude Code / Codex
build, but delivers it through Joule's own UI (`render_ui` cards and, on request, a
persistent Space) instead of writing Markdown/HTML files to disk.

## Installation

In **Joule Work Desktop**, go to **Extensions → Skills → Install from file**, and point it at:

- this directory (`skills/ai-native-architecture-advisor-jwd/`), **or**
- the packaged `.skill` file produced by `scripts/package-jwd-skill.sh`
  (a `.skill` file is just a renamed `.zip`).

```bash
# from the repo root
./scripts/package-jwd-skill.sh
# → dist/ai-native-architecture-advisor-jwd.skill
```

## Trigger phrases

- "Help me design an SAP AI solution"
- "Create an architecture brief"
- "SAP AI Golden Path"
- "North Star architecture review"
- "What SAP services should I use for X"
- "Help me build an AI agent on SAP BTP"

## Output

The skill produces a structured **AI Native Solution Brief** delivered as Joule cards:
Use Case & Problem Statement, The AI-Native Direction, the four-layer Proposed
Architecture (User Experience / Process / Foundation / Platform), a Solution Stack table,
a capability-progression table, and — when a pattern fits — Related Reference
Architectures. You can optionally save the brief as a **persistent Space dashboard**.

## Joule-specific notes

- **No file output.** Unlike the Claude Code / Codex build, this skill never writes
  Markdown, HTML, a reasoning-log file, or an output-collection folder. Everything is
  delivered through Joule's native `render_ui` and Spaces.
- **No Node.js / HTML publisher.** The `publish-brief.mjs` renderer and the HTML template
  from the other build are not used here; Joule renders the cards natively.
- **Web search grounded.** The bundled references are dated snapshots. The skill uses
  `web_search` to confirm current SAP service availability, BTP catalog details, GA status
  and recent SAP announcements, and cites what it checked.
- **Same reasoning discipline.** Draft vs Accepted status, North Star grounding, the SAP
  design boundaries (GenAI Hub routing, supported BTP runtime, per-agent identity), and the
  "AI can hallucinate — validate before use" reminder all carry over unchanged.

## References

The `references/` folder is a full copy of the Claude Code / Codex build's references so
Joule can ground identically: `north-star.md`, `ai-golden-path.md`, `official-ai-golden-path.md`,
`capability-map.md`, the four layer cards (`user-experience.md`, `process.md`,
`foundation.md`, `platform.md`), `output-contract.md` (section structure — the file/publish
parts are overridden by the skill), `service-directory.json`, `ref-arch-index.json`,
`SOURCES.md`, and the SAP Architecture Center license.

## Relationship to the Claude Code / Codex build

Both builds share the same architecture doctrine and references. The only differences are the
delivery mechanism (Joule cards/Spaces vs Markdown+HTML files) and tool surface
(`render_ui` / `create_space` / `add_card_to_space` / `web_search` vs local file + Node.js
publisher). Keep the references in sync when updating one build.
