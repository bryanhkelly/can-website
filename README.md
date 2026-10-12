# CAN Academy

Eight responsive story pages built with React, TypeScript, Vite, and Tailwind CSS.

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
colored columns, and Explore uses photo-led audience cards and a photo-overlay
conversation CTA. Platform and Economics are native diagrams, not photo heroes.

All labels, diagrams, cards, and CTAs are editable HTML/CSS/SVG. At mobile widths,
the curriculum slabs flatten into readable bands and multi-column compositions
reflow rather than shrinking their text. Belonging-layer descriptions move into
a color-keyed legend below the portrait on mobile to stay readable.

The production handoff does not include independent skyline banners, individual
audience portraits, the illustrated buildings, the book cover, or a script font.
The site uses crops of the supplied high-resolution photographs, native diagram
approximations, and a local italic serif rather than enlarging reference crops.
These substitutions are not pixel-identical to the comps. Exact asset matching
requires those additional production assets; 2x retina delivery at large desktop
sizes also requires larger source photography.
