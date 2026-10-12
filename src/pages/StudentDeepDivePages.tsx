import { Link } from 'react-router-dom'
import {
  activityAreas,
  activityAvailabilityNote,
  adults,
  circles,
  connectionProcess,
  dayNarrative,
  deliveryLevels,
  experienceLayers,
  faithThroughLearning,
  formationExperiences,
  formationResponsibility,
  geographicGroupStatus,
  groupTypes,
  localChurchFormation,
  locallyVariable,
  networkOpportunities,
  nextJourney,
  nextSupports,
  pathways,
  promises,
  rhythms,
  safeguarding,
  safeguardingStatus,
  sharedFoundation,
  signatureExperiences,
  studentQuestions,
  studentOwnership,
  studentSteps,
  supportForms,
  supportJourney,
  universalPromises,
  weekDisclaimer,
  weekViews,
} from '../data/studentDeepContent'

function StudentDeepNav({ active }: { active: string }) {
  return (
    <nav className="deep-section-nav" aria-label="Student Experience pages">
      {studentSteps.map((step) => (
        <Link key={step.to} to={step.to} className={step.to === active ? 'is-active' : ''}>
          <span>{step.label}</span>
          <small>{step.short}</small>
        </Link>
      ))}
    </nav>
  )
}

function DeepShell({
  active,
  eyebrow,
  title,
  intro,
  children,
}: {
  active: string
  eyebrow: string
  title: string
  intro: string[]
  children: React.ReactNode
}) {
  return (
    <article className="deep-page">
      <header className="deep-page-hero">
        <p className="destination-eyebrow">{eyebrow}</p>
        <h1 className="editorial-heading">{title}</h1>
        <div className="deep-page-intro">
          {intro.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </div>
      </header>
      <StudentDeepNav active={active} />
      <div className="deep-page-body">{children}</div>
    </article>
  )
}

function List({ items }: { items: Array<string | { label: string; status: string }> }) {
  return (
    <ul className="deep-list">
      {items.map((item) => {
        const label = typeof item === 'string' ? item : item.label
        const status = typeof item === 'string' ? undefined : item.status
        return <li key={label}><span>{label}</span>{status && <small>{status}</small>}</li>
      })}
    </ul>
  )
}

function Numbered({ items }: { items: { n: string; title: string; body: string }[] }) {
  return (
    <ol className="deep-numbered">
      {items.map((item) => (
        <li key={item.n}>
          <span>{item.n}</span>
          <div><h3>{item.title}</h3><p>{item.body}</p></div>
        </li>
      ))}
    </ol>
  )
}

export function StudentExperienceHub() {
  return (
    <DeepShell
      active="/student-experience"
      eyebrow="The CAN student experience"
      title="The reach of a larger school. The relationships of a local community."
      intro={[
        'CAN Academy is designed for students who need more than access to courses. Students need adults who know them, peers who share life with them, meaningful work that challenges them, and a community that helps them understand who they are becoming.',
        'Each student belongs to a locally anchored school community while gaining access to the teachers, courses, support, activities, and opportunities of a broader network. Technology expands what is available. Local relationships make the experience personal.',
      ]}
    >
      <section className="deep-three-grid">
        {experienceLayers.map((layer) => (
          <article key={layer.name}>
            <h2>{layer.name}</h2>
            <p>{layer.body}</p>
          </article>
        ))}
      </section>

      <blockquote className="deep-pull">
        Students are not left alone with online content. They learn through a structured week of instruction, conversation, collaboration, mentoring, activity, worship, service, and individualized support.
      </blockquote>

      <section>
        <h2 className="deep-section-title">Five things every CAN student should be able to say</h2>
        <ol className="deep-promises">
          {promises.map((p) => (
            <li key={p.n}><span>{p.n}</span><strong>{p.word}</strong><p>{p.body}</p></li>
          ))}
        </ol>
      </section>

      <section className="deep-two-grid">
        <div><h2>What every CAN student can expect</h2><List items={universalPromises} /></div>
        <div>
          <h2>What each CAN Community can make its own</h2>
          <p className="deep-lead">Some parts of student life will reflect the local church, available facilities, community partnerships, and the interests of students and families.</p>
          <List items={locallyVariable} />
        </div>
      </section>

      <div className="deep-actions">
        <Link to="/student-experience/a-week-at-can">See a week at CAN →</Link>
        <Link to="/student-experience/faith-and-formation">Explore faith and formation →</Link>
      </div>
    </DeepShell>
  )
}

export function StudentWeekPage() {
  return (
    <DeepShell
      active="/student-experience/a-week-at-can"
      eyebrow="Daily life"
      title="Structured days. Different ways to learn."
      intro={[
        'CAN students should experience clear expectations, predictable routines, and meaningful adult accountability. Their week combines focused academic work with discussion, mentoring, movement, formation, collaboration, and opportunities to apply what they are learning.',
        'The exact schedule will vary by grade, course, student pathway, and location. The rhythm should remain recognizable across the CAN network.',
      ]}
    >
      <p className="deep-status-note">{weekDisclaimer}</p>
      <section>
        <h2 className="deep-section-title">Representative weeks</h2>
        <div className="deep-week-views">
          {weekViews.map((view) => (
            <details key={view.id} open={view.id === weekViews[0]?.id}>
              <summary>{view.label}<small>{view.note}</small></summary>
              <div className="deep-week-grid">
                {view.days.map((day) => (
                  <div key={day.day}><h3>{day.day}</h3><List items={day.blocks} /></div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
      <section><h2 className="deep-section-title">A day in the life</h2><Numbered items={dayNarrative} /></section>
      <section>
        <h2 className="deep-section-title">Rhythms that create belonging</h2>
        <dl className="deep-four-grid">
          {rhythms.map((r) => <div key={r.horizon}><dt>{r.horizon}</dt><dd>{r.body}</dd></div>)}
        </dl>
      </section>
    </DeepShell>
  )
}

export function StudentKnownSupportedPage() {
  return (
    <DeepShell
      active="/student-experience/known-and-supported"
      eyebrow="Relationships and support"
      title="No student should become invisible."
      intro={[
        'A distributed academic model only works when responsibility is clear and relationships are intentional. Every CAN student should have a named adult who monitors the whole student, not merely performance in one course.',
      ]}
    >
      <section>
        <h2 className="deep-section-title">The adults around each student</h2>
        <div className="deep-role-list">
          {adults.map((a) => <article key={a.role}><h3>{a.role}</h3><small>{a.layer}</small><p>{a.body}</p></article>)}
        </div>
      </section>
      <section><h2 className="deep-section-title">Every student should know</h2><List items={studentQuestions} /></section>
      <section><h2 className="deep-section-title">When a student needs help</h2><Numbered items={supportJourney} /></section>
      <blockquote className="deep-pull">Someone notices. Someone responds. Someone stays involved.</blockquote>
      <section className="deep-two-grid">
        <div><h2>Forms of support</h2><List items={supportForms} /></div>
        <div><h2>Safety and well-being</h2><p className="deep-status-note">{safeguardingStatus}</p><List items={safeguarding} /></div>
      </section>
    </DeepShell>
  )
}

export function StudentBelongingPage() {
  return (
    <DeepShell
      active="/student-experience/belonging"
      eyebrow="Community and connection"
      title="A small local school should not mean a small student world."
      intro={[
        'CAN Academy combines the relationships of a local school with the reach of a connected network. Students should be known where they live while gaining access to people and opportunities beyond a single classroom, church, or community.',
      ]}
    >
      <section>
        <h2 className="deep-section-title">Three circles of belonging</h2>
        <div className="deep-three-grid">{circles.map((c) => <article key={c.name}><h2>{c.name}</h2><p>{c.body}</p></article>)}</div>
      </section>
      <section>
        <div className="deep-section-heading-row"><h2 className="deep-section-title">Geographic small groups</h2><span>{geographicGroupStatus}</span></div>
        <p className="deep-lead">The network can help students find community close to home, not only connections on a screen.</p>
        <div className="deep-two-grid">
          <div><h2>Possible group types</h2><List items={groupTypes} /></div>
          <div><h2>The controlled connection process</h2><ol className="deep-simple-numbered">{connectionProcess.map((s,i)=><li key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</li>)}</ol></div>
        </div>
        <p className="deep-warning">Student locations must never be publicly exposed. Geographic connections require family permission, privacy protection, verified adults, appropriate supervision, and clear safeguarding standards.</p>
      </section>
      <section><h2 className="deep-section-title">Network-wide opportunities</h2><List items={networkOpportunities} /></section>
    </DeepShell>
  )
}

export function StudentFaithPage() {
  return (
    <DeepShell
      active="/student-experience/faith-and-formation"
      eyebrow="Christian formation"
      title="Christian formation belongs in the whole life of the school."
      intro={[
        'CAN Academy should prepare students to think carefully, live faithfully, serve others, and understand their gifts as part of a larger purpose. Formation should not be confined to a single Bible course or weekly chapel. It should shape the relationships, questions, responsibilities, and decisions that make up student life.',
      ]}
    >
      <section className="deep-two-grid">
        <div><h2>Shared Christian foundation</h2><List items={sharedFoundation} /></div>
        <div><h2>Local church formation</h2><List items={localChurchFormation} /></div>
      </section>
      <blockquote className="deep-pull">CAN provides a complete school platform without requiring every church to surrender its identity.</blockquote>
      <section className="deep-two-grid">
        <div><h2>Faith throughout learning</h2><List items={faithThroughLearning} /></div>
        <div><h2>Formation through responsibility</h2><List items={formationResponsibility} /></div>
      </section>
      <section><h2 className="deep-section-title">Potential shared CAN traditions</h2><List items={formationExperiences} /></section>
    </DeepShell>
  )
}

export function StudentActivitiesPage() {
  return (
    <DeepShell
      active="/student-experience/activities-and-service"
      eyebrow="Life beyond coursework"
      title="A complete high school experience extends beyond the academic day."
      intro={[
        'Students need opportunities to move, create, compete, contribute, build friendships, discover interests, and lead. CAN can expand these opportunities by combining what exists locally with what can be shared across the network.',
        'CAN does not need to reproduce every activity independently at every site. Opportunities may come through the local church, community partners, student leadership, regional gatherings, and network-wide programs.',
      ]}
    >
      <section>
        <h2 className="deep-section-title">Experience areas</h2>
        <div className="deep-two-grid">{activityAreas.map((a) => <div key={a.title}><h2>{a.title}</h2><p className="deep-lead">{a.lead}</p><List items={a.items} />{a.note && <p className="deep-status-note">{a.note}</p>}</div>)}</div>
      </section>
      <section>
        <h2 className="deep-section-title">Local, regional, and network delivery</h2>
        <div className="deep-three-grid">{deliveryLevels.map((d) => <article key={d.level}><h2>{d.level}</h2><p>{d.body}</p></article>)}</div>
      </section>
      <section><h2 className="deep-section-title">Potential network traditions</h2><List items={signatureExperiences} /><p className="deep-status-note">{activityAvailabilityNote}</p></section>
    </DeepShell>
  )
}

export function StudentReadyPage() {
  return (
    <DeepShell
      active="/student-experience/ready-for-whats-next"
      eyebrow="Purpose and preparation"
      title="Nobody graduates without a plan they can name."
      intro={[
        'CAN Academy should prepare students for more than graduation. Students need the knowledge, confidence, experience, relationships, and practical guidance to move into adult life with purpose.',
      ]}
    >
      <section><h2 className="deep-section-title">Pathways recognized with equal seriousness</h2><div className="deep-tag-list">{pathways.map((p) => <span key={p}>{p}</span>)}</div></section>
      <section><h2 className="deep-section-title">The student journey</h2><Numbered items={nextJourney} /></section>
      <section className="deep-two-grid">
        <div><h2>What every CAN student can expect</h2><List items={nextSupports} /></div>
        <div><h2>Student ownership</h2><blockquote className="deep-pull deep-pull-small">The goal is not to choose a future for students. It is to help students make informed choices and take responsibility for the future they pursue.</blockquote><List items={studentOwnership} /></div>
      </section>
      <section className="deep-closing"><h2 className="editorial-heading">Known here. Prepared for anywhere.</h2><p>CAN students should graduate academically prepared, grounded in Christian faith, experienced in responsibility and service, connected to trusted adults, and ready to take a named next step.</p></section>
    </DeepShell>
  )
}
