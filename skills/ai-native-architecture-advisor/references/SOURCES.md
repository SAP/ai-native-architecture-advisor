# Where the bundled content comes from

These are local copies. Using the skill does not download or refresh them.

| File | Source | Date / version |
|---|---|---|
| [north-star.md](north-star.md) | Supplied North Star publication Word document; details below | Converted 2026-09-22 |
| [official-ai-golden-path.md](official-ai-golden-path.md) | [SAP Architecture Center — AI Golden Path](https://github.com/SAP/architecture-center/tree/b54c38015ad3ef92453e0437da05f8d2e5ca35f2/docs/golden-path/ai-golden-path) | Commit `b54c38015ad3ef92453e0437da05f8d2e5ca35f2`; copied 2026-09-22 |
| [ref-arch-index.json](ref-arch-index.json) | [SAP Architecture Center](https://architecture.learning.sap.com/docs/ref-arch) | Existing capture: 2026-08-04; narrowed to 58 AI/Data entries on 2026-09-22 |
| [service-directory.json](service-directory.json) | [SAP Discovery Center service catalogue](https://discovery-center.cloud.sap/servicecatalog/api/v1/services) and its per-service details | Captured 2026-09-22; 76 service records; 7 deprecated catalogue entries excluded |
| Layer cards, capability map and Golden Path routing card | Advisor-authored guidance based on the sources linked in each file | Dates in the individual cards |

## North Star

Original: `E3_12May_106233_AI-Native_NSA_External-Publication_Final_LK[48].docx`, supplied by the maintainer. Converted to one Markdown file with tracked edits accepted and comments/images omitted; headings and contents adapted for Markdown. Body wording is retained, including the two introductory variants. The original Word file is unchanged and not bundled. The conversion date is not a publication date.

## AI Golden Path

Eight source pages combined into one Markdown file. Each section links to its original file at the pinned commit. Website navigation metadata and image embeds are omitted; prose, tables, code and Mermaid text remain. The source pages still declare **2026-04-23** as their content-update date, even though this copy was retrieved in September. Linked sites are not recursively copied.

Golden Path retains the upstream [Apache 2.0 license](SAP-Architecture-Center-LICENSE.txt). The supplied North Star document remains attributed SAP source content; no new license is assigned to it by this conversion.

## Catalogues and renderer

The architecture index contains summaries and links, not full architecture guides. Only entries tagged **AI & Machine Learning** or **Data & Analytics** are kept. Historical diagram URLs are metadata only; no diagram images are bundled.

The service directory covers all 83 entries returned by the Discovery Center service catalogue on the capture date, excluding the 7 with `isDeprecatedService: true`. Details for the remaining 76 were retrieved once from `https://discovery-center.cloud.sap/servicecatalog/api/v1/services/{id}?currency=USD`, with `sap-language: en`; each entry's `id` fills the placeholder. The detail-level deprecation flag was also checked. This is the service catalogue, not a complete inventory of every SAP product or feature.

The copy retains names, IDs, categories, descriptions, published feature lists, plan names/descriptions, support components, catalogue labels and public resource links. Text is retained from the source, not AI-written. Agentry and Cloud Integration Automation publish no feature list; their arrays remain empty. Pricing, region matrices, media, internal links and linked documents are omitted. Resource URLs are references, not downloaded content. The API was used only to prepare this copy; installed skills make no calls. Original raw exports for these two catalogues were not retained.

Discovery Center content remains attributed SAP source content, not Advisor-authored material relicensed under the repository's Apache-2.0 license. Capture dates do not establish current availability, and omission of an entry does not establish product-wide retirement.

The local Markdown renderer is [Marked](https://github.com/markedjs/marked), version **18.0.7** per its file header. Its license is bundled in `../assets/marked.LICENSE`.

## SAP TechEd 2026 refresh (2026-11-16)

The layer cards and capability map were refreshed on **2026-11-16** against confirmed generally-available capabilities announced or confirmed at **SAP TechEd 2026** (Berlin, October 27–29). Only GA capabilities were applied; announced-but-not-yet-GA items (e.g. SAP Enterprise AI Gateway, full SAP Reltio data products, n8n in Joule Studio, the remaining AI Agent Hub capabilities) were deliberately excluded. The `service-directory.json` catalogue snapshot was not changed — it is a faithful Discovery Center API capture and the report supplied no catalogue records, IDs or Discovery Center links for the new services.

| Source | URL | Date | Validates |
|---|---|---|---|
| SAP TechEd developers — build the autonomous enterprise | https://news.sap.com/2026/10/sap-teched-developers-you-can-build-autonomous-enterprise/ | 2026-11-16 | Agent Gateway GA; A2A endpoints by default (GAP-1) |
| From hype to hands-on — level up your AI skills (TechEd edition) | https://community.sap.com/t5/technology-blog-posts-by-sap/from-hype-to-hands-on-level-up-your-ai-skills-teched-edition/ba-p/14518789 | 2026-11-16 | Agent Gateway GA context (GAP-1) |
| SAP Agent Memory Service is now GA | https://community.sap.com/t5/technology-blog-posts-by-sap/give-your-ai-agents-long-term-memory-sap-agent-memory-service-is-now/ba-p/14510374 | 2026-11-16 | Agent Memory Service GA, Messages/Memories APIs, HANA Cloud vector engine (GAP-2) |
| Memory meets orchestration — SAP HANA Cloud and Joule | https://community.sap.com/t5/data-and-ai-professionals-blog-posts/memory-meets-orchestration-how-sap-hana-cloud-and-joule-are-reshaping/ba-p/14517193 | 2026-11-16 | Agent Memory Service / Knowledge Graph complement (GAP-2) |
| Predicting purchase order delivery delays with SAP-RPT | https://community.sap.com/t5/technology-blog-posts-by-sap/predicting-purchase-order-delivery-delays-with-sap-rpt/ba-p/14521632 | 2026-11-16 | SAP-RPT-2.0 / RPT-TS model family (GAP-3) |
| SAP TechEd — AI developers build what matters | https://news.sap.com/2026/10/sap-teched-ai-developers-build-what-matters-autonomous-execution/ | 2026-11-16 | RPT family, Joule Work, Joule Studio, Reltio in BDC (GAP-3/5/6/7) |
| SAP Lakehouse and BDC data fabric innovations | https://news.sap.com/2026/10/sap-lakehouse-new-data-fabric-innovations-sap-bdc-autonomous-enterprise/ | 2026-11-16 | SAP Reltio GA MDM inside BDC; Q1 2027 data-product caveat (GAP-5) |
| SAP TechEd 2026 news guide (itsfullofstars.de) | https://www.itsfullofstars.de/2026/10/sap-teched-2026-news-guide/ | 2026-11-16 | SAP Reltio in BDC (GAP-5) |
| Top SAP TechEd 2026 announcements | https://www.sap.com/blogs/top-sap-teched-2026-announcements | 2026-11-16 | Joule Work phased GA (GAP-6) |
| SAP Joule Studio — custom AI agents product page | https://www.sap.com/denmark/products/artificial-intelligence/joule-studio/custom-ai-agents.html | 2026-11-16 | Joule Studio GA capabilities; n8n early-adopter (GAP-7) |
| Get to know Joule Studio at SAP TechEd 2026 Virtual | https://community.sap.com/t5/developer-news/get-to-know-joule-studio-at-sap-teched-2026-virtual/ba-p/14509773 | 2026-11-16 | Joule Studio capabilities (GAP-7) |
| SAP AI Agent Hub (Joule Studio product page) | https://www.sap.com/sk/products/artificial-intelligence/joule-studio/custom-ai-agents.html | 2026-11-16 | AI Agent Hub two GA capabilities; 500-agent bundling (GAP-8) |
| SAP TechEd shows how to lead with AI governance | https://news.sap.com/2026/10/sap-teched-shows-how-to-lead-with-ai-governance/ | 2026-11-16 | AI Agent Hub governance scope (GAP-8) |
| SAP BTP is now SAP Business AI Platform (Spadoom) | https://www.spadoom.com/en/blog/sap-btp-is-now-sap-business-ai-platform/ | 2026-11-16 | BAIP umbrella rebrand of BTP (GAP-9) |
| SAP beefs up Business AI Platform and Joule (SAP Africa) | https://news.sap.com/africa/2026/11/sap-beefs-up-business-ai-platform-and-joule-to-drive-agentic-ai-adoption/ | 2026-11-16 | BAIP GA framing (GAP-9) |

## Updating a copy

Replace the relevant local content and update its source/date here. Keep it text-only. No automatic refresh, API connection or special maintenance tooling is needed.
