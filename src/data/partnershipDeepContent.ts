export type PartnershipStatus =
  | "Exploratory"
  | "Under discussion"
  | "Alignment review"
  | "Assessment"
  | "Conditional fit"
  | "Term design"
  | "Approved"
  | "Committed"
  | "Launching"
  | "Operating"
  | "Paused"
  | "Not aligned"
  | "Closed"
  | "Draft framework"
  | "Model-dependent"
  | "Agreement-dependent"
  | "Core CAN requirement"
  | "Local responsibility"
  | "Shared responsibility"
  | "Not yet determined";

export const partnershipSteps = [
  { to: "/partnership-model", label: "Partnership Model" },
  { to: "/partnership-model/why-partner", label: "Why Partner" },
  { to: "/partnership-model/shared-responsibilities", label: "Shared Responsibilities" },
  { to: "/partnership-model/ways-to-partner", label: "Ways to Partner" },
  { to: "/partnership-model/local-distinctives", label: "Local Distinctives" },
  { to: "/partnership-model/governance-and-accountability", label: "Governance and Accountability" },
  { to: "/partnership-model/partnership-readiness", label: "Partnership Readiness" },
] as const;

export type PartnershipCrossKey =
  | "florida"
  | "academics"
  | "studentExperience"
  | "christianFormation"
  | "teacherModel"
  | "economics"
  | "technology"
  | "legal"
  | "launch";

export const partnershipCrossLinks: Record<
  PartnershipCrossKey,
  { label: string; to: string; note: string; available?: boolean }
> = {
  florida: {
    label: "Florida Opportunity",
    to: "/florida",
    note: "Market selection and community research.",
  },
  academics: {
    label: "Academics",
    to: "/academics",
    note: "See the academic standards, courses, teaching, and records behind the school.",
  },
  studentExperience: {
    label: "Student Experience",
    to: "/student-experience",
    note: "See what the model means for students day to day.",
  },
  christianFormation: {
    label: "Christian Formation",
    to: "/student-experience/faith-and-formation",
    note: "Detailed formation practice and local theological identity.",
  },
  teacherModel: {
    label: "Teacher Model",
    to: "/explore",
    note: "Teachers and teaching roles.",
    available: false,
  },
  economics: {
    label: "Economics",
    to: "/economic-breakthrough",
    note: "Explore affordability, local economics, and network scale.",
  },
  technology: {
    label: "Technology",
    to: "/explore",
    note: "Platform architecture and data systems.",
    available: false,
  },
  legal: {
    label: "Legal and Compliance",
    to: "/explore",
    note: "Legal entity and regulatory requirements.",
    available: false,
  },
  launch: {
    label: "Launch Approach",
    to: "/launch-approach",
    note: "See how partners and communities move toward launch.",
  },
};

/* ---------- Page 1 ---------- */

export const partnershipPrinciples = [
  {
    n: "01",
    title: "Locally anchored",
    body: "Students remain connected to trusted adults, families, churches, and community institutions. The CAN Community should feel rooted in a real place, not delivered from a distant organization.",
  },
  {
    n: "02",
    title: "Centrally enabled",
    body: "CAN provides the academic and operating work that would be difficult, expensive, or simply impractical for one local partner to rebuild alone.",
  },
  {
    n: "03",
    title: "Mutually accountable",
    body: "CAN and each local partner accept defined responsibilities, decision rights, quality expectations, financial obligations, student-safety requirements, and measures of success.",
  },
];

export const partnerTypes = [
  {
    title: "Individual church",
    body: "A congregation with suitable leadership, community trust, weekday capacity, and a desire to serve students and families.",
  },
  {
    title: "Existing K–8 Christian school",
    body: "A school that wants to keep serving its families through graduation without recreating an entire high school on its own.",
  },
  {
    title: "Existing Christian high school or micro-school",
    body: "An operator that wants stronger academics, specialist teachers, records, counseling, technology, or back-office help.",
  },
  {
    title: "Group of churches",
    body: "Several congregations combining facilities, relationships, transportation, referrals, activities, or pastoral support.",
  },
  {
    title: "Denomination or jurisdiction",
    body: "A church network seeking a shared educational system that can support multiple local ministries while preserving appropriate denominational identity.",
  },
  {
    title: "College, employer, or community organization",
    body: "An organization contributing dual enrollment, applied learning, career exposure, facilities, specialized instruction, activities, or student opportunities.",
  },
];

