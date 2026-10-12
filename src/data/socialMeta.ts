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
    description: 'Explore how Christian education could become part of how a church serves families throughout the week.',
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
    title: 'CAN Academy × The Journey Church',
    description: 'Explore a CAN Academy conversation shaped for The Journey Church.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a local church and school community.',
  },
  '/partners/cogic': {
    title: 'CAN Academy × Church of God in Christ',
    description: 'Explore a CAN Academy conversation shaped for Church of God in Christ.',
    image: '/images/05_rooted_locally_community.png',
    imageAlt: 'Students and trusted adults gathered in a local church community.',
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
