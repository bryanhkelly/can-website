import { Link } from 'react-router-dom'
import {
  brandQuestions,
  canResponsibilities,
  commonCommitments,
  configurableCapabilities,
  covenant,
  dataQuestions,
  deploymentModels,
  economicQuestions,
  escalationSequence,
  exitRequirements,
  governanceQuestions,
  localDistinctiveExpressions,
  localResponsibilities,
  networkNonNegotiables,
  partnerTypes,
  partnersGain,
  partnersRetain,
  partnershipEntryPoints,
  partnershipLifecycle,
  partnershipSteps,
  qualityExpectations,
  readinessDimensions,
  readinessOutcomes,
  readinessSummaryFields,
  sharedAcademicIntegrity,
  sharedResponsibilities,
  whyPartnerValue,
  customizationAreas,
  consistencyAreas,
} from '../data/partnershipDeepContent'

function Shell({active,eyebrow,title,intro,children}:{active:string;eyebrow:string;title:string;intro:string[];children:React.ReactNode}) {
  return <article className="deep-page">
    <header className="deep-page-hero">
      <p className="destination-eyebrow">{eyebrow}</p>
      <h1 className="editorial-heading">{title}</h1>
      <div className="deep-page-intro">{intro.map(p=><p key={p.slice(0,36)}>{p}</p>)}</div>
    </header>
    <nav className="deep-section-nav" aria-label="Partnership Model pages">
      {partnershipSteps.map(step=><Link key={step.to} to={step.to} className={step.to===active?'is-active':''}><span>{step.label}</span></Link>)}
    </nav>
    <div className="deep-page-body">{children}</div>
  </article>
}
function List({items}:{items:string[]}) { return <ul className="deep-list">{items.map(i=><li key={i}>{i}</li>)}</ul> }
function Numbered({items}:{items:{n:string;title:string;body:string}[]}) { return <ol className="deep-numbered">{items.map(i=><li key={i.n}><span>{i.n}</span><div><h3>{i.title}</h3><p>{i.body}</p></div></li>)}</ol> }

export function PartnershipWhyPage(){
 return <Shell active="/partnership-model/why-partner" eyebrow="The partnership opportunity" title="A church should not have to become an entire school system before it can serve students." intro={[
  'Churches and Christian schools can play a larger role in the educational lives of students and families. The barrier is often not mission, trust, relationships, or willingness. It is the difficulty of assembling the academic, technical, administrative, and regulatory capabilities required to operate a complete high school.',
  'CAN allows partners to begin with the strengths they already possess and add the shared capabilities they need.'
 ]}>
   <section><h2 className="deep-section-title">Why partner with CAN</h2><div className="deep-two-grid">{whyPartnerValue.map(v=><div key={v.n}><h2>{v.n} · {v.title}</h2>{v.lead&&<p className="deep-lead">{v.lead}</p>}<List items={v.items}/></div>)}</div></section>
   <blockquote className="deep-pull">The opportunity is not simply to put students in church buildings. It is to equip trusted local institutions to provide a complete educational experience.</blockquote>
   <section className="deep-two-grid"><div><h2>What partners may retain</h2><List items={partnersRetain}/></div><div><h2>Potential shared capabilities</h2><List items={partnersGain}/></div></section>
 </Shell>
}

export function PartnershipResponsibilitiesPage(){
 return <Shell active="/partnership-model/shared-responsibilities" eyebrow="Responsibility follows capability" title="The model works when every responsibility has a clear owner." intro={[
  'The partnership cannot be reduced to “CAN handles academics and the church handles everything local.” Some responsibilities belong primarily to CAN, some belong primarily to the local partner, and some require genuine shared ownership.',
  'The final agreement must identify who is responsible, who approves, who must be consulted, and who must be informed for every material decision.'
 ]}>
   <section className="deep-two-grid"><div><h2>CAN may provide and remain accountable for</h2><List items={canResponsibilities}/></div><div><h2>The local partner may provide and remain accountable for</h2><List items={localResponsibilities}/></div></section>
   <section><h2 className="deep-section-title">Shared responsibility</h2><List items={sharedResponsibilities}/></section>
   <section className="deep-two-grid"><div><h2>Configurable capabilities</h2><List items={configurableCapabilities}/></div><div><h2>Network non-negotiables</h2><List items={networkNonNegotiables}/></div></section>
   <blockquote className="deep-pull">The model is configurable, but not arbitrary. Local expression can vary. Academic credibility, student safety, and institutional integrity cannot.</blockquote>
 </Shell>
}

export function PartnershipWaysPage(){
 return <Shell active="/partnership-model/ways-to-partner" eyebrow="Ways to partner" title="Different communities need different partnership structures." intro={[
  'CAN does not assume that every community should open the same kind of school. The appropriate structure depends on the local institution, existing students, facilities, leadership, geography, community demand, desired identity, and capabilities already in place.',
  'The five ways to partner may also be combined. A denominational network, for example, may include church-hosted academies, K–8 extensions, and CAN-powered micro-schools.'
 ]}>
   <section><h2 className="deep-section-title">Five ways to partner</h2><div className="deep-two-grid">{deploymentModels.map(m=><div key={m.key}><h2>{m.n} · {m.title}</h2><p className="deep-lead">{m.description}</p>{m.promise&&<blockquote className="deep-pull deep-pull-small">{m.promise}</blockquote>}<h3 className="deep-subhead">Best suited for</h3><List items={m.bestSuitedFor}/><p className="deep-status-note">Status: {m.status}</p><p className="deep-warning"><strong>Primary question:</strong> {m.primaryQuestion}</p></div>)}</div></section>
 </Shell>
}

