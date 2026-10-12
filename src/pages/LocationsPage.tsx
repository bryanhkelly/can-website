import { ArrowRight, MapPinned } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stateLocations } from '../data/locationStateData'

const statusDefinitions = [
  ['Operating', 'Students are enrolled and instruction is being delivered.'],
  ['Confirmed launch partner', 'A launch partner and launch plan have been formally confirmed.'],
  ['In development', 'A market or partnership is in active pilot development and validation.'],
  ['Exploring partnerships', 'CAN is researching the market or developing relationships without a launch commitment.'],
] as const

const inDevelopment = stateLocations.filter((state) => state.status === 'In development')
const exploring = stateLocations.filter((state) => state.status === 'Exploring partnerships')

function LocationCard({ state, compact = false }: { state: (typeof stateLocations)[number]; compact?: boolean }) {
  return (
    <article className={compact ? 'locations-card locations-card-compact' : 'locations-card'}>
      <div className="locations-place-heading">
        <span className="locations-pin"><MapPinned aria-hidden="true" /></span>
        <div>
          <h2>{state.name}</h2>
          <span className="locations-status">{state.status}</span>
        </div>
      </div>
      <p className="locations-card-summary">{state.summary}</p>
      {!compact && (
        <div className="locations-focus">
          <strong>Areas of focus</strong>
          <p>{state.areas.join(' · ')}</p>
        </div>
      )}
      <Link to={`/locations/${state.slug}`}>Explore {state.name} <ArrowRight aria-hidden="true" /></Link>
    </article>
  )
}

export function LocationsPage() {
  return (
    <article className="locations-page">
      <header className="locations-hero">
        <p className="destination-eyebrow">Locations & Launch</p>
        <h1 className="editorial-heading">See what is operating, developing, and still being explored.</h1>
        <p>
          CAN is building toward a network of locally rooted school communities. The same launch-status framework applies everywhere, while the content below shows where CAN's work is currently most developed and where additional partnerships are being explored.
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

      <section className="locations-group">
        <div className="locations-group-heading">
          <p className="destination-eyebrow">In development</p>
          <h2 className="editorial-heading">Markets where CAN is actively building the launch path.</h2>
          <p>These states have the most developed combination of market work, partner models, and potential launch communities in the current strategy.</p>
        </div>
        <div className="locations-list locations-list-featured">
          {inDevelopment.map((state) => <LocationCard key={state.slug} state={state} />)}
        </div>
      </section>

      <section className="locations-group">
        <div className="locations-group-heading">
          <p className="destination-eyebrow">Exploring partnerships</p>
          <h2 className="editorial-heading">Additional states where the model may fit.</h2>
          <p>
            Some are near-term school-choice opportunities. Others are longer-horizon markets where CAN is tracking policy, school supply, homeschool demand, or potential local partners.
          </p>
        </div>
        <div className="locations-list locations-list-exploring">
          {exploring.map((state) => <LocationCard key={state.slug} state={state} compact />)}
        </div>
      </section>

      <section className="locations-disclosure">
        <h2>How a location moves forward.</h2>
        <p>
          Research identifies opportunity. Partner and family validation establish local fit. Facility, funding, academic, regulatory, and operating readiness determine whether a location moves toward a confirmed launch and eventually into operation.
        </p>
        <div className="locations-stage-flow" aria-label="Location development stages">
          {statusDefinitions.slice().reverse().map(([label], index) => (
            <div key={label}>
              {index > 0 && <ArrowRight aria-hidden="true" />}
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="deep-actions">
          <Link to="/launch-approach">See the Launch Approach →</Link>
          <Link to="/contact?topic=locations">Ask about a market →</Link>
        </div>
      </section>
    </article>
  )
}
