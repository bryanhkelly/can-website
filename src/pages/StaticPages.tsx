import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PrivacyPage() {
  return (
    <article className="static-page">
      <p className="destination-eyebrow">Privacy</p>
      <h1 className="editorial-heading">Privacy on this website.</h1>
      <p>
        CAN Academy uses information you choose to submit through this public website to respond to your inquiry and continue the conversation you requested.
      </p>
      <h2>Information you submit</h2>
      <p>
        The contact form may ask for your name, email address, organization or community, and the question or context you choose to share.
      </p>
      <h2>Website operations</h2>
      <p>
        The site may use standard hosting, security, performance, and analytics services needed to operate and improve the public website.
      </p>
      <h2>Student information</h2>
      <p>
        This page describes the public website only. It is not a student-records or enrolled-family privacy notice, and the public contact form should not be used to submit sensitive student records.
      </p>
      <h2>Questions</h2>
      <p>
        For a privacy question about this website, contact the CAN Academy team through the conversation page.
      </p>
      <Link to="/contact?topic=privacy" className="destination-primary-link">Contact CAN Academy <ArrowRight aria-hidden="true" /></Link>
    </article>
  )
}

export function AccessibilityPage() {
  return (
    <article className="static-page">
      <p className="destination-eyebrow">Accessibility</p>
      <h1 className="editorial-heading">We want this site to work for everyone.</h1>
      <p>
        CAN Academy is working to make its public website usable across common browsers, screen sizes, keyboard navigation, and assistive technologies.
      </p>
      <h2>Tell us what is not working</h2>
      <p>
        If you encounter an accessibility barrier, tell us which page you were using and what you were trying to do so we can investigate it.
      </p>
      <Link to="/contact?topic=accessibility" className="destination-primary-link">Report an accessibility issue <ArrowRight aria-hidden="true" /></Link>
    </article>
  )
}


export function TermsPage() {
  return (
    <article className="static-page">
      <p className="destination-eyebrow">Terms</p>
      <h1 className="editorial-heading">Website terms.</h1>
      <p>
        This public website provides information about CAN Academy and opportunities to begin a conversation with the CAN Academy team.
      </p>
      <h2>Informational content</h2>
      <p>
        Unless a page clearly says otherwise, website content is informational and does not create an enrollment offer, partnership agreement, funding commitment, eligibility determination, or contractual obligation.
      </p>
      <h2>Market-specific information</h2>
      <p>
        Education funding, eligibility, fees, transportation, operating requirements, and launch conditions may vary by location and may change. Market-specific details should be confirmed directly with CAN Academy before decisions are made.
      </p>
      <h2>Questions</h2>
      <p>
        If you have a question about information on this website, contact the CAN Academy team so the relevant context can be discussed directly.
      </p>
      <Link to="/contact?topic=terms" className="destination-primary-link">Ask a question <ArrowRight aria-hidden="true" /></Link>
    </article>
  )
}

export function NotFoundPage() {
  return (
    <article className="not-found-page">
      <p className="destination-eyebrow">404</p>
      <h1 className="editorial-heading">That page is not here.</h1>
      <p>The CAN story and Explore hub can help you find the right path.</p>
      <div className="not-found-actions">
        <Link to="/"><ArrowLeft aria-hidden="true" /> Home</Link>
        <Link to="/story/explore-can">Explore CAN <ArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  )
}