export const partnershipIs = [
  "Each party contributes something the other cannot",
  "Each party accepts defined responsibilities",
  "Students receive a coherent educational experience",
  "Local identity remains meaningful",
  "Academic and safety standards remain enforceable",
  "Decisions and escalation paths are explicit",
  "Data and finances are handled transparently",
  "Quality is reviewed continuously",
];

export const partnershipIsNot = [
  "A facility lease",
  "A curriculum subscription",
  "An online-school referral agreement",
  "A technology license",
  "A conventional franchise",
  "A request for the church to build an entire high school independently",
  "A relationship in which CAN removes all local authority",
  "A relationship in which local preferences can override student safety, academic integrity, or legal obligations",
];

export const partnershipEntryPoints = [
  {
    to: "/partnership-model/why-partner",
    title: "Why Partner With CAN",
    body: "Ministry, educational, operating, and community value for a local partner.",
  },
  {
    to: "/partnership-model/shared-responsibilities",
    title: "Shared Responsibilities",
    body: "Who owns what, what is configurable, and what can never be optional.",
  },
  {
    to: "/partnership-model/ways-to-partner",
    title: "Ways to Partner",
    body: "Five ways to partner and a guided model-fit explorer.",
  },
  {
    to: "/partnership-model/local-distinctives",
    title: "Local Identity and Christian Distinctives",
    body: "Unity without uniformity, and the partnership covenant.",
  },
  {
    to: "/partnership-model/governance-and-accountability",
    title: "Governance, Economics, and Accountability",
    body: "Questions every agreement must resolve before commitment.",
  },
  {
    to: "/partnership-model/partnership-readiness",
    title: "Partnership Readiness",
    body: "Readiness dimensions and the journey from interest to commitment.",
  },
];

/* ---------- Page 2 ---------- */

export const whyPartnerValue = [
  {
    n: "01",
    title: "Ministry value",
    items: [
      "Extending ministry into weekday student life",
      "Deepening relationships with youth and families",
      "Serving families already connected to the congregation",
      "Reaching new families through a significant community need",
      "Creating meaningful opportunities for mentoring, service, leadership, and pastoral care",
      "Connecting education with the church's broader ministry mission",
      "Strengthening the church's long-term relationship with students during their high-school years",
    ],
  },
  {
    n: "02",
    title: "Educational value",
    lead: "A partner may gain access to:",
    items: [
      "A coherent high-school course sequence",
      "Subject-matter instructors",
      "Advanced and specialized courses",
      "Assessment and intervention systems",
      "Academic advising",
      "College and career preparation",
      "Accurate credits, transcripts, and records",
      "Shared quality assurance",
      "Network learning opportunities",
      "Training and professional support",
    ],
  },
  {
    n: "03",
    title: "Operating value",
    lead: "A partner may avoid independently recreating:",
    items: [
      "A complete high-school faculty",
      "Curriculum-selection processes",
      "Course-development systems",
      "Learning and student-information platforms",
      "Transcript and records operations",
      "Specialized academic services",
      "College counseling infrastructure",
      "Enrollment and scholarship workflows",
      "Network-wide quality systems",
      "Every administrative function required for scale",
    ],
  },
  {
    n: "04",
    title: "Community value",
    lead: "A partnership may help:",
    items: [
      "Expand real local high-school choice",
      "Preserve access to Christian education after eighth grade",
      "Activate trusted institutions already present in the community",
      "Connect students with local employers, colleges, ministries, and service opportunities",
      "Create new educational pathways without beginning with major real-estate development",
      "Support communities too small to sustain a conventional private high school independently",
    ],
  },
];

export const partnersRetain = [
  "Church identity",
  "Denominational identity",
  "Pastoral relationships",
  "Local ministry culture",
  "Appropriate governance authority",
  "Local community relationships",
  "Service priorities",
  "Approved local programming",
  "Existing school identity",
  "Relationships with enrolled families",
];

export const partnersGain = [
  "Academic breadth",
  "Specialized teachers",
  "Course and assessment systems",
  "Training",
  "Technology",
  "Records",
  "College and career support",
  "Enrollment support",
  "Administrative capacity",
  "Quality assurance",
  "Network opportunities",
  "Replication support",
];

/* ---------- Page 3 ---------- */

export const canResponsibilities = [
  "Academic standards",
  "Course sequences",
  "Curriculum and instructional resources",
  "Course leads and subject-matter instructors",
  "Assessment systems",
  "Academic calendars and pacing",
  "Teacher guidance and training",
  "Learning technology",
  "Student-information and records systems",
  "Credit and transcript processes",
  "Academic advising resources",
  "College and career resources",
  "Specialized and advanced courses",
  "Quality assurance",
  "Shared administrative services",
  "Network programming",
  "Platform support",
];

