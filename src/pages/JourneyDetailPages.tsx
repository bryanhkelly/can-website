import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Church, ClipboardCheck, GraduationCap, HeartHandshake, Mail, MapPin, ShieldCheck, Users } from 'lucide-react'
import { trackEvent } from '../lib/analytics'
import { journeyBase } from './JourneyPartnerPage'
import './cogic-partner.css'
import './cogic-academy-pages.css'
import './journey-partner.css'

const pages = [
  { slug:'opportunity', label:'The Opportunity', number:'01', short:'Opportunity' },
  { slug:'journey-story', label:'The Journey Story', number:'02', short:'Our Story' },
  { slug:'academy', label:'The Proposed Academy', number:'03', short:'The Academy' },
  { slug:'student-experience', label:'Student Experience', number:'04', short:'Experience' },
  { slug:'how-it-works', label:'How It Works', number:'05', short:'How It Works' },
  { slug:'founding-partnership', label:'Economics & Founding Partnership', number:'06', short:'Partnership' },
] as const
export type JourneySection = typeof pages[number]['slug']

const source = {
  history:'https://thejourneyfamily.com/ourstory-',
  beliefs:'https://thejourneyfamily.com/beliefs',
  future:'https://thejourneyfamily.com/started',
  students:'https://thejourneyfamily.com/students',
  census:'https://www.census.gov/quickfacts/fact/table/nassaucountyflorida/PST045225',
  homeEd:'https://www.fldoe.org/file/5606/HomeEd-Sept-2024.pdf',
  florida:'https://www.fldoe.org/schools/school-choice/',
  district:'https://www.nassau.k12.fl.us/',
}

function Kicker({children}:{children:ReactNode}) {return <p className="cogic-overline">{children}</p>}
function SectionHeading({tag,children,description}:{tag:string,children:ReactNode,description?:string}) {
  return <header className="cogic-detail-heading"><Kicker>{tag}</Kicker><h2>{children}</h2>{description&&<p>{description}</p>}</header>
}
function PageLink({to,children,light=false}:{to:string,children:ReactNode,light?:boolean}) {
  return <Link to={to} className={light?'cogic-detail-cta cogic-detail-cta-light':'cogic-detail-cta'}>{children}<ArrowRight aria-hidden="true"/></Link>
}
function Outside({to,children}:{to:string,children:ReactNode}) {
  return <a href={to} target="_blank" rel="noopener noreferrer" className="cogic-detail-outlink">{children}<ArrowRight aria-hidden="true"/></a>
}
function CanLink({to,children}:{to:string,children:ReactNode}) {
  const url = to + (to.includes('?') ? '&' : '?') + 'partner=the-journey-church'
  return <Link to={url} className="cogic-detail-outlink">{children}<ArrowRight aria-hidden="true"/></Link>
}

