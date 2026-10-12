import { Link, useSearchParams } from 'react-router-dom'

const AUDIENCE_LABELS: Record<string, string> = {
  parent: 'Parents',
  pastor: 'Pastors and church leaders',
  'school-leader': 'Christian school leaders',
  homeschool: 'Homeschool families',
  denomination: 'Denominations and church networks',
}

const TOPIC_LABELS: Record<string, string> = {
  academics: 'Academics',
  'partnership-model': 'Partnership Model',
  florida: 'Florida',
  'launch-approach': 'Launch Approach',
  evidence: 'Evidence Library',
  'partner-information': 'Partner information',
}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const audience = searchParams.get('audience')
  const topic = searchParams.get('topic')
  const audienceLabel = audience ? AUDIENCE_LABELS[audience] : undefined
  const topicLabel = topic ? TOPIC_LABELS[topic] : undefined
  const conversationLabel = audienceLabel ?? topicLabel
  const subject = conversationLabel
    ? `CAN Academy conversation: ${conversationLabel}`
    : 'CAN Academy conversation'

  return (
    <article className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-navy-500">Start a conversation</p>
      <h1 className="mt-3 text-4xl font-extrabold text-navy-950">Tell us what you are exploring.</h1>
      <p className="mt-5 text-lg leading-relaxed text-navy-700">
        We will start there. Reach out and a member of the CAN Academy team will follow up with you.
      </p>
      {conversationLabel && (
        <p className="mt-4 text-sm font-semibold text-navy-600">
          Conversation topic: {conversationLabel}
        </p>
      )}
      <a
        href={`mailto:hello@canacademy.org?subject=${encodeURIComponent(subject)}`}
        className="mt-8 inline-flex items-center rounded-md bg-gold-500 px-6 py-3 text-base font-bold text-navy-950 shadow-sm transition-colors hover:bg-gold-600"
      >
        Email the CAN Academy team
      </a>
      <p className="mt-6 text-sm text-navy-500">
        <Link to="/story/explore-can" className="font-semibold text-navy-700 hover:text-navy-900">
          ← Back to Explore CAN
        </Link>
      </p>
    </article>
  )
}
