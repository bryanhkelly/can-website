export type ResearchStatus =
  | "Preliminary research"
  | "Priority diligence"
  | "Strategic discovery"
  | "Platform research";

export type MapPointKind =
  | "public-high"
  | "private-christian"
  | "charter"
  | "church"
  | "microschool"
  | "college"
  | "community";

export type MapPoint = {
  /** schematic coordinates on the standard CAN local-map canvas (0–100) */
  x: number;
  y: number;
  kind: MapPointKind;
  label: string;
  /** true only where the supplied research establishes the location */
  verified?: boolean;
};

export type MapRoad = {
  d: string;
  label: string;
  major?: boolean;
};

export type Figure = {
  label: string;
  value: string;
  note?: string;
  verify?: boolean;
};

export type Market = {
  slug: "desoto" | "okeechobee" | "holmes" | "gadsden" | "hamilton";
  route:
    | "/florida/markets/desoto"
    | "/florida/markets/okeechobee"
    | "/florida/markets/holmes"
    | "/florida/markets/gadsden"
    | "/florida/markets/hamilton";
  name: string;
  county: string;
  community: string;
  thesis: string;
  researchRole: string;
  opportunity: string;
  model: string;
  status: ResearchStatus;
  primaryQuestion: string;
  /** approximate state-map position, longitude/latitude */
  lon: number;
  lat: number;
  whyMatters: string[];
  figures: Figure[];
  choiceLandscape: string[];
  partnershipLandscape: string[];
  recommendedModel: string[];
  questions: string[];
  sources: { name: string; published: string }[];
  updated: string;
  map: {
    center: string;
    points: MapPoint[];
    roads: MapRoad[];
  };
};

export const VERIFY = "VERIFY";

export const choiceGaps = [
  {
    n: "01",
    name: "Capacity desert",
    body: "Alternatives exist, but the seats worth having are few relative to the student population.",
    tint: "var(--living)",
  },
  {
    n: "02",
    name: "Quality desert",
    body: "Options exist, but families lack the breadth or quality expected from a comprehensive high school.",
    tint: "var(--sky)",
  },
  {
    n: "03",
    name: "Geographic desert",
    body: "Alternatives are impractical because of distance, transportation, or family schedules.",
    tint: "var(--clay)",
  },
  {
    n: "04",
    name: "Affordability desert",
    body: "Credible options exist, but the remaining family cost is prohibitive.",
    tint: "var(--brass)",
  },
  {
    n: "05",
    name: "Platform opportunity",
    body: "Local Christian schools or ministries exist but cannot reach what a larger system can.",
    tint: "var(--deep)",
  },
];

export const selectionCriteria = [
  {
    n: "01",
    name: "High-school demand",
    body: "The number of students, incoming ninth-grade cohort, demographic composition, population movement, and realistic share required for launch.",
  },
  {
    n: "02",
    name: "Quality-adjusted choice capacity",
    body: "The number, scale, grade range, quality, affordability, and accessibility of existing private and charter high-school options.",
  },
  {
    n: "03",
    name: "Scholarship economics",
    body: "Available scholarship support, prevailing tuition, mandatory fees, remaining family cost, and realistic scholarship participation.",
  },
  {
    n: "04",
    name: "Partner readiness",
    body: "Local trust, educational history, leadership interest, weekday availability, willingness to share standards and data, and alignment with CAN's mission.",
  },
  {
    n: "05",
    name: "Facility readiness",
    body: "Classrooms, occupancy, fire and life safety, accessibility, parking, internet, gathering space, food service, recreation, and expansion potential.",
  },
  {
    n: "06",
    name: "Realistic travel area",
    body: "Twenty-, thirty-, and forty-five-minute travel areas, transportation options, work schedules, church referral networks, and cross-county draw.",
  },
  {
    n: "07",
    name: "Launch-size economics",
    body: "Whether the model holds up at 50, 75, 100, and 150 students rather than relying on an eventual 300-student campus.",
  },
  {
    n: "08",
    name: "Strategic learning value",
    body: "What the market could teach CAN about church-hosted schools, K–8 extensions, rural consortia, denominational partnerships, or micro-school federations.",
  },
];

