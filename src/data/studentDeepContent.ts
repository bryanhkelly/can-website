/**
 * Student Experience content. Everything here is configurable data so pages can
 * be updated without redesign. Nothing describes a currently operating program:
 * status labels distinguish core promises from proposed or location-dependent
 * experiences. No student names, testimonials, outcomes, or statistics.
 */

export type Status =
  | "Core CAN promise"
  | "Proposed"
  | "Available network-wide"
  | "Available at selected locations"
  | "Varies by location"
  | "Requires verification";

export type StudentStep = { to: string; label: string; short: string };

export const studentSteps: StudentStep[] = [
  { to: "/student-experience", label: "The CAN Experience", short: "The reach of a larger school." },
  { to: "/student-experience/a-week-at-can", label: "A Week at CAN", short: "Structured days. Different ways to learn." },
  { to: "/student-experience/known-and-supported", label: "Known and Supported", short: "No student should become invisible." },
  { to: "/student-experience/belonging", label: "Belonging", short: "A small local school, a large student world." },
  { to: "/student-experience/faith-and-formation", label: "Faith and Formation", short: "Formation belongs in the whole life of the school." },
  { to: "/student-experience/activities-and-service", label: "Activities and Service", short: "Life beyond coursework." },
  { to: "/student-experience/ready-for-whats-next", label: "What Comes Next", short: "Nobody graduates without a plan." },
];

export const experienceLayers = [
  {
    name: "Personal",
    tint: "var(--brass)",
    body: "Known personally, supported intentionally, and guided toward a clear future.",
  },
  {
    name: "Local",
    tint: "var(--living)",
    body: "A CAN Community where students learn, build friendships, serve, worship, and belong.",
  },
  {
    name: "Network",
    tint: "var(--sky)",
    body: "A larger network of teachers, courses, clubs, groups, events, and opportunities.",
  },
];

export const promises: { n: string; word: string; body: string }[] = [
  { n: "01", word: "Known", body: "A named adult knows this student's goals, strengths, hard subjects, and bad weeks — and notices when something changes." },
  { n: "02", word: "Challenged", body: "The work is real. Students are expected to read closely, write clearly, finish what they start, and grow." },
  { n: "03", word: "Formed", body: "Christian truth shapes character, friendship, work, and the way a student reads the world. It is not a class period." },
  { n: "04", word: "Connected", body: "A small school down the road. A wide circle of peers, teachers, and groups beyond it." },
  { n: "05", word: "Prepared", body: "No student graduates without a next step they can name: college, a trade, work, the military, ministry, or a business of their own." },
];

/** Ordered by what families ask about first. */
export const universalPromises: string[] = [
  "A named adult who watches the whole student",
  "Meaningful time with qualified teachers",
  "A predictable weekly structure",
  "A coherent, college-preparatory course plan",
  "Early warning when a student slips, and help that follows",
  "Christian formation and pastoral relationships",
  "College and career planning that starts before senior year",
  "Chances to lead and to serve",
  "Access to network courses, groups, and events",
  "A written plan for the year after graduation",
];

/** Grouped so a family can see which questions have local answers. */
export const locallyVariable: string[] = [
  "Sports and physical activity",
  "Music, worship arts, and ensembles",
  "Clubs and student groups",
  "Getting to and from the building",
  "Weekly worship rhythms",
  "Denominational instruction",
  "Internships and community partnerships",
  "What the facility itself makes possible",
  "Regional gatherings with other CAN students",
];

/* ---------------------------------------------------------------- week */

export type WeekView = {
  id: string;
  label: string;
  note: string;
  days: { day: string; blocks: string[] }[];
};

export const weekDisclaimer =
  "Representative schedule. Final schedules vary by location and student pathway.";

