export type EvidenceBlock =
  | {
      t: "section";
      h2: string;
      body?: string[];
      bullets?: string[];
      after?: string[];
    }
  | { t: "note"; label: string; body?: string[]; bullets?: string[] }
  | { t: "pull"; text: string }
  | { t: "cards"; label: string; items: { title: string; body: string; cta: string; to: string }[] }
  | { t: "sources"; items: { label: string; href?: string }[] }
  | { t: "funnel"; label: string; stages: string[] }
  | { t: "closing"; text: string };

export type EvidencePage = {
  to: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string[];
  description: string;
  blocks: EvidenceBlock[];
};

export const evidenceSteps = [
  { to: "/evidence", label: "Evidence Library" },
  { to: "/evidence/market-research", label: "Market Research" },
  { to: "/evidence/education-choice", label: "Education Choice" },
  { to: "/evidence/academic-model", label: "Academic Model" },
  { to: "/evidence/christian-education", label: "Christian Education" },
  { to: "/evidence/alternative-education", label: "Alternative Education" },
  { to: "/evidence/can-research", label: "CAN Research" },
] as const;

export const evidenceFooter = {
  h2: "How to read this evidence",
  intro: "CAN distinguishes among three kinds of information:",
  kinds: [
    { name: "Evidence", text: "Data or research from an external source." },
    { name: "Interpretation", text: "What that evidence may suggest for the CAN model." },
    { name: "Open question", text: "Something CAN still needs to test or validate." },
  ],
  closing: ["Research can make a hypothesis more credible.", "Only execution can prove the model."],
  cta: { to: "/evidence", label: "Return to the Evidence Library" },
};

const index: EvidencePage = {
  to: "/evidence",
  label: "Evidence Library",
  eyebrow: "Evidence Library",
  title: "The ideas behind CAN should be testable.",
  description:
    "The research informing the CAN model — and a clear line between where the evidence ends and CAN's assumptions begin.",
  intro: [
    "CAN Academy is being built around a set of hypotheses about Christian education, school choice, local communities, small schools, shared instruction, and network economics.",
    "Some of those hypotheses are strongly supported by existing data. Others still need to be tested in real communities.",
    "This library brings together the research informing the model and makes clear where the evidence ends and CAN's assumptions begin.",
  ],
  blocks: [
    {
      t: "section",
      h2: "What we are trying to understand",
      body: ["The CAN model depends on several questions:"],
      bullets: [
        "Are families actively choosing alternatives to conventional public education?",
        "Can education-choice funding materially expand access to Christian schools?",
        "Are there communities with enough student demand but too little local high-school capacity?",
        "Can small local learning environments provide strong relationships without limiting academic opportunity?",
        "Can teachers and specialized services be shared effectively across multiple communities?",
        "Can existing churches and Christian schools provide a stronger foundation than building new campuses from scratch?",
        "Can a network model make a complete high-school experience viable at smaller local enrollment levels?",
      ],
      after: [
        "The evidence does not answer every question. It helps CAN know which questions are worth testing.",
      ],
    },
    {
      t: "cards",
      label: "Explore the evidence",
      items: [
        {
          title: "Market Research",
          body: "Where are the students, schools, churches, and access gaps that could make CAN relevant?",
          cta: "Explore Market Research",
          to: "/evidence/market-research",
        },
        {
          title: "Education Choice",
          body: "How are scholarships and education savings accounts changing what families can afford and choose?",
          cta: "Explore Education Choice",
          to: "/evidence/education-choice",
        },
        {
          title: "Academic Model",
          body: "What does research suggest about teacher relationships, blended instruction, small learning communities, and shared academic resources?",
          cta: "Explore the Academic Model",
          to: "/evidence/academic-model",
        },
        {
          title: "Christian Education",
          body: "What does the existing private and religious-school landscape tell us about demand, scale, and opportunity?",
          cta: "Explore Christian Education",
          to: "/evidence/christian-education",
        },
        {
          title: "Homeschool & Alternative Education",
          body: "What can growing homeschool, hybrid, and personalized-learning models tell us about changing family preferences?",
          cta: "Explore Alternative Education",
          to: "/evidence/alternative-education",
        },
        {
          title: "CAN Research",
          body: "How is CAN turning public data into specific market, partner, and launch hypotheses?",
          cta: "Explore CAN Research",
          to: "/evidence/can-research",
        },
      ],
    },
    {
      t: "section",
      h2: "Evidence is not the same as proof.",
      bullets: [
        "A promising market is not automatically a viable CAN Community.",
        "Scholarship eligibility does not guarantee enrollment.",
        "Church presence does not guarantee partner readiness.",
        "A strong academic concept does not guarantee strong execution.",
      ],
      after: [
        "CAN uses research to identify where to investigate further. Final decisions should be based on verified local demand, qualified partners, academic readiness, regulatory requirements, and sustainable economics.",
      ],
    },
    { t: "closing", text: "Research narrows the questions. Real communities provide the answers." },
  ],
};

