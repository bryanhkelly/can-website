import { ArrowRight, BookOpenCheck, ClipboardCheck, GraduationCap, HeartHandshake, MessagesSquare } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const ACADEMIC_COMPONENTS = [
  {
    title: 'Courses & pathways',
    text: 'A coherent academic program with core subjects, learning experiences, and options that help students keep moving forward.',
    icon: BookOpenCheck,
  },
  {
    title: 'How learning works',
    text: 'Live teaching, independent work, discussion, projects, and local learning support bring structure and flexibility together.',
    icon: GraduationCap,
  },
  {
    title: 'Support around the student',
    text: 'Teachers, Academic Coaches, Counselors, and local facilitators work from a shared view of student progress.',
    icon: HeartHandshake,
  },
  {
    title: 'Progress & readiness',
    text: 'Assessment, grades, records, and academic support help students understand where they are and what they need next.',
    icon: ClipboardCheck,
  },
]

const LAUNCH_STAGES = ['Explore', 'Fit / readiness', 'Plan', 'Prepare', 'Launch', 'Grow']

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

        <section className="academics-distinction" aria-label="How Academics and Curriculum differ">
          <div>
            <p className="destination-eyebrow">Curriculum</p>
            <h2>What do we teach?</h2>
            <p>Curriculum brings together standards, content, Christian worldview, and local distinctives.</p>
            <Link to="/story/curriculum">See the Curriculum story <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div>
            <p className="destination-eyebrow">Academics</p>
            <h2>How does the program work over time?</h2>
            <p>Academics describes the student’s broader academic path: learning, support, progress, and preparation for what comes next.</p>
          </div>
        </section>

        <section className="academics-model" aria-labelledby="academics-model-heading">
          <h2 id="academics-model-heading" className="editorial-heading">One academic path, connected support</h2>
          <div className="academics-model-grid">
            {ACADEMIC_COMPONENTS.map(({ title, text, icon: Icon }) => (
              <article className="academics-component" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <div className="academics-model-center" aria-hidden="true">
              <span>Student</span>
              <strong>Academic path</strong>
            </div>
          </div>
        </section>

        <section className="academics-details" aria-label="Academic model details">
          <article>
            <h2>Courses & pathways</h2>
            <p>Students need more than individual classes. They need a coherent academic program with the core subjects, learning experiences, and options required to keep moving forward.</p>
          </article>
          <article>
            <h2>How learning works</h2>
            <p>CAN combines live teaching, independent work, discussion, projects, and local learning support so students have both structure and flexibility.</p>
          </article>
          <article>
            <h2>Support around the student</h2>
            <p>CAN Teachers, Academic Coaches, Counselors, and local facilitators work from a shared view of student progress so help can arrive before a student gets lost.</p>
          </article>
          <article>
            <h2>Progress & readiness</h2>
            <p>Assessment, grades, records, and academic support should help students understand where they are, what they need next, and how their learning connects to future opportunities.</p>
          </article>
        </section>

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
  const roles = [
    { title: 'What the community brings', text: 'Local relationships, knowledge of families and students, and the community context that shapes what a school should be.' },
    { title: 'What CAN provides', text: 'A shared academic and operating model that can support a local community without asking it to build every capability alone.' },
    { title: 'What remains local', text: 'Local leadership, identity, ministry, and community relationships remain central to how the school is expressed.' },
  ]

  return (
    <article className="destination-page">
      <div className="destination-container">
        <PageIntro
          eyebrow="Partnership Model"
          heading="A shared model, shaped with each community."
          description="Understand what a local community and CAN each bring, what stays local, and how a conversation can develop into a clear partnership."
        />
        <section className="destination-card-grid">
          {roles.map(({ title, text }) => <article className="destination-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}
        </section>
        <section className="destination-note">
          <h2>From conversation to partnership</h2>
          <p>An initial conversation is a chance to share context, ask questions, and explore fit. A formal partnership calls for a clearer shared understanding of roles, resources, and local needs. Specific terms and requirements are discussed directly with each community.</p>
        </section>
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

export function PartnerPage({ name }: { name: string }) {
  return (
    <article className="destination-page">
      <div className="destination-container">
        <PageIntro
          eyebrow="Partner information"
          heading={name}
          description="This partner-specific CAN overview is not yet available."
        />
        <section className="destination-pending" role="status">
          <p className="destination-eyebrow">Information pending</p>
          <h2>Partner information is being prepared.</h2>
          <p>This page will be updated when approved information is ready to share.</p>
        </section>
        <DestinationFooter>
          <Link to="/contact?topic=partner-information" className="destination-primary-link">
            Ask a question <MessagesSquare aria-hidden="true" />
          </Link>
        </DestinationFooter>
      </div>
    </article>
  )
}
