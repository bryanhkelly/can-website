# CAN Academy

Eight responsive story pages built with React, TypeScript, Vite, and Tailwind CSS.

Five audience doorway pages lead into the shared story:

- `/parents`
- `/pastors`
- `/christian-schools`
- `/homeschool`
- `/denominations`

Explore also links to these topic destinations:

- `/academics` — a standalone academic operating-model page
- `/partnership-model`
- `/florida` — market details pending approval
- `/start-a-community`
- `/evidence` — evidence materials coming soon

Partner-specific front doors are available at `/partners/the-journey-church`,
`/partners/cogic`, and `/partners/cogbf`. Their primary story links preserve
partner context through the shared story and into Explore and contact.

## Development

- `npm run dev` starts the local site.
- `npm run build` type-checks and builds the production site.
- `npm run lint` checks the source with Oxlint.

## Design implementation

The selected eight-page composite guides page composition, hierarchy, colors,
and diagram structure. Standalone production photographs live in
[public/images](./public/images); reference screenshots are not production backgrounds.

The Stakes and Curriculum use overlaid copy within photo-backed scenes.
Possibility uses a circular student focal image; Student Experience combines
the portrait with three belonging layers. Rooted Locally retains its three
colored columns. Explore is a topic-and-role destination hub with large visual
cards and a photo-led conversation CTA. Platform and Economics are native
diagrams, not photo heroes.

All labels, diagrams, cards, and CTAs are editable HTML/CSS/SVG. At mobile widths,
the curriculum slabs flatten into readable bands and multi-column compositions
reflow rather than shrinking their text. Belonging-layer descriptions move into
a color-keyed legend below the portrait on mobile to stay readable.

The Explore CAN role cards link to the five doorway pages. The Academics page is
distinct from Curriculum: it describes the academic path over time, while
Curriculum describes instructional content and perspective. Florida, Evidence,
and partner-specific pages avoid publishing unapproved details or sources.
Academics and Partnership Model use native SVG path and relationship models;
the mobile layouts simplify each model into readable vertical sequences. The
denominations page uses the supplied network model SVG and an interim community
photograph. A bespoke 2400-3000 px production photograph is still required
before final launch.

The production handoff does not include independent skyline banners, individual
audience portraits, the illustrated buildings, the book cover, or a script font.
The site uses crops of the supplied high-resolution photographs, native diagram
approximations, and a local italic serif rather than enlarging reference crops.
These substitutions are not pixel-identical to the comps. Exact asset matching
requires those additional production assets; 2x retina delivery at large desktop
sizes also requires larger source photography.
