import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Church, CircleHelp,
  ClipboardCheck, GraduationCap, Landmark, Mail, Network, School, ShieldCheck, Users,
} from 'lucide-react'
import { trackEvent } from '../lib/analytics'
import './cogic-partner.css'
import './cogic-academy-pages.css'

const base = '/partners/cogic'

export const cogicSections = [
  { slug: 'legacy', name: 'The Legacy', short: 'Legacy', number: '01' },
  { slug: 'national-academy', name: 'COGIC National Academy', short: 'National Academy', number: '02' },
  { slug: 'academics', name: 'Academic Excellence', short: 'Academics', number: '03' },
  { slug: 'student-experience', name: 'The Student Experience', short: 'Student Experience', number: '04' },
  { slug: 'how-it-works', name: 'How It Works', short: 'How It Works', number: '05' },
  { slug: 'economics', name: 'The Economics', short: 'Economics', number: '06' },
  { slug: 'founding-partnership', name: 'Founding Educational Partnership', short: 'Founding Partnership', number: '07' },
] as const

export type CogicSection = typeof cogicSections[number]['slug']

const sourceLinks = {
  founder: 'https://www.cogic.org/about-us/our-founder/',
  education: 'https://www.cogic.org/education/about-us/',
  bishop: 'https://www.cogic.org/about-us/the-executive-branch/the-presiding-bishop/',
  catholic: 'https://ncea.org/NCEA/NCEA/How_We_Serve/News/Press_Releases/National-Data-Highlights-Strong-Demand-and-Growing-Diversity-and-Inclusion-in-Catholic-Schools.aspx',
}

function OutLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="cogic-detail-outlink" href={href} target="_blank" rel="noreferrer noopener">{children} <ArrowRight aria-hidden="true" /></a>
}

function PageLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={secondary ? 'cogic-detail-cta cogic-detail-cta-light' : 'cogic-detail-cta'} to={to}>{children} <ArrowRight aria-hidden="true" /></Link>
}

