import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT_TITLE = 'CAN Academy | Communities. Learners. Brighter futures.'
const DEFAULT_DESCRIPTION = 'CAN Academy connects rigorous academics, Christian formation, trusted local communities, and a wider network of opportunity.'

const META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'CAN Academy | Christian education, closer to home',
    description: DEFAULT_DESCRIPTION,
  },
  '/story/stakes': {
    title: 'The Stakes | CAN Academy',
    description: 'Why too many families are forced to make educational tradeoffs among distance, cost, relevance, and breadth.',
  },
  '/story/possibility': {
    title: 'The Possibility | CAN Academy',
    description: 'A model for Christian education closer to home, with strong academics, meaningful relationships, and broader opportunity.',
  },
  '/story/curriculum': {
    title: 'Curriculum | CAN Academy',
    description: 'Rigorous, standards-aligned academics with intentionally chosen texts, examples, projects, perspectives, and local context.',
  },
  '/story/platform': {
    title: 'The Platform | CAN Academy',
    description: 'One connected school system supporting learning, student support, local coordination, and operations across many communities.',
  },
  '/story/rooted-locally': {
    title: 'Rooted Locally | CAN Academy',
    description: 'A shared school system can support distinct local communities, leadership, traditions, and relationships.',
  },
  '/story/student-experience': {
    title: 'Student Experience | CAN Academy',
    description: 'Students stay known locally while gaining access to teachers, peers, support, activities, and opportunities across a wider network.',
  },
  '/story/why-it-can-work': {
    title: 'Why It Can Work | CAN Academy',
    description: 'How shared teachers, systems, and support can reduce what each local community has to recreate on its own.',
  },
  '/story/explore-can': {
    title: 'Explore CAN | CAN Academy',
    description: 'Go deeper by topic, start from your role, or begin a conversation about whether CAN could fit your community.',
  },
  '/academics': {
    title: 'Academics | CAN Academy',
    description: 'Explore CAN courses, learning, academic support, assessment, records, and readiness over time.',
  },
  '/partnership-model': {
    title: 'Partnership Model | CAN Academy',
    description: 'See what local communities bring, what CAN provides, and what remains local in a CAN partnership.',
  },
  '/parents': {
    title: 'For Parents | CAN Academy',
    description: 'Explore a school experience designed to keep students known locally while expanding academic and future opportunities.',
  },
  '/pastors': {
    title: 'For Pastors & Church Leaders | CAN Academy',
    description: 'Explore how Christian education could become part of how a church serves families throughout the week.',
  },
  '/christian-schools': {
    title: 'For Christian School Leaders | CAN Academy',
    description: 'Explore how CAN could help extend what a Christian school already does well into the high-school years.',
  },
  '/homeschool': {
    title: 'For Homeschool Families | CAN Academy',
    description: 'Explore how CAN can add teachers, courses, peers, and support while preserving family involvement and flexibility.',
  },
  '/denominations': {
    title: 'For Denominations & Church Networks | CAN Academy',
    description: 'Explore what churches across a network could make possible together without erasing what should remain local.',
  },
  '/florida': {
    title: 'Florida | CAN Academy',
    description: 'Florida-specific CAN Academy information and a path to ask questions about the market.',
  },
  '/start-a-community': {
    title: 'Launch Approach | CAN Academy',
    description: 'Explore the stages from initial interest through readiness, planning, preparation, launch, and growth.',
  },
  '/evidence': {
    title: 'Evidence Library | CAN Academy',
    description: 'The destination for research, policy, academic, and operating evidence behind the CAN model.',
  },
  '/partners/the-journey-church': {
    title: 'CAN Academy × The Journey Church',
    description: 'Explore a CAN Academy conversation shaped for The Journey Church.',
  },
  '/partners/cogic': {
    title: 'CAN Academy × Church of God in Christ',
    description: 'Explore a CAN Academy conversation shaped for Church of God in Christ.',
  },
  '/partners/cogbf': {
    title: 'CAN Academy × Church of God by Faith',
    description: 'Explore a CAN Academy conversation shaped for Church of God by Faith.',
  },
  '/contact': {
    title: 'Start a Conversation | CAN Academy',
    description: 'Share what you are exploring with the CAN Academy team.',
  },
  '/privacy': {
    title: 'Privacy | CAN Academy',
    description: 'Privacy information for the CAN Academy public website.',
  },
  '/accessibility': {
    title: 'Accessibility | CAN Academy',
    description: 'CAN Academy website accessibility information and contact details.',
  },
  '/terms': {
    title: 'Terms | CAN Academy',
    description: 'Terms for use of the CAN Academy public website.',
  },
}

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null
  if (!element) {
    element = selector.startsWith('link')
      ? document.createElement('link')
      : document.createElement('meta')
    if (selector.includes('description')) element.setAttribute('name', 'description')
    if (selector.includes('og:title')) element.setAttribute('property', 'og:title')
    if (selector.includes('og:description')) element.setAttribute('property', 'og:description')
    if (selector.includes('og:url')) element.setAttribute('property', 'og:url')
    if (selector.includes('og:type')) element.setAttribute('property', 'og:type')
    if (selector.includes('og:image')) element.setAttribute('property', 'og:image')
    if (selector.startsWith('link')) element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute(attribute, value)
}

export function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const meta = META[location.pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    }
    const canonical = `${window.location.origin}${location.pathname}`
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[property="og:image"]', 'content', `${window.location.origin}/images/08_explore_audience_roles.png`)
    setMeta('link[rel="canonical"]', 'href', canonical)
  }, [location.pathname])

  return null
}