const marketResearch: EvidencePage = {
  to: "/evidence/market-research",
  label: "Market Research",
  eyebrow: "Evidence Library / Market Research",
  title: "The opportunity is not evenly distributed.",
  description:
    "Where families need more options, Christian high-school access is limited, and a smaller distributed model could work.",
  intro: [
    "CAN is not looking simply for places with lots of students. The more important question is where several conditions overlap:",
  ],
  blocks: [
    {
      t: "section",
      h2: "Where the conditions overlap",
      bullets: [
        "families need more educational options",
        "Christian high-school access is limited",
        "existing churches or schools could support a local community",
        "education funding can follow families",
        "geography makes a smaller distributed model useful",
        "enough students exist within a realistic travel area",
      ],
      after: ["That combination can create an opportunity that statewide averages miss."],
    },
    {
      t: "section",
      h2: "Florida already has a large nonpublic education market.",
      body: [
        "Florida reported 496,519 students enrolled in 3,252 private schools in 2024–25.",
        "A decade earlier, in 2015–16, private-school enrollment was 345,796 students across 2,540 schools.",
        "That is an increase of more than 150,000 students over nine school years.",
      ],
    },
    {
      t: "note",
      label: "What it suggests for CAN",
      body: [
        "Families are already demonstrating significant willingness to choose education outside district-operated schools. CAN does not need to create the idea of private-school choice.",
        "The more specific opportunity is to determine where demand exists but current supply, geography, price, or high-school capacity leaves families underserved.",
      ],
    },
    {
      t: "section",
      h2: "Statewide supply can hide local scarcity.",
      body: [
        "Florida has thousands of private schools statewide, but those schools are not distributed evenly by geography, grade level, size, denomination, tuition, or academic offering.",
        "A county can technically have private schools and still have very limited access to a complete Christian high school.",
        "For CAN, the relevant unit of analysis is therefore not simply: Does this county have private schools?",
      ],
    },
    {
      t: "pull",
      text: "What realistic options does a ninth-grade family actually have within a reasonable drive?",
    },
    {
      t: "section",
      h2: "Rural geography matters.",
      body: [
        "Florida officially identifies several Rural Areas of Opportunity because of persistent economic distress or other structural challenges.",
        "The state's designated rural areas include counties already under consideration by CAN, including DeSoto, Okeechobee, Gadsden, Holmes, and Hamilton.",
        "These designations do not prove educational demand. They do reinforce why conventional campus economics and long travel distances may be especially important in these markets.",
      ],
    },
    {
      t: "note",
      label: "What it suggests for CAN",
      body: [
        "A distributed model may have the greatest relative value where students are too geographically dispersed to support a large conventional Christian high school but sufficiently concentrated to support several smaller communities.",
      ],
    },
    {
      t: "section",
      h2: "CAN should evaluate travel areas, not county boundaries.",
      body: [
        "Families do not choose schools based on county borders. They choose based on actual travel time, work schedules, transportation, church relationships, sibling needs, and available alternatives.",
        "CAN market research should therefore move from county-level screening toward realistic travel areas around potential partners.",
        "A CAN market assessment should consider:",
      ],
      bullets: [
        "high-school-age population",
        "drive time",
        "existing public schools",
        "charter schools",
        "private and Christian schools",
        "homeschool participation",
        "scholarship participation",
        "churches and Christian schools",
        "household economics",
        "likely partner locations",
        "transportation constraints",
      ],
    },
    {
      t: "section",
      h2: "What the evidence does not tell us",
      body: ["Public data can identify promising markets. It cannot tell CAN:"],
      bullets: [
        "how many families would actually enroll",
        "whether families trust a particular partner",
        "whether a church wants to host a school",
        "whether the facility is appropriate",
        "whether the local student mix supports the proposed program",
        "whether launch economics work at the initial enrollment level",
      ],
      after: ["Those questions require local validation."],
    },
    {
      t: "closing",
      text: "Market research identifies where CAN should look. It does not decide where CAN should launch.",
    },
    {
      t: "sources",
      items: [
        { label: "Florida Department of Education — Private School Annual Report, 2024–25", href: "https://www.fldoe.org/schools/school-choice/private-schools/" },
        { label: "Florida Department of Education — Public School and District Data", href: "https://www.fldoe.org/accountability/data-sys/" },
        { label: "Florida Department of Education — School Accountability Reports", href: "https://www.fldoe.org/accountability/accountability-reporting/" },
        { label: "Florida Department of Education — Rural Areas of Opportunity", href: "https://www.fldoe.org/" },
        { label: "U.S. Census Bureau — Population and household data", href: "https://www.census.gov/" },
        { label: "National Center for Education Statistics — School and enrollment data", href: "https://nces.ed.gov/" },
      ],
    },
  ],
};

