# User Experience Layer Card

Advisor-curated guidance · content updated 2026-09-22. Source: [North Star publication](north-star.md#3-user-experience-layer); [provenance](SOURCES.md#north-star).

## Intent

The User Experience layer moves SAP business work from application navigation toward intent-driven engagement. Users express intent, receive relevant information and actions, and continue work across applications without stitching context together manually.

Fiori applications remain first-class for specialist views, detailed screens, administration, dashboards, exception handling, and any interaction a conversational surface doesn't present well. External channels (Teams, Slack, partner portals) are valid when they invoke governed SAP capabilities and preserve SAP business logic, authorization, approvals, and auditability.

## Ladder — 1.1 Joule Engagement

*To what extent is Joule becoming the engagement layer for this scenario's work?* These levels are shown openly in the brief with scenario-specific captions.

| Step | Engagement step | Example |
|---|---|---|
| 1 | Custom Fiori application with embedded AI | A Fiori transaction shows AI suggestions (classification, summarization, prediction) and can trigger a custom agent from a button. A valid rung — and the right *recommendation* when the interaction doesn't fit Joule. |
| 2 | Joule for read-only, support, or insight | A clerk checks status, asks questions, or views analytics in Joule; entry and approvals stay in the app. |
| 3 | Joule for bounded transactional actions | A clerk uploads a PDF invoice in Joule; a custom agent performs one bounded action (extract, check, post or return an exception). |
| 4 | Joule as primary interface for the main workflow | Upload, match, and post-or-escalate run through Joule end to end; the clerk makes judgment calls; Fiori keeps the deep screens. |
| 5 | Joule as primary engagement across the whole process | Analytics, transactions, approvals, exceptions, and follow-up all engage through Joule; Fiori remains for specialist/admin views. |

## Applied judgment

- **Explore intent-driven engagement.** Start with a useful Joule interaction and explain the Step 5 opportunity across the process, including what would enable it. Keep detailed editing and mass processing in Fiori where appropriate; broader Joule engagement need not replace specialist screens.
- **Recommend a meaningful step.** Ask about Joule access and the existing work surface in the early landscape batch. Separate current availability, the recommended interaction and the North Star destination; a missing prerequisite changes the path, not whether the opportunity is explained. If broader engagement adds no value here, say why.
- **One journey.** Whatever the mix of Joule, Fiori, and external channels, the user should always know where to work; conversational interaction must hand off cleanly to actions, approvals, exceptions, and detailed follow-up.
- **Universal qualities apply here too**: an external channel or custom UI must preserve SAP identity, authorization, approvals, and auditability, and automation must keep user control, approval, override, and recovery visible.
- **SAP-deployed UIs follow Fiori design guidelines** — recommend alignment when a custom UI exposes SAP business-process screens.
