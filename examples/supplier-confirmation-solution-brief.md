<!-- Managed artifact: Request changes through the AI Native Architecture Advisor instead of editing this file manually. -->

# Supplier confirmations: from one agent to coordinated resolution

> AI Native Solution Proposal

| Metadata | Value |
|---|---|
| Status | Draft |
| Last updated | 2026-09-22 |
| Scenario | Fictional demonstration — assumptions are illustrative, not customer facts |

## Use Case & Problem Statement

A purchasing team uses an existing Fiori worklist to review supplier confirmations against purchase orders. In this fictional starting point, a single custom agent already reads a confirmation, checks the PO through governed tools, and flags a quantity or delivery-date mismatch. Buyers still chase missing context and ask colleagues whether an exception has been resolved; approvals and PO changes remain under buyer control.

## The AI-Native Direction

Keep the buyer's worklist and make the existing agent prepare a complete exception case: the relevant PO lines, the supplier's commitment, the mismatch, and a suggested follow-up. Success means less time gathering evidence and fewer repeated status enquiries; measure those outcomes before broadening automation. The AI Golden Path points to bounded agentic work for variable investigation, with deterministic approval and posting rules.

Add one useful Joule interaction: “Which supplier confirmations still need my attention?” A governed read-only lookup can return a summary and link to the worklist. This is a proposed extension, not a claim that an out-of-the-box skill already exists. If the customer's Joule extension route is unavailable, the same lookup stays in the existing app.

Reimagine the next scope: a buyer could ask for an exception investigation through Joule; later, the custom agent could coordinate with a relevant SAP procurement agent and a customer planning agent to propose a response to a delayed delivery. Each expansion must remove a real handoff. The higher numbered step depends on verified agent capabilities and supported interoperability; adding agents by itself is no improvement.

## Proposed Architecture Overview

```architecture_diagram
{
  "ux": {
    "components": [
      {"name": "Fiori Apps", "type": "primary", "note": "Retain the buyer's detailed worklist for review and approval."},
      {"name": "Joule", "type": "joule", "status": "Proposed", "note": "Read-only status lookup with a link to the case. Confirm the customer's supported extension route."}
    ],
    "progression": {"title": "Engagement: useful access to the same work", "today": 1, "recommended": 2, "target": 5, "captions": {
      "1": "Today: the buyer opens the worklist and triggers the existing agent.",
      "2": "Recommend: ask Joule for unresolved confirmations and open the relevant case; retain the detailed worklist.",
      "3": "Progress toward: request a bounded investigation through Joule when supported invocation and a real reduction in navigation justify it.",
      "5": "North Star: engage through Joule across investigation, approvals and supply-impact follow-up, retaining specialist Fiori views; confirm supported actions and access."
    }}
  },
  "process": {
    "agents": [{"name": "Confirmation Investigator Agent", "type": "custom", "note": "One custom agent assembles evidence and drafts follow-up; the buyer approves changes."}],
    "assistants": [],
    "services": [{"name": "SAP S/4HANA PO APIs", "note": "Reuse released PO operations; validate the exact API, version and authorization against the required lookup."}],
    "mcp": [{"name": "PO MCP Server", "note": "Reuse suitable tools over approved PO APIs. Extend or build an adapter only for missing tool coverage; API and MCP may share a deployment."}],
    "progression": {"title": "Process: expand the business outcome", "today": 2, "recommended": 2, "target": 4, "captions": {
      "2": "Today and recommended: improve the one agent's investigation and follow-up preparation inside the existing process.",
      "4": "Progress toward: coordinate custom, SAP and customer agents to resolve supply-impact exceptions. Verify the specific agents and integration first; keep deterministic approval."
    }}
  },
  "foundation": {
    "ai": [{"name": "SAP AI Core / Generative AI Hub", "note": "Model access for investigation and summarization, with appropriate input/output controls."}],
    "data": [], "stores": [],
    "progression": {"title": "Business context grounding", "today": 1, "recommended": 1, "target": "2a", "branched": true, "captions": {
      "1": "Today and recommended: current PO and confirmation evidence from governed tools.",
      "2a": "North Star opportunity: relevant BDC data products could add planning and supplier context; establish BDC, package access and coverage first.",
      "2b": "Complementary opportunity: retrieve supplier contracts or purchasing policy if such documents are needed and available; no RAG dependency is assumed."
    }}
  },
  "platform": {
    "components": [
      {"name": "SAP BTP Cloud Foundry / Kyma", "status": "To confirm", "note": "Runtime selection is unconfirmed in this fictional scenario; ask which environment the team operates before finalizing."},
      {"name": "SAP Cloud Identity Services", "status": "Candidate", "note": "Confirm the customer's identity provider and authorization setup; preserve user attribution and scope system-triggered access separately."},
      {"name": "SAP Cloud Logging", "note": "Operational application logs, metrics and traces. Audit-event requirements are a separate decision."}
    ]
  },
  "external_integrations": [],
  "marketplace": {"items": [{"name": "Agent Hub", "status": "Candidate", "note": "Assess discovery and management needs."}, {"name": "Agent Gateway", "status": "Later step", "note": "Higher-step coordination candidate, not a dependency of the current one-agent design. Verify the documented integration limits."}]},
  "devtools": {"items": [{"name": "SAP Cloud SDK for AI", "note": "Development SDK for the existing pro-code agent."}, {"name": "Joule Studio", "status": "Candidate", "note": "Evaluate for the proposed status extension; confirm supported capabilities and customer entitlement."}]}
}
```

