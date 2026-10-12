import { Link } from 'react-router-dom'
import {
  academicRoles,
  academicsEntryPoints,
  academicsSteps,
  appliedExperiences,
  assessmentPrinciples,
  commonFoundation,
  credibilityChain,
  deliveryPrinciples,
  gradeRoadmap,
  learningCycle,
  localResponsibilities,
  networkResponsibilities,
  openDecisions,
  pathways,
  progressCycle,
  progressRecordFields,
  qualityProtections,
  qualityReviewCycle,
  subjectBands,
  subjectEmphases,
  technologyShouldNot,
  christianIntegrationDomains,
} from '../data/academicsDeepContent'

function Shell({active,eyebrow,title,intro,children}:{active:string;eyebrow:string;title:string;intro:string[];children:React.ReactNode}) {
  return <article className="deep-page">
    <header className="deep-page-hero">
      <p className="destination-eyebrow">{eyebrow}</p>
      <h1 className="editorial-heading">{title}</h1>
      <div className="deep-page-intro">{intro.map(p=><p key={p.slice(0,36)}>{p}</p>)}</div>
    </header>
    <nav className="deep-section-nav" aria-label="Academics pages">
      {academicsSteps.map(step=><Link key={step.to} to={step.to} className={step.to===active?'is-active':''}><span>{step.label}</span></Link>)}
    </nav>
    <div className="deep-page-body">{children}</div>
  </article>
}
function List({items}:{items:string[]}) { return <ul className="deep-list">{items.map(i=><li key={i}>{i}</li>)}</ul> }
function Numbered({items}:{items:{n:string;title:string;body:string}[]}) { return <ol className="deep-numbered">{items.map(i=><li key={i.n}><span>{i.n}</span><div><h3>{i.title}</h3><p>{i.body}</p></div></li>)}</ol> }

export function AcademicsHowLearningPage(){
 return <Shell active="/academics/how-learning-works" eyebrow="How students learn" title="Every course should move students from instruction to understanding." intro={[
  'CAN courses may use different combinations of live teaching, recorded lessons, reading, discussion, laboratories, projects, guided practice, independent work, and assessment. The balance should be determined by what students need to learn, not by a single technology philosophy.',
  'Regardless of format, every course should move students through a clear learning cycle.'
 ]}>
   <section><h2 className="deep-section-title">The learning cycle</h2><Numbered items={learningCycle}/></section>
   <blockquote className="deep-pull">Completion is not the same as understanding. CAN should use technology to expand access while preserving meaningful instruction, feedback, and evidence of mastery.</blockquote>
   <section><h2 className="deep-section-title">Learning looks different by subject</h2><div className="deep-two-grid">{subjectEmphases.map(s=><div key={s.key}><h2>{s.label}</h2><p className="deep-lead">{s.body}</p></div>)}</div></section>
   <section><h2 className="deep-section-title">Course delivery principles</h2><List items={deliveryPrinciples}/></section>
 </Shell>
}

export function AcademicsCoursesPage(){
 return <Shell active="/academics/courses-and-graduation" eyebrow="Courses and graduation" title="A coherent path from ninth grade through graduation." intro={[
  'Students need more than a collection of courses. They need a coherent four-year academic plan with a strong core, room to grow, and clear preparation for life after graduation.'
 ]}>
   <section><h2 className="deep-section-title">Four-year progression</h2><div className="deep-four-grid">{gradeRoadmap.map(g=><div key={g.key}><dt>{g.label}: {g.title}</dt><dd><List items={g.focus}/></dd></div>)}</div></section>
   <section><h2 className="deep-section-title">Subject framework</h2><div className="deep-two-grid">{subjectBands.map(b=><div key={b.id}><h2>{b.title}</h2><p className="deep-lead">{b.purpose}</p><ul className="deep-list">{b.courses.map(c=><li key={c.title}><span>{c.title}</span><small>{c.status}</small></li>)}</ul>{b.note&&<p className="deep-status-note">{b.note}</p>}</div>)}</div></section>
 </Shell>
}

export function AcademicsTeachersPage(){
 return <Shell active="/academics/teachers-and-support" eyebrow="The people behind the learning" title="The right expertise, combined with daily human support." intro={[
  'A small CAN Community should not need to recruit a complete conventional high-school faculty before it can serve students well. CAN separates responsibilities that benefit from network scale from responsibilities that require consistent local presence.',
  'Students should understand who teaches them, who evaluates their work, who helps them each day, and who responds when they need additional support.'
 ]}>
  <section><h2 className="deep-section-title">Academic roles around the student</h2><div className="deep-role-list">{academicRoles.map(r=><article key={r.title}><h3>{r.title}</h3><p>{r.body}</p><p className="deep-status-note"><strong>Student experience:</strong> {r.experience}</p></article>)}</div></section>
  <section className="deep-two-grid"><div><h2>Network academic responsibilities</h2><List items={networkResponsibilities}/></div><div><h2>Local academic responsibilities</h2><List items={localResponsibilities}/></div></section>
  <section><h2 className="deep-section-title">Technology's proper role</h2><p className="deep-lead">Technology should help students reach teachers, access well-designed lessons, submit work, receive feedback, monitor progress, and participate in a broader academic network.</p><h3 className="deep-subhead">Technology should not</h3><List items={technologyShouldNot}/></section>
  <blockquote className="deep-pull">The question is never whether a student can access content. It is whether an accountable adult knows how that student is doing.</blockquote>
 </Shell>
}

