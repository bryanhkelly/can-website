export type AcademicStatus =
  | "Core academic promise"
  | "Core academic requirement"
  | "Proposed"
  | "Under academic review"
  | "Under review"
  | "Approved"
  | "Advanced option"
  | "Partner-delivered"
  | "Dual-enrollment option"
  | "Network-wide"
  | "Available at selected locations"
  | "Varies by location"
  | "Depends on local partnerships"
  | "Requires approval"
  | "Not yet determined";

export const academicsSteps = [
  { to: "/academics", label: "Academics" },
  { to: "/academics/how-learning-works", label: "How Learning Works" },
  { to: "/academics/courses-and-graduation", label: "Courses and Graduation" },
  { to: "/academics/teachers-and-support", label: "Teachers and Support" },
  { to: "/academics/progress-and-mastery", label: "Progress and Mastery" },
  { to: "/academics/pathways", label: "Pathways" },
  { to: "/academics/academic-credibility", label: "Academic Credibility" },
] as const;

export type AcademicsCrossKey =
  | "studentExperience"
  | "christianFormation"
  | "teacherModel"
  | "contentProduction"
  | "collegeCareer"
  | "technology"
  | "legal"
  | "partnership"
  | "launch"
  | "economics";

export const academicsCrossLinks: Record<AcademicsCrossKey, { label: string; to: string; note: string; available?: boolean }> = {
  studentExperience: {
    label: "Student Experience",
    to: "/student-experience",
    note: "See how academics fit into a student's daily experience, relationships, and support.",
  },
  christianFormation: {
    label: "Christian Formation",
    to: "/student-experience/faith-and-formation",
    note: "Explore how faith, formation, and local church identity shape the student experience.",
  },
  teacherModel: {
    label: "Teacher Model",
    to: "/explore",
    note: "Teachers and teaching roles.",
    available: false,
  },
  contentProduction: {
    label: "Content Production",
    to: "/explore",
    note: "Curriculum and media production workflow.",
    available: false,
  },
  collegeCareer: {
    label: "College and Career Preparation",
    to: "/explore",
    note: "Postsecondary advising curriculum.",
    available: false,
  },
  technology: {
    label: "Technology",
    to: "/explore",
    note: "Platform architecture and system interfaces.",
    available: false,
  },
  legal: {
    label: "Legal and Compliance",
    to: "/explore",
    note: "Accreditation, transcript authority, and regulatory requirements.",
    available: false,
  },
  partnership: {
    label: "Partnership Model",
    to: "/explore",
    note: "Partner responsibilities and agreements.",
    available: false,
  },
  launch: {
    label: "Launch Approach",
    to: "/launch-approach",
    note: "See how CAN prepares a community to open well.",
  },
  economics: {
    label: "Economics",
    to: "/economic-breakthrough",
    note: "Explore affordability, local economics, and network scale.",
  },
};

/* Page 1 --------------------------------------------------------------- */

export const academicPromises: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Complete",
    body: "Students have a coherent path from ninth grade through graduation across English, mathematics, science, social studies, Christian studies, wellness, fine arts, electives, and college and career preparation.",
  },
  {
    n: "02",
    title: "Credible",
    body: "Courses have defined standards, learning outcomes, assessments, credit requirements, academic ownership, and records that colleges, scholarship organizations, employers, the military, and other schools can understand.",
  },
  {
    n: "03",
    title: "Relational",
    body: "Students interact with instructors, local learning leaders, advisors, tutors, mentors, and peers. Access to digital content does not substitute for human teaching, feedback, and accountability.",
  },
  {
    n: "04",
    title: "Flexible",
    body: "Students share a strong academic foundation while receiving different levels of challenge, support, pacing, advanced study, applied learning, and postsecondary preparation.",
  },
  {
    n: "05",
    title: "Purposeful",
    body: "Students learn to connect knowledge with Christian truth, moral reasoning, service, stewardship, vocation, and responsible participation in adult life.",
  },
];

