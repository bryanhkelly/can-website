import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenCheck, ShieldCheck, TrendingUp, UsersRound, CheckCircle2 } from 'lucide-react'

const standards = [
  {
    icon: BookOpenCheck,
    title: 'Academic standards',
    body: 'Consistent expectations for teaching, learning, assessment, records, and intervention across the CAN network.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe environments',
    body: 'Clear safeguarding, screening, facility-readiness, incident-response, and escalation requirements before students are served.',
  },
  {
    icon: TrendingUp,
    title: 'Visible progress',
    body: 'Assignments, assessments, student work, attendance, academic growth, and intervention should make student progress visible over time.',
  },
  {
    icon: UsersRound,
    title: 'Shared responsibility',
    body: 'CAN, local partners, families, and students should understand who is responsible for instruction, supervision, support, records, and response.',
  },
]

const certification = [
  'Facility inspections and occupancy requirements verified',
  'Background screening and safeguarding training completed',
  'Qualified instructional coverage established',
  'Academic and student-support plans approved',
  'Enrollment, funding, and reporting systems tested',
  'Emergency procedures and escalation responsibilities documented',
]

export function AccountabilityPage() {
  return (
    <article className="accountability-page">
      <header className="accountability-hero">
        <p className="destination-eyebrow">Trust & Accountability</p>
        <h1 className="editorial-heading">Trust should be earned. Progress should be visible.</h1>
        <p>
          Every student deserves a safe environment, meaningful instruction, and adults who take responsibility for their learning.
        </p>
      </header>

      <section className="accountability-principle">
        <p className="destination-eyebrow">The principle</p>
        <h2 className="editorial-heading">Opening a school is not the same as delivering an education.</h2>
        <p>
          CAN is designed to make academic responsibility visible across a shared network, while local partners provide the supervised learning environment, relationships, and community presence that help students thrive.
        </p>
      </section>

      <section className="accountability-grid">
        {standards.map(({ icon: Icon, title, body }) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="accountability-evidence">
        <div>
          <p className="destination-eyebrow">What progress should look like</p>
          <h2 className="editorial-heading">Learning. Growth. Support.</h2>
        </div>
        <div className="accountability-evidence-grid">
          <article>
            <span>01</span>
            <h3>Learning</h3>
            <p>What a student has learned and demonstrated through coursework, assessment, and student work.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Growth</h3>
            <p>How understanding, skill, participation, and academic readiness change over time.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Support</h3>
            <p>What happens when a student needs help, who responds, and how intervention is coordinated and documented.</p>
          </article>
        </div>
        <p className="accountability-status-note">
          These are intended accountability pillars, not reported CAN performance results.
        </p>
      </section>

      <section className="accountability-responsibility">
        <div>
          <p className="destination-eyebrow">One connected model. Clear responsibilities.</p>
          <h2>Academic responsibility and local responsibility should be explicit.</h2>
        </div>
        <div className="accountability-responsibility-grid">
          <article>
            <h3>CAN supports</h3>
            <ul>
              <li>Academic instruction and curriculum</li>
              <li>Assessment and academic progress</li>
              <li>Records and educational continuity</li>
              <li>Academic intervention and support systems</li>
              <li>Shared expectations and oversight</li>
            </ul>
          </article>
          <article>
            <h3>Local partners support</h3>
            <ul>
              <li>The supervised learning environment</li>
              <li>Daily presence and local relationships</li>
              <li>Facility and local-site readiness</li>
              <li>Community and ministry relationships</li>
              <li>Responsibilities defined in the partnership model</li>
            </ul>
          </article>
        </div>
        <Link to="/partnership-model/shared-responsibilities" className="accountability-inline-link">
          See the responsibility model <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="accountability-certification">
        <div>
          <p className="destination-eyebrow">Proposed operating standard</p>
          <h2 className="editorial-heading">A site should demonstrate readiness before it serves students.</h2>
          <p>
            CAN is considering a formal site-certification model in which a local partner would not become an operational academy simply by signing an agreement. Activation would require documented readiness, followed by periodic review.
          </p>
        </div>
        <div className="accountability-certification-list">
          {certification.map((item) => (
            <div key={item}><CheckCircle2 aria-hidden="true" /><span>{item}</span></div>
          ))}
        </div>
        <div className="accountability-status-flow" aria-label="Proposed CAN site status model">
          <div><strong>Approved partner</strong><span>Relationship established</span></div>
          <ArrowRight aria-hidden="true" />
          <div><strong>Certified / launch-ready site</strong><span>Readiness demonstrated</span></div>
          <ArrowRight aria-hidden="true" />
          <div><strong>Active academy</strong><span>Students enrolled with ongoing monitoring</span></div>
        </div>
        <p className="accountability-status-note">
          This status model is proposed and should not be read as an existing certification program until formally approved and implemented.
        </p>
      </section>

      <section className="accountability-support">
        <p className="destination-eyebrow">Accommodations and student needs</p>
        <h2 className="editorial-heading">Families should understand what support a CAN setting can and cannot provide.</h2>
        <p>
          CAN needs a clearly defined approach to accommodations, special-education services, and situations in which a student's needs exceed the capabilities of a particular setting. Those expectations should be established before enrollment, not improvised by individual local sites.
        </p>
        <Link to="/academics/teachers-and-support" className="accountability-inline-link">
          Explore academic support <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="accountability-closing">
        <h2 className="editorial-heading">A local school, supported by a network, accountable for learning.</h2>
        <div className="deep-actions">
          <Link to="/evidence">Explore the Evidence Library →</Link>
          <Link to="/contact?topic=accountability">Talk with CAN about accountability →</Link>
        </div>
      </section>
    </article>
  )
}
