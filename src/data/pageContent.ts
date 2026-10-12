// Story Pages 01-07 use the approved v12 copy-locked governance matrix.
// Page 08 Explore and role doorways use the later approved doorway / Explore direction.

export const navSlugs = [
  'stakes',
  'possibility',
  'curriculum',
  'platform',
  'rooted-locally',
  'student-experience',
  'why-it-can-work',
  'explore-can',
] as const

export const stakesContent = {
  eyebrowNumber: '01/08',
  eyebrowLabel: 'The Stakes',
  h1: 'Families are making educational tradeoffs they should not have to make.',
  dek: 'For many families, the tradeoff is real: the option they want is too far away, too expensive, disconnected from their faith and culture, or too limited in courses and support.',
  items: [
    { heading: 'Too far', body: 'The Christian school a family wants may be an hour away, or may not exist nearby at all.' },
    { heading: 'Too expensive', body: 'Private-school tuition can put Christian education out of reach for families who would choose it if they could.' },
    { heading: 'Too disconnected from their faith, culture, and story', body: 'A public school can serve a student well and still not provide the Christian formation a family is seeking. A student can succeed academically and still see too little of their faith, culture, history, or community reflected in what they study.' },
    { heading: 'Too limited in breadth', body: 'Small schools, co-ops, and homeschool communities may not be able to offer every advanced course, specialist teacher, activity, counseling resource, or support option a teenager wants.' },
  ],
  refrain: 'Distance. Cost. Relevance. Breadth. Families should not have to solve one problem by accepting another.',
  transition: 'What if families did not have to choose among those tradeoffs?',
  details: {
    example: 'A family may have a nearby public school with strong programs but not the Christian formation the family is seeking, a Christian school that requires a long commute or tuition beyond reach, or a smaller alternative that reflects its values but cannot offer the courses and support a teenager needs.',
    objection: 'This is not an argument that every existing school has failed. It is an argument that families should have more ways to combine academics, faith, culture, community, opportunity, and affordability.',
  },
}

export const possibilityContent = {
  eyebrowNumber: '02/08',
  eyebrowLabel: 'The Possibility',
  kicker: '',
  h1: 'What if Christian education could happen closer to home?',
  dek: 'Families should be able to choose an education that offers rigorous academics, Christian formation, meaningful local relationships, and access to a much bigger world without sacrificing one for another.',
  photoCaption: 'Together greater futures',
  items: [
    { heading: 'Closer to home', body: 'Students should be able to learn close to home, with live sessions and local community built into the week.' },
    { heading: 'More choice for families', body: 'Across the country, more states are creating or expanding programs that allow eligible families to direct education funding toward approved learning options. Funding alone does not create a great education. Families still need strong choices.' },
    { heading: 'Equipping the people families trust', body: 'CAN equips families and the churches, schools, educators, and communities they trust to make the most of that growing choice.' },
    { heading: 'A bigger world while staying rooted locally', body: 'Students can remain rooted locally while gaining access to teachers, courses, activities, and peers across a much larger network.' },
  ],
  refrain: 'Choice matters most when families have strong options.',
  transition: 'But access and choice only matter if the education itself is worth choosing.',
  details: {
    policy: 'Across the country, more states are creating or expanding programs that allow eligible families to direct education funding toward approved learning options. Funding alone does not create a great education. Families still need strong choices.',
    example: 'A family may be able to use an available scholarship to join a CAN Community close to home while accessing teachers, courses, and support from the wider CAN network.',
    objection: 'CAN is not one perfect format for every family. It is another path that families and trusted communities can use in ways that fit their circumstances.',
  },
}

export const curriculumContent = {
  eyebrowNumber: '03/08',
  eyebrowLabel: 'The Curriculum',
  kicker: '',
  h1: 'Rigorous academics. Intentional design.',
  dek: 'CAN combines standards-aligned academics with intentionally chosen texts, examples, projects, and perspectives that can reflect faith, culture, tradition, and community.',
  layers: [
    { heading: 'Meet the standards', body: 'CAN courses teach the knowledge and skills students are expected to master: analysis, writing, research, mathematics, science, history, and more.' },
    { heading: 'Shape the experience', body: 'The texts, examples, projects, case studies, and questions students encounter can be chosen intentionally while still meeting academic requirements.' },
    { heading: 'Built with educators', body: 'Licensed educators lead academic design. Experienced paraeducators and local church leaders contribute practical, cultural, and community-grounded insight so the learning experience remains both academically coherent and locally meaningful.' },
    { heading: 'Designed in layers', body: 'A shared academic core can be shaped through Christian worldview, cultural and community context, and local or denominational distinctives chosen with the local partner. That does not require rebuilding every course from scratch.' },
  ],
  example: {
    label: 'Real Example',
    title: 'English 10',
    bookTitle: 'Humanity & Hope',
    checklist: ['Literary analysis', 'Argument & research', 'Diverse voices', 'Faith-informed perspective'],
  },
  refrain: 'Standards define what students need to learn. They do not have to dictate every voice, text, example, or question used to teach it.',
  transition: 'An education this intentional needs a school system built to deliver it across many contexts.',
  details: {
    credibility: "CAN's academic leadership combines years of classroom experience with advanced academic training, while licensed educators lead course design with input from experienced paraeducators and local church leaders.",
    example: "English 10 can still teach literary analysis, argument, research, composition, and rhetoric while intentionally including Christian authors, Black authors, global voices, texts reflecting students' cultural traditions, and community-connected assignments.",
    objection: 'Academic rigor does not disappear when curriculum becomes more intentional. The standards remain; CAN makes deliberate choices about the voices, examples, projects, and perspectives used to teach them.',
  },
}

