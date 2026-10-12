import { Link } from 'react-router-dom'
import { ArrowRight, MapPinned } from 'lucide-react'

const statusDefinitions = [
  ['Operating', 'Students are enrolled and instruction is being delivered.'],
  ['Confirmed launch partner', 'A launch partner and launch plan have been formally confirmed.'],
  ['In development', 'A market or partnership is in active pilot development and validation.'],
  ['Exploring partnerships', 'CAN is researching the market or developing relationships without a launch commitment.'],
] as const

const places = [
  {
    name: 'Florida',
    status: 'In development',
    body: 'Florida remains the primary pilot focus. The current work includes market research, partner development, and validation of the academic, operating, facility, funding, and regulatory model.',
    href: '/florida',
    note: 'Specific sites, launch dates, and market commitments remain subject to validation.',
  },
  {
    name: 'Texas',
    status: 'Exploring partnerships',
    body: 'A large potential church network and an emerging school-choice environment make Texas strategically important for continued partner development.',
  },
  {
    name: 'Arizona',
    status: 'Exploring partnerships',
    body: 'Arizona remains attractive for a standardized CAN model because of its established education-choice environment and flexible education options.',
  },
  {
    name: 'Arkansas',
    status: 'Exploring partnerships',
    body: 'Arkansas is a strong research candidate because of its microschool and educational-service-provider pathways, alongside important quality and regulatory questions.',
  },
  {
    name: 'West Virginia',
    status: 'Exploring partnerships',
    body: 'West Virginia remains attractive for targeted rural-market research, particularly where a network model could expand access without requiring a conventional standalone campus.',
  },
  {
    name: 'North Carolina',
    status: 'Exploring partnerships',
    body: 'North Carolina remains a selective research market where facility requirements, school-specific compliance, and local partnership conditions need to be evaluated carefully.',
  },
] as const

export function LocationsPage() {
  return (
    <article className="locations-page">
      <header className="locations-hero">
        <p className="destination-eyebrow">Locations & Launch</p>
        <h1 className="editorial-heading">See what is operating, developing, and still being explored.</h1>
        <p>
          CAN is building toward a network of locally rooted school communities. This page distinguishes active availability from pilot development and market research so the envisioned network is not confused with current operations.
        </p>
      </header>

      <section className="locations-status-key">
        <p className="destination-eyebrow">How to read the map</p>
        <div>
          {statusDefinitions.map(([label, body]) => (
            <article key={label}>
              <strong>{label}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="locations-list">
        {places.map((place) => (
          <article key={place.name}>
            <div className="locations-place-heading">
              <span className="locations-pin"><MapPinned aria-hidden="true" /></span>
              <div>
                <h2>{place.name}</h2>
                <span className="locations-status">{place.status}</span>
              </div>
            </div>
            <p>{place.body}</p>
            {'note' in place && place.note && <small>{place.note}</small>}
            {'href' in place && place.href && (
              <Link to={place.href}>Explore {place.name} <ArrowRight aria-hidden="true" /></Link>
            )}
          </article>
        ))}
      </section>

      <section className="locations-disclosure">
        <h2>Research is not a launch announcement.</h2>
        <p>
          Markets shown as being explored are strategic research positions, not commitments to open a CAN Academy. A launch depends on partner readiness, family demand, facility suitability, economics, funding eligibility, regulatory requirements, and the ability to deliver the student experience CAN promises.
        </p>
        <div className="deep-actions">
          <Link to="/launch-approach">See the Launch Approach →</Link>
          <Link to="/contact?topic=locations">Ask about a market →</Link>
        </div>
      </section>
    </article>
  )
}
