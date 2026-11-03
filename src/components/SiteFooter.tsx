import { Link, useLocation } from 'react-router-dom'
import { withPartnerContext } from '../lib/nav'
import { ShareMenu } from './ShareMenu'
export function SiteFooter(){
 const location=useLocation()
 const preserve=(path:string)=>withPartnerContext(path,location.search)
 return <footer className="ca-footer"><div className="ca-container">
   <div className="ca-footer-grid">
     <div><strong>✦ &nbsp; CAN ACADEMY</strong><em>Christian education, closer to home.</em></div>
     <div className="ca-footer-links"><Link to={preserve("/how-it-works")}>The Model</Link><Link to={preserve("/academics")}>Academics</Link><Link to={preserve("/student-experience")}>Student Experience</Link><Link to={preserve("/story/stakes")}>The CAN Story</Link></div>
     <div className="ca-footer-links"><Link to={preserve("/churches")}>For Churches</Link><Link to={preserve("/families")}>For Families</Link><Link to={preserve("/teachers")}>For Educators</Link><Link to={preserve("/partnership-model")}>Partnerships</Link></div>
     <div className="ca-footer-links"><Link to={preserve("/experience-can")}>Experience CAN</Link><Link to={preserve("/locations")}>Locations</Link><Link to={preserve("/leadership")}>Leadership</Link><Link to={preserve("/contact")}>Contact CAN</Link></div>
   </div>
   <div className="ca-footer-bottom"><span>© {new Date().getFullYear()} CAN Academy. All rights reserved. · <Link to={preserve("/privacy")}>Privacy</Link> · <Link to={preserve("/terms")}>Terms</Link> · <Link to={preserve("/accessibility")}>Accessibility</Link></span><span>Schools and programs open only when all applicable launch conditions are met. <ShareMenu/></span></div>
 </div></footer>
}