export const weekViews: WeekView[] = [
  {
    id: "ninth",
    label: "Typical ninth-grade student",
    note: "A balanced first-year week: live instruction, guided work, formation, support, and activity.",
    days: [
      { day: "Monday", blocks: ["Arrival and community check-in", "Prayer or devotional rhythm", "Live teacher-led instruction", "Independent assignments with local study support", "Lunch and peer connection", "Physical activity"] },
      { day: "Tuesday", blocks: ["Arrival and check-in", "Guided digital lesson", "Small-group discussion", "Teacher office hours", "Lunch and peer connection", "Clubs or enrichment"] },
      { day: "Wednesday", blocks: ["Arrival and check-in", "Live instruction", "Christian formation", "Independent assignments", "Tutoring or intervention as needed", "Advisory"] },
      { day: "Thursday", blocks: ["Arrival and check-in", "Live instruction", "Laboratory or project work", "Lunch and peer connection", "Physical activity", "Study groups"] },
      { day: "Friday", blocks: ["Arrival and check-in", "Guided lessons and assessment", "Community service or applied learning", "Weekly planning and close-out"] },
    ],
  },
  {
    id: "college-prep",
    label: "College-preparatory upperclassman",
    note: "More independent work, advanced coursework, and postsecondary planning time.",
    days: [
      { day: "Monday", blocks: ["Check-in and weekly plan", "Advanced live instruction", "Independent reading and writing", "Teacher office hours", "Leadership or club responsibility"] },
      { day: "Tuesday", blocks: ["Check-in", "Seminar discussion", "Laboratory or project work", "Academic advising block", "Physical activity"] },
      { day: "Wednesday", blocks: ["Check-in", "Live instruction", "Christian formation", "Postsecondary planning and applications", "Peer study group"] },
      { day: "Thursday", blocks: ["Check-in", "Advanced coursework", "Capstone or research time", "Mentoring conversation"] },
      { day: "Friday", blocks: ["Check-in", "Assessment and feedback", "Service or applied learning", "Weekly close-out and next-week plan"] },
    ],
  },
  {
    id: "support",
    label: "Student receiving additional academic support",
    note: "The same structure with protected time for intervention, coaching, and modified pacing.",
    days: [
      { day: "Monday", blocks: ["Check-in with local learning leader", "Live instruction", "Small-group tutoring", "Study-skills coaching", "Physical activity"] },
      { day: "Tuesday", blocks: ["Check-in", "Guided lesson at modified pacing", "Teacher office hours", "Assignment completion support", "Lunch and peer connection"] },
      { day: "Wednesday", blocks: ["Check-in", "Live instruction", "Christian formation", "Intervention block with documented plan", "Advisory"] },
      { day: "Thursday", blocks: ["Check-in", "Instruction and practice", "Peer study group", "Progress review with advisor"] },
      { day: "Friday", blocks: ["Check-in", "Assessment or retake", "Credit-recovery or catch-up block", "Weekly close-out with family communication"] },
    ],
  },
  {
    id: "pathway",
    label: "Dual-enrollment or career-pathway student",
    note: "Academic core plus college coursework, technical training, or workplace experience.",
    days: [
      { day: "Monday", blocks: ["Check-in and weekly plan", "CAN core coursework", "Dual-enrollment or pathway course", "Independent study"] },
      { day: "Tuesday", blocks: ["Check-in", "Core instruction", "Job shadowing, internship, or technical training", "Reflection and logging"] },
      { day: "Wednesday", blocks: ["Check-in", "Core instruction", "Christian formation", "Advisor check on pathway progress"] },
      { day: "Thursday", blocks: ["Check-in", "Pathway coursework", "Project or portfolio work", "Mentoring conversation"] },
      { day: "Friday", blocks: ["Check-in", "Assessment and feedback", "Applied learning or service", "Weekly close-out"] },
    ],
  },
];

export const dayNarrative = [
  { n: "01", title: "Arrive and connect", body: "Students begin the day with a clear plan, a local adult who knows whether they are present and prepared, and a community that notices when they are missing." },
  { n: "02", title: "Learn in different ways", body: "Some learning happens live with a teacher. Some happens through guided digital lessons, discussion, projects, reading, writing, laboratories, or structured independent work." },
  { n: "03", title: "Get help before falling behind", body: "Students can access instructors, local learning leaders, office hours, tutoring, peer study groups, and documented intervention when needed." },
  { n: "04", title: "Build relationships", body: "Meals, study periods, discussions, mentoring, clubs, movement, and service create space for students to know one another beyond coursework." },
  { n: "05", title: "Connect learning to purpose", body: "Students consider how academic work relates to Christian truth, vocation, community needs, and their developing postsecondary plans." },
  { n: "06", title: "Finish with clarity", body: "Students should leave knowing what they completed, what comes next, and who can help if they are stuck." },
];

