import { locationBySlug } from './locationStateData'
export type SocialMeta = {
  title: string
  description: string
  image: string
  imageAlt: string
}

export const DEFAULT_SOCIAL_META: SocialMeta = {
  title: 'CAN Academy | Christian education, closer to home',
  description: 'CAN Academy connects rigorous academics, Christian formation, trusted local communities, and a wider network of opportunity.',
  image: '/images/02_possibility_student_group.png',
  imageAlt: 'A diverse group of students together in a contemporary community.',
}

const META: Record<string, SocialMeta> = {
  '/': DEFAULT_SOCIAL_META,
  '/story/stakes': {
    title: 'The Stakes | CAN Academy',
    description: 'Why too many families are forced to make educational tradeoffs among distance, cost, relevance, and breadth.',
    image: '/images/01_stakes_student_hero.png',
    imageAlt: 'A student looking toward a city skyline.',
  },
  '/story/possibility': {
    title: 'The Possibility | CAN Academy',
    description: 'A model for Christian education closer to home, with strong academics, meaningful relationships, and broader opportunity.',
    image: '/images/02_possibility_student_group.png',
    imageAlt: 'A diverse group of students together.',
  },
  '/story/curriculum': {
    title: 'Curriculum | CAN Academy',
    description: 'Rigorous, standards-aligned academics with intentionally chosen texts, examples, projects, perspectives, and local context.',
    image: '/images/03_curriculum_student_study.png',
    imageAlt: 'A student engaged in focused academic work.',
  },
  '/story/platform': {
    title: 'The Platform | CAN Academy',
    description: 'One connected school system supporting learning, student support, local coordination, and operations across many communities.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a local church and school community.',
  },
  '/story/rooted-locally': {
    title: 'Rooted Locally | CAN Academy',
    description: 'A shared school system can support distinct local communities, leadership, traditions, and relationships.',
    image: '/images/05_rooted_locally_community.png',
    imageAlt: 'Students and trusted adults gathered in a local community.',
  },
  '/story/student-experience': {
    title: 'Student Experience | CAN Academy',
    description: 'Students stay known locally while gaining access to teachers, peers, support, activities, and opportunities across a wider network.',
    image: '/images/06_student_experience_portrait.png',
    imageAlt: 'A student looking ahead with confidence.',
  },
  '/story/why-it-can-work': {
    title: 'Why It Can Work | CAN Academy',
    description: 'How shared teachers, systems, and support can reduce what each local community has to recreate on its own.',
    image: '/images/07_economics_leadership_meeting.png',
    imageAlt: 'Community and education leaders in conversation.',
  },
  '/story/explore-can': {
    title: 'Explore CAN | CAN Academy',
    description: 'Go deeper by topic, start from your role, or begin a conversation about whether CAN could fit your community.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'A diverse group of community leaders in conversation.',
  },
  '/student-experience': {
    title: 'Student Experience | CAN Academy',
    description: 'The reach of a larger school. The relationships of a local community.',
    image: '/images/06_student_experience_portrait.png',
    imageAlt: 'A student looking ahead with confidence.',
  },
  '/academics': {
    title: 'Academics | CAN Academy',
    description: 'Explore CAN courses, learning, academic support, assessment, records, pathways, and readiness over time.',
    image: '/images/03_curriculum_student_study.png',
    imageAlt: 'A student engaged in focused academic work.',
  },
  '/partnership-model': {
    title: 'Partnership Model | CAN Academy',
    description: 'See what local communities bring, what CAN provides, and what remains local in a CAN partnership.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'Community leaders discussing a shared opportunity.',
  },
  '/florida': {
    title: 'Florida Opportunity | CAN Academy',
    description: 'Explore why Florida is the first proving ground for CAN Academy and the research behind potential pilot markets.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a local church and school community.',
  },
  '/economic-breakthrough': {
    title: 'Economics | CAN Academy',
    description: 'How shared capabilities, existing local infrastructure, and available education funding can change the economics of Christian education.',
    image: '/images/07_economics_leadership_meeting.png',
    imageAlt: 'Community and education leaders in conversation.',
  },
  '/launch-approach': {
    title: 'Launch Approach | CAN Academy',
    description: 'Discover, Validate, Design, Build, Launch, Measure: the disciplined path from opportunity to operation.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'Community leaders discussing a shared opportunity.',
  },
  '/accountability': {
    title: 'Trust & Accountability | CAN Academy',
    description: 'See how CAN approaches academic standards, student safety, visible progress, shared responsibility, and site readiness.',
    image: '/images/03_curriculum_student_study.png',
    imageAlt: 'A student engaged in academic work.',
  },
  '/locations': {
    title: 'Locations & Launch | CAN Academy',
    description: 'See which CAN markets are in development and which are still being explored.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a local church and school community.',
  },
  '/evidence': {
    title: 'Evidence Library | CAN Academy',
    description: 'Research, data, sources, assumptions, and open questions behind the CAN model.',
    image: '/images/07_economics_leadership_meeting.png',
    imageAlt: 'Education and community leaders reviewing an opportunity together.',
  },
  '/how-can-is-different': {
    title: 'How CAN Is Different | CAN Academy',
    description: 'See where CAN fits between traditional private school, online school, homeschool, and public school—and why the combination matters.',
    image: '/images/02_possibility_student_group.png',
    imageAlt: 'A diverse group of students together in a contemporary community.',
  },
  '/faq': {
    title: 'FAQ | CAN Academy',
    description: 'Practical questions for families, churches, schools, homeschool communities, and church networks exploring CAN Academy.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'A diverse group of community leaders in conversation.',
  },
  '/leadership': {
    title: 'Team & Leadership | CAN Academy',
    description: 'Meet the founding leadership behind CAN Academy’s academic model, platform, partnerships, and operating system.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'A diverse group of community leaders in conversation.',
  },
  '/parents': {
    title: 'For Parents | CAN Academy',
    description: 'Explore a school experience designed to keep students known locally while expanding academic and future opportunities.',
    image: '/images/roles/01_families.png',
    imageAlt: 'A parent considering educational possibilities for a student.',
  },
  '/pastors': {
    title: 'For Pastors & Church Leaders | CAN Academy',
    description: 'Explore a proposed CAN church-hosted academy: shared school infrastructure and compensation for agreed local hosting services, subject to partnership terms.',
    image: '/images/roles/02_churches_ministries.png',
    imageAlt: 'Church and ministry leaders in conversation.',
  },
  '/christian-schools': {
    title: 'For Christian School Leaders | CAN Academy',
    description: 'Explore how CAN could help extend what a Christian school already does well into the high-school years.',
    image: '/images/roles/03_school_leaders.png',
    imageAlt: 'Christian school leaders considering opportunities for students.',
  },
  '/homeschool': {
    title: 'For Homeschool Families | CAN Academy',
    description: 'Explore how CAN can add teachers, courses, peers, and support while preserving family involvement and flexibility.',
    image: '/images/roles/04_coops_homeschools.png',
    imageAlt: 'A homeschool community learning together.',
  },
  '/denominations': {
    title: 'For Denominations & Church Networks | CAN Academy',
    description: 'Explore what churches across a network could make possible together without erasing what should remain local.',
    image: '/images/roles/05_denominations_networks.png',
    imageAlt: 'Students outside a contemporary church and school community.',
  },
  '/partners/the-journey-church': {
    title: 'The Journey Church × CAN Academy | A Proposed School Vision',
    description: 'An independent invitation to explore one Christian school community rooted in the mission of The Journey Church and powered by CAN academics.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Illustrative students outside a proposed school community.',
  },
  '/partners/the-journey-church/opportunity': {
    title: 'The Opportunity | The Journey Church × CAN Academy',
    description: 'Why a single, academically rigorous Christian school could provide an additional choice for families in Nassau County.',
    image: '/images/01_stakes_student_hero.png',
    imageAlt: 'Illustrative CAN Academy school image.',
  },
  '/partners/the-journey-church/journey-story': {
    title: 'The Journey Story | The Journey Church × CAN Academy',
    description: 'The Journey\'s founding history, local ministry and community vision behind a proposed education conversation.',
    image: '/images/05_rooted_locally_community.png',
    imageAlt: 'Illustrative CAN Academy school image.',
  },
  '/partners/the-journey-church/academy': {
    title: 'The Proposed Academy | The Journey Church × CAN Academy',
    description: 'Explore one possible grades 6–12 local school community with shared CAN academic resources.',
    image: '/images/02_possibility_student_group.png',
    imageAlt: 'Illustrative CAN Academy school image.',
  },
  '/partners/the-journey-church/student-experience': {
    title: 'Student Experience | The Journey Church × CAN Academy',
    description: 'Recorded academic instruction, live help, local relationships, faith and service in a proposed school week.',
    image: '/images/06_student_experience_portrait.png',
    imageAlt: 'Illustrative CAN Academy school image.',
  },
  '/partners/the-journey-church/how-it-works': {
    title: 'How It Works | The Journey Church × CAN Academy',
    description: 'Distinct responsibilities for The Journey and CAN, local authority, and the school\'s readiness path.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Illustrative CAN Academy school image.',
  },
  '/partners/the-journey-church/founding-partnership': {
    title: 'Economics & Founding Partnership | The Journey Church × CAN Academy',
    description: 'One-campus illustrative economics and a personalized leadership inquiry to explore school feasibility.',
    image: '/images/07_economics_leadership_meeting.png',
    imageAlt: 'Illustrative CAN Academy school image.',
  },
  '/partners/cogic': {
    title: 'COGIC National Academy Proposal | CAN Academy',
    description: 'An independent founding educational partnership proposal for a national COGIC school network, rooted in local church communities and shared academic infrastructure.',
    image: '/images/05_rooted_locally_community.png',
    imageAlt: 'Students and adults gathered in a local school community.',
  },
  '/partners/cogic/legacy': {
    title: 'COGIC Educational Legacy | CAN Academy',
    description: 'The founding legacy of Bishop Charles H. Mason, COGIC\'s educational institutions and the opportunity for a connected K–12 school network.',
    image: '/images/05_rooted_locally_community.png',
    imageAlt: 'COGIC National Academy proposal illustration.',
  },
  '/partners/cogic/national-academy': {
    title: 'COGIC National Academy | CAN Academy',
    description: 'A proposed connected school system with denominational identity, jurisdictional coordination, local church leadership and CAN academic infrastructure.',
    image: '/images/02_possibility_student_group.png',
    imageAlt: 'COGIC National Academy proposal illustration.',
  },
  '/partners/cogic/student-experience': {
    title: 'COGIC Student Experience | CAN Academy',
    description: 'A proposed weekly bishop\'s homeroom, COGIC-approved curriculum, asynchronous academic teaching, live support and local church community.',
    image: '/images/06_student_experience_portrait.png',
    imageAlt: 'COGIC National Academy proposal illustration.',
  },
  '/partners/cogic/how-it-works': {
    title: 'How the COGIC Academy Could Work | CAN Academy',
    description: 'From one-hour school configuration to team invitation, family recruitment, readiness and school operations through CAN.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'COGIC National Academy proposal illustration.',
  },
  '/partners/cogic/economics': {
    title: 'COGIC Academy Economics | CAN Academy',
    description: 'Interactive illustrative school-network economics with clear costs, assumptions and no promises of church distributions.',
    image: '/images/07_economics_leadership_meeting.png',
    imageAlt: 'COGIC National Academy proposal illustration.',
  },
  '/partners/cogic/academics': {
    title: 'Academic Excellence & COGIC Scholars | CAN Academy',
    description: 'Explore a proposed integrated COGIC academic model: rigorous courses, faith and heritage, targeted intervention, acceleration, research and college preparation.',
    image: '/images/03_curriculum_student_study.png',
    imageAlt: 'Student focused on academic learning.',
  },
  '/partners/cogic/founding-partnership': {
    title: 'COGIC Founding Educational Partnership | CAN Academy',
    description: 'A customized proposed ten-church founding cohort, denominational governance, implementation milestones and leadership inquiry.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'COGIC National Academy proposal illustration.',
  },
  '/partners/cogbf': {
    title: 'CAN Academy × Church of God by Faith',
    description: 'Explore a CAN Academy conversation shaped for Church of God by Faith.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'Church and community leaders in conversation.',
  },
}

