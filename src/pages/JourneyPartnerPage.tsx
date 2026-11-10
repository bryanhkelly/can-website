import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Church, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react'
import './cogic-partner.css'
import './cogic-academy-pages.css'
import './journey-partner.css'

export const journeyBase = '/partners/the-journey-church'

const chapters = [
  { id: 'opportunity', name: 'The opportunity' },
  { id: 'story', name: 'The story' },
  { id: 'academy', name: 'The school' },
  { id: 'experience', name: 'The experience' },
  { id: 'model', name: 'The model' },
  { id: 'economics', name: 'The economics' },
  { id: 'invitation', name: 'The invitation' },
] as const

const experiences = {
  learning: {
    eyebrow: 'Teacher-designed learning. Live academic help.',
    heading: 'Strong academics, with a person to turn to.',
    description: 'Students would follow coherent teacher-developed, primarily asynchronous courses, with qualified live academic support and local adults helping them stay organized and known.',
    details: ['Standards-aligned academic pathways', 'Progress and assessment visible to families', 'Specialist help without staffing every subject locally'],
    photo: '/images/03_curriculum_student_study.png',
    alt: 'Illustrative image of a student working on academics',
  },
  belonging: {
    eyebrow: 'Real classmates. Real local relationships.',
    heading: 'A community to belong to, every school day.',
    description: 'A proposed school site would offer classmates, team projects and consistent adult relationships. Its culture could reflect The Journey’s welcoming focus on people and community.',
    details: ['A trusted on-site team', 'Friendships, projects and shared activities', 'Students known by name and supported'],
    photo: '/images/02_possibility_student_group.png',
    alt: 'Illustrative photograph of students together',
  },
  faith: {
    eyebrow: 'Formation that goes beyond a weekly event.',
    heading: 'Faith and character woven into ordinary days.',
    description: 'The Journey could shape locally approved discipleship, mentoring and spiritual formation while CAN protects the integrity and requirements of the academic program.',
    details: ['Thoughtful age-appropriate formation', 'Locally guided mentoring', 'Academic standards remain intact'],
    photo: '/images/05_rooted_locally_community.png',
    alt: 'Illustrative photograph of a local community conversation',
  },
  service: {
    eyebrow: 'Faith expressed through service.',
    heading: 'Learning to see and meet real needs.',
    description: 'The Journey’s community-outreach commitments suggest possibilities for supervised service, leadership and practical projects. No partner organization or service program is assumed to participate.',
    details: ['Student service opportunities to explore', 'Community-based projects and reflection', 'Safeguarding and host consent first'],
    photo: '/images/08_explore_audience_roles.png',
    alt: 'Illustrative photograph of community leaders collaborating',
  },
} as const

type Experience = keyof typeof experiences

function ModuleLabel({ number, children }: { number: string; children: string }) {
  return <p className="cogic-module-label"><span>{number}</span> / {children}</p>
}

