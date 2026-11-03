import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Action = { label: string; to: string }
export const media = {
  students: '/images/02_possibility_student_group.png',
  school: '/images/04_platform_local_campus.png',
  family: '/images/roles/01_families.png',
  church: '/images/roles/02_churches_ministries.png',
  educators: '/images/03_curriculum_student_study.png',
  community: '/images/05_rooted_locally_community.png',
  homeschool: '/images/roles/04_coops_homeschools.png',
  pathway: '/images/06_student_experience_portrait.png'
} as const

export function Eyebrow({children}:{children:ReactNode}) { return <p className="ca-eyebrow">{children}</p> }
export function ActionLink({to,children,secondary=false}:{to:string;children:ReactNode;secondary?:boolean}) {
  return <Link className={secondary?'ca-action ca-action--clear':'ca-action ca-action--gold'} to={to}>{children}<ArrowUpRight size={18} aria-hidden="true"/></Link>
}
export function Hero({eyebrow,title,accent,lede,image,actions,split=false,caption='Illustrative educational imagery — not a CAN Academy campus'}:{
  eyebrow:string;title:string;accent?:string;lede:string;image:string;actions?:Action[];split?:boolean;caption?:string
}) {
  const copy=<div className={split?'ca-hero-copy':'ca-hero-content ca-container'}>
    <Eyebrow>{eyebrow}</Eyebrow><h1>{title}{accent&&<> <em>{accent}</em></>}</h1>
    <p className="ca-hero-lede">{lede}</p>
    {actions&&<div className="ca-actions">{actions.map((a,i)=><ActionLink key={a.to} to={a.to} secondary={i>0}>{a.label}</ActionLink>)}</div>}
  </div>
  if(split)return <section className="ca-hero-split">{copy}<figure className="ca-hero-figure"><img src={image} alt="Illustrative students and community scene" /><figcaption>{caption}</figcaption></figure></section>
  return <section className="ca-hero"><img className="ca-hero-image" src={image} alt="Illustrative students and community scene" /><div className="ca-hero-shade"/>{copy}<span className="ca-hero-caption">{caption}</span></section>
}
export function Section({eyebrow,title,lede,children,linen=false,id}:{eyebrow:string;title:string;lede?:string;children?:ReactNode;linen?:boolean;id?:string}) {
  return <section id={id} className={linen?'ca-section ca-section--linen':'ca-section'}><div className="ca-container"><Eyebrow>{eyebrow}</Eyebrow><h2 className="ca-section-title">{title}</h2>{lede&&<p className="ca-section-lede">{lede}</p>}{children}</div></section>
}
export function Split({eyebrow,title,body,image,link,reverse=false,caption='CAN / The human experience'}:{
  eyebrow:string;title:string;body:string;image:string;link?:Action;reverse?:boolean;caption?:string
}) {
  return <section className="ca-section"><div className={'ca-container ca-split'+(reverse?' ca-split--reverse':'')}>
    <div className="ca-split-photo"><img src={image} loading="lazy" alt="Illustrative educational community photography" /><span>{caption}</span></div>
    <div className="ca-split-copy"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{body}</p>{link&&<Link className="ca-line-link" to={link.to}>{link.label} <ArrowUpRight size={17} aria-hidden="true"/></Link>}</div>
  </div></section>
}
export function Statement({eyebrow,children,note}:{eyebrow:string;children:ReactNode;note?:string}) {
 return <section className="ca-statement"><div className="ca-container"><Eyebrow>{eyebrow}</Eyebrow><div className="ca-statement-text">{children}</div>{note&&<p className="ca-statement-note">{note}</p>}</div></section>
}
export function FeatureLines({items}:{items:{title:string;body:string}[]}) { return <div className="ca-features">{items.map((it,i)=><article key={it.title}><span className="ca-features-num">{String(i+1).padStart(2,'0')}</span><div><h3>{it.title}</h3><p>{it.body}</p></div><ArrowUpRight className="ca-features-arrow" aria-hidden="true"/></article>)}</div> }
export function RoleCards({cards}:{cards:{label:string;title:string;to:string;image:string}[]}) {return <div className="ca-role-cards">{cards.map(card=><Link key={card.to} to={card.to}><img loading="lazy" src={card.image} alt="" /><span className="ca-role-shade"/><span className="ca-role-text"><small>{card.label}</small><strong>{card.title}</strong><b>Explore the opportunity <ArrowUpRight size={16} aria-hidden="true"/></b></span></Link>)}</div>}
export function Conversion({eyebrow,title,body,action}:{eyebrow:string;title:string;body:string;action:Action}) {return <section className="ca-conversion"><div className="ca-container ca-conversion-inner"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{body}</p></div><ActionLink to={action.to}>{action.label}</ActionLink></div></section>}
