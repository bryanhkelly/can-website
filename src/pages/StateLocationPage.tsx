import { ArrowRight, Building2, Church, MapPinned, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locationBySlug } from '../data/locationStateData'

export function StateLocationPage({ slug }: { slug: string }) {
  const state = locationBySlug(slug)

  if (!state) {
    return (
      <article className="state-location-page">
        <h1 className="editorial-heading">Location not found.</h1>
        <Link to="/locations">Return to Locations</Link>
      </article>
    )
  }

  return (
    <article className="state-location-page">
      <header className="state-location-hero">
        <div>
          <p className="destination-eyebrow">Locations & Launch</p>
          <span className="state-location-status">{state.status}</span>
          <h1 className="editorial-heading">{state.name}</h1>
          <p>{state.summary}</p>
        </div>
        <div className="state-location-hero-mark" aria-hidden="true">
          <MapPinned />
          <span>{state.name}</span>
        </div>
      </header>

      <section className="state-location-why">
        <p className="destination-eyebrow">Why CAN is looking here</p>
        <h2 className="editorial-heading">A local opportunity within a shared model.</h2>
        <p>{state.why}</p>
      </section>

      <section className="state-location-grid">
        <article>
          <p className="destination-eyebrow">Areas of focus</p>
          <h2>Where we're looking</h2>
          <ul>{state.areas.map((area) => <li key={area}>{area}</li>)}</ul>
        </article>
        <article>
          <p className="destination-eyebrow">Potential models</p>
          <h2>How CAN could work here</h2>
          <ul>{state.models.map((model) => <li key={model}>{model}</li>)}</ul>
        </article>
        <article>
          <p className="destination-eyebrow">Current work</p>
          <h2>What we're evaluating</h2>
          <ul>{state.evaluating.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      {state.deepLink && (
        <section className="state-location-deep-link">
          <div>
            <p className="destination-eyebrow">Go deeper</p>
            <h2>{state.name} has additional market research and development detail.</h2>
          </div>
          <Link to={state.deepLink}>Explore {state.name} in depth <ArrowRight aria-hidden="true" /></Link>
        </section>
      )}

      <section className="state-location-interest">
        <div>
          <p className="destination-eyebrow">Raise your hand</p>
          <h2 className="editorial-heading">Interested in CAN in {state.name}?</h2>
          <p>
            CAN grows through trusted local relationships. Share your perspective and we'll preserve the state and audience context when you start the conversation.
          </p>
        </div>
        <div className="state-location-interest-grid">
          <Link to={`/contact?topic=locations&state=${state.slug}&audience=parent`}>
            <UsersRound aria-hidden="true" />
            <span><strong>I'm a parent or family</strong><small>Share interest in CAN for your child.</small></span>
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link to={`/contact?topic=locations&state=${state.slug}&audience=pastor`}>
            <Church aria-hidden="true" />
            <span><strong>I lead a church or ministry</strong><small>Explore hosting or partnering locally.</small></span>
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link to={`/contact?topic=locations&state=${state.slug}&audience=school-leader`}>
            <Building2 aria-hidden="true" />
            <span><strong>I lead a school or network</strong><small>Explore a school, co-op, or network partnership.</small></span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="state-location-footer-note">
        <p>
          Status reflects CAN's current public development stage. Specific sites, partners, timing, funding, and participation models remain subject to local validation.
        </p>
        <Link to="/locations">View all locations <ArrowRight aria-hidden="true" /></Link>
      </section>
    </article>
  )
}