function Shell({section,eyebrow,title,intro,image,imageAlt,children}:{section:JourneySection,eyebrow:string,title:string,intro:string,image:string,imageAlt:string,children:ReactNode}) {
  const currentIndex=pages.findIndex(p=>p.slug===section)
  const next=pages[currentIndex+1]
  return <article className="cogic-page cogic-detail journey-page journey-detail">
    <div className="cogic-detail-wrap">
      <nav className="cogic-detail-top" aria-label="Journey proposal breadcrumbs">
        <Link to={journeyBase}><ArrowLeft aria-hidden="true"/> The Journey proposal home</Link>
        <span>CAN Academy / An independent single-church proposal</span>
      </nav>
      <header className="cogic-detail-hero">
        <div className="cogic-detail-hero-copy">
          <p className="cogic-module-label">The Journey Church / {eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span className="cogic-detail-disclaimer">An independent CAN Academy proposal, not an official or endorsed initiative of The Journey Church. Photographs of students are illustrative.</span>
        </div>
        <div className="cogic-detail-hero-photo">
          <img src={image} alt={imageAlt} />
          <span className="journey-image-label">Illustrative CAN photography</span>
        </div>
      </header>
      <nav className="cogic-detail-tabs" aria-label="Journey proposal chapters">
        {pages.map(page=><NavLink key={page.slug} to={journeyBase+'/'+page.slug} end className={({isActive})=>isActive?'is-active':''}>
          <span>{page.number}</span>{page.short}
        </NavLink>)}
      </nav>
      <div className="cogic-detail-content">{children}</div>
      <footer className="cogic-detail-footer">
        <div>
          <Kicker>One church / one possible school</Kicker>
          <h2>The next chapter is a conversation, not a commitment.</h2>
          <p>Before a school could open, CAN and local leaders would need validated family demand, feasible campus arrangements, financial resources, safeguarding and documented legal authorization.</p>
        </div>
        <div className="cogic-detail-footer-actions">
          <PageLink to={journeyBase+'/founding-partnership#journey-inquiry'}>Discuss a founding conversation</PageLink>
          {next ? <Link className="cogic-detail-next" to={journeyBase+'/'+next.slug}>Next: {next.label}<ArrowRight aria-hidden="true"/></Link>
             : <Link className="cogic-detail-next" to={journeyBase}>Return to all seven chapters<ArrowRight aria-hidden="true"/></Link>}
        </div>
      </footer>
    </div>
  </article>
}

const questions=[
  {label:'Distinct family demand',body:'Which families would seriously consider a local Christian school, and why would they choose it over their current educational options?'},
  {label:'Affordability',body:'What family contribution is realistic after verifying any applicable scholarships and school eligibility requirements?'},
  {label:'Local capacity',body:'What is the right initial age range, weekday space, supervision plan, accessibility provision and staffing model?'},
  {label:'A responsible first cohort',body:'Can the school support its students at 25, 50 or 75 enrolled students without relying on speculative expansion?'},
]
export function JourneyOpportunityPage(){
 return <Shell section="opportunity" eyebrow="01 / The opportunity" title="A strong community. Another meaningful choice." intro="Nassau County families already benefit from strong public schools. The question is whether some also want academic excellence, Christian formation and close-knit local community in one school." image="/images/01_stakes_student_hero.png" imageAlt="Illustrative student image">
   <section className="cogic-detail-thesis"><Kicker>Start with the truth</Kicker><h2>We're not building a case against the schools families already have.</h2><p>Nassau County reported an A district grade in 2026. The proposed Journey school should compete by offering a distinct educational experience, not by making unsupported claims about public-school failures. It should also complement The Journey's positive relationships with the wider community.</p>
     <div className="cogic-detail-thesis-stats"><div><strong>A</strong><span>District 2026 grade</span></div><div><strong>1</strong><span>Proposed first school location</span></div><div><strong>6–12</strong><span>Proposed grades for exploration</span></div></div>
     <p className="cogic-detail-micro">These are context points, not evidence of enrollment demand or approval.</p>
   </section>
   <section className="cogic-detail-section"><SectionHeading tag="The four questions" description="A disciplined founding conversation should test the opportunity before promising a launch.">What would make this an education families actually choose?</SectionHeading>
     <div className="cogic-detail-timeline">{questions.map(q=><article key={q.label}><h3>{q.label}</h3><p>{q.body}</p></article>)}</div>
   </section>
   <section className="cogic-detail-section"><SectionHeading tag="Sources and context">What we know, and what we still need to learn.</SectionHeading>
     <div className="journey-evidence-grid">
       <div><strong>Verified context</strong><p>The church's own history describes 40 acres at Amelia Concourse and investment in ministry and community spaces. That does not mean classrooms are available or suitable.</p><Outside to={source.history}>The Journey / Our Story</Outside></div>
       <div><strong>Market context</strong><p>U.S. Census estimates show county growth. The Florida education department publishes home-education data. Neither directly measures interest in this academy.</p><Outside to={source.census}>U.S. Census estimates</Outside><Outside to={source.homeEd}>Florida home-education report</Outside></div>
       <div><strong>Demand still unverified</strong><p>Neighborhood-level family interviews, age distribution, tuition sensitivity, special education planning, competing options and potential transport all require discovery.</p><CanLink to="/evidence/market-research">Explore CAN's market research framework</CanLink></div>
     </div>
   </section>
   <section className="cogic-detail-feature"><div><Kicker>The proposition</Kicker><h2>Academic ambition. Meaningful faith. A community that knows the student.</h2><p>A proposed small school community could create another choice for families who value Christian formation alongside a coherent path to graduation. The fit and demand must be demonstrated, not assumed.</p><PageLink to={journeyBase+'/academy'}>Explore the proposed school</PageLink></div><img src="/images/02_possibility_student_group.png" alt="Illustrative students in a school community"/></section>
 </Shell>
}

const journeyMilestones=[
  {year:'2006',title:'The calling',body:'Darryl and Kara Bellar discerned a call to return to Nassau County and begin a new church.'},
  {year:'2007',title:'Thirteen in a home',body:'On January 28, thirteen people met to dream and plan; the first public worship service followed on Easter Sunday.'},
  {year:'2013',title:'A permanent campus',body:'The church’s official history says it moved into its Amelia Concourse facility in spring 2013.'},
  {year:'Today',title:'A wider community focus',body:'The church describes its outreach, youth ministry and an ongoing vision for multi-use spaces for families.'},
]
export function JourneyStoryPage(){
 return <Shell section="journey-story" eyebrow="02 / Their story" title="It started with thirteen people and a vision." intro="The most credible case for a Journey school begins with the ministry already established—not with an invented campus or a generic school pitch." image="/images/05_rooted_locally_community.png" imageAlt="Illustrative church community imagery">
   <section className="cogic-detail-section"><SectionHeading tag="The founding story" description="The Journey's published history is the source for these milestones.">A church built to reach people.</SectionHeading>
     <div className="cogic-detail-timeline">{journeyMilestones.map(m=><article key={m.year}><span>{m.year}</span><h3>{m.title}</h3><p>{m.body}</p></article>)}</div><Outside to={source.history}>Read The Journey's official founding story</Outside>
   </section>
   <section className="cogic-detail-quote-grid">
     <div className="cogic-detail-dark"><Kicker>Mission and values</Kicker><h2>Unity. Creativity. Excellence. Stewardship.</h2><p>The Journey's values provide a useful set of questions for a school: Will it unite and serve families? Is the model thoughtful? Is the academic experience excellent? Can it use people, buildings and resources responsibly?</p><Outside to={source.beliefs}>The Journey's mission and beliefs</Outside></div>
     <div className="journey-story-panel"><Kicker>The ministry connection</Kicker><h3>Grades 6–12 are not a new audience.</h3><p>Journey Students already serves middle and high school students with worship, teaching, discussion and friendships. A school would be a distinct operation, but its age focus could align with a ministry commitment already in place.</p><Outside to={source.students}>Journey Students</Outside></div>
   </section>
   <section className="cogic-detail-feature"><div><Kicker>We're just getting started</Kicker><h2>What if a school complemented the community spaces The Journey has imagined?</h2><p>The church has publicly discussed recreation, multi-use facilities and places for community life. A proposed school could be evaluated alongside those priorities—but it must not presume access to church facilities, ministry staff or existing budgets.</p><Outside to={source.future}>The Journey's future-space vision</Outside><PageLink to={journeyBase+'/how-it-works'}>See what a school would require</PageLink></div><img src="/images/04_platform_local_campus.png" alt="Illustrative school campus photograph, not The Journey campus" /></section>
   <section className="cogic-detail-section"><SectionHeading tag="Service as formation">Learning to serve, not just learning about service.</SectionHeading><p>The Journey's public outreach commitments create a compelling reason to explore responsible student-service projects, including support for families and neighbors. Such projects would require age-appropriate safeguards, partner permission and separate operating arrangements; none is promised.</p><CanLink to="/student-experience/activities-and-service">See how CAN approaches student activities and service</CanLink></section>
 </Shell>
}

const academyPillars=[
  {icon:<BookOpen aria-hidden="true"/>,title:'Academic continuity',body:'Approved teacher-created coursework, assessment, grades and coherent pathways toward graduation.'},
  {icon:<Users aria-hidden="true"/>,title:'Daily local relationships',body:'Qualified site leadership and facilitators, a known peer group, mentoring and family communication.'},
  {icon:<Church aria-hidden="true"/>,title:'Christian formation',body:'Locally approved faith experiences that complement rather than displace academic requirements.'},
]
export function JourneyAcademyPage(){
 return <Shell section="academy" eyebrow="03 / The proposed academy" title="A place to learn. A community to belong." intro="One possible local grades 6–12 school, with academics and school-of-record accountability provided through CAN and daily community shaped by local leaders." image="/images/02_possibility_student_group.png" imageAlt="Illustrative teenagers outside a school">
   <section className="cogic-detail-thesis"><Kicker>One local school, not a network of church campuses</Kicker><h2>A school built for a student, not another institution to build from scratch.</h2><p>A student could attend one local school community connected to CAN's wider academic resources. The Journey would not have to staff every subject with a resident specialist, but would still need qualified, accountable people on site throughout the day.</p>
   <div className="cogic-detail-thesis-stats"><div><strong>1</strong><span>Local proposed campus</span></div><div><strong>6–12</strong><span>Exploratory grade span</span></div><div><strong>CAN</strong><span>Shared academic foundation</span></div></div></section>
   <section className="cogic-detail-section"><SectionHeading tag="What families would experience">Three commitments, one school day.</SectionHeading>
     <div className="cogic-detail-three">{academyPillars.map(p=><article key={p.title}>{p.icon}<h3>{p.title}</h3><p>{p.body}</p></article>)}</div>
   </section>
   <section className="cogic-detail-section"><SectionHeading tag="A necessary distinction">This is not a church youth program turned into a school.</SectionHeading>
     <div className="journey-evidence-grid">
       <div><strong>Academic responsibility</strong><p>CAN's role would be specified in a school-of-record and academic-services agreement, including teaching, credits, records and student progress.</p><CanLink to="/academics">Explore CAN academics</CanLink></div>
       <div><strong>Local responsibility</strong><p>The legally responsible site operator and designated school administrator must have clear authority for facilities, supervision, safety and applicable local requirements.</p><CanLink to="/partnership-model/shared-responsibilities">Shared responsibilities</CanLink></div>
       <div><strong>Permission and identity</strong><p>The school’s name, church affiliation, religious identity and use of facilities require The Journey's formal approval. “Journey Academy” remains a working concept, not an existing school.</p><CanLink to="/partnership-model/governance-and-accountability">Governance and accountability</CanLink></div>
     </div>
   </section>
   <section className="cogic-detail-feature"><div><Kicker>Academic reach without isolation</Kicker><h2>Recorded teaching. Live help. Classmates nearby.</h2><p>CAN’s model is primarily asynchronous: students can access approved teacher-created lessons, with live support available for questions, feedback and intervention. Local staff nurture consistent relationships and help students maintain a school-day rhythm.</p><CanLink to="/academics/how-learning-works">See the learning model</CanLink><PageLink to={journeyBase+'/student-experience'}>Explore the school day</PageLink></div><img src="/images/03_curriculum_student_study.png" alt="Illustrative student studying"/></section>
 </Shell>
}

const daily=[
  {time:'Arrival',title:'Known from the beginning',body:'Students arrive, connect with their group and check their weekly learning plans with a local adult.'},
  {time:'Academic blocks',title:'Teacher-created learning',body:'Standards-aligned recorded lessons, writing, reading, projects and practice, paced with school expectations.'},
  {time:'When needed',title:'Live academic help',body:'Tutors, qualified teachers or academic coaches assist students with questions and targeted interventions.'},
  {time:'Community and formation',title:'Belonging becomes visible',body:'Students participate in age-appropriate faith reflection, group work, physical activity and supervised service opportunities.'},
]
export function JourneyStudentExperiencePage(){
 const [mode,setMode]=useState<'learning'|'faith'|'community'>('learning')
 const description = {
   learning:{title:'A school day with flexibility and accountability.',body:'Teacher-developed lessons provide academic consistency. Local adults provide structure. Live support helps students get unstuck without requiring a synchronized lecture every period.'},
   faith:{title:'Christian formation with local authenticity.',body:'The Journey could design school-day discipleship, mentoring and faith experiences consistent with its leadership and the families served. No church program is assumed to become a required school program.'},
   community:{title:'Peers, projects, leadership and service.',body:'Classmates learn alongside one another in a community, take on projects, develop friendships and, where suitable, serve their neighbors under appropriate supervision.'},
 }[mode]
 return <Shell section="student-experience" eyebrow="04 / The student experience" title="More than a school day. A foundation for life." intro="Imagine a weekday community in which students are known by adults, learn from specialists, build friendships and find meaningful opportunities to grow in faith and character." image="/images/06_student_experience_portrait.png" imageAlt="Illustrative student portrait">
   <section className="cogic-detail-section"><SectionHeading tag="A possible day" description="This is a proposed rhythm, not an existing timetable or promised schedule.">School is something students experience together.</SectionHeading><div className="cogic-detail-timeline">{daily.map(d=><article key={d.time}><span>{d.time}</span><h3>{d.title}</h3><p>{d.body}</p></article>)}</div></section>
   <section className="cogic-detail-section"><SectionHeading tag="Explore the experience">Where academic reach and community meet.</SectionHeading>
     <div className="cogic-student-selector" role="group" aria-label="Proposed student experience"><button type="button" aria-pressed={mode==='learning'} onClick={()=>setMode('learning')}>Learning</button><button type="button" aria-pressed={mode==='faith'} onClick={()=>setMode('faith')}>Faith</button><button type="button" aria-pressed={mode==='community'} onClick={()=>setMode('community')}>Community</button></div>
     <div className="cogic-student-preview"><Kicker>Proposed school experience</Kicker><h3>{description.title}</h3><p>{description.body}</p></div>
   </section>
   <section className="cogic-detail-three cogic-detail-section">
     <article><GraduationCap aria-hidden="true"/><h3>Coherent academics</h3><p>Assessment, grades, learner support, clear records and appropriately differentiated instruction.</p><CanLink to="/academics/progress-and-mastery">Progress and mastery</CanLink></article>
     <article><HeartHandshake aria-hidden="true"/><h3>Student belonging</h3><p>Local relationships, pastoral care boundaries, peer experiences and a clear way to seek help.</p><CanLink to="/student-experience/belonging">Belonging at CAN</CanLink></article>
     <article><ShieldCheck aria-hidden="true"/><h3>Safety and inclusion</h3><p>Staff screening, mandated reporting, disability access, student services, supervision and emergency processes must be established before opening.</p><CanLink to="/accountability">CAN accountability approach</CanLink></article>
   </section>
   <section className="cogic-detail-feature"><div><Kicker>A natural age connection</Kicker><h2>Journey Students already knows middle and high school families.</h2><p>The church's published Journey Students ministry serves sixth through twelfth grade. This alignment makes the educational conversation relevant while keeping the proposed school distinctly accountable from Wednesday youth ministry.</p><Outside to={source.students}>Read about Journey Students</Outside><PageLink to={journeyBase+'/how-it-works'}>Explore school operations</PageLink></div><img src="/images/05_rooted_locally_community.png" alt="Illustrative community image"/></section>
 </Shell>
}

const launch=[
  {number:'01',title:'Explore a vision together',body:'Talk with church leadership about mission fit, local families, church commitments and appropriate decision-making authority.'},
  {number:'02',title:'Validate demand and capacity',body:'Interview families; evaluate tuition, scholarships, prospective enrollment, facilities, traffic, accessibility and weekday staffing.'},
  {number:'03',title:'Configure a school workspace',body:'Create a proposed school profile, choose a design and preview a website. Initial configuration can be quick; opening a school cannot.'},
  {number:'04',title:'Invite the founding team',body:'Assign roles for local administration, student supervision, family engagement and academic operations; define permissions and safeguarding.'},
  {number:'05',title:'Complete legal and academic readiness',body:'Document school-of-record obligations, state requirements, financial reserves, safety, student support, attendance and recordkeeping.'},
  {number:'06',title:'Authorize, then open',body:'Only proceed to public enrollment and school operation after the responsible parties have signed off on readiness and applicable eligibility.'},
]
export function JourneyHowItWorksPage(){
 return <Shell section="how-it-works" eyebrow="05 / The operating model" title="The Journey brings the community. CAN brings the academic backbone." intro="The opportunity is to share the parts of school-building that need not be recreated at every site, while preserving clear accountability for local people, safety and culture." image="/images/04_platform_local_campus.png" imageAlt="Illustrative academic campus">
   <section className="cogic-detail-section"><SectionHeading tag="Two distinct responsibilities">One local school community. Clear accountability.</SectionHeading>
     <div className="cogic-detail-three">
       <article><Church aria-hidden="true"/><h3>The Journey, if it elects to participate</h3><p>Local campus and facilities subject to approval, relationships, site staffing, pastoral and community programming, supervision and identified local decisions.</p></article>
       <article><GraduationCap aria-hidden="true"/><h3>CAN Academy and authorized academic operators</h3><p>Teacher-created recorded academics, qualified live support, assessments, records and school-of-record responsibilities as determined by the legal operating model.</p></article>
       <article><ClipboardCheck aria-hidden="true"/><h3>Accountable site administration</h3><p>The designated administrator would control local site operations and school website within agreed legal, academic and safeguarding boundaries. The school still needs an accountable operator.</p></article>
     </div>
   </section>
   <section className="cogic-detail-section"><SectionHeading tag="A disciplined launch journey">Build the school idea quickly. Earn the right to open deliberately.</SectionHeading><div className="cogic-launch-deep-steps">{launch.map(p=><article key={p.number}><div className="cogic-launch-deep-step-index"><span>{p.number}</span></div><div><h3>{p.title}</h3><p>{p.body}</p></div></article>)}</div></section>
   <section className="cogic-detail-section"><SectionHeading tag="The campus question">Forty acres is not forty acres of available school space.</SectionHeading><p>The Journey's published history mentions approximately 40 acres at the Amelia Concourse property. The facility could still be unsuitable for weekday schooling, committed to other programs or subject to land-use, insurance, accessibility and safety constraints. An initial feasibility walk-through and formal authorization must come first.</p><Outside to={source.history}>Read the church's campus history</Outside></section>
   <section className="cogic-detail-section"><SectionHeading tag="Connect to CAN">The shared academic and operational foundation is already documented.</SectionHeading>
     <div className="journey-evidence-grid"><div><strong>Academics and teachers</strong><p>Course delivery, learning support and progress.</p><CanLink to="/academics/how-learning-works">How learning works</CanLink></div><div><strong>Launch and readiness</strong><p>Discover, validate, configure, build and secure authorization.</p><CanLink to="/launch-approach">CAN launch approach</CanLink></div><div><strong>Accountability</strong><p>Safeguarding, quality, records and governance.</p><CanLink to="/partnership-model/governance-and-accountability">Governance and accountability</CanLink></div></div>
   </section>
 </Shell>
}

const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n)
function JourneyEconomics(){
 const [students,setStudents]=useState(50)
 const [tuition,setTuition]=useState(10000)
 const [delivery,setDelivery]=useState(4400)
 const [siteFixed,setSiteFixed]=useState(180000)
 const [other,setOther]=useState(55000)
 const gross=students*tuition
 const deliveryTotal=students*delivery
 const cost=deliveryTotal+siteFixed+other
 const remaining=gross-cost
 return <section className="cogic-detail-section" id="economics"><SectionHeading tag="06 / Economics — illustrative, not a forecast" description="The scenarios below are for one proposed site. All financial inputs are adjustable hypotheses, not quoted CAN pricing, verified local costs or commitments.">What would it take to be financially responsible?</SectionHeading>
   <div className="cogic-economics-workbench">
     <div className="cogic-economics-controls">
       <Kicker>One local campus / hypothetical scenario</Kicker>
       <fieldset className="cogic-site-choices"><legend>Enrolled students</legend>{[25,50,75].map(n=><button type="button" key={n} aria-pressed={students===n} onClick={()=>setStudents(n)}>{n}</button>)}</fieldset>
       <label htmlFor="journey-tuition">Collected annual tuition per student</label><select id="journey-tuition" value={tuition} onChange={e=>setTuition(+e.target.value)}>{[8000,10000,12000].map(n=><option key={n} value={n}>{money(n)}</option>)}</select>
       <label htmlFor="journey-delivery">Academic delivery and direct student costs, per student</label><select id="journey-delivery" value={delivery} onChange={e=>setDelivery(+e.target.value)}>{[3500,4400,5500,6500].map(n=><option key={n} value={n}>{money(n)}</option>)}</select>
       <label htmlFor="journey-site">Annual site staffing, facilities and supervision</label><select id="journey-site" value={siteFixed} onChange={e=>setSiteFixed(+e.target.value)}>{[120000,180000,240000,300000].map(n=><option key={n} value={n}>{money(n)}</option>)}</select>
       <label htmlFor="journey-other">Other annual operating costs and reserves</label><select id="journey-other" value={other} onChange={e=>setOther(+e.target.value)}>{[35000,55000,80000,110000].map(n=><option key={n} value={n}>{money(n)}</option>)}</select>
     </div>
     <div className="cogic-economics-results" aria-live="polite" aria-atomic="true">
       <Kicker>One-site illustrative financial scenario</Kicker><strong className="cogic-economics-gross">{money(gross)}</strong><p>Gross annual tuition at {students} students, assuming full collection</p>
       <div className="cogic-economics-rows">
         <div><span>Academic delivery and per-student costs</span><strong>− {money(deliveryTotal)}</strong></div>
         <div><span>Site staffing, facilities and supervision</span><strong>− {money(siteFixed)}</strong></div>
         <div><span>Other costs and reserves</span><strong>− {money(other)}</strong></div>
         <div><span>Illustrative balance before unmodeled items</span><strong className={remaining<0?'is-negative':''}>{money(remaining)}</strong></div>
       </div>
       <p className="cogic-economics-status"><ShieldCheck aria-hidden="true"/>This is not projected profit, a church allocation or cash available for distribution. Capital costs, tuition assistance, collections, taxes, compliance and exceptional student services may materially change results.</p>
     </div>
   </div>
   <div className="journey-economics-notes">
     <div><strong>Student affordability</strong><p>Florida scholarship programs may help eligible families only when the proposed school meets applicable participation rules. No scholarship eligibility or award amount is guaranteed.</p><Outside to={source.florida}>Florida school choice resources</Outside></div>
     <div><strong>Church stewardship</strong><p>Church-owned space is not free to operate. Maintenance, utilities, insurance, security, repairs and opportunity cost must be reflected in a negotiated agreement.</p></div>
   </div>
 </section>
}

