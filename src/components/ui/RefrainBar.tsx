import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getNextSlug, withPartnerContext } from '../../lib/nav'
import { navSlugs } from '../../data/pageContent'

const PAGE_LABELS: Record<(typeof navSlugs)[number], string> = {
  stakes: 'The Stakes',
  possibility: 'The Possibility',
  curriculum: 'The Curriculum',
  platform: 'The Platform',
  'rooted-locally': 'Rooted Locally',
  'student-experience': 'The Student Experience',
  'why-it-can-work': 'Why It Can Work',
  'explore-can': 'Explore CAN',
}

function getStoryPath(slug: (typeof navSlugs)[number]) {
  return slug === 'explore-can' ? '/story/explore-can' : `/story/${slug}`
}

export function NextStoryLink({
  current,
  dark = false,
}: {
  current: (typeof navSlugs)[number]
  dark?: boolean
}) {
  const location = useLocation()
  const next = getNextSlug(current)
  if (!next) return null

  const nextIndex = navSlugs.indexOf(next) + 1
  return (
    <Link
      to={withPartnerContext(getStoryPath(next), location.search)}
      className={`next-story-link${dark ? ' next-story-link-dark' : ''}`}
    >
      <span className="next-story-label">
        <span>NEXT</span>
        <span>{String(nextIndex).padStart(2, '0')} / {PAGE_LABELS[next]}</span>
      </span>
      <span className="next-story-arrow" aria-hidden="true">
        <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
      </span>
    </Link>
  )
}

export function RefrainBar({
  text,
  transition,
  current,
  dark = false,
}: {
  text: string
  transition?: string
  current: (typeof navSlugs)[number]
  dark?: boolean
}) {
  return (
    <div
      className={`mt-8 flex items-center justify-between gap-5 px-1 py-5 ${
        dark ? 'bg-navy-950 px-5 text-white' : 'text-navy-950'
      }`}
    >
      <div className="max-w-3xl">
        <p className="font-serif text-lg leading-snug sm:text-xl">{text}</p>
        {transition && <p className={`mt-2 text-xs leading-relaxed sm:text-sm ${dark ? 'text-white/75' : 'text-navy-600'}`}>{transition}</p>}
      </div>
      <NextStoryLink current={current} dark={dark} />
    </div>
  )
}
