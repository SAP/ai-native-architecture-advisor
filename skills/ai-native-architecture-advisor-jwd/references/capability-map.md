# SAP AI Capability Map

Curated selection guidance · reviewed 2026-09-18.

Choose capabilities by business need within SKILL.md's SAP model-access and runtime boundaries. Layer cards own progression numbers; this map uses capability names to avoid a second numbering scale. Look up relevant service descriptions, features, names and links in the bundled `service-directory.json`. This is not a GA catalogue. Follow SKILL.md's snapshot-only source policy: validation requests below identify evidence needed, not instructions to browse. Confirm customer entitlement with the customer; record unsupported current features, availability, plans and integrations as **Needs source validation**.

## User Experience

| Capability | Fit and limits | Source |
|---|---|---|
| SAP Fiori / SAPUI5 | Detailed business screens, worklists, grids and approvals. Retain when conversation would make the work harder. | [North Star UX](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/user-experience-layer) |
| Joule and Joule skills | Useful status/search interactions and supported bounded actions. Validate the specific extension route; do not assume every task exists or replace specialist screens. | [Joule integration](https://architecture.learning.sap.com/docs/ref-arch/464deb) |

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
| Joule Studio | SAP skills/agent authoring and supported Joule integration. Confirm capabilities and entitlement. An alternative to pro-code, not a higher maturity rank. | [North Star Process](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/process-layer) |
| SAP Cloud SDK for AI / SAP AI SDK | Client libraries for SAP AI Core, generative AI hub and supported integrations. Use the exact name from current language/version documentation. The SDK is not itself an agent runtime. | [SAP AI SDK](https://sap.github.io/ai-sdk/) |
| SAP Cloud SDK | SAP service-integration libraries when needed. Distinguish the general SDK from the AI SDK. | [SAP Cloud SDK](https://sap.github.io/cloud-sdk/) |
| SAP Cloud Application Programming Model (CAP) | Build missing enterprise services and business logic. CAP is a framework; its deployed API belongs in Process and hosting in Platform. | [CAP](https://cap.cloud.sap/docs/) |
| SAP Build | Select the relevant application, workflow or agent-development capability. Do not add the umbrella name as another runtime box. | [SAP Build](https://help.sap.com/docs/build) |

## Foundation

| Capability | Fit and limits | Source |
|---|---|---|
| SAP AI Core | AI execution and lifecycle services. Distinguish custom-model hosting from LLM consumption through generative AI hub. | [SAP AI Core](https://help.sap.com/docs/sap-ai-core) |
| Generative AI hub in SAP AI Core | Required access point for solution-controlled LLM calls. Select supported models and configure needed orchestration controls; using the hub does not automatically enable every guardrail. | [Generative AI hub](https://help.sap.com/docs/sap-ai-core/generative-ai/generative-ai-hub) |
| SAP-RPT-1.5 | Structured-data classification/regression through generative AI hub. Evaluate task suitability against custom ML; an alternative, not an automatic maturity upgrade. | [SAP-RPT-1.5 model card](https://www.sap.com/documents/2026/07/b8cb2cd1-5d7f-0010-bca6-c68f7e60039b.html) |
| SAP HANA Cloud PAL | In-database predictive ML when task, locality and lifecycle fit. Compare evaluated alternatives rather than defaulting every prediction to a relational foundation model. | [AI Golden Path](https://architecture.learning.sap.com/docs/ai-golden-path) |
| SAP HANA Cloud vector / knowledge graph capabilities | Semantic similarity retrieval or relationship-oriented context, respectively. Verify the specific capability; neither is needed for a simple transactional lookup. | [SAP HANA Cloud](https://help.sap.com/docs/hana-cloud) |
| Document grounding | Relevant documents for grounded answers. Distinguish Joule document grounding from generative AI hub grounding; select supported sources and access controls for the consumer. | [Joule integration](https://architecture.learning.sap.com/docs/ref-arch/464deb) · [Generative AI on SAP BTP](https://architecture.learning.sap.com/docs/ref-arch/39eb58) |
| SAP Business Data Cloud and data products | Governed business-data consumption. Confirm BDC, package access and coverage; do not invent a PO data product or use one instead of a write API. | [Data products](https://help.sap.com/docs/business-data-cloud/administering-sap-business-data-cloud/activate-data-packages) |
| SAP Business Data Cloud Connect | Governed sharing to supported partner platforms. Verify the specific route and semantics rather than asserting universal zero-copy support. | [BDC architecture](https://architecture.learning.sap.com/docs/ref-arch/e1732d) |
| SAP Document AI | Structured extraction from supported business documents. Validate formats and quality; do not claim all file types/layouts work. Process consumes this AI capability. | [SAP Document AI](https://architecture.learning.sap.com/docs/ref-arch/766aa3) |
| A2A and Agent Gateway | Agent interoperability and a separate SAP-managed gateway choice. Validate direction and availability. The Joule reference checked on 2026-09-18 still limits bidirectional third-party/self-hosted integration through Agent Gateway. No gateway dependency for a single-agent solution. | [Integrating AI Agents with Joule](https://architecture.learning.sap.com/docs/ref-arch/ae6821) |

## Platform

| Capability | Fit and limits | Source |
|---|---|---|
| SAP BTP Cloud Foundry / Kyma | Custom application/agent hosting. Select by landscape and workload, not maturity. A supported SAP product-managed runtime may instead own the capability. | [North Star Platform](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/platform-layer) |
| SAP Cloud Identity Services | Identity federation and authentication where applicable. Establish authorization, user propagation and system identity across the integration; a product box alone does not establish permissions. | [SAP Cloud Identity Services](https://help.sap.com/docs/cloud-identity-services) |
| SAP Destination service / Connectivity service / Cloud Connector | Select for the actual connection path. Destinations can apply to cloud targets; Cloud Connector serves relevant on-premise connectivity. Do not choose or omit the whole bundle solely because a landscape is cloud-based. | [Connectivity](https://help.sap.com/docs/connectivity) |
| SAP Cloud Logging | Operational logs, metrics and traces. Product-managed runtimes may supply supported telemetry. Assess audit-event requirements separately. | [SAP Cloud Logging](https://help.sap.com/docs/cloud-logging) |
| SAP Audit Log service | Identified security/compliance audit events, not a replacement for operational observability. | [SAP Audit Log](https://help.sap.com/docs/btp/sap-business-technology-platform/audit-log-service) |
| SAP AI Agent Hub | Agent discovery/governance candidate. Verify current product scope and access; not assumed deployment infrastructure for every agent. | [SAP AI Agent Hub](https://help.sap.com/docs/leanix/ea/ai-agent-hub) |

## Maintenance

Maintainers update this map and the bundled JSON deliberately when product scope or selection guidance changes, retaining honest source dates and reviewing the changes for a release. Installed copies do not refresh themselves. Record the bundled evidence and solution-specific validation gaps in the reasoning log.