export function AcademicsProgressPage(){
 return <Shell active="/academics/progress-and-mastery" eyebrow="Visible progress" title="Students should receive help before a problem becomes a failure." intro={[
  'Academic information should help students learn, help adults respond, and protect the credibility of CAN credits. Grades are important, but they should not be the first indication that a student is struggling.',
  'CAN should make attendance, participation, assignments, feedback, mastery, credit accumulation, and graduation progress visible to the people responsible for supporting the student.'
 ]}>
  <section><h2 className="deep-section-title">Academic progress cycle</h2><Numbered items={progressCycle}/></section>
  <section><h2 className="deep-section-title">What students and authorized adults should see</h2><div className="deep-role-list">{progressRecordFields.map(f=><article key={f.label}><h3>{f.label}</h3><p>{f.note}</p></article>)}</div></section>
  <section className="deep-two-grid"><div><h2>Assessment principles</h2><List items={assessmentPrinciples}/></div><div><h2>Potential academic supports</h2><List items={academicSupports}/></div></section>
  <blockquote className="deep-pull">A missed assignment is information. A pattern is a signal. A failure is not the first time adults should respond.</blockquote>
 </Shell>
}

export function AcademicsPathwaysPage(){
 return <Shell active="/academics/pathways" eyebrow="One foundation, multiple futures" title="Students should share a strong academic foundation without being forced toward the same future." intro={[
  'Every student needs strong reading, writing, quantitative reasoning, scientific understanding, civic knowledge, biblical literacy, responsible technology use, and adult-life preparation.',
  'Beyond that common foundation, students should be able to pursue courses and experiences that support their abilities, interests, and postsecondary goals.'
 ]}>
   <section><h2 className="deep-section-title">Common foundation</h2><div className="deep-tag-list">{commonFoundation.map(f=><span key={f}>{f}</span>)}</div></section>
   <section><h2 className="deep-section-title">Selectable pathways</h2><div className="deep-two-grid">{pathways.map(p=><div key={p.id}><h2>{p.title}</h2><List items={p.emphasis}/><p className="deep-status-note">Status: {p.status}. Availability: {p.availability}.</p>{p.caution&&<p className="deep-warning">{p.caution}</p>}</div>)}</div></section>
   <section><h2 className="deep-section-title">Applied learning</h2><List items={appliedExperiences}/></section>
   <section><h2 className="deep-section-title">Christian integration in academics</h2><p className="deep-lead">Christian integration should deepen inquiry, moral reasoning, intellectual honesty, stewardship, and purpose. It should never replace accurate content or rigorous learning.</p><List items={christianIntegrationDomains}/></section>
 </Shell>
}

export function AcademicsCredibilityPage(){
 return <Shell active="/academics/academic-credibility" eyebrow="Quality, credit, and trust" title="An unconventional delivery model still requires credible outcomes." intro={[
  'Families, colleges, scholarship organizations, employers, the military, and other schools must be able to understand what a CAN course, credit, transcript, and diploma represent.',
  'Academic credibility depends on clear standards, accountable instruction, meaningful student work, reliable assessment, accurate records, and continuous review.'
 ]}>
  <section><h2 className="deep-section-title">Credibility chain</h2><div className="deep-two-grid">{credibilityChain.map(c=><div key={c.title}><h2>{c.title}</h2><p className="deep-lead">{c.body}</p></div>)}</div></section>
  <section><h2 className="deep-section-title">What protects academic quality</h2><List items={qualityProtections}/></section>
  <section><h2 className="deep-section-title">Recurring course quality review</h2><ol className="deep-simple-numbered">{qualityReviewCycle.map((s,i)=><li key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</li>)}</ol></section>
  <section><h2 className="deep-section-title">What remains to be confirmed</h2><p className="deep-warning">These decisions are open. Nothing below should be read as settled.</p><ul className="deep-list">{openDecisions.map(d=><li key={d.question}><span>{d.question}</span><small>{d.status}</small></li>)}</ul></section>
  <blockquote className="deep-pull">Families should not have to choose between a relational Christian environment and an academically credible high-school education. CAN is designed to provide both.</blockquote>
 </Shell>
}

export function AcademicsDeepLinks(){
 return <section className="destination-deep-links"><p className="destination-eyebrow">Explore Academics</p><div>{academicsEntryPoints.map(e=><Link key={e.to} to={e.to}><strong>{e.title}</strong><span>{e.body}</span></Link>)}</div></section>
}
