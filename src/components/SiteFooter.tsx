import { Link } from 'react-router-dom'
import { brandTagline } from '../data/pageContent'
import { BrandMark } from './ui/BrandMark'

export function SiteFooter() {
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
          <Link
            to="/story/explore-can"
            className="text-sm font-semibold text-gold-400 transition-colors hover:text-gold-500"
          >
            Start a conversation →
          </Link>
        </div>
        <p className="mt-8 text-xs text-navy-400">
          © {new Date().getFullYear()} CAN Academy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
