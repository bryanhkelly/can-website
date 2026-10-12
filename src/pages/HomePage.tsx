import { ArrowRight, BookOpenText, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const roles = [
  ['Parents & Families', '/parents'],
  ['Pastors & Church Leaders', '/pastors'],
  ['Christian School Leaders', '/christian-schools'],
  ['Homeschool Families', '/homeschool'],
  ['Denominations & Networks', '/denominations'],
] as const

export function HomePage() {
  return (
    <article className="home-page">
      <section className="home-hero">
        <img
          className="home-hero-image"
          src="/images/02_possibility_student_group.png"
          alt="A diverse group of students together"
          fetchPriority="high"
        />
        <div className="home-hero-wash" aria-hidden="true" />
        <div className="home-hero-content">
          <p className="home-eyebrow">CAN Academy</p>
          <h1 className="editorial-heading">Christian education, closer to home.</h1>
          <p className="home-dek">
            CAN connects rigorous academics, Christian formation, trusted local communities, and a wider network of opportunity.
          </p>

          <div className="home-primary-paths" aria-label="Choose how to explore CAN Academy">
            <Link to="/story/stakes" className="home-path-card home-path-primary">
              <span className="home-path-icon"><BookOpenText aria-hidden="true" /></span>
              <span>
                <strong>Explore the CAN story</strong>
                <small>See the model from the problem through what comes next.</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
            <a href="#start-with-who-you-are" className="home-path-card">
              <span className="home-path-icon"><Users aria-hidden="true" /></span>
              <span>
                <strong>Start with who you are</strong>
                <small>Begin from the perspective closest to your community.</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="home-role-section" id="start-with-who-you-are">
        <div className="home-section-heading">
          <p className="home-eyebrow">Start with who you are</p>
          <h2 className="editorial-heading">Different perspectives. One shared question.</h2>
          <p>How could CAN work in your family, church, school, homeschool community, or network?</p>
        </div>
        <div className="home-role-grid">
          {roles.map(([label, href]) => (
            <Link to={href} key={href}>
              <span>{label}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