export const networkProvides = [
  "Academic standards and course sequences",
  "Curriculum and instructional materials",
  "Live and recorded instruction",
  "Course leads and subject-matter instructors",
  "Assessment systems",
  "Teacher resources",
  "Academic calendars and pacing",
  "Transcript and records systems",
  "Quality assurance",
  "Advanced and specialized courses",
  "College and career resources",
];

export const partnersProvide = [
  "A structured daily learning environment",
  "Attendance accountability",
  "Schedule management",
  "In-person study support",
  "Relationships with students and families",
  "Technology assistance",
  "Supervised assessment",
  "Identification of emerging concerns",
  "Local projects and learning opportunities",
  "Connections to churches, employers, colleges, and community organizations",
];

export const academicsEntryPoints: { to: string; title: string; body: string }[] = [
  {
    to: "/academics/how-learning-works",
    title: "How Learning Works",
    body: "The learning cycle every course should move students through, and how it differs by subject.",
  },
  {
    to: "/academics/courses-and-graduation",
    title: "Courses and Graduation",
    body: "A representative four-year progression and the proposed subject framework.",
  },
  {
    to: "/academics/teachers-and-support",
    title: "Teachers and Support",
    body: "Who teaches, who evaluates, who is present daily, and who responds when a student needs help.",
  },
  {
    to: "/academics/progress-and-mastery",
    title: "Progress and Mastery",
    body: "How academic information becomes an early signal rather than a late verdict.",
  },
  {
    to: "/academics/pathways",
    title: "Pathways and Applied Learning",
    body: "One shared foundation, several real futures, and learning that gets used.",
  },
  {
    to: "/academics/academic-credibility",
    title: "Academic Credibility",
    body: "Standards, student work, assessment, credit, transcripts, and what remains to be confirmed.",
  },
];

/* Page 2 --------------------------------------------------------------- */

export const learningCycle: { n: string; title: string; body: string; activities: string[] }[] = [
  {
    n: "01",
    title: "Prepare",
    body: "Students understand the learning objective, connect it to prior knowledge, identify required materials, and recognize what successful work will require.",
    activities: [
      "Diagnostic questions",
      "Vocabulary preparation",
      "Introductory reading",
      "Prior-knowledge review",
      "Learning-goal preview",
    ],
  },
  {
    n: "02",
    title: "Learn",
    body: "Students encounter accurate, well-organized instruction through the format most appropriate to the subject.",
    activities: [
      "Live instruction",
      "Recorded explanation",
      "Guided reading",
      "Demonstration",
      "Worked example",
      "Seminar",
      "Laboratory introduction",
    ],
  },
  {
    n: "03",
    title: "Practice",
    body: "Students use new knowledge while support is still available.",
    activities: [
      "Problem sets",
      "Draft writing",
      "Guided analysis",
      "Laboratory exercises",
      "Skill rehearsal",
      "Structured research",
      "Source evaluation",
    ],
  },
  {
    n: "04",
    title: "Discuss",
    body: "Students test their understanding through conversation with teachers and peers.",
    activities: [
      "Seminar discussion",
      "Socratic questioning",
      "Peer explanation",
      "Debate",
      "Small-group analysis",
      "Teacher conference",
    ],
  },
  {
    n: "05",
    title: "Apply",
    body: "Students use learning in a meaningful context.",
    activities: [
      "Projects",
      "Presentations",
      "Experiments",
      "Research",
      "Case studies",
      "Community problems",
      "Service or workplace applications",
    ],
  },
  {
    n: "06",
    title: "Receive feedback",
    body: "Students learn what is accurate, strong, incomplete, unclear, or incorrect and what they should do next.",
    activities: [
      "Written teacher feedback",
      "Individual conference",
      "Rubric review",
      "Revision request",
      "Peer critique",
      "Automated practice feedback followed by teacher review where appropriate",
    ],
  },
  {
    n: "07",
    title: "Demonstrate mastery",
    body: "Students show real evidence that they have achieved the course or unit objectives.",
    activities: [
      "Examination",
      "Essay",
      "Presentation",
      "Portfolio",
      "Laboratory report",
      "Performance task",
      "Capstone",
      "Revised final product",
    ],
  },
];