const commonSources = [
  { name: "Florida Department of Education, school and district directories", published: `Publication date ${VERIFY}` },
  { name: "Florida scholarship program award schedules", published: `Publication date ${VERIFY}` },
  { name: "U.S. Census Bureau population and household estimates", published: `Publication date ${VERIFY}` },
  { name: "CAN Academy Florida Market Opportunity Study", published: `Publication date ${VERIFY}` },
];

const updated = `Research update date ${VERIFY}`;

export const markets: Market[] = [
  {
    slug: "desoto",
    route: "/florida/markets/desoto",
    name: "DeSoto / Arcadia",
    county: "DeSoto County",
    community: "Arcadia",
    thesis:
      "A small inland county where Christian education exists at the elementary level but comprehensive high-school capacity does not.",
    researchRole: "Strongest initial market-entry thesis",
    opportunity: "Capacity and quality gap",
    model: "Church-hosted academy or CAN-powered existing school",
    status: "Priority diligence",
    primaryQuestion:
      "Can CAN recruit a viable freshman cohort by expanding the breadth and capacity of local Christian education?",
    lon: -81.86,
    lat: 27.22,
    whyMatters: [
      "Arcadia anchors a compact county where nearly all secondary students are served by a single public pathway. Families who want a faith-based secondary education generally leave the county, accept a limited program, or stop choosing Christian education after eighth grade.",
      "That combination — a concentrated population, one dominant option, and existing Christian schooling that stops short of high school — is the clearest version of the question CAN needs to answer first: whether breadth and capacity, rather than a new building, are what a community is actually missing.",
    ],
    figures: [
      { label: "Approximate public 9–12 population", value: VERIFY, verify: true },
      { label: "Incoming ninth-grade cohort", value: VERIFY, verify: true },
      { label: "District performance signal", value: VERIFY, note: "State accountability grade", verify: true },
      { label: "Quality-adjusted private/charter high-school capacity", value: "Limited", note: "Seat count VERIFY" },
      { label: "Grade 9–12 scholarship amount", value: VERIFY, verify: true },
      { label: "Share of students within a 30-minute drive of Arcadia", value: VERIFY, verify: true },
    ],
    choiceLandscape: [
      "Families can choose the county public high school, a small number of faith-based programs that generally end before ninth grade, or a substantial commute to a larger neighbouring county.",
      "The binding constraint appears to be capacity and breadth rather than affordability: scholarship support materially reduces family cost, but there is no local school offering a full comprehensive secondary program.",
      "Quality-adjusted capacity is therefore close to zero even though some private options are technically present.",
    ],
    partnershipLandscape: [
      "Several established congregations in and around Arcadia operate weekday ministries and have long-standing family relationships.",
      "At least one existing Christian school could be a CAN-powered partner rather than a competitor.",
      `Specific congregations, facility condition, and weekday availability are unconfirmed. Church presence is not facility readiness. ${VERIFY}`,
    ],
    recommendedModel: [
      "Evaluate a church-hosted academy that opens with ninth and tenth grade, or a CAN-powered partnership with an existing Christian school that wants to extend upward.",
      "Both configurations test the same thesis: CAN supplies the academic platform, breadth of course, and operating discipline while the local institution supplies trust, facility, and relationships.",
    ],
    questions: [
      "How many families with rising ninth graders would seriously consider a new local Christian high school in year one?",
      "Which local facility can pass occupancy, fire, life-safety, and accessibility review without major capital work?",
      "Is an existing Christian school willing to extend into secondary grades under shared standards and shared data?",
      "What transportation exists for students outside Arcadia proper, and who would operate it?",
      "How would the county public high school's programs — athletics, career pathways, dual enrollment — affect family decisions?",
      "Can a full high-school faculty be hired locally, or must most instruction come from the network?",
      "Does the model remain sustainable at 50 and 75 students, not only at 150?",
    ],
    sources: commonSources,
    updated,
    map: {
      center: "Arcadia",
      points: [
        { x: 50, y: 50, kind: "community", label: "Arcadia", verified: true },
        { x: 44, y: 44, kind: "public-high", label: `County public high school ${VERIFY}` },
        { x: 56, y: 57, kind: "church", label: `Candidate church ${VERIFY}` },
        { x: 40, y: 60, kind: "private-christian", label: `Christian school (K–8) ${VERIFY}` },
        { x: 62, y: 40, kind: "microschool", label: `Micro-school ${VERIFY}` },
        { x: 24, y: 30, kind: "college", label: `Dual-enrollment campus ${VERIFY}` },
        { x: 80, y: 72, kind: "charter", label: `Charter option ${VERIFY}` },
      ],
      roads: [
        { d: "M 4 46 L 96 54", label: "East–west highway", major: true },
        { d: "M 52 2 L 48 98", label: "North–south highway", major: true },
        { d: "M 10 86 L 92 22", label: "County road" },
      ],
    },
  },
  {
    slug: "okeechobee",
    route: "/florida/markets/okeechobee",
    name: "Okeechobee",
    county: "Okeechobee County",
    community: "Okeechobee",
    thesis:
      "A market where families already choose alternatives before ninth grade, but where those choices rarely continue into high school.",
    researchRole: "Scale and K–8-to-9 transition opportunity",
    opportunity: "Meaningful high-school market with demonstrated choice demand",
    model: "Church-hosted secondary program or existing-school partnership",
    status: "Preliminary research",
    primaryQuestion:
      "Can CAN become the preferred high-school continuation for families already choosing alternatives before ninth grade?",
    lon: -80.83,
    lat: 27.24,
    whyMatters: [
      "Okeechobee has a larger secondary-age population than the other research markets and observable demand for non-district options in the elementary and middle years.",
      "The interesting question is not whether families will choose differently — some already do — but whether that choice survives the transition to ninth grade. If it does not, the constraint is continuation capacity, which is precisely what CAN is designed to supply.",
    ],
    figures: [
      { label: "Approximate public 9–12 population", value: VERIFY, verify: true },
      { label: "Incoming ninth-grade cohort", value: VERIFY, verify: true },
      { label: "District performance signal", value: VERIFY, verify: true },
      { label: "Quality-adjusted private/charter high-school capacity", value: "Partial", note: "Seat count VERIFY" },
      { label: "Grade 9–12 scholarship amount", value: VERIFY, verify: true },
      { label: "Share of K–8 choice enrollment continuing locally at grade 9", value: VERIFY, verify: true },
    ],
    choiceLandscape: [
      "Families can choose the district high school or travel toward larger coastal and inland markets.",
      "Non-district enrollment appears more established in the earlier grades than in secondary, suggesting a continuation gap rather than an absence of demand.",
      `Whether the constraint is capacity, breadth, or affordability at grade 9 is unresolved. ${VERIFY}`,
    ],
    partnershipLandscape: [
      "The community includes multiple sizeable congregations with weekday facilities and youth ministry infrastructure.",
      "One or more existing Christian schools may be candidates for a secondary extension partnership.",
      `Leadership interest, weekday availability, and facility condition are unconfirmed. ${VERIFY}`,
    ],
    recommendedModel: [
      "Test a church-hosted secondary program positioned explicitly as the ninth-grade continuation for existing K–8 choice families.",
      "Alternatively, partner with an existing school that already holds those family relationships and lacks only a high school.",
    ],
    questions: [
      "How many families currently exit non-district education at ninth grade, and where do they go?",
      "Would existing K–8 providers treat a CAN secondary program as a partner or a competitor?",
      "Which facilities could host a secondary program on weekdays without displacing existing ministry use?",
      "What does the remaining family cost look like after scholarship at prevailing local tuition?",
      "How far are families realistically willing to drive within and beyond the county?",
      "Can a full high-school faculty be hired and kept locally?",
    ],
    sources: commonSources,
    updated,
    map: {
      center: "Okeechobee",
      points: [
        { x: 46, y: 46, kind: "community", label: "Okeechobee", verified: true },
        { x: 40, y: 38, kind: "public-high", label: `District high school ${VERIFY}` },
        { x: 55, y: 52, kind: "church", label: `Candidate church ${VERIFY}` },
        { x: 34, y: 58, kind: "private-christian", label: `Christian school ${VERIFY}` },
        { x: 66, y: 34, kind: "charter", label: `Charter option ${VERIFY}` },
        { x: 60, y: 70, kind: "college", label: `Dual-enrollment campus ${VERIFY}` },
        { x: 22, y: 76, kind: "microschool", label: `Micro-school ${VERIFY}` },
      ],
      roads: [
        { d: "M 2 40 L 98 48", label: "East–west highway", major: true },
        { d: "M 44 2 L 50 98", label: "North–south highway", major: true },
        { d: "M 6 92 L 96 76", label: "Lakeside route" },
      ],
    },
  },
  {
    slug: "holmes",
    route: "/florida/markets/holmes",
    name: "Holmes / Bonifay",
    county: "Holmes County",
    community: "Bonifay",
    thesis:
      "A rural panhandle county where distance, not preference, is what keeps families from a Christian high school.",
    researchRole: "Rural delivery test",
    opportunity: "Geographic and capacity desert",
    model: "Regional church consortium",
    status: "Strategic discovery",
    primaryQuestion:
      "Can shared services and a multi-church transportation network make a 75–150 student regional high school viable?",
    lon: -85.68,
    lat: 30.79,
    whyMatters: [
      "Holmes County is small, and no single congregation there is likely to sustain a high school alone. The nearest comprehensive alternatives sit well outside a practical daily commute for many families.",
      "That makes it the right place to test the consortium: several churches across county lines contributing facilities, transportation, and families to one shared regional school rather than each attempting a school of its own.",
    ],
    figures: [
      { label: "Approximate public 9–12 population", value: VERIFY, verify: true },
      { label: "Incoming ninth-grade cohort", value: VERIFY, verify: true },
      { label: "District performance signal", value: VERIFY, verify: true },
      { label: "Quality-adjusted private/charter high-school capacity", value: "Very limited", note: "Seat count VERIFY" },
      { label: "Grade 9–12 scholarship amount", value: VERIFY, verify: true },
      { label: "Drive time to the nearest comprehensive private high school", value: VERIFY, verify: true },
    ],
    choiceLandscape: [
      "For most families the practical choice set is the district high school or a long daily drive.",
      "The constraint is geographic first and capacity second: even where an alternative exists on paper, the travel burden removes it from consideration for working families.",
      "Affordability is comparatively less binding because scholarship support covers a large share of realistic tuition in a low-cost operating environment.",
    ],
    partnershipLandscape: [
      "A regional consortium would likely draw congregations from Holmes and adjacent counties rather than Bonifay alone.",
      "Transportation capacity — church vans, shared routes, volunteer drivers — is a partnership asset that must be inventoried, insured, and supervised.",
      `Participating congregations, vehicle capacity, and insurance posture are unconfirmed. ${VERIFY}`,
    ],
    recommendedModel: [
      "Evaluate a regional church consortium: one academic program, one CAN platform, one accountable operator, hosted at a primary site with contributing churches supplying students, transportation, and secondary spaces.",
      "The consortium is the configuration most likely to generalise to rural America, which is why the learning value here is high even at modest enrollment.",
    ],
    questions: [
      "How many congregations across the region would formally commit families and transportation?",
      "Which single site can host a 75–150 student program and pass life-safety and accessibility review?",
      "What routes, vehicles, drivers, and insurance are required for a multi-church transportation network?",
      "What is the realistic travel area at twenty, thirty, and forty-five minutes from the candidate site?",
      "Can the economics work at 75 students, and what breaks first if enrollment lands at 50?",
      "How will the school recruit and retain secondary teachers in a rural labour market?",
      "How does cross-county draw interact with district relationships and scholarship administration?",
    ],
    sources: commonSources,
    updated,
    map: {
      center: "Bonifay",
      points: [
        { x: 48, y: 48, kind: "community", label: "Bonifay", verified: true },
        { x: 42, y: 40, kind: "public-high", label: `County high school ${VERIFY}` },
        { x: 58, y: 54, kind: "church", label: `Consortium church A ${VERIFY}` },
        { x: 26, y: 66, kind: "church", label: `Consortium church B ${VERIFY}` },
        { x: 74, y: 30, kind: "church", label: `Consortium church C ${VERIFY}` },
        { x: 82, y: 66, kind: "private-christian", label: `Christian school ${VERIFY}` },
        { x: 16, y: 24, kind: "college", label: `Dual-enrollment campus ${VERIFY}` },
      ],
      roads: [
        { d: "M 2 34 L 98 42", label: "Interstate corridor", major: true },
        { d: "M 46 2 L 52 98", label: "State highway", major: true },
        { d: "M 8 80 L 94 88", label: "Rural route" },
      ],
    },
  },
  {
    slug: "gadsden",
    route: "/florida/markets/gadsden",
    name: "Gadsden / Quincy–Havana",
    county: "Gadsden County",
    community: "Quincy and Havana",
    thesis:
      "A county with a genuine history of church-led education, where the opportunity is to strengthen an existing ministry rather than add another school.",
    researchRole: "Denominational platform opportunity",
    opportunity: "Strong church education history within a more competitive market",
    model: "CAN-powered COGIC school or education network",
    status: "Platform research",
    primaryQuestion:
      "Can CAN strengthen and expand an existing educational ministry rather than introduce another competing school?",
    lon: -84.58,
    lat: 30.59,
    whyMatters: [
      "Gadsden sits close to a larger metropolitan market, so families have more reachable alternatives than in the other research counties. A new competing school would enter a crowded field.",
      "What Gadsden has that the other markets do not is an established denominational education history. The platform question — can CAN make an existing ministry school academically and financially stronger without taking it over — is best answered here.",
    ],
    figures: [
      { label: "Approximate public 9–12 population", value: VERIFY, verify: true },
      { label: "Incoming ninth-grade cohort", value: VERIFY, verify: true },
      { label: "District performance signal", value: VERIFY, verify: true },
      { label: "Quality-adjusted private/charter high-school capacity", value: "Moderate", note: "Includes metro-adjacent options; seat count VERIFY" },
      { label: "Grade 9–12 scholarship amount", value: VERIFY, verify: true },
      { label: "Share of students commuting out of county for school", value: VERIFY, verify: true },
    ],
    choiceLandscape: [
      "Families can choose district schools, existing faith-based programs, or metro-adjacent private and charter options within a tolerable commute.",
      "The binding constraint is neither pure capacity nor pure geography but competitiveness: an option must be demonstrably strong to change a family's decision.",
      `Out-of-county enrollment flows are unquantified. ${VERIFY}`,
    ],
    partnershipLandscape: [
      "Denominational relationships, including COGIC congregations with an educational history, are the central asset in this market.",
      "A network structure — several congregations under one academic platform — may fit better than a single hosted campus.",
      `Named congregations, current enrollment, and governance structures are unconfirmed. ${VERIFY}`,
    ],
    recommendedModel: [
      "Evaluate a CAN-powered denominational school or education network in which CAN supplies curriculum, instruction, assessment, counselling, and back-office work while governance and identity remain with the ministry.",
      "Success here would establish the template for denominational partnerships nationally.",
    ],
    questions: [
      "Which existing ministry schools would welcome a platform partnership, and on what governance terms?",
      "What academic and operational gaps would a partnership need to close in year one?",
      "How do metro-adjacent alternatives affect the realistic addressable enrollment?",
      "What are the current facilities, occupancy limits, and expansion potential at candidate sites?",
      "How would scholarship participation and remaining family cost compare with nearby competitors?",
      "What denominational approvals are required, and how long do they take?",
    ],
    sources: commonSources,
    updated,
    map: {
      center: "Quincy–Havana",
      points: [
        { x: 42, y: 54, kind: "community", label: "Quincy", verified: true },
        { x: 62, y: 34, kind: "community", label: "Havana", verified: true },
        { x: 36, y: 46, kind: "public-high", label: `County high school ${VERIFY}` },
        { x: 52, y: 62, kind: "church", label: `Denominational congregation ${VERIFY}` },
        { x: 70, y: 52, kind: "private-christian", label: `Ministry school ${VERIFY}` },
        { x: 86, y: 70, kind: "charter", label: `Metro-adjacent charter ${VERIFY}` },
        { x: 88, y: 44, kind: "college", label: `Dual-enrollment campus ${VERIFY}` },
      ],
      roads: [
        { d: "M 2 62 L 98 50", label: "Interstate corridor", major: true },
        { d: "M 38 2 L 46 98", label: "State highway", major: true },
        { d: "M 60 8 L 92 86", label: "County road" },
      ],
    },
  },
  {
    slug: "hamilton",
    route: "/florida/markets/hamilton",
    name: "Hamilton / Jasper",
    county: "Hamilton County",
    community: "Jasper",
    thesis:
      "Several very small Christian schools already exist; individually none can offer a full high school, and together they might.",
    researchRole: "Micro-school federation laboratory",
    opportunity: "Several very small Christian schools with limited individual capacity",
    model: "Shared-services federation",
    status: "Strategic discovery",
    primaryQuestion:
      "Can independent schools retain their identities while collectively gaining teachers, courses, counseling, technology, and administrative capacity?",
    lon: -82.95,
    lat: 30.52,
    whyMatters: [
      "Hamilton is the smallest of the research markets, and the existing Christian education there is unusually fragmented: multiple micro-schools, each serving a handful of families.",
      "None of them can independently offer laboratory science, advanced mathematics, counselling, or dual enrollment. Federation — shared courses, shared staff, shared systems, separate identities — is the only structure that would give those students a comprehensive high school.",
    ],
    figures: [
      { label: "Approximate public 9–12 population", value: VERIFY, verify: true },
      { label: "Incoming ninth-grade cohort", value: VERIFY, verify: true },
      { label: "District performance signal", value: VERIFY, verify: true },
      { label: "Quality-adjusted private/charter high-school capacity", value: "Fragmented", note: "Micro-school seat count VERIFY" },
      { label: "Grade 9–12 scholarship amount", value: VERIFY, verify: true },
      { label: "Number of identified micro-schools in the travel area", value: VERIFY, verify: true },
    ],
    choiceLandscape: [
      "Families choose between the district high school, a very small faith-based program, or homeschool arrangements.",
      "The limit is not willingness. The schools that exist simply cannot offer the range of courses a full high school needs.",
      "Regional draw across the state line and neighbouring counties may be material and is unquantified.",
    ],
    partnershipLandscape: [
      "The partners here are the micro-schools themselves, plus the congregations that host them.",
      "A federation requires an agreement on shared standards, shared assessment, shared records, and a single accountable academic authority — while each school keeps its own name and culture.",
      `School names, enrollment, and leadership interest are unconfirmed. ${VERIFY}`,
    ],
    recommendedModel: [
      "Evaluate a shared-services federation: CAN provides courses, specialist instruction, counselling, technology, records, and administration across several member schools.",
      "The federation is the lowest-capital configuration CAN can test and the one most transferable to fragmented rural regions.",
    ],
    questions: [
      "How many micro-schools exist in the realistic travel area, and what grades do they actually serve?",
      "Would those schools accept shared academic standards, shared assessment, and shared data?",
      "Which site would host in-person laboratory science, and does it meet safety requirements?",
      "How would students move between member sites, and who is responsible for supervision?",
      "What is the combined ninth-grade cohort across all members, and is it sufficient?",
      "How are tuition, scholarship administration, and revenue shared between members and CAN?",
      "Who holds accreditation, transcripts, and graduation authority?",
    ],
    sources: commonSources,
    updated,
    map: {
      center: "Jasper",
      points: [
        { x: 46, y: 44, kind: "community", label: "Jasper", verified: true },
        { x: 38, y: 36, kind: "public-high", label: `County high school ${VERIFY}` },
        { x: 58, y: 52, kind: "microschool", label: `Micro-school A ${VERIFY}` },
        { x: 30, y: 62, kind: "microschool", label: `Micro-school B ${VERIFY}` },
        { x: 72, y: 30, kind: "microschool", label: `Micro-school C ${VERIFY}` },
        { x: 66, y: 72, kind: "church", label: `Host congregation ${VERIFY}` },
        { x: 18, y: 22, kind: "college", label: `Dual-enrollment campus ${VERIFY}` },
      ],
      roads: [
        { d: "M 2 28 L 98 36", label: "Interstate corridor", major: true },
        { d: "M 44 2 L 50 98", label: "State highway", major: true },
        { d: "M 10 74 L 96 66", label: "County road" },
      ],
    },
  },
];

export const marketBySlug = (slug: string) => markets.find((m) => m.slug === slug);

export const floridaSteps: { to: string; label: string }[] = [
  { to: "/florida", label: "Why Florida" },
  { to: "/florida/market-landscape", label: "Market landscape" },
  { to: "/florida/market-selection", label: "Market selection" },
  { to: "/florida/markets", label: "Markets" },
  ...markets.map((m) => ({ to: m.route as string, label: m.name })),
  { to: "/florida/research", label: "Research" },
];

export const dataConflicts = [
  "Multiple versions of a market opportunity score appear across the source documents. No score is displayed until CAN designates one scoring model as authoritative.",
  `Private-school enrollment figures differ between state directories and school-reported counts. ${VERIFY}`,
  `Scholarship award amounts vary by program, grade band, and award year; a single grade 9–12 figure is not yet reconciled. ${VERIFY}`,
  `Realistic travel areas were estimated at county centroids rather than at verified partner addresses. ${VERIFY}`,
];
