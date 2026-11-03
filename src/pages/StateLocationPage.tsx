import { ArrowRight, Building2, Church, MapPinned, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locationBySlug } from '../data/locationStateData'
import { stateResearch } from '../data/stateResearch'

export function StateLocationPage({ slug }: { slug: string }) {
  const state = locationBySlug(slug)
  const research = stateResearch[slug]

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

      <section className="state-location-why" aria-labelledby="research-heading">
        <p className="destination-eyebrow">State funding and launch research</p>
        <h2 id="research-heading" className="editorial-heading">Understand the opportunities and obligations.</h2>
        <p>Published program information is a starting point, not confirmation that CAN or a proposed church location is approved, accredited, eligible for funding, or authorized to enroll students.</p>
        {research ? (
          <div className="state-location-grid">
            <article>
              <p className="destination-eyebrow">{research.status} · Sources checked {research.checked}</p>
              <h3>Education funding pathways</h3>
              {research.funding.map((program) => (
                <div key={program.name}>
                  <h4>{program.name}</h4>
                  <p>{program.detail}</p>
                  <p><a href={program.url} target="_blank" rel="noopener noreferrer">Official source: {program.source} ↗</a></p>
                </div>
              ))}
            </article>
            <article>
              <p className="destination-eyebrow">Preliminary checklist</p>
              <h3>What a launch would require us to investigate</h3>
              <ul>{research.launch.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <p className="destination-eyebrow">Legal and operating questions</p>
              <h3>Rules and limitations</h3>
              <ul>{research.legal.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>Still being validated</h3>
              <ul>{research.openQuestions.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        ) : (
          <p>State-specific funding, provider requirements and legal considerations are in draft research. We are gathering primary government and program-administrator sources before publishing a detailed summary. <Link to={`/contact?topic=locations&state=${state.slug}`}>Ask us about this state</Link>.</p>
        )}
        <p>Research summaries are informational and may change. Families should confirm current scholarship terms with the program administrator. Each proposed CAN operation requires a separate legal, financial and school-readiness review.</p>
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