export const subjectEmphases: { key: string; label: string; body: string }[] = [
  {
    key: "english",
    label: "English and communication",
    body: "Emphasize reading, writing, discussion, revision, rhetoric, research, and public presentation.",
  },
  {
    key: "math",
    label: "Mathematics",
    body: "Emphasize explanation, worked examples, guided practice, error analysis, problem-solving, and cumulative mastery.",
  },
  {
    key: "science",
    label: "Science",
    body: "Emphasize scientific inquiry, observation, laboratories, data interpretation, explanation, and evidence-based conclusions.",
  },
  {
    key: "social",
    label: "Social studies",
    body: "Emphasize primary sources, historical context, argument, civic reasoning, comparison, and respectful engagement with different interpretations.",
  },
  {
    key: "christian",
    label: "Christian studies",
    body: "Emphasize biblical literacy, theological understanding, moral reasoning, discussion, reflection, service, and application.",
  },
  {
    key: "applied",
    label: "Applied and elective courses",
    body: "Emphasize projects, performance, production, workplace relevance, demonstrations, portfolios, and public presentation.",
  },
];

export const deliveryPrinciples = [
  "Live instruction should be used when interaction materially improves learning.",
  "Recorded content should be concise, purposeful, and integrated into a larger course.",
  "Automated assessment should not be the sole basis for meaningful academic credit.",
  "Students should regularly produce original writing, reasoning, projects, or performances.",
  "Teacher feedback should be timely enough to influence subsequent work.",
  "Independent work should remain structured and visible.",
  "Course design should account for students who require more time, support, or challenge.",
];

/* Page 3 --------------------------------------------------------------- */

export const gradeRoadmap: { key: string; label: string; title: string; focus: string[] }[] = [
  {
    key: "9",
    label: "Grade 9",
    title: "Build the foundation",
    focus: [
      "Successful transition into high school",
      "English and mathematical foundations",
      "Core scientific and historical study",
      "Biblical literacy and Christian formation",
      "Study skills and responsible technology use",
      "Initial strengths and pathway exploration",
    ],
  },
  {
    key: "10",
    label: "Grade 10",
    title: "Strengthen and explore",
    focus: [
      "Continued core academic progression",
      "More independent reading, writing, and problem-solving",
      "Laboratory science",
      "Broader electives",
      "Career and interest exploration",
      "Early advanced-course preparation where appropriate",
    ],
  },
  {
    key: "11",
    label: "Grade 11",
    title: "Deepen and differentiate",
    focus: [
      "Advanced core coursework",
      "United States history and civic understanding",
      "Dual-enrollment or advanced options where appropriate",
      "Career, technical, ministry, military, or entrepreneurial exploration",
      "Postsecondary planning",
      "Applied learning and leadership",
    ],
  },
  {
    key: "12",
    label: "Grade 12",
    title: "Complete and transition",
    focus: [
      "Completion of graduation requirements",
      "Advanced or specialized study",
      "Government, economics, ethics, and adult-life preparation",
      "College, career, military, ministry, or workforce transition",
      "Senior capstone or applied experience",
      "Documented postsecondary plan",
    ],
  },
];

export type SubjectBand = {
  id: string;
  title: string;
  courses: { title: string; status: AcademicStatus }[];
  purpose: string;
  note?: string;
};

