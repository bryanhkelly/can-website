import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getNextSlug } from '../../lib/nav'
import { navSlugs } from '../../data/pageContent'

const PAGE_LABELS: Record<(typeof navSlugs)[number], string> = {
  stakes: 'The Stakes',
  possibility: 'The Possibility',
  curriculum: 'The Curriculum',
  platform: 'The Platform',
  'rooted-locally': 'Rooted Locally',
  'student-experience': 'The Student Experience',
  'why-it-can-work': 'The Economics',
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
  const next = getNextSlug(current)
  if (!next) return null

  const nextIndex = navSlugs.indexOf(next) + 1
  return (
    <Link
      to={getStoryPath(next)}
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
  current,
  dark = false,
}: {
  text: string
  current: (typeof navSlugs)[number]
  dark?: boolean
}) {
  return (
    <div
      className={`mt-8 flex items-center justify-between gap-5 px-1 py-5 ${
        dark ? 'bg-navy-950 px-5 text-white' : 'text-navy-950'
      }`}
    >
      <p className="max-w-3xl font-serif text-lg leading-snug sm:text-xl">{text}</p>
      <NextStoryLink current={current} dark={dark} />
    </div>
  )
}
