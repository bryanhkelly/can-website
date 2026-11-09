# CAN Academy content governance

## Approved / locked

### Story Pages 01-07
Source of truth: CAN Academy Website Content Governance Matrix v12, Copy Locked.

Do not rewrite these pages for brevity without explicit approval. Additional copy belongs outside the primary diagrams rather than replacing or degrading the diagrams.

### Story Page 08 Explore
Source of truth: the later approved Explore CAN direction:
1. Explore by topic
2. Start with who you are
3. Start a conversation

This intentionally supersedes the earlier v12 Explore layout.

### Role doorway pages
Source of truth: Audience Doorway Content v14.

Routes:
- /parents
- /pastors
- /christian-schools
- /homeschool
- /denominations

### Named partner front doors
Source of truth: Partner Front Door Content v1.

Routes:
- /partners/the-journey-church
- /partners/cogic
- /partners/cogbf

Keep the Journey Church and COGBF partner pages concise. They establish relevance and hand into the shared story.

The COGIC route is a user-authorized exception: a seven-module editorial founding educational partner proposal implemented in `src/pages/CogicPartnerPage.tsx`, with six custom detail pages under `/partners/cogic/:section` in `src/pages/CogicAcademyDetailPages.tsx` and scoped CSS. The concept name is **proposed COGIC National Academy**, not an authorized or existing COGIC school system. The COGIC-specific Founding Educational Partnership page has its own inquiry form, registered via the `public/__forms.html` Netlify Forms skeleton. Invitations from the COGIC homepage must link to the COGIC founding partnership route, never the generic `/contact` page. It remains a prospective independent CAN proposal, not a COGIC endorsement, contract, approved school network, or a confirmed ten-site pilot. Financial figures are explicitly illustrative, and one-hour configuration is not authorization to open. Historical claims link to official COGIC sources. Avoid quoting current leaders without an authenticated statement and do not suggest any proposed bishop devotional has been recorded or authorized. Image rights must be reviewed before externally promoting the page.

## Newer content requiring explicit editorial approval before major expansion

- /academics
- /partnership-model
- /start-a-community

Current content is implementation copy developed after the original story lock. Do not introduce specific academic offerings, timing, contractual terms, or operational commitments without approval.

## Placeholder / pending publication

### /florida
Do not publish scholarship amounts, eligibility rules, pilot commitments, or launch dates until approved.

### /evidence
Do not invent citations, proof points, research findings, or downloadable evidence.

## Style rules

- No em dashes in publishable site copy.
- Preserve CAN terminology consistently.
- Do not turn short doorway pages into duplicate versions of the 8-page story.
- Do not introduce unsupported outcome claims, enrollment numbers, funding promises, accreditation claims, or partner commitments.


## Trust, accountability, locations, and FAQ

The following pages were added from the October 12, 2026 CAN strategy discussion informed by the ProPublica school-choice investigation:

- `/accountability`
- `/locations`
- `/faq`
- the Evidence & Accountability section on `/story/platform`

### Publication rules

- Distinguish intended standards from implemented processes and verified outcomes.
- Do not present the proposed CAN site-certification model as an existing certification program until formally approved and operational.
- Do not imply a state, county, church, or school is a confirmed CAN launch unless a formal launch commitment exists.
- On Locations, use `Operating`, `Confirmed launch partner`, `In development`, and `Exploring partnerships` only when the evidence supports the status.
- Florida may be described as the primary pilot focus / in development. Other listed states are research or partnership-development markets, not launch commitments.
- Accommodation and special-education language should describe CAN's need for a defined support model and clear pre-enrollment expectations; do not claim IDEA-equivalent services or protections.
- Platform accountability content describes intended capabilities, not reported CAN student performance.
- The FAQ must route visitors to deeper governed content rather than inventing new operating commitments.


## Leadership titles and biographies

Current public leadership titles:
- Bryan Kelly — Founder & CEO
- Dr. Neko Coleman Green — Co-founder & Chief Academic Officer

