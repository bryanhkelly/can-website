import { ArrowDown, ArrowRight, MessagesSquare } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AcademicsDeepLinks } from './AcademicsDeepDivePages'
import { PartnershipDeepLinks, PartnershipPartnerTypes } from './PartnershipDeepDivePages'
import type { PartnerId } from '../lib/nav'

const ACADEMIC_COMPONENTS = [
  {
    title: 'Courses & pathways',
    text: 'A coherent academic program with core subjects, learning experiences, and options that help students keep moving forward.',
  },
  {
    title: 'How learning works',
    text: 'Live teaching, independent work, discussion, projects, and local learning support bring structure and flexibility together.',
  },
  {
    title: 'Support around the student',
    text: 'Teachers, Academic Coaches, Counselors, and local facilitators work from a shared view of student progress.',
  },
  {
    title: 'Progress & readiness',
    text: 'Assessment, grades, records, and academic support help students understand where they are and what they need next.',
  },
]

const ACADEMIC_DETAILS = [
  {
    title: 'Courses & pathways',
    text: 'Students need more than individual classes. They need a coherent academic program with the core subjects, learning experiences, and options required to keep moving forward.',
  },
  {
    title: 'How learning works',
    text: 'CAN combines live teaching, independent work, discussion, projects, and local learning support so students have both structure and flexibility.',
  },
  {
    title: 'Support around the student',
    text: 'CAN Teachers, Academic Coaches, Counselors, and local facilitators work from a shared view of student progress so help can arrive before a student gets lost.',
  },
  {
    title: 'Progress & readiness',
    text: 'Assessment, grades, records, and academic support should help students understand where they are, what they need next, and how their learning connects to future opportunities.',
  },
]

const LAUNCH_STAGES = ['Explore', 'Fit / readiness', 'Plan', 'Prepare', 'Launch', 'Grow']

const PARTNER_PAGES: Record<PartnerId, {
  name: string
  heading: string
  whyHeading: string
  why: string
  conversation: string
  explore: string
  image: string
  imagePosition: string
}> = {
  'the-journey-church': {
    name: 'The Journey Church',
    heading: 'What could Christian education look like if it grew from a community families already trust?',
    whyHeading: 'Why we thought of The Journey',
    why: 'The Journey Church has built something an education model cannot manufacture: the trust of families, a strong ministry culture, and a place people recognize as home.',
    conversation: 'Nassau County already offers families strong educational options. The question is whether some families are looking for something those options are not designed to provide: rigorous academics intentionally connected to Christian formation, culture, community, and family life.',
    explore: 'Christian education could become part of how The Journey serves families all week.',
    image: '/images/04_platform_local_campus.png',
    imagePosition: '72% 46%',
  },
  cogic: {
    name: 'Church of God in Christ',
    heading: 'An education worthy of our children and rooted in who they are.',
    whyHeading: 'Why we thought of COGIC',
    why: 'For generations, COGIC churches have helped Black children know who they are, whose they are, and what God has called them to become.',
    conversation: 'That formation should not have to stop when students enter the classroom. Families should not have to choose between academic excellence, Christian formation, and an education that recognizes their faith, culture, history, and story.',
    explore: 'What could become possible if COGIC churches could participate in a shared education system without each congregation having to build a school alone?',
    image: '/images/05_rooted_locally_community.png',
    imagePosition: '52% 48%',
  },
  cogbf: {
    name: 'Church of God by Faith',
    heading: 'What if the connection that built a denomination could help extend Christian education to a new generation?',
    whyHeading: 'Why we thought of Church of God by Faith',
    why: 'Church of God by Faith grew through local churches connected by shared faith, trusted relationships, and a commitment to serve communities.',
    conversation: 'That same connection creates an interesting education possibility. Individual congregations may not be positioned to build complete middle and high school programs on their own, but together they represent something much larger.',
    explore: 'Could the strength of the Church of God by Faith connection help make Christian education available in more of the communities its churches already serve?',
    image: '/images/08_explore_audience_roles.png',
    imagePosition: '55% 44%',
  },
}

function PageIntro({ eyebrow, heading, description }: { eyebrow: string; heading: string; description: string }) {
  return (
    <header className="destination-intro">
      <p className="destination-eyebrow">{eyebrow}</p>
      <h1 className="editorial-heading">{heading}</h1>
      <p>{description}</p>
    </header>
  )
}

function DestinationFooter({ children }: { children: ReactNode }) {
  return (
    <footer className="destination-footer">
      {children}
      <Link to="/story/explore-can" className="destination-back-link">
        Back to Explore CAN <ArrowRight aria-hidden="true" />
      </Link>
    </footer>
  )
}

