import { Link } from 'react-router-dom'
import { ShareMenu } from './ShareMenu'
export function SiteFooter(){
 return <footer className="ca-footer"><div className="ca-container">
   <div className="ca-footer-grid">
     <div><strong>✦ &nbsp; CAN ACADEMY</strong><em>Christian education, closer to home.</em></div>
     <div className="ca-footer-links"><Link to="/how-it-works">The Model</Link><Link to="/academics">Academics</Link><Link to="/student-experience">Student Experience</Link><Link to="/story/stakes">The CAN Story</Link></div>
     <div className="ca-footer-links"><Link to="/churches">For Churches</Link><Link to="/families">For Families</Link><Link to="/teachers">For Educators</Link><Link to="/partnership-model">Partnerships</Link></div>
     <div className="ca-footer-links"><Link to="/experience-can">Experience CAN</Link><Link to="/locations">Locations</Link><Link to="/leadership">Leadership</Link><Link to="/contact">Contact CAN</Link></div>
   </div>
   <div className="ca-footer-bottom"><span>© {new Date().getFullYear()} CAN Academy. All rights reserved. · <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link> · <Link to="/accessibility">Accessibility</Link></span><span>Schools and programs open only when all applicable launch conditions are met. <ShareMenu/></span></div>
 </div></footer>
}
