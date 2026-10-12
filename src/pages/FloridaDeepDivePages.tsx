import { Link } from 'react-router-dom'
import {
  VERIFY,
  choiceGaps,
  dataConflicts,
  marketBySlug,
  markets,
  selectionCriteria,
} from '../data/floridaDeepContent'

const FLORIDA_NAV = [
  ['/florida','Why Florida'],
  ['/florida/market-landscape','Market landscape'],
  ['/florida/market-selection','Market selection'],
  ['/florida/markets','Markets'],
  ['/florida/research','Research'],
] as const

function Nav({active}:{active:string}) {
  return <nav className="deep-section-nav" aria-label="Florida Opportunity pages">
    {FLORIDA_NAV.map(([to,label])=><Link key={to} to={to} className={to===active?'is-active':''}><span>{label}</span></Link>)}
  </nav>
}
function List({items}:{items:string[]}) { return <ul className="deep-list">{items.map(i=><li key={i}>{i}</li>)}</ul> }

export function FloridaDeepPage(){
  const sections=[
    {n:'01',title:'Funding that follows families',body:"Florida's scholarship programs can substantially reduce the amount families must pay directly for private education. This does not guarantee enrollment or financial viability, but it creates an unusually strong environment for testing an affordable church-anchored model."},
    {n:'02',title:'Infrastructure already exists',body:"Churches and Christian schools already possess many of the assets that make school expansion expensive: classrooms, gathering spaces, parking, kitchens, vans, local leadership, family relationships, and community trust. CAN's opportunity is to activate and strengthen these assets rather than begin with a real-estate strategy."},
    {n:'03',title:'The high-school gap is especially important',body:'Many communities have Christian elementary or middle-school options but much less secondary-school capacity. Families who choose a faith-based K–8 education often run out of options when their students reach ninth grade.'},
    {n:'04',title:'One state can test several models',body:'Florida includes urban, rural, denominational, church-hosted, existing-school, and micro-school opportunities. This allows CAN to test multiple launch configurations within one legal, scholarship, and operating environment.'},
  ]
  return <article className="deep-page">
    <header className="deep-page-hero">
      <p className="destination-eyebrow">Florida Opportunity</p>
      <h1 className="editorial-heading">Florida is where CAN can prove the model.</h1>
      <div className="deep-page-intro">
        <p>Florida combines several conditions that make a networked Christian-school model especially compelling: strong education-choice funding, significant demand for school alternatives, large church networks, existing Christian schools, communities with limited access to private high school, and a policy environment that supports educational choice.</p>
        <p>The opportunity is not simply to open another school. A network model allows smaller communities to share teachers, courses, systems, and support while keeping students close to home.</p>
      </div>
    </header>
    <Nav active="/florida"/>
    <div className="deep-page-body">
      <section className="deep-two-grid">{sections.map(s=><div key={s.n}><h2>{s.n} · {s.title}</h2><p className="deep-lead">{s.body}</p></div>)}</section>
      <blockquote className="deep-pull">Start where the need and the model fit. Florida is not the entire CAN Academy vision — it is the first environment in which CAN can prove that the model works.</blockquote>
      <div className="deep-actions"><Link to="/florida/market-landscape">Explore the market landscape →</Link><Link to="/launch-approach">See the launch approach →</Link></div>
    </div>
  </article>
}

export function FloridaLandscapePage(){
 return <article className="deep-page">
  <header className="deep-page-hero"><p className="destination-eyebrow">Where CAN could work</p><h1 className="editorial-heading">The strongest opportunities sit at the intersection of student need, limited choice, and local capacity.</h1><div className="deep-page-intro"><p>CAN is not searching only for counties with low school ratings. A viable market must combine an addressable high-school population, insufficient quality-adjusted alternatives, scholarship-supported affordability, and a credible church or school partner capable of providing local trust and infrastructure.</p></div></header>
  <Nav active="/florida/market-landscape"/>
  <div className="deep-page-body">
   <section><h2 className="deep-section-title">Initial research markets</h2><div className="deep-two-grid">{markets.map(m=><div key={m.slug}><h2><Link to={m.route}>{m.name}</Link></h2><p className="deep-lead">{m.opportunity}</p><p>{m.model}</p><p className="deep-status-note">{m.status}</p></div>)}</div></section>
   <section><h2 className="deep-section-title">Five kinds of choice gap</h2><div className="deep-three-grid">{choiceGaps.map(g=><article key={g.n}><h2>{g.n} · {g.name}</h2><p>{g.body}</p></article>)}</div></section>
   <blockquote className="deep-pull">A county can exhibit more than one kind of gap. The purpose of market research is to identify the actual constraint before recommending a CAN model.</blockquote>
  </div>
 </article>
}

export function FloridaSelectionPage(){
 return <article className="deep-page">
  <header className="deep-page-hero"><p className="destination-eyebrow">Market selection</p><h1 className="editorial-heading">A promising market is more than a place with weak schools.</h1></header>
  <Nav active="/florida/market-selection"/>
  <div className="deep-page-body">
   <section><ol className="deep-numbered">{selectionCriteria.map(c=><li key={c.n}><span>{c.n}</span><div><h3>{c.name}</h3><p>{c.body}</p></div></li>)}</ol></section>
   <section className="deep-note"><p className="destination-eyebrow">Methodology note</p><p>County-level research is a screening tool. Final site selection must be based on a verified partner and the realistic travel area around that partner.</p><p>No single opportunity score is displayed. The current research documents contain inconsistent score versions, and no score will be published until CAN designates one scoring model as authoritative.</p></section>
  </div>
 </article>
}

