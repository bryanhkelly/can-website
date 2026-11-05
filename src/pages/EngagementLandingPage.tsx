import { ArrowRight, BookOpen, CircleHelp, LockKeyhole, School, ShieldCheck } from 'lucide-react'
import { Link, useLocation, useParams } from 'react-router-dom'
import {
  engagementJourneyList, getEngagementJourney, verifiedLaunchUrl, type EngagementJourney,
} from '../data/engagementJourneys'
import { contactFromJourney, journeyHref, readEngagementContext } from '../lib/engagement'
import { trackEvent } from '../lib/analytics'

/** Shared experience handoff for verified CAN OS members. This never grants a
 * membership, writes an application or uses the public demo as a destination. */
export function VerifiedExperienceLink({ journey }: { journey: EngagementJourney }) {
  const url = verifiedLaunchUrl(journey)
  if (!journey.launch) return null
  return (
    <aside className="border border-navy-200 bg-white p-6 sm:p-8" aria-label="Existing CAN workspace">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-teal-700">
        <LockKeyhole size={16} aria-hidden="true" /> Existing CAN members
      </div>
      <h3 className="font-serif text-2xl font-medium text-navy-950">Already working with CAN?</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-navy-700">{journey.launch.description}</p>
      {url ? (
        <a className="mt-5 inline-flex min-h-12 items-center gap-2 border border-navy-950 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-navy-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600"
          href={url} onClick={() => trackEvent('engagement_launch_click', { journey: journey.id, access: 'verified' })}>
          {journey.launch.label} <ArrowRight size={17} aria-hidden="true" />
        </a>
      ) : (
        <p className="mt-4 border-l-2 border-navy-200 pl-4 text-sm leading-6 text-navy-600" role="status">
          Direct CAN OS launch access is not enabled from this public website yet.
          Your existing CAN administrator can provide the verified workspace link.
        </p>
      )}
    </aside>
  )
}

function JourneyIndex() {
  const location = useLocation()
  return (
    <article className="mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <p className="text-xs font-bold uppercase tracking-[.16em] text-teal-700">Explore a path with CAN</p>
      <h1 className="editorial-heading mt-4 max-w-4xl text-5xl leading-[1.08] text-navy-950 sm:text-7xl">Every great beginning starts with a possibility.</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-navy-700">
        Whether you're a church leader, an educator, a parent or a school leader, begin with the opportunity that matters to you.
        Each pathway explains what CAN is exploring, what remains to be verified, and how to take an appropriate next step.
      </p>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {engagementJourneyList.map((item, index) => (
          <Link key={item.id} to={journeyHref(`/landing/${item.id}`, location.search)}
            onClick={() => trackEvent('engagement_landing_click', { journey: item.id })}
            className="group flex min-h-52 flex-col justify-between border border-navy-200 bg-white p-7 transition-colors hover:border-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600">
            <span className="text-xs font-bold tracking-widest text-teal-700">{String(index + 1).padStart(2, '0')} / {item.audience}</span>
            <div className="mt-8 flex items-end justify-between gap-5">
              <div>
                <h2 className="font-serif text-3xl leading-tight text-navy-950">{item.headline}</h2>
                <p className="mt-3 text-sm leading-6 text-navy-600">{item.promise}</p>
              </div>
              <ArrowRight size={25} className="shrink-0 text-navy-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </article>
  )
}
export function EngagementLandingPage() {
  const { journeyId } = useParams()
  const journey = getEngagementJourney(journeyId)
  const location = useLocation()
  if (!journey) return <JourneyIndex />
  const context = readEngagementContext(location.search)
  const firstInfo = journey.editorialLinks[0]
  return (
    <article className="bg-cream-50">
      <div className="relative isolate overflow-hidden bg-navy-950 text-white">
        <img src={journey.image} alt={journey.imageAlt} fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-gold-400">{journey.eyebrow}</p>
          <h1 className="editorial-heading mt-7 max-w-4xl text-5xl leading-[1.06] sm:text-7xl">{journey.headline}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream-100">{journey.introduction}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to={contactFromJourney(journey, null, location.search)}
              className="inline-flex min-h-12 items-center gap-2 bg-gold-500 px-6 py-3 font-bold text-navy-950 hover:bg-gold-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
              onClick={() => trackEvent('engagement_contact_click', { journey: journey.id, campaign: context.campaign ?? 'direct' })}>
              Talk with CAN <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to={journeyHref(`/next/${journey.id}`, location.search)}
              className="inline-flex min-h-12 items-center gap-2 border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400">
              Explore next steps <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-cream-100">{journey.promise}</p>
        </section>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.15em] text-teal-700">The experience</p>
            <h2 className="editorial-heading mt-4 max-w-lg text-4xl leading-tight text-navy-950 sm:text-5xl">{journey.overviewTitle}</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-navy-700">Start with understanding. Then decide whether the opportunity is worth exploring with CAN.</p>
            <div className="mt-7 flex items-start gap-3 border-l-2 border-teal-600 pl-4">
              <ShieldCheck size={21} className="shrink-0 text-teal-700" aria-hidden="true" />
              <p className="text-sm leading-7 text-navy-700">{journey.reality}</p>
            </div>
          </div>
          <ol className="grid gap-3">
            {journey.overview.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5 border border-navy-200 bg-white p-6">
                <span className="font-serif text-4xl text-teal-700">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-2xl text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-navy-700">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section className="bg-cream-100">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:py-20">
          <div>
            <BookOpen size={28} className="text-teal-700" aria-hidden="true" />
            <h2 className="editorial-heading mt-4 text-4xl text-navy-950">Explore before you decide.</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-navy-700">These explanations cover the academic model, operating responsibilities and questions that deserve thoughtful answers.</p>
          </div>
          <div className="grid gap-3">
            {journey.editorialLinks.map(item => (
              <Link key={item.href} to={journeyHref(item.href, location.search)}
                className="flex min-h-14 items-center justify-between gap-4 border-b border-navy-200 py-3 text-base font-semibold text-navy-950 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600">
                {item.title}<ArrowRight size={19} className="shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <VerifiedExperienceLink journey={journey} />
        <section className="border border-navy-200 bg-navy-950 p-6 text-white sm:p-8">
          <CircleHelp className="text-gold-400" size={25} aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl">Not ready to commit? You do not have to.</h2>
          <p className="mt-3 text-sm leading-7 text-cream-100">You can ask a question, learn more, or share what concerns you. This public pathway does not create a school, application or employment record.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to={journeyHref(`/next/${journey.id}`, location.search)}
              className="inline-flex min-h-12 items-center gap-2 bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-gold-400">
              Choose a next step <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to={journeyHref(firstInfo.href, location.search)}
              className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
              Keep learning
            </Link>
          </div>
        </section>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <Link to={journeyHref('/landing', location.search)} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-700 underline underline-offset-4">
          <School size={16} aria-hidden="true" /> Explore another CAN pathway
        </Link>
      </div>
    </article>
  )
}