export const platformContent = {
  eyebrowNumber: '04/08',
  eyebrowLabel: 'The Platform',
  kicker: '',
  h1: 'One school system across many local communities.',
  dek: 'CAN connects learning, student support, local-site coordination, and school operations in one system designed to work across many different local settings.',
  osLabel: 'CAN OS',
  osWelcome: 'Welcome. Building brighter futures together.',
  layers: [
    { heading: 'Learning', body: 'Curriculum, instruction, assignments, assessment, and teacher workflows operate inside the same connected academic environment.' },
    { heading: 'Student support', body: 'Academic Coaches, Counselors, progress data, interventions, communication, and student services can work from the same picture of each student.' },
    { heading: 'Local sites and school operations', body: 'Attendance, room facilitation, local schedules, enrollment, records, funding, compliance, reporting, and communication work through one coordinated system.' },
    { heading: 'Many local contexts', body: 'Church-hosted community • K-8 school adding high school • Homeschool / co-op • Small private school' },
  ],
  communityTypes: ['Churches', 'Homes / Homeschools', 'Co-ops', 'K-8 Schools', 'Small Private Schools'],
  refrain: 'One connected system. Many local contexts.',
  transition: 'The platform can be shared. The community still has to be local.',
  details: {
    credibility: "CAN's technology is led by a former Microsoft senior leader with enterprise platform experience, helping build CAN as one connected school rather than a collection of disconnected tools.",
    example: 'A CAN Teacher can post an assignment, a student can complete it from a church-hosted site, an Academic Coach can see the same progress data, and the local Site Leader can manage attendance through the same system.',
    objection: 'An LMS manages coursework. CAN also connects the people, support, records, and local operations required for one school to work across many communities.',
  },
}

export const rootedLocallyContent = {
  eyebrowNumber: '05/08',
  eyebrowLabel: 'Rooted Locally',
  kicker: '',
  h1: 'The school system can be shared. The community cannot be.',
  dek: 'CAN starts with communities that already exist and equips them with the school system they need to serve students well.',
  columns: [
    {
      heading: 'What communities bring',
      accent: 'green',
      summary: 'Families, trusted leaders, mentors, spiritual community, facilities, volunteers, service opportunities, culture, and local credibility often already exist.',
      items: ['Local leadership', 'Facilities and support', 'Community relationships', 'Unique opportunities'],
    },
    {
      heading: 'What CAN brings',
      accent: 'navy',
      summary: 'CAN brings the curriculum, teachers, student support, and school operations that are difficult for every local community to recreate on its own.',
      items: ['Curriculum', 'Teachers', 'Student support', 'School operations'],
    },
    {
      heading: 'What stays local',
      accent: 'gold',
      summary: 'Worship culture, mentoring, spiritual formation, service, local leadership, traditions, and community rhythms remain rooted in the local partner.',
      items: ['Worship and ministry culture', 'Mentoring and formation', 'Local leadership', 'Traditions and rhythms'],
    },
  ],
  refrain: 'One academic foundation. Distinct local communities.',
  transition: 'What does that combination actually feel like for a student?',
  details: {
    localFormVaries: 'CAN may take different local forms, including a church, an existing school, a co-op, or another trusted community, while operating through the same shared school foundation.',
    objection: 'Shared academics and systems do not require shared worship, ministry culture, traditions, or local identity.',
  },
}

