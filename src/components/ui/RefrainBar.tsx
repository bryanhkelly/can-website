import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getNextSlug } from '../../lib/nav'
import type { navSlugs } from '../../data/pageContent'

export function RefrainBar({
  text,
  current,
  dark = false,
}: {
  text: string
  current: (typeof navSlugs)[number]
  dark?: boolean
}) {
  const next = getNextSlug(current)

  return (
    <div
      className={`mt-8 flex items-center justify-between gap-5 px-1 py-5 ${
        dark ? 'bg-navy-950 px-5 text-white' : 'text-navy-950'
      }`}
    >
      <p className="max-w-3xl font-serif text-lg leading-snug sm:text-xl">{text}</p>
      {next && (
        <Link
          to={next === 'explore-can' ? '/story/explore-can' : `/story/${next}`}
          aria-label="Next page"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white transition-colors hover:bg-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
        </Link>
      )}
    </div>
  )
}
