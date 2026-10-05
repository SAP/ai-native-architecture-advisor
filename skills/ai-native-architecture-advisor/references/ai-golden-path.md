# SAP AI Golden Path - Local Routing Reference

Status: Curated routing card, with a [full local source snapshot](official-ai-golden-path.md). See [SOURCES.md](SOURCES.md#ai-golden-path) for the source commit, page dates and maintenance steps.

## Official Sources

- [SAP's AI Golden Path](https://architecture.learning.sap.com/docs/ai-golden-path)
- [Technology Decision Tree for AI](https://architecture.learning.sap.com/docs/golden-path/ai-golden-path/technology-overview)

## Purpose

Use this reference when the scenario identifies a concrete AI need. North Star supplies the architectural vision and layers; the Golden Path helps select AI approaches, development paths, and candidate capability families. It does not determine current product availability, region, entitlement, release status, SDK behavior, or customer feasibility.

Keep the AI Native Solution Brief focused on the supplied business scenario. Use the Golden Path's decision guidance and relevant Architecture Center patterns to explain the chosen approach.

## Approach Routing

Use North Star to reimagine the outcome, then select complementary approaches for the responsibilities involved:

| Scenario need | Candidate approach |
|---|---|
| Structured business-data prediction with a defined output such as a score, label, or numeric value | Relational foundation model or classic machine learning, depending on the data, task, latency, locality, interpretability, and lifecycle needs |
| Language understanding, generation, transformation, semantic retrieval, or bounded orchestration over documents and text | LLM or retrieval-augmented generation |
| Adaptive multi-step reasoning, planning, tool use, state, or coordination across tasks and data sources | AI agent or agentic workflow |
| Predictable rules, approvals, postings, or fixed process steps | Keep the step deterministic and use AI only around it when reasoning adds value |

Proactively examine adaptive investigation, tool use and follow-through as agent responsibilities. Deterministic steps can be tools or controls within that design. Explain the scenario-specific tradeoff when recommending a fixed workflow instead, and retain the broader North Star opportunity. Agent count is not a maturity measure.

Read only the material source sections: [technology decision tree](official-ai-golden-path.md#technology-decision-tree-for-ai), [classic ML](official-ai-golden-path.md#classic-ml-scenarios), [generative AI applications](official-ai-golden-path.md#genai-applications), [Joule skills](official-ai-golden-path.md#joule-skills), [predictive/tabular AI](official-ai-golden-path.md#predictive--tabular-ai), [Document AI](official-ai-golden-path.md#document-ai), or [building agents](official-ai-golden-path.md#build-ai-agents-on-sap-btp). The [overview](official-ai-golden-path.md#saps-ai-golden-path) gives the lifecycle context.

## Candidate Capability Families

Use this bundled Golden Path routing snapshot to navigate candidate capabilities across:

- agent experiences, agent development, and MCP-based tools;
- AI Core and generative AI hub capabilities;
- SAP HANA Cloud AI, vector, knowledge graph, and machine-learning capabilities;
- SAP Business Data Cloud and relevant governed data-platform patterns;
- Joule capabilities when conversational engagement or orchestration is justified.

Name a capability in the relevant layer and Solution Stack when it satisfies a concrete architectural need. State its role and distinguish bundled evidence from volatile product claims requiring validation. Confirm the target customer landscape with the user.

## Snapshot Boundary

This file is a compact, dated routing snapshot. Follow SKILL.md's snapshot-only source policy: external links are citations, not automatic fetches. Mark unsupported availability-sensitive claims **Needs source validation**. Maintainers review source changes and ship updated content through repository releases.