const stages=[
  {n:'01',title:'Leadership conversation',body:'Understand The Journey’s priorities, the authority to explore a school and what a successful outcome would mean.'},
  {n:'02',title:'Local opportunity study',body:'Document family interest, affordability, alternative options, transportation and accessibility needs.'},
  {n:'03',title:'Site and operating feasibility',body:'Assess facilities, school-day supervision, safety, staffing, academic responsibilities, insurance and financial viability.'},
  {n:'04',title:'Decision and formal agreement',body:'Proceed only after the church and CAN have agreed on permissions, economics, governance and relevant legal readiness.'},
]
function JourneyInquiry(){
 const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle')
 async function submit(event:FormEvent<HTMLFormElement>){
   event.preventDefault()
   if(status==='sending') return
   const form=event.currentTarget
   setStatus('sending')
   const data=new URLSearchParams()
   new FormData(form).forEach((v,k)=>data.append(k,String(v)))
   data.set('form-name','journey-founding-partner')
   trackEvent('contact_submit',{context:'journey-founding-partner'})
   try {
     const response=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:data.toString()})
     if(!response.ok) throw new Error('Form submission failed')
     form.reset()
     setStatus('success')
     trackEvent('contact_success',{context:'journey-founding-partner'})
   }catch{
     setStatus('error')
     trackEvent('contact_error',{context:'journey-founding-partner'})
   }
 }
 return <section id="journey-inquiry" className="cogic-founding-form-wrap">
   <div><Kicker>The Journey Church / Private leadership invitation</Kicker><h2>Let's explore whether a school belongs in The Journey's next chapter.</h2><p>A focused conversation with designated leadership about families, facilities, school operations and feasibility. Completing this form does not commit The Journey to any partnership or school opening.</p></div>
   {status==='success'?
   <div className="cogic-founding-success" role="status"><CheckCircle2 aria-hidden="true"/><h3>Your inquiry was submitted.</h3><p>Thank you. Your request was submitted to CAN Academy for follow-up.</p><Link to={journeyBase}>Return to the Journey proposal <ArrowRight aria-hidden="true"/></Link></div>:
   <form className="cogic-founding-form" name="journey-founding-partner" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
     <input type="hidden" name="form-name" value="journey-founding-partner"/>
     <input type="hidden" name="partner" value="the-journey-church"/>
     <input type="hidden" name="proposal" value="single-campus-school-feasibility"/>
     <div className="cogic-honeypot"><label>Leave empty<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></div>
     <div className="cogic-founding-form-grid">
       <label>Full name<input name="name" autoComplete="name" required /></label>
       <label>Email address<input name="email" type="email" autoComplete="email" required/></label>
       <label>Role or title<input name="role" placeholder="Pastor, ministry leader, school or family representative" required /></label>
       <label>Church or organization<input name="organization" autoComplete="organization" required/></label>
     </div>
     <label>What would you like to explore?
       <select name="interest" defaultValue="" required>
         <option value="" disabled>Choose a conversation topic</option>
         <option>Founding-school feasibility conversation</option>
         <option>Student and family interest</option>
         <option>Campus space and operational feasibility</option>
         <option>Academic and financial model</option>
         <option>Other leadership question</option>
       </select>
     </label>
     <label>What would be most useful to discuss?<textarea name="message" rows={5} required placeholder="Questions about families, space, education, funding or the proposed school relationship..."/></label>
     <p className="cogic-founding-privacy">Please do not include student records or confidential information. Submitting this form requests a reply from CAN Academy. <Link to="/privacy">Privacy notice</Link>.</p>
     <button type="submit" disabled={status==='sending'}><Mail aria-hidden="true"/>{status==='sending'?'Submitting...':'Request a Journey founding conversation'}<ArrowRight aria-hidden="true"/></button>
     {status==='error'&&<p className="cogic-founding-error" role="alert">The inquiry could not be submitted. Check your connection and try again.</p>}
   </form>}
 </section>
}
export function JourneyFoundingPartnershipPage(){
 return <Shell section="founding-partnership" eyebrow="06 / Stewardship and invitation" title="What could The Journey build for the next generation?" intro="A proposed single-campus school is worth exploring only if it serves students well, protects the church's mission and resources, and can operate responsibly." image="/images/07_economics_leadership_meeting.png" imageAlt="Illustrative education leadership meeting">
   <section className="cogic-detail-thesis"><Kicker>The founding proposition</Kicker><h2>One school community. A carefully considered beginning.</h2><p>CAN invites The Journey's designated leaders to explore a potential Christian school rooted in one local community. The first decision is not a launch date. It is whether to undertake a disciplined feasibility study.</p>
     <div className="cogic-detail-thesis-stats"><div><strong>1</strong><span>Proposed local school community</span></div><div><strong>6–12</strong><span>Proposed grade span to test</span></div><div><strong>0</strong><span>Partnership commitments presumed</span></div></div>
   </section>
   <JourneyEconomics/>
   <section className="cogic-detail-section"><SectionHeading tag="What a founding conversation includes">A practical path from an idea to an informed decision.</SectionHeading><div className="cogic-founding-stages">{stages.map(s=><article key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></article>)}</div></section>
   <section className="cogic-detail-section"><SectionHeading tag="Important boundaries">The invitation asks for exploration, not approval.</SectionHeading>
     <div className="cogic-founding-boundaries">
       <div><h3>What we propose evaluating</h3><ul><li>Educational fit with Journey's mission and community</li><li>Verified family demand and financial viability</li><li>Campus use, operating responsibilities and safeguards</li><li>A formal school-of-record and partnership structure</li></ul></div>
       <div><h3>What we do not presume</h3><ul><li>Church endorsement, brand authorization or a finalized school name</li><li>Existing classroom capacity or staff availability</li><li>Guaranteed students, scholarships, earnings or school approval</li><li>Permission to open enrollment or commence operation</li></ul></div>
     </div>
   </section>
   <JourneyInquiry/>
   <section className="cogic-detail-section"><SectionHeading tag="Supporting documentation">The infrastructure behind the local proposal.</SectionHeading>
     <div className="journey-evidence-grid"><div><strong>Academic model</strong><CanLink to="/academics">Academics and pathways</CanLink></div><div><strong>Partnership model</strong><CanLink to="/partnership-model">Roles and responsibilities</CanLink></div><div><strong>Legal and launch readiness</strong><CanLink to="/launch-approach">The launch approach</CanLink></div></div>
   </section>
 </Shell>
}
export function JourneyDetailPage({section}:{section:JourneySection}){
 switch(section){
   case 'opportunity':return <JourneyOpportunityPage/>
   case 'journey-story':return <JourneyStoryPage/>
   case 'academy':return <JourneyAcademyPage/>
   case 'student-experience':return <JourneyStudentExperiencePage/>
   case 'how-it-works':return <JourneyHowItWorksPage/>
   case 'founding-partnership':return <JourneyFoundingPartnershipPage/>
 }
}
