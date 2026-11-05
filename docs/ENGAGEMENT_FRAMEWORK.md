# CAN Academy Engagement Framework

**Scope:** `bryanhkelly/can-website` feature `feature/engagement-landing-launch-next-steps`  
**Status:** Code in PR; not deployed and not a CAN OS authorization or application change.

## Product rule

**Landing → Canonical Experience → Next Steps** is a common engagement design, not a new workflow engine.

- **Landing** lives on the public CAN Academy marketing site. It introduces the opportunity, offers authoritative explanatory links, and presents a no-pressure conversation option.
- **Experience** remains owned by CAN OS. School Launch Studio `/launch/school`, staff onboarding `/launch/staff`, and family onboarding `/launch/family` retain their existing identity, authorization, actions, progress and approval rules. This PR does **not** edit those routes.
- **Next Steps** is a separate public page that presents finite options, including a conversation, more information, or anonymous feedback. It is **not a completion receipt**. For actual application status, offers, qualification and enrollment, the canonical CAN OS system must determine the next allowed action.

The marketing site uses these explicit routes:
- `/landing`: public audience selection
- `/landing/start-a-school`
- `/landing/teach-with-can`
- `/landing/family-admissions`
- `/landing/school-expansion`
- `/landing/church-networks`
- `/next/:journeyId`: the appropriate choices for the audience, **not** proof of finishing an experience
- `/contact`: existing Netlify contact intake with bounded `journey` and `intent`
- The existing CAN OS paths remain unchanged.

## Code boundaries

| Area | Owner | What it does |
| --- | --- | --- |
| `src/data/engagementJourneys.ts` | Marketing editorial | Typed finite audience/journey registry, landing content, launch route metadata, next-step choices, future guidance asset keys |
| `src/lib/engagement.ts` | Marketing framework | Validated campaign/source/partner attribution, safe local link building, intentional mapping to existing `can-contact` form |
| `src/pages/EngagementLandingPage.tsx` | Marketing experience | Public, indexable landing and five journey pages |
| `src/pages/EngagementNextStepsPage.tsx` | Marketing experience | Choice-based, no-false-receipt next-step presentation; optional anonymous Netlify feedback |
| `src/components/SeoManager.tsx` | Marketing SEO | Campaign metadata; excludes `/next/` pages from indexing |
| `src/pages/ContactPage.tsx` | Marketing contact owner | Reuses existing form, follows bounded context, asks for name/email only for an explicit conversation |
| CAN OS | Existing application services | Verified school, teacher, family, and related operational workflows. **Untouched in this PR** |

## Critical handoff and release gate

The CAN OS address is configured through the deployment environment variable `VITE_CAN_OS_BASE_URL`.

1. It must be the **approved HTTPS origin**, ending in `/`, without a query, fragment, username or password.
2. The registry supplies hardcoded paths; public query parameters are not transferred into CAN OS.
3. **No default URL is defined.** Do **not** use `can-os-demo-new.netlify.app` or any public demonstration tenant as a production destination.
4. Until that setting is intentionally enabled, the public page offers explanatory links and conversation/feedback choices, and shows an honest unavailable message in the existing-member panel.
5. Even when enabled, the verified launch links are **only for users with pre-existing roles and grants**. Launch Studio is not a public simulation. Landing pages do not create Organization, Site, Program, employee, guardian, or student records.
6. Later, if CAN authorizes a public exploration journey, it must be separately designed and reviewed. That should not be simulated by granting visitors access to a real or shared school environment.

**Do not advertise a teacher application as available.** This release has a public teacher-recruitment *interest* page, not a job posting or hiring pipeline. Prospective teachers can ask questions via the contact form. The `/launch/staff` path is only for already verified staff.

## Video enhancement is intentionally deferred

The typed registry includes **optional static content slot IDs** such as `school-opportunity-intro`, `school-launch-welcome`, `school-next-steps`, and `teacher-recruitment-intro`. These are inert references, not rendered video.

This PR does NOT implement:
- A video player or uploads.
- A media management console.
- A campaign video matching service.
- A transcript publisher, caption workflow or analytics based on viewing videos.
- Autoplay, tracking pixels, or arbitrary remote video URLs.

When video is approved, a separate change may resolve **only vetted static assets** and immutable editorial manifests to a reusable optional component. Use real leadership, reviewed scripts, captions, an HTML transcript, explicit play/pause controls, skip, and safe fallback when the asset is absent. Those additions **must not block completing a journey** or require an admin CMS to launch this framework.

## Data and event semantics

Marketing events use the existing analytics adapter: landing click, contact click, verified launch click, selected next step, and feedback submission/success/error. These are anonymous marketing events, **not application completions**. No per-person conversion scores are computed.

Only bounded identifiers (`campaign`, `utm_source`, allowed `partner`) are carried between public pages. No arbitrary `returnTo` URLs, personal identifiers, school records or student details are accepted from marketing context.

`can-engagement-feedback` posts a free-text comment without requiring contact information. Its hidden Netlify HTML form is registered in `index.html`, separately from `can-contact`. The UI warns against including student records or children's names. The existing privacy notice should acknowledge voluntarily submitted feedback.

Intent mapping is a **finite registry**. A choice marked `information` leads to an actual public page. A choice marked `conversation` leads to the existing `can-contact` form with the selected audience and topic. A `feedback` choice uses the small anonymous feedback form. Selecting a choice does not imply a meeting, school opening, application, or enrollment action.

## Rollout and testing

1. Build and lint `can-website` in CI; verify 5 landing URLs, 5 next-step variants, social metadata, and `/next/` robots noindex.
2. Browser: keyboard focus, small/mobile layouts, no unplayable video placeholders, working internal links, and no collisions with protected v12 story pages or v14 role doorways.
3. Netlify preview: verify both `can-contact` and `can-engagement-feedback` forms are detected, and verify **real** success/failure responses. Do not rely only on a 200 from SPA fallback.
4. Verify the default (unset) CAN OS URL presents accurate access messaging. In a controlled preview, set an approved test origin, verify exact destination and unchanged CAN OS permission checks. Never configure a live production host or shared demo without approval.
5. Confirm no protected CAN OS commands or public application statuses are duplicated.
6. Confirm the site owner reviews any new public wording and audience-specific messaging before production publication.

## Follow-on work, not part of this first slice

- CAN OS may offer a verified, state-aware `Next Steps` handoff **after** an actual workflow milestone. That should use server-derived outcomes rather than trusting the public URL's selected journey.
- Connect partner development and recruiting follow-up to an approved CRM/operations pipeline; Netlify forms alone do not provide workflow ownership, notifications or a follow-up SLA.
- Add video content only when the recording, script approval, accessibility, storage, hosting, and publishing ownership questions are resolved.
- Add dedicated teacher applications only when recruiting identity, roles, qualification collection, applicant rights, and canonical persistence have an approved owner.
