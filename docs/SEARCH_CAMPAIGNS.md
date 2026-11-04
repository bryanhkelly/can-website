# CAN Academy — Search & Campaigns publishing system

This document governs the public, editorial CAN Academy website. The 100-topic library is a **publishing roadmap**, not a claim that 100 pages are currently live. The first **28 distinct substantive pages** are generated in this branch: 10 campaign journeys and 18 practical guides. The remaining 72 entries are unpublished editorial briefs.

## Publishing and quality principles

1. Each public page should answer a distinct audience question with useful detail, a clear next action, and content specific to its intent. Mere keyword or city substitution is unacceptable.
2. Publish new local or state-specific content only after an official-source and legal/operating review. Do not expose internal rankings, partner diligence, draft legal requirements or unpublished opportunity economics.
3. The editorial status gates the build. Entries with `status: "planned"` are absent from generated HTML and search sitemaps. A page must have original feature sections, practical process steps, FAQ answers, an appropriate CTA, source references where factual/legal claims warrant them, and a canonical indexing decision.
4. Maintain the approved CAN Academy **navy, cream, gold, cinematic photography and editorial typographic** design system. Do not turn campaign pages into a generic card-grid SaaS template.
5. Never invent campuses, school authorization, teacher credentials, scholarships, tuition, revenue returns, published school dates, student testimonies or real student records.
6. External factual references are reviewed before publication. For legal and funding content, prefer official agencies and professional review over summaries copied from third parties.
7. Campaign CTA links can carry allowlisted UTM values, partner identifiers and source campaign slugs. Only adult marketing inquiries are captured; no protected student information.
8. A public landing page is not an application, enrollment approval, scholarship eligibility determination or partnership agreement.