export const rhythms = [
  { horizon: "Daily", body: "Learning, prayer, conversation, meals, movement, accountability, and support." },
  { horizon: "Weekly", body: "Advisory, mentoring, chapel or formation, clubs, small groups, tutoring, and planning." },
  { horizon: "Monthly", body: "Service, network events, project showcases, competitions, career exposure, or community activities." },
  { horizon: "Annually", body: "Retreats, student exhibitions, leadership transitions, celebrations, commissioning, and graduation." },
];

/* ------------------------------------------------------- known and supported */

export const adults = [
  { role: "Local learning leader", layer: "Local", body: "Helps manage the daily environment, attendance, schedules, study habits, communication, and immediate student needs." },
  { role: "Course instructors", layer: "Network", body: "Teach, assess student work, provide feedback, offer subject-matter help, and monitor mastery." },
  { role: "Academic advisor", layer: "Personal", body: "Tracks progress toward graduation and helps students make informed academic and postsecondary decisions." },
  { role: "Mentor or pastoral leader", layer: "Local", body: "Supports Christian formation, character, relationships, service, and personal growth." },
  { role: "Tutors and specialists", layer: "Network", body: "Provide targeted assistance when a student needs additional academic or specialized support." },
  { role: "Family", layer: "Personal", body: "Receives meaningful information, participates in support decisions, and helps reinforce expectations and progress." },
];

export const studentQuestions = [
  "Who helps me navigate each school day?",
  "Who monitors my academic progress?",
  "Who helps when I do not understand a subject?",
  "Who supports my spiritual and personal growth?",
  "Who helps me plan life after graduation?",
  "Where do I go when something does not feel right?",
];

export const supportJourney = [
  { n: "01", title: "Notice", body: "Attendance, assignments, assessments, teacher observation, family communication, or student disclosure identifies a concern." },
  { n: "02", title: "Understand", body: "The responsible adult determines whether the issue is academic, technological, behavioral, personal, relational, or environmental." },
  { n: "03", title: "Respond", body: "A clear support plan is developed with the student and, when appropriate, the family." },
  { n: "04", title: "Assign", body: "One adult owns follow-up so responsibility does not disappear between systems." },
  { n: "05", title: "Monitor", body: "Progress is reviewed, documented, and communicated." },
  { n: "06", title: "Escalate", body: "Additional academic, pastoral, behavioral, or outside professional support is engaged when the initial response is insufficient." },
];

export const supportForms = [
  "Teacher office hours",
  "Tutoring",
  "Academic coaching",
  "Modified pacing",
  "Study-skills support",
  "Peer study groups",
  "Local adult mentoring",
  "Credit recovery",
  "Academic advising",
  "Family conferences",
  "Pastoral support",
  "Referrals to qualified outside professionals",
];

export const safeguarding = [
  "Student safeguarding",
  "Background checks",
  "Bullying and harassment",
  "Conflict resolution",
  "Mental-health concerns",
  "Mandatory reporting",
  "Emergency escalation",
  "Digital safety",
  "Appropriate adult-student boundaries",
  "Referral to qualified professionals",
];

export const safeguardingStatus: Status = "Proposed";

/* ------------------------------------------------------------- belonging */

export const circles = [
  { name: "Personal", tint: "var(--brass)", body: "Each student has individual goals, trusted adults, a learning plan, a developing voice, and a growing sense of purpose." },
  { name: "Local", tint: "var(--living)", body: "Students share daily life with peers and adults in a CAN Community where they learn, build friendships, serve, worship, and belong. This is where relationships become consistent, families become known, and community becomes tangible." },
  { name: "Network", tint: "var(--sky)", body: "Students can learn from specialized teachers, join interest communities, collaborate on projects, participate in events, and form relationships across the broader CAN Academy network." },
];

export const groupTypes = [
  "Study groups",
  "Subject-based tutoring groups",
  "Book or writing circles",
  "College-preparation groups",
  "Fitness and recreation groups",
  "Arts and music groups",
  "Service teams",
  "Career-interest communities",
  "Parent-supported social gatherings",
  "Regional church youth connections",
];

