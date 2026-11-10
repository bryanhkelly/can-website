import { Link } from 'react-router-dom'

const forces = [
  {
    n: '01',
    title: 'Shared school capabilities',
    body: 'Specialized teachers, curriculum, academic systems, technology, counseling, records, and school services can serve students across multiple locations.',
  },
  {
    n: '02',
    title: 'Existing local infrastructure',
    body: 'CAN uses facilities and community assets that already exist close to families, rather than recreating them in every location.',
  },
  {
    n: '03',
    title: 'Use available education funding',
    body: 'Where scholarships and other education-choice programs are available, CAN aims to use those resources to reduce or eliminate out-of-pocket tuition for eligible families wherever possible.',
  },
]

export function EconomicBreakthroughPage() {
  return (
    <article className="deep-page economic-deep-page">
      <header className="deep-page-hero">
        <p className="destination-eyebrow">Why it can work</p>
        <h1 className="editorial-heading">Christian education does not have to be rebuilt campus by campus.</h1>
        <div className="deep-page-intro">
          <p>Traditional private schools often recreate many of the same expensive capabilities at every location. CAN changes that equation by sharing teachers, systems, technology, and school services across a larger network.</p>
        </div>
      </header>

      <div className="deep-page-body">
        <section className="deep-three-grid">
          {forces.map((force) => (
            <article key={force.n}>
              <p className="destination-eyebrow">{force.n}</p>
              <h2>{force.title}</h2>
              <p>{force.body}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="church-host-economics-heading">
          <p className="destination-eyebrow">For churches considering a hosted academy</p>
          <h2 className="deep-section-title" id="church-host-economics-heading">Your church hosts the school. CAN compensates the church for agreed local services.</h2>
          <p>In CAN's proposed church-hosted model, the congregation brings approved facilities, trusted relationships, and defined on-site support. CAN coordinates the shared academic and operating infrastructure. Rather than paying CAN to buy an entire school program, an approved host would receive compensation for the work it agrees to provide.</p>
          <div className="deep-two-grid">
            <article>
              <h3>What the church contributes</h3>
              <p>Suitable weekday space, community relationships, and the agreed local leadership or supervision needed to support students safely.</p>
            </article>
            <article>
              <h3>What the church receives</h3>
              <p>Negotiated host payments tied to its defined responsibilities. The ministry's net benefit is what remains after its own staffing, utilities, insurance, and other incremental costs.</p>
            </article>
          </div>
          <p className="deep-warning">This is a proposed partnership model, not a guaranteed payment or approved school. Compensation, funding eligibility, legal responsibilities, and school readiness require a viable written agreement. Existing independent schools purchasing CAN services may have a different arrangement.</p>
          <p><Link to="/partnership-model/ways-to-partner">Explore the church-hosted partnership structure →</Link></p>
        </section>

        <section className="economic-equation-deep">
          <p className="destination-eyebrow">The equation</p>
          <p>
            Education-choice funding <b>+</b> existing local infrastructure <b>+</b> shared school capabilities <b>=</b> a new path to more accessible Christian education
          </p>
          <small>
            CAN's objective is to reduce or eliminate out-of-pocket tuition for qualifying families. Scholarship eligibility, funding levels, fees, transportation, and local operating costs must be validated in each market.
          </small>
        </section>

        <div className="deep-actions">
          <Link to="/story/why-it-can-work">See the Economics story →</Link>
          <Link to="/story/explore-can">Return to Explore CAN →</Link>
        </div>
      </div>
    </article>
  )
}