const PREFIX_META: Array<[string, string]> = [
  ['/student-experience/', '/student-experience'],
  ['/academics/', '/academics'],
  ['/partnership-model/', '/partnership-model'],
  ['/florida/', '/florida'],
  ['/launch-approach/', '/launch-approach'],
  ['/evidence/', '/evidence'],
]

export function getSocialMeta(pathname: string): SocialMeta {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  if (META[clean]) return META[clean]

  if (clean.startsWith('/locations/')) {
    const slug = clean.split('/')[2]
    const state = locationBySlug(slug)
    if (state) {
      return {
        title: `${state.name} | Locations | CAN Academy`,
        description: state.summary,
        image: state.slug === 'florida' ? '/images/04_platform_local_campus.png' : '/images/08_explore_audience_roles.png',
        imageAlt: `CAN Academy location information for ${state.name}.`,
      }
    }
  }

  const prefix = PREFIX_META.find(([needle]) => clean.startsWith(needle))
  return prefix ? META[prefix[1]] : DEFAULT_SOCIAL_META
}

export function socialImageUrl(origin: string, imagePath: string) {
  const params = new URLSearchParams({
    url: imagePath,
    w: '1200',
    h: '630',
    fit: 'cover',
    fm: 'jpg',
    q: '86',
  })
  return `${origin}/.netlify/images?${params.toString()}`
}
