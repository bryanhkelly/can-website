import { Link, NavLink } from 'react-router-dom'
import { brandTagline, navSlugs } from '../data/pageContent'
import { BrandMark } from './ui/BrandMark'

export function SiteHeader() {
  const labels = ['Stakes', 'Possibility', 'Curriculum', 'Platform', 'Local', 'Student', 'Economics', 'Explore']

  return (
    <header className="sticky top-0 z-30 border-b border-navy-100/80 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link to="/" aria-label="CAN Academy home" className="flex shrink-0 items-center gap-2.5">
          <BrandMark />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-navy-950">CAN Academy</span>
            <span className="hidden text-[0.58rem] font-medium text-navy-500 sm:block">Communities. Learners. Brighter futures.</span>
          </span>
        </Link>
        <p className="hidden shrink-0 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-navy-500 xl:block">
          {brandTagline}
        </p>
      </div>
      <nav
        className="mx-auto grid max-w-7xl grid-cols-4 gap-1 px-4 pb-2.5 sm:flex sm:flex-wrap sm:justify-center sm:px-6"
        aria-label="CAN story pages"
      >
        {navSlugs.map((slug, i) => (
          <NavLink
            key={slug}
            to={`/story/${slug}`}
            aria-label={`${i + 1}. ${labels[i]}`}
            title={`${i + 1}. ${labels[i]}`}
            className={({ isActive }) =>
              `flex min-h-11 flex-col items-center justify-center gap-0 rounded-xl px-1 text-[0.65rem] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 sm:min-h-8 sm:shrink-0 sm:flex-row sm:gap-1.5 sm:rounded-full sm:px-2.5 sm:text-[0.68rem] ${
                isActive ? 'bg-navy-900 text-white' : 'text-navy-600 hover:bg-navy-100'
              }`
            }
          >
            <span className="text-[0.6rem] opacity-65">{String(i + 1).padStart(2, '0')}</span>
            <span>{labels[i]}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