Guiding documentation: [Google Search — Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google Search spam policies, including scaled content and doorway abuse](https://developers.google.com/search/docs/essentials/spam-policies) and [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## Architecture

- `src/content/campaign-pages.mjs` — audience/campaign editorial content, with `type: "campaign"` and `href: "/go/<slug>/"`.
- `src/content/resource-pages-a.mjs`, `resource-pages-b.mjs` — substantive evergreen guides under `/resources/<slug>/`.
- `src/content/content-roadmap.mjs` — 72 unpublished briefs, with review requirements.
- `src/content/search-pages.mjs` — single inventory, cluster definitions, indexing/publishing rules, and validation.
- `scripts/build-search-pages.mjs` — after Vite builds, generate complete static HTML in `dist/` with existing branded styles, unique metadata and canonical URLs, native FAQ interactions, related links, BreadcrumbList and Article schema, plus an expanded `dist/sitemap.xml`.
- `public/search-pages.css` — page-specific styling on top of the existing editorial design system.
- `public/search-attribution.js` — preserve allowlisted query parameters in links without writing browser storage.
- `scripts/validate-search-pages.mjs` and `scripts/audit-search-content.mjs` — enforce content depth, publication separation and generated-page metadata.
- The Netlify social metadata edge function recognizes these static routes, preserves their unique HTML metadata, issues 404 for unknown content routes, and applies a preview-level `X-Robots-Tag: noindex` header.
- Lead capture remains with the five existing Netlify Forms; this work adds campaign/UTM attribution and opt-in coarse geography for appropriate visitor journeys.

## Commands

```bash
npm ci
npm run check:content
npm run build
npm run audit:search
npm run lint
```

To publish the next page: write substantive original content matching the existing page schema, obtain editorial and (where relevant) educational/legal review, set `status: "published"` and an explicit `indexable` decision, then run all checks and review the Netlify Deploy Preview. The build generates the canonical sitemap; do not hand-edit 100 sitemap entries.

## Measurement model

Record landing-page and campaign identifiers alongside `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` and trusted partner context, without sensitive student data. Measure qualified church conversations, interested families by coarse geography and expected grade, educator qualification, demo progression, and eventual authorized site openings. Form delivery and email notification are separate checks. A successful POST does not prove a notification email was received.

## Audience/cluster inventory

| Cluster | Implemented | Planned |
|---|---:|---:|
| church-launch | 6 | 10 |
| family-choice | 7 | 10 |
| educators | 2 | 8 |
| networks | 2 | 7 |
| school-leaders | 1 | 0 |
| experiences | 1 | 9 |
| school-operations | 7 | 8 |
| education-models | 2 | 8 |
| geography | 0 | 12 |
| **Total** | **28** | **72** |

## Full 100-topic publishing roadmap

| # | Planned URL | Type | Editorial cluster | Status |
|---:|---|---|---|---|
| 1 | `/go/church-school/` | Campaign | church-launch | Implemented; editorial review pending |
| 2 | `/go/church-opportunity/` | Campaign | church-launch | Implemented; editorial review pending |
| 3 | `/go/church-community-demand/` | Campaign | church-launch | Implemented; editorial review pending |
| 4 | `/go/families/` | Campaign | family-choice | Implemented; editorial review pending |
| 5 | `/go/florida-families/` | Campaign | family-choice | Implemented; editorial review pending |
| 6 | `/go/teach-with-can/` | Campaign | educators | Implemented; editorial review pending |
| 7 | `/go/denominational-schools/` | Campaign | networks | Implemented; editorial review pending |
| 8 | `/go/school-partners/` | Campaign | school-leaders | Implemented; editorial review pending |
| 9 | `/go/homeschool/` | Campaign | family-choice | Implemented; editorial review pending |
| 10 | `/go/meet-can/` | Campaign | experiences | Implemented; editorial review pending |
| 11 | `/resources/how-to-start-a-christian-school-at-your-church/` | Guide | church-launch | Implemented; editorial review pending |
| 12 | `/resources/christian-school-launch-checklist/` | Guide | church-launch | Implemented; editorial review pending |
| 13 | `/resources/what-is-school-of-record/` | Guide | school-operations | Implemented; editorial review pending |
| 14 | `/resources/church-building-school-readiness/` | Guide | school-operations | Implemented; editorial review pending |
| 15 | `/resources/staffing-a-small-christian-school/` | Guide | school-operations | Implemented; editorial review pending |
| 16 | `/resources/how-to-survey-school-demand/` | Guide | church-launch | Implemented; editorial review pending |
| 17 | `/resources/funding-a-church-based-school/` | Guide | school-operations | Implemented; editorial review pending |
| 18 | `/resources/school-safeguarding-responsibilities/` | Guide | school-operations | Implemented; editorial review pending |
| 19 | `/resources/how-to-choose-a-christian-school/` | Guide | family-choice | Implemented; editorial review pending |
| 20 | `/resources/private-school-homeschool-and-hybrid-comparison/` | Guide | family-choice | Implemented; editorial review pending |
| 21 | `/resources/questions-to-ask-about-school-safety/` | Guide | family-choice | Implemented; editorial review pending |
| 22 | `/resources/how-to-understand-student-progress/` | Guide | family-choice | Implemented; editorial review pending |
| 23 | `/resources/designing-a-hybrid-school-week/` | Guide | education-models | Implemented; editorial review pending |
| 24 | `/resources/what-is-a-christian-microschool/` | Guide | education-models | Implemented; editorial review pending |
| 25 | `/resources/teacher-network-and-local-facilitators/` | Guide | educators | Implemented; editorial review pending |
| 26 | `/resources/transcripts-credits-and-school-records/` | Guide | school-operations | Implemented; editorial review pending |
| 27 | `/resources/church-network-school-partnerships/` | Guide | networks | Implemented; editorial review pending |
| 28 | `/resources/school-governance-and-accountability/` | Guide | school-operations | Implemented; editorial review pending |
| 29 | `/resources/how-churches-can-host-weekday-learning/` | Guide | church-launch | Planned; not published |
| 30 | `/resources/questions-pastors-should-ask-before-starting-a-school/` | Guide | church-launch | Planned; not published |
| 31 | `/resources/what-a-church-school-feasibility-study-should-include/` | Guide | church-launch | Planned; not published |
| 32 | `/resources/how-to-present-a-school-proposal-to-church-leadership/` | Guide | church-launch | Planned; not published |
| 33 | `/resources/building-a-church-school-steering-committee/` | Guide | church-launch | Planned; not published |
| 34 | `/resources/parent-interest-meeting-agenda-for-church-schools/` | Guide | church-launch | Planned; not published |
| 35 | `/resources/evaluating-transportation-for-a-church-school/` | Guide | church-launch | Planned; not published |
| 36 | `/resources/church-school-partnerships-versus-independent-school-launches/` | Guide | church-launch | Planned; not published |
| 37 | `/resources/community-listening-questions-before-a-school-launch/` | Guide | church-launch | Planned; not published |
| 38 | `/resources/when-to-announce-a-prospective-school-opening/` | Guide | church-launch | Planned; not published |
| 39 | `/resources/academic-calendar-planning-for-a-small-christian-school/` | Guide | school-operations | Planned; not published |
| 40 | `/resources/school-intake-and-admissions-workflow-fundamentals/` | Guide | school-operations | Planned; not published |
| 41 | `/resources/teacher-credential-review-in-distributed-schools/` | Guide | school-operations | Planned; not published |
| 42 | `/resources/student-attendance-responsibilities-in-hybrid-schools/` | Guide | school-operations | Planned; not published |
| 43 | `/resources/emergency-procedures-for-shared-church-facilities/` | Guide | school-operations | Planned; not published |
| 44 | `/resources/school-technology-readiness-checklist/` | Guide | school-operations | Planned; not published |
| 45 | `/resources/what-belongs-in-a-school-partnership-agreement/` | Guide | school-operations | Planned; not published |
| 46 | `/resources/how-to-plan-school-closure-and-student-continuity/` | Guide | school-operations | Planned; not published |
| 47 | `/resources/questions-to-ask-on-a-private-school-tour/` | Guide | family-choice | Planned; not published |
| 48 | `/resources/understanding-tuition-versus-total-school-costs/` | Guide | family-choice | Planned; not published |
| 49 | `/resources/christian-education-for-middle-school-students/` | Guide | family-choice | Planned; not published |
| 50 | `/resources/christian-education-for-high-school-students/` | Guide | family-choice | Planned; not published |
| 51 | `/resources/helping-a-child-transition-into-a-smaller-school/` | Guide | family-choice | Planned; not published |
| 52 | `/resources/what-parents-should-know-about-online-instruction-at-school/` | Guide | family-choice | Planned; not published |
| 53 | `/resources/how-parents-can-evaluate-an-academic-support-plan/` | Guide | family-choice | Planned; not published |
| 54 | `/resources/faith-formation-and-academic-instruction-in-christian-schools/` | Guide | family-choice | Planned; not published |
| 55 | `/resources/how-students-make-friends-in-small-learning-communities/` | Guide | family-choice | Planned; not published |
| 56 | `/resources/preparing-for-high-school-graduation-in-a-hybrid-program/` | Guide | family-choice | Planned; not published |
| 57 | `/resources/teaching-a-live-class-across-multiple-school-sites/` | Guide | educators | Planned; not published |
| 58 | `/resources/effective-teacher-facilitator-communication/` | Guide | educators | Planned; not published |
| 59 | `/resources/teacher-onboarding-in-a-school-network/` | Guide | educators | Planned; not published |
| 60 | `/resources/designing-engaging-remote-instruction-for-local-groups/` | Guide | educators | Planned; not published |
| 61 | `/resources/assessment-design-for-shared-curriculum/` | Guide | educators | Planned; not published |
| 62 | `/resources/supporting-students-who-fall-behind-in-hybrid-courses/` | Guide | educators | Planned; not published |
| 63 | `/resources/what-school-leaders-should-look-for-in-network-educators/` | Guide | educators | Planned; not published |
| 64 | `/resources/professional-development-for-distributed-teaching-teams/` | Guide | educators | Planned; not published |
| 65 | `/resources/building-a-denominational-education-pilot/` | Guide | networks | Planned; not published |
| 66 | `/resources/shared-academic-services-across-church-networks/` | Guide | networks | Planned; not published |
| 67 | `/resources/balancing-local-church-identity-with-network-standards/` | Guide | networks | Planned; not published |
| 68 | `/resources/denominational-school-partnership-governance/` | Guide | networks | Planned; not published |
| 69 | `/resources/what-to-measure-in-a-church-network-school-pilot/` | Guide | networks | Planned; not published |
| 70 | `/resources/network-wide-teacher-recruitment-for-christian-education/` | Guide | networks | Planned; not published |
| 71 | `/resources/church-network-communication-toolkit-for-school-exploration/` | Guide | networks | Planned; not published |
| 72 | `/resources/hybrid-christian-school-versus-online-only-school/` | Guide | education-models | Planned; not published |
| 73 | `/resources/church-based-microschool-versus-homeschool-co-op/` | Guide | education-models | Planned; not published |
| 74 | `/resources/shared-services-models-for-christian-schools/` | Guide | education-models | Planned; not published |
| 75 | `/resources/how-small-schools-can-offer-more-electives/` | Guide | education-models | Planned; not published |
| 76 | `/resources/student-projects-in-community-based-learning/` | Guide | education-models | Planned; not published |
| 77 | `/resources/faith-and-service-projects-in-a-school-calendar/` | Guide | education-models | Planned; not published |
| 78 | `/resources/optional-enrichment-programs-for-community-schools/` | Guide | education-models | Planned; not published |
| 79 | `/resources/how-network-schools-support-local-friendships/` | Guide | education-models | Planned; not published |
| 80 | `/resources/florida-christian-school-partnership-questions/` | Guide | geography | Planned; not published |
| 81 | `/resources/texas-christian-school-partnership-questions/` | Guide | geography | Planned; not published |
| 82 | `/resources/arizona-christian-education-options-overview/` | Guide | geography | Planned; not published |
| 83 | `/resources/iowa-christian-education-options-overview/` | Guide | geography | Planned; not published |
| 84 | `/resources/arkansas-christian-education-options-overview/` | Guide | geography | Planned; not published |
| 85 | `/resources/oklahoma-christian-education-options-overview/` | Guide | geography | Planned; not published |
| 86 | `/resources/wisconsin-christian-education-options-overview/` | Guide | geography | Planned; not published |
| 87 | `/resources/west-virginia-education-choice-questions-for-families/` | Guide | geography | Planned; not published |
| 88 | `/resources/north-carolina-christian-education-options-overview/` | Guide | geography | Planned; not published |
| 89 | `/resources/louisiana-christian-school-choice-questions/` | Guide | geography | Planned; not published |
| 90 | `/resources/utah-christian-education-options-overview/` | Guide | geography | Planned; not published |
| 91 | `/resources/alabama-christian-school-partnership-questions/` | Guide | geography | Planned; not published |
| 92 | `/resources/how-to-prepare-for-a-can-academy-information-session/` | Guide | experiences | Planned; not published |
| 93 | `/resources/can-academy-family-interest-process-explained/` | Guide | experiences | Planned; not published |
| 94 | `/resources/can-academy-church-partnership-process-explained/` | Guide | experiences | Planned; not published |
| 95 | `/resources/what-an-experience-can-demo-should-show/` | Guide | experiences | Planned; not published |
| 96 | `/resources/how-educators-can-join-the-prospective-can-network/` | Guide | experiences | Planned; not published |
| 97 | `/resources/questions-to-ask-before-a-guided-school-demo/` | Guide | experiences | Planned; not published |
| 98 | `/resources/can-a-can-community-offer-saturday-activities/` | Guide | experiences | Planned; not published |
| 99 | `/resources/can-a-can-community-offer-sunday-enrichment/` | Guide | experiences | Planned; not published |
| 100 | `/resources/understanding-can-academy-development-statuses/` | Guide | experiences | Planned; not published |

> A topic's presence in this roadmap does **not** establish a live route or indexable page. The 72 planned pages are kept out of the output until their content and review gates are met.