export function AcademicsPage() {
  return (
    <article className="destination-page academics-page">
      <div className="destination-container">
        <PageIntro
          eyebrow="Academics"
          heading="A strong academic path, built to grow with students."
          description="CAN brings together rigorous courses, live instruction, academic support, and clear progress tracking so students can build a strong foundation and prepare for what comes next."
        />

        <section className="academics-visual" aria-label="One academic path supported by connected learning and student support">
          <img
            className="academics-path-desktop"
            src="/images/academic-path-model.svg"
            alt="A student academic path connected through courses and pathways, how learning works, support, and progress and readiness."
          />
          <div className="academics-path-mobile">
            <div className="academics-path-student"><span>Student</span><strong>Academic path</strong></div>
            {ACADEMIC_COMPONENTS.map(({ title, text }) => (
              <article className="academics-path-step" key={title}>
                <span aria-hidden="true" />
                <div><h2>{title}</h2><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="academics-distinction" aria-label="How Academics and Curriculum differ">
          <div>
            <p className="destination-eyebrow">Curriculum</p>
            <h2>What do we teach, and how is it framed?</h2>
            <p>Standards, content, Christian worldview, and local distinctives shape the instructional program.</p>
            <Link to="/story/curriculum">See the Curriculum story <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div>
            <p className="destination-eyebrow">Academics</p>
            <h2>How does the academic program work over time?</h2>
            <p>Courses, learning, student support, assessment, records, and readiness connect into a path for each student.</p>
          </div>
        </section>

        <section className="academics-details" aria-label="Academic model details">
          {ACADEMIC_DETAILS.map(({ title, text }) => (
            <article key={title}><h2>{title}</h2><p>{text}</p></article>
          ))}
        </section>

        <AcademicsDeepLinks />

        <DestinationFooter>
          <Link to="/contact?topic=academics" className="destination-primary-link">
            Talk with us about academics <ArrowRight aria-hidden="true" />
          </Link>
        </DestinationFooter>
      </div>
    </article>
  )
}

export function PartnershipModelPage() {
  return (
    <article className="destination-page">
      <div className="destination-container">
        <PageIntro
          eyebrow="Partnership Model"
          heading="A shared model, shaped with each community."
          description="Understand what a local community and CAN each bring, what stays local, and how a conversation can develop into a clear partnership."
        />
        <section className="partnership-model-visual" aria-label="The community brings local relationships, CAN provides shared capabilities, and local identity remains local in the school experience">
          <img
            className="partnership-model-desktop"
            src="/images/partnership-model.svg"
            alt="The community brings local relationships, leadership, facilities, and knowledge of families. CAN provides a shared academic model, teachers and support, and operating systems. Local identity and leadership remain local in the resulting school experience."
          />
          <div className="partnership-model-mobile">
            <article><p>Community brings</p><h2>Relationships and local knowledge</h2><span>Leadership, facilities and support, knowledge of families</span></article>
            <span className="partnership-model-plus" aria-hidden="true">+</span>
            <article><p>CAN provides</p><h2>Shared capabilities</h2><span>Academic model, teachers and support, operating systems</span></article>
            <span className="partnership-model-plus" aria-hidden="true">+</span>
            <article><p>What stays local</p><h2>Identity and leadership</h2><span>Ministry, culture, community relationships, local expression</span></article>
            <ArrowDown className="partnership-model-down" aria-hidden="true" />
            <strong className="partnership-model-result">A local CAN school experience</strong>
          </div>
        </section>
        <section className="partnership-details" aria-label="Partnership roles">
          <article>
            <h2>What the community brings</h2>
            <p>Local relationships, knowledge of families and students, facilities and local support, and the community context that shapes what a school should be.</p>
          </article>
          <article>
            <h2>What CAN provides</h2>
            <p>A shared academic and operating model, teachers and support, systems, and capabilities that local communities should not each have to rebuild alone.</p>
          </article>
          <article>
            <h2>What remains local</h2>
            <p>Local leadership, identity, ministry, culture, and community relationships remain central to how the school is expressed.</p>
          </article>
        </section>
        <section className="destination-note">
          <h2>From conversation to partnership</h2>
          <p>An initial conversation is a chance to share context, ask questions, and explore fit. A formal partnership calls for a clearer shared understanding of roles, resources, and local needs. Specific terms and requirements are discussed directly with each community.</p>
        </section>

        <PartnershipPartnerTypes />
        <PartnershipDeepLinks />

        <DestinationFooter>
          <Link to="/contact?topic=partnership-model" className="destination-primary-link">Talk with us about a partnership <ArrowRight aria-hidden="true" /></Link>
        </DestinationFooter>
      </div>
    </article>
  )
}

export function FloridaPage() {
  return (
    <article className="destination-page">
      <div className="destination-container">
        <PageIntro
          eyebrow="Florida"
          heading="Starting in Florida"
          description="Florida-specific launch, funding, eligibility, pilot, and community information is being prepared."
        />
        <section className="destination-pending" role="status">
          <p className="destination-eyebrow">Details pending</p>
          <h2>Market information will be shared when it is approved for publication.</h2>
          <p>No scholarship values, eligibility rules, pilot commitments, or launch dates are published here.</p>
        </section>
        <DestinationFooter>
          <Link to="/contact?topic=florida" className="destination-primary-link">Ask about Florida <ArrowRight aria-hidden="true" /></Link>
        </DestinationFooter>
      </div>
    </article>
  )
}

export function StartCommunityPage() {
  return (
    <article className="destination-page">
      <div className="destination-container">
        <PageIntro
          eyebrow="Launch Approach"
          heading="From interest to a thriving community."
          description="A community’s path takes shape through conversation, local context, and shared planning. These stages describe a framework, not a fixed timeline or contractual commitment."
        />
        <ol className="launch-stages">
          {LAUNCH_STAGES.map((stage, index) => (
            <li key={stage}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{stage}</h2>
            </li>
          ))}
        </ol>
        <section className="destination-note">
          <h2>Every community is different</h2>
          <p>Timing, readiness, and specific requirements depend on the community and are worked through together.</p>
        </section>
        <DestinationFooter>
          <Link to="/contact?topic=launch-approach" className="destination-primary-link">Start a conversation <ArrowRight aria-hidden="true" /></Link>
        </DestinationFooter>
      </div>
    </article>
  )
}

export function EvidencePage() {
  const areas = ['Research and source references', 'Policy and market sources', 'Academic evidence', 'Operating evidence']
  return (
    <article className="destination-page">
      <div className="destination-container">
        <PageIntro
          eyebrow="Evidence Library"
          heading="Evidence, sources, and proof."
          description="A place for research and source references behind the CAN model."
        />
        <section className="destination-pending" role="status">
          <p className="destination-eyebrow">Coming soon</p>
          <h2>Evidence materials are being gathered and reviewed.</h2>
          <p>No citations or downloadable proof materials are published here yet.</p>
        </section>
        <ul className="evidence-areas">{areas.map((area) => <li key={area}>{area}</li>)}</ul>
        <DestinationFooter>
          <Link to="/contact?topic=evidence" className="destination-primary-link">Ask about the evidence <ArrowRight aria-hidden="true" /></Link>
        </DestinationFooter>
      </div>
    </article>
  )
}

export function PartnerPage({ partner }: { partner: PartnerId }) {
  const page = PARTNER_PAGES[partner]
  return (
    <article className="partner-front-door">
      <header className="partner-front-door-hero">
        <img className="partner-front-door-hero-image" src={page.image} alt="" style={{ objectPosition: page.imagePosition }} />
        <div className="partner-front-door-hero-wash" aria-hidden="true" />
        <div className="partner-front-door-hero-copy">
          <p className="partner-front-door-eyebrow">CAN Academy × {page.name}</p>
          <h1 className="editorial-heading">{page.heading}</h1>
        </div>
      </header>
      <div className="partner-front-door-content">
        <section className="partner-front-door-section">
          <p className="partner-section-number">01</p>
          <div>
            <h2>{page.whyHeading}</h2>
            <p>{page.why}</p>
          </div>
        </section>
        <section className="partner-front-door-section">
          <p className="partner-section-number">02</p>
          <div>
            <h2>Why this conversation</h2>
            <p>{page.conversation}</p>
          </div>
        </section>
        <section className="partner-front-door-section partner-front-door-explore">
          <p className="partner-section-number">03</p>
          <div>
            <h2>What we want to explore together</h2>
            <p>{page.explore}</p>
          </div>
        </section>
        <div className="partner-front-door-actions">
          <Link to={`/story/stakes?partner=${partner}`} className="destination-primary-link">
            See the CAN story <ArrowRight aria-hidden="true" />
          </Link>
          <Link to={`/contact?partner=${partner}`} className="partner-front-door-secondary">
            Talk with us about {page.name} <MessagesSquare aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
