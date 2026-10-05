# Process Layer Card

Advisor-curated guidance · content updated 2026-09-22. Source: [North Star publication](north-star.md#4-process-layer); [provenance](SOURCES.md#north-star).

## Intent

The Process layer moves SAP business processes from application-bound execution toward agent-enabled orchestration — applications, workflows, APIs, events, business actions, and agents working together for the business outcome. Applications remain capability providers: they expose governed actions, data, events, and tools that agents use within clear boundaries.

Proactively explore an agent's responsibility for investigation, enrichment, decisions, coordination and follow-through. Deterministic rules, approvals and posting tools support that responsibility; they are compatible with agentic orchestration. If a simple AI-assisted application or fixed workflow is the better recommendation, explain the scenario-specific reason and the broader agentic opportunity.

When human decisions, handoffs or long-running coordination matter, establish the existing orchestration capability and any gap before selecting a product. Reuse what fits; propose new capability only where justified, with availability and integration qualified. Explain its responsibility alongside the agent, leaving detailed rules and task configuration for later. For example, an approval flow might reuse an application-native workflow or use **SAP Build Process Automation**; neither is a universal default. Ground the choice in the local [capability map](capability-map.md) and matching service-directory records.

## Ladder — 2.1 AI Process Capability

*To what extent are AI capabilities and agents used in the business process?* Shown openly in the brief with scenario captions.

| Step | Capability step | Example |
|---|---|---|
| 1 | SAP Business AI embedded in the application | The app classifies, summarizes, predicts, or recommends; the user decides and completes the process. Uses at least one SAP Business AI service. |
| 2 | A custom agent inside or triggered from the application | An agent checks missing data, enriches a record, prepares a recommendation, drafts a follow-up. |
| 3 | Joule triggers custom agents in the user workflow | The user asks Joule to process an invoice or start an approval; Joule invokes one or more collaborating custom agents. |
| 4 | Joule coordinates custom and SAP agents across processes | Joule coordinates custom agents plus relevant SAP agents (procurement, finance, supply chain) across SAP business processes. |

## 2.2 Application and agent development

Pro-code and Joule Studio are alternative or complementary development approaches, not a maturity ranking. Distinguish how the team builds and maintains the application/agent from where it runs; these questions can share one batch. SAP Cloud SDK for AI is a development dependency for AI-service access; Joule Studio supports relevant skills/agent authoring subject to current capabilities and entitlement.

Call a scenario-specific implementation a **custom agent**, regardless of whether a customer or partner builds it.

Group selected SDKs, frameworks and authoring tools under **Process — Development tooling** in the Solution Stack and retain the diagram's Development Tooling side panel. Tooling supports Process capability creation; it is not a deployed business service. Runtime, identity and operations remain Platform.

## 2.3 Business APIs and MCP access

Place business services/APIs and agent-facing MCP servers or gateways in Process. The official [Process layer](https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/process-layer) includes a bridge for APIs/OData services and MCP access. Foundation describes the context and AI services these capabilities consume.

In the early capability-access batch, ask what must be read or changed and whether suitable business APIs, MCP servers/tools and an MCP gateway already exist. Unknown coverage is an architect follow-up, not a reason to discard the agent opportunity. Select the access route:

| Existing capability | Proposed work |
|---|---|
| Suitable API and MCP tools exist | Reuse both; verify operations and authorization. |
| Suitable API exists, MCP tools do not | Expose the required operations through MCP for agent access. |
| Business capability/API is missing | Build the missing service/API and expose relevant operations through MCP. |
| Deterministic application calls only | Use governed APIs; MCP is not required merely because the application includes AI. |

Custom applications can already have suitable APIs; standard applications may lack a released operation. Check coverage, permissions and supported versions. An API and its MCP adapter are different interfaces, not necessarily separate deployments. Name a new service only when the missing capability is established; otherwise record an open item. Data products can supply context but do not replace transactional action APIs.

### Numbered agent-access progression

| Step | Agent access step | Example |
|---|---|---|
| 1 | Governed MCP access on SAP BTP | Reuse or build appropriate MCP tools over approved business capabilities. |
| 2 | Centrally governed MCP access | MCP Gateway in SAP Integration Suite where supported and centralized policy/lifecycle management is justified. |

The increased scope is centralized governance, not creating more adapters. An absent MCP gateway does not prevent governed MCP tools; describe central governance as a next step where useful. Distinguish the MCP gateway for tool access from Agent Gateway for agent-to-agent coordination. Validate current support. Application and agent development is covered in 2.2 above.

## Applied judgment

- **Aim toward coordinated outcomes.** Explain Step 4: how relevant custom and SAP agents could share responsibility across processes, the extra outcome and the required capabilities/integration. Recommend the useful scope now; broader orchestration, not agent count, is the progression.
- **Deterministic where it matters.** Rules, approvals, postings, and compliance-sensitive actions stay deterministic and auditable, with agentic behavior around them where it earns its place.
- **Agents act within boundaries**: clear tool boundaries, deterministic checkpoints, approvals, override and recovery paths, and an audit trail — design these in from the start, whatever the level.
- **Design agents around the business domain or end-to-end process**, not around individual systems.
- **AI must connect to the process.** An AI suggestion disconnected from any decision, action, outcome, or follow-up path isn't process capability yet — say so and propose the connection.