export const localResponsibilities = [
  "Trusted local leadership",
  "An approved daily learning environment",
  "Suitable facilities",
  "Local learning leaders",
  "Student supervision",
  "Attendance accountability",
  "In-person study support",
  "Technology assistance",
  "Relationships with students and families",
  "Pastoral care",
  "Christian community",
  "Local theological and denominational formation",
  "Local activities and service",
  "Family communication",
  "Identification of student concerns",
  "Local recruitment and referrals",
  "Connections to community organizations",
];

export const sharedResponsibilities = [
  "Student safety",
  "Enrollment decisions",
  "Student orientation",
  "Family expectations",
  "Academic intervention",
  "Student discipline",
  "Staff performance",
  "Data stewardship",
  "Crisis response",
  "Program quality",
  "Financial sustainability",
  "Public communication",
  "Complaints and appeals",
  "Continuous improvement",
  "Protection of the CAN and partner identities",
];

export const configurableCapabilities = [
  "Advanced courses",
  "Additional electives",
  "College counseling",
  "Enrollment marketing",
  "Scholarship administration",
  "Activities",
  "Transportation coordination",
  "Food service",
  "Specialized student support",
  "Additional administrative services",
  "Regional programming",
  "Employer and college partnerships",
];

export const networkNonNegotiables = [
  "Student safety",
  "Academic standards",
  "Credit integrity",
  "Assessment integrity",
  "Records accuracy",
  "Data protection",
  "Staff screening",
  "Financial transparency",
  "Mission alignment",
  "Quality review",
  "Legal and regulatory obligations",
  "Appropriate corrective action",
];

export type ResponsibilityCategory =
  | "Academics"
  | "Students and families"
  | "Staff"
  | "Facilities"
  | "Technology and data"
  | "Finance"
  | "Christian formation"
  | "Communications"
  | "Safety and compliance";

export const responsibilityCategories: ResponsibilityCategory[] = [
  "Academics",
  "Students and families",
  "Staff",
  "Facilities",
  "Technology and data",
  "Finance",
  "Christian formation",
  "Communications",
  "Safety and compliance",
];

export type ResponsibilityRow = {
  id: string;
  category: ResponsibilityCategory;
  title: string;
  owner: "CAN" | "Local partner" | "Shared";
  agreementRequired: boolean;
  status: PartnershipStatus;
};