const educationChoice: EvidencePage = {
  to: "/evidence/education-choice",
  label: "Education Choice",
  eyebrow: "Evidence Library / Education Choice",
  title: "Florida has changed the affordability equation.",
  description:
    "How Florida scholarships and education savings accounts change what families can afford — and what CAN still has to verify.",
  intro: [
    "For decades, private education primarily depended on a family's ability to pay tuition directly.",
    "Florida's education-choice system changes that equation by allowing public scholarship funding to follow eligible students into approved educational settings.",
    "That does not make every private school free. It does make affordability a fundamentally different question than it was a decade ago.",
  ],
  blocks: [
    {
      t: "section",
      h2: "Private-school scholarships are broadly available.",
      body: [
        "Since 2023, Florida students eligible to enroll in public school in grades K–12 have been eligible for the Florida Tax Credit Scholarship or Family Empowerment Scholarship for Educational Options regardless of household income.",
        "Step Up For Students currently describes the average private-school scholarship as approximately $8,000 for tuition and related expenses. Actual scholarship amounts vary.",
      ],
    },
    {
      t: "note",
      label: "What it changes",
      body: [
        "The relevant family question is no longer simply: Can we afford private-school tuition?",
        "It increasingly becomes: What does this school cost after the education funding available to our student is applied?",
      ],
    },
    {
      t: "section",
      h2: "Scholarship funding can be used at eligible private schools.",
      body: [
        "Florida's FTC, FES-EO, and FES-UA programs can be used for tuition and fees at eligible participating private schools, subject to each program's rules and requirements.",
        "For CAN, that creates the possibility of designing a school whose tuition model is aligned with available scholarship funding rather than conventional private-school pricing.",
      ],
    },
    {
      t: "note",
      label: "Important distinction",
      body: ["Possible does not mean automatic. CAN must still validate:"],
      bullets: [
        "school eligibility",
        "scholarship participation requirements",
        "student eligibility",
        "award amounts",
        "allowable expenses",
        "payment timing",
        "local operating costs",
        "any remaining family expenses",
      ],
    },
    {
      t: "section",
      h2: "Florida also supports personalized education outside full-time private school.",
      body: [
        "Florida's Personalized Education Program, or PEP, provides an education savings account for eligible students who are not enrolled full time in a public or private school.",
        "Approved funds can be used for eligible educational expenses such as instructional programs, online learning, tutoring, postsecondary expenses, and other approved services and materials.",
      ],
    },
    {
      t: "note",
      label: "What it suggests for CAN",
      body: ["Florida supports more than one educational pathway. That may eventually create opportunities for CAN to serve:"],
      bullets: [
        "full-time private-school students",
        "homeschool or personalized-education families",
        "existing Christian schools",
        "other alternative education arrangements",
      ],
    },
    {
      t: "section",
      h2: "Choice funding is substantial, but it is not the business model by itself.",
      body: [
        "Florida reported more than 500,000 students participating in state school-choice scholarship programs during the 2024–25 school year.",
        "That demonstrates meaningful scale. It does not mean that any new school is financially viable.",
        "CAN still has to answer:",
      ],
      bullets: [
        "How much funding is actually available per student?",
        "What costs remain outside allowable scholarship expenses?",
        "How many students are required at launch?",
        "What does the local partner contribute?",
        "Which expenses can be shared across the network?",
        "What happens if funding rules change?",
      ],
    },
    {
      t: "section",
      h2: "What the evidence supports",
      body: [
        "Florida's policy environment supports the core CAN hypothesis that education funding can materially reduce the tuition barrier for many families.",
        "It does not support an unconditional promise of free tuition.",
      ],
    },
    {
      t: "note",
      label: "CAN's public position",
      body: [
        "Where education-choice funding is available, CAN aims to use those resources to reduce or eliminate out-of-pocket tuition for eligible families wherever possible.",
        "That claim should remain qualified until the economics of a specific CAN Community are verified.",
      ],
    },
    {
      t: "sources",
      items: [
        { label: "Florida Department of Education — K–12 Scholarship Programs", href: "https://www.fldoe.org/schools/school-choice/k-12-scholarship-programs/" },
        { label: "Step Up For Students — 2026–27 Private School Family Handbook", href: "https://www.stepupforstudents.org/" },
        { label: "Step Up For Students — Private School Scholarship", href: "https://www.stepupforstudents.org/" },
        { label: "Step Up For Students — Personalized Education Program Handbook", href: "https://www.stepupforstudents.org/" },
        { label: "Step Up For Students — Private School Provider Handbook", href: "https://www.stepupforstudents.org/" },
        { label: "Florida Statutes and Florida Department of Education scholarship requirements" },
      ],
    },
  ],
};

