import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-navy-500">Start a conversation</p>
      <h1 className="mt-3 text-4xl font-extrabold text-navy-950">Tell us what you are exploring.</h1>
      <p className="mt-5 text-lg leading-relaxed text-navy-700">
        We will start there. Reach out and a member of the CAN Academy team will follow up with you.
      </p>
      <a
        href="mailto:hello@canacademy.org"
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
