import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brandTagline, navSlugs } from '../data/pageContent'
import { withPartnerContext } from '../lib/nav'
import { BrandMark } from './ui/BrandMark'

export function SiteHeader() {
  const location = useLocation()
  const labels = ['Stakes', 'Possibility', 'Curriculum', 'Platform', 'Rooted Locally', 'Student Experience', 'Why It Can Work', 'Explore CAN']
  const [storyOpen, setStoryOpen] = useState(false)
  const currentIndex = navSlugs.findIndex((slug) => location.pathname === `/story/${slug}`)
  const currentLabel = currentIndex >= 0 ? labels[currentIndex] : 'Explore CAN'

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
      <div className="story-mobile-shell sm:hidden">
        <button
          type="button"
          className="story-mobile-toggle"
          aria-expanded={storyOpen}
          aria-controls="mobile-story-nav"
          onClick={() => setStoryOpen((open) => !open)}
        >
          <span>{currentIndex >= 0 ? `${String(currentIndex + 1).padStart(2, '0')} / 08 · ${currentLabel}` : 'CAN story'}</span>
          {storyOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        {storyOpen && (
          <nav id="mobile-story-nav" className="story-mobile-menu" aria-label="CAN story pages">
            {navSlugs.map((slug, i) => (
              <NavLink
                key={slug}
                to={withPartnerContext(`/story/${slug}`, location.search)}
                onClick={() => setStoryOpen(false)}
                className={({ isActive }) => isActive ? 'is-active' : ''}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                <strong>{labels[i]}</strong>
              </NavLink>
            ))}
          </nav>
        )}
      </div>
      <nav
        className="mx-auto hidden max-w-7xl flex-wrap justify-center gap-1 px-6 pb-2.5 sm:flex"
        aria-label="CAN story pages"
      >
        {navSlugs.map((slug, i) => (
          <NavLink
            key={slug}
            to={withPartnerContext(`/story/${slug}`, location.search)}
            aria-label={`${i + 1}. ${labels[i]}`}
            title={`${i + 1}. ${labels[i]}`}
            className={({ isActive }) =>
              `flex min-h-8 shrink-0 items-center justify-center gap-1.5 rounded-full px-2.5 text-[0.68rem] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 ${
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