export const connectionProcess = [
  "Digital discovery within the protected CAN network",
  "Family permission",
  "Privacy-protected introductions",
  "Verified adult leadership",
  "Approved in-person gathering",
  "Ongoing safeguarding and accountability",
];

export const geographicGroupStatus: Status = "Proposed";

export const networkOpportunities = [
  "Network courses",
  "Virtual and regional clubs",
  "Collaborative projects",
  "Academic competitions",
  "Student leadership",
  "Project showcases",
  "Worship and formation events",
  "College and career events",
  "Regional service experiences",
  "Network celebrations",
];

/* ------------------------------------------------------------- formation */

export const sharedFoundation = [
  "Biblical truth",
  "The lordship of Jesus Christ",
  "Human dignity",
  "Moral responsibility",
  "Wisdom",
  "Service",
  "Stewardship",
  "Vocation",
  "Respectful engagement with others",
];

export const localChurchFormation = [
  "Pastoral relationships",
  "Worship",
  "Prayer",
  "Discipleship",
  "Bible study",
  "Service",
  "Church participation",
  "Leadership opportunities",
  "Denominational teaching",
];

export const faithThroughLearning = [
  "Literature and storytelling",
  "History and citizenship",
  "Science and creation",
  "Mathematics and order",
  "Technology and human responsibility",
  "Economics and stewardship",
  "Work and vocation",
  "Relationships and ethics",
  "Leadership and service",
];

export const formationResponsibility = [
  "Lead prayer or discussion",
  "Serve younger students",
  "Participate in church ministries",
  "Design service projects",
  "Help welcome new students",
  "Resolve conflict responsibly",
  "Reflect on character and decision-making",
  "Connect strengths and interests to vocation",
  "Lead with humility and accountability",
];

export const formationExperiences: { label: string; status: Status }[] = [
  { label: "Grade-level retreats", status: "Proposed" },
  { label: "Service days", status: "Proposed" },
  { label: "Student testimony and reflection", status: "Proposed" },
  { label: "Leadership commissioning", status: "Proposed" },
  { label: "Senior capstone", status: "Proposed" },
  { label: "Graduation commissioning", status: "Proposed" },
  { label: "Network worship or formation gatherings", status: "Proposed" },
];

/* ------------------------------------------------------------- activities */

export const activityAreas: { title: string; lead: string; items: string[]; note?: string }[] = [
  {
    title: "Athletics and wellness",
    lead: "Potential opportunities may include:",
    items: ["Physical education", "Strength and conditioning", "Recreational sports", "Club sports", "Community leagues", "Running or fitness groups", "Regional competitions", "Wellness education"],
    note: "CAN does not promise public-school athletic participation or specific sports unless local eligibility and partnerships have been verified.",
  },
  {
    title: "Music and the arts",
    lead: "Potential opportunities may include:",
    items: ["Worship teams", "Choir", "Instrumental music", "Visual arts", "Photography", "Theater", "Media production", "Writing and publishing", "Regional performances and showcases"],
  },
  {
    title: "Clubs and interests",
    lead: "Students may help create local or network groups around:",
    items: ["Technology", "Artificial intelligence", "Entrepreneurship", "Debate", "Literature", "Health sciences", "Languages", "Communications", "Ministry", "Skilled trades", "Gaming", "Student media", "Other student interests"],
  },
  {
    title: "Leadership",
    lead: "Students should have opportunities to:",
    items: ["Form and lead clubs", "Serve on a student leadership council", "Mentor younger students", "Plan events", "Lead projects", "Welcome new students", "Represent their CAN Community", "Help shape network programming", "Present work publicly"],
  },
  {
    title: "Service and applied learning",
    lead: "Students may participate in:",
    items: ["Church ministry", "Community service", "Local problem-solving", "Internships", "Job shadowing", "Entrepreneurship", "Research", "Employer-sponsored projects", "Senior capstone work"],
  },
];

