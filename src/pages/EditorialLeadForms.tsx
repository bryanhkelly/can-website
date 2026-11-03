import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Eyebrow, Hero, media } from '../components/EditorialElements'
import { trackEvent } from '../lib/analytics'

type Kind='family'|'church'|'teacher'|'demo'
type LeadProps={kind:Kind;title:string;intro:string;children?:ReactNode}
const info:Record<Kind,{name:string,source:string,button:string}>={
 family:{name:'can-family-interest',source:'family-interest',button:'Share family interest'},
 church:{name:'can-church-interest',source:'church-interest',button:'Share church interest'},
 teacher:{name:'can-teacher-interest',source:'teacher-interest',button:'Express teaching interest'},
 demo:{name:'can-demo-request',source:'demo-request',button:'Request a guided tour'}
}
function submissionBody(form:HTMLFormElement){
 const data = new FormData(form);const encoded=new URLSearchParams()
 data.forEach((value,key)=>{if(typeof value==='string')encoded.append(key,value)})
 return encoded.toString()
}
export async function submitCanForm(form:HTMLFormElement){
 const response=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:submissionBody(form),redirect:'follow'})
 if(!response.ok)throw new Error('Submission service was unavailable.')
 return response
}
export function LeadForm({kind,title,intro,children}:LeadProps){
 const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle')
 const {name,source,button}=info[kind]
 async function submit(event:FormEvent<HTMLFormElement>){
   event.preventDefault();if(state==='sending')return;const form=event.currentTarget
   setState('sending');trackEvent('lead_submit',{context:source})
   try{await submitCanForm(form);setState('success');form.reset();trackEvent('lead_success',{context:source})}
   catch{setState('error');trackEvent('lead_error',{context:source})}
 }
 return <section className="ca-section"><div className="ca-container ca-lead-grid">
   <div><Eyebrow>Connect with CAN Academy</Eyebrow><h1 className="ca-section-title">{title}</h1><p className="ca-prose">{intro}</p>
     <p className="ca-prose" style={{marginTop:30}}>This is a preliminary expression of interest, not a school enrollment application, a job offer, or a confirmed opening.</p>
     {children}
   </div>
   <div className="ca-lead-shell">
     {state==='success'?<div className="ca-lead-success" role="status"><CheckCircle2 size={30} aria-hidden="true"/><h2>Thank you for connecting with CAN.</h2><p>Your information has been submitted. We will follow up as appropriate to the opportunities in your area.</p><Link to="/experience-can">Continue exploring CAN</Link></div>:
     <form name={name} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
       <input name="form-name" type="hidden" value={name}/>
       <input name="source" type="hidden" value={source}/>
       <input name="subject" type="hidden" value={`CAN Academy: new ${source} (%{submissionId})`}/>
       <p className="sr-only" aria-hidden="true"><label>Leave blank<input type="text" name="bot-field" tabIndex={-1} autoComplete="off"/></label></p>
       <label>Full name<input type="text" name="name" autoComplete="name" maxLength={120} required/></label>
       <label>Email address<input type="email" name="email" autoComplete="email" maxLength={254} required/></label>
       <label>State<select name="state" defaultValue="" required><option value="" disabled>Select state</option>{['Florida','Arizona','Arkansas','Iowa','Texas','Oklahoma','Wisconsin','Other'].map(s=><option key={s} value={s}>{s}</option>)}</select></label>
       {kind==='family'&&<label>Expected grade of interest<select name="grade" defaultValue=""><option value="">Prefer not to say</option>{[6,7,8,9,10,11,12].map(g=><option key={g} value={String(g)}>Grade {g}</option>)}</select></label>}
       {(kind==='church'||kind==='teacher')&&<label>{kind==='church'?'Church or organization':'Subject area or teaching background'}<input name="organization" type="text" maxLength={180} required/></label>}
       {kind==='demo'&&<label>I'm most interested as<select name="audience" defaultValue="family"><option value="family">Parent or family</option><option value="church">Church or school leader</option><option value="teacher">Educator</option></select></label>}
       <label>What would you like us to know? (optional)<textarea name="message" rows={4} maxLength={1500} placeholder="Please do not include student health records or other sensitive information."/></label>
       <label className="ca-consent"><input type="checkbox" name="consent" value="yes" required/><span>I agree that CAN Academy may contact me about this inquiry. See our <Link to="/privacy">privacy policy</Link>.</span></label>
       <button type="submit" disabled={state==='sending'}>{state==='sending'?'Submitting…':button}</button>
       {state==='error'&&<p className="ca-lead-error" role="alert">Your message couldn't be submitted. Please check your connection and try again.</p>}
       <p className="ca-note">Only information needed to respond to your inquiry is requested. No student records or payment details.</p>
     </form>}
   </div>
 </div></section>
}
export function EditorialFamilyInterestPage(){return <article className="ca-editorial"><Hero eyebrow="For families" title="Every school begins with" accent="a family's hope." lede="Tell CAN what you are looking for and which community matters to you." image={media.family} split/><LeadForm kind="family" title="Tell us where your student could belong." intro="Share your general location, anticipated grade, and educational interests. CAN will use this to understand where families would like to see future local communities."><Link className="ca-line-link" to="/student-experience/a-week-at-can">See a week at CAN first →</Link></LeadForm></article>}
export function EditorialChurchInterestPage(){return <article className="ca-editorial"><Hero eyebrow="Church partnership inquiry" title="You know the families." accent="Let's explore what you could build together." lede="A first conversation should be simple, respectful, and grounded in your community's actual needs." image={media.church} split/><LeadForm kind="church" title="Your community could make a difference." intro="Tell us about your church, the families you serve, and the possibility of a locally rooted CAN Community. Every launch depends on careful qualification and readiness."><Link className="ca-line-link" to="/church-preview">Preview CAN at your church first →</Link></LeadForm></article>}
export function EditorialTeacherApplyPage(){return <article className="ca-editorial"><Hero eyebrow="Educator interest" title="Teach with purpose." accent="Let's start a conversation." lede="Educator matching should begin with what you teach, who you serve, and the roles you are equipped to take on." image={media.educators} split/><LeadForm kind="teacher" title="Bring your expertise to the CAN conversation." intro="We'd love to learn which subjects you teach, the grades you serve, and the type of student experience you hope to help create. Submitting interest is not an application for an advertised role."><Link className="ca-line-link" to="/teachers/opportunities">Explore prospective educator roles →</Link></LeadForm></article>}
export function EditorialDemoAccessPage(){return <article className="ca-editorial"><Hero eyebrow="Guided CAN OS demonstration" title="Go deeper." accent="See how the system fits together." lede="Request access to a guided, synthetic CAN OS tour after sharing a few details." image={media.school} split/><LeadForm kind="demo" title="Go deeper into the CAN experience." intro="Request an invitation to a guided, synthetic CAN OS tour. This is a demo interest request; access is reviewed before any protected demonstration is offered."><Link className="ca-line-link" to="/experience-can">Explore the public tour first →</Link></LeadForm></article>}
