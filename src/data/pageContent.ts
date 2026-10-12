// Copy transcribed from the approved CAN Academy comp set (visual + copy reference).

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
  h1: 'Too many families have to compromise.',
  dek: 'When a community comes together, extraordinary things happen. But today, too many families must choose between strong academics, Christian formation, affordable access, and a real sense of belonging.',
  items: [
    {
      heading: 'Too far',
      body: 'Great schools are often not nearby.',
    },
    {
      heading: 'Too expensive',
      body: 'High-quality private education can be out of reach.',
    },
    {
      heading: 'Too disconnected',
      body: "Many schools don't reflect your faith, culture, and story.",
    },
    {
      heading: 'Too limited in breadth',
      body: "Smaller schools often can't offer the full range of courses and opportunities.",
    },
  ],
  refrain: "Brighter futures shouldn't require compromise.",
  details: {
    example:
      'A family may have a nearby public school with strong programs but not the Christian formation they are seeking, a Christian school that requires a long commute or tuition beyond reach, or a smaller alternative that reflects its values but cannot offer the courses and support a teenager needs.',
    objection:
      'This is not an argument that every existing school has failed. It is an argument that families should have more ways to combine academics, faith, culture, community, opportunity, and affordability.',
  },
}

export const possibilityContent = {
  eyebrowNumber: '02/08',
  eyebrowLabel: 'The Possibility',
  kicker: "What if families didn't have to choose?",
  h1: 'A stronger way forward.',
  dek: 'CAN Academy brings together trusted communities, rigorous academics, and flexible local models, so every child can thrive without compromise.',
  photoCaption: 'Together greater futures',
  items: [
    { heading: 'Rigorous Academics', body: 'Real-world readiness' },
    { heading: 'Christian Formation', body: 'Faith integrated across learning' },
    { heading: 'Meaningful Community', body: 'Belonging and relationships' },
    { heading: 'Greater Access', body: 'High quality at a sustainable cost' },
  ],
  refrain: 'A new model. A stronger generation.',
  details: {
    policy:
      'Across the country, more states are creating or expanding programs that allow eligible families to direct education funding toward approved learning options. Funding alone does not create a great education. Families still need strong choices.',
    example:
      'A family may be able to use an available scholarship to join a CAN Community close to home while accessing teachers, courses, and support from the wider CAN network.',
    objection:
      'CAN is not one perfect format for every family. It is another path that families and trusted communities can use in ways that fit their circumstances.',
  },
}

export const curriculumContent = {
  eyebrowNumber: '03/08',
  eyebrowLabel: 'The Curriculum',
  kicker: 'Academics with purpose',
  h1: 'Rigorous learning. Real life impact.',
  dek: 'CAN Academy delivers a high-quality, Christ-centered education grounded in proven standards and brought to life through engaging, relevant, and culturally responsive content.',
  layers: [
    { heading: 'Local Distinctives', body: 'Community, culture, and unique offerings' },
    { heading: 'Christian Worldview', body: 'Faith integrated across subjects' },
    { heading: 'High-Quality Content', body: 'Engaging, diverse, and relevant' },
    { heading: 'Proven Standards', body: 'Built for real-world readiness' },
  ],
  example: {
    label: 'Real Example',
    title: 'English 10',
    bookTitle: 'Humanity & Hope',
    checklist: ['Diverse voices', 'Meaningful discussion', 'Real-world application', 'Faith-informed perspective'],
  },
  refrain: 'More than a class. A foundation for life.',
  details: {
    credibility:
      "CAN's academic leadership combines years of classroom experience with advanced academic training, while licensed educators lead course design with input from experienced paraeducators and local church leaders.",
    example:
      "English 10 can still teach literary analysis, argument, research, composition, and rhetoric while intentionally including Christian authors, Black authors, global voices, texts reflecting students' cultural traditions, and community-connected assignments.",
    objection:
      'Academic rigor does not disappear when curriculum becomes more intentional. The standards remain; CAN makes deliberate choices about the voices, examples, projects, and perspectives used to teach them.',
  },
}

export const platformContent = {
  eyebrowNumber: '04/08',
  eyebrowLabel: 'The Platform',
  kicker: 'One system. Many places.',
  h1: 'A powerful platform for local schools.',
  dek: 'The CAN platform provides everything needed to launch and operate a high-quality school, from academics to operations, so local communities can focus on what they do best: people.',
  osLabel: 'CAN OS',
  osWelcome: 'Welcome. Building brighter futures together.',
  layers: [
    { heading: 'Learning & Curriculum', body: 'Courses, content, assessment' },
    { heading: 'Student Support', body: 'Advising, mentoring, tools' },
    { heading: 'Local Coordination', body: 'Scheduling, community, partners' },
    { heading: 'School Operations', body: 'Enrollment, records, compliance' },
  ],
  communityTypes: ['Churches', 'Homes / Homeschools', 'Co-ops', 'K-8 Schools', 'Small Private Schools'],
  refrain: 'Different communities. One trusted system.',
  details: {
    credibility:
      "CAN's technology is led by a former Microsoft senior leader with enterprise platform experience, helping build CAN as one connected school rather than a collection of disconnected tools.",
    example:
      'A CAN Teacher can post an assignment, a student can complete it from a church-hosted site, an Academic Coach can see the same progress data, and the local Site Leader can manage attendance through the same system.',
    objection:
      'An LMS manages coursework. CAN also connects the people, support, records, and local operations required for one school to work across many communities.',
  },
}