const academicModel: EvidencePage = {
  to: "/evidence/academic-model",
  label: "Academic Model",
  eyebrow: "Evidence Library / Academic Model",
  title: "Technology can extend a school. It cannot replace one.",
  description:
    "What research suggests about blended instruction, teacher relationships, small schools, and shared academic resources.",
  intro: [
    "CAN's academic hypothesis is not that students learn best by sitting alone in front of a screen.",
    "It is that some teaching and specialized academic resources can be shared across multiple communities while students remain surrounded by real peers, real adults, and a structured local school environment.",
    "That distinction matters.",
  ],
  blocks: [
    {
      t: "section",
      h2: "Blended learning is not one model.",
      body: [
        "Research on K–12 blended learning covers many different approaches.",
        "The Institute of Education Sciences has reviewed programs that combine online and face-to-face learning and found that outcomes vary significantly by program design. Some rigorous studies have found positive effects for particular blended programs, while the evidence does not support treating “blended learning” itself as a guarantee of better outcomes.",
      ],
    },
    {
      t: "note",
      label: "What it means for CAN",
      body: [
        "CAN should not make the claim: Technology improves learning.",
        "The stronger claim is: Technology can make strong teachers, courses, and resources available across distance when the instructional model is designed well.",
      ],
    },
    {
      t: "section",
      h2: "The teacher remains central.",
      body: ["CAN's network model should use technology primarily to solve problems of access and scale:"],
      bullets: [
        "connecting students to subject specialists",
        "making low-enrollment courses viable",
        "sharing electives and advanced courses",
        "supporting assessment and feedback",
        "coordinating academic records",
        "providing tutoring and academic support",
        "connecting students across communities",
      ],
      after: [
        "Technology should not become a substitute for teacher judgment, student relationships, or local adult presence.",
      ],
    },
    { t: "pull", text: "CAN does not replace teachers with technology." },
    {
      t: "section",
      h2: "Local relationships are part of the academic model.",
      body: [
        "Students need more than content delivery. They need adults who notice when they are confused, disengaged, overwhelmed, bored, or ready for greater challenge.",
        "That is one reason CAN separates shared instruction from local support.",
        "A network teacher may lead a course across several communities. A local adult still knows the student in the room.",
      ],
    },
    {
      t: "section",
      h2: "Small does not automatically mean better.",
      body: [
        "CAN should also avoid romanticizing small schools. A small school can offer close relationships and personal attention. It can also struggle with:",
      ],
      bullets: [
        "course breadth",
        "teacher specialization",
        "clubs and activities",
        "counseling capacity",
        "peer variety",
        "advanced coursework",
      ],
      after: [
        "The CAN hypothesis is that a network can preserve the relational advantages of a smaller environment while reducing some of its structural limitations.",
        "That hypothesis needs to be tested through student outcomes and experience, not assumed.",
      ],
    },
    {
      t: "section",
      h2: "What CAN should measure",
      body: [
        "Academic quality should eventually be evaluated through more than enrollment and satisfaction. CAN should track measures such as:",
      ],
      bullets: [
        "course completion",
        "student growth",
        "mastery",
        "attendance",
        "persistence",
        "graduation",
        "college and career readiness",
        "advanced-course participation",
        "student belonging",
        "academic support needs",
        "postsecondary outcomes",
      ],
      after: ["The exact measurement framework remains part of the academic design work."],
    },
    {
      t: "sources",
      items: [
        { label: "Institute of Education Sciences — Research on Online and Blended Learning Programs", href: "https://ies.ed.gov/" },
        { label: "National Center for Education Statistics", href: "https://nces.ed.gov/" },
        { label: "Florida Department of Education — Course, assessment, graduation, and accountability data", href: "https://www.fldoe.org/accountability/" },
        { label: "Additional peer-reviewed research on student belonging, teacher relationships, small schools, and blended instruction as the academic model is finalized" },
      ],
    },
    {
      t: "closing",
      text: "The CAN academic model should be judged by what students learn, who knows them, and what they are able to do next.",
    },
  ],
};

