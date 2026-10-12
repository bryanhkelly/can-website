/**
 * Launch Approach content. Geography-neutral: Florida is referenced only as the
 * first application of a reusable process. Nothing here asserts a selected
 * partner, site, date, approval, or operating result.
 */

export type LaunchStage = {
  n: string;
  slug: string;
  route: string;
  label: string;
  short: string;
  summary: string;
};

export const launchStages: LaunchStage[] = [
  {
    n: "01",
    slug: "discover",
    route: "/launch-approach/discover",
    label: "Discover",
    short: "Find the intersection of student need and local capacity.",
    summary:
      "Identify communities where a strong high-school program is needed and a trusted local institution may be able to host or extend it.",
  },
  {
    n: "02",
    slug: "validate",
    route: "/launch-approach/validate",
    label: "Validate",
    short: "Replace assumptions with direct evidence.",
    summary:
      "Test family demand, partner readiness, facility readiness, and launch-size economics through direct contact rather than desk research.",
  },
  {
    n: "03",
    slug: "design",
    route: "/launch-approach/design",
    label: "Design",
    short: "Design the CAN Community for the local market and partner.",
    summary:
      "Hold the academic and operating platform constant while shaping the local expression around the partner, the community, and the way they partner with CAN.",
  },
  {
    n: "04",
    slug: "build",
    route: "/launch-approach/build",
    label: "Build",
    short: "Prepare every system before students arrive.",
    summary:
      "Work six readiness streams — academic, partner and facility, staff, student and family, technology and data, financial and compliance.",
  },
  {
    n: "05",
    slug: "launch",
    route: "/launch-approach/launch",
    label: "Launch",
    short: "Open deliberately, learn quickly, protect the student experience.",
    summary:
      "Treat opening as a controlled implementation with daily escalation, weekly reviews, and thirty-, sixty-, and ninety-day checkpoints.",
  },
  {
    n: "06",
    slug: "measure",
    route: "/launch-approach/measure",
    label: "Measure and replicate",
    short: "Expansion follows demonstrated quality — not simply demand.",
    summary:
      "Measure student outcomes, family experience, partner and operating performance, and the evidence required before the model travels.",
  },
];

export const launchSteps: { to: string; label: string }[] = [
  { to: "/launch-approach", label: "Launch approach" },
  ...launchStages.map((s) => ({ to: s.route, label: `Stage ${s.n} · ${s.label}` })),
];

export const stageBySlug = Object.fromEntries(launchStages.map((s) => [s.slug, s])) as Record<
  string,
  LaunchStage
>;

/** Cross-section links. Sections not yet built point at the Go Deeper hub. */
export const crossLinks: Record<string, { label: string; to: string; note: string; available?: boolean }> = {
  academics: { label: "Academics", to: "/academics", note: "See the courses, instruction, and academic expectations behind a CAN Community." },
  content: { label: "Content Production", to: "/explore", note: "How courses and materials are produced centrally.", available: false },
  studentExperience: {
    label: "Student Experience",
    to: "/student-experience",
    note: "See what students should experience from the first day forward.",
  },
  partnership: { label: "Partnership Model", to: "/partnership-model", note: "See what CAN and local partners each bring to the relationship." },
  teachers: { label: "Teacher Model", to: "/explore", note: "Central and local teaching roles.", available: false },
  economics: { label: "Economics", to: "/economic-breakthrough", note: "Explore affordability, local economics, and network scale." },
  technology: { label: "Technology", to: "/explore", note: "Learning and records systems.", available: false },
  compliance: { label: "Legal and Compliance", to: "/explore", note: "School status, policies, records, and reporting.", available: false },
  florida: { label: "Florida Opportunity", to: "/florida", note: "See the research informing CAN's first launch market." },
};

/**
 * Current Launch module — data driven so status can be updated without redesign.
 * Do not name a site as selected until every gate has been satisfied.
 */
export type CurrentLaunchData = {
  scope: string;
  currentStage: string;
  status: string;
  supporting: string;
  fields: { label: string; value: string }[];
  priorities: string[];
  risks: string[];
};

export const currentLaunch: CurrentLaunchData = {
  scope: "Florida",
  currentStage: "Stage 01 · Discover",
  status: "Market and partner discovery",
  supporting:
    "CAN is evaluating initial Florida opportunities and potential partners. No location should be presented as an approved launch until market, partner, facility, demand, academic, compliance, and economic gates have been satisfied.",
  fields: [
    { label: "Current stage", value: "Discover" },
    { label: "Initial community", value: "Under evaluation" },
    { label: "Launch partner", value: "Under evaluation" },
    { label: "Partnership model", value: "Under evaluation across five research markets" },
    { label: "Target opening", value: "To be determined" },
    { label: "Initial grades", value: "To be determined" },
    { label: "Enrollment target", value: "To be determined" },
    { label: "Readiness status", value: "Discovery" },
  ],
  priorities: [
    "Complete county-level screening across the initial research markets.",
    "Open direct conversations with churches and Christian schools that have educational history.",
    "Evaluate realistic travel areas around promising local partners.",
  ],
  risks: [
    "Early market research must be validated with real families, partners, facilities, and local conditions.",
    "A strong church presence does not automatically mean a location is ready to support a high school.",
    "Launch-size economics must hold at a small first cohort, not only at eventual scale.",
  ],
};