export const rootedLocallyContent = {
  eyebrowNumber: '05/08',
  eyebrowLabel: 'Rooted Locally',
  kicker: 'Built together. For what matters.',
  h1: 'Your community. Your school.',
  dek: 'Every CAN Academy is uniquely local, reflecting the people, values, and aspirations of the community it serves, with the strength of a shared platform behind it.',
  columns: [
    {
      heading: 'Community Brings',
      accent: 'green',
      items: ['Local leadership', 'Facilities and support', 'Community relationships', 'Unique opportunities'],
    },
    {
      heading: 'CAN Brings',
      accent: 'navy',
      items: ['Proven academics', 'Trained teachers', 'Student support systems', 'Operations and tools'],
    },
    {
      heading: 'What Stays Local',
      accent: 'gold',
      items: ['Your culture', 'Your distinctives', 'Your students', 'Your mission'],
    },
  ],
  refrain: 'Same high quality. A stronger tomorrow.',
  details: {
    localFormVaries:
      'CAN may take different local forms, including a church, an existing school, a co-op, or another trusted community, while operating through the same shared school foundation.',
    objection:
      'Shared academics and systems do not require shared worship, ministry culture, traditions, or local identity.',
  },
}

export const studentExperienceContent = {
  eyebrowNumber: '06/08',
  eyebrowLabel: 'The Student Experience',
  kicker: 'Known. Connected. Prepared.',
  h1: 'A place to belong. A future to build.',
  dek: 'At CAN Academy, students receive a high-quality education in a supportive, Christ-centered environment, with real relationships, real opportunities, and real preparation for life.',
  rings: [
    { heading: 'Expanded Nationally', body: 'A larger network for college, career, and life' },
    { heading: 'Connected Regionally', body: 'Access to expanded opportunities' },
    { heading: 'Known Locally', body: 'A close-knit community' },
  ],
  weekLabel: 'A typical week might include',
  week: ['Live Classes', 'Study Groups', 'Mentorship', 'Activities & Clubs', 'Worship', 'Service'],
  refrain: 'Confident learners. Compassionate leaders. Stronger communities.',
  details: {
    vignette:
      'On a live-session day, a student might begin with a CAN Teacher, work alongside local peers with a Room Facilitator nearby, meet with an Academic Coach when a course gets difficult, and later connect with a Small Group Leader or Counselor who knows the student beyond the gradebook.',
    objection: 'A small local school should not mean a small student world.',
  },
}

export const economicsContent = {
  eyebrowNumber: '07/08',
  eyebrowLabel: 'The Economics',
  kicker: 'Greater impact. Smarter use of resources.',
  h1: 'High quality, real value.',
  dek: 'By sharing a common platform, CAN Academy helps communities deliver exceptional education at a lower cost, without compromising quality.',
  oldWay: {
    heading: 'The Old Way',
    subheading: 'Each school duplicates everything',
    items: ['Curriculum', 'Teachers', 'Technology', 'Student Support', 'Administration', 'Compliance'],
    outcome: 'Many schools. High cost. Inconsistent quality. Hard to sustain.',
  },
  canWay: {
    heading: 'The CAN Way',
    subheading: 'CAN Academy Shared Platform',
    outcome: 'Many communities. Lower cost. Higher quality. Built for long-term impact.',
  },
  fundingLabel: 'Funding can make it possible',
  funding: [
    { heading: 'Choice programs', body: 'ESAs, scholarships, and more' },
    { heading: 'Grants & partnerships', body: 'By state and organization' },
    { heading: 'Community investment', body: 'Local support and goodwill' },
  ],
  refrain: 'A stronger return, for students, for communities, for generations.',
  details: {
    example:
      'Instead of each community separately building curriculum, hiring every specialist, buying every system, and recreating every administrative function, CAN shares more of that capacity across the network.',
    objection:
      'Sharing does not make costs disappear. It changes how much each local community has to recreate on its own.',
    disclaimer:
      "CAN's objective is to reduce or eliminate out-of-pocket tuition for qualifying families wherever possible. Eligibility, funding levels, fees, transportation, and local operating costs vary by market.",
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
    image: '/images/community-network.png',
    imageAlt: 'Church and community leaders sharing a conversation outdoors',
    visualVariant: 'denomination',
  },
} as const

export const brandTagline = 'Communities. Learners. Brighter futures.'
