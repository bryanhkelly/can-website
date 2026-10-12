import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { roleDoorways } from '../data/pageContent'

type RoleDoorway = (typeof roleDoorways)[keyof typeof roleDoorways]

function RoleVisual({ variant }: { variant: RoleDoorway['visualVariant'] }) {
  if (variant === 'pastor') {
    return (
      <div className="role-visual-flow">
        <div className="role-visual-node">Your church knows local families</div>
        <ArrowRight aria-hidden="true" />
        <div className="role-visual-node role-visual-emphasis">A shared CAN school</div>
        <ArrowRight aria-hidden="true" />
        <div className="role-visual-node">Learning and care throughout the week</div>
      </div>
    )
  }

  if (variant === 'parent') {
    return (
      <div className="role-visual-orbit">
        <svg viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
          <path d="M300 110 95 48M300 110 505 48M300 110 95 172M300 110 505 172" />
        </svg>
        <span className="role-visual-orbit-node role-visual-orbit-top-left">Close community</span>
        <span className="role-visual-orbit-node role-visual-orbit-top-right">More teachers</span>
        <span className="role-visual-orbit-node role-visual-orbit-bottom-left">Known and supported</span>
        <span className="role-visual-orbit-node role-visual-orbit-bottom-right">More opportunities</span>
        <span className="role-visual-center">Your child</span>
      </div>
    )
  }

  if (variant === 'school') {
    return (
      <div className="role-visual-flow role-visual-school">
        <div className="role-visual-node">
          <strong>Your school</strong>
          <span>K-8 community and identity</span>
        </div>
        <ArrowRight aria-hidden="true" />
        <div className="role-visual-node role-visual-emphasis">
          <strong>Shared CAN capabilities</strong>
          <span>Courses, teachers, and student support</span>
        </div>
        <ArrowRight aria-hidden="true" />
        <div className="role-visual-node">
          <strong>A path forward</strong>
          <span>High school, grades 9-12</span>
        </div>
      </div>
    )
  }

  if (variant === 'homeschool') {
    return (
      <div className="role-visual-family">
        <span className="role-visual-family-center">Family involvement stays at the center</span>
        <div className="role-visual-family-options">
          <span>More teachers</span>
          <span>More courses</span>
          <span>Peers and activities</span>
          <span>Guidance and support</span>
        </div>
      </div>
    )
  }

  return (
    <div className="denomination-network">
      <img
        className="denomination-network-desktop"
        src="/images/denomination-network-model.svg"
        alt="Multiple local churches connect to shared CAN academic and operating capabilities while local leadership, identity, and relationships remain local."
      />
      <div className="denomination-network-mobile">
        <p>Many local churches</p>
        <div className="denomination-network-churches">
          <span>Local church</span>
          <span>Local church</span>
          <span>Local church</span>
          <span>Local church</span>
          <span>Local church</span>
        </div>
        <ArrowDown className="denomination-network-arrow" aria-hidden="true" />
        <div className="denomination-network-shared">
          <strong>Shared CAN layer</strong>
          <span>Academic + operating capabilities</span>
        </div>
        <ArrowDown className="denomination-network-arrow" aria-hidden="true" />
        <div className="denomination-network-outcomes">
          <span>Local leadership</span>
          <span>Local identity</span>
          <span>Local ministry + relationships</span>
        </div>
      </div>
    </div>
  )
}

const NEXT_BY_AUDIENCE: Record<string, { title: string; body: string; links: [string, string][] }> = {
  parent: {
    title: 'What parents usually want to understand next',
    body: 'Safety, academic quality, daily experience, support, funding, and how a parent will be able to see progress.',
    links: [
      ['Student Experience', '/student-experience'],
      ['Academics', '/academics'],
      ['Trust & Accountability', '/accountability'],
      ['Locations & Launch', '/locations'],
    ],
  },
  pastor: {
    title: 'What church leaders usually want to understand next',
    body: 'Responsibilities, staffing, economics, site readiness, safeguarding, and what CAN provides versus what remains local.',
    links: [
      ['Partnership Model', '/partnership-model'],
      ['Shared Responsibilities', '/partnership-model/shared-responsibilities'],
      ['Launch Approach', '/launch-approach'],
      ['Trust & Accountability', '/accountability'],
    ],
  },
  'school-leader': {
    title: 'What school leaders usually want to understand next',
    body: 'Academic credibility, extension into high school, shared capabilities, student support, and partnership responsibilities.',
    links: [
      ['Academics', '/academics'],
      ['Academic Credibility', '/academics/academic-credibility'],
      ['Partnership Model', '/partnership-model'],
      ['Student Experience', '/student-experience'],
    ],
  },
  homeschool: {
    title: 'What homeschool families usually want to understand next',
    body: 'Flexibility, course access, teachers, peers, student support, and which participation models may ultimately be available.',
    links: [
      ['Academics', '/academics'],
      ['Student Experience', '/student-experience'],
      ['Ways to Partner', '/partnership-model/ways-to-partner'],
      ['FAQ', '/faq'],
    ],
  },
  denomination: {
    title: 'What network leaders usually want to understand next',
    body: 'How multiple churches can share capability, what remains local, governance, readiness, economics, and how a network pilot could be evaluated.',
    links: [
      ['Partnership Model', '/partnership-model'],
      ['Governance & Accountability', '/partnership-model/governance-and-accountability'],
      ['Locations & Launch', '/locations'],
      ['Trust & Accountability', '/accountability'],
    ],
  },
}

export function RoleDoorwayPage({ page }: { page: RoleDoorway }) {
  return (
    <article className="role-doorway-page">
      <div className="role-doorway-container">
        <p className="role-doorway-eyebrow">{page.eyebrow}</p>
        <div className="role-doorway-hero">
          <div className="role-doorway-intro">
            <h1 className="editorial-heading">{page.heading}</h1>
            <p>{page.intro}</p>
          </div>
          <figure className={`role-doorway-photo role-doorway-photo-${page.visualVariant}`}>
            <img
              src={page.image}
              alt={page.imageAlt}
              fetchPriority="high"
              style={{ objectPosition: page.imagePosition }}
              data-mobile-position={page.imagePositionMobile}
            />
          </figure>
        </div>

        <section className={`role-visual role-visual-${page.visualVariant}`} aria-label="How CAN connects with this community">
          <RoleVisual variant={page.visualVariant} />
        </section>

        <section className="role-doorway-message">
          <h2 className="editorial-heading">{page.refrain}</h2>
          <p>{page.body}</p>
        </section>

        {NEXT_BY_AUDIENCE[page.audience] && (
          <section className="role-doorway-next">
            <div>
              <p className="destination-eyebrow">Go deeper</p>
              <h2>{NEXT_BY_AUDIENCE[page.audience].title}</h2>
              <p>{NEXT_BY_AUDIENCE[page.audience].body}</p>
            </div>
            <nav aria-label={`Explore more for ${page.eyebrow}`}>
              {NEXT_BY_AUDIENCE[page.audience].links.map(([label, href]) => (
                <Link key={href} to={href}>{label} <ArrowRight aria-hidden="true" /></Link>
              ))}
            </nav>
          </section>
        )}

        <section className="role-doorway-actions">
          <div className="role-doorway-concern">
            <h2>A common concern</h2>
            <p>{page.concern}</p>
          </div>
          <div className="role-doorway-ctas">
            <Link to="/story/stakes" className="role-doorway-primary">
              See the CAN story <ArrowRight aria-hidden="true" />
            </Link>
            <Link to={`/contact?audience=${page.audience}`} className="role-doorway-secondary">
              {page.secondaryCta} <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
