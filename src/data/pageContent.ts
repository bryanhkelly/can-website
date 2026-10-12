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
  script: 'Together we can.',
  h1: 'Different roles. A shared mission.',
  dek: "Whether you're a parent, community leader, church, co-op, or local organization, there's a place for you in the CAN Academy movement.",
  audiences: [
    { heading: 'For Families', body: 'Learn how CAN Academy can benefit your child.' },
    { heading: 'For Churches & Ministries', body: 'Discover how your church can start a school.' },
    { heading: 'For School Leaders', body: 'Explore partnership opportunities.' },
    { heading: 'For Co-ops & Homeschools', body: 'Bring high-quality academics to your community.' },
  ],
  ctaLabel: 'Start the Conversation →',
  details: {
    deepDives: {
      heading: 'See the details',
      items: ['Curriculum', 'Academics', 'Student Experience', 'Economics', 'Evidence Library'],
    },
    launchPaths: {
      heading: 'See how CAN starts',
      items: ['Partnership Model', 'Starting a CAN Community', 'Florida Launch'],
    },
  },
}

export const brandTagline = 'Communities. Learners. Brighter futures.'
