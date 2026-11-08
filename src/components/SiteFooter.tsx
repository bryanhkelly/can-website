import { Link, useLocation } from 'react-router-dom'
import { brandTagline } from '../data/pageContent'
import { withPartnerContext } from '../lib/nav'
import { BrandMark } from './ui/BrandMark'
import { ShareMenu } from './ShareMenu'

export function SiteFooter() {
  const location = useLocation()
  const isCogicAcademy = location.pathname === '/partners/cogic' || location.pathname.startsWith('/partners/cogic/')
  const isJourneyProposal = location.pathname === '/partners/the-journey-church' || location.pathname.startsWith('/partners/the-journey-church/') || new URLSearchParams(location.search).get('partner') === 'the-journey-church'
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <BrandMark className="h-8 w-8" />
            <span className="text-base font-bold tracking-tight text-white">
              CAN <span className="font-normal text-navy-200">Academy</span>
            </span>
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-navy-200">
            {brandTagline}
          </p>
          <div className="site-footer-links">
            <ShareMenu />
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/accessibility">Accessibility</Link>
            <Link
              to={isCogicAcademy ? '/partners/cogic/founding-partnership' : isJourneyProposal ? '/partners/the-journey-church/founding-partnership#journey-inquiry' : withPartnerContext('/contact', location.search)}
              className="font-semibold text-gold-400 transition-colors hover:text-gold-500"
            >
              {isCogicAcademy ? 'Explore COGIC founding partnership' : isJourneyProposal ? 'Explore Journey founding partnership' : 'Start a conversation'} →
            </Link>
          </div>
        </div>
        <p className="mt-8 text-xs text-navy-400">
          © {new Date().getFullYear()} CAN Academy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
