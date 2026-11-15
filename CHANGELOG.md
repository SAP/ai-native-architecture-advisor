# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2026-11-16

Reference refresh aligned to SAP TechEd 2026 (confirmed GA only), plus Joule Work Desktop support and distribution/contrib improvements.

### Added

- **Joule Work Desktop** as a supported host, with side-load install steps and a release-packaged skill zip.
- SAP TechEd 2026 confirmed-GA capabilities across the reference cards: **Agent Gateway** (GA), **SAP Agent Memory Service** (GA Q3 2026), expanded **SAP-RPT** model family (RPT-1.5/2.0/TS), **Joule Work** (phased GA), and **SAP Reltio** MDM within SAP Business Data Cloud.

### Changed

- **Joule Studio** reference updated to its TechEd 2026 GA capabilities (n8n integration noted as early-adopter, not GA).
- **SAP AI Agent Hub** entry tightened to its two confirmed-GA capabilities.
- Positioned SAP BTP within the **SAP Business AI Platform (BAIP)** framing.
- Reference-card snapshot dates note the 2026-11-16 TechEd refresh; `SOURCES.md` gained a dated TechEd 2026 source table.
- Joule skill download now served from a static GitHub Release asset (replaces an unreliable third-party zip service).
- Code of Conduct now carries the full SAP-canonical Contributor Covenant v2.1 text.
- README gained explicit **Requirements** and **Contributing** sections, and a footer **Contact** link.

### Note

- Capabilities announced at TechEd 2026 but not yet GA (e.g. SAP Enterprise AI Gateway) are intentionally excluded until GA.

## [0.2.0] - 2026-10-05

Beta. First public release on `github.com/SAP`.

### Added

- One shared skill for both Claude Code and Codex, with marketplace and standalone
  install paths.
- Self-contained bundled references: service directory, reference-architecture index,
  and commit-pinned North Star and AI Golden Path snapshots. The Advisor reads local
  files only and makes no runtime reference-service calls.
- Local Node.js publisher that renders a solution brief to a single self-contained
  HTML report with no remote fonts, scripts, or images.
- AI Native Solution Brief output: solution brief, reasoning log, and visual HTML
  proposal, saved to a `SAP AI Native Solutions/` collection in the workspace.
- `SOURCES.md` recording provenance, dates, and modifications for each bundled source.
- REUSE-compliant licensing: Apache-2.0 first-party with bundled marked (MIT) and
  SAP Architecture Center material annotated with provenance.

[Unreleased]: https://github.com/SAP/ai-native-architecture-advisor/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/SAP/ai-native-architecture-advisor/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/SAP/ai-native-architecture-advisor/releases/tag/v0.2.0