export const subjectBands: SubjectBand[] = [
  {
    id: "english",
    title: "English and communication",
    courses: [
      { title: "English I", status: "Core academic requirement" },
      { title: "English II", status: "Core academic requirement" },
      { title: "English III", status: "Core academic requirement" },
      { title: "English IV", status: "Core academic requirement" },
      { title: "Writing and rhetoric", status: "Proposed" },
      { title: "Public speaking", status: "Proposed" },
      { title: "Research and media literacy", status: "Proposed" },
    ],
    purpose:
      "Students learn to read critically, write clearly, evaluate sources, construct arguments, speak effectively, and communicate across academic, professional, civic, and personal settings.",
  },
  {
    id: "math",
    title: "Mathematics",
    courses: [
      { title: "Algebra I", status: "Core academic requirement" },
      { title: "Geometry", status: "Core academic requirement" },
      { title: "Algebra II", status: "Core academic requirement" },
      { title: "Statistics", status: "Proposed" },
      { title: "Precalculus", status: "Advanced option" },
      { title: "Consumer and business mathematics", status: "Proposed" },
      { title: "Advanced mathematics options", status: "Advanced option" },
    ],
    purpose:
      "Students develop quantitative reasoning, mathematical fluency, problem-solving, data literacy, and the ability to apply mathematics to academic and practical decisions.",
  },
  {
    id: "science",
    title: "Science",
    courses: [
      { title: "Biology", status: "Core academic requirement" },
      { title: "Chemistry", status: "Under academic review" },
      { title: "Physics or physical science", status: "Under academic review" },
      { title: "Environmental science", status: "Proposed" },
      { title: "Anatomy and physiology", status: "Proposed" },
      { title: "Advanced science options", status: "Advanced option" },
    ],
    purpose:
      "Students understand scientific inquiry, evaluate evidence, interpret data, conduct appropriate laboratory or applied work, and distinguish scientific conclusions from unsupported claims.",
    note: "Laboratory requirements must be satisfied through approved local equipment, scheduled laboratory sessions, partnerships, simulations where appropriate, or other academically valid resources.",
  },
  {
    id: "social",
    title: "Social studies",
    courses: [
      { title: "World history", status: "Core academic requirement" },
      { title: "United States history", status: "Core academic requirement" },
      { title: "Government", status: "Core academic requirement" },
      { title: "Economics", status: "Core academic requirement" },
      { title: "Geography", status: "Proposed" },
      { title: "Civics and public life", status: "Proposed" },
    ],
    purpose:
      "Students develop historical knowledge, civic understanding, economic reasoning, source evaluation, and the ability to engage different viewpoints responsibly.",
  },
  {
    id: "christian",
    title: "Christian studies",
    courses: [
      { title: "Biblical literacy", status: "Proposed" },
      { title: "Old and New Testament studies", status: "Proposed" },
      { title: "Christian worldview", status: "Proposed" },
      { title: "Theology and apologetics", status: "Proposed" },
      { title: "Ethics", status: "Proposed" },
      { title: "Faith, vocation, and service", status: "Proposed" },
    ],
    purpose:
      "Students develop biblical knowledge, theological understanding, moral reasoning, and the ability to connect faith with learning, relationships, work, service, and public life.",
  },
  {
    id: "collegecareer",
    title: "College and career preparation",
    courses: [
      { title: "Academic planning", status: "Proposed" },
      { title: "Study skills", status: "Proposed" },
      { title: "Financial literacy", status: "Proposed" },
      { title: "Professional communication", status: "Proposed" },
      { title: "Resume and interview preparation", status: "Proposed" },
      { title: "College applications", status: "Proposed" },
      { title: "Financial aid and scholarships", status: "Proposed" },
      { title: "Career exploration", status: "Proposed" },
      { title: "Entrepreneurship", status: "Proposed" },
      { title: "Workplace readiness", status: "Proposed" },
    ],
    purpose:
      "Students prepare for the decisions, applications, and habits that follow graduation, whatever their next step turns out to be.",
  },
  {
    id: "electives",
    title: "Electives and enrichment",
    courses: [
      { title: "Technology and computer science", status: "Proposed" },
      { title: "Artificial intelligence and data literacy", status: "Proposed" },
      { title: "Business and entrepreneurship", status: "Proposed" },
      { title: "Health sciences", status: "Proposed" },
      { title: "Visual and performing arts", status: "Varies by location" },
      { title: "Music", status: "Varies by location" },
      { title: "Foreign languages", status: "Proposed" },
      { title: "Communications and media", status: "Proposed" },
      { title: "Ministry and leadership", status: "Varies by location" },
      { title: "Skilled trades", status: "Partner-delivered" },
      { title: "Sports performance", status: "Varies by location" },
    ],
    purpose:
      "Students extend beyond the core with study that matches interest, ability, and the opportunities present in a particular community.",
  },
];

