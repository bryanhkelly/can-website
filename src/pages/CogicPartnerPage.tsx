import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDownRight, ArrowRight, BookOpen, CheckCircle2, Church,
  GraduationCap, Landmark, PlayCircle, ShieldCheck, Users,
} from 'lucide-react'
import './cogic-partner.css'

const sources = {
  founder: 'https://www.cogic.org/about-us/our-founder/',
  commission: 'https://www.cogic.org/education/about-us/',
  bishop: 'https://www.cogic.org/about-us/the-executive-branch/the-presiding-bishop/',
  catholic: 'https://www.ncea.org/NCEA/NCEA/How_We_Serve/News/Press_Releases/National-Data-Highlights-Strong-Demand-and-Growing-Diversity-and-Inclusion-in-Catholic-Schools.aspx',
}

const experienceContent = {
  homeroom: {
    eyebrow: 'A common weekly moment',
    heading: 'Monday morning with the Presiding Bishop.',
    description: 'Imagine a fifteen-minute devotional, recorded once and available across participating COGIC schools, followed by conversation in each local homeroom.',
    details: ['A shared theme each week', 'On-demand delivery, not a required live broadcast', 'Local reflection led by a trusted adult'],
  },
  curriculum: {
    eyebrow: 'Formation within academic rigor',
    heading: 'Our history. Our theology. Our traditions.',
    description: 'A COGIC-approved instructional layer could bring Holiness-Pentecostal heritage, denominational history, scripture, worship, and service into the school experience alongside standards-aligned academics.',
    details: ['COGIC-reviewed faith content', 'Academic courses retain their required standards', 'Students access approved teacher and course options'],
  },
  community: {
    eyebrow: 'Local roots, national connection',
    heading: 'One church family, many school communities.',
    description: 'Local churches would nurture relationships and daily community while students could share appropriate national learning themes, service opportunities, and leadership experiences.',
    details: ['Jurisdictional student gatherings', 'Shared service and leadership experiences', 'Local school identity and administration'],
  },
} as const

type ExperienceKey = keyof typeof experienceContent

const modules = [
  { href: '#challenge', label: 'The challenge' },
  { href: '#legacy', label: 'The legacy' },
  { href: '#vision', label: 'The vision' },
  { href: '#experience', label: 'The experience' },
  { href: '#model', label: 'The model' },
  { href: '#opportunity', label: 'The opportunity' },
  { href: '#invitation', label: 'The invitation' },
]

function money(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(value)
}

function ModuleLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="cogic-module-label"><span>{number}</span> / {children}</p>
}

