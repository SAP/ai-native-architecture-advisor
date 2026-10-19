# Foundation Layer Card

Advisor-curated guidance · content updated 2026-09-22. Source: [North Star publication](north-star.md#5-foundation-layer); [provenance](SOURCES.md#north-star).

## Intent

The Foundation layer makes SAP data, business context, models, agent interoperability, and guardrails usable for AI through governed patterns — not by copying SAP data into an AI stack. Decide context grounding, data integration, model access, agent interoperability, and guardrails separately. Business APIs and MCP access belong to the Process layer; the context retrieved through them supports grounding here.

## Ladder — 3.1 Business Context Grounding

| Step | Grounding step | Example |
|---|---|---|
| 1 | Structured API/MCP grounding | AI retrieves current business context through released SAP APIs or MCP tools. |
| 2a | BDC data products | Governed cross-domain business context from SAP Business Data Cloud data products. |
| 2b | RAG with SAP services | Document Grounding, HANA Vector Engine, or HANA Knowledge Graph for document/semantic retrieval. |

2a and 2b are alternatives/complements chosen by need — never a forced sequence.

Explore richer business context and explain the Step 2a/2b opportunities with scenario benefits. Ask together about the business information needed, SAP Business Data Cloud/data-product availability, and relevant document sources. Follow SKILL.md's availability rule: unavailable data products belong in the progression with prerequisites, not the recommended architecture; unknown access remains an explicit question.

For 2a, use `Data Products` when the specific product is not yet known, or its verified name when known; include SAP Business Data Cloud alongside it. For 2b, establish what documents need retrieval and why; extraction of the current invoice alone does not establish RAG. Name a store only when selected, keeping generic persistence requirements in open items. Transactional API lookup remains valid; explain when broader context would improve investigation rather than automatically adding a data product or vector store. Source: [Working with Data Products](https://help.sap.com/docs/SAP_BUSINESS_DATA_CLOUD/f7acf8c9dad54e99b5ce5ebc633ed8e1/fcf9975b49ea4adeb837e4be16116175.html).

## 3.2 Data Integration

SAP data is shared with third-party or custom systems only through SAP-approved patterns, preferably governed sharing where supported. Verify the relevant BDC Connect or partner integration route rather than assuming every destination is supported. Steer away from unreleased interfaces. This is a design requirement, not a progression ladder.

## 3.3 Model Access and 3.4 ML Strategy

Apply SKILL.md's model-access boundary: solution-controlled LLM calls use the generative AI hub in SAP AI Core. Select supported models and validate deployment region, residency and the required orchestration controls. SAP-managed embedded AI is consumed through its supported product interface; do not imply control over the product's internal model implementation.

Predictive ML choices share one rank: choose by task, evaluation results, latency, data locality and operational ownership. They are alternatives, not a mandatory climb toward an SAP model. When displaying choices numerically, use Step 1a/1b/1c with `branched: true`:

| Step | ML model step | Example |
|---|---|---|
| 1a | Existing custom ML on a supported SAP runtime | Retain a suitable model with governed SAP data access and an evaluated business outcome. |
| 1b | SAP HANA Cloud or SAP AI Core ML | Use HANA Cloud PAL for suitable in-database ML, or AI Core for custom-model lifecycle and deployment. |
| 1c | SAP-RPT-1.5 | Evaluate the relational model for supported structured-data classification/regression through generative AI hub; it is not automatically better than a custom model. |

Source: [SAP-RPT-1.5 model card](https://www.sap.com/documents/2026/07/b8cb2cd1-5d7f-0010-bca6-c68f7e60039b.html), checked 2026-09-18.

## Ladder — 3.5 Agent Interoperability

For a single-agent recommendation, omit A2A dependencies from the diagram. Explain the higher-step interoperability opportunity when the North Star expands responsibility across agents, with availability and integration prerequisites.

| Step | Interoperability step | Example |
|---|---|---|
| 1 | A2A protocol | Agents interoperate via A2A rather than raw API calls. |
| 2 | Agent Gateway using A2A | Agent-to-agent interaction mediated by Agent Gateway where available. |

## 3.6 Guardrails and Content Safety

Sanitize/constrain/mask untrusted inputs before the LLM; check outputs for unsafe content and PII before showing users or triggering business actions. Use GenAI Hub Orchestration capabilities (data masking, content filtering) where available; custom-side guardrails where SAP services don't yet cover the case. This is a universal quality — it applies at every level.

## Applied judgment

- **Separate grounding from access** — explain the required business context here and the API/MCP delivery path in Process.
- **Context supports the agent's responsibility.** Explain what richer context changes in its investigation or decisions; separate current access from the enabling work for the North Star.
- **Grounding by need**: data products for governed cross-domain context, RAG for document/semantic retrieval, APIs for current transactional context. These can complement one another; higher capability is not simply adding every mechanism.
- **SAP customer data stays inside approved patterns** — no copying into external stacks, vector DBs, or training pipelines outside them. This is a universal quality.
- **Name families when no product fits** (an MCP on BTP, a governed grounding service) and flag the Open Item — never invent a product.