### User Experience Layer

Keep line-by-line review, exception detail, and approval in the existing Fiori worklist. The proposed Joule interaction answers a narrow status question and links back to the case, saving navigation without requiring buyers to edit detailed confirmations in chat. In a later recommendation, Joule can initiate investigation if that supported integration adds value.

**Progression:** Step 1 → Step 2 → Step 3 → ★ Step 5

- **Step 1:** The buyer works in the existing app.
- **Step 2:** Recommend a read-only Joule status lookup with a deep link.
- **Step 3:** Progress toward bounded investigation initiated through Joule, after validating support and usefulness.
- **Step 5:** North Star: engage through Joule across investigation, approvals and supply-impact follow-up, retaining specialist Fiori views; confirm supported actions and access.

**In this solution:** A proposed Joule status interaction; the main work surface is retained.

**Open items:** Confirm the customer's Joule entitlement, supported extension route, and user-scoped lookup access. Until then, deliver the lookup in the app.

### Process Layer

Improve the existing single agent's evidence gathering and draft follow-up. A buyer reviews proposed actions; deterministic application rules govern approval and changes to purchase orders. The recommended build remains one agent. The reimagined scope adds coordinated resolution only when procurement and planning capabilities can contribute distinct decisions or actions.

Reuse the application's evidence/status capability for the worklist and proposed Joule lookup. First confirm its API and tool coverage. If an API exists but suitable MCP tools do not, add the adapter; if the business capability/API itself is missing, build that service and expose the required operations. These interfaces may share a deployment. No separate Confirmation Case API is assumed. PO lookup uses governed PO MCP tools over released S/4HANA APIs.

SAP Cloud SDK for AI supports the existing pro-code agent; Joule Studio is a candidate for the supported status-extension route. Both belong to Process — Development tooling, distinct from business services and their runtime.

**Progression:** Step 2 → ★ Step 4

- **Step 2:** Today and recommended: one custom agent prepares a complete exception case.
- **Step 4:** Progress toward coordination with relevant SAP and customer agents to propose a supply-impact response.

**In this solution:** Better investigation and follow-up preparation, with governed API/MCP access in Process.

**Open items:** Ask together about reusable evidence/status APIs, MCP servers/tools and an existing MCP gateway; missing central governance does not rule out the agent. Identify the actual SAP and customer agents before committing to Step 4. The SAP Joule integration reference checked on 18 September 2026 states that bidirectional communication with third-party and self-hosted agents through Agent Gateway is not yet supported. Step 4 is architectural direction, not a currently validated deployment promise.

### Foundation Layer

Ground investigation in current PO and confirmation context retrieved through the Process layer's governed tools. Use the existing generative AI hub connection for investigation and summarization. Transactional PO access does not require a BDC data product or a vector store, so neither appears in this diagram. If cross-domain data products are later proposed, establish SAP Business Data Cloud availability, package access and the specific data needed before adding them. Preserve authorization and source references in the evidence presented to the buyer.