export const studentExperienceContent = {
  eyebrowNumber: '06/08',
  eyebrowLabel: 'The Student Experience',
  kicker: '',
  h1: 'Small enough to know every student. Large enough to give them options.',
  dek: 'Students belong to a local community while learning from CAN Teachers and gaining access to a much larger network of students, specialists, activities, and opportunities.',
  rings: [
    { heading: 'Expanded Nationally', body: 'A larger network of students, specialists, activities, and opportunities' },
    { heading: 'Connected Regionally', body: 'Regional activities and relationships beyond one local site' },
    { heading: 'Known Locally', body: 'A close-knit community where students are known, noticed, and supported' },
  ],
  beats: [
    { heading: 'Academic expertise', body: 'CAN Teachers lead academic instruction and bring subject expertise that each local site does not have to staff on its own.' },
    { heading: 'Local relationships', body: 'A Room Facilitator, Site Leader / Director, Small Group Leader, mentors, and local peers create the local relationships that help ensure a student is known, noticed, and supported.' },
    { heading: 'A wider world', body: 'Students should be able to stay rooted in a local community while reaching far beyond it through regional activities and the wider CAN network.' },
    { heading: 'A CAN week', body: 'A CAN week can include more than lessons: live instruction, conversation, collaboration, mentoring, activities, worship, and service.' },
  ],
  weekLabel: 'A CAN week',
  week: ['Live instruction', 'Conversation', 'Collaboration', 'Mentoring', 'Activities', 'Worship & service'],
  refrain: 'No student should become invisible.',
  transition: 'Can a model like this also work economically?',
  details: {
    vignette: 'On a live-session day, a student might begin with a CAN Teacher, work alongside local peers with a Room Facilitator nearby, meet with an Academic Coach when a course gets difficult, and later connect with a Small Group Leader or Counselor who knows the student beyond the gradebook.',
    objection: 'A small local school should not mean a small student world.',
  },
}

export const economicsContent = {
  eyebrowNumber: '07/08',
  eyebrowLabel: 'Why It Can Work',
  kicker: '',
  h1: 'A smaller local school should not have to carry the cost of an entire school system.',
  dek: 'A standalone school has to build and support many academic, administrative, and student-service functions on its own. CAN shares more of those capabilities across a larger network.',
  oldWay: {
    heading: 'A standalone school',
    subheading: 'Carries the full system on its own',
    items: ['Specialized teachers', 'Curriculum', 'Academic systems', 'Technology', 'Counseling and support', 'Records and school services'],
    outcome: 'Many schools recreate the same capabilities separately.',
  },
  canWay: {
    heading: 'Shared teachers, systems, and support',
    subheading: 'CAN shares more capacity across the network',
    outcome: 'Local communities can focus more of their resources on students and relationships.',
  },
  fundingLabel: 'The equation',
  funding: [
    { heading: 'Shared teachers, systems, and support', body: 'Specialized teachers, curriculum, academic systems, technology, counseling, records, and school services can serve students across multiple locations.' },
    { heading: 'Use what is already local', body: 'CAN builds on facilities and community assets that already exist close to families instead of recreating them at every location.' },
    { heading: 'Available education funding', body: 'Where scholarships and other education-choice programs are available, CAN works to reduce or eliminate out-of-pocket tuition for eligible families wherever possible.' },
  ],
  refrain: 'Share more. Rebuild less.',
  transition: 'Now you have enough of the model to start testing it.',
  equation: 'Available education funding + local spaces and community assets + shared teachers, systems, and support = a more accessible path to Christian education.',
  details: {
    example: 'Instead of each community separately building curriculum, hiring every specialist, buying every system, and recreating every administrative function, CAN shares more of that capacity across the network.',
    objection: 'Sharing does not make costs disappear. It changes how much each local community has to recreate on its own.',
    disclaimer: "CAN's objective is to reduce or eliminate out-of-pocket tuition for qualifying families wherever possible. Eligibility, funding levels, fees, transportation, and local operating costs vary by market.",
  },
}

export const explorePageContent = {
  h1: 'Where would you like to go next?',
  dek: 'Go deeper by topic, start from your role, or begin a conversation about whether CAN could fit your community.',
  secondaryDek: 'You can keep exploring, start from your role, or begin a conversation now.',
  topicIntro: 'Explore what makes CAN different and how it could work in your community.',
  topics: [
    { label: 'Student Experience', subtitle: 'What school feels like', href: '/story/student-experience' },
    { label: 'Academics', subtitle: 'Courses & pathways', href: '/academics' },
    { label: 'Partnership Model', subtitle: 'How communities join', href: '/partnership-model' },
    { label: 'Florida', subtitle: 'Market-specific path', href: '/florida' },
    { label: 'Economics', subtitle: 'Why sharing matters', href: '/story/why-it-can-work' },
    { label: 'Launch Approach', subtitle: 'From interest to opening', href: '/start-a-community' },
  ],
  roleIntro: 'Every community is unique. Find the path that fits your perspective.',
  roles: [
    { label: 'Pastor / Church Leader', href: '/pastors' },
    { label: 'Parent / Family', href: '/parents' },
    { label: 'Christian School Leader', href: '/christian-schools' },
    { label: 'Homeschool Community', href: '/homeschool' },
    { label: 'Denomination / Network', href: '/denominations' },
  ],
  conversationHeading: 'Start a conversation.',
  conversationBody: 'Share your context and begin with the question that matters most to your community.',
  ctaLabel: 'Start a conversation',
  closing: 'Greater access. Stronger communities. Brighter tomorrows.',
}