### Governance rules
- Use `Founder & CEO` for Bryan in primary site titles. Product, technology, data, platform, partnership, and operating responsibilities belong in the biography rather than replacing the CEO title with CTO or CPO.
- Use `Co-founder & Chief Academic Officer` for Dr. Neko Coleman Green.
- Neko's public biography is grounded in her supplied CV: Ed.D. in Organizational Leadership, M.A. in Teaching, MBA, B.S. in Business Management, classroom experience including special education and elementary/middle grades, differentiated instruction and assessment, and church ministry leadership.
- Do not add unverified certifications, school-system leadership roles, published research, accreditation authority, or academic outcomes.
- Do not imply the founders alone constitute the full school staff or local leadership model. The site should continue to distinguish academic leadership, platform/operating leadership, and local leadership.

## Public state research profiles

The public marketing pages at `/locations/:state` are owned by the CAN Academy website, not CAN OS jurisdiction policy. The research data lives in `src/data/stateResearch.ts`. These are public editorial summaries, not authoritative operating rules or school-specific authorization decisions.

- Publish useful factual research as `Draft research` or `In review` when sourced to a primary state agency or official program administrator. Display the review label and checked date next to the research.
- Preserve direct primary-source links, important qualification language, and explicit unanswered questions. Never translate scholarship eligibility into confirmed CAN eligibility, provider approval, or a commitment to enroll students.
- Review date-sensitive award amounts, application periods, program restrictions, school registration and accreditation before representing them as current. Revise or remove stale claims.
- The state page's market-development status (`In development`, `Exploring partnerships`) is distinct from research review status, funding participation and school-opening authorization.
- Full legal and CAN-specific operational decisions are handled separately under independently reviewed CAN OS jurisdiction policies. Public marketing pages must not draw from unverified CAN OS drafts or expose private review material.
- Marketing state research should help a prospective church or family identify questions to discuss, not supply a compliance checklist deemed ready for an actual school opening.

### COGIC proposal page map

- `/partners/cogic` — seven-module executive overview
- `/partners/cogic/legacy` — COGIC historical context and verified official sources
- `/partners/cogic/national-academy` — the core proposed COGIC National Academy institutional model, roles and governance
- `/partners/cogic/student-experience` — faith distinctives, proposed weekly bishop's homeroom, asynchronous academics and live support
- `/partners/cogic/how-it-works` — stub-to-launch studio, invitations, family interest, compliance and transition into school operations
- `/partners/cogic/economics` — illustrative total network-generated tuition revenue and proposed 5%–20% COGIC national revenue share, with the applicable enrollment tier thresholds not yet agreed; modeled operating costs are separate, and no profit or local-school distribution is implied
- `/partners/cogic/founding-partnership` — COGIC-only founding invitation and inquiry form; no general contact CTA

Main CAN site deep links are permitted for academic, launch, economic and governance details, but COGIC module entry points must first reach the COGIC-specific deep pages. Form submission must match a statically declared Netlify skeleton and must not claim success before a successful response. Copyrighted portrait usage remains subject to permissions review.


## The Journey Church proposed academy (independent CAN proposal)

Route `/partners/the-journey-church` is a local-church, single-campus editorial proposal and not an official Journey Church school announcement. The six authored chapters at `/partners/the-journey-church/{opportunity,journey-story,academy,student-experience,how-it-works,founding-partnership}` retain the proposal's context and point to shared CAN academics, student experience, launch, governance and research pages without duplicating those canonical materials.

Editorial and permissions rules:
- Cite church history and ministries from official Journey Church pages; do not imply that ministry participation, campus availability, staff, sponsorship or school authorization are already agreed.
- Label all CAN illustrative student/campus imagery; do not represent AI-generated or stock-style images as actual Journey facilities, pastors or students. Replace with approved Journey photographs only after permission.
- Speak of one potential founding school site (grades 6–12 proposed), not a church-wide denominational network.
- Do not imply Nassau County public schools are underperforming; the district's 2026 A grade is acknowledged.
- Enrollment calculators are assumptions, not actual tuition pricing, financial forecasts, scholarship commitments or church revenue.
- The dedicated `journey-founding-partner` Netlify form collects a leadership conversation request, not a school application or authorization. Confirm Netlify form processing and notification recipients before distribution.
- A CAN Academy relationship with The Journey Church is *not established*. Church name and brand usage require approval before any public campaign.
