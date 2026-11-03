import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navSlugs } from '../data/pageContent'
import { BrandMark } from './ui/BrandMark'

const entries=[
  {label:'Our Model',to:'/how-it-works'},
  {label:'Families',to:'/families'},
  {label:'Churches',to:'/churches'},
  {label:'Educators',to:'/teachers'},
  {label:'A Week at CAN',to:'/student-experience/a-week-at-can'},
  {label:'Locations',to:'/locations'},
]
const labels=['Stakes','Possibility','Curriculum','Platform','Rooted Locally','Student Experience','Why It Can Work','Explore CAN']

export function SiteHeader(){
  const loc=useLocation();const [open,setOpen]=useState(false);const [storyOpen,setStoryOpen]=useState(false)
  useEffect(()=>{setOpen(false);setStoryOpen(false)},[loc.pathname])
  const isStory=loc.pathname.startsWith('/story/')
  return <header className="ca-public-nav">
    <div className="ca-public-head">
      <Link className="ca-brand" to="/" aria-label="CAN Academy home">
        <span className="ca-brand-mark"><BrandMark className="h-7 w-7"/></span>
        <span><strong>CAN <span style={{fontWeight:500}}>ACADEMY</span></strong><small>COMMUNITIES. LEARNERS. BRIGHTER FUTURES.</small></span>
      </Link>
      <button type="button" className="ca-mobile-toggle" aria-label={open?'Close menu':'Open navigation menu'} aria-controls="ca-main-nav" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
        {open?<X size={25}/>:<Menu size={25}/>}
      </button>
      <nav id="ca-main-nav" aria-label="Primary navigation" className={'ca-main-nav'+(open?' is-open':'')}>
        {entries.map(e=><NavLink key={e.to} to={e.to}>{e.label}</NavLink>)}
        <NavLink to="/experience-can" className="ca-main-cta">Experience CAN <span aria-hidden="true">↗</span></NavLink>
      </nav>
    </div>
    {isStory&&<div>
      <button type="button" className="ca-mobile-toggle ca-story-toggle" aria-expanded={storyOpen} aria-controls="ca-story-links" onClick={()=>setStoryOpen(v=>!v)}>
        {storyOpen?'Close story chapters':'Explore CAN story chapters'} {storyOpen?<X size={17}/>:<Menu size={17}/>}
      </button>
      <nav id="ca-story-links" className={'ca-story-nav'+(storyOpen?' is-open':'')} aria-label="The CAN story">
        {navSlugs.map((slug,i)=><NavLink key={slug} to={`/story/${slug}`}>{String(i+1).padStart(2,'0')} · {labels[i]}</NavLink>)}
      </nav>
    </div>}
  </header>
}
