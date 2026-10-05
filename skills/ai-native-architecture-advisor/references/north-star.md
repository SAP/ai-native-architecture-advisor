# SAP AI-native North Star architecture

> Text-only conversion of the user-supplied publication document, prepared 2026-09-22. Accepted-text view; comments, figures and the stale Word table of contents are omitted. Original body wording, including its two introductory variants, is retained. Provenance and conversion details: [SOURCES.md](SOURCES.md#north-star).

This is an architectural vision source, not a product roadmap or availability guarantee.

## Contents

- [1. Executive summary](#1-executive-summary)
- [2. AI-native North Star architecture: Vision](#2-ai-native-north-star-architecture-vision)
- [3. User experience layer](#3-user-experience-layer)
- [4. Process layer](#4-process-layer)
- [5. Foundation layer](#5-foundation-layer)
- [6. Platform layer](#6-platform-layer)
- [7. Integration, security, ethics, and governance](#7-integration-security-ethics-and-governance)
- [8. Ecosystem: The marketplace for agents, tools, and extensions](#8-ecosystem-the-marketplace-for-agents-tools-and-extensions)
- [9. The resilient and sovereign cloud](#9-the-resilient-and-sovereign-cloud)
- [10. Customer-specific development services](#10-customer-specific-development-services)
- [11. Architecting for the quantum era](#11-architecting-for-the-quantum-era)
- [Closing note](#closing-note)

As the enterprise software market enters a defining platform shift, one as significant as the advent of the internet, agentic AI is fundamentally transforming enterprise software and business processes. It is reshaping how organizations operate, make decisions, and compete. SAP believes this shift will move enterprises from systems that merely execute to systems that reason, learn, and adapt, toward what we call the Autonomous Enterprise.

This AI-native North Star Architecture paper outlines SAP’s target reference architecture and strategic vision for that future. It is not a specification document, product roadmap, or commitment to deliver specific capabilities, products, or timelines. Rather, it articulates SAP’s strategic direction for an AI-native, self-evolving enterprise foundation, illustrating how AI agents, applications, business processes, data, contextual intelligence, and platform capabilities will converge to define the next generation of enterprise systems.

**As the enterprise software market enters a defining platform shift, one comparable in significance to the advent of the internet, Agentic AI is fundamentally transforming enterprise software and business processes, reshaping how organizations operate, decide, and compete. SAP believes this shift will move enterprises from systems that execute to systems that reason, learn, and adapt, toward what we call the Autonomous Enterprise.**

**This AI-Native North Star Architecture paper outlines SAP's target reference architecture and strategic vision for that future. It is not a detailed specification, product roadmap, or commitment to deliver specific capabilities, products, or timelines. Rather, it sets a strategic direction for SAP's AI-native, self-evolving enterprise platform, illustrating how AI agents, applications, business processes, data, context, and platform capabilities will increasingly converge in the next generation of enterprise systems.**

## 1. Executive summary

### The trillion-dollar shift

For decades, enterprise software has been a system of record: it stores transactions and facts, enforces rules, and reports what happened. But these elements remain isolated and lack the context needed to explain why decisions were made, what alternatives were considered, or what worked and what didn’t. The reasoning behind enterprise decisions has remained locked in human judgment, scattered across systems, and lost between interactions.

That is now changing. AI makes it possible to build a system of context blended with a system of record: an architecture where enterprise data, process knowledge, and decision history are connected across the enterprise landscape into a shared understanding, so that AI agents can reason over them. Agents participate in decisions as they happen, drawing on the full picture rather than fragments trapped in individual applications. Each correction refines the system. Each interaction adds to it. This learning evolves along two paths: continuous advances in underlying AI models and the compounding of enterprise context. While models provide general reasoning capability, context grounds that reasoning in business reality and allows it to improve with experience. The system of context adds a compounding advantage that the system of record alone never had.

The opportunity is massive. AI is on track to add trillions of dollars to global GDP over the coming decade with enterprise AI software expected to grow into hundreds of billions. AI-agent task duration is increasing rapidly: tasks that take minutes today are on a trajectory toward a full human workday within a few years. The trend is about duration, not scope. Agents will run longer on bounded tasks, while ambiguity, novel situations, and cross-domain reasoning will still require human judgment. The shift is redefining the value stack. Agentic experiences orchestrate outcomes across the enterprise, no longer confined to individual applications. Capabilities below this layer become increasingly commoditized and value shifts from software access to measurable outcomes. By 2028, pure seat-based pricing is expected to give way to outcome-based delivery.

The implication is clear: in enterprise AI, context is **the decisive advantage**. Frontier models continue to grow more capable, but model capability alone is becoming commoditized, since every vendor can access the same leading models. What varies is the context over which those models reason. With the right context, software goes beyond predefined paths and reasons go toward **outcomes**, application boundaries dissolve, and the enterprise learns. Five decades of business processes, master data, and domain knowledge make SAP’s business context the deepest in enterprise software. And no model, however capable, can replicate what it has never seen.

History shows that systems which learn from experience consistently discover strategies no human expert would have designed, and those strategies often become the winning move. Enterprise AI, grounded in SAP’s business context, operating across the full enterprise landscape, and acting on business intent, will uncover new paths to outcomes that no predefined playbook contains.

### From AI first to AI-native

SAP has the deepest business context in enterprise software. The question is, which architecture can unlock it?

In an AI-first world, an AI feature in an ERP system can summarize an invoice or suggest a journal entry. But it operates within the boundaries of a single application. It cannot see that the same supplier has open disputes in service management, delayed shipments in logistics, and a renegotiated contract in procurement.

Three barriers keep AI first confined. AI systems:

- Lack business and process context, leading to unreliable answers.

- Sit on disconnected systems without a shared data model, so they cannot coordinate across functions.

- Lack the governance to ensure accountability at scale.

**AI-native** solves all three. Software operates across landscape boundaries as a **system of context**, and this is what makes the compounding loop possible in enterprise software. Every interaction feeds intelligence, every correction becomes a learning signal, and the system continuously improves. The delivery model evolves with it: from **software as a service** to **outcome as a service**. Intent-driven, agent-enabled execution learns and adapts continuously.

### Leading the next era of enterprise applications toward the Autonomous Enterprise

The Autonomous Enterprise is SAP’s vision for the future of how a business runs. It enables companies to respond more quickly, operate more intelligently, and perform better by design, using AI assistants and agents to manage and execute processes across domains in one connected, adaptive system.

SAP delivers this through five reinforcing elements:

- The **Joule** solution as the new engagement layer, bringing together the right data, workflows, and agents across SAP software systems and beyond

- **SAP Autonomous Suite** reinventing how enterprises run, with AI assistants and agents executing work across finance, spend, supply chain management, human capital management, and customer experience

- **Industry AI** portfolio with built-in vertical process knowledge, data models, and regulatory logic

- **SAP Business AI Platform** unifying the SAP Business Data Cloud (SAP BDC) solution, SAP Business Technology Platform (SAP BTP), Business Transformation Management solutions, and the AI Foundation solution to deliver business context, unified data, models, and enterprise-grade governance

- **Accelerated adoption** of the Autonomous Enterprise through the RISE with SAP journey and SAP GROW offerings, enabled by an agent-led toolchain

These elements are realized through an AI-native architecture built on four reimagined layers: user experience, process, foundation, and platform. Together, they form the cognitive core: an enterprise intelligence system that integrates SAP’s business data, process knowledge, and reasoning models to enable enterprise systems to learn and adapt.

Cross-cutting **SAP-managed** qualities helps ensure that integration, identity, extensibility, provisioning, and observability are harmonized across the suite of SAP solutions. The architecture follows a shift-left and shift-down approach where resilience, compliance, performance, responsibility and sustainability are delivered automatically by the platform.

[**Responsible and sustaina****ble AI**](https://www.sap.com/documents/2025/11/56a1a0fa-2e7f-0010-bca6-c68f7e60039b.html) is embedded across each layer, generating ethical safeguards, transparency, and energy-efficient operations by design. This helps ensure that the shift to AI-native systems elevates trust, accountability, and long-term enterprise value while respecting planetary boundaries.

This is not a replacement for what already works. SAP pairs two complementary paths: the **deterministic path** to safeguard trust, compliance, and governance and the **AI-native path** to evolve learning systems with data and compute.

The distinction matters. Deterministic systems are reliable, but rigid. AI without proper context and control behaves on instinct: fast and confident, but often wrong. The purpose of the AI-native architecture is to transform that raw capability into something closer to reasoning, grounded in business context, governed through guardrails, and continuously observable. Context engineering, guardrails, and observability are the mechanisms that make this possible.

Deterministic systems of record preserve reliability; adaptive systems add insight. Together, they define the architecture for the AI-native era.

## 2. AI-native North Star architecture: Vision

The AI-native architecture from SAP rests on three simple premises:

- Models that reason are the baseline.

- Context—grounding AI in business data and semantics—is what makes reasoning relevant.

- Agents that plan, act, and learn turn this into outcomes.

The four architectural layers that make up the AI-native North Star architecture from SAP deliver all three.

The four layers are as follows:

- The **user experience layer** evolves from static to adaptive. The Joule solution becomes the central engagement layer across the SAP Autonomous Suite, shifting interaction from app navigation to intent-driven execution across multiple channels. Interfaces become contextual, multimodal, and generative.

- The **process layer** evolves from predefined to agentic. Applications become capability providers for agents that plan and execute processes across SAP, partner, and third-party systems and agents through a governed gateway. A unified design-time environment supports building both applications and agents from business intent to production.

- The **foundation layer** evolves from a system of record to a system of context. Data and AI, enabled by the SAP Business Data Cloud and SAP Knowledge Graph solutions, create context-rich, semantically grounded enterprise intelligence.

- The **platform layer** evolves from hosting applications to running SAP-managed enterprise agents integrated across the customer landscape. The platform provides the runtime, sandbox, observability, and governance that turn stateless AI models into reliable enterprise agents. Agent lifecycle, identity, routing, and integration are built into the platform.

These layers operate under a shared set of design principles:

- Design for AI-native consumption.

- Enable proactive intelligence.

- Contribute to a unified knowledge graph.

- Design for orchestration.

- Build on platform services and open standards.

- Help ensure trust is nonnegotiable.

- Design for resilience.

- Enable continuous learning.

Within this architecture, data informs decisions, decisions improve processes, and better processes generate richer data, establishing a continuous data flywheel.

**How each layer plays a distinct role in the system of context**

The experience layer generates context from each user interaction. The process layer extends it across the landscape by connecting applications, APIs, events, and business capabilities, allowing agents to reason across them. The foundation layer stores and compounds this into institutional knowledge. The platform layer runs and protects it at enterprise scale. Trust governs how this context flows across all four layers.

**How users experience it**

The four layers work together in each user interaction. Users switch between applications to verify data, follow up on issues, and complete processes. With an AI-native architecture, this becomes a connected, outcome-first flow in which the system not only identifies issues but also resolves them within defined business policies.

As an example, a finance analyst asks Joule to "resolve high-value disputes likely to delay payment, and minimize impact on days sales outstanding (DSO)." Joule routes the request to an agent that spans sales, ERP, and service management, with the authority to analyze, decide, and execute resolution workflows within governed boundaries.

The agent queries SAP Knowledge Graph to discover the right APIs and data products, retrieves disputes across applications that previously lacked a shared access layer, and draws on decision traces from past resolutions: which escalation paths worked, which settlement patterns reduced DSO, and which customers responded to which approaches. The agent identifies high-risk disputes, selects optimal resolution strategies based on historical outcomes, executes follow-ups such as customer communication and internal escalations, and initiates resolution workflows. Only exceptions or policy-bound decisions are routed for human approval. As disputes are resolved, payment commitments are secured and tracked through to completion, helping ensure closure rather than partial progress.

The results are a measurable reduction in DSO, faster dispute-resolution cycles, and higher recovery rates, with most cases resolved without manual intervention. The next time a similar dispute arises, the agent’s resolution strategies improve because it learned from this one. This is the system of context in action: SAP Knowledge Graph provides semantic grounding, decision traces from past resolutions inform execution, and each completed resolution feeds back as a verified outcome signal.

The example above touched every layer of the architecture. The following sections examine each one.

## 3. User experience layer

Today, users navigate between applications, follow predefined workflows, and manually piece together information across systems to get work done. AI-native experiences are assembled dynamically, surfacing relevant information and actions specific to each user’s intent, context, and goals, rather than being statically designed and delivered to serve the majority.

This requires a fundamental shift in how we design and deliver the user experience. Users will no longer navigate to applications but simply state intent, and the system assembles the experience around them.

The user experience layer brings together three tiers.

The **design layer** functions as a dynamic design service, translating the core design language into a toolkit for generative AI experiences. It establishes guardrails and provides AI with a library of semantically described, next-generation UI components, empowering it to compose experiences that are not only consistent, reliable, and compliant but feel native to the company’s brand.

**The intelligence layer** extends these interfaces with adaptive and conversational capabilities, embedding context-aware AI, voice support, and multimodal interaction while maintaining privacy boundaries, transparency, user control, and agency.

The **Joule Work** component brings these generative experiences together into a unified entry point

that interprets intent across natural language, voice, and multimodal inputs to personalize user days, automate routine work within defined guardrails, or turn business intent into agentic solutions.

These experiences are structured into five experience modes, each serving a particular intent and purpose for users:

- **Discover** for a personalized overview that learns over time

- **Conversations** to ask, search, act, and get insights

- **Spaces** as dynamic work environments for productivity assembled on the fly

- **Jobs** for making agentic work traceable for the business user, automating routine tasks within defined guardrails and escalating to humans only for key decisions.

- **Develop** for turning business intents into agentic solutions.

Joule Work is delivered as a service managed by SAP. This enables continuous improvement of the experience, delivering innovation without additional effort for customers. Embedded insights from the SAP Analytics Cloud solution bring real-time visibility. Integration with SAP Signavio, SAP LeanIX, and WalkMe solutions adds process transparency and guided adoption.

Looking ahead, **voice AI** brings voice interaction to SAP applications, embedded as a core service across mobile and desktop, to make using enterprise software as natural as having a conversation while also preserving transparency, user control, and privacy by design.

By embedding semantic meaning directly into UI components, our design layer enables dynamic experience composition at runtime, responding intelligently to user intent and business context. This approach moves beyond static dashboards that demand manual interpretation. Instead, it delivers cohesive, AI-enhanced experiences that proactively explain what happened and why it matters while recommending the next logical action. Applications are transformed from passive tool containers into intelligent guides that actively understand user goals. The result is that users move smoothly from data to decision, guided by a system that serves as both interpreter and advisor.

With **physical AI**, Joule moves beyond the screen, bringing business logic from SAP into robotics and smart glasses to enhance the physical world.

While the experience layer allows users to articulate their needs, translating those intentions into tangible business outcomes demands a sophisticated orchestration of applications, intelligent agents, and interconnected business logic, the foundation of the process layer.

## 4. Process layer

The process layer is where business logic is defined and where the shift from rigid, predefined paths to agent-enabled orchestration takes shape.

A simple request, such as hiring third-party developers, can involve procurement, legal, finance, IT, and supplier management—each with its own systems and approval chains. End-user workflows are constantly evolving and increasingly complex, spanning multiple stakeholders across heterogeneous landscapes. The AI-native architecture transforms how business processes are executed, from logic embedded in applications into a model in which applications, workflows, integration, and agents collaborate to deliver outcomes.

The shift from AI-first to AI-native redefines how process logic is structured and executed.

In the AI-first model, AI assists process execution within application boundaries: automating steps and suggesting actions but scoped to individual products. In the AI-native model, applications become **capability providers**, exposing stable APIs, events, and data that agents can discover and invoke. This enables business-process innovation through a deliberate mix: AI handles tasks requiring complex reasoning, while deterministic execution helps ensure reliability for specific processes. Both paths extend the reach of the system of context across the enterprise.

Agents follow a reason-act-observe loop to decompose goals, execute actions using tools, and refine based on results. Execution can be optimized through scheduling and reuse strategies that minimize redundant inference and improve overall efficiency.

Agents are organized by business domain, not by individual systems. A procurement agent, for example, orchestrates across ERP, sourcing, supplier management, and third-party systems as a single domain-aware participant. To deliver this, agents need a consistent way to be created, tested, and deployed.

**How agents are built**

SAP supports building solutions across the determinism-autonomy spectrum: deterministic apps and workflows for predictable control flow, bounded agents with defined toolsets and guardrails, and open-ended agents for complex reasoning with broader autonomy.

Two creation paths produce the same canonical artifact: a pro-code path where developers write agent logic directly with a standardized agent software development kit for full flexibility, and a prompt-driven path that translates natural language intent into a code-based agent through assisted authoring (Joule Studio solution), both deployed on the same agent runtime. Skills, which are reusable capabilities that agents invoke for specific tasks, will serve as building blocks that developers plug into agents in either path. All paths produce code as the canonical representation: portable, version controlled, and auditable through standard developer tools.

Customers can start with low code and graduate to pro code without rearchitecting. Paths deploy to a unified runtime and follow an [AI Golden Path](https://architecture.learning.sap.com/docs/ai-golden-path), which provides comprehensive guidance, from foundation services through agent development to production deployment.

However, real business scenarios rarely involve building and deploying a single agent. A procurement solution, for example, combines an application for purchase requisitions, an approval workflow for spend authorization, and one or more agents for supplier selection and contract compliance. These components are managed as a single deployable solution with a shared lifecycle and dependencies.

All of this comes together in the **Joule Studio** solution, the unified design-time environment for building agents and agentic solutions. For rapid prototyping, developers can go straight from intent to code.

For production solutions, the flow progresses from business intent through a product requirements document, specification, and code generation to deployment, with process knowledge ([SAP Signavio](https://www.sap.com/products/business-transformation-management/process-mining.html)), landscape data ([SAP LeanIX](https://www.sap.com/products/business-transformation-management/enterprise-architecture-management.html)), and domain models ([SAP Knowledge Graph](https://www.sap.com/products/artificial-intelligence/ai-foundation-os/knowledge-graph.html)) from SAP informing each stage.

The same approach extends to transformation and migration. In the AI-first model, moving from legacy to cloud is human led and labor intensive. In the AI-native model, agents accelerate code migration, data transformation, and test automation, reducing modernization time, risk, and downtime. Trust and governance for agent interactions, including agent identity, open protocol standards, and governed integration, are detailed in the [Integration, security, ethics, and governance](#7-integration-security-ethics-and-governance) section below.

The process layer defines how applications and agents are modeled and evaluated. The foundation layer powers them with data, reasoning, and memory capabilities.

## 5. Foundation layer

The foundation layer is where data and AI come together as the intelligent core of enterprise processes, giving every SAP customer a compounding advantage built on SAP’s five decades of business data, process knowledge, and domain expertise. With the AI-first approach, data and intelligence remain largely separate: models run without business context, and data sits in silos without reasoning over it.

The shift from AI-first to AI-native redefines how enterprise intelligence is built, grounded, and improved.

In the AI-native model, orchestration, reasoning, and model services power the AI side. Governed data and semantic grounding, supported by SAP Business Data Cloud and SAP Knowledge Graph, provide context. Together, they store and compound enterprise knowledge that grows with each interaction. This enables intelligent systems to operate natively inside enterprise processes, with built-in guardrails for ethics, security, compliance, governance, and efficiency.

The following capabilities define how this layer works.

**Orchestration**

Joule orchestrates agents and tools to solve user requests, managing the lifecycle of both low-code and pro-code agents, scheduling their actions, and aligning execution with workflow goals. Agent execution is coordinated across conversational, API-based, and event-driven triggers. This includes routing each request to the right agent, evaluating response quality, and resolving conflicts when multiple capabilities apply, helping ensure users get trusted answers and not just fast ones. For complex goals, Joule will decompose the task and delegate to domain-specific agents that execute in parallel and report results back for coordination. Agents are increasingly equipped with self-verification: internal feedback loops that check accuracy during execution, not just in post-hoc evaluation, reducing the error buildup that has been the primary obstacle to scaling multistep workflows.

**Model services**

The specialized code base and domain knowledge of SAP represent a strategic advantage that general-purpose models cannot access. Frontier models have never seen SAP’s internal code, architecture patterns, or business logic. SAP-trained models combine continuous pretraining on internal code bases with fine-tuning and in-context learning, providing deep understanding of how procurement workflows connect to finance, how supply chain exceptions trigger approvals, and how your specific business rules work in production.

The models are hosted through a generative AI hub. The hub provides grounding services, to keep AI aligned with enterprise semantics, and optimization services (prompt optimization, test-time scaling, fit-for-purpose model selection), to improve efficiency and reduce inference overhead.

Alongside SAP’s own models, the generative AI hub provides access to leading third-party models, including frontier large language models and open-source alternatives, giving customers the flexibility to choose the right model for each task without code changes. It is one hub with many models and consistent governance.

This includes the SAP-RPT-1 AI model, built specifically for structured business data and trained on relational enterprise data, such as financial ledgers, transaction records, and supply chain tables, to deliver predictions without requiring customer-specific model training.

Rather than having each team host models independently, this consolidation helps ensure consistent model lifecycle management, usage tracking, reduced environmental impacts, and capacity planning across SAP.

**Reusable intelligence**

Core cognitive capabilities such as document understanding, tabular analysis, and visual inspection are implemented once and exposed as composable skills, helping ensure consistency and reduce duplication across applications and agents while minimizing redundant compute and infrastructure usage.

**Data and semantic grounding**

SAP Business Data Cloud provides enterprise data, and the SAP Knowledge Graph provides semantic grounding, together enabling agents with the trusted, context-rich, and efficient data and business context they need to reason, act, and learn.

**SAP Business Data Cloud** helps connect data from across the enterprise into a single, governed landscape: cloud and on-premises solution systems from SAP, customer-managed legacy systems, third-party sources, and partner ecosystems. At its core are **data products**: curated, governed datasets with clear ownership, schema, authorization rules, and lifecycle management. Data products are the primary governed interface between SAP data and everything that wants to use it—whether it is a dashboard, a data science platform, or an AI agent.

Data products follow an authorization model and are accessible through multiple channels: SAP Analytics Cloud to create business dashboards and enhance planning, the SAP Datasphere solution for use in semantic data modeling, partner platforms such as those from Databricks Inc. and Snowflake Inc. for data science, and AI agents supported by Joule that access data through natural-language-to-SQL generation grounded in SAP Knowledge Graph. SAP Business Data Cloud will integrate tightly with the SAP AI Core foundation to train machine learning models and ground large language models, enabling the creation of new data products from the resulting insights.

To help ensure agents have data access immediately, major SAP application tenants are provisioned with an embedded data foundation that provides auto-generated data products. These data products are based on application metadata, removing the barrier of limited data product availability, so Joule and agents can query across application boundaries from day one.

**SAP Knowledge Graph** is the semantic backbone of the AI-native architecture. It links natural language inputs to SAP’s structured metadata while reducing hallucinations, opening access to tens of thousands of APIs, data models, and business entities across SAP. When a user asks to “show me overdue orders,” SAP Knowledge Graph automatically discovers the right API, identifies the correct filter parameters, and constructs an accurate query, achieving accuracy that surpasses model-only approaches.

SAP Knowledge Graph connects multiple layers of enterprise knowledge:

- **API and service metadata**: Definitions, endpoints, parameters, and relationships across SAP applications

- **Business semantics**: What “revenue” means, how “customer” relates to “order,” how processes connect across domains

- **Data product metadata**: Schema, lineage, freshness, and authorization rules for datasets

- **Customer-specific extensions**: Custom fields, custom APIs, and tenant-specific configurations layered on top of SAP’s base knowledge

The long-term vision is a **customer-specific knowledge graph** with a shared enterprise ontology, where domain-specific knowledge graphs maintain autonomy while connecting via shared concepts, presenting a single logical view across the SAP solution landscape.

**Context engineering and memory**

Every time an agent starts, it is incredibly smart but has zero context. It cannot do anything useful without identity, memory, and skills. Context engineering solves this by assembling the right slice of enterprise information for each interaction while filtering out redundant, outdated, or unauthorized data, so agents can operate on context that is relevant and proportionate to the task while reducing unnecessary retrieval and energy-intensive inference calls.

Consider two customers with identical profiles: the same industry, tenure, and deal size. A system of record shows different discounts but not why. A system of context captures the exceptions, escalations, and precedents that shaped each decision, so the next agent facing a similar situation proposes the right action, not the average one. Over time, the system moves beyond responding to requests and begins anticipating the next business action.

Agents persist context and reasoning artifacts across interactions, capturing decision lineage: what was known, what was considered, what was chosen, and what resulted. Each human correction becomes a structured decision trace. Together with SAP Knowledge Graph, these traces form a context graph: a living representation of enterprise knowledge that connects semantics, decision history, and operational context.

**Data was the moat of the last decade. Context is the moat of the next.**

**Continuous improvement**

Agent quality is maintained through structured evaluation cycles that span technical assessment of individual agents (goal completion, tool call efficiency), process KPIs, and financial and operational outcomes. This helps ensure agents are measured not just on technical performance but on business impact. As Goodhart’s Law warns: “When a measure becomes a target, it ceases to be a good measure.” As an example, when an agent is given "resolve disputes faster" as its objective, speed becomes the target. The agent optimizes resolution time at the cost of customer retention. Evaluation is, therefore, a multiobjective optimization problem: rather than optimizing a single variable, the agent optimizes across multiple constraints such as resolution time, retention, and resolution quality. Business KPIs measure how each constraint shifts when the agent is involved, and those measurements become the feedback signal the agent uses to iteratively improve itself toward a stable optimum.

The path forward lies in metalearning, where agents refine not just their outputs but also their learning methods. These advances move toward systems that evolve through ongoing interaction, turning workflows into cumulative assets that grow stronger with each cycle.

The foundation layer builds the enterprise intelligence. Running it reliably, securely, responsibly, and at enterprise scale requires a platform purpose built for agents.

## 6. Platform layer

The platform layer is where applications, agents, and workflows run. SAP Business Technology Platform provides composable services across data management, application development, integration, and security. Workloads are defined declaratively. Infrastructure, dependencies, and deployment targets are captured as configuration rather than code, so the interface stays stable while the platform evolves underneath. An AI Golden Path for application development—built on SAP Cloud Application Programming Model, the ABAP Cloud development model (ABAP RESTful application programming model), and the SAP Fiori design system—delivers consistent data models, harmonized APIs, and unified lifecycle management.

With proven scalability supporting millions of tenants globally, the platform delivers the reliability, performance, sustainability, and security required for enterprise-scale AI.

The shift from AI-first to AI-native expands the platform beyond hosting applications and providing integration. It now supports both deterministic applications and adaptive agents on the same foundation, managing the full lifecycle of agents that operate across both systems of record and systems of context. Sovereign AI is an architectural constraint: agent lifecycle, identity, routing, and governance are built in from the start.

**Managed agent runtime**

SAP Business Technology Platform provides a **managed agent runtime** that provides the infrastructure to make enterprise agents reliable at scale. When an agent is created, the platform automatically enables harness capabilities such as security, observability, tenant isolation, sandboxing, and persistent memory.

The model reasons. The harness governs. Research shows that the same model performs dramatically differently depending on the system around it. The harness, not the model, determines the ceiling.

In practice, the platform is designed to provide standardized software development kits for building agents in any framework, an agent sandbox for safe development and testing, container-hosted execution, an agent skills registry for discovering reusable capabilities, and continuous evaluations for quality assurance. Each customer’s context, memory, and reasoning artifacts are strictly separated from day one, helping ensure that one organization’s business intelligence does not leak into another’s.

Extensibility is built in from the start. Customers and partners customize agents without modifying the underlying code through four patterns: tool extensibility through the Model Context Protocol, skills as reusable building blocks, pre and post extension hooks and instructions that precondition the agent’s behavior with domain knowledge and operating guidelines.

Observability is built on **OpenTelemetry**, covering agent execution end to end with traces, logs, and metrics. With transparent tracking of model calls, enterprises gain full visibility into AI costs, environmental impacts, and adoption. Without these capabilities, a large language model is just a text generator. With this harness, the system becomes a reliable enterprise agent.

A platform that runs autonomous agents must also govern them. As agents start to act across systems and organizational boundaries, SAP treats trust, security, and integration as architectural prerequisites, embedded into the platform by design.

## 7. Integration, security, ethics, and governance

Autonomous agents operate within enterprise-grade boundaries for governance, identity, and interoperability. Integration remains the biggest challenge in enterprise AI, and governance and compliance are not yet fully solved across industries. SAP is focusing on building architectural foundations that make these challenges tractable.

### Integration

Agent traffic flows through a **single governed gateway** that enforces trust at the platform level. Agents are exposed only within governed boundaries and only when explicitly made available for collaboration across systems or organizational domains. The gateway provides landscape boundaries that define which systems an agent can access, fine-grained access policies that govern tool usage down to the parameter level, a unified tool catalog, and human-in-the-loop routing for critical decisions.

Integration shifts from **connector driven to intelligence driven**.

**AI enables integration**Agents dynamically determine intent, select the right APIs, and orchestrate calls across systems. They learn from usage to improve quality over time, and they reduce environmental impact by removing redundant integration logic and minimizing avoidable system-to-system data transfers.

**Integration enables AI**Existing APIs, events, and data across SAP and third-party software systems become tools that agents can discover and use through open standards, without requiring new development artifacts. Two open protocols make this possible. The Model Context Protocol provides tool integration, enabling agents to discover and invoke capabilities across systems. The Agent2Agent protocol supports multiagent coordination, enabling agents built by different teams, partners, and customers to collaborate within governed boundaries. SAP participates in the open standards ecosystem to ensure agents interoperate across the enterprise landscape, not just within SAP.

### Security and agent identity

Agentic AI introduces new categories of risk that traditional security frameworks were not designed to address. Agents make autonomous decisions, access external tools, and operate across trust boundaries. Multiagent systems acting across organizations magnify these risks. Regulatory frameworks, including the **EU AI Act** and **US AI Action Plan**, make AI security mandatory. Trust is what converts capability into permission to act. Without it, agents can advise but cannot operate. With it, agents execute across real workflows, accumulate institutional judgment, and become more valuable with each interaction.

In the AI-native model, **agents are first-class principals**: they authenticate, receive authorizations, and are governed like any other enterprise actor. Each agent carries its own identity that combines an application registration, policy assignments for persistent roles, and **scoped authorizations**. Users can grant agents a **bounded subset of their permissions** for unattended execution to make sure agents never act beyond their authorized scope. Third-party agents must also authenticate via identity services from SAP; agents without valid credentials are denied access. When agents from SAP call into third-party systems, they perform **token exchanges** to maintain governed access across trust boundaries.

The **three-tier AI defense architecture** from SAP addresses agentic threats through a progressive approach:

- **Foundation tier**: Zero-trust authentication, traffic inspection, prompt-injection detection, behavioral analytics, and cryptographically verifiable agent credentials. Entities are validated, and actions are recorded.

- **Supervision tier**: Deterministic control agents that monitor, sanitize, and authorize other AI agents. These supervisory agents enforce input validation, output filtering, and anomaly detection—with human oversight for high-risk decisions.

- **Automation tier**: Specialized AI agents that scale security operations through continuous audits, risk assessment, and policy enforcement. Identity management agents handle provisioning and contextual authorization. This layer embeds secure development practices into AI-assisted workflows, helping ensure AI-generated code is validated and compliant before release.

AI is also an ally: intelligent agents audit systems, perform authorization checks, detect vulnerabilities, and enforce compliance early in development. This embeds a **shift-left approach** that prevents risks rather than reacting to them.

### AI ethics

As AI becomes embedded across the architecture, shaping how systems reason, act, and interact, AI ethics becomes a foundational cross-cutting concern across each layer. It works to ensure AI systems are designed, developed, deployed, used, and commercialized in line with defined standards of trust and responsibility. Agents introduce a distinct ethical risk profile because they are able to not only generate outputs but also plan, act, invoke tools, and operate across system and organizational boundaries with limited human intervention. Their autonomy, scale, and ability to affect real workflows increase the potential for unintended harm, unfair outcomes, opaque decision-making, and weakened accountability. SAP helps operationalize AI ethics through a global policy framework, structured use-case review, defined oversight structure, and lifecycle controls integrated with security, data protection, risk management, and compliance.

SAP’s approach is anchored in the [SAP Global AI Ethics Policy](https://www.sap.com/products/artificial-intelligence/ai-ethics.html?pdf-asset=a8431b91-117e-0010-bca6-c68f7e60039b&page=1), aligned with internationally recognized frameworks including UNESCO’s Recommendation on the Ethics of Artificial Intelligence and the Organization for Economic Cooperation and Development (OECD) AI Principles. A defined oversight structure, supported by a dedicated AI ethics office, provides oversight, escalation paths, and accountability across the AI portfolio at SAP. An external advisory panel is consulted to deepen the understanding of broader ethical implications where necessary.

SAP applies a structured AI ethics impact assessment to classify use cases by risk and determine the appropriate review path. High-risk use cases are reviewed through defined governance bodies, with escalation to the AI ethics steering committee and, when broader implications arise, the Executive Board of SAP SE. When no ethically acceptable trade-off can be identified, the AI system cannot proceed in that form. Clear ethical principles, accountable oversight, and structured review define the boundaries within which agents can operate.

### Governance and compliance

SAP governs both internal AI use and AI delivered through its products to ensure regulatory compliance. All AI use cases undergo **risk classification**; high-risk systems apply continuous monitoring, human oversight, data governance, and accuracy controls. Third-party components are governed through due diligence and ongoing compliance checks. SAP certifies its AI against international standards aligned with the International Organization for Standardization and the National Institute of Standards and Technology, supporting customers with the documentation required for their own compliance obligations.

With trust, integration, and governance in place, the AI-native enterprise opens beyond SAP.

## 8. Ecosystem: The marketplace for agents, tools, and extensions

Trust makes collaboration possible. With identity, open protocols, and clear authorization boundaries in place, agents, data products, and tools can be registered, versioned, and shared across organizational boundaries. The SAP AI Agent Hub solution serves as an enterprise hub for discovering and managing agents and a marketplace where intelligent components are published, evaluated, and composed into solutions. SAP AI Agent Hub manages the full agent lifecycle: from planning and development through discovery and provisioning to observability, governance, and optimization.

Agent mining discovers agents that already exist across the enterprise, giving organizations visibility into capabilities they may not know they have. Skills mapping connects agents to the organizational roles and business processes they serve, making sure the right agent reaches the right user.

The ecosystem builds on three foundations. APIs and metadata, described through Open Resource Discovery (ORD), make each SAP capability discoverable and composable. Data products, governed through SAP Business Data Cloud, provide curated datasets that agents and applications can consume through standardized interfaces. SAP Knowledge Graph adds semantic grounding, enabling agents to reason across these resources rather than simply query them.

On top of this foundation, developers, partners, and customers cocreate agents, models, and extensions that expand enterprise intelligence. Partners build domain-specific agents such as a logistics optimization agent, a regulatory compliance agent, and a demand forecasting agent and publish them to the marketplace with standardized metadata, quality metrics, and trust ratings. Customers extend agents built by SAP with their own business rules, custom data sources, and industry-specific knowledge.

Each agent in the marketplace follows the same governance model: identity management, authorization boundaries, observability, audit trails, ethics, and sustainability. Whether an agent is built by SAP, a partner, or a customer, it operates under the same trust framework.

The result is a network effect: more agents create more capabilities, more capabilities attract more builders, and the ecosystem compounds in value, mirroring the platform dynamics that defined the consumer era and now apply to enterprise intelligence.

## 9. The resilient and sovereign cloud

### Multitier deployment - public, private, and sovereign cloud

The system of context, the ecosystem, and the agents that operate within them are only as valuable as the infrastructure they run on. An AI-native enterprise runs on an intelligent, resilient cloud that delivers reliable, scalable performance worldwide. The cloud strategy at SAP balances latency, sustainability, compliance, and cost through a **multitier deployment model**:

- **Public cloud** provides shared, multitenant infrastructure at economies of scale.

- **Private cloud** offers single-tenant models with maximum flexibility.

- **SAP Sovereign Cloud** offerings help organizations adopt cloud technologies while maintaining control over their data, infrastructure, and compliance in line with local laws and regulations, including the use of compliant large language models.

- **SAP Sovereign Cloud On-Site** offerings provide sovereign cloud capabilities within a customer’s selected or owned data centers.

### Operational excellence

Cloud solutions are designed to be ethical, secure, reliable, scalable, sustainable, and cost-optimized, with **high availability** supported by standardized resilience patterns, near-zero downtime maintenance, and disaster recovery across regions. **Portability** across infrastructure environments reduces vendor lock-in and enables workload relocation across platforms and countries. **Elasticity** allows applications and agents to scale automatically with demand, containerized for fast startup and fine-grained horizontal scaling, reducing environmental impact by avoiding idle resource consumption.

**AI-enabled operations** provide automated anomaly detection, predictive issue resolution, and self-healing workflows—moving from reactive incident management to proactive, intelligent operations and reducing operational expenses and energy waste. Standardized **observability** based on OpenTelemetry covers agents and applications comprehensively, capturing not only operational health but also what agents do, how they reason, where they act, and whom they call. This data serves a dual purpose: it keeps operations reliable and becomes a feedback signal for continuous agent improvement, adding to the context that informs future reasoning and decisioning. The SAP Cloud ALM solution extends from application-centric to AI-aware operations, supporting customers with the tools and insights needed to operate AI scenarios reliably at scale.

SAP advances sustainable cloud operations through a multilayered infrastructure strategy that reduces the environmental impact of data centers, in line with the [global environmental policy](https://www.sap.com/documents/2016/01/425d2a67-577c-0010-82c7-eda71af511fa.html). This includes running 100% of SAP-owned data centers on renewable energy, optimizing workloads, and collaborating closely with cloud infrastructure suppliers to help ensure their services and hardware align with the sustainability strategy at SAP.

Operating at scale serves every customer. Differentiated value is created where each customer’s context is unique, and that is the role of customer-specific development services.

## 10. Customer-specific development services

[Customer-specific development services](https://www.sap.com/services-support/customer-specific-development-services.html) are AI-native offerings from SAP for customer-specific applications, reflecting the AI-native North Star architecture from SAP, where true value is created within each customer’s unique context. While standard SAP products are designed to scale across thousands of customers, these services address the enterprise reality that drives differentiated business value with customer-specific data, processes, constraints, and governance. They help maximize customer value and adoption of SAP software by delivering AI-native, customer-specific extensions that are living, upgrade-safe systems. These extensions continuously learn, adapt, and improve in production, providing true business transformation for customers. Customer-specific development services use AI-native, agentic engineering and accelerator‑driven synthesis to start every engagement from a high baseline of completion, structurally reducing cost and time-to-value across the customer innovation lifecycle. They do this by unifying AI-native tooling, discovery, design, build, and hardening into a continuous, agent‑orchestrated flow where solution assets evolve in real time and operational speed and efficiency are built in from day one.

The AI-native North Star architecture is built to run on today’s infrastructure and absorb new computational paradigms as they mature.

## 11. Architecting for the quantum era

The AI-native North Star architecture prepares SAP for quantum computing, where superposition and entanglement enable major acceleration in optimization, simulation, and probabilistic inference. Although Noisy Intermediate-Scale Quantum (NISQ) devices remain limited by noise and weak error correction, preparing now helps ensure that SAP can adopt quantum capabilities once enterprise-grade hardware matures.

**How the AI-native North Star architecture integrates quantum computing**

Quantum computing extends classical and AI-native systems by adding probabilistic depth for specialized problem classes. AI contributes cognitive reasoning, while quantum systems contribute amplitude-based computation, creating a continuum of intelligent and probabilistic processing that shapes the next phase of enterprise architecture.

Architectural principles for quantum integration include: 

- **Quantum processing unit (QPU):** QPUs operate as mathematical coprocessors that applications invoke for complex optimization or simulation tasks and return classical outputs that flow back into deterministic workflows.

- **Cloud-native integration:** QPUs are accessed as secure cloud services through standardized APIs that abstract vendor differences and support scalable and interoperable consumption.

- **Scope for analytical and compute-only use:** Quantum execution stays within planning, forecasting, and optimization because the no-cloning theorem prevents reliable replication of quantum states needed for transactional operations.

**The path forward: A quantum-ready enterprise**

By applying these principles, the AI-native North Star architecture establishes a hybrid model where classical determinism, AI-enhanced cognition, and quantum probability work together within a trusted enterprise foundation. This approach supports postquantum cryptography and prepares SAP for a secure and governed quantum-enabled future.

## Closing note

**Each revolution in technology begins with a shift in imagination.** The AI-native enterprise is that shift: a cybernetic system where software, data, and people continuously learn through feedback. It is not a feature but an architecture of intelligence where each interaction becomes a learning signal and intelligence compounds across the enterprise.

This demands a new engineering paradigm:

- **Context engineering** to assemble the right information

- **Harness engineering** to ensure reliability and governance

- **Specification engineering** to define and improve behavior

An AI Golden Path operationalizes this shift, guiding architects across deterministic and AI-native paradigms while enabling continuous evolution.

What unifies these efforts is a single commitment: building systems that learn rather than dictate. A consistent lesson from decades of AI research is that capability emerges through search and scale, but search is only as effective as the space it explores. The system of context defines that space: structured, connected, and grounded in enterprise reality.

In the agentic era, SAP customers hold a unique advantage that no model can replicate: decades of process knowledge, deeply integrated systems, governed data, and trusted decision frameworks. These compound into a new kind of enterprise intelligence that is reliable, transparent, sustainable, and deeply human.

Technology leaders have built trillion-dollar platforms by compounding behavioral traces. The enterprise equivalent is now emerging: compounding **context, decisions, and feedback loops**.

At SAP, this becomes the foundation of the **Autonomous Enterprise**, where systems that learn help ensure that each interaction strengthens intelligence and that outcomes, not features, define value. 

**We encourage you to explore this shift, reflect on it, and share your perspectives as this vision continues to** **evolve.**
