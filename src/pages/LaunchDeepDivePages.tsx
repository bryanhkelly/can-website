import { Link } from 'react-router-dom'
import { currentLaunch, launchStages, launchSteps, stageBySlug } from '../data/launchDeepContent'

type LaunchSlug = 'discover' | 'validate' | 'design' | 'build' | 'launch' | 'measure'

const STAGE_CONTENT: Record<LaunchSlug, {
  intro: string
  groups: { n: string; title: string; items: string[] }[]
  output?: string
  gate?: string
  timeline?: { when: string; what: string }[]
  decisions?: { label: string; body: string }[]
}> = {
  discover: {
    intro: 'CAN begins by identifying communities where a strong high-school program is needed and a credible local institution may be able to host or extend it. Discovery is a screening exercise: it narrows attention, it does not commit CAN to a place.',
    groups: [
      { n: 'A', title: 'Student need', items: ['High-school population and incoming ninth-grade cohorts','Existing private, charter, and public-school options','Quality, capacity, affordability, and geographic gaps'] },
      { n: 'B', title: 'Local capacity', items: ['Scholarship or public-funding environment','Churches and schools with educational DNA','Denominational and community relationships','Preliminary facility availability','Potential ways to partner'] },
    ],
    output: 'A short list of markets and partners worthy of direct discovery — not a launch commitment.',
    gate: 'Is there a plausible combination of need, local trust, infrastructure, and economic potential?',
  },
  validate: {
    intro: 'Attractive research is insufficient. Before CAN designs an academy it must hear from families directly, know the partner well, walk the building, and model the economics at the size a first cohort actually allows.',
    groups: [
      { n:'01', title:'Family demand', items:['Interviews with rising seventh- through ninth-grade families','Enrollment intent and price sensitivity','Current school choices','Academic and extracurricular priorities','Transportation requirements','Reasons families would enroll or decline'] },
      { n:'02', title:'Partner readiness', items:['Mission and theological alignment','Leadership and governance expectations','Educational history','Local credibility','Willingness to adopt shared standards','Data, accountability, and operating expectations'] },
      { n:'03', title:'Facility readiness', items:['Classroom and office capacity','Occupancy and code requirements','Accessibility','Parking and transportation','Assembly, food-service, recreation, and laboratory needs','Internet, safety, and weekday availability'] },
      { n:'04', title:'Economic viability', items:['Models for 50, 75, 100, and 150 students','Scholarship and tuition assumptions','Local and centralized staffing','Curriculum and technology costs','Partner compensation or facility contribution','Working-capital requirements','Enrollment break-even point'] },
    ],
    output:'A verified partner, demand evidence, a facility assessment, and a launch-size economic model.',
    gate:'Is there enough evidence to justify designing a specific academy?',
  },
  design: {
    intro:'The core academic and operating platform stays consistent from community to community. The local expression reflects the partner, the community, the students, and the partnership model that validation selected.',
    groups:[
      { n:'A',title:'Shape of the school',items:['Initial grade levels','Enrollment target','Academic calendar','Weekly student schedule','Course sequence','Central and local instructional roles'] },
      { n:'B',title:'Community and formation',items:['Christian formation and church distinctives','Student activities and geographic small groups','College and career pathways','Family communication'] },
      { n:'C',title:'Daily operations',items:['Transportation','Food service','Athletics, music, and enrichment','Governance and decision rights','Brand relationship between CAN and the local partner'] },
    ],
    output:'A complete academy blueprint with named owners, costs, policies, and launch assumptions.',
    gate:'Can this academy deliver the promised student experience within the approved economics and operating structure?',
  },
  build: {
    intro:'Build is the stage where a blueprint becomes a working school. Each workstream carries a named owner, a tested procedure, and written documentation before the readiness review.',
    groups:[
      {n:'01',title:'Academic readiness',items:['Curriculum and course ownership','Teachers and instructional coverage','Assessments, grading, and intervention','Transcripts, records, and laboratory requirements']},
      {n:'02',title:'Partner and facility readiness',items:['Agreement and governance','Building preparation, safety, and accessibility','Technology and transportation','Daily site procedures']},
      {n:'03',title:'Staff readiness',items:['Recruitment and background checks','Role clarity and training','Escalation procedures','Performance expectations']},
      {n:'04',title:'Student and family readiness',items:['Enrollment and orientation','Schedules and devices','Family agreements and communications','Student support information']},
      {n:'05',title:'Technology and data readiness',items:['LMS, SIS, attendance, and assessment','Communication and identity access','Privacy and reporting','Technical support']},
      {n:'06',title:'Financial and compliance readiness',items:['Scholarships, tuition, and billing','Insurance and school status','Required policies and records','Launch working capital']},
    ],
    output:'A launch-readiness review with every critical requirement assigned, tested, and documented.',
    gate:'Would CAN confidently invite families into this academy today?',
  },
  launch: {
    intro:'Opening is a controlled implementation, not a ceremonial finish line. The first ninety days are managed with the same discipline as validation: observe closely, escalate quickly, and write down what the model learns.',
    groups:[
      {n:'A',title:'Opening operations',items:['Staff and student onboarding','Family orientation','Opening-week routines','Technology and schedule support','Daily issue escalation']},
      {n:'B',title:'Learning and support',items:['Attendance and engagement monitoring','Academic diagnostics','Tutoring and intervention activation','Early student-life programming','Weekly launch reviews and partner communication']},
    ],
    timeline:[
      {when:'Weeks before opening',what:'Staff onboarding, facility walk-throughs, schedule dry runs, and device preparation.'},
      {when:'Family orientation',what:'Expectations, communication channels, transportation, and student support introduced before day one.'},
      {when:'Opening week',what:'Arrival and dismissal routines, attendance, technology support, and daily issue escalation.'},
      {when:'First thirty days',what:'Academic diagnostics, tutoring and intervention activation, early student-life programming.'},
      {when:'Sixty days',what:'Engagement and attendance review with the partner; schedule and staffing adjustments.'},
      {when:'Ninety days',what:'Full launch review covering academics, student experience, operations, and economics.'},
    ],
    output:'An operating academy with stable routines, visible student progress, responsive support, and documented launch learning.',
    gate:'Is the academy stable enough to move from launch management into normal operations?',
  },
  measure: {
    intro:'Interest from other communities is not evidence that the model is ready to travel. Measurement establishes whether the academy is delivering, what it cost to deliver, and which parts of the model can be reused.',
    groups:[
      {n:'01',title:'Student outcomes',items:['Attendance','Course completion','Credit accumulation','Academic growth','Intervention outcomes','Postsecondary readiness']},
      {n:'02',title:'Student and family experience',items:['Belonging','Christian formation','Adult relationships','Satisfaction','Retention','Referrals']},
      {n:'03',title:'Partner and operating performance',items:['Local execution','Staff stability','Facility performance','Communication','Compliance','Cost per student']},
      {n:'04',title:'Replication evidence',items:['Minimum viable enrollment','Central-service capacity','Model-specific strengths and weaknesses','Reusable curriculum and procedures','Partner onboarding requirements','Conditions required for the next launch']},
    ],
    decisions:[
      {label:'Strengthen',body:'Continue improving the current academy before expanding.'},
      {label:'Extend',body:'Add grades, pathways, programs, or enrollment locally.'},
      {label:'Replicate',body:'Apply the validated model in another community.'},
    ],
  },
}

