import { ArrowRight, BookOpenText, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackEvent } from '../lib/analytics'

const roles = [
  {
    label: 'Parents & Families',
    href: '/parents',
    image: '/images/roles/01_families.png',
    alt: 'A parent considering educational possibilities for a student',
    note: 'Explore CAN for your child',
  },
  {
    label: 'Pastors & Church Leaders',
    href: '/pastors',
    image: '/images/roles/02_churches_ministries.png',
    alt: 'Church and ministry leaders in conversation',
    note: 'Explore CAN for your church',
  },
  {
    label: 'Christian School Leaders',
    href: '/christian-schools',
    image: '/images/roles/03_school_leaders.png',
    alt: 'Christian school leaders discussing student opportunities',
    note: 'Explore high-school expansion',
  },
  {
    label: 'Homeschool Families',
    href: '/homeschool',
    image: '/images/roles/04_coops_homeschools.png',
    alt: 'A homeschool community learning together',
    note: 'Explore flexible participation',
  },
  {
    label: 'Denominations & Networks',
    href: '/denominations',
    image: '/images/roles/05_denominations_networks.png',
    alt: 'Students outside a contemporary church and school community',
    note: 'Explore a network pilot',
  },
] as const

export function HomePage() {
  return (
    <article className="home-page">
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="home-eyebrow">CAN Academy</p>
            <h1 className="editorial-heading">Christian education, closer to home.</h1>
            <p className="home-dek">
              CAN is being built for grades 6–12, connecting rigorous academics, Christian formation, trusted local communities, and a wider network of opportunity.
            </p>

            <div className="home-primary-paths" aria-label="Choose how to explore CAN Academy">
              <Link
                to="/story/stakes"
                className="home-path-card home-path-primary"
                onClick={() => trackEvent('home_story_click')}
              >
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

          <figure className="home-hero-media">
            <img
              src="/images/02_possibility_student_group.png"
              alt="A diverse group of students together"
              fetchPriority="high"
            />
            <figcaption>
              <span>More students.</span>
              <strong>Brighter futures.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="home-role-section" id="start-with-who-you-are">
        <div className="home-section-heading">
          <p className="home-eyebrow">Start with who you are</p>
          <h2 className="editorial-heading">Different perspectives. One shared question.</h2>
          <p>How could CAN work in your family, church, school, homeschool community, or network?</p>
        </div>

        <div className="home-role-grid">
          {roles.map((role) => (
            <Link
              to={role.href}
              key={role.href}
              onClick={() => trackEvent('home_role_click', { route: role.href })}
            >
              <span className="home-role-image">
                <img src={role.image} alt={role.alt} loading="lazy" />
              </span>
              <span className="home-role-copy">
                <strong>{role.label}</strong>
                <small>{role.note}</small>
              </span>
              <span className="home-role-arrow" aria-hidden="true"><ArrowRight /></span>
            </Link>
          ))}
        </div>

        <div className="home-role-footer">
          <p>Not sure where to begin?</p>
          <Link to="/story/explore-can">Explore CAN by topic <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </article>
  )
}