function SourceLink({ href, children }: { href: string; children: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="journey-source-link">{children} <ArrowRight aria-hidden="true" /></a>
}

export function JourneyPartnerPage() {
  const [selected, setSelected] = useState<Experience>('learning')
  const active = experiences[selected]
  return <article className="cogic-page journey-page" id="top">
    <div className="cogic-container">
      <header className="journey-introduction">
        <p className="cogic-kicker">CAN Academy / A local-church education invitation</p>
        <h1>The Journey Church <span>One church. A possible new chapter in education.</span></h1>
        <p>Rooted in Nassau County. Built around families. Connected to the wider CAN academic network.</p>
        <p className="journey-disclaimer">An independent CAN Academy proposal for discussion. Not an official, approved, or endorsed initiative of The Journey Church. No school is operating or accepting enrollment.</p>
      </header>
      <nav className="cogic-chapter-nav" aria-label="Explore the proposed Journey school vision">
        {chapters.map((chapter, index) => <a href={'#' + chapter.id} key={chapter.id}>
          <span>{String(index + 1).padStart(2, '0')}</span> {chapter.name}
        </a>)}
      </nav>

      <section className="journey-editorial-hero" aria-labelledby="journey-main-heading">
        <div className="journey-editorial-hero-image">
          <img src="/images/04_platform_local_campus.png" alt="Illustrative school community; not a photograph of The Journey campus" />
          <span>Illustrative school imagery · proposed experience</span>
        </div>
        <div className="journey-editorial-hero-copy">
          <p className="cogic-module-label">The Journey Church × CAN Academy</p>
          <h2 id="journey-main-heading">What if the next chapter of The Journey included a school?</h2>
          <p>From thirteen people gathering in a home in 2007 to a community reaching families across Nassau County, The Journey has kept building. Could a local Christian school be another way to invest in the next generation?</p>
          <div className="cogic-invitation-actions">
            <Link className="cogic-primary-action" to={journeyBase + '/academy'}>Explore the school vision <ArrowRight aria-hidden="true" /></Link>
            <Link className="cogic-secondary-action" to={journeyBase + '/founding-partnership'}>Discuss the possibility</Link>
          </div>
        </div>
      </section>

      <section id="opportunity" className="cogic-module journey-chapter journey-opportunity" aria-labelledby="journey-opportunity-heading">
        <div>
          <ModuleLabel number="01">The opportunity</ModuleLabel>
          <h2 id="journey-opportunity-heading">A strong community. Room for another kind of school.</h2>
          <p>Nassau County has strong public schools. The proposition is not to replace them or declare them inadequate. It is to explore whether families also want excellent academics, intentional Christian formation and daily community in one local school.</p>
          <Link className="cogic-text-link" to={journeyBase + '/opportunity'}>Explore local need and research <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="journey-opportunity-facts">
          <div><strong>A</strong><span>Nassau County School District’s 2026 accountability grade</span></div>
          <div><strong>1</strong><span>Proposed initial school site, subject to validation</span></div>
          <div><strong>6–12</strong><span>Proposed student grades; also the ages Journey Students serves</span></div>
          <SourceLink href="https://www.nassau.k12.fl.us/" >Nassau district information</SourceLink>
        </div>
      </section>

      <div className="cogic-two-modules journey-two-features">
        <section id="story" className="cogic-module cogic-legacy" aria-labelledby="journey-story-heading">
          <div className="cogic-legacy-image"><img src="/images/05_rooted_locally_community.png" alt="Illustrative image of a community gathered together" /></div>
          <div className="cogic-card-copy">
            <ModuleLabel number="02">The Journey story</ModuleLabel>
            <h2 id="journey-story-heading">It started with thirteen people and a vision.</h2>
            <p>Pastor Darryl and Kara Bellar returned home to Nassau County to plant a church. That small beginning became a commitment to reach people, love families and create spaces for community.</p>
            <SourceLink href="https://thejourneyfamily.com/ourstory-">The Journey’s own story</SourceLink>
            <Link className="cogic-text-link" to={journeyBase + '/journey-story'}>Explore their story and mission <ArrowRight aria-hidden="true" /></Link>
          </div>
        </section>
        <section id="academy" className="cogic-module cogic-vision" aria-labelledby="journey-academy-heading">
          <div className="cogic-vision-image"><img src="/images/02_possibility_student_group.png" alt="Illustrative photo of students together in a school community" /></div>
          <div className="cogic-card-copy">
            <ModuleLabel number="03">The proposed academy</ModuleLabel>
            <h2 id="journey-academy-heading">A place to learn. A community to belong.</h2>
            <p>One local school community for grades 6–12, blending CAN’s shared academic infrastructure with on-site relationships, care and faith formation shaped by The Journey.</p>
            <div className="journey-card-tags"><span>Strong academics</span><span>Personal support</span><span>Christian formation</span></div>
            <Link className="cogic-text-link" to={journeyBase + '/academy'}>Explore the single-site model <ArrowRight aria-hidden="true" /></Link>
          </div>
        </section>
      </div>

      <section id="experience" className="cogic-module cogic-experience" aria-labelledby="journey-experience-heading">
        <div className="cogic-experience-header">
          <div><ModuleLabel number="04">The student experience</ModuleLabel><h2 id="journey-experience-heading">More than a school day. A foundation for life.</h2><p>A proposed daily rhythm shaped by learning, relationships, Christian formation and meaningful service.</p></div>
          <div className="cogic-experience-switcher" role="group" aria-label="Explore a proposed student experience">
            {([['learning','Learning'],['belonging','Belonging'],['faith','Faith'],['service','Service']] as const).map(([value, label]) =>
              <button key={value} type="button" aria-pressed={selected===value} onClick={()=>setSelected(value)}>{label}</button>)}
          </div>
        </div>
        <div className="cogic-experience-panel">
          <div className="cogic-experience-visual"><img src={active.photo} alt={active.alt} loading="lazy" /></div>
          <div className="cogic-experience-description">
            <p className="cogic-overline">{active.eyebrow}</p>
            <h3>{active.heading}</h3><p>{active.description}</p>
            <ul>{active.details.map(detail=><li key={detail}><CheckCircle2 aria-hidden="true"/>{detail}</li>)}</ul>
          </div>
        </div>
        <Link className="cogic-text-link" to={journeyBase + '/student-experience'}>Explore a proposed week at school <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section id="model" className="cogic-module cogic-model" aria-labelledby="journey-model-heading">
        <div className="cogic-model-copy">
          <ModuleLabel number="05">How it works</ModuleLabel>
          <h2 id="journey-model-heading">The Journey brings the community. CAN brings the academic backbone.</h2>
          <p>The church would shape local relationships, site leadership, facilities and ministry. CAN would provide shared academic infrastructure, qualified educators, records and support under a clearly defined school-of-record agreement.</p>
          <p className="cogic-model-callout"><ShieldCheck aria-hidden="true"/> School setup is not authorization to open. Facilities, safeguards, funding and legal responsibilities must be verified first.</p>
          <Link className="cogic-text-link" to={journeyBase + '/how-it-works'}>See the operational model and launch steps <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="journey-model-visual">
          <div><Church aria-hidden="true"/><strong>The Journey</strong><span>Local campus · student care · families · faith and community</span></div>
          <span className="journey-model-plus">+</span>
          <div><GraduationCap aria-hidden="true"/><strong>CAN Academy</strong><span>Courses · teachers · records · live academic support</span></div>
          <p>One responsibly operated local school community, contingent on agreement and approval.</p>
        </div>
      </section>

      <section id="economics" className="cogic-module cogic-opportunity journey-economics" aria-labelledby="journey-economics-heading">
        <div className="cogic-finance-intro">
          <ModuleLabel number="06">A sustainable ministry</ModuleLabel>
          <h2 id="journey-economics-heading">A school that serves families and strengthens the host community.</h2>
          <p>CAN's proposed church-hosted model would compensate an approved congregation for agreed facilities and local support, rather than ask it to purchase and operate the full academic program. That requires a viable school budget, clear responsibilities, and a signed agreement. The tuition figures below are gross school revenue, not payments or profit for The Journey.</p>
        </div>
        <div className="journey-quick-scenarios">
          {[25,50,75].map(n=><div key={n}><span>{n} students</span><strong>{new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n*10000)}</strong><small>Gross annual tuition at an illustrative $10,000 per student; expenses not deducted</small></div>)}
        </div>
        <Link className="cogic-text-link" to={journeyBase + '/founding-partnership#economics'}>Explore enrollment, costs and feasibility <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section id="invitation" className="cogic-module cogic-invitation journey-invitation" aria-labelledby="journey-invitation-heading">
        <div className="cogic-invitation-copy">
          <ModuleLabel number="07">The invitation</ModuleLabel>
          <h2 id="journey-invitation-heading">The Journey was built on a step of faith. What might the next step be?</h2>
          <p>A private conversation—not a commitment to open—about whether a CAN-powered Christian school could extend The Journey’s care for families and young people.</p>
          <div className="cogic-invitation-actions">
            <Link className="cogic-primary-action" to={journeyBase + '/founding-partnership#journey-inquiry'}>Request a founding conversation <ArrowRight aria-hidden="true" /></Link>
            <Link className="cogic-secondary-action" to={journeyBase + '/founding-partnership'}>Review the proposal</Link>
          </div>
        </div>
        <div className="journey-invitation-card">
          <HeartHandshake aria-hidden="true"/>
          <h3>One school. One local community. A shared academic system.</h3>
          <p>Begin with discovery, listen to families, test the economics, and proceed only if the model is viable and authorized.</p>
          <ul><li>Listen and validate family demand</li><li>Assess the space and safeguarding</li><li>Plan a sustainable, compliant school</li></ul>
        </div>
      </section>

      <aside className="journey-source-note" aria-label="Sources and proposal boundaries">
        <div><p className="cogic-overline">Grounded in The Journey’s own story</p><h2>One congregation’s real mission. One possible new expression.</h2>
        <p>Historical and ministry details are attributed to published sources. Student photographs are illustrative CAN assets, not documentation of a Journey school. The Journey has not announced, authorized or endorsed the proposed academy.</p></div>
        <div className="journey-source-links">
          <SourceLink href="https://thejourneyfamily.com/ourstory-">Church history and mission</SourceLink>
          <SourceLink href="https://thejourneyfamily.com/started">Community spaces and future vision</SourceLink>
          <SourceLink href="https://thejourneyfamily.com/students">Journey Students ministry</SourceLink>
          <SourceLink href="https://www.ls3p.com/portfolio/the-journey-church-florida/">Campus design history</SourceLink>
        </div>
      </aside>
    </div>
  </article>
}