export const responsibilityMatrix: ResponsibilityRow[] = [
  { id: "r1", category: "Academics", title: "Academic standards and course sequences", owner: "CAN", agreementRequired: false, status: "Core CAN requirement" },
  { id: "r2", category: "Academics", title: "Subject-matter instruction and course ownership", owner: "CAN", agreementRequired: false, status: "Core CAN requirement" },
  { id: "r3", category: "Academics", title: "In-person study support and study habits", owner: "Local partner", agreementRequired: false, status: "Local responsibility" },
  { id: "r4", category: "Academics", title: "Academic intervention decisions", owner: "Shared", agreementRequired: true, status: "Shared responsibility" },
  { id: "r5", category: "Academics", title: "Advanced and dual-enrollment course access", owner: "Shared", agreementRequired: true, status: "Model-dependent" },
  { id: "r6", category: "Students and families", title: "Enrollment decisions", owner: "Shared", agreementRequired: true, status: "Agreement-dependent" },
  { id: "r7", category: "Students and families", title: "Daily supervision and attendance accountability", owner: "Local partner", agreementRequired: false, status: "Local responsibility" },
  { id: "r8", category: "Students and families", title: "Student discipline", owner: "Shared", agreementRequired: true, status: "Shared responsibility" },
  { id: "r9", category: "Students and families", title: "Complaints and appeals", owner: "Shared", agreementRequired: true, status: "Not yet determined" },
  { id: "r10", category: "Staff", title: "Instructor assignment and supervision", owner: "CAN", agreementRequired: true, status: "Draft framework" },
  { id: "r11", category: "Staff", title: "Local learning leader hiring and supervision", owner: "Local partner", agreementRequired: true, status: "Local responsibility" },
  { id: "r12", category: "Staff", title: "Staff screening standards", owner: "Shared", agreementRequired: true, status: "Core CAN requirement" },
  { id: "r13", category: "Staff", title: "Training and professional development", owner: "CAN", agreementRequired: false, status: "Draft framework" },
  { id: "r14", category: "Facilities", title: "Suitable, approved learning environment", owner: "Local partner", agreementRequired: true, status: "Local responsibility" },
  { id: "r15", category: "Facilities", title: "Facility approval criteria", owner: "Shared", agreementRequired: true, status: "Draft framework" },
  { id: "r16", category: "Facilities", title: "Transportation coordination", owner: "Local partner", agreementRequired: true, status: "Model-dependent" },
  { id: "r17", category: "Technology and data", title: "Learning and student-information platforms", owner: "CAN", agreementRequired: false, status: "Core CAN requirement" },
  { id: "r18", category: "Technology and data", title: "On-site technology assistance", owner: "Local partner", agreementRequired: false, status: "Local responsibility" },
  { id: "r19", category: "Technology and data", title: "Data stewardship and authorized access", owner: "Shared", agreementRequired: true, status: "Agreement-dependent" },
  { id: "r20", category: "Technology and data", title: "Records custody and transcript authority", owner: "Shared", agreementRequired: true, status: "Not yet determined" },
  { id: "r21", category: "Finance", title: "Tuition and scholarship revenue handling", owner: "Shared", agreementRequired: true, status: "Not yet determined" },
  { id: "r22", category: "Finance", title: "Facility contribution and local staffing costs", owner: "Local partner", agreementRequired: true, status: "Model-dependent" },
  { id: "r23", category: "Finance", title: "Central-service, curriculum, and technology costs", owner: "CAN", agreementRequired: true, status: "Not yet determined" },
  { id: "r24", category: "Finance", title: "Financial transparency and reporting", owner: "Shared", agreementRequired: true, status: "Core CAN requirement" },
  { id: "r25", category: "Christian formation", title: "Local theological and denominational formation", owner: "Local partner", agreementRequired: false, status: "Local responsibility" },
  { id: "r26", category: "Christian formation", title: "Shared Christian mission alignment", owner: "Shared", agreementRequired: true, status: "Core CAN requirement" },
  { id: "r27", category: "Christian formation", title: "Approved local Bible and formation programming", owner: "Local partner", agreementRequired: true, status: "Agreement-dependent" },
  { id: "r28", category: "Communications", title: "Day-to-day family communication", owner: "Local partner", agreementRequired: false, status: "Local responsibility" },
  { id: "r29", category: "Communications", title: "Public communication and brand use", owner: "Shared", agreementRequired: true, status: "Agreement-dependent" },
  { id: "r30", category: "Communications", title: "Enrollment marketing", owner: "Shared", agreementRequired: true, status: "Model-dependent" },
  { id: "r31", category: "Safety and compliance", title: "Student safety procedures", owner: "Shared", agreementRequired: true, status: "Core CAN requirement" },
  { id: "r32", category: "Safety and compliance", title: "Crisis response", owner: "Shared", agreementRequired: true, status: "Draft framework" },
  { id: "r33", category: "Safety and compliance", title: "Legal and regulatory obligations", owner: "Shared", agreementRequired: true, status: "Not yet determined" },
  { id: "r34", category: "Safety and compliance", title: "Quality review and corrective action", owner: "CAN", agreementRequired: true, status: "Core CAN requirement" },
];

/* ---------- Page 4 ---------- */

export type DeploymentModel = {
  key: string;
  n: string;
  title: string;
  description: string;
  bestSuitedFor: string[];
  partnerContributions?: string[];
  canContributions?: string[];
  identityOptions?: string[];
  networkCapabilities?: string[];
  partnerRoles?: string[];
  promise?: string;
  primaryQuestion: string;
  status: PartnershipStatus;
};

