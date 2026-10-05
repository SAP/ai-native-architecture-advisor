# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Code of Conduct now carries the full SAP-canonical Contributor Covenant v2.1 text.
- README gained explicit **Requirements** and **Contributing** sections.

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

[Unreleased]: https://github.com/SAP/ai-native-architecture-advisor/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/SAP/ai-native-architecture-advisor/releases/tag/v0.2.0