export const roleDoorways = {
  pastors: {
    eyebrow: 'For Pastors & Church Leaders',
    heading: 'Your church already knows these families. What if it could serve them throughout the week?',
    intro:
      'Your church already invests deeply in children, teenagers, and families. For many of those families, Christian education can still mean going farther, paying more, or simply going without.',
    refrain: 'Christian education could become part of how your church serves families all week.',
    body:
      'This is not simply about using church facilities differently. It is about creating another way for the church to invest deeply in the next generation.',
    concern:
      'CAN is designed to help churches serve students without asking every church to build and operate an entire school on its own.',
    secondaryCta: 'Talk with us about your church',
    audience: 'pastor',
    image: '/images/05_rooted_locally_community.png',
    imageAlt: 'Students and adults learning together in a church community',
    imagePosition: '52% 46%',
    imagePositionMobile: '50% 44%',
    visualVariant: 'pastor',
  },
  parents: {
    eyebrow: 'For Parents',
    heading: 'What if your child did not have to choose between close community and bigger opportunities?',
    intro:
      'You may be looking for a place where your child is known, challenged academically, formed in faith, surrounded by meaningful relationships, and prepared for what comes next.',
    refrain:
      'You should not have to choose between a school that knows your child well and one that gives them room to grow.',
    body:
      'CAN is designed to bring those priorities together in a school experience that stays personal while connecting students to a broader world of teachers, courses, relationships, and opportunities.',
    concern:
      'CAN is designed to combine intentional academics, real local community, and access to a broader school network.',
    secondaryCta: 'Talk with us about your child',
    audience: 'parent',
    image: '/images/06_student_experience_portrait.png',
    imageAlt: 'A student looking ahead with confidence',
    imagePosition: '48% 42%',
    imagePositionMobile: '48% 38%',
    visualVariant: 'parent',
  },
  christianSchools: {
    eyebrow: 'For Christian School Leaders',
    heading: 'What if eighth grade did not have to be the end?',
    intro:
      'Your families may already be asking what comes after eighth grade. Extending into high school can open new possibilities, but it is not as simple as adding another grade.',
    refrain: 'Give your families a path to continue with you.',
    body:
      'A larger high school without becoming a large school. CAN can help extend what your school already does well into the high-school years.',
    concern:
      'CAN is meant to extend what your school already does well, not replace its culture or identity.',
    secondaryCta: 'Talk with us about high school expansion',
    audience: 'school-leader',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a local school campus',
    imagePosition: '72% 46%',
    imagePositionMobile: '68% 44%',
    visualVariant: 'school',
  },
  homeschool: {
    eyebrow: 'For Homeschool Families',
    heading: 'You chose a more personal education for a reason.',
    intro:
      'As students grow, they may want more teachers, subjects, activities, peers, and support. CAN is designed to expand their world without asking families to give up the flexibility, involvement, and relationships they value.',
    refrain: 'Keep what you value. Add what high school asks for.',
    body:
      'More options do not have to mean less flexibility. CAN can expand what is available without replacing the family involvement and relationships that made homeschooling work for you.',
    concern:
      'CAN is meant to add options while preserving the flexibility and family involvement you value.',
    secondaryCta: 'Talk with us about your family',
    audience: 'homeschool',
    image: '/images/03_curriculum_student_study.png',
    imageAlt: 'A student reading and studying',
    imagePosition: '44% 44%',
    imagePositionMobile: '42% 40%',
    visualVariant: 'homeschool',
  },
  denominations: {
    eyebrow: 'For Denominations & Church Networks',
    heading: 'What could your churches make possible together that none should have to build alone?',
    intro:
      'Your network may already have churches, families, trusted leaders, facilities, and relationships across many communities. Some of those communities may have enough students to need Christian education but too few to sustain a conventional standalone high school.',
    refrain: 'A larger education mission can begin with the local churches you already have.',
    body:
      'Together, your churches may be able to offer something no single congregation could build alone.',
    concern:
      'CAN is designed to help churches do more together without erasing what should remain local.',
    secondaryCta: 'Talk with us about your church network',
    audience: 'denomination',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a contemporary church and school community',
    imagePosition: '74% 46%',
    imagePositionMobile: '68% 44%',
    visualVariant: 'denomination',
  },
} as const

export const brandTagline = 'Communities. Learners. Brighter futures.'