export const deploymentModels: DeploymentModel[] = [
  {
    key: "church-hosted",
    n: "01",
    title: "Church-Hosted CAN Academy",
    description:
      "A congregation hosts a CAN-branded or appropriately co-branded academy in an approved local facility.",
    bestSuitedFor: [
      "Communities with limited high-school choice",
      "Churches with suitable weekday capacity",
      "Congregations with trusted family relationships",
      "Markets capable of supporting a new student cohort",
      "Partners willing to provide daily local leadership",
    ],
    partnerContributions: [
      "Facility",
      "Local learning leaders",
      "Community trust",
      "Christian formation",
      "Student recruitment",
      "Family relationships",
      "Daily presence",
      "Local activities",
    ],
    canContributions: [
      "Academic and operating system",
      "Instruction",
      "Curriculum",
      "Technology",
      "Records",
      "Training",
      "Quality assurance",
      "Shared services",
      "Network programming",
    ],
    primaryQuestion: "Can this congregation become the trusted local home of a complete CAN Academy?",
    status: "Draft framework",
  },
  {
    key: "k8-extension",
    n: "02",
    title: "K–8 High-School Extension",
    description:
      "An existing Christian elementary or middle school extends into grades 9–12 using CAN's shared high-school program.",
    bestSuitedFor: [
      "Schools losing families after eighth grade",
      "Communities with limited Christian high-school capacity",
      "Existing operators with enrolled families",
      "Schools with scholarship and administrative experience",
      "Partners with facilities that may support secondary students",
    ],
    promise:
      "Keep serving the families you already know by adding high-school depth without independently recreating a conventional high-school faculty.",
    primaryQuestion:
      "Can CAN provide the academic breadth and secondary-school systems the existing school cannot efficiently build alone?",
    status: "Draft framework",
  },
  {
    key: "powered-micro",
    n: "03",
    title: "CAN-Powered Micro-School",
    description:
      "An existing Christian school retains its local identity while adopting an approved set of CAN academic and operating services.",
    bestSuitedFor: [
      "Independent Christian micro-schools",
      "Ministry schools with limited course breadth",
      "Schools needing stronger teachers, records, counseling, technology, or administrative systems",
      "Operators that want the reach of a network without giving up their own name",
    ],
    identityOptions: [
      "Existing school name remains primary",
      "CAN appears as an academic or platform partner",
      "What is adopted is named in the agreement",
      "Required academic, safety, data, and quality standards remain enforceable",
    ],
    primaryQuestion:
      "Can the school preserve what families value locally while gaining the strength to raise quality and stay sustainable?",
    status: "Draft framework",
  },
  {
    key: "consortium",
    n: "04",
    title: "Regional Church Consortium",
    description: "Several churches support one host site or a coordinated regional program.",
    bestSuitedFor: [
      "Rural communities",
      "Small individual congregations",
      "Wide travel areas",
      "Markets requiring transportation or referral nodes",
      "Communities where one congregation cannot provide every local resource",
    ],
    partnerRoles: [
      "Host congregation",
      "Referral congregation",
      "Transportation node",
      "Activity location",
      "Pastoral and mentoring partner",
      "Service partner",
      "Family-engagement partner",
    ],
    primaryQuestion:
      "Can several trusted churches pool their relationships and buildings around one academic program?",
    status: "Draft framework",
  },
  {
    key: "denominational",
    n: "05",
    title: "Denominational Network",
    description:
      "A denomination, jurisdiction, association, or church network adopts CAN services across multiple churches or schools.",
    bestSuitedFor: [
      "Denominations with existing educational ministries",
      "Networks seeking consistent high-school quality",
      "Churches that share trusted leadership",
      "Multi-site expansion",
      "Networks seeking common services without eliminating local ministry identity",
    ],
    networkCapabilities: [
      "Shared academics",
      "Teacher access",
      "Technology",
      "Records",
      "Training",
      "Scholarship administration",
      "College and career support",
      "Quality assurance",
      "Denominational formation resources",
      "Multi-site reporting",
    ],
    primaryQuestion:
      "Can a shared educational backbone strengthen multiple local ministries while preserving appropriate denominational and congregational distinctives?",
    status: "Draft framework",
  },
];

export type FitQuestion = {
  id: string;
  question: string;
  options: { label: string; model?: string }[];
};

