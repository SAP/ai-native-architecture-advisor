# Supplier confirmation demonstration — decision log

Date: 2026-09-22. Fictional scenario; no customer landscape is asserted.

The source checks below are historical evidence recorded when this example was authored. The installed Advisor uses bundled snapshots; it does not repeat these live checks when opening or publishing the example.

- Assumptions: existing Fiori worklist, one custom agent on BTP, governed PO tools, existing model-access integration. These establish the demo starting point only.
- Decision: preserve numbered progression. UX 1/2/3/5 describes engagement scope; Process 2/4 describes investigation versus coordinated resolution; Foundation 1/2a/2b distinguishes transactional context from data-product and document-retrieval opportunities. Numbers come from curated Advisor cards, not official certification levels.
- Decision: improve one agent now; no additional agent is included in the recommended diagram. Larger coordination is described in the ladder with a reason and explicit dependencies.
- Decision: propose one read-only Joule status interaction. It is conditional on the customer setup, with the existing app as fallback.
- Decision: keep tool/discovery side panels, labeling assessments and higher-step candidates so they are not read as deployed dependencies.
- Sources read 2026-09-18: SAP AI Golden Path and technology decision tree; https://architecture.learning.sap.com/docs/ref-arch/7b6426 (current title Bring Your Own Agent); https://architecture.learning.sap.com/docs/ref-arch/ae6821 (Integrating AI Agents with Joule).
- Source check: the Joule integration page returned HTTP 200 and explicitly states bidirectional communication with third-party/self-hosted agents through Agent Gateway is not yet supported. This limits the higher-step claim. A reference architecture is not proof of GA or customer entitlement.
- Identity check: SAP AI Core, SAP Cloud Logging and SAP Cloud Identity Services names and links were checked against the local service directory. No GA assertion is derived from that file.
- User-requested presentation revision: product/component names in the diagram, details in accessible info hints and prose. Joule mark only on Joule; reusable header icons remain in the template.
- Presentation update 2026-09-22: the shared renderer places Joule first, balances component cards, keeps marketplace/tooling visible and shows candidate/later-step qualifiers directly. No external integration is asserted in this example, so that optional panel is absent. Source dates below remain unchanged; this update is not live verification.
- Runtime is intentionally unresolved between Cloud Foundry and Kyma. Identity integration is a candidate, not an asserted customer deployment. Evidence/status access is a discovery item; a separate Confirmation Case API is not assumed.
- Layer correction: APIs and MCP tools are Process capability interfaces; context/model services remain Foundation. Source: https://architecture.learning.sap.com/docs/ai-native-north-star-architecture/process-layer and its bridge-layer diagram.
- Ask whether API and MCP tools exist independently. Reuse both, expose an existing API, or build missing business capability/API and MCP exposure as appropriate. API and MCP need not be separate deployments.
- User-approved stack grouping: SDKs and authoring tools are Process — Development tooling, retained in the diagram's tooling panel. This is a presentation convention, not a hosted-service classification. SAP Cloud SDK for AI accesses AI services: https://sap.github.io/ai-sdk/docs/js/v1/frequently-asked-questions.
- Operational logging uses SAP Cloud Logging, as confirmed by https://help.sap.com/docs/cloud-logging. This does not settle separate audit-event requirements.
- No BDC data product or vector store is required for the transactional PO lookup. For future data products, first establish BDC/package access; https://help.sap.com/docs/SAP_BUSINESS_DATA_CLOUD/f7acf8c9dad54e99b5ce5ebc633ed8e1/fcf9975b49ea4adeb837e4be16116175.html describes package activation.
- Open: customer entitlement, supported Joule extension, exact SAP agent capabilities, data access and operational ownership. This demonstration cannot establish these customer facts.
