type SocialMeta = {
  title: string
  description: string
  image: string
  imageAlt: string
}

const DEFAULT_META: SocialMeta = {
  title: 'CAN Academy | Christian education, closer to home',
  description: 'CAN Academy connects rigorous academics, Christian formation, trusted local communities, and a wider network of opportunity.',
  image: '/images/02_possibility_student_group.png',
  imageAlt: 'A diverse group of students together in a contemporary community.',
}

const META: Record<string, SocialMeta> = {
  '/': DEFAULT_META,
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
  '/academics': {
    title: 'Academics | CAN Academy',
    description: 'Explore CAN’s grades 6–12 academic model, teacher network, student support, assessment, records, and pathways.',
    image: '/images/03_curriculum_student_study.png',
    imageAlt: 'A student engaged in focused academic work.',
  },
  '/student-experience': {
    title: 'Student Experience | CAN Academy',
    description: 'The reach of a larger school. The relationships of a local community.',
    image: '/images/06_student_experience_portrait.png',
    imageAlt: 'A student looking ahead with confidence.',
  },
  '/partnership-model': {
    title: 'Partnership Model | CAN Academy',
    description: 'See what local communities bring, what CAN provides, and what remains local in a CAN partnership.',
    image: '/images/08_explore_audience_roles.png',
    imageAlt: 'Community leaders discussing a shared opportunity.',
  },
  '/economic-breakthrough': {
    title: 'Economics | CAN Academy',
    description: 'How shared capabilities and existing local infrastructure can change the economics of Christian education.',
    image: '/images/07_economics_leadership_meeting.png',
    imageAlt: 'Community and education leaders in conversation.',
  },
  '/how-can-is-different': {
    title: 'How CAN Is Different | CAN Academy',
    description: 'See where CAN fits between traditional private school, online school, homeschool, and public school—and why the combination matters.',
    image: '/images/02_possibility_student_group.png',
    imageAlt: 'A diverse group of students together in a contemporary community.',
  },
  '/locations': {
    title: 'Locations & Launch | CAN Academy',
    description: 'See which CAN markets are operating, in development, or still being explored.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a local church and school community.',
  },
  '/florida': {
    title: 'Florida Opportunity | CAN Academy',
    description: 'Explore why Florida is a development market for CAN Academy and the research behind current focus communities.',
    image: '/images/04_platform_local_campus.png',
    imageAlt: 'Students outside a local church and school community.',
  },
  '/accountability': {
    title: 'Trust & Accountability | CAN Academy',
    description: 'See how CAN approaches academic standards, student safety, visible progress, shared responsibility, and site readiness.',
    image: '/images/03_curriculum_student_study.png',
    imageAlt: 'A student engaged in academic work.',
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
}

const STATE_NAMES: Record<string, string> = {
  arizona: 'Arizona',
  arkansas: 'Arkansas',
  florida: 'Florida',
  iowa: 'Iowa',
  oklahoma: 'Oklahoma',
  texas: 'Texas',
  'west-virginia': 'West Virginia',
  nebraska: 'Nebraska',
  'south-dakota': 'South Dakota',
  'north-dakota': 'North Dakota',
  utah: 'Utah',
  louisiana: 'Louisiana',
  'north-carolina': 'North Carolina',
  alabama: 'Alabama',
}

function getMeta(pathname: string): SocialMeta {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  if (META[clean]) return META[clean]

  if (clean.startsWith('/locations/')) {
    const slug = clean.split('/')[2]
    const state = STATE_NAMES[slug]
    if (state) {
      return {
        title: `${state} | Locations | CAN Academy`,
        description: `Explore CAN Academy’s current development status, areas of focus, and partnership opportunities in ${state}.`,
        image: slug === 'florida' ? '/images/04_platform_local_campus.png' : '/images/08_explore_audience_roles.png',
        imageAlt: `CAN Academy location information for ${state}.`,
      }
    }
  }

  if (clean.startsWith('/academics/')) return META['/academics']
  if (clean.startsWith('/student-experience/')) return META['/student-experience']
  if (clean.startsWith('/partnership-model/')) return META['/partnership-model']
  if (clean.startsWith('/florida/')) return META['/florida']
  if (clean.startsWith('/evidence/')) return META['/evidence']

  return DEFAULT_META
}

function socialImageUrl(origin: string, imagePath: string) {
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

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

function replaceTag(html: string, pattern: RegExp, tag: string) {
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', `  ${tag}\n</head>`)
}

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  if (request.method !== 'GET') return context.next()

  const response = await context.next()
  const contentType = response.headers.get('content-type') ?? ''
  if (!contentType.includes('text/html')) return response

  const requestUrl = new URL(request.url)
  const meta = getMeta(requestUrl.pathname)
  const canonical = `${requestUrl.origin}${requestUrl.pathname}`
  const partner = requestUrl.searchParams.get('partner')
  const shareUrl = partner ? `${canonical}?partner=${encodeURIComponent(partner)}` : canonical
  const image = socialImageUrl(requestUrl.origin, meta.image)

  let html = await response.text()

  html = replaceTag(html, /<title>.*?<\/title>/is, `<title>${escapeHtml(meta.title)}</title>`)
  html = replaceTag(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(meta.description)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:type["'][^>]*>/i, '<meta property="og:type" content="website" />')
  html = replaceTag(html, /<meta\s+property=["']og:site_name["'][^>]*>/i, '<meta property="og:site_name" content="CAN Academy" />')
  html = replaceTag(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escapeHtml(shareUrl)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:image:secure_url["'][^>]*>/i, `<meta property="og:image:secure_url" content="${escapeHtml(image)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:image:type["'][^>]*>/i, '<meta property="og:image:type" content="image/jpeg" />')
  html = replaceTag(html, /<meta\s+property=["']og:image:width["'][^>]*>/i, '<meta property="og:image:width" content="1200" />')
  html = replaceTag(html, /<meta\s+property=["']og:image:height["'][^>]*>/i, '<meta property="og:image:height" content="630" />')
  html = replaceTag(html, /<meta\s+property=["']og:image:alt["'][^>]*>/i, `<meta property="og:image:alt" content="${escapeHtml(meta.imageAlt)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:card["'][^>]*>/i, '<meta name="twitter:card" content="summary_large_image" />')
  html = replaceTag(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${escapeHtml(image)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:image:alt["'][^>]*>/i, `<meta name="twitter:image:alt" content="${escapeHtml(meta.imageAlt)}" />`)
  html = replaceTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(canonical)}" />`)

  const headers = new Headers(response.headers)
  headers.delete('content-length')
  headers.set('x-can-social-meta', 'edge')

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}
