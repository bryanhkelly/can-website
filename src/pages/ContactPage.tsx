import { FormEvent, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { partnerIds, withPartnerContext } from '../lib/nav'
import { trackEvent } from '../lib/analytics'

const AUDIENCE_LABELS: Record<string, string> = {
  parent: 'Parents',
  pastor: 'Pastors and church leaders',
  'school-leader': 'Christian school leaders',
  homeschool: 'Homeschool families',
  denomination: 'Denominations and church networks',
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
}

export function ContactPage() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const audience = searchParams.get('audience') ?? ''
  const topic = searchParams.get('topic') ?? ''
  const partner = partnerIds.find((id) => id === searchParams.get('partner')) ?? ''
  const audienceLabel = audience ? AUDIENCE_LABELS[audience] : undefined
  const topicLabel = topic ? TOPIC_LABELS[topic] : undefined
  const partnerLabel = partner ? PARTNER_LABELS[partner] : undefined
  const conversationLabel = partnerLabel ?? audienceLabel ?? topicLabel

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    trackEvent('contact_submit', { context: conversationLabel ?? 'general' })

    const form = event.currentTarget
    const data = new FormData(form)
    data.set('form-name', 'can-contact')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(data.entries()).map(([key, value]) => [key, String(value)])).toString(),
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
        {conversationLabel && <p className="contact-context">Conversation context: <strong>{conversationLabel}</strong></p>}
      </div>

      {status === 'success' ? (
        <section className="contact-success" role="status">
          <CheckCircle2 aria-hidden="true" />
          <h2>Thank you.</h2>
          <p>Your message was submitted. The CAN Academy team can follow up using the email address you provided.</p>
          <Link to={withPartnerContext('/story/explore-can', location.search)}>Continue exploring CAN</Link>
        </section>
      ) : (
        <form
          className="contact-form"
          name="can-contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="can-contact" />
          <input type="hidden" name="audience" value={audience} />
          <input type="hidden" name="topic" value={topic} />
          <input type="hidden" name="partner" value={partner} />
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