export const fitQuestions: FitQuestion[] = [
  {
    id: "operates",
    question: "Do you currently operate a school?",
    options: [
      { label: "No, we are a church only", model: "church-hosted" },
      { label: "Yes, a K–8 school", model: "k8-extension" },
      { label: "Yes, a high school or micro-school", model: "powered-micro" },
    ],
  },
  {
    id: "grades",
    question: "Which grades do you serve today, and do you want to add grades 9–12?",
    options: [
      { label: "No grades yet; we want to start with 9–12", model: "church-hosted" },
      { label: "K–8 today; we want to add 9–12", model: "k8-extension" },
      { label: "We already serve some high-school grades", model: "powered-micro" },
    ],
  },
  {
    id: "churches",
    question: "Is one church involved, several churches, or a denomination?",
    options: [
      { label: "One congregation", model: "church-hosted" },
      { label: "Several congregations in a region", model: "consortium" },
      { label: "A denomination, jurisdiction, or association", model: "denominational" },
    ],
  },
  {
    id: "facility",
    question: "Do you have weekday facility capacity for classrooms and offices?",
    options: [
      { label: "Yes, substantial weekday capacity", model: "church-hosted" },
      { label: "Some capacity, shared across sites", model: "consortium" },
      { label: "We already operate a school facility", model: "k8-extension" },
    ],
  },
  {
    id: "identity",
    question: "Do you want CAN branding, co-branding, or platform support behind your name?",
    options: [
      { label: "CAN-branded academy", model: "church-hosted" },
      { label: "Co-branded with our school", model: "k8-extension" },
      { label: "Our identity stays primary; CAN powers the program", model: "powered-micro" },
    ],
  },
  {
    id: "nodes",
    question: "Do you need transportation or multiple community nodes?",
    options: [
      { label: "No, families can reach one site", model: "church-hosted" },
      { label: "Yes, students are spread across a wide area", model: "consortium" },
      { label: "Yes, across multiple member churches or schools", model: "denominational" },
    ],
  },
];

export const fitFurtherDiscovery = [
  "Do you have a potential local learning leader identified?",
  "What initial enrollment appears realistic in your community?",
  "Which parts of a high school are you missing today?",
  "What facility improvements would be required for weekday secondary use?",
  "Which governing body must approve a partnership decision?",
];

/* ---------- Page 5 ---------- */

export const commonCommitments = [
  "Christian mission alignment",
  "The authority and truth of Scripture",
  "The lordship of Jesus Christ",
  "Human dignity",
  "Moral responsibility",
  "Student safety",
  "Academic integrity",
  "Ethical leadership",
  "Service",
  "Stewardship",
  "Respectful treatment of students and families",
  "Accountability to agreed standards",
];

export const localDistinctiveExpressions = [
  "Denominational history",
  "Theological emphases",
  "Worship traditions",
  "Ministry practices",
  "Discipleship approaches",
  "Church governance traditions",
  "Service priorities",
  "Local ministry culture",
  "Community relationships",
  "Approved Bible and formation programming",
];

export const sharedAcademicIntegrity = [
  "Required academic outcomes",
  "Course-credit standards",
  "Assessment integrity",
  "Student-safety requirements",
  "Records accuracy",
  "Data-protection requirements",
  "Applicable legal obligations",
  "Approved quality standards",
  "Required staff screening",
  "Student grievance and escalation protections",
];

export const customizationAreas = [
  "Worship rhythms",
  "Chapel structure",
  "Denominational instruction",
  "Ministry participation",
  "Service priorities",
  "Local calendar additions",
  "Approved electives",
  "Mentoring",
  "Community partnerships",
  "Activities",
  "Local traditions",
  "CAN Community naming and co-branding",
];

export const consistencyAreas = [
  "Academic standards",
  "Approved courses",
  "Credit requirements",
  "Assessment expectations",
  "Safety procedures",
  "Records",
  "Data handling",
  "Staff screening",
  "Quality review",
  "Required reporting",
  "Corrective action",
  "Legal compliance",
];

export const covenant = [
  {
    n: "01",
    title: "We put students first",
    body: "Student well-being, learning, and continuity take priority over institutional convenience.",
  },
  {
    n: "02",
    title: "We communicate honestly",
    body: "Material concerns, risks, failures, and decisions are shared promptly with the people responsible for responding.",
  },
  {
    n: "03",
    title: "We respect appropriate authority",
    body: "CAN and local partners honor the decision rights established in the partnership agreement.",
  },
  {
    n: "04",
    title: "We protect local identity",
    body: "CAN does not erase the church, school, denomination, or relationships that make the local ministry meaningful.",
  },
  {
    n: "05",
    title: "We protect network integrity",
    body: "Local freedom does not make academic quality, student safety, financial integrity, or reliable records optional.",
  },
  {
    n: "06",
    title: "We use data responsibly",
    body: "Student, family, academic, staff, and financial information is handled only for authorized purposes.",
  },
  {
    n: "07",
    title: "We accept accountability",
    body: "Both parties participate in review, correction, and continuous improvement.",
  },
  {
    n: "08",
    title: "We protect families during disagreement",
    body: "Institutional conflict should not leave students without education, records, communication, or a clear path forward.",
  },
];

/* ---------- Page 6 ---------- */

