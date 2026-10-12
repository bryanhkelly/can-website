import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const landscape = [
  { name: 'Public school', x: 20, y: 24, note: 'Broad access and local presence; faith formation is outside the school model.' },
  { name: 'Traditional private Christian', x: 30, y: 78, note: 'Strong faith formation and community; often less flexible and more campus-dependent.' },
  { name: 'Online school', x: 80, y: 24, note: 'High flexibility and broad course access; local community and formation may be limited.' },
  { name: 'Homeschool', x: 68, y: 56, note: 'High family involvement and flexibility; breadth, teachers, records, and activities can vary.' },
] as const

const differences = [
  {
    heading: 'Local relationships',
    body: 'Students remain rooted in a real local community with adults, peers, mentors, worship, service, and shared rhythms.',
  },
  {
    heading: 'Network-wide academics',
    body: 'A local site does not have to recruit every specialist teacher or recreate every course, support role, and academic system on its own.',
  },
  {
    heading: 'Christian formation',
    body: 'Faith is not an optional add-on. Christian worldview and formation are intentionally part of the student experience.',
  },
  {
    heading: 'Flexibility without isolation',
    body: 'CAN can combine live teaching, independent work, local gathering, projects, activities, and support without becoming online-only.',
  },
  {
    heading: 'School infrastructure',
    body: 'Records, progress, assessment, academic support, and operating systems are designed to work as one connected school rather than a loose collection of classes.',
  },
  {
    heading: 'Grades 6–12',
    body: 'CAN is being built as a middle- and high-school pathway, including the academic structure students need for credits, transcripts, readiness, and graduation planning.',
  },
] as const

export function HowCanIsDifferentPage() {
  return (
    <article className="different-page">
      <header className="different-hero">
        <p className="destination-eyebrow">How CAN is different</p>
        <h1 className="editorial-heading">CAN sits between the models families already know.</h1>
        <p>
          CAN is not trying to turn every church into a traditional private school, move students into online-only learning, or ask families to recreate high school on their own. It combines local Christian community with shared academic infrastructure and meaningful flexibility.
        </p>
      </header>

      <section className="different-fit">
        <div className="different-fit-heading">
          <p className="destination-eyebrow">Where CAN fits</p>
          <h2 className="editorial-heading">High faith formation. Meaningful flexibility. Real local community.</h2>
          <p>
            This visual is a positioning framework, not a scorecard for every school or family. Individual programs vary.
          </p>
        </div>

        <div className="different-matrix" aria-label="Education model positioning by faith formation and flexibility">
          <span className="different-axis-y">Faith formation</span>
          <span className="different-axis-x">Flexibility / accessibility</span>
          <span className="different-axis-y-low">Lower</span>
          <span className="different-axis-y-high">Higher</span>
          <span className="different-axis-x-low">Lower</span>
          <span className="different-axis-x-high">Higher</span>

          {landscape.map((item) => (
            <div
              className="different-point"
              key={item.name}
              style={{ left: `${item.x}%`, bottom: `${item.y}%` }}
            >
              <strong>{item.name}</strong>
            </div>
          ))}

          <div className="different-point different-point-can" style={{ left: '78%', bottom: '80%' }}>
            <strong>CAN Academy</strong>
            <span>Christian formation + flexibility + local community + shared school infrastructure</span>
          </div>
        </div>

        <div className="different-model-notes">
          {landscape.map((item) => (
            <article key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="different-pillars">
        <p className="destination-eyebrow">The combination matters</p>
        <h2 className="editorial-heading">The difference is not one feature. It is the system around the student.</h2>
        <div>
          {differences.map((item) => (
            <article key={item.heading}>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="different-compare">
        <h2 className="editorial-heading">A third lane for families and communities.</h2>
        <p>
          CAN can be useful even where strong public, private, homeschool, and online options already exist. The question is not whether those models are good or bad. It is whether a family wants a different combination of formation, relationships, flexibility, breadth, and school infrastructure.
        </p>
        <div className="deep-actions">
          <Link to="/faq">Read practical questions →</Link>
          <Link to="/contact?topic=difference">Start a conversation →</Link>
        </div>
      </section>

      <Link className="different-back" to="/story/explore-can">Back to Explore CAN <ArrowRight aria-hidden="true" /></Link>
    </article>
  )
}
