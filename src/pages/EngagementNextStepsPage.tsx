import { useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getEngagementJourney, type JourneyChoice } from '../data/engagementJourneys'
import { contactFromJourney, journeyHref, readEngagementContext } from '../lib/engagement'
import { trackEvent } from '../lib/analytics'
import { VerifiedExperienceLink } from './EngagementLandingPage'

export function EngagementNextStepsPage() {
  const { journeyId } = useParams()
  const journey = getEngagementJourney(journeyId)
  const location = useLocation()
  const [selection, setSelection] = useState('')
  const [feedback, setFeedback] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  if (!journey) {
    return <article className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
      <h1 className="editorial-heading text-5xl text-navy-950">Find your next step with CAN.</h1>
      <p className="mt-5 text-lg text-navy-700">Choose the opportunity you want to explore.</p>
      <Link to="/landing" className="mt-7 inline-flex items-center gap-2 font-semibold underline">
        Explore the pathways <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </article>
  }
  const context = readEngagementContext(location.search)
  const choice: JourneyChoice | undefined = journey.next.choices.find(item => item.id === selection)
  const following = choice?.action === 'information' && choice.href
    ? journeyHref(choice.href, location.search)
    : choice?.action === 'conversation'
      ? contactFromJourney(journey, choice, location.search)
      : null

  async function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting' || !choice || choice.action !== 'feedback' ||
      feedback.trim().length < 10 || feedback.trim().length > 1500) return
    setStatus('submitting')
    trackEvent('engagement_feedback_submit', { journey: journey.id })
    const form = event.currentTarget
    const data = new FormData(form)
    data.set('form-name', 'can-engagement-feedback')
    const encoded = new URLSearchParams()
    data.forEach((value, key) => encoded.append(key, String(value)))
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })
      if (!response.ok) throw new Error('Could not submit feedback')
      setStatus('success')
      trackEvent('engagement_feedback_success', { journey: journey.id })
    } catch {
      setStatus('error')
      trackEvent('engagement_feedback_error', { journey: journey.id })
    }
  }

  return <article className="min-h-[70vh] bg-cream-50">
    <header className="border-b border-navy-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link to={journeyHref(`/landing/${journey.id}`, location.search)}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-700 hover:text-teal-700">
          <ArrowLeft size={17} aria-hidden="true" /> Back to {journey.audience.toLowerCase()}
        </Link>
        <span className="text-xs font-bold uppercase tracking-[.15em] text-teal-700">Next Steps · {journey.audience}</span>
      </div>
    </header>
    <div className="mx-auto grid max-w-6xl gap-9 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_17rem]">
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-teal-700">Your choice, your pace</p>
        <h1 className="editorial-heading mt-4 max-w-3xl text-5xl leading-[1.08] text-navy-950 sm:text-6xl">{journey.next.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-navy-700">{journey.next.description}</p>
        <p className="mt-4 border-l-2 border-gold-500 pl-4 text-sm leading-7 text-navy-600">
          This page helps you choose a direction. It is not confirmation that a school, employment application,
          inquiry, partnership agreement, or admissions application has been created or submitted.
        </p>
        {status === 'success' ? (
          <section role="status" className="mt-10 border border-teal-300 bg-teal-50 p-7">
            <CheckCircle2 size={30} className="text-teal-700" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-3xl text-navy-950">Thank you for your perspective.</h2>
            <p className="mt-3 text-sm leading-7 text-navy-700">Your feedback was submitted without requiring an email address.</p>
            <Link to={journeyHref(`/landing/${journey.id}`, location.search)}
              className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-navy-950 underline">
              Return to your exploration <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </section>
        ) : (
          <section aria-label="Choose an appropriate next step" className="mt-10">
            <fieldset>
              <legend className="font-serif text-3xl text-navy-950">What would you like to do next?</legend>
              <div className="mt-5 grid gap-3">
                {journey.next.choices.map(item => (
                  <label key={item.id} className={`flex min-h-24 cursor-pointer items-start gap-4 border p-5 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-600 ${selection === item.id
                    ? 'border-teal-700 bg-teal-50'
                    : 'border-navy-200 bg-white hover:border-navy-500'}`}>
                    <input type="radio" name="next-step" value={item.id} checked={selection === item.id}
                      onChange={() => { setSelection(item.id); setStatus('idle') }}
                      className="mt-1 size-5 shrink-0 accent-teal-700" />
                    <span className="block min-w-0">
                      <strong className="block font-semibold text-navy-950">{item.title}</strong>
                      <span className="mt-1 block text-sm leading-6 text-navy-600">{item.description}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            {choice?.action === 'feedback' ? (
              <form name="can-engagement-feedback" data-netlify="true" data-netlify-honeypot="bot-field"
                method="POST" onSubmit={event => void submitFeedback(event)}
                className="mt-7 border border-navy-200 bg-white p-6 sm:p-8">
                <input type="hidden" name="form-name" value="can-engagement-feedback" />
                <input type="hidden" name="journey" value={journey.id} />
                <input type="hidden" name="choice" value={choice.id} />
                <input type="hidden" name="campaign" value={context.campaign ?? ''} />
                <input type="hidden" name="source" value={context.source ?? ''} />
                <input type="hidden" name="partner" value={context.partner ?? ''} />
                <p className="hidden" aria-hidden="true">
                  <label>Leave this empty <input tabIndex={-1} name="bot-field" autoComplete="off" /></label>
                </p>
                <label htmlFor="engagement-feedback" className="block font-semibold text-navy-950">
                  What excites you, concerns you, or would help make CAN more useful?
                </label>
                <p className="mt-2 text-sm leading-6 text-navy-600">No name or email required. Please do not include children's names, student records or other sensitive personal information.</p>
                <textarea id="engagement-feedback" name="feedback" rows={5} minLength={10} maxLength={1500}
                  required value={feedback} onChange={e => setFeedback(e.target.value)}
                  className="mt-4 w-full border border-navy-300 bg-cream-50 p-4 text-sm leading-7 text-navy-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600" />
                <button type="submit" disabled={status === 'submitting' || feedback.trim().length < 10}
                  className="mt-5 inline-flex min-h-12 items-center gap-2 bg-navy-950 px-6 py-3 font-semibold text-white hover:bg-navy-800 disabled:opacity-40">
                  {status === 'submitting' ? 'Submitting feedback...' : 'Send feedback'}
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                {status === 'error' && <p role="alert" className="mt-3 text-sm font-semibold text-red-800">
                  We could not submit your feedback. Please try again or reach CAN through the contact page.
                </p>}
              </form>
            ) : following ? (
              <Link to={following} onClick={() => trackEvent('engagement_next_choice', { journey: journey.id, choice: choice!.id })}
                className="mt-7 inline-flex min-h-12 items-center gap-2 bg-navy-950 px-6 py-3 font-semibold text-white hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600">
                {choice?.action === 'information' ? 'Explore this topic' : 'Continue to a conversation'}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ) : (
              <p className="mt-6 text-sm text-navy-600">Choose an option to see the next action.</p>
            )}
          </section>
        )}
      </div>
      <aside className="space-y-4 lg:pt-14">
        <div className="bg-navy-950 p-6 text-white">
          <MessageCircle size={26} className="text-gold-400" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl">We're here to talk.</h2>
          <p className="mt-3 text-sm leading-7 text-cream-100">Every good next step starts with understanding the right questions.</p>
          <Link to={contactFromJourney(journey, null, location.search)}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-400 underline underline-offset-4">
            Contact CAN <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="border border-navy-200 bg-white p-6">
          <ShieldCheck size={24} className="text-teal-700" aria-hidden="true" />
          <h3 className="mt-4 font-serif text-2xl text-navy-950">No pressure to decide.</h3>
          <p className="mt-2 text-sm leading-7 text-navy-700">Exploring this opportunity does not create an enrollment offer, employment offer, or school-opening authorization.</p>
        </div>
        {journey.launch && <VerifiedExperienceLink journey={journey} />}
      </aside>
    </div>
  </article>
}