export function CogicPartnerPage() {
  const [experience, setExperience] = useState<ExperienceKey>('homeroom')
  const [sites, setSites] = useState(100)
  const [students, setStudents] = useState(50)
  const [tuition, setTuition] = useState(10000)
  const [churchAllocation, setChurchAllocation] = useState(15)
  const grossTuition = sites * students * tuition
  const illustrativeChurchAllocation = grossTuition * churchAllocation / 100
  const currentExperience = experienceContent[experience]

  return (
    <article className="cogic-page">
      <div className="cogic-container">
        <header className="cogic-introduction">
          <p className="cogic-kicker">CAN Academy / A denominational education vision</p>
          <h1>Church of God in Christ <span>COGIC</span></h1>
          <p>A proposed national academy, rooted in COGIC's faith, history, traditions, and communities.</p>
          <p className="cogic-proposal-flag">An independent CAN founding-partnership invitation. Not affiliated with, approved by, or endorsed by COGIC.</p>
        </header>

        <nav className="cogic-chapter-nav" aria-label="Explore the COGIC educational vision">
          {modules.map((module, index) => (
            <a key={module.href} href={module.href}>
              <span>{String(index + 1).padStart(2, '0')}</span> {module.label}
            </a>
          ))}
        </nav>

        <section id="challenge" className="cogic-module cogic-challenge" aria-labelledby="cogic-challenge-heading">
          <div className="cogic-challenge-visual">
            <img src="/images/05_rooted_locally_community.png" alt="Students and trusted adults together in a local school community" />
            <div className="cogic-photo-caption">A network rooted in local churches</div>
          </div>
          <div className="cogic-challenge-copy">
            <ModuleLabel number="01">The challenge</ModuleLabel>
            <h2 id="cogic-challenge-heading">Why shouldn't COGIC have its own national school system?</h2>
            <p>For generations, Catholic families have known the power of schools connected by faith and identity. Imagine a similarly enduring opportunity for families who want an education shaped by COGIC's own Christian heritage.</p>
            <div className="cogic-catholic-proof">
              <strong>5,829</strong>
              <span>U.S. Catholic schools in 2025–26. A benchmark for institutional ambition, not a prediction for COGIC.</span>
              <a href={sources.catholic} target="_blank" rel="noopener noreferrer">Source: NCEA, March 2026 <ArrowRight aria-hidden="true" /></a>
            </div>
            <a className="cogic-text-link" href="#vision">Imagine what a COGIC network could become <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </section>

        <div className="cogic-two-modules">
          <section id="legacy" className="cogic-module cogic-legacy" aria-labelledby="cogic-legacy-heading">
            <div className="cogic-legacy-image">
              <img
                src="https://www.cogic.org/wp-content/uploads/2014/12/Bishop-C-1.H.-Mason-709x1024.jpg"
                alt="Historical portrait of Bishop Charles Harrison Mason, founder of the Church of God in Christ"
                loading="lazy"
              />
              <span>Official COGIC historical portrait</span>
            </div>
            <div className="cogic-card-copy">
              <ModuleLabel number="02">The legacy</ModuleLabel>
              <h2 id="cogic-legacy-heading">What Bishop Mason began can shape generations still to come.</h2>
              <p>COGIC's founder built a connected movement of congregations. Its Education Commission later oversaw an Association of Christian Schools. Education is not an unfamiliar ambition for this church.</p>
              <div className="cogic-source-links">
                <a href={sources.founder} target="_blank" rel="noopener noreferrer">COGIC founder history <ArrowRight aria-hidden="true" /></a>
                <a href={sources.commission} target="_blank" rel="noopener noreferrer">Education Commission history <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
          </section>

          <section id="vision" className="cogic-module cogic-vision" aria-labelledby="cogic-vision-heading">
            <div className="cogic-vision-image">
              <img src="/images/02_possibility_student_group.png" alt="Students learning and growing together as part of a wider community" loading="lazy" />
            </div>
            <div className="cogic-card-copy">
              <ModuleLabel number="03">The vision</ModuleLabel>
              <h2 id="cogic-vision-heading">100 churches. One connected school network.</h2>
              <p>Each participating congregation remains a local school community. A COGIC academy could connect schools through common faith programming and national purpose, with CAN supplying the academic backbone.</p>
              <div className="cogic-network-diagram" aria-label="Illustrative proposed relationship between national leadership, jurisdictions, church schools and CAN">
                <div><Landmark aria-hidden="true" /><strong>COGIC academy leadership</strong><small>Identity and approved programming</small></div>
                <span aria-hidden="true">↓</span>
                <div><Users aria-hidden="true" /><strong>Jurisdictions and local church schools</strong><small>Community, sites and family relationships</small></div>
                <span aria-hidden="true">+</span>
                <div><GraduationCap aria-hidden="true" /><strong>CAN shared infrastructure</strong><small>Academics, records, platform and support</small></div>
              </div>
            </div>
          </section>
        </div>

        <section id="experience" className="cogic-module cogic-experience" aria-labelledby="cogic-experience-heading">
          <div className="cogic-experience-header">
            <div>
              <ModuleLabel number="04">The student experience</ModuleLabel>
              <h2 id="cogic-experience-heading">An education distinctly COGIC.</h2>
              <p>A national educational identity that students could recognize in everyday school life, not just on the sign outside.</p>
            </div>
            <div className="cogic-experience-switcher" aria-label="Explore proposed student experiences">
              {([
                ['homeroom', 'Bishop’s homeroom'],
                ['curriculum', 'Curriculum'],
                ['community', 'Community'],
              ] as const).map(([value, label]) => (
                <button key={value} type="button" aria-pressed={experience === value} onClick={() => setExperience(value)}>{label}</button>
              ))}
            </div>
          </div>
          <div className="cogic-experience-panel">
            <div className="cogic-experience-visual">
              {experience === 'homeroom' ? (
                <div className="cogic-bishop-proposal">
                  <img
                    src="https://www.cogic.org/wp-content/uploads/2022/03/pict-PB-sheard.jpg"
                    alt="Official COGIC portrait of Presiding Bishop J. Drew Sheard"
                    loading="lazy"
                  />
                  <div className="cogic-bishop-overlay">
                    <span>Illustrative student programming concept</span>
                    <strong>Homeroom with the Presiding Bishop</strong>
                    <small><PlayCircle aria-hidden="true" /> 15 minutes weekly · Proposed, no video available</small>
                  </div>
                </div>
              ) : (
                <img
                  src={experience === 'curriculum' ? '/images/03_curriculum_student_study.png' : '/images/08_explore_audience_roles.png'}
                  alt={experience === 'curriculum' ? 'Students engaged in academic study' : 'Community leaders collaborating around students'}
                  loading="lazy"
                />
              )}
            </div>
            <div className="cogic-experience-description">
              <p className="cogic-overline">{currentExperience.eyebrow}</p>
              <h3>{currentExperience.heading}</h3>
              <p>{currentExperience.description}</p>
              <ul>
                {currentExperience.details.map((detail) => <li key={detail}><CheckCircle2 aria-hidden="true" />{detail}</li>)}
              </ul>
              {experience === 'homeroom' && (
                <a href={sources.bishop} target="_blank" rel="noopener noreferrer" className="cogic-attribution">
                  Portrait and biography: COGIC official website <ArrowRight aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          <p className="cogic-module-note">All academy and bishop-homeroom programming shown here is proposed. Content, participation, doctrine, branding, and production would require denominational approval.</p>
        </section>

        <section id="model" className="cogic-module cogic-model" aria-labelledby="cogic-model-heading">
          <div className="cogic-model-copy">
            <ModuleLabel number="05">The operating model</ModuleLabel>
            <h2 id="cogic-model-heading">Your churches. Your traditions. One shared academic backbone.</h2>
            <p>CAN is being designed to let church leaders configure a proposed school workspace in about an hour, then follow a structured path to build the team, recruit families, satisfy opening requirements and prepare for launch.</p>
            <p className="cogic-model-callout"><ShieldCheck aria-hidden="true" /> One-hour configuration is not the same as being authorized or ready to open a school.</p>
            <Link className="cogic-text-link" to="/launch-approach">Explore CAN's launch approach <ArrowRight aria-hidden="true" /></Link>
          </div>
          <ol className="cogic-launch-steps">
            <li><span>01</span><strong>Establish your school</strong><small>Create a basic school profile and local identity.</small></li>
            <li><span>02</span><strong>Bring your people</strong><small>Invite the site team and start conversations with families.</small></li>
            <li><span>03</span><strong>Build your presence</strong><small>Preview a school website and proposed academic experience.</small></li>
            <li><span>04</span><strong>Prepare to open</strong><small>Complete staffing, safeguarding, compliance, and operational readiness.</small></li>
          </ol>
          <div className="cogic-model-responsibilities">
            <div><Church aria-hidden="true" /><strong>Local church</strong><span>Facilities, student supervision, family relationships and community</span></div>
            <div><BookOpen aria-hidden="true" /><strong>CAN</strong><span>Academic design and shared services, subject to the authorized school model</span></div>
            <div><Landmark aria-hidden="true" /><strong>COGIC academy</strong><span>Approved national identity, faith content and network experiences</span></div>
          </div>
        </section>

        <section id="opportunity" className="cogic-module cogic-opportunity" aria-labelledby="cogic-opportunity-heading">
          <div className="cogic-finance-intro">
            <ModuleLabel number="06">The opportunity</ModuleLabel>
            <h2 id="cogic-opportunity-heading">A national education mission with the potential to strengthen local churches.</h2>
            <p>Explore the scale of a coordinated network. These numbers illustrate possible tuition flows, not profits, guaranteed payments, funding eligibility or a CAN forecast.</p>
          </div>
          <div className="cogic-calculator">
            <div className="cogic-calculator-controls">
              <p className="cogic-overline">Illustrative network scenario</p>
              <fieldset className="cogic-site-choices">
                <legend>Participating schools</legend>
                {[10, 100, 500].map((count) => (
                  <button type="button" key={count} aria-pressed={sites === count} onClick={() => setSites(count)}>{count} schools</button>
                ))}
              </fieldset>
              <label htmlFor="cogic-student-count">Students per school</label>
              <select id="cogic-student-count" value={students} onChange={(event) => setStudents(Number(event.target.value))}>
                <option value={25}>25 students</option>
                <option value={50}>50 students</option>
                <option value={75}>75 students</option>
              </select>
              <label htmlFor="cogic-tuition">Annual tuition per student</label>
              <select id="cogic-tuition" value={tuition} onChange={(event) => setTuition(Number(event.target.value))}>
                <option value={8000}>$8,000</option>
                <option value={10000}>$10,000</option>
                <option value={12000}>$12,000</option>
              </select>
              <label htmlFor="cogic-share">Hypothetical church allocation: {churchAllocation}% of tuition</label>
              <input id="cogic-share" type="range" min="10" max="20" step="5" value={churchAllocation} onChange={(event) => setChurchAllocation(Number(event.target.value))} />
            </div>
            <div className="cogic-calculator-result" aria-live="polite" aria-atomic="true">
              <p className="cogic-overline">Illustrative gross annual tuition</p>
              <strong className="cogic-big-money">{money(grossTuition)}</strong>
              <p>{(sites * students).toLocaleString('en-US')} students at {sites} participating schools</p>
              <div className="cogic-economic-grid">
                <div><span>Hypothetical network-wide church allocation</span><strong>{money(illustrativeChurchAllocation)}</strong></div>
                <div><span>Average per participating church</span><strong>{money(illustrativeChurchAllocation / sites)}</strong></div>
              </div>
              <p className="cogic-economic-caution">Assumes full enrollment, complete tuition collection and a 10–20% hypothetical allocation. Figures are before academic delivery, staffing, site expenses, aid and other operating costs. Actual arrangements require a validated financial model.</p>
            </div>
          </div>
          <Link className="cogic-text-link" to="/economic-breakthrough">Understand the shared-economics model <ArrowRight aria-hidden="true" /></Link>
        </section>

        <section id="invitation" className="cogic-module cogic-invitation" aria-labelledby="cogic-invitation-heading">
          <div className="cogic-invitation-copy">
            <ModuleLabel number="07">The invitation</ModuleLabel>
            <h2 id="cogic-invitation-heading">Let's build the first ten schools together.</h2>
            <p>Explore a Founding Educational Partnership that connects national vision with a carefully selected cohort of local churches.</p>
            <div className="cogic-invitation-actions">
              <Link className="cogic-primary-action" to="/contact?partner=cogic&audience=denomination&topic=founding-partner">
                Discuss a founding partnership <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="cogic-secondary-action" to="/partnership-model">Explore partnership responsibilities</Link>
            </div>
          </div>
          <div className="cogic-pilot-card">
            <span>Proposed founding cohort</span>
            <strong>10</strong>
            <p>Church communities to identify and evaluate together</p>
            <ol>
              <li>Confirm denominational sponsorship and academic governance</li>
              <li>Identify local church candidates and family demand</li>
              <li>Validate educational, financial and regulatory readiness</li>
              <li>Launch only sites that meet agreed requirements</li>
            </ol>
          </div>
        </section>

        <footer className="cogic-sources">
          <div>
            <p className="cogic-overline">Evidence and editorial notes</p>
            <h2>Sources, assumptions and independence</h2>
            <p>This is a CAN Academy proposal, not an authorized COGIC initiative. Official COGIC portraits are displayed for historical and leadership context, not endorsement. Publication use and image rights should be confirmed before a formal campaign.</p>
          </div>
          <ul>
            <li><a href={sources.founder} target="_blank" rel="noopener noreferrer">COGIC founder history <ArrowRight aria-hidden="true" /></a></li>
            <li><a href={sources.commission} target="_blank" rel="noopener noreferrer">COGIC Education Commission <ArrowRight aria-hidden="true" /></a></li>
            <li><a href={sources.bishop} target="_blank" rel="noopener noreferrer">COGIC Presiding Bishop biography <ArrowRight aria-hidden="true" /></a></li>
            <li><a href={sources.catholic} target="_blank" rel="noopener noreferrer">NCEA Catholic school statistics <ArrowRight aria-hidden="true" /></a></li>
          </ul>
        </footer>
      </div>
    </article>
  )
}