function Nav({active}:{active:string}) {
  return <nav className="deep-section-nav" aria-label="Launch Approach pages">{launchSteps.map(s=><Link key={s.to} to={s.to} className={s.to===active?'is-active':''}><span>{s.label}</span></Link>)}</nav>
}
function List({items}:{items:string[]}){ return <ul className="deep-list">{items.map(i=><li key={i}>{i}</li>)}</ul> }

export function LaunchStagePage({slug}:{slug:LaunchSlug}) {
  const stage=stageBySlug[slug]
  const body=STAGE_CONTENT[slug]
  return <article className="deep-page">
    <header className="deep-page-hero">
      <p className="destination-eyebrow">Stage {stage.n} · Launch Approach</p>
      <h1 className="editorial-heading">{stage.summary}</h1>
      <div className="deep-page-intro"><p>{body.intro}</p></div>
    </header>
    <Nav active={stage.route}/>
    <div className="deep-page-body">
      <section><div className="deep-two-grid">{body.groups.map(g=><div key={g.n}><h2>{g.n} · {g.title}</h2><List items={g.items}/></div>)}</div></section>
      {body.timeline && <section><h2 className="deep-section-title">From preparation through the first ninety days</h2><div className="deep-role-list">{body.timeline.map(t=><article key={t.when}><h3>{t.when}</h3><p>{t.what}</p></article>)}</div></section>}
      {body.decisions && <section><h2 className="deep-section-title">Three possible decisions</h2><div className="deep-three-grid">{body.decisions.map(d=><article key={d.label}><h2>{d.label}</h2><p>{d.body}</p></article>)}</div></section>}
      {(body.output||body.gate) && <section className="deep-two-grid">
        {body.output&&<div><h2>Stage output</h2><p className="deep-lead">{body.output}</p></div>}
        {body.gate&&<div><h2>Decision gate</h2><p className="deep-lead">{body.gate}</p></div>}
      </section>}
      {slug==='measure' && <blockquote className="deep-pull">CAN should expand only when academic quality, student experience, partner execution, and economics demonstrate that the model is ready to travel.</blockquote>}
    </div>
  </article>
}

export function LaunchDeepLinks(){
 return <section className="destination-deep-links"><p className="destination-eyebrow">Explore the launch process</p><div>{launchStages.map(s=><Link key={s.route} to={s.route}><strong>{s.n} · {s.label}</strong><span>{s.short}</span></Link>)}</div></section>
}

export function CurrentLaunchSummary(){
 return <section className="destination-note"><p className="destination-eyebrow">Current launch</p><h2>{currentLaunch.scope}: {currentLaunch.currentStage}</h2><p>{currentLaunch.supporting}</p><div className="deep-tag-list">{currentLaunch.fields.map(f=><span key={f.label}>{f.label}: {f.value}</span>)}</div></section>
}
