import { Link } from 'react-router-dom'
import { evidenceFooter, evidencePages, evidenceSteps, type EvidenceBlock } from '../data/evidenceDeepContent'

function EvidenceNav({active}:{active:string}) {
  return <nav className="deep-section-nav" aria-label="Evidence Library pages">
    {evidenceSteps.map(s=><Link key={s.to} to={s.to} className={s.to===active?'is-active':''}><span>{s.label}</span></Link>)}
  </nav>
}

function Bullets({items}:{items:string[]}) {
  return <ul className="deep-list">{items.map(i=><li key={i}>{i}</li>)}</ul>
}

function Block({block}:{block:EvidenceBlock}) {
  switch(block.t){
    case 'section':
      return <section>
        <h2 className="deep-section-title">{block.h2}</h2>
        {block.body?.map(p=><p className="deep-lead" key={p.slice(0,40)}>{p}</p>)}
        {block.bullets&&<Bullets items={block.bullets}/>}
        {block.after?.map(p=><p className="deep-closing-copy" key={p.slice(0,40)}>{p}</p>)}
      </section>
    case 'note':
      return <section className="deep-note"><p className="destination-eyebrow">{block.label}</p>{block.body?.map(p=><p key={p.slice(0,40)}>{p}</p>)}{block.bullets&&<Bullets items={block.bullets}/>}</section>
    case 'pull':
      return <blockquote className="deep-pull">{block.text}</blockquote>
    case 'funnel':
      return <section><h2 className="deep-section-title">{block.label}</h2><div className="deep-funnel">{block.stages.map((s,i)=><span key={s}>{i>0&&<b aria-hidden="true">→</b>}{s}</span>)}</div></section>
    case 'cards':
      return <section><h2 className="deep-section-title">{block.label}</h2><div className="destination-deep-links"><div>{block.items.map(c=><Link key={c.to} to={c.to}><strong>{c.title}</strong><span>{c.body}</span><small>{c.cta}</small></Link>)}</div></div></section>
    case 'sources':
      return <section><h2 className="deep-section-title">Primary sources</h2><ul className="deep-source-list">{block.items.map(s=><li key={s.label}>{s.href?<a href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>:s.label}</li>)}</ul></section>
    case 'closing':
      return <section className="deep-closing"><h2 className="editorial-heading">{block.text}</h2></section>
  }
}

export function EvidenceDeepPage({path}:{path:string}) {
  const page=evidencePages[path]
  if(!page) return <article className="deep-page"><h1 className="editorial-heading">Evidence page not found.</h1></article>
  return <article className="deep-page">
    <header className="deep-page-hero">
      <p className="destination-eyebrow">{page.eyebrow}</p>
      <h1 className="editorial-heading">{page.title}</h1>
      <div className="deep-page-intro">{page.intro.map(p=><p key={p.slice(0,40)}>{p}</p>)}</div>
    </header>
    <EvidenceNav active={path}/>
    <div className="deep-page-body">
      {page.blocks.map((b,i)=><Block key={`${b.t}-${i}`} block={b}/>)}
      <section>
        <h2 className="deep-section-title">{evidenceFooter.h2}</h2>
        <p className="deep-lead">{evidenceFooter.intro}</p>
        <dl className="deep-three-grid">{evidenceFooter.kinds.map(k=><div key={k.name}><dt>{k.name}</dt><dd>{k.text}</dd></div>)}</dl>
        <div className="deep-closing-copy">{evidenceFooter.closing.map(p=><p key={p}>{p}</p>)}</div>
      </section>
    </div>
  </article>
}
