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

## Updating a copy

Replace the relevant local content and update its source/date here. Keep it text-only. No automatic refresh, API connection or special maintenance tooling is needed.