The [Bring Your Own Agent reference](https://architecture.learning.sap.com/docs/ref-arch/7b6426) supports the pro-code, tools, model-access and runtime pattern. The [Integrating AI Agents with Joule reference](https://architecture.learning.sap.com/docs/ref-arch/ae6821) explains the integration direction and its current limitations. These references inform the design; they do not confirm customer entitlement.

**In this solution:** A richer evidence payload from existing governed tools.

**Progression:** Step 1 → ★ Step 2a / Step 2b

- **Step 1:** Today and recommended: current PO and confirmation evidence from governed tools.
- **Step 2a:** North Star opportunity: relevant BDC data products could add planning and supplier context; establish BDC, package access and coverage first.
- **Step 2b:** Complementary opportunity: retrieve supplier contracts or purchasing policy if such documents are needed and available; no RAG dependency is assumed.

**Open items:** Ask together about BDC/data-product availability and relevant document sources. These opportunities are not current dependencies; unavailable products remain progression prerequisites.

### Platform Layer

The fictional starting point uses SAP BTP, but Cloud Foundry versus Kyma is not confirmed; the diagram shows both until that choice is established. SAP Cloud Identity Services is a candidate to assess against the customer's identity and authorization setup. User-triggered operations preserve user attribution; scheduled checks use a distinct narrowly scoped identity. Use SAP Cloud Logging for operational logs, metrics and traces, with an operational owner. Audit-event requirements are assessed separately; SAP Audit Log Service is not a default component here. Multi-tenancy is not needed to improve this customer's outcome.

The side panels name discovery and development candidates concisely. Agent Hub is an assessment for discoverability; Agent Gateway belongs to the higher-step integration discussion, not the current one-agent deployment.

**In this solution:** Clear ownership and end-to-end investigation traces.

**Open items:** Confirm Cloud Foundry or Kyma, the identity provider and authorization services, and the operational logging setup.

## Solution Stack

| Component | Layer / Role | Purpose |
|---|---|---|
| Existing Fiori worklist | User Experience | Detailed review and approval |
| Joule — proposed status extension | User Experience | Read-only status and link to the case, conditional on supported customer setup |
| Confirmation Investigator Agent | Process | Assemble evidence and draft follow-up for buyer review |
| SAP S/4HANA PO APIs | Process | Reuse released lookup operations; exact API coverage to confirm |
| PO MCP Server | Process | Reuse governed tools over PO APIs; extend only for missing tool coverage |
| [SAP AI Core](https://discovery-center.cloud.sap/serviceCatalog/1f756a52-8968-4ec4-92d0-f9bddf552ea3?region=all) | Foundation | Existing generative AI hub model access for the illustrative design |
| [SAP Cloud Logging](https://discovery-center.cloud.sap/serviceCatalog/14450845-5f9e-46e3-9488-79c837bd65af?region=all) | Platform | Operational logs, metrics and traces |
| [SAP Cloud Identity Services](https://discovery-center.cloud.sap/serviceCatalog/44f005fe-ae27-4b70-878e-e2429f88d642?region=all) | Platform | Candidate identity integration, subject to customer setup |
| SAP BTP Cloud Foundry / Kyma | Platform — Runtime | Runtime choice to confirm |
| SAP Cloud SDK for AI | Process — Development tooling | SDK used by the pro-code investigator to access AI services |
| Joule Studio — candidate | Process — Development tooling | Evaluate the supported status-extension route; not an assumed dependency |

## Related Reference Architectures

1. [Bring Your Own Agent](https://architecture.learning.sap.com/docs/ref-arch/7b6426) — Strongest fit for the existing pro-code investigator: a pattern for custom agent logic, tools and SAP AI-service integration. Adapt its components to the confirmed SAP runtime and reuse the PO API/MCP capability; this does not establish the exact released PO operations.
2. [Integrating AI Agents with Joule](https://architecture.learning.sap.com/docs/ref-arch/ae6821) — A complementary pattern for the proposed Joule interaction and later agent invocation. Validate the specific status-extension route first. The page checked on 18 September 2026 limits bidirectional third-party/self-hosted communication through Agent Gateway, so that higher-step integration is conditional.
