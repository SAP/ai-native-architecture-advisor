# Platform Layer Card

Advisor-curated guidance · content updated 2026-09-22. Source: [North Star publication](north-star.md#6-platform-layer); [provenance](SOURCES.md#north-star).

## Intent

The Platform layer makes AI applications and agents deployable, governable, observable, and operable. Runtime, identity, authorization, discovery, audit, observability, lifecycle, and operations are architecture from the start — not afterthoughts. A customer-specific deployment is not inferior to multi-customer SaaS; judge by the scenario's isolation, residency, operational, and commercial needs.

## Runtime and SaaS Deployment — alternatives

Apply SKILL.md's SAP runtime boundary. Use SAP BTP Cloud Foundry or Kyma for custom application/agent deployments, or a supported SAP product runtime for product-managed capabilities. An externally hosted primary runtime is an anti-pattern within this Advisor's design scope, not a lower maturity rung. External business systems and approved interoperability remain valid integration participants. Distinguish an SAP-managed service hosted on hyperscaler infrastructure from a customer-built application hosted directly outside SAP.

For proposed custom applications/agents, establish available hosting capabilities and runtime constraints. A connected business system's deployment does not establish where the proposed solution runs. For example, a custom BTP workload warrants asking whether Cloud Foundry or Kyma is available or preferred. Name the confirmed runtime; for unresolved custom hosting use `SAP BTP Cloud Foundry / Kyma` with `Pending confirmation`, explaining whether availability, runtime choice or both remain open. For product-managed capabilities, name the supported product runtime without adding separate custom hosting.

| Option | Deployment | Example |
|---|---|---|
| Customer-specific | Customer-specific deployment | Runtime deployed per customer in their landscape or approved environment. Valid where isolation, residency, or commercial needs justify it. |
| SaaS | Multi-tenant SaaS on SAP BTP | Reusable multi-tenant deployment on Kyma/CF with standardized onboarding and operations. A productization choice, not a higher maturity score. |

## 4.2 Agent Hub — discovery and governance

Include **Agent Hub** as a standing discovery/governance consideration in the marketplace side panel, explicitly distinguishing a candidate or later step from selected infrastructure. A reusable agent should have a defined discovery and management path; confirm the supported product scope and access. Development tooling remains a Process grouping, even though both panels sit beside the layers.

## 4.3 Identity and Authorization

**User-triggered** agents use **principal propagation** and act on behalf of the user; **system-triggered** agents get their own distinct, narrowly scoped **agent identity**. Generic shared service accounts where user attribution is required fall short of this — a universal quality, recommend the fix plainly.

## 4.4 Observability

Use **SAP Cloud Logging** for custom-workload operational logs, metrics and traces, with error tracking, ownership and a defined failure path. For SAP product-managed capabilities, establish the product's supported telemetry before adding a logging service. SAP Audit Log Service addresses a separate audit-event need; include it when that requirement is established. Cloud Logging does not automatically replace required security or compliance audit records. Source: [SAP Cloud Logging](https://help.sap.com/docs/cloud-logging).

Ask about runtime, the identity provider, user-triggered versus background access, and external integrations together in the early landscape batch. Identity labels name a selected or explicitly proposed service, not “identity setup to confirm.” Keep unresolved service selection in open items; explain user attribution, least privilege and agent identity in prose. The optional External Integrations panel lists named non-SAP systems/platforms only, not SAP business products or generic protocols, and does not change the SAP primary-runtime boundary.

## Applied judgment

- **Identity, audit, and discovery are designed in from the start** — retrofitting them is the expensive path; say so when a design defers them.
- **Multi-tenancy is a productization decision**, driven by the partner's commercial model, not by maturity optics.
- **A reusable multi-customer service must be able to explain** customer onboarding, operational ownership, lifecycle management, monitoring, and incident handling — if it can't, that's the open item to flag.