export function FloridaMarketsPage(){
 return <article className="deep-page">
  <header className="deep-page-hero"><p className="destination-eyebrow">Five markets, different questions</p><h1 className="editorial-heading">The five markets are not five identical campus opportunities.</h1><div className="deep-page-intro"><p>Together, the markets create a research portfolio. Each tests a different expression of the CAN model and should be evaluated on its own terms.</p></div></header>
  <Nav active="/florida/markets"/>
  <div className="deep-page-body">
   <section className="florida-market-list">{markets.map(m=><article key={m.slug}><div><h2><Link to={m.route}>{m.name}</Link></h2><p>{m.thesis}</p><small>{m.status}</small></div><dl><div><dt>Research role</dt><dd>{m.researchRole}</dd></div><div><dt>Opportunity</dt><dd>{m.opportunity}</dd></div><div><dt>Model to test</dt><dd>{m.model}</dd></div></dl><div><strong>Primary question</strong><p>{m.primaryQuestion}</p></div></article>)}</section>
   <p className="deep-warning">No market has been selected, approved, or committed to. These are research positions, and each remains subject to partner, facility, family, scholarship, and regulatory verification.</p>
  </div>
 </article>
}

export function FloridaMarketProfilePage({slug}:{slug:'desoto'|'okeechobee'|'holmes'|'gadsden'|'hamilton'}){
 const m=marketBySlug(slug)!
 return <article className="deep-page">
  <header className="deep-page-hero"><p className="destination-eyebrow">{m.county} / {m.community}</p><h1 className="editorial-heading">{m.name}</h1><div className="deep-page-intro"><p>{m.thesis}</p><p><strong>Research role:</strong> {m.researchRole}. <strong>Status:</strong> {m.status}.</p></div></header>
  <Nav active="/florida/markets"/>
  <div className="deep-page-body">
   <blockquote className="deep-pull">{m.primaryQuestion}</blockquote>
   <section><h2 className="deep-section-title">Why this market matters</h2>{m.whyMatters.map(p=><p className="deep-lead" key={p.slice(0,40)}>{p}</p>)}</section>
   <section><h2 className="deep-section-title">Research figures</h2><div className="florida-figures">{m.figures.map(f=><div key={f.label}><span>{f.label}</span><strong>{f.value}</strong>{f.note&&<small>{f.note}</small>}</div>)}</div></section>
   <section className="deep-two-grid"><div><h2>Choice landscape</h2><List items={m.choiceLandscape}/></div><div><h2>Partnership landscape</h2><List items={m.partnershipLandscape}/></div></section>
   <section><h2 className="deep-section-title">Recommended model to evaluate</h2><List items={m.recommendedModel}/></section>
   <section><h2 className="deep-section-title">Questions that still need answers</h2><List items={m.questions}/></section>
   <section><h2 className="deep-section-title">Sources</h2><ul className="deep-source-list">{m.sources.map(s=><li key={s.name}>{s.name} <small>{s.published}</small></li>)}</ul><p className="deep-status-note">{m.updated}</p></section>
  </div>
 </article>
}

export function FloridaResearchPage(){
 const comparison=markets.map(m=>[m.name,m.opportunity,m.model,m.status,m.researchRole])
 return <article className="deep-page">
  <header className="deep-page-hero"><p className="destination-eyebrow">Evidence</p><h1 className="editorial-heading">The research behind the Florida market work.</h1><div className="deep-page-intro"><p>Statistics live here rather than crowding the narrative pages. Every figure marked verification required is not yet established by the supplied research and must be confirmed before it is used in a partner conversation.</p></div></header>
  <Nav active="/florida/research"/>
  <div className="deep-page-body">
   <section><h2 className="deep-section-title">Executive market comparison</h2><div className="deep-table-wrap"><table><thead><tr>{['Market','Opportunity type','Model being evaluated','Research status','Research role'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{comparison.map(r=><tr key={r[0]}>{r.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></div></section>
   <section><h2 className="deep-section-title">Definitions of the five choice gaps</h2><div className="deep-two-grid">{choiceGaps.map(g=><div key={g.n}><h2>{g.name}</h2><p className="deep-lead">{g.body}</p></div>)}</div></section>
   <section><h2 className="deep-section-title">Market-selection methodology</h2><ol className="deep-numbered">{selectionCriteria.map(c=><li key={c.n}><span>{c.n}</span><div><h3>{c.name}</h3><p>{c.body}</p></div></li>)}</ol></section>
   <section><h2 className="deep-section-title">Verification-required data tables</h2><p className="deep-warning">The old research deliberately left several demographic, school, scholarship, and affordability fields as {VERIFY}. Those values remain unverified here rather than being silently filled.</p><div className="florida-verify-grid">{markets.map(m=><div key={m.slug}><strong>{m.name}</strong><span>Population: {VERIFY}</span><span>Public 9–12 enrollment: {VERIFY}</span><span>Scholarship amount: {VERIFY}</span><span>Prevailing tuition: {VERIFY}</span></div>)}</div></section>
   <section><h2 className="deep-section-title">Known data conflicts</h2><List items={dataConflicts}/></section>
   <section><h2 className="deep-section-title">Partner and denominational research</h2>{markets.map(m=><div className="deep-note" key={m.slug}><h3>{m.name}</h3><List items={m.partnershipLandscape}/></div>)}</section>
  </div>
 </article>
}