export const governanceQuestions = [
  "Which entity operates the school",
  "Which entity enrolls students",
  "Which entity issues credits and transcripts",
  "Who establishes academic standards",
  "Who hires and supervises local staff",
  "Who assigns and supervises instructors",
  "Who approves admissions",
  "Who manages student discipline",
  "Who approves local Christian programming",
  "Who manages complaints and appeals",
  "Who communicates with families",
  "Who can require corrective action",
  "Who can remove a leader",
  "Who can suspend or terminate the relationship",
  "How disputes are resolved",
];

export const brandQuestions = [
  "CAN-branded, co-branded, or CAN-powered identity",
  "Use of church, school, and denominational names",
  "Public claims",
  "Marketing approval",
  "Theological representation",
  "Family-facing communications",
  "Use of marks after termination",
  "Local naming rights",
  "Representation of accreditation or approval status",
];

export const economicQuestions = [
  "Tuition and scholarship revenue",
  "Revenue collection",
  "Partner compensation",
  "Facility contribution",
  "Local staffing costs",
  "Central-service costs",
  "Curriculum and technology costs",
  "Insurance",
  "Working capital",
  "Enrollment risk",
  "Refunds",
  "Payment timing",
  "Financial reporting",
  "Audit or review rights",
  "Treatment of restricted funds",
  "Responsibility for unexpected expenses",
];

export const dataQuestions = [
  "Data ownership",
  "Authorized access",
  "Student privacy",
  "Family consent",
  "Records custody",
  "Transcript authority",
  "Data retention",
  "Data export",
  "Security incidents",
  "Correction of inaccurate records",
  "Data handling after partnership termination",
];

export const qualityExpectations = [
  "Academic standards",
  "Student safety",
  "Attendance",
  "Staff screening",
  "Staff training",
  "Data reporting",
  "Family communication",
  "Academic intervention",
  "Financial controls",
  "Quality review",
  "Corrective action",
  "Repeated non-performance",
  "Escalation",
  "Suspension",
  "Termination",
];

export const escalationSequence = [
  "Direct discussion between responsible leaders",
  "Documented corrective plan",
  "Executive review",
  "Governing-body or designated mediator review",
  "Formal cure period where appropriate",
  "Suspension or termination if unresolved",
  "Student-continuity plan",
];

export const exitRequirements = [
  "Student completion and transition",
  "Teach-out responsibilities",
  "Transcript and record custody",
  "Family communication",
  "Tuition and scholarship reconciliation",
  "Staff transition",
  "Data return, retention, or deletion",
  "Continued curriculum and technology access",
  "Brand removal",
  "Facility transition",
  "Outstanding financial obligations",
  "Referral to another educational option",
  "Protection of students already enrolled",
];

/* ---------- Page 7 ---------- */

export const readinessDimensions = [
  {
    key: "mission",
    n: "01",
    title: "Mission readiness",
    items: [
      "Christian and educational alignment",
      "Leadership commitment",
      "Governing-body support",
      "Understanding of the CAN model",
      "Willingness to accept shared standards",
      "Approach to local distinctives",
      "Long-term ministry intent",
      "Ability to place student interests ahead of institutional convenience",
    ],
  },
  {
    key: "educational",
    n: "02",
    title: "Educational readiness",
    items: [
      "Existing school, daycare, tutoring, youth, or educational experience",
      "Understanding of student and family needs",
      "Local academic-support capacity",
      "Staff-learning culture",
      "Appetite for training",
      "Ability to follow academic procedures",
      "Willingness to identify and escalate concerns",
      "Experience communicating with families",
    ],
  },
  {
    key: "facility",
    n: "03",
    title: "Facility readiness",
    items: [
      "Classrooms",
      "Offices",
      "Assembly space",
      "Parking",
      "Internet",
      "Security",
      "Accessibility",
      "Restrooms",
      "Food-service capacity",
      "Recreation",
      "Laboratory requirements",
      "Weekday availability",
      "Occupancy",
      "Fire and life safety",
      "Zoning and use",
      "Required improvements",
      "Transportation access",
    ],
    note: "Facility presence does not equal facility approval.",
  },
  {
    key: "community",
    n: "04",
    title: "Community readiness",
    items: [
      "Addressable student population",
      "Family interest",
      "Local reputation",
      "Existing youth and family relationships",
      "Referral churches",
      "Transportation needs",
      "Competing options",
      "Employer relationships",
      "College relationships",
      "Community-service opportunities",
      "Realistic enrollment at launch",
    ],
  },
  {
    key: "operating",
    n: "05",
    title: "Operating readiness",
    items: [
      "Identified local leader",
      "Daily supervision",
      "Attendance accountability",
      "Family communication",
      "Safety procedures",
      "Staff screening",
      "Technology support",
      "Administrative discipline",
      "Financial controls",
      "Crisis response",
      "Data handling",
      "Ability to participate in quality review",
    ],
  },
  {
    key: "partnership",
    n: "06",
    title: "Partnership readiness",
    items: [
      "Agreement on partnership model",
      "Agreement on identity and branding",
      "Agreement on responsibilities",
      "Agreement on decision rights",
      "Agreement on local distinctives",
      "Agreement on economics",
      "Agreement on data sharing",
      "Agreement on accountability",
      "Agreement on conflict resolution",
      "Agreement on exit and student continuity",
      "Willingness to make a long-term commitment",
    ],
  },
];