/* Page 4 --------------------------------------------------------------- */

export const academicRoles: { title: string; body: string; experience: string }[] = [
  {
    title: "Course lead",
    body: "Responsible for the academic integrity of a course, including standards, learning outcomes, content, assessments, pacing, teacher guidance, and revisions.",
    experience: "The course remains coherent, current, and academically accountable.",
  },
  {
    title: "Instructor",
    body: "Provides live or asynchronous teaching, evaluates student work, gives feedback, answers subject-matter questions, and supports mastery.",
    experience: "A qualified adult teaches the subject and responds to the student's work.",
  },
  {
    title: "Local learning leader",
    body: "Manages the daily learning environment, schedules, attendance, basic study support, technology assistance, and communication with families and centralized staff.",
    experience: "A trusted adult is physically present and helps the student navigate each day.",
  },
  {
    title: "Tutor or intervention specialist",
    body: "Provides targeted support when a student has not yet mastered required knowledge or skills.",
    experience: "Additional help is available before a temporary difficulty becomes course failure.",
  },
  {
    title: "Academic advisor",
    body: "Monitors credits, graduation progress, course planning, advanced opportunities, dual enrollment, and postsecondary preparation.",
    experience: "The student's courses connect to a coherent four-year plan and a real next step.",
  },
];

export const networkResponsibilities = [
  "Standards",
  "Course sequences",
  "Curriculum",
  "Course ownership",
  "Instruction",
  "Assessment systems",
  "Academic records",
  "Specialized courses",
  "Quality review",
  "Advanced options",
];

export const localResponsibilities = [
  "Daily structure",
  "Attendance",
  "Study habits",
  "In-person accountability",
  "Basic academic support",
  "Technology assistance",
  "Supervised testing",
  "Family communication",
  "Identification of concerns",
  "Local application and projects",
];

export const technologyShouldNot = [
  "Leave students to manage school alone",
  "Replace meaningful teacher feedback",
  "Reduce learning to video consumption",
  "Make automated quizzes the primary evidence of mastery",
  "Hide struggling students behind completion percentages",
  "Remove responsibility from adults",
];

/* Page 5 --------------------------------------------------------------- */

export const progressCycle: { n: string; title: string; body: string }[] = [
  { n: "01", title: "Diagnose", body: "Identify prior knowledge, skills, learning gaps, and readiness for the course." },
  {
    n: "02",
    title: "Observe",
    body: "Monitor attendance, participation, work habits, assignment completion, and teacher observations.",
  },
  {
    n: "03",
    title: "Assess",
    body: "Use formative assessments, written work, projects, laboratories, presentations, unit assessments, and examinations where appropriate.",
  },
  {
    n: "04",
    title: "Respond",
    body: "Provide timely, specific feedback that helps the student understand what to improve.",
  },
  {
    n: "05",
    title: "Identify",
    body: "Determine whether the concern involves knowledge, skill, study habits, attendance, technology, behavior, or another barrier.",
  },
  {
    n: "06",
    title: "Support",
    body: "Add tutoring, teacher office hours, academic coaching, modified pacing, peer study, or another appropriate intervention.",
  },
  {
    n: "07",
    title: "Reassess",
    body: "Determine whether the student has made progress and whether additional intervention is required.",
  },
  {
    n: "08",
    title: "Document",
    body: "Record mastery, grades, credits, interventions, and progress toward graduation accurately.",
  },
];

