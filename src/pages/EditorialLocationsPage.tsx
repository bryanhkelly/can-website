import { ArrowRight, Church, MapPinned, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stateLocations } from '../data/locationStateData'
import { Conversion, Eyebrow, Hero, Section, Split, media } from '../components/EditorialElements'

const statuses = [
 {name:'In development',description:'CAN is evaluating partnership, family demand, facilities, academics, and readiness. No opening or enrollment has been confirmed.'},
 {name:'Exploring partnerships',description:'CAN welcomes conversations with local churches and families. No school-opening commitment has been made.'},
 {name:'Confirmed launch partner',description:'A formally confirmed launch partner and planned next steps exist. Separate school approval is still required.'},
 {name:'Operating',description:'Students are enrolled and instruction is being delivered by an authorized school, when that status is verified.'}
]
function StateCard({state}:{state:(typeof stateLocations)[number]}){
 return <article className="ca-location-card">
   <div className="ca-location-card-top"><span><MapPinned size={21} aria-hidden="true"/></span><small>{state.status}</small></div>
   <h3>{state.name}</h3><p>{state.summary}</p>
   <Link to={`/locations/${state.slug}`}>Explore CAN in {state.name} <ArrowRight size={16} aria-hidden="true"/></Link>
 </article>
}
export function EditorialLocationsPage(){
 const developing=stateLocations.filter(state=>state.status==='In development')
 const exploring=stateLocations.filter(state=>state.status==='Exploring partnerships')
 const confirmed=stateLocations.filter(state=>state.status==='Confirmed launch partner'||state.status==='Operating')
 return <article className="ca-editorial">
   <Hero eyebrow="Locations & launch" title="Opportunity begins locally." accent="So does the work of earning trust." lede="CAN Academy is building toward a network of school communities rooted in the places families already call home. Explore where partnerships are developing and where conversations are just beginning." image={media.school} actions={[{label:'Explore communities',to:'#states'},{label:'Share family interest',to:'/family-interest'}]}/>
   <Section eyebrow="Growth with purpose" title="A strong community starts before the first student arrives." lede="The status of a state does not determine whether an individual school is open. A launch requires verified local partners, families, facilities, academics, funding, safeguarding, and applicable authorization." linen>
     <div className="ca-location-statuses">{statuses.map(status=><div key={status.name}><strong>{status.name}</strong><p>{status.description}</p></div>)}</div>
   </Section>
   <Split eyebrow="The local foundation" title="A CAN school belongs to its community." body="A network expands access to teachers, courses and support. The people, relationships and daily student experience must still be built locally, with care and accountability. That's why CAN moves from interest to opening only when the conditions are right." image={media.church} reverse link={{label:'See how the launch model works',to:'/launch-approach'}}/>
   {confirmed.length>0 && <Section eyebrow="Verified local communities" title="Confirmed CAN locations."><div className="ca-location-cards">{confirmed.map(state=><StateCard state={state} key={state.slug}/>)}</div></Section>}
   <Section id="states" eyebrow="In development" title="Where local work is taking shape." lede="Explore current state-level development, with a clear distinction between early planning and authorized school openings.">
     <div className="ca-location-cards">{developing.map(state=><StateCard key={state.slug} state={state}/>)}</div>
   </Section>
   <Section eyebrow="Exploring partnerships" title="Where conversations could begin." lede="These states are in early discussion or exploration, not announced school openings." linen>
     <div className="ca-location-cards">{exploring.map(state=><StateCard key={state.slug} state={state}/>)}</div>
   </Section>
   <section className="ca-section"><div className="ca-container">
     <Eyebrow>Families and churches</Eyebrow><h2 className="ca-section-title">There's a place for your voice in the conversation.</h2>
     <div className="ca-location-inquiries">
       <Link to="/family-interest"><UsersRound size={26} aria-hidden="true"/><span><strong>For families</strong><small>Tell us where CAN would be meaningful for your student.</small></span><ArrowRight aria-hidden="true"/></Link>
       <Link to="/church-interest"><Church size={26} aria-hidden="true"/><span><strong>For churches</strong><small>Explore whether your community could support CAN locally.</small></span><ArrowRight aria-hidden="true"/></Link>
     </div>
   </div></section>
   <Conversion eyebrow="What's possible" title="Help us understand your community." body="Your interest can inform a conversation. It does not mean a school has been approved, a scholarship accepted, or enrollment opened." action={{label:'Start a conversation',to:'/contact?topic=locations'}}/>
 </article>
}