export const partnershipLifecycle = [
  {
    n: "1",
    title: "Interest",
    body: "A church, school, or network begins a conversation with CAN.",
    outputs: ["Initial partner profile", "Primary need", "Potential community", "Initial questions"],
  },
  {
    n: "2",
    title: "Alignment",
    body: "The parties test mission, vision, educational philosophy, partnership expectations, and strategic fit.",
    outputs: ["Preliminary alignment view", "Identified concerns", "Decision to continue or stop"],
  },
  {
    n: "3",
    title: "Assessment",
    body: "CAN and the prospective partner review the market, leadership, facility, community demand, local capacity, and major risks.",
    outputs: [
      "Readiness assessment",
      "Facility diligence requirements",
      "Market and family discovery needs",
      "Material gaps",
    ],
  },
  {
    n: "4",
    title: "Model selection",
    body: "The parties identify the likely partnership model and any viable alternatives.",
    outputs: ["Recommended starting model", "Local and CAN contributions", "What must be in place", "Open questions"],
  },
  {
    n: "5",
    title: "Term design",
    body: "The parties define responsibilities, governance, identity, economics, data, quality, conflict resolution, and student-continuity protections.",
    outputs: [
      "Draft partnership terms",
      "Responsibility matrix",
      "Financial framework",
      "Decision-rights framework",
    ],
  },
  {
    n: "6",
    title: "Commitment",
    body: "The appropriate CAN and partner governing bodies approve and sign the required agreements.",
    outputs: ["Approved partnership", "Named owners", "Approved model", "Conditions that must be satisfied before launch"],
  },
  {
    n: "7",
    title: "Handoff to launch",
    body: "The committed partnership enters the CAN Launch Approach.",
    outputs: ["Launch owner", "Readiness plan", "Workstreams", "Target milestones", "Launch decision gates"],
  },
];

export const readinessOutcomes = [
  {
    title: "Not aligned",
    body: "The relationship should not proceed in its current form.",
  },
  {
    title: "Continue discovery",
    body: "The opportunity may be promising, but material information remains incomplete.",
  },
  {
    title: "Conditional fit",
    body: "The parties appear aligned if specific leadership, facility, demand, financial, or governance conditions are resolved.",
  },
  {
    title: "Ready for term design",
    body: "The opportunity has enough evidence to begin structuring a proposed partnership.",
  },
];

export const readinessSummaryFields: { label: string; value: string; status?: PartnershipStatus }[] = [
  { label: "Organization", value: "Not yet determined" },
  { label: "Partner type", value: "Not yet determined" },
  { label: "Community", value: "Not yet determined" },
  { label: "Likely partnership model", value: "Not yet determined" },
  { label: "Current lifecycle stage", value: "Interest", status: "Exploratory" },
  { label: "Mission readiness", value: "Not yet assessed", status: "Not yet determined" },
  { label: "Educational readiness", value: "Not yet assessed", status: "Not yet determined" },
  { label: "Facility readiness", value: "Not yet assessed", status: "Not yet determined" },
  { label: "Community readiness", value: "Not yet assessed", status: "Not yet determined" },
  { label: "Operating readiness", value: "Not yet assessed", status: "Not yet determined" },
  { label: "Partnership readiness", value: "Not yet assessed", status: "Not yet determined" },
  { label: "Critical gaps", value: "To be identified during assessment" },
  { label: "Required diligence", value: "Leadership, facility, demand, economics, governance" },
  { label: "Decision owner", value: "Not yet determined" },
  { label: "Next review", value: "Not yet scheduled" },
  { label: "Current status", value: "Exploratory", status: "Exploratory" },
];