export const progressRecordFields: { label: string; note: string }[] = [
  { label: "Current courses", note: "Course titles, subject, and instructor of record" },
  { label: "Attendance", note: "Present, absent, and late patterns by course and by week" },
  { label: "Assignment completion", note: "Submitted, missing, late, and in revision" },
  { label: "Recent teacher feedback", note: "Most recent written comment and its date" },
  { label: "Current mastery", note: "Progress against the course learning outcomes" },
  { label: "Credits earned", note: "By graduation category" },
  { label: "Credits in progress", note: "Expected on satisfactory completion" },
  { label: "Graduation requirements remaining", note: "By category, with the governing framework named" },
  { label: "Intervention status", note: "None, monitoring, active support, or escalated" },
  { label: "Upcoming milestones", note: "Assessments, deadlines, conferences, and planning dates" },
  { label: "Recommended next action", note: "The single step the student and adults should take next" },
];

export const assessmentPrinciples = [
  "Assessment should improve learning as well as document it.",
  "Important credits require real evidence of student work.",
  "Students should complete original writing, reasoning, projects, or performances.",
  "Assessment methods should fit the subject and learning objective.",
  "Accommodations should preserve access without removing essential academic expectations.",
  "Students should understand how work is evaluated.",
  "Academic integrity procedures should apply consistently.",
  "Course completion should require more than clicking through content.",
];

export const academicSupports = [
  "Teacher office hours",
  "Tutoring",
  "Additional guided practice",
  "Study-skills coaching",
  "Modified pacing",
  "Peer study groups",
  "Local adult mentoring",
  "Academic advising",
  "Credit recovery",
  "Referral for specialized services",
];

/* Page 6 --------------------------------------------------------------- */

export const commonFoundation = [
  "English and communication",
  "Mathematics",
  "Science",
  "Social studies",
  "Christian studies",
  "Financial literacy",
  "Technology and media literacy",
  "College and career planning",
  "Leadership and service",
];

export type Pathway = {
  id: string;
  title: string;
  emphasis: string[];
  status: AcademicStatus;
  availability: AcademicStatus;
  caution?: string;
};

export const pathways: Pathway[] = [
  {
    id: "college-prep",
    title: "College preparatory",
    emphasis: [
      "College-admission course sequence",
      "Strong writing and research",
      "Advanced mathematics and science where appropriate",
      "Foreign language",
      "College application preparation",
      "Financial aid and scholarship guidance",
    ],
    status: "Proposed",
    availability: "Network-wide",
  },
  {
    id: "advanced",
    title: "Advanced academic",
    emphasis: [
      "Honors-level expectations",
      "Advanced coursework",
      "Dual enrollment",
      "Independent research",
      "Academic competitions",
      "Deeper subject specialization",
    ],
    status: "Proposed",
    availability: "Dual-enrollment option",
  },
  {
    id: "cte",
    title: "Career and technical education",
    emphasis: [
      "Industry-aligned coursework",
      "Technical skills",
      "Certifications where available",
      "Employer projects",
      "Job shadowing",
      "Work-based learning",
      "Local college or training partnerships",
    ],
    status: "Under review",
    availability: "Depends on local partnerships",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    emphasis: [
      "Opportunity identification",
      "Business models",
      "Financial literacy",
      "Marketing",
      "Customer discovery",
      "Product or service development",
      "Pitching and presentation",
      "Ethical enterprise",
    ],
    status: "Proposed",
    availability: "Available at selected locations",
  },
  {
    id: "ministry",
    title: "Ministry and service",
    emphasis: [
      "Biblical and theological study",
      "Leadership",
      "Communication",
      "Community service",
      "Church ministry experience",
      "Missions exposure",
      "Faith and vocation",
    ],
    status: "Proposed",
    availability: "Depends on local partnerships",
  },
  {
    id: "military",
    title: "Military preparation",
    emphasis: [
      "Leadership",
      "Physical readiness",
      "Citizenship",
      "Communication",
      "Academic planning",
      "Service-academy, ROTC, enlistment, and officer-pathway awareness",
      "Career and commitment exploration",
    ],
    status: "Proposed",
    availability: "Requires approval",
    caution: "CAN claims no military affiliation, endorsement, or guaranteed eligibility of any kind.",
  },
  {
    id: "workforce",
    title: "Workforce entry",
    emphasis: [
      "Professional communication",
      "Resume and interview preparation",
      "Workplace expectations",
      "Financial literacy",
      "Applied skills",
      "Employer exposure",
      "Work-based learning",
      "Transition planning",
    ],
    status: "Under review",
    availability: "Depends on local partnerships",
  },
];