export function PartnershipDistinctivesPage(){
 return <Shell active="/partnership-model/local-distinctives" eyebrow="Unity without uniformity" title="A shared school system does not require a generic church identity." intro={[
  'Local churches and Christian schools should not have to surrender the relationships, traditions, and theological identity that make their ministries meaningful.',
  'At the same time, families and students need confidence that every CAN partnership shares a recognizable Christian foundation, protects students, maintains academic credibility, and honors agreed standards.'
 ]}>
   <section className="deep-three-grid"><div><h2>Common CAN commitments</h2><List items={commonCommitments}/></div><div><h2>Local church distinctives</h2><List items={localDistinctiveExpressions}/></div><div><h2>Shared academic integrity</h2><List items={sharedAcademicIntegrity}/></div></section>
   <blockquote className="deep-pull">CAN provides the configurable school system. Local churches provide the relationships, formation, and distinctives that make the school genuinely theirs.</blockquote>
   <section className="deep-two-grid"><div><h2>Where local customization may occur</h2><List items={customizationAreas}/></div><div><h2>Where network consistency is required</h2><List items={consistencyAreas}/></div></section>
   <section><h2 className="deep-section-title">Partnership covenant</h2><Numbered items={covenant}/></section>
 </Shell>
}

export function PartnershipGovernancePage(){
 return <Shell active="/partnership-model/governance-and-accountability" eyebrow="Clarity before commitment" title="Strong partnerships make important decisions explicit." intro={[
  'Good intentions are not enough to govern a school. Every partnership must define authority, economics, accountability, data responsibilities, quality expectations, conflict resolution, and what happens if the relationship changes or ends.',
  'This page presents the questions that agreements must resolve. CAN has not finalized one legal or financial structure for every jurisdiction or partnership model.'
 ]}>
   <section className="deep-two-grid"><div><h2>Governance</h2><List items={governanceQuestions}/></div><div><h2>Brand and identity</h2><List items={brandQuestions}/></div></section>
   <section><h2 className="deep-section-title">Economics</h2><List items={economicQuestions}/><p className="deep-warning">Specific percentages, fees, revenue shares, and partner payments are not published until formally approved.</p></section>
   <section className="deep-two-grid"><div><h2>Data and records</h2><List items={dataQuestions}/></div><div><h2>Quality and accountability</h2><List items={qualityExpectations}/></div></section>
   <blockquote className="deep-pull">Local autonomy should be meaningful, but it cannot make academic quality, student safety, financial integrity, or reliable records optional.</blockquote>
   <section><h2 className="deep-section-title">Conflict resolution</h2><ol className="deep-simple-numbered">{escalationSequence.map((s,i)=><li key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</li>)}</ol></section>
   <section><h2 className="deep-section-title">Exit and student continuity</h2><List items={exitRequirements}/></section>
 </Shell>
}

export function PartnershipReadinessPage(){
 return <Shell active="/partnership-model/partnership-readiness" eyebrow="From interest to commitment" title="A willing partner is the beginning of diligence, not the end." intro={[
  'Interest, available classrooms, and mission alignment are important, but they do not establish launch readiness.',
  'Before entering a formal partnership, CAN and the prospective partner must determine whether the leadership, educational environment, facility, community, operating capacity, economics, and governance structure can support students well.'
 ]}>
   <section><h2 className="deep-section-title">Readiness dimensions</h2><div className="deep-two-grid">{readinessDimensions.map(d=><details key={d.key}><summary>{d.n} · {d.title}</summary><List items={d.items}/>{d.note&&<p className="deep-status-note">{d.note}</p>}</details>)}</div></section>
   <section><h2 className="deep-section-title">Partnership lifecycle</h2><Numbered items={partnershipLifecycle}/></section>
   <blockquote className="deep-pull">Partnership Model takes the relationship from interest to commitment. Launch Approach takes the committed partnership from design to operation.</blockquote>
   <section><h2 className="deep-section-title">Readiness outcomes</h2><div className="deep-two-grid">{readinessOutcomes.map(o=><div key={o.title}><h2>{o.title}</h2><p className="deep-lead">{o.body}</p></div>)}</div></section>
   <section><h2 className="deep-section-title">Partner readiness summary</h2><ul className="deep-list">{readinessSummaryFields.map(f=><li key={f.label}><span><strong>{f.label}:</strong> {f.value}</span>{f.status&&<small>{f.status}</small>}</li>)}</ul></section>
 </Shell>
}

export function PartnershipDeepLinks(){
 return <section className="destination-deep-links"><p className="destination-eyebrow">Explore the Partnership Model</p><div>{partnershipEntryPoints.map(e=><Link key={e.to} to={e.to}><strong>{e.title}</strong><span>{e.body}</span></Link>)}</div></section>
}

export function PartnershipPartnerTypes(){
 return <section className="destination-deep-links"><p className="destination-eyebrow">Who may partner with CAN</p><div>{partnerTypes.map(p=><article key={p.title}><strong>{p.title}</strong><span>{p.body}</span></article>)}</div></section>
}