function Shell({ section, eyebrow, title, intro, image, imageAlt, children }: {
  section: CogicSection
  eyebrow: string
  title: string
  intro: string
  image: string
  imageAlt: string
  children: ReactNode
}) {
  const currentIndex = cogicSections.findIndex(p => p.slug === section)
  const next = cogicSections[currentIndex + 1]
  return (
    <article className="cogic-page cogic-detail">
      <div className="cogic-detail-wrap">
        <nav className="cogic-detail-top" aria-label="COGIC proposal breadcrumb">
          <Link to={base}><ArrowLeft aria-hidden="true" /> COGIC proposal home</Link>
          <span>CAN Academy / Proposed Founding Educational Partner</span>
        </nav>
        <header className="cogic-detail-hero">
          <div className="cogic-detail-hero-copy">
            <p className="cogic-module-label">COGIC National Academy / {eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <span className="cogic-detail-disclaimer">A CAN Academy proposal for discussion. Not an official or endorsed COGIC initiative.</span>
          </div>
          <div className="cogic-detail-hero-photo"><img src={image} alt={imageAlt} /></div>
        </header>
        <nav className="cogic-detail-tabs" aria-label="COGIC academy proposal sections">
          {cogicSections.map(item => (
            <NavLink key={item.slug} to={base + '/' + item.slug} end className={({isActive}) => isActive ? 'is-active' : ''}>
              <span>{item.number}</span> {item.short}
            </NavLink>
          ))}
        </nav>
        <div className="cogic-detail-content">{children}</div>
        <footer className="cogic-detail-footer">
          <div>
            <p className="cogic-overline">The COGIC National Academy proposal</p>
            <h2>One connected vision. A carefully considered beginning.</h2>
            <p>Denominational approval, legal accountability, a viable academic model, and local school readiness are prerequisites to opening a school.</p>
          </div>
          <div className="cogic-detail-footer-actions">
            <PageLink to={base + '/founding-partnership'}>Explore the founding invitation</PageLink>
            {next ? <Link className="cogic-detail-next" to={base + '/' + next.slug}>Next: {next.name} <ArrowRight aria-hidden="true" /></Link>
              : <Link className="cogic-detail-next" to={base}>Return to the COGIC proposal <ArrowRight aria-hidden="true" /></Link>}
          </div>
        </footer>
      </div>
    </article>
  )
}

function Kicker({ children }: { children: ReactNode }) { return <p className="cogic-overline">{children}</p> }

function SectionTitle({ eyebrow, children, description }: { eyebrow: string; children: ReactNode; description?: string }) {
  return <header className="cogic-detail-heading"><Kicker>{eyebrow}</Kicker><h2>{children}</h2>{description && <p>{description}</p>}</header>
}

const legacyTimeline = [
  {year:'1897–1907',title:'A movement takes shape',body:'Bishop Charles Harrison Mason helped establish the Church of God in Christ and developed its national institutional structure.',link:sourceLinks.founder},
  {year:'1970s onward',title:'Education becomes organized institutional work',body:'COGIC developed theological education through the Charles H. Mason Seminary and Bible college network.',link:sourceLinks.education},
  {year:'2000',title:'An Association of Christian Schools',body:'COGIC records that its Education Commission had responsibility for an Association of Christian Schools, as well as history, scholarship, and ministerial education.',link:sourceLinks.education},
  {year:'The opportunity',title:'Build a connected K–12 pathway',body:'A proposed COGIC National Academy could bring the existing legacy of faith formation together with a modern, shared academic delivery model.',link:base+'/national-academy'},
]

export function CogicLegacyPage() {
  return <Shell section="legacy" eyebrow="01 / The legacy" title="What the founders began, the next generation can inherit." intro="Bishop Charles Harrison Mason built more than a congregation. He helped establish a connected church movement. A national school network could become another durable expression of that mission." image="/images/05_rooted_locally_community.png" imageAlt="Students and trusted community members together">
    <section className="cogic-detail-split">
      <div className="cogic-detail-portrait">
        <img src="https://www.cogic.org/wp-content/uploads/2014/12/Bishop-C-1.H.-Mason-709x1024.jpg" alt="Official historical portrait of Bishop Charles Harrison Mason" loading="lazy" />
        <p>Charles Harrison Mason, COGIC founder. Source: <a href={sourceLinks.founder} target="_blank" rel="noopener noreferrer">official COGIC biography</a>.</p>
      </div>
      <div>
        <SectionTitle eyebrow="Institutional legacy">The vision is not imported. It grows from COGIC's own story.</SectionTitle>
        <p>COGIC's strength has always involved the combination of spiritual conviction and connected local congregations. Its educational work includes seminaries, jurisdictional institutes and, historically, an Association of Christian Schools.</p>
        <p>CAN is not proposing that COGIC abandon or duplicate that work. The question is whether these existing traditions could inform a coordinated school system for children and families, built with modern academic and operational infrastructure.</p>
        <OutLink href={sourceLinks.education}>Read COGIC's Education Commission history</OutLink>
      </div>
    </section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="The institutional timeline">Four chapters of one larger story.</SectionTitle>
      <div className="cogic-detail-timeline">{legacyTimeline.map(item => (
        <article key={item.year}><span>{item.year}</span><h3>{item.title}</h3><p>{item.body}</p>{item.link.startsWith('http') ? <OutLink href={item.link}>Historical reference</OutLink> : <Link to={item.link}>See the proposal <ArrowRight aria-hidden="true" /></Link>}</article>
      ))}</div>
    </section>
    <section className="cogic-detail-quote-grid">
      <div className="cogic-detail-dark">
        <Kicker>From educational roots to a national network</Kicker>
        <h2>What would it mean for COGIC children to learn their history in schools that carry their church's identity?</h2>
        <p>The opportunity is not to replace public schools or dictate family choice. It is to make a strong Christian education available to more families who want it.</p>
      </div>
      <div className="cogic-detail-person">
        <img src="https://www.cogic.org/wp-content/uploads/2022/03/pict-PB-sheard.jpg" alt="Official portrait of Presiding Bishop J. Drew Sheard" loading="lazy" />
        <h3>Presiding Bishop J. Drew Sheard</h3>
        <p>COGIC's biography notes his degrees in education and mathematics and his prior leadership of the International Youth Department. This background makes the educational opportunity particularly relevant to a leadership conversation, but does not imply support for CAN.</p>
        <OutLink href={sourceLinks.bishop}>Official biography</OutLink>
      </div>
    </section>
    <section className="cogic-detail-related"><SectionTitle eyebrow="Explore the next chapter">A legacy needs an institution that can carry it forward.</SectionTitle><PageLink to={base+'/national-academy'}>Explore the proposed COGIC National Academy</PageLink></section>
  </Shell>
}

const academyRoles = [
  {label:'National COGIC academy leadership',role:'Faith identity and institutional vision',body:'An authorized national body could approve doctrinal content, national programming, academy identity, and partnership priorities within its governing mandate.',icon:<Landmark aria-hidden="true" />},
  {label:'Ecclesiastical jurisdictions',role:'Regional coordination',body:'Jurisdictions could identify interested congregations, coordinate regional opportunities and support a viable cohort without replacing local school administration.',icon:<Network aria-hidden="true" />},
  {label:'Local church schools',role:'Community and daily operations',body:'Each site would retain its local school leadership, family relationships, supervision, community programming, and final site-administrator control over its local website.',icon:<Church aria-hidden="true" />},
  {label:'CAN Academy',role:'Shared academic and operating infrastructure',body:'CAN would provide academic design, asynchronous teacher-created content, live academic support, enrollment and operating tools, and clearly assigned school-of-record responsibilities.',icon:<GraduationCap aria-hidden="true" />},
]

export function CogicNationalAcademyPage() {
  return <Shell section="national-academy" eyebrow="02 / The national vision" title="COGIC National Academy." intro="One denomination. Many local schools. A connected education system rooted in COGIC's faith, history, traditions, and leadership." image="/images/02_possibility_student_group.png" imageAlt="Students together in an academic and community setting">
    <section className="cogic-detail-thesis">
      <Kicker>The institutional proposition</Kicker>
      <h2>Not a list of independent church schools. A national school system.</h2>
      <p>Imagine a child entering a local COGIC church school, learning from strong teachers, participating in COGIC-approved formation, and knowing they belong to a larger student community. Then imagine that same experience made possible across dozens of jurisdictions without each congregation building every academic capability alone.</p>
      <div className="cogic-detail-thesis-stats">
        <div><strong>1</strong><span>Shared academic backbone</span></div>
        <div><strong>100</strong><span>Illustrative participating churches</span></div>
        <div><strong>5,000</strong><span>Illustrative students at 50 per site</span></div>
      </div>
      <p className="cogic-detail-micro">Illustrative future network, not an enrollment forecast or existing COGIC program.</p>
    </section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="What makes it a system">Four connected layers, with distinct responsibilities.</SectionTitle>
      <div className="cogic-academy-roles">{academyRoles.map(item => <article key={item.label}>{item.icon}<div><h3>{item.label}</h3><strong>{item.role}</strong><p>{item.body}</p></div></article>)}</div>
    </section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="The denomination-wide experience">Shared identity without erasing local leadership.</SectionTitle>
      <div className="cogic-detail-three">
        <article><BookOpen aria-hidden="true" /><h3>COGIC-approved formation</h3><p>History, Holiness-Pentecostal theological distinctives, worship traditions, devotional resources, and an approved faith-content library.</p></article>
        <article><Users aria-hidden="true" /><h3>National student community</h3><p>Shared challenges, student leadership opportunities, service themes, jurisdictional gatherings and optional national activities.</p></article>
        <article><School aria-hidden="true" /><h3>Recognizable local schools</h3><p>Each school can reflect its own church and neighborhood while inheriting approved network-wide academy programming.</p></article>
      </div>
    </section>
    <section className="cogic-detail-section cogic-academy-table-section">
      <SectionTitle eyebrow="Governance by design">The right authority at the right level.</SectionTitle>
      <div className="cogic-table-wrap"><table className="cogic-academy-table"><thead><tr><th>Decision</th><th>Proposed authority</th><th>Boundary</th></tr></thead><tbody>
        <tr><td>Doctrinal and national faith content</td><td>Authorized COGIC academy leadership</td><td>Subject to formal agreement and review</td></tr>
        <tr><td>Academic standards and assessment</td><td>Authorized school/academic leadership and CAN</td><td>Must satisfy applicable school requirements</td></tr>
        <tr><td>Local website and site operations</td><td>Local site administrator</td><td>Final local administrative authority within governing policies</td></tr>
        <tr><td>National student reporting</td><td>Permissioned network leadership</td><td>Aggregated by default; student privacy protected</td></tr>
        <tr><td>Opening authorization and compliance</td><td>Legally responsible operators and regulators</td><td>No launch without documented readiness</td></tr>
      </tbody></table></div>
    </section>
    <section className="cogic-detail-feature">
      <div><Kicker>A common week</Kicker><h2>Monday homeroom. Shared purpose. Local relationships.</h2><p>A fifteen-minute devotional from the Presiding Bishop could be recorded once and viewed throughout the week across participating schools. Students would continue their academics asynchronously and receive live support when they need help, while their church remains their daily community.</p><PageLink to={base+'/student-experience'}>See the student experience</PageLink></div>
      <img src="/images/03_curriculum_student_study.png" alt="Student concentrating on academic work" loading="lazy" />
    </section>
    <section className="cogic-detail-related">
      <SectionTitle eyebrow="Why now">Make the first chapter achievable.</SectionTitle>
      <p>COGIC does not need to replicate every administrative office and full-time teaching staff that conventional school expansion would require at each location. CAN proposes shared infrastructure and a disciplined, site-by-site launch process. The economics and educational model still need to be validated.</p>
      <div className="cogic-detail-actions"><PageLink to={base+'/academics'}>Explore the academic model</PageLink><PageLink secondary to={base+'/founding-partnership'}>The first ten-school proposal</PageLink></div>
    </section>
  </Shell>
}


const cogicAcademicSubjects = [
  { name: 'English & Language Arts', example: 'Analyze a COGIC sermon and a Frederick Douglass speech as persuasive rhetoric; develop a source-based argument about audience, evidence and biblical allusion.' },
  { name: 'Mathematics & Data', example: 'Use algebra to model a hypothetical youth program budget, then apply statistics to responsibly analyze a simulated community dataset.' },
  { name: 'Science', example: 'Use environmental measurements or a supplied dataset to investigate heat and shade near a community learning site; explain evidence and limitations.' },
  { name: 'U.S. History', example: 'Study the Great Migration and the role of congregations in community formation, comparing oral histories with census and archival evidence.' },
  { name: 'World History', example: 'Investigate early Christianity in Alexandria, Carthage and Aksum alongside African kingdoms, intellectual traditions and global history.' },
  { name: 'Government & Economics', example: 'Research religious liberty, civic institutions and Black mutual-aid traditions; prepare an evidence-based policy or financial brief.' },
  { name: 'Bible & Theology', example: 'Study biblical texts alongside approved COGIC historical and theological materials, distinguishing denominational interpretation from historical evidence.' },
]

const cogicScholarProjects = [
  { title: 'COGIC National History Archive', field: 'History · English · Digital humanities', detail: 'Interview elders with consent, verify congregation records and publish a faculty-reviewed digital exhibit with student attribution.' },
  { title: 'Community Data Lab', field: 'Mathematics · Computer science · Economics', detail: 'Analyze approved or simulated datasets, explain the limitations of the evidence and present actionable findings.' },
  { title: 'Environmental Research', field: 'Biology · Chemistry · Environmental science', detail: 'Develop research questions, collect safe measurements under supervision and communicate evidence-based recommendations.' },
  { title: 'Community Enterprise Challenge', field: 'Algebra · Economics · Leadership', detail: 'Model the feasibility of a school or service initiative and defend assumptions before a review panel.' },
  { title: 'Oral History & Storytelling', field: 'English · History · Media', detail: 'Create carefully sourced interviews, histories or documentary projects with appropriate permissions.' },
]

export function CogicAcademicsPage() {
  return <Shell section="academics" eyebrow="03 / Academic excellence" title="Every child deserves the opportunity to rise." intro="A proposed education built on rigorous academics, COGIC's faith and heritage, personalized academic support, and opportunities for research, leadership and college preparation." image="/images/03_curriculum_student_study.png" imageAlt="Student studying academic materials">
    <section className="cogic-detail-thesis">
      <Kicker>One integrated academic experience</Kicker>
      <h2>Meet students where they are. Help them reach what's possible.</h2>
      <p>Some students enter ready for advanced work. Others need help rebuilding essential reading or mathematics skills. Every learner deserves age-respectful, challenging instruction, clear goals and access to meaningful projects. The COGIC Scholars Program is part of this educational vision, not a separate track reserved for top-performing students.</p>
      <div className="cogic-detail-thesis-stats">
        <div><strong>01</strong><span>Standards-aligned academics</span></div>
        <div><strong>02</strong><span>Personalized progress and intervention</span></div>
        <div><strong>03</strong><span>Research, leadership and college readiness</span></div>
      </div>
    </section>
    <section className="cogic-detail-section" id="academic-foundation">
      <SectionTitle eyebrow="Academic foundation">Rigorous courses. Distinctive perspectives.</SectionTitle>
      <p className="cogic-detail-intro">Students study the major academic disciplines while encountering COGIC history, Black intellectual life, African civilizations, church history and faith where the connection strengthens the lesson. Religious formation complements rather than replaces academic standards or scientific inquiry.</p>
      <div className="cogic-academic-subjects">{cogicAcademicSubjects.map((subject) => <article key={subject.name}><h3>{subject.name}</h3><p>{subject.example}</p></article>)}</div>
      <p className="cogic-detail-micro">Illustrative lesson concepts only. Subject specialists would validate academic standards and assessments; authorized COGIC leadership would review denominational doctrine and historical materials.</p>
    </section>
    <section className="cogic-detail-section" id="academic-growth">
      <SectionTitle eyebrow="Academic recovery and acceleration">A starting point is not a ceiling.</SectionTitle>
      <p className="cogic-detail-intro">A ninth grader reading below grade level should receive explicit, targeted literacy support without losing access to age-appropriate ideas, peers, science, history or projects. A student ready for advanced mathematics should have room to move forward. Growth requires more than self-paced software.</p>
      <div className="cogic-academic-growth">
        <article><span>01 / Understand</span><h3>Assess specific strengths and gaps</h3><p>Use appropriate diagnostic information to identify priority skills, without reducing the student to a single grade-equivalent label.</p></article>
        <article><span>02 / Plan</span><h3>Set individual learning goals</h3><p>Establish measurable goals, accessible materials, appropriate challenge and family communication.</p></article>
        <article><span>03 / Support</span><h3>Provide targeted teaching</h3><p>Qualified educators deliver structured literacy, mathematics intervention, tutoring or specialized services as needed, alongside the asynchronous academic core.</p></article>
        <article><span>04 / Monitor</span><h3>Adjust based on progress</h3><p>Check skill mastery regularly and change the intervention when evidence shows it is not working.</p></article>
        <article><span>05 / Extend</span><h3>Accelerate and enrich</h3><p>Make advanced courses and meaningful research available when students show readiness, including across different subjects.</p></article>
      </div>
      <div className="cogic-academic-example"><strong>Three students. One commitment to growth.</strong><p><b>Rebuilding foundations:</b> a Grade 9 student receives explicit reading support while completing accessible, age-appropriate coursework. <b>On track:</b> another student completes grade-level courses and participates in a history research project. <b>Ready to accelerate:</b> a third student advances in mathematics while exploring community data analysis.</p><small>Hypothetical scenarios, not implemented services or guaranteed outcomes. Specialized support, accessibility and disability-related obligations depend on the legally authorized operating model and qualified staff.</small></div>
    </section>
    <section className="cogic-detail-section" id="cogic-scholars">
      <SectionTitle eyebrow="The proposed COGIC Scholars Program">From curiosity to original work, leadership and contribution.</SectionTitle>
      <p className="cogic-detail-intro">A four-year progression could help students build research skills and create increasingly substantive work. Students needing academic support are not excluded from inquiry, service or creative achievement.</p>
      <div className="cogic-academic-pathway">
        {[
          ['09','Discover','Learn research skills, explore community history and begin a portfolio.'],
          ['10','Investigate','Formulate questions, evaluate evidence and complete a substantive project.'],
          ['11','Lead','Pursue advanced inquiry, mentor peers or collaborate with a community partner.'],
          ['12','Contribute','Produce a capstone, publish or present reviewed work, and reflect on next steps.'],
        ].map(([grade,title,description]) => <article key={grade}><span>Grade {grade}</span><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </section>
    <section className="cogic-detail-section" id="signature-projects">
      <SectionTitle eyebrow="Signature learning experiences">The classroom can create work worth sharing.</SectionTitle>
      <div className="cogic-academic-subjects">{cogicScholarProjects.map(project => <article key={project.title}><span className="cogic-overline">{project.field}</span><h3>{project.title}</h3><p>{project.detail}</p></article>)}</div>
      <p className="cogic-detail-micro">Publication, interviews, fieldwork and any public showcase require faculty review, age-appropriate safeguarding, student privacy and informed consent.</p>
    </section>
    <section className="cogic-detail-section" id="college-readiness">
      <SectionTitle eyebrow="College and career readiness">Help students demonstrate what they can do.</SectionTitle>
      <div className="cogic-detail-three">
        <article><BookOpen aria-hidden="true" /><h3>Verified student portfolio</h3><p>Collect authentic projects, drafts, reflections and faculty feedback with clear individual attribution.</p></article>
        <article><GraduationCap aria-hidden="true" /><h3>Preparation for next steps</h3><p>Support academic planning, career exploration, college applications and scholarship preparation.</p></article>
        <article><Users aria-hidden="true" /><h3>National research community</h3><p>Explore optional showcases, mentorship and collaboration across participating jurisdictions.</p></article>
      </div>
      <p className="cogic-detail-micro">Coursework, extracurricular achievements and academic distinctions must be recorded accurately. No admission, scholarship, college credit or publication outcome is guaranteed.</p>
    </section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="How the model would operate">National standards, accountable academics, trusted local relationships.</SectionTitle>
      <p className="cogic-detail-intro">CAN's proposed shared academic infrastructure would provide course design, assessments, progress tools and pathways for qualified teacher support. Authorized academic leadership would own educational quality and grading; COGIC leadership would approve denominational content; local church sites would provide supervision and community. The actual intervention services, staffing, disability accommodations and school-of-record duties must be validated before launch.</p>
      <div className="cogic-detail-actions"><PageLink to={base+'/student-experience'}>Explore student life</PageLink><PageLink secondary to={base+'/founding-partnership'}>Discuss the founding cohort</PageLink></div>
    </section>
  </Shell>
}

const weeklyRhythm = [
  {time:'Monday',title:'A shared opening',body:'A proposed 15-minute prerecorded homeroom devotional from the Presiding Bishop. A local facilitator may lead reflection.'},
  {time:'Daily',title:'Students choose their academic path',body:'Students work through standards-aligned, teacher-developed asynchronous content and can select approved teachers and course experiences where available.'},
  {time:'When needed',title:'Live support without mandatory live lectures',body:'Qualified educators would provide targeted literacy or mathematics intervention, tutoring, feedback and academic coaching where needed, with progress monitored over time.'},
  {time:'Throughout the week',title:'Belonging close to home',body:'Local adults supervise the school day, connect with families, host Circles, activities and service opportunities.'},
]

export function CogicStudentExperiencePage() {
  const [active,setActive] = useState<'homeroom'|'faith'|'community'>('homeroom')
  return <Shell section="student-experience" eyebrow="04 / The student experience" title="An education that feels distinctly COGIC." intro="The student would have the reach of a shared academic network and the care of a local church community, with COGIC's identity represented in approved programming." image="/images/06_student_experience_portrait.png" imageAlt="Student looking forward with confidence">
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="A signature shared experience">Homeroom with the Presiding Bishop.</SectionTitle>
      <div className="cogic-student-stage">
        <img src="https://www.cogic.org/wp-content/uploads/2022/03/pict-PB-sheard.jpg" alt="Official portrait of Presiding Bishop J. Drew Sheard" loading="lazy" />
        <div><Kicker>Proposed concept / No recorded video</Kicker><h3>Fifteen minutes that can connect a national student body.</h3><p>Imagine a short weekly message, prepared by approved denominational leadership, paired with reflection prompts and optional local discussion. It can be viewed on demand, so academic instruction does not depend on live national scheduling.</p><span>Weekly · 15 min · Asynchronous by default</span><OutLink href={sourceLinks.bishop}>Leader biography and portrait source</OutLink></div>
      </div>
      <p className="cogic-detail-micro">This concept is not sponsored or endorsed by Presiding Bishop Sheard or the Church of God in Christ.</p>
    </section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="Explore the academy layer">What the denomination can bring to a child's school week.</SectionTitle>
      <div className="cogic-student-selector" role="group" aria-label="Student experience example">
        {([['homeroom',"National homeroom"],['faith',"Faith and curriculum"],['community',"Student community"]] as const).map(([value,label])=><button key={value} type="button" aria-pressed={active===value} onClick={()=>setActive(value)}>{label}</button>)}
      </div>
      <div className="cogic-student-preview">
        {active==='homeroom' ? <><Kicker>Proposed national media library</Kicker><h3>A message from the Presiding Bishop, a reflection prompt, and a school-wide theme.</h3><p>A national publisher could make an approved devotional available to affiliated schools. The site administrator could schedule the local homeroom, with participation requirements defined by the agreed academy model.</p></> :
        active==='faith' ? <><Kicker>Curriculum and formation</Kicker><h3>COGIC history, holiness tradition and intentional faith integration.</h3><p>Denomination-approved courses and materials could supplement the shared CAN academic core. Science, mathematics, literacy, graduation pathways and other required academic standards would remain intact.</p></> :
        <><Kicker>Shared identity and student relationships</Kicker><h3>One student body, many local communities.</h3><p>Shared service themes, student showcases, discipleship circles and regional events could connect children across jurisdictions while everyday relationships remain local.</p></>}
      </div>
    </section>
    <section className="cogic-detail-section"><SectionTitle eyebrow="How learning actually works">Recorded teaching. Live help. Real local community.</SectionTitle><div className="cogic-detail-timeline">{weeklyRhythm.map(item=><article key={item.time}><span>{item.time}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
    <section className="cogic-detail-three cogic-detail-section">
      <article><GraduationCap aria-hidden="true" /><h3>Academic rigor and growth</h3><p>Standards-aligned courses, diagnostic assessment, targeted academic recovery, acceleration and progress monitoring, subject to qualified staffing and validation.</p></article>
      <article><Church aria-hidden="true" /><h3>Local formation</h3><p>Pastors and trusted adults provide community and faith programming appropriate to school policies and family choice.</p></article>
      <article><ShieldCheck aria-hidden="true" /><h3>Student well-being</h3><p>Qualified support, safeguarding, accessibility and clear family expectations must be designed and validated for the actual school model.</p></article>
    </section>
    <section className="cogic-detail-related"><SectionTitle eyebrow="Continue on CAN">Go deeper into the academic foundation.</SectionTitle><div className="cogic-detail-actions"><PageLink to={base+'/national-academy'}>The COGIC academy vision</PageLink><PageLink secondary to={base+'/academics'}>Academics and COGIC Scholars</PageLink></div></section>
  </Shell>
}

const launchSteps = [
  {tag:'Configure',number:'01',title:'Create the school stub',body:'A qualified site administrator signs up, establishes the basic school profile, confirms its affiliation context, and enters the COGIC academy launch environment.'},
  {tag:'Build',number:'02',title:'Develop the school identity and website',body:'The administrator selects a school-site template, verifies local information, and controls the local school website. National academy standards are inherited only where formally authorized.'},
  {tag:'Invite',number:'03',title:'Invite the school team',body:'Bring in room facilitators, a registrar, site operations personnel and other relevant staff with role-scoped access and responsibilities.'},
  {tag:'Recruit',number:'04',title:'Invite families and gather interest',body:'Launch a community interest event, publish a school landing page and invite families to register interest before making operating commitments.'},
  {tag:'Qualify',number:'05',title:'Complete opening readiness',body:'Document facilities, student safeguarding, staffing, curriculum and records responsibilities, financial viability and state-specific requirements.'},
  {tag:'Operate',number:'06',title:'Move into the school dashboard',body:'After the school is authorized and launched, routine workflows move into the operating experience. Launch artifacts remain accessible through settings and records.'},
]

export function CogicHowItWorksPage() {
  return <Shell section="how-it-works" eyebrow="04 / Implementation" title="An academy churches can build on, not rebuild." intro="A school workspace can be configured quickly. Opening a responsible school still takes deliberate preparation. CAN separates these two experiences." image="/images/04_platform_local_campus.png" imageAlt="Students outside a school and church community">
    <section className="cogic-detail-section">
      <div className="cogic-how-banner"><span><strong>About 1 hour</strong><small>Initial school configuration target</small></span><span><strong>Readiness before opening</strong><small>Compliance, staffing, enrollment and authorization</small></span></div>
      <SectionTitle eyebrow="The school-launch journey">Six steps from a school idea to an operating school.</SectionTitle>
      <div className="cogic-launch-deep-steps">{launchSteps.map(item=><article key={item.number}><div className="cogic-launch-deep-step-index"><span>{item.number}</span><small>{item.tag}</small></div><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>
    </section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="Who does what">One national identity. Clear local authority.</SectionTitle>
      <div className="cogic-detail-three">
        <article><Landmark aria-hidden="true" /><h3>Proposed COGIC academy authority</h3><p>Approved national identity, formation standards, network programs and appropriate oversight under a negotiated partnership.</p></article>
        <article><School aria-hidden="true" /><h3>Local site administrator</h3><p>Final local authority for the school website and site operations within the governing agreement. School staffing and family relationships remain accountable locally.</p></article>
        <article><ClipboardCheck aria-hidden="true" /><h3>CAN and academic operators</h3><p>Common platform services, teacher-developed recorded instruction, live academic support, operations, assessment and clearly assigned academic records and compliance duties.</p></article>
      </div>
    </section>
    <section className="cogic-detail-feature"><div><Kicker>School leadership demo</Kicker><h2>Launch Studio first. Then the school dashboard.</h2><p>Launch Studio is a guided workspace, not a replacement for educational readiness. Once the school opens, administrators operate through role-specific dashboards, with the launch records retained for audit and reference.</p><PageLink to="/launch-approach">Explore CAN's general launch approach</PageLink></div><img src="/images/07_economics_leadership_meeting.png" alt="Education and community leaders collaborating" loading="lazy" /></section>
    <section className="cogic-detail-related"><SectionTitle eyebrow="A disciplined first cohort">Every school must earn its launch.</SectionTitle><p>The proposed COGIC network should identify schools with demonstrated demand, viable facilities, qualified adults and a workable school-of-record and compliance structure. CAN's one-hour configuration does not waive these obligations.</p><PageLink to={base+'/founding-partnership'}>See the COGIC founding-cohort plan</PageLink></section>
  </Shell>
}

function formatMoney(n:number) {return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n)}
export function CogicEconomicsPage() {
  const [sites,setSites]=useState(100)
  const [students,setStudents]=useState(50)
  const [tuition,setTuition]=useState(10000)
  const [academicCost,setAcademicCost]=useState(5000)
  const [siteCost,setSiteCost]=useState(150000)
  const [otherCost,setOtherCost]=useState(1000)
  const [cogicShareRate,setCogicShareRate]=useState(15)
  const totalEnrollment=sites*students
  const total=totalEnrollment*tuition
  const academics=totalEnrollment*academicCost
  const local=sites*siteCost
  const other=totalEnrollment*otherCost
  const cogicShare=total*cogicShareRate/100
  const remaining=total-academics-local-other-cogicShare
  const lineItems=[
    {name:'COGIC national revenue share ('+cogicShareRate+'% scenario)',value:cogicShare},
    {name:'Shared academic and support costs',value:academics},
    {name:'Local site operations',value:local},
    {name:'Other estimated costs',value:other},
    {name:'Unallocated balance after share and modeled costs',value:remaining},
  ]
  return <Shell section="economics" eyebrow="06 / Economics" title="What could a national academy make possible?" intro="A school system can strengthen local congregations only when it educates children well and can support its own academic, operating and accountability obligations." image="/images/07_economics_leadership_meeting.png" imageAlt="Church and education leaders discussing the economics of schools">
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="Interactive planning model">Total tuition generated. A separate COGIC national share.</SectionTitle>
      <p className="cogic-detail-intro">Explore total generated tuition revenue, the proposed 5%–20% COGIC national revenue share, and resources remaining after modeled costs. The applicable percentage would depend on total network enrollment; exact enrollment thresholds remain to be agreed. Figures are illustrations, not approved terms or profit forecasts.</p>
      <div className="cogic-economics-workbench">
        <div className="cogic-economics-controls">
          <fieldset><legend>Participating churches</legend><div className="cogic-site-choices">{[10,100,500].map(n=><button type="button" aria-pressed={n===sites} onClick={()=>setSites(n)} key={n}>{n}</button>)}</div></fieldset>
          <label>Enrolled students per church<select value={students} onChange={e=>setStudents(+e.target.value)}><option value={25}>25 students</option><option value={50}>50 students</option><option value={75}>75 students</option></select></label>
          <label>Collected tuition per student<select value={tuition} onChange={e=>setTuition(+e.target.value)}><option value={8000}>$8,000</option><option value={10000}>$10,000</option><option value={12000}>$12,000</option></select></label>
          <label>COGIC share rate · scenario<select value={cogicShareRate} onChange={e=>setCogicShareRate(+e.target.value)}><option value={5}>5%</option><option value={10}>10%</option><option value={15}>15%</option><option value={20}>20%</option></select></label>
          <p className="cogic-share-guidance">COGIC's proposed share increases within a 5%–20% range based on enrolled students across the network. Select a rate for illustration; the actual enrollment breakpoints have not yet been defined.</p>
          <label>Illustrative shared academic cost per student<select value={academicCost} onChange={e=>setAcademicCost(+e.target.value)}><option value={4000}>$4,000</option><option value={5000}>$5,000</option><option value={6000}>$6,000</option></select></label>
          <label>Illustrative local operating cost per school<select value={siteCost} onChange={e=>setSiteCost(+e.target.value)}><option value={100000}>$100,000</option><option value={150000}>$150,000</option><option value={200000}>$200,000</option></select></label>
          <label>Illustrative other cost per student<select value={otherCost} onChange={e=>setOtherCost(+e.target.value)}><option value={500}>$500</option><option value={1000}>$1,000</option><option value={1500}>$1,500</option></select></label>
        </div>
        <div className="cogic-economics-results" aria-live="polite" aria-atomic="true">
          <Kicker>Total generated annual tuition revenue · Illustrative</Kicker>
          <strong className="cogic-economics-gross">{formatMoney(total)}</strong>
          <p>{totalEnrollment.toLocaleString('en-US')} enrolled students across {sites} churches. This is total network revenue, not COGIC's share.</p>
          <p className="cogic-economics-share-range">COGIC share at 5%–20%: <strong>{formatMoney(total*0.05)} – {formatMoney(total*0.20)}</strong></p>
          <div className="cogic-economics-rows">{lineItems.map(item=><div key={item.name}><span>{item.name}</span><strong className={item.value<0?'is-negative':''}>{formatMoney(item.value)}</strong></div>)}</div>
          <div className="cogic-economics-status">{remaining<0 ? <><CircleHelp aria-hidden="true"/><span>The modeled budget has a shortfall after the chosen COGIC share and operating costs. The financial and educational plan would require changes before launch.</span></> : <><ShieldCheck aria-hidden="true"/><span>This is a modeled balance after the selected COGIC revenue share, not profit or a local-church distribution. Additional obligations, aid, collections and reserves must be assessed.</span></>}</div>
        </div>
      </div>
    </section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="Before making economic promises">Three things a national partner should validate.</SectionTitle>
      <div className="cogic-detail-three cogic-econ-principles">
        <article><h3>Academic quality</h3><p>A shared system should be measured on learning outcomes, service delivery and student support, not only cost reduction.</p></article>
        <article><h3>Revenue sharing and viability</h3><p>The proposed 5%–20% COGIC national share is modeled against tuition revenue, not net profit. Final enrollment thresholds, eligible revenue, payment timing, operating costs and reserves require an agreement.</p></article>
        <article><h3>Eligibility and affordability</h3><p>State funding programs, school eligibility, family demand and tuition collections need case-by-case validation.</p></article>
      </div>
    </section>
    <section className="cogic-detail-feature"><div><Kicker>Founding partnership economics</Kicker><h2>Start with ten sites, learn the true unit economics, then expand.</h2><p>The founding cohort can establish credible per-school staffing, operating and funding assumptions before any national-scale claims are made.</p><PageLink to={base+'/founding-partnership'}>Explore the proposed pilot</PageLink></div><img src="/images/08_explore_audience_roles.png" loading="lazy" alt="Education and community leaders meeting" /></section>
    <section className="cogic-detail-related"><SectionTitle eyebrow="Learn more from CAN">The shared model is the economic innovation.</SectionTitle><PageLink secondary to="/economic-breakthrough">Read the CAN economics framework</PageLink></section>
  </Shell>
}

const cohortStages = [
  {step:'01',heading:'Agree on a founding sponsor',body:'Identify the denominational leader or authorized education body that can evaluate COGIC curriculum standards, use of identity, partner obligations and pilot governance.'},
  {step:'02',heading:'Recruit and qualify ten church candidates',body:'Invite jurisdictional and local leaders to express interest. Validate families, facilities, staffing and local leadership before selecting schools.'},
  {step:'03',heading:'Design the academy together',body:'Confirm academic delivery, approved faith-content layers, national programming, financial responsibilities, oversight, reporting and school-of-record arrangements.'},
  {step:'04',heading:'Open only ready sites and evaluate',body:'Move from configurations to operating schools after review. Study educational quality, family experience, operating economics and governance before expanding.'},
]

function CogicInquiry() {
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle')
  async function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    const form=event.currentTarget
    if(status==='sending') return
    setStatus('sending')
    const values=new URLSearchParams()
    new FormData(form).forEach((value,key)=>values.append(key,String(value)))
    values.set('form-name','cogic-founding-partner')
    trackEvent('contact_submit',{context:'cogic-founding-partner'})
    try {
      const response=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:values.toString()})
      if(!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
      trackEvent('contact_success',{context:'cogic-founding-partner'})
    } catch {
      setStatus('error')
      trackEvent('contact_error',{context:'cogic-founding-partner'})
    }
  }
  return <div className="cogic-founding-form-wrap" id="cogic-founding-inquiry">
    <div><Kicker>COGIC National Academy / Leadership inquiry</Kicker><h2>Begin the founding partnership conversation.</h2><p>This invitation is tailored to denominational and jurisdictional leadership evaluating the potential for a COGIC academy. It is not a general CAN contact form and creates no official partnership or commitment.</p></div>
    {status==='success'?<div className="cogic-founding-success" role="status"><CheckCircle2 aria-hidden="true"/><h3>Inquiry submitted.</h3><p>Thank you for exploring the COGIC National Academy proposal. Your information was submitted to CAN Academy for follow-up.</p><Link to={base}>Return to the COGIC proposal <ArrowRight aria-hidden="true"/></Link></div>:
    <form className="cogic-founding-form" name="cogic-founding-partner" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="cogic-founding-partner"/>
      <input type="hidden" name="partner" value="cogic"/>
      <input type="hidden" name="proposal" value="cogic-national-academy"/>
      <div className="cogic-honeypot"><label>Do not fill out <input name="bot-field" tabIndex={-1} autoComplete="off"/></label></div>
      <div className="cogic-founding-form-grid">
        <label>Full name <input name="name" autoComplete="name" required/></label>
        <label>Work email <input name="email" type="email" autoComplete="email" required/></label>
        <label>Role or title <input name="role" placeholder="Bishop, education leader, pastor..." required/></label>
        <label>Jurisdiction, church or organization <input name="organization" autoComplete="organization" required/></label>
      </div>
      <div className="cogic-founding-form-grid">
        <label>What best describes your interest?
          <select name="interest" defaultValue="" required><option value="" disabled>Select a focus</option><option>National educational partnership</option><option>Jurisdictional participation</option><option>Local founding church candidate</option><option>Academic or operational collaboration</option></select>
        </label>
        <label>Potential church sites (optional)
          <select name="sites" defaultValue=""><option value="">Not yet determined</option><option>1</option><option>2–5</option><option>6–10</option><option>More than 10</option></select>
        </label>
      </div>
      <label>What should the founding conversation address?<textarea name="message" rows={5} placeholder="Share the opportunity you see, a question, or the next conversation you would like to have." required/></label>
      <p className="cogic-founding-privacy">Please do not include student records or other sensitive information. Submitting authorizes CAN Academy to reply to this inquiry. <Link to="/privacy">Privacy notice</Link>.</p>
      <button type="submit" disabled={status==='sending'}><Mail aria-hidden="true"/>{status==='sending'?'Submitting inquiry...':'Submit COGIC founding inquiry'} <ArrowRight aria-hidden="true"/></button>
      {status==='error' && <p className="cogic-founding-error" role="alert">We could not submit your inquiry. Please try again or contact hello@canacademy.org.</p>}
    </form>}
  </div>
}

export function CogicFoundingPartnershipPage() {
  return <Shell section="founding-partnership" eyebrow="06 / The invitation" title="Let's build the first ten schools together." intro="An invitation for the Church of God in Christ to explore becoming a CAN Founding Educational Partner and help shape a connected national academy." image="/images/08_explore_audience_roles.png" imageAlt="Education and community leaders discussing collaboration">
    <section className="cogic-detail-thesis cogic-founding-thesis"><Kicker>Proposed founding cohort, not an existing agreement</Kicker><h2>One shared mission. Ten carefully selected church sites. A national academy to develop together.</h2><p>This is an opportunity to test a model for excellent academics, denomination-specific formation and sustainable local delivery, with COGIC leadership guiding the faith and institutional dimensions and CAN providing the shared academic platform.</p><div className="cogic-detail-thesis-stats"><div><strong>10</strong><span>Candidate local church sites</span></div><div><strong>1</strong><span>Coordinated academy vision</span></div><div><strong>2027</strong><span>Target pilot year, conditional on readiness</span></div></div></section>
    <section className="cogic-detail-section"><SectionTitle eyebrow="A distinctive institutional offer">What a founding educational partnership could include.</SectionTitle>
      <div className="cogic-detail-three">
        <article><Landmark aria-hidden="true"/><h3>A proposed COGIC National Academy</h3><p>A distinct educational network identity, approved denominational curriculum and programming, and defined governance roles.</p></article>
        <article><BookOpen aria-hidden="true"/><h3>National faith and student programming</h3><p>Potential weekly bishop's homeroom, approved faith content, shared themes and network-wide student experiences.</p></article>
        <article><Network aria-hidden="true"/><h3>Ten-site implementation cohort</h3><p>Qualification, training, implementation guidance, network reporting and structured evaluations, all subject to a later agreement.</p></article>
      </div>
    </section>
    <section className="cogic-detail-section"><SectionTitle eyebrow="How we would start">A deliberate founding process.</SectionTitle><div className="cogic-founding-stages">{cohortStages.map(item=><article key={item.step}><span>{item.step}</span><div><h3>{item.heading}</h3><p>{item.body}</p></div></article>)}</div></section>
    <section className="cogic-detail-section">
      <SectionTitle eyebrow="Clear institutional boundaries">What the invitation does and does not ask.</SectionTitle>
      <div className="cogic-founding-boundaries">
        <div><h3>It asks COGIC leadership to consider</h3><ul><li>Identifying authorized national education sponsors</li><li>Helping identify jurisdictions and pastors interested in exploration</li><li>Defining doctrinal, school, reporting and partnership requirements</li><li>Evaluating a proposed cohort before any launch approval</li></ul></div>
        <div><h3>It does not presume</h3><ul><li>COGIC endorsement or permission to use its identity commercially</li><li>Automatic authorization to operate as a school</li><li>Guaranteed scholarships, enrollment or denominational revenue</li><li>Control by CAN over religious doctrine or local school websites</li></ul></div>
      </div>
    </section>
    <CogicInquiry/>
    <section className="cogic-detail-related"><SectionTitle eyebrow="Review the complete case">A national education vision, not just a technology purchase.</SectionTitle><div className="cogic-detail-actions"><PageLink to={base+'/national-academy'}>The National Academy vision</PageLink><PageLink secondary to={base+'/economics'}>Economic scenarios</PageLink></div></section>
  </Shell>
}

export function CogicAcademyDetailPage({section}:{section:CogicSection}) {
  switch(section){
    case 'legacy':return <CogicLegacyPage/>
    case 'national-academy':return <CogicNationalAcademyPage/>
    case 'academics':return <CogicAcademicsPage/>
    case 'student-experience':return <CogicStudentExperiencePage/>
    case 'how-it-works':return <CogicHowItWorksPage/>
    case 'economics':return <CogicEconomicsPage/>
    case 'founding-partnership':return <CogicFoundingPartnershipPage/>
  }
}
