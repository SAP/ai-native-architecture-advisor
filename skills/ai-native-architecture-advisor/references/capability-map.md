# SAP AI Capability Map

Curated selection guidance · reviewed 2026-09-18; GA rows refreshed against SAP TechEd 2026 (Berlin, Oct 27–29) on 2026-11-16.

Choose capabilities by business need within SKILL.md's SAP model-access and runtime boundaries. Layer cards own progression numbers; this map uses capability names to avoid a second numbering scale. Look up relevant service descriptions, features, names and links in the bundled `service-directory.json`; to place a use case in SAP's autonomous-domain / industry / line-of-business map use `ai-dictionary.json`, and for agents, Joule assistants or embedded AI features SAP already ships use `ai-agents.json` / `ai-assistants.json` / `ai-features.json`. This is not a GA catalogue. Follow SKILL.md's snapshot-only source policy: validation requests below identify evidence needed, not instructions to browse. Confirm customer entitlement with the customer; record unsupported current features, availability, plans and integrations as **Needs source validation**.

## User Experience

| Capability | Fit and limits | Source |
|---|---|---|
| SAP Fiori / SAPUI5 | Detailed business screens, worklists, grids and approvals. Retain when conversation would make the work harder. | [North Star UX](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/user-experience-layer) |
| Joule and Joule skills | Useful status/search interactions and supported bounded actions, including Joule embedded in SAP applications (e.g. S/4HANA, SuccessFactors). Validate the specific extension route; do not assume every task exists or replace specialist screens. | [Joule integration](https://architecture.learning.sap.com/docs/ref-arch/464deb) |
| Joule Work | Standalone AI-first workspace and single entry point for intent-driven, multi-step work across SAP and non-SAP systems; plans and executes with concurrent agents and real-time progress. Distinct surface from embedded Joule. Phased GA (SAP TechEd Oct 2026). Confirm tenant availability and the specific out-of-the-box connections in scope. | [Top TechEd 2026 announcements](https://www.sap.com/blogs/top-sap-teched-2026-announcements) |

## Process

| Capability | Fit and limits | Source |
|---|---|---|
| Applications, workflows and custom agents | Keep predictable rules deterministic. Use agents for justified adaptive reasoning and tool use; expand scope for business outcomes. | [North Star Process](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/process-layer) |
| Business APIs / OData | Reuse released operations before building missing custom capabilities. Standard versus custom does not establish coverage; data products do not replace action APIs. | [North Star Process](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/process-layer) |
| MCP servers / MCP Gateway in SAP Integration Suite | Governed agent tools over business capabilities. Distinguish API reuse, missing MCP exposure and missing business capability. Central governance is useful when justified; MCP availability depends on service plan. MCP is an open tool protocol, not A2A. | [Design APIs and MCP Servers](https://help.sap.com/docs/integration-suite/sap-integration-suite/manage-apis) |
| SAP Build Process Automation | Deterministic workflows, approvals and handoffs around AI. Add only where a workflow capability is needed. | [Joule integration](https://architecture.learning.sap.com/docs/ref-arch/464deb) |

### Process — Development tooling

Authoring tools and libraries belong in the diagram's Development Tooling side panel and the Process tooling group of the Solution Stack, not among deployed business services or Platform runtimes.

| Capability | Fit and limits | Source |
|---|---|---|
| Joule Studio | SAP skills/agent authoring with supported Joule integration. GA (SAP TechEd Oct 2026): role-based access (business users and developers in one tool), intent-based development (natural language → API/process/data identification via SAP Knowledge Graph), AI agent extensions (instructions, APIs, MCP connections, workflow triggers), observability and admin controls (behaviour, model usage, spend), governance via SAP AI Agent Hub (up to 500 agents), 70+ selectable models, and CLI tooling/container orchestration for pro-code. **n8n workflow integration is early-adopter only — NOT GA; do not recommend it as GA.** Confirm entitlement. An alternative to pro-code, not a higher maturity rank. | [SAP Joule Studio](https://www.sap.com/denmark/products/artificial-intelligence/joule-studio/custom-ai-agents.html) |
| SAP Cloud SDK for AI / SAP AI SDK | Client libraries for SAP AI Core, generative AI hub and supported integrations. Use the exact name from current language/version documentation. The SDK is not itself an agent runtime. | [SAP AI SDK](https://sap.github.io/ai-sdk/) |
| SAP Cloud SDK | SAP service-integration libraries when needed. Distinguish the general SDK from the AI SDK. | [SAP Cloud SDK](https://sap.github.io/cloud-sdk/) |
| SAP Cloud Application Programming Model (CAP) | Build missing enterprise services and business logic. CAP is a framework; its deployed API belongs in Process and hosting in Platform. | [CAP](https://cap.cloud.sap/docs/) |
| SAP Build | Select the relevant application, workflow or agent-development capability. Do not add the umbrella name as another runtime box. | [SAP Build](https://help.sap.com/docs/build) |

## Foundation

| Capability | Fit and limits | Source |
|---|---|---|
| SAP AI Core | AI execution and lifecycle services. Distinguish custom-model hosting from LLM consumption through generative AI hub. | [SAP AI Core](https://help.sap.com/docs/sap-ai-core) |
| Generative AI hub in SAP AI Core | Required access point for solution-controlled LLM calls. Select supported models and configure needed orchestration controls; using the hub does not automatically enable every guardrail. | [Generative AI hub](https://help.sap.com/docs/sap-ai-core/generative-ai/generative-ai-hub) |
| SAP-RPT model family | Relational foundation models through generative AI hub / SAP AI Core. SAP-RPT-1.5 and SAP-RPT-2.0 cover structured-data classification and regression; RPT-2.0 (SAP TechEd Oct 2026) adds anomaly/outlier detection and embeddings-based analysis over tabular records. SAP-RPT-TS is a time-series forecasting variant for business metrics (e.g. demand, financial planning; used in SAP IBP). Evaluate task suitability against custom ML; an alternative, not an automatic maturity upgrade. | [Predicting PO delivery delays with SAP-RPT](https://community.sap.com/t5/technology-blog-posts-by-sap/predicting-purchase-order-delivery-delays-with-sap-rpt/ba-p/14521632) |
| SAP HANA Cloud PAL | In-database predictive ML when task, locality and lifecycle fit. Compare evaluated alternatives rather than defaulting every prediction to a relational foundation model. | [AI Golden Path](https://architecture.learning.sap.com/docs/ai-golden-path) |
| SAP HANA Cloud vector / knowledge graph capabilities | Semantic similarity retrieval or relationship-oriented context, respectively. Verify the specific capability; neither is needed for a simple transactional lookup. | [SAP HANA Cloud](https://help.sap.com/docs/hana-cloud) |
| SAP Agent Memory Service | Persistent memory layer for AI agents on SAP Business AI Platform, built on the SAP HANA Cloud vector engine. Short-term Messages API (session/conversation history) and long-term Memories API (semantic storage across sessions/workflows); memories are governed, editable and deletable; OAuth 2.0 and configurable retention. GA Q3 2026 with bring-your-own HANA Cloud (fully managed offering planned later). Evaluate when an agent needs context continuity across sessions; requires a HANA Cloud entitlement. | [SAP Agent Memory Service is now GA](https://community.sap.com/t5/technology-blog-posts-by-sap/give-your-ai-agents-long-term-memory-sap-agent-memory-service-is-now/ba-p/14510374) |
| Document grounding | Relevant documents for grounded answers. Distinguish Joule document grounding from generative AI hub grounding; select supported sources and access controls for the consumer. | [Joule integration](https://architecture.learning.sap.com/docs/ref-arch/464deb) · [Generative AI on SAP BTP](https://architecture.learning.sap.com/docs/ref-arch/39eb58) |
| SAP Business Data Cloud and data products | Governed business-data consumption. Confirm BDC, package access and coverage; do not invent a PO data product or use one instead of a write API. For master-data-heavy scenarios (customer 360, supplier, product), **SAP Reltio** is now a named GA multi-domain MDM component inside BDC (SAP TechEd Oct 2026) that cleanses, harmonizes and unifies records across SAP and non-SAP systems. Note: full SAP Reltio *data product* integration into BDC is planned for Q1 2027 — not yet GA. | [Data products](https://help.sap.com/docs/business-data-cloud/administering-sap-business-data-cloud/activate-data-packages) |
| SAP Business Data Cloud Connect | Governed sharing to supported partner platforms. Verify the specific route and semantics rather than asserting universal zero-copy support. | [BDC architecture](https://architecture.learning.sap.com/docs/ref-arch/e1732d) |
| SAP Document AI | Structured extraction from supported business documents. Validate formats and quality; do not claim all file types/layouts work. Process consumes this AI capability. | [SAP Document AI](https://architecture.learning.sap.com/docs/ref-arch/766aa3) |
| A2A and Agent Gateway | Agent interoperability and a separate SAP-managed gateway. Agent Gateway is GA (SAP TechEd Oct 2026): every Joule Agent is natively an A2A endpoint by default, and third-party agents can securely invoke Joule Agents via governed A2A and MCP interactions with enforced access control and full traceability. No gateway dependency for a single-agent solution. | [Integrating AI Agents with Joule](https://architecture.learning.sap.com/docs/ref-arch/ae6821) |

## Platform

| Capability | Fit and limits | Source |
|---|---|---|
| SAP BTP Cloud Foundry / Kyma | Custom application/agent hosting. Select by landscape and workload, not maturity. A supported SAP product-managed runtime may instead own the capability. SAP BTP is now positioned within **SAP Business AI Platform (BAIP)**, the umbrella spanning SAP BTP, SAP Business Data Cloud and SAP Business AI; Cloud Foundry and Kyma remain the underlying runtimes. | [North Star Platform](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/platform-layer) |
| SAP Cloud Identity Services | Identity federation and authentication where applicable. Establish authorization, user propagation and system identity across the integration; a product box alone does not establish permissions. | [SAP Cloud Identity Services](https://help.sap.com/docs/cloud-identity-services) |
| SAP Destination service / Connectivity service / Cloud Connector | Select for the actual connection path. Destinations can apply to cloud targets; Cloud Connector serves relevant on-premise connectivity. Do not choose or omit the whole bundle solely because a landscape is cloud-based. | [Connectivity](https://help.sap.com/docs/connectivity) |
| SAP Cloud Logging | Operational logs, metrics and traces. Product-managed runtimes may supply supported telemetry. Assess audit-event requirements separately. | [SAP Cloud Logging](https://help.sap.com/docs/cloud-logging) |
| SAP Audit Log service | Identified security/compliance audit events, not a replacement for operational observability. | [SAP Audit Log](https://help.sap.com/docs/btp/sap-business-technology-platform/audit-log-service) |
| SAP AI Agent Hub | Agent discovery/governance. Two GA capabilities (SAP TechEd Oct 2026): an AI registry that auto-discovers agents, LLMs and MCP servers across vendors, and an evaluation/verification workflow that scores and validates agents before deployment. Bundled with a Joule Studio subscription for up to 500 agents. Four further planned capabilities are not yet GA. Not assumed deployment infrastructure for every agent. | [SAP AI Agent Hub (Joule Studio)](https://www.sap.com/sk/products/artificial-intelligence/joule-studio/custom-ai-agents.html) |

## Maintenance

Maintainers update this map and the bundled JSON deliberately when product scope or selection guidance changes, retaining honest source dates and reviewing the changes for a release. Installed copies do not refresh themselves. Record the bundled evidence and solution-specific validation gaps in the reasoning log.