export const appliedExperiences = [
  "Projects",
  "Presentations",
  "Research",
  "Laboratories",
  "Community problem-solving",
  "Service",
  "Internships",
  "Job shadowing",
  "Entrepreneurship",
  "Employer-sponsored challenges",
  "Church and community leadership",
  "Senior capstone work",
];

export const christianIntegrationDomains = [
  "Human dignity",
  "Evidence and honesty",
  "Technology and responsibility",
  "Economics and stewardship",
  "History and justice",
  "Science and creation",
  "Leadership and service",
  "Work and vocation",
  "Relationships and ethics",
  "Citizenship and public life",
];

/* Page 7 --------------------------------------------------------------- */

export const credibilityChain: { title: string; body: string }[] = [
  { title: "Standards", body: "Every course begins with defined learning outcomes and an approved academic purpose." },
  {
    title: "Course design",
    body: "Content, assignments, assessments, pacing, and instructional resources align to the intended outcomes.",
  },
  {
    title: "Instruction",
    body: "Qualified and accountable adults provide teaching, guidance, feedback, and subject-matter support.",
  },
  {
    title: "Student work",
    body: "Students produce their own evidence: reading, writing, reasoning, experimentation, performance, or application.",
  },
  {
    title: "Assessment",
    body: "Evaluation methods match the learning objectives and apply consistent academic expectations.",
  },
  {
    title: "Credit",
    body: "Credit reflects documented completion and sufficient academic performance under approved policies.",
  },
  {
    title: "Transcript",
    body: "Course titles, grades, credits, dates, and academic records are accurate, understandable, and transferable where applicable.",
  },
  {
    title: "Graduation",
    body: "A diploma represents completion of the governing graduation requirements and the broader CAN graduate expectations.",
  },
];

export const qualityProtections = [
  "Defined standards and learning outcomes",
  "Approved course descriptions",
  "Accountable course owners",
  "Qualified instructional support",
  "Appropriate assessment",
  "Original student work",
  "Academic-integrity procedures",
  "Accurate attendance and credit records",
  "Reliable transcripts",
  "Laboratory and specialized-course solutions",
  "Accessibility and accommodations",
  "Recurring course review",
  "Cross-site performance analysis",
  "Teacher, student, and family feedback",
  "Clear graduation requirements",
  "Accreditation and transcript positioning",
];

export const qualityReviewCycle = [
  "Review standards alignment",
  "Examine content accuracy",
  "Evaluate rigor",
  "Review Christian integration",
  "Inspect assessment quality",
  "Analyze completion and mastery",
  "Gather student and teacher feedback",
  "Review accessibility and technology performance",
  "Evaluate delivery cost",
  "Approve required revisions",
];

export type AcademicDecision = { question: string; status: AcademicStatus };

export const openDecisions: AcademicDecision[] = [
  { question: "Governing graduation framework", status: "Not yet determined" },
  { question: "Final four-year course sequence", status: "Under review" },
  { question: "Transcript-issuing authority", status: "Not yet determined" },
  { question: "Accreditation path", status: "Under review" },
  { question: "Curriculum providers", status: "Under review" },
  { question: "Courses requiring certified teachers", status: "Not yet determined" },
  { question: "Courses requiring live instruction", status: "Under review" },
  { question: "Laboratory delivery", status: "Under review" },
  { question: "Standardized assessment strategy", status: "Not yet determined" },
  { question: "Dual-enrollment partners", status: "Not yet determined" },
  { question: "Accessibility and specialized-learning services", status: "Under review" },
  { question: "Final grading and credit policies", status: "Under review" },
  { question: "Transfer-student procedures", status: "Not yet determined" },
  { question: "Academic results required before expansion", status: "Under review" },
];