const christianEducation: EvidencePage = {
  to: "/evidence/christian-education",
  label: "Christian Education",
  eyebrow: "Evidence Library / Christian Education",
  title: "Christian education is already a large market. Access is still uneven.",
  description:
    "What the existing private and religious-school landscape tells us about demand, scale, and where a network adds value.",
  intro: [
    "CAN is not built on the assumption that families must first be persuaded to value private or religious education.",
    "Millions of American students already attend private schools, and religious schools represent a substantial share of that market.",
    "The opportunity for CAN is more specific: Can Christian high school become viable in places where conventional private-school models struggle to reach?",
  ],
  blocks: [
    {
      t: "section",
      h2: "Religious education remains a major part of private schooling.",
      body: [
        "The National Center for Education Statistics' Private School Universe Survey tracks private schools by grade level, school size, religious orientation, geography, and other characteristics.",
        "Its 2023–24 national survey confirms that private education remains a significant and diverse part of the U.S. K–12 landscape, including large numbers of religiously affiliated schools.",
        "Historical NCES data also show that religious schools account for a majority of private-school enrollment nationally.",
      ],
    },
    {
      t: "note",
      label: "What it suggests for CAN",
      body: [
        "Christian education is not a niche preference CAN needs to create.",
        "The question is whether today's school models reach all of the families who might choose it.",
      ],
    },
    {
      t: "section",
      h2: "High school is structurally harder for small schools.",
      body: [
        "Secondary education typically requires more specialization than elementary education. A high school may need:",
      ],
      bullets: [
        "multiple levels of mathematics",
        "laboratory sciences",
        "specialized humanities instruction",
        "foreign language",
        "electives",
        "academic advising",
        "graduation tracking",
        "college and career planning",
        "extracurricular opportunities",
      ],
      after: ["Those requirements can create a difficult economic threshold for smaller Christian schools."],
    },
    {
      t: "pull",
      text: "A network can lower that threshold by sharing some of those capabilities across multiple communities.",
    },
    {
      t: "section",
      h2: "Existing schools may be part of the opportunity.",
      body: [
        "CAN does not have to enter every community through a new church-hosted school. An existing K–8 Christian school may already possess:",
      ],
      bullets: ["families", "leadership", "culture", "classrooms", "teachers", "community trust"],
      after: [
        "Its challenge may simply be extending into high school. That creates a different CAN proposition: keep serving the students you already know without recreating an entire high school independently.",
      ],
    },
    {
      t: "section",
      h2: "Growth does not prove fit.",
      body: [
        "Increasing private-school enrollment does not automatically mean families want CAN.",
        "Christian schools vary widely in theology, culture, academic expectations, tuition, size, and community. CAN will need to establish its own value proposition and earn trust locally.",
      ],
    },
    {
      t: "note",
      label: "Questions that still matter",
      bullets: [
        "What do Christian-school families value most?",
        "Why do families leave after eighth grade?",
        "What prevents K–8 schools from adding high school?",
        "Which capabilities would existing schools actually want to share?",
        "How much local identity must remain independent?",
        "What would make a network partnership attractive rather than threatening?",
      ],
      body: [],
    },
    {
      t: "section",
      h2: "Where the answers come from",
      body: [
        "These are partner and family research questions, not questions that national enrollment data can answer.",
      ],
    },
    {
      t: "sources",
      items: [
        { label: "National Center for Education Statistics — Private School Universe Survey, 2023–24", href: "https://nces.ed.gov/surveys/pss/" },
        { label: "NCES Digest of Education Statistics — Private-school enrollment by religious orientation", href: "https://nces.ed.gov/programs/digest/" },
        { label: "Florida Department of Education — Private School Annual Reports", href: "https://www.fldoe.org/schools/school-choice/private-schools/" },
        { label: "CAN Academy partner and market research" },
      ],
    },
    {
      t: "closing",
      text: "The evidence establishes a large existing Christian-school ecosystem. CAN still has to prove where a network adds value to it.",
    },
  ],
};

