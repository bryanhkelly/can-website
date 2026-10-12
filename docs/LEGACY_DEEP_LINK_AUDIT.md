# Legacy deep-link audit

Source reviewed: `bryanhkelly/can-narrative-forge`.

## Architecture decision

The current 8-page CAN narrative and the old deep-dive architecture serve different purposes.

- `/story/*` is the guided narrative.
- Topic routes such as `/student-experience`, `/academics`, `/partnership-model`, `/florida`, `/launch-approach`, `/economic-breakthrough`, and `/evidence` are deeper reference sections.
- Explore CAN is the bridge between the narrative and those deeper sections.

Do not collapse a deep topic route into its similarly named story page.

## Explore destinations restored from the old site

| Explore topic | Route | Current status |
| --- | --- | --- |
| Student Experience | `/student-experience` | Restored with all seven old deep pages |
| Academics | `/academics` | Hub retained; six old deep pages restored |
| Partnership Model | `/partnership-model` | Hub retained; six old deep pages restored |
| Florida Opportunity | `/florida` | Old source-backed opportunity, research, and five market profiles restored |
| Economics | `/economic-breakthrough` | Restored as a deep destination distinct from Story Page 07 |
| Launch Approach | `/launch-approach` | Six-stage Discover → Validate → Design → Build → Launch → Measure sequence restored |
| Team & Leadership | no route | Preserve as Coming soon until approved content exists |
| Evidence Library | `/evidence` | Old source-backed library and all six evidence sections restored |

## Student Experience routes

Restored from `src/lib/student-content.ts` in the old repository:

- `/student-experience`
- `/student-experience/a-week-at-can`
- `/student-experience/known-and-supported`
- `/student-experience/belonging`
- `/student-experience/faith-and-formation`
- `/student-experience/activities-and-service`
- `/student-experience/ready-for-whats-next`

The Explore card must point to `/student-experience`, not `/story/student-experience`.

## Academics routes

Source data restored from old `src/lib/academics-content.ts`.

- `/academics`
- `/academics/how-learning-works`
- `/academics/courses-and-graduation`
- `/academics/teachers-and-support`
- `/academics/progress-and-mastery`
- `/academics/pathways`
- `/academics/academic-credibility`

Academics remains distinct from Curriculum. Curriculum describes the instructional-content architecture. Academics describes how the academic program works for a student over time.

## Partnership Model routes

Source data restored from old `src/lib/partnership-content.ts`.

- `/partnership-model`
- `/partnership-model/why-partner`
- `/partnership-model/ways-to-partner`
- `/partnership-model/shared-responsibilities`
- `/partnership-model/local-distinctives`
- `/partnership-model/governance-and-accountability`
- `/partnership-model/partnership-readiness`

## Florida routes

Source data restored from old `src/lib/florida-content.ts`.

- `/florida`
- `/florida/market-landscape`
- `/florida/market-selection`
- `/florida/markets`
- `/florida/markets/desoto`
- `/florida/markets/gadsden`
- `/florida/markets/hamilton`
- `/florida/markets/holmes`
- `/florida/markets/okeechobee`
- `/florida/research`

The original source deliberately contains `VERIFY` markers and documented data conflicts. Preserve those markers. Do not silently fill them from general knowledge.

## Launch Approach routes

Source data restored from old `src/lib/launch-content.ts`.

- `/launch-approach`
- `/launch-approach/discover`
- `/launch-approach/validate`
- `/launch-approach/design`
- `/launch-approach/build`
- `/launch-approach/launch`
- `/launch-approach/measure`

The governed stage sequence is:

Discover → Validate → Design → Build → Launch → Measure

## Evidence Library routes

Source data restored from old `src/lib/evidence-content.ts`.

- `/evidence`
- `/evidence/market-research`
- `/evidence/education-choice`
- `/evidence/academic-model`
- `/evidence/christian-education`
- `/evidence/alternative-education`
- `/evidence/can-research`

Evidence pages explicitly distinguish evidence, CAN interpretation, and open questions. Preserve that framing and the source list supplied by the old repository.

## Economics

Old Explore routed Economics to `/economic-breakthrough`.

That route is restored as a deeper explanation of the shared-capability economic model. Story Page 07 remains the narrative version and should not replace the deep route.

## Old narrative aliases

The old 7-page narrative used these URLs. Compatibility redirects remain so previously shared links do not break:

- `/vision`
- `/missing-piece`
- `/can-model`
- `/local-distinctives`
- `/student-life`
- `/explore`

## Source-governance rule

When restoring old deep content, preserve the old source's wording, qualification, status labels, `VERIFY` markers, and source framing. Do not improve claims by guessing or by silently substituting current general knowledge.
