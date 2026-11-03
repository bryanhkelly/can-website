import { ArrowRight, Building2, Church, MapPinned, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locationBySlug } from '../data/locationStateData'

export function StateLocationPage({ slug }: { slug: string }) {
  const state = locationBySlug(slug)
  if (!state) return <article className="state-location-page"><h1 className="editorial-heading">Location not found.</h1><Link to="/locations">Return to locations</Link></article>
  return <article className="state-location-page">
    <header className="state-location-hero"><div>
      <p className="destination-eyebrow">CAN Academy / Locations</p>
      <span className="state-location-status">{state.status}</span>
      <h1 className="editorial-heading">{state.name}</h1><p>{state.summary}</p>
    </div><div className="state-location-hero-mark" aria-hidden="true"><MapPinned /><span>{state.name}</span></div></header>
    <section className="state-location-why">
      <p className="destination-eyebrow">Locally rooted Christian education</p>
      <h2 className="editorial-heading">A local school community. A wider network of opportunity.</h2>
      <p>CAN is developing a model combining shared teacher expertise, academic support and technology with trusted local adults, peers and Christian formation. Each potential community must meet partner, academic, operating and legal readiness requirements before an opening is confirmed.</p>
    </section>
    {state.deepLink && <section className="state-location-deep-link"><div><p className="destination-eyebrow">Explore CAN {state.name}</p><h2>See what CAN could mean for families and churches in {state.name}.</h2></div><Link to={state.deepLink}>Explore CAN {state.name} <ArrowRight aria-hidden="true" /></Link></section>}
    <section className="state-location-interest"><div><p className="destination-eyebrow">Get involved</p><h2 className="editorial-heading">Interested in CAN in {state.name}?</h2><p>Tell us about your family, church or school. An expression of interest is not an enrollment application or a school-opening commitment.</p></div>
      <div className="state-location-interest-grid">
        <Link to={`/contact?topic=locations&state=${state.slug}&audience=parent`}><UsersRound aria-hidden="true" /><span><strong>I'm a parent or family</strong><small>Ask about student opportunities.</small></span><ArrowRight aria-hidden="true" /></Link>
        <Link to={`/contact?topic=locations&state=${state.slug}&audience=pastor`}><Church aria-hidden="true" /><span><strong>I lead a church</strong><small>Explore a local partnership.</small></span><ArrowRight aria-hidden="true" /></Link>
        <Link to={`/contact?topic=locations&state=${state.slug}&audience=school-leader`}><Building2 aria-hidden="true" /><span><strong>I lead a school</strong><small>Discuss educational partnerships.</small></span><ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
    <section className="state-location-footer-note"><p>Specific schools, enrollment, scholarship participation and opening dates are subject to confirmation.</p><Link to="/locations">View all locations <ArrowRight aria-hidden="true" /></Link></section>
  </article>
}