const alternativeEducation: EvidencePage = {
  to: "/evidence/alternative-education",
  label: "Alternative Education",
  eyebrow: "Evidence Library / Homeschool & Alternative Education",
  title: "Families are increasingly comfortable building education differently.",
  description:
    "What growing homeschool, hybrid, and personalized-learning models suggest about changing family preferences.",
  intro: [
    "Homeschooling, hybrid programs, microschools, education savings accounts, online courses, tutoring, and other flexible models have expanded the range of ways families think about school.",
    "CAN should not assume every family wants a conventional five-day campus model.",
    "It should also not assume that families choosing alternatives want less structure, fewer teachers, or lower academic expectations.",
  ],
  blocks: [
    {
      t: "section",
      h2: "Florida has a substantial homeschool population.",
      body: [
        "The Florida Department of Education reported 152,871 students from 114,370 families participating in home education during the 2024–25 school year.",
        "Florida defines home education as parent-directed instruction and recognizes it as a legal means of satisfying school-attendance requirements. Home-educated students can pursue higher education and may qualify for programs including Bright Futures.",
      ],
    },
    {
      t: "note",
      label: "What it suggests for CAN",
      body: [
        "A large population of families already accepts the idea that education does not have to be organized around a conventional school campus.",
        "That does not mean those families want CAN. It means CAN should understand them as a distinct audience rather than treating them as conventional private-school prospects.",
      ],
    },
    {
      t: "section",
      h2: "Florida has created a funded personalized-education pathway.",
      body: [
        "The state's Personalized Education Program allows participating families who are not enrolled full time in public or private school to use an education savings account for approved educational expenses.",
        "That creates an ecosystem where families may combine multiple educational resources rather than purchasing one complete school experience.",
      ],
    },
    {
      t: "note",
      label: "What it could mean for CAN",
      body: [
        "Long term, CAN may have opportunities beyond a single full-time enrollment model. For example, families may value access to:",
      ],
      bullets: [
        "individual courses",
        "laboratories",
        "tutoring",
        "student clubs",
        "network activities",
        "counseling",
        "college planning",
        "local study groups",
      ],
    },
    {
      t: "section",
      h2: "Homeschool families should not be treated as dissatisfied school families.",
      body: ["Many families homeschool intentionally because they value:"],
      bullets: [
        "parental involvement",
        "flexibility",
        "individualized pacing",
        "family time",
        "faith integration",
        "smaller social environments",
        "freedom to choose curriculum and experiences",
      ],
      after: [
        "A CAN proposition to these families should not begin with what homeschooling is missing. It should begin with what might become useful as students enter high school.",
      ],
    },
    {
      t: "section",
      h2: "High school may create different demands.",
      body: ["Some families may want additional support as students get older:"],
      bullets: [
        "specialized teachers",
        "advanced mathematics",
        "laboratory sciences",
        "foreign language",
        "electives",
        "transcripts",
        "graduation planning",
        "college advising",
        "clubs",
        "broader peer communities",
      ],
      after: [
        "The CAN hypothesis is that a network can make those resources available without requiring every family to choose a conventional large-school experience.",
      ],
    },
    {
      t: "section",
      h2: "What still needs to be learned",
      body: [
        "CAN should research homeschool and hybrid families separately from conventional school families. Key questions include:",
      ],
      bullets: [
        "Would families want full-time enrollment or selected services?",
        "Which parts of the homeschool experience are non-negotiable?",
        "How much schedule flexibility matters?",
        "How important is parental control over curriculum?",
        "What social opportunities are most valuable?",
        "Would families use a physical CAN Community?",
        "Which network services would they pay for or apply scholarship funds toward?",
      ],
    },
    {
      t: "closing",
      text: "Alternative education is not one market. CAN should listen before deciding what role it can play.",
    },
    {
      t: "sources",
      items: [
        { label: "Florida Department of Education — Home Education Program, 2024–25", href: "https://www.fldoe.org/schools/school-choice/home-edu/" },
        { label: "Florida Department of Education — Home Education resources", href: "https://www.fldoe.org/schools/school-choice/home-edu/" },
        { label: "Step Up For Students — Personalized Education Program", href: "https://www.stepupforstudents.org/for-parents/personalized-education-program/" },
        { label: "Florida scholarship program rules and handbooks" },
        { label: "Future CAN family research" },
      ],
    },
  ],
};

