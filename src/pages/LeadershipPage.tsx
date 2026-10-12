import { ArrowRight, BookOpenCheck, Building2, Network, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const leaders = [
  {
    initials: 'BK',
    name: 'Bryan Kelly',
    title: 'Founder & CEO',
    remit: 'Strategy · Platform · Partnerships · Operating Model',
    bio: 'Bryan leads CAN Academy’s strategy, platform, partnerships, and operating model. A former Microsoft senior data and product leader, he brings more than 25 years of experience building technology, analytics, and operating systems at scale. At CAN, he is focused on the shared infrastructure that can help trusted local communities deliver rigorous, accountable Christian education.',
  },
  {
    initials: 'NG',
    name: 'Dr. Neko Coleman Green',
    title: 'Co-founder & Chief Academic Officer',
    remit: 'Academics · Instruction · Student Support · Formation',
    bio: 'Neko leads CAN Academy’s academic model, instructional quality, student-support philosophy, and educator-facing design. She holds a Doctor of Education in Organizational Leadership, a Master of Arts in Teaching, an MBA, and a bachelor’s degree in business management. Her experience includes special education, elementary and middle-school instruction, differentiated learning, assessment, and church ministry leadership.',
  },
] as const

const responsibility = [
  {
    icon: BookOpenCheck,
    title: 'Academic leadership',
    body: 'Curriculum, teaching, assessment, student support, academic quality, and the educational standards that should remain coherent across the CAN network.',
  },
  {
    icon: Network,
    title: 'Platform & operating leadership',
    body: 'Technology, data, shared systems, partnerships, operating design, and the infrastructure required to support many local communities without recreating the entire school system at every site.',
  },
  {
    icon: Building2,
    title: 'Local leadership',
    body: 'Church leaders, school leaders, facilitators, mentors, and community partners provide the relationships, supervision, ministry context, and local knowledge that cannot be centralized.',
  },
] as const

export function LeadershipPage() {
  return (
    <article className="leadership-page">
      <header className="leadership-hero">
        <p className="destination-eyebrow">Team & Leadership</p>
        <h1 className="editorial-heading">Different expertise. Shared responsibility.</h1>
        <p>
          Building CAN requires both educational credibility and the ability to build a shared system at scale. The founding team brings those disciplines together while keeping local leaders central to how each community works.
        </p>
      </header>

      <section className="leadership-founders" aria-label="CAN Academy founding leadership">
        {leaders.map((leader) => (
          <article key={leader.name}>
            <div className="leadership-monogram" aria-hidden="true">{leader.initials}</div>
            <p className="destination-eyebrow">{leader.title}</p>
            <h2>{leader.name}</h2>
            <p className="leadership-remit">{leader.remit}</p>
            <p className="leadership-bio">{leader.bio}</p>
          </article>
        ))}
      </section>

      <section className="leadership-shared">
        <div className="leadership-shared-heading">
          <p className="destination-eyebrow">How leadership is distributed</p>
          <h2 className="editorial-heading">CAN should not depend on one kind of expertise.</h2>
          <p>
            Academic quality, scalable systems, and trusted local relationships require different kinds of leadership. CAN is designed so each of those responsibilities is visible rather than being collapsed into one central role.
          </p>
        </div>
        <div className="leadership-responsibility-grid">
          {responsibility.map(({ icon: Icon, title, body }) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership-accountability">
        <ShieldCheck aria-hidden="true" />
        <div>
          <p className="destination-eyebrow">Leadership and accountability</p>
          <h2>Titles matter less than clear responsibility.</h2>
          <p>
            CAN’s leadership model should make it clear who is accountable for academic quality, shared systems, partnerships, site readiness, and local student experience. As the organization grows, additional educators, advisors, operators, and governance roles can be added without obscuring those responsibilities.
          </p>
          <Link to="/accountability">See Trust & Accountability <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="leadership-links">
        <Link to="/academics">Explore Academics <ArrowRight aria-hidden="true" /></Link>
        <Link to="/story/platform">Explore the Platform <ArrowRight aria-hidden="true" /></Link>
        <Link to="/partnership-model">Explore the Partnership Model <ArrowRight aria-hidden="true" /></Link>
      </section>
    </article>
  )
}
