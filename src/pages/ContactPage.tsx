import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { partnerIds, withPartnerContext } from '../lib/nav'
import { trackEvent } from '../lib/analytics'
import { validatedContactContext, journeyHref } from '../lib/engagement'

const AUDIENCE_LABELS: Record<string, string> = {
  parent: 'Parents',
  teacher: 'Prospective teachers',
  pastor: 'Pastors and church leaders',
  'school-leader': 'Christian school leaders',
  homeschool: 'Homeschool families',
  denomination: 'Denominations and church networks',
}

const AUDIENCE_PROMPTS: Record<string, string> = {
  parent: 'Is CAN potentially right for your child and family?',
  teacher: 'What teaching opportunities or instructional roles would you like to understand?',
  pastor: 'Could your church responsibly host or participate in a CAN Academy?',
  'school-leader': 'Could CAN expand your school\'s educational capacity?',
  homeschool: 'How might your family or homeschool community participate?',
  denomination: 'Could CAN support a network pilot across your churches?',
}

const PARTNER_LABELS: Record<(typeof partnerIds)[number], string> = {
  'the-journey-church': 'The Journey Church',
  cogic: 'Church of God in Christ',
  cogbf: 'Church of God by Faith',
}

const TOPIC_LABELS: Record<string, string> = {
  academics: 'Academics',
  'partnership-model': 'Partnership Model',
  florida: 'Florida',
  'launch-approach': 'Launch Approach',
  evidence: 'Evidence Library',
  privacy: 'Privacy',
  accessibility: 'Accessibility',
  terms: 'Website terms',
  accountability: 'Trust & Accountability',
  locations: 'Locations & Launch',
  'school-partnership': 'Church school partnership',
  economics: 'School economics and funding',
  'launch-readiness': 'School launch readiness',
  'teacher-recruitment': 'Teacher recruitment interest',
  'teacher-qualifications': 'Teacher roles and qualifications',
  'family-admissions': 'Family admissions questions',
  'school-expansion': 'School expansion',
  'expansion-feasibility': 'School expansion feasibility',
  'network-pilot': 'Church network pilot',
  'network-leadership': 'Network leadership conversation',
  difference: 'How CAN Is Different',
}

export function ContactPage() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const { journey, choice, context } = validatedContactContext(location.search)
  const audience = searchParams.get('audience') ?? ''
  const topic = searchParams.get('topic') ?? ''
  const partner = partnerIds.find((id) => id === searchParams.get('partner')) ?? ''
  const state = searchParams.get('state') ?? ''
  const audienceLabel = audience ? AUDIENCE_LABELS[audience] : undefined
  const audiencePrompt = audience ? AUDIENCE_PROMPTS[audience] : undefined
  const topicLabel = topic ? TOPIC_LABELS[topic] : undefined
  const partnerLabel = partner ? PARTNER_LABELS[partner] : undefined
  const conversationLabel = choice?.title ?? partnerLabel ?? audienceLabel ?? topicLabel
  const stateLabel = state ? state.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : undefined

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    trackEvent('contact_submit', { context: conversationLabel ?? 'general' })

    const form = event.currentTarget
    const data = new FormData(form)
    data.set('form-name', 'can-contact')
    const encoded = new URLSearchParams()
    data.forEach((value, key) => encoded.append(key, String(value)))

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')
      setStatus('success')
      form.reset()
      trackEvent('contact_success', { context: conversationLabel ?? 'general' })
    } catch {
      setStatus('error')
      trackEvent('contact_error', { context: conversationLabel ?? 'general' })
    }
  }

  return (
    <article className="contact-page">
      <div className="contact-intro">
        <p className="destination-eyebrow">Start a conversation</p>
        <h1 className="editorial-heading">Tell us what you are exploring.</h1>
        <p>Share your context and the question that matters most. A member of the CAN Academy team can follow up from there.</p>
        {journey && <p className="contact-context">You are exploring: <strong>{journey.audience}</strong>. Your message is a request for conversation, not a completed application or school-launch commitment.</p>}
        {conversationLabel && <p className="contact-context">Conversation context: <strong>{conversationLabel}</strong>{stateLabel ? <> · {stateLabel}</> : null}</p>}
        {audiencePrompt && <p className="contact-audience-prompt">{audiencePrompt}</p>}
      </div>

      {status === 'success' ? (
        <section className="contact-success" role="status">
          <CheckCircle2 aria-hidden="true" />
          <h2>Thank you.</h2>
          <p>Your message was submitted. The CAN Academy team can follow up using the email address you provided.</p>
          <Link to={journey ? journeyHref(`/next/${journey.id}`, location.search) : withPartnerContext('/story/explore-can', location.search)}>Continue exploring CAN</Link>
        </section>
      ) : (
        <form
          className="contact-form"
          name="can-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="can-contact" />
          <input type="hidden" name="audience" value={audience} />
          <input type="hidden" name="topic" value={topic} />
          <input type="hidden" name="partner" value={partner} />
          <input type="hidden" name="state" value={state} />
          <input type="hidden" name="journey" value={journey?.id ?? ''} />
          <input type="hidden" name="intent" value={choice?.id ?? ''} />
          <input type="hidden" name="campaign" value={context.campaign ?? ''} />
          <input type="hidden" name="utm_source" value={context.source ?? ''} />
          <p className="contact-honeypot">
            <label>Do not fill this out: <input name="bot-field" /></label>
          </p>

          <div className="contact-form-grid">
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>

          <label>
            <span>Church, school, organization, or community <small>optional</small></span>
            <input name="organization" type="text" autoComplete="organization" />
          </label>

          <label>
            <span>What are you exploring?</span>
            <textarea name="message" rows={6} required placeholder="Share the context, question, or opportunity you would like to discuss." />
          </label>

          <p className="contact-privacy-note">By submitting this form, you are asking CAN Academy to respond to your inquiry. Please do not include sensitive student records. <Link to="/privacy">Privacy</Link></p>

          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Start the conversation'}
          </button>

          {status === 'error' && (
            <p className="contact-error" role="alert">
              The form could not be submitted. Please try again, or email hello@canacademy.org.
            </p>
          )}
        </form>
      )}
    </article>
  )
}