const canResearch: EvidencePage = {
  to: "/evidence/can-research",
  label: "CAN Research",
  eyebrow: "Evidence Library / CAN Research",
  title: "CAN is moving from statewide opportunity to local proof.",
  description:
    "How CAN turns public data into specific market, partner, and launch hypotheses — and what must be validated before launch.",
  intro: [
    "Public research can establish that the broader conditions for CAN exist. It cannot identify a launch-ready community on its own.",
    "CAN's internal research is therefore designed to move through progressively more specific levels of evidence.",
  ],
  blocks: [
    {
      t: "funnel",
      label: "The research funnel",
      stages: [
        "State",
        "Market",
        "Travel area",
        "Partner",
        "Family",
        "Economics",
        "Readiness",
      ],
    },
    {
      t: "section",
      h2: "State opportunity",
      body: [
        "The first question is whether a state creates a plausible environment for the CAN model. CAN evaluates factors such as:",
      ],
      bullets: [
        "education-choice policy",
        "scholarship funding",
        "private-school regulation",
        "homeschool and alternative-education rules",
        "student demographics",
        "private-school participation",
        "church networks",
        "rural and small-market geography",
      ],
      after: [
        "Florida currently provides a particularly strong environment for this first stage of research.",
      ],
    },
    {
      t: "section",
      h2: "Market screening",
      body: [
        "The next step is to identify communities where CAN might solve a meaningful problem. Market screening considers:",
      ],
      bullets: [
        "high-school-age population",
        "public-school landscape",
        "private and Christian-school supply",
        "tuition",
        "school distance",
        "household economics",
        "scholarship environment",
        "homeschool participation",
        "church presence",
        "likely travel patterns",
      ],
      after: [
        "The goal is not to rank communities from best to worst. It is to identify places worth investigating more closely.",
      ],
    },
    {
      t: "section",
      h2: "Realistic travel areas",
      body: [
        "County-level statistics are useful for screening but insufficient for school planning. CAN should evaluate actual travel areas around prospective partners.",
        "A family may cross a county line for school. Another family may consider a 25-minute drive too far. Real geography matters more than administrative boundaries.",
        "CAN should map:",
      ],
      bullets: [
        "student population",
        "existing schools",
        "major roads",
        "travel times",
        "churches",
        "partner facilities",
        "population centers",
        "neighboring communities",
      ],
    },
    {
      t: "section",
      h2: "Partner validation",
      body: [
        "A promising market becomes much more meaningful when a credible local partner exists. CAN should evaluate:",
      ],
      bullets: [
        "mission alignment",
        "leadership commitment",
        "community trust",
        "facilities",
        "student supervision capacity",
        "local relationships",
        "governance expectations",
        "willingness to recruit families",
        "financial responsibilities",
        "long-term fit",
      ],
    },
    {
      t: "note",
      label: "Principle",
      body: [
        "Church presence is evidence of opportunity. Partner readiness is evidence of feasibility.",
        "They are not the same thing.",
      ],
    },
    {
      t: "section",
      h2: "Family demand",
      body: [
        "No market should move toward launch based only on demographic modeling. CAN needs direct evidence from families. That can include:",
      ],
      bullets: [
        "interest surveys",
        "parent interviews",
        "information sessions",
        "deposits or other credible intent signals where appropriate",
        "grade-level demand",
        "current school type",
        "willingness to travel",
        "scholarship eligibility",
        "desired programs",
        "concerns and objections",
      ],
      after: [
        "The objective is to move from “there should be demand here” to “these specific families are seriously considering enrollment.”",
      ],
    },
    {
      t: "section",
      h2: "Launch economics",
      body: [
        "A CAN Community must work at its realistic opening size, not only at eventual scale. Before launch, CAN should understand:",
      ],
      bullets: [
        "expected enrollment",
        "scholarship revenue",
        "tuition or fees",
        "local staffing",
        "facilities",
        "insurance",
        "technology",
        "shared network costs",
        "student services",
        "transportation assumptions",
        "contingency requirements",
      ],
      after: [
        "A model that works beautifully at 100 students but loses unsustainable amounts of money at 25 students is not yet a launch model.",
      ],
    },
    {
      t: "section",
      h2: "Academic and regulatory readiness",
      body: [
        "Market demand and partner enthusiasm cannot substitute for school readiness. Before opening, CAN must establish the requirements for:",
      ],
      bullets: [
        "legal school status",
        "scholarship participation",
        "curriculum",
        "teachers",
        "graduation requirements",
        "student records",
        "assessment",
        "safeguarding",
        "accommodations",
        "data systems",
        "policies",
        "college and career advising",
      ],
    },
    {
      t: "section",
      h2: "Research status",
      body: [
        "CAN's Florida work is currently intended to identify promising communities and potential partners.",
        "No community should be described as a confirmed CAN launch site until the relevant market, partner, academic, regulatory, and economic conditions have been validated.",
        "That is not hesitation. It is the purpose of the research process.",
      ],
    },
    {
      t: "section",
      h2: "What CAN will publish here",
      body: ["As the work develops, this section can include:"],
      bullets: [
        "Florida market studies",
        "county and travel-area maps",
        "school-access analyses",
        "partner-readiness frameworks",
        "family demand findings",
        "economic scenarios",
        "academic assumptions",
        "launch criteria",
        "research updates",
      ],
      after: [
        "Sensitive partner information and personally identifiable family information should not be published.",
      ],
    },
    { t: "closing", text: "The goal is not to prove CAN right. It is to find out where CAN can work." },
  ],
};

export const evidencePages: Record<string, EvidencePage> = {
  "/evidence": index,
  "/evidence/market-research": marketResearch,
  "/evidence/education-choice": educationChoice,
  "/evidence/academic-model": academicModel,
  "/evidence/christian-education": christianEducation,
  "/evidence/alternative-education": alternativeEducation,
  "/evidence/can-research": canResearch,
};