export const deliveryLevels = [
  { level: "Local", body: "Regular activities rooted in the church, school, and community.", tint: "var(--living)" },
  { level: "Regional", body: "Gatherings that bring nearby CAN students and sites together.", tint: "var(--clay)" },
  { level: "Network", body: "Courses, clubs, competitions, showcases, and events available across locations.", tint: "var(--sky)" },
];

export const signatureExperiences: { label: string; status: Status }[] = [
  { label: "Annual CAN student gathering", status: "Proposed" },
  { label: "Community service day", status: "Proposed" },
  { label: "Student project showcase", status: "Proposed" },
  { label: "Network academic or creative competition", status: "Proposed" },
  { label: "Student leadership council", status: "Proposed" },
  { label: "Senior capstone presentation", status: "Proposed" },
  { label: "Postsecondary commitment celebration", status: "Proposed" },
  { label: "Graduation commissioning", status: "Proposed" },
];

export const activityAvailabilityNote =
  "Activities vary by location, student interest, facilities, community partnerships, eligibility rules, and launch stage.";

/* --------------------------------------------------------------- pathways */

export const pathways = [
  "Four-year college",
  "Community college",
  "Dual enrollment",
  "Technical education",
  "Skilled trades",
  "Employment",
  "Entrepreneurship",
  "Military service",
  "Ministry",
  "Service or gap-year programs",
  "Other defined pathways",
];

export const nextJourney = [
  { n: "01", title: "Discover", body: "Students explore their strengths, interests, values, abilities, and sense of vocation." },
  { n: "02", title: "Plan", body: "Each student develops and regularly updates an academic and postsecondary plan." },
  { n: "03", title: "Experience", body: "Students encounter professions, colleges, employers, ministries, military pathways, technical programs, and community needs." },
  { n: "04", title: "Prepare", body: "Students build practical capabilities such as communication, financial literacy, applications, resumes, interviews, decision-making, and responsible technology use." },
  { n: "05", title: "Demonstrate", body: "Students complete meaningful projects, presentations, service, work experiences, or a senior capstone." },
  { n: "06", title: "Transition", body: "Students graduate with a documented next step, a realistic plan, and adults who have helped them prepare." },
];

export const nextSupports = [
  "Academic and career advising",
  "Strengths and interest exploration",
  "A four-year academic plan",
  "Postsecondary pathway exploration",
  "Financial literacy",
  "Professional communication",
  "Resume and interview preparation",
  "College and scholarship guidance",
  "Exposure to employers and professions",
  "Military, ministry, technical, and entrepreneurial pathways",
  "A documented postsecondary plan",
  "A senior capstone or applied experience",
];

export const studentOwnership = [
  "Set goals",
  "Monitor their progress",
  "Seek help",
  "Evaluate opportunities",
  "Make informed tradeoffs",
  "Lead projects",
  "Communicate decisions",
  "Present their work",
  "Defend their postsecondary plans",
  "Follow through on next steps",
];

/* ------------------------------------------------------------ cross links */

export const studentCrossLinks: Record<
  string,
  { to: string; label: string; note: string; available?: boolean }
> = {
  academics: { to: "/academics", label: "Academics", note: "Explore courses, teaching, assessment, graduation, and academic support." },
  formation: { to: "/student-experience/faith-and-formation", label: "Christian Formation", note: "Explore how faith and local church identity shape the student experience." },
  collegeCareer: { to: "/explore", label: "College and Career Preparation", note: "Postsecondary advising.", available: false },
  teacherModel: { to: "/explore", label: "Teacher Model", note: "Teachers and teaching roles.", available: false },
  technology: { to: "/explore", label: "Technology", note: "Platform architecture and privacy controls.", available: false },
  partnership: { to: "/partnership-model", label: "Partnership Model", note: "See how CAN and local partners share responsibility." },
  legal: { to: "/explore", label: "Legal and Compliance", note: "Sports eligibility and state-specific rules.", available: false },
  launch: { to: "/launch-approach", label: "Launch Approach", note: "See how a community moves from opportunity to launch." },
  canModel: { to: "/can-model", label: "The CAN model", note: "See how the shared school system and local community work together." },
  economics: { to: "/economic-breakthrough", label: "Economics", note: "See how shared capabilities can expand access and support sustainability." },
};

export type StudentCrossKey = keyof typeof studentCrossLinks;
