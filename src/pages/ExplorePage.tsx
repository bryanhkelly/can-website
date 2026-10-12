import {
  ArrowRight,
  Church,
  GraduationCap,
  Handshake,
  House,
  MapPinned,
  Network,
  Route,
  BarChart3,
  School,
  UsersRound,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { explorePageContent } from '../data/pageContent'
import { withPartnerContext } from '../lib/nav'

const TOPIC_ICONS = [
  UsersRound,
  GraduationCap,
  Handshake,
  MapPinned,
  BarChart3,
  Route,
]

const ROLE_ICONS = [Church, UsersRound, School, House, Network]

export function ExplorePage() {
  const content = explorePageContent
  const location = useLocation()
  const contactPath = withPartnerContext('/contact', location.search)

  return (
    <article className="explore-hub">
      <section className="explore-hub-hero">
        <img
          className="explore-hub-hero-image"
          src="/images/02_possibility_student_group.png"
          alt=""
          fetchPriority="high"
        />
        <div className="explore-hub-hero-wash" />
        <div className="explore-hub-hero-content">
          <p className="explore-hub-eyebrow">08 / Explore CAN</p>
          <h1 className="editorial-heading">{content.h1}</h1>
          <p className="explore-hub-dek">{content.dek}</p>
          <p className="explore-hub-secondary">{content.secondaryDek}</p>
          <Link to={contactPath} className="explore-hub-primary">
            {content.ctaLabel}
            <ArrowRight aria-hidden="true" />
          </Link>
          <p className="explore-hub-tagline">A different way forward</p>
        </div>
      </section>

      <div className="explore-hub-content">
        <section className="explore-hub-section" aria-labelledby="explore-topics-heading">
          <div className="explore-hub-section-heading">
            <span aria-hidden="true" />
            <div>
              <h2 id="explore-topics-heading" className="editorial-heading">Explore by topic</h2>
              <p>{content.topicIntro}</p>
            </div>
          </div>
          <div className="explore-topic-grid">
            {content.topics.map((topic, index) => {
              const Icon = TOPIC_ICONS[index]
              return (
                <Link key={topic.label} to={withPartnerContext(topic.href, location.search)} className="explore-topic-card">
                  <span className="explore-topic-icon"><Icon aria-hidden="true" /></span>
                  <span className="explore-topic-copy">
                    <span className="explore-topic-title">{topic.label}</span>
                    <span className="explore-topic-subtitle">{topic.subtitle}</span>
                  </span>
                  <span className="explore-topic-arrow"><ArrowRight aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>
          <div className="explore-secondary-topics" aria-label="More ways to explore CAN">
            {content.secondaryTopics.map((topic) => (
              <Link key={topic.label} to={withPartnerContext(topic.href, location.search)}>
                <span><strong>{topic.label}</strong><small>{topic.subtitle}</small></span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <section className="explore-hub-section explore-roles-section" aria-labelledby="explore-roles-heading">
          <div className="explore-hub-section-heading">
            <span aria-hidden="true" />
            <div>
              <h2 id="explore-roles-heading" className="editorial-heading">Start with who you are</h2>
              <p>{content.roleIntro}</p>
            </div>
          </div>
          <div className="explore-role-grid">
            {content.roles.map((role, index) => {
              const Icon = ROLE_ICONS[index]
              return (
                <Link key={role.label} to={withPartnerContext(role.href, location.search)} className="explore-role-card">
                  <Icon aria-hidden="true" className="explore-role-icon" />
                  <span>{role.label}</span>
                  <span className="explore-role-arrow"><ArrowRight aria-hidden="true" /></span>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="explore-conversation">
          <img src="/images/08_explore_audience_roles.png" alt="" loading="lazy" />
          <div className="explore-conversation-wash" />
          <div className="explore-conversation-copy">
            <p className="explore-hub-eyebrow">Let's explore together</p>
            <h2 className="editorial-heading">{content.conversationHeading}</h2>
            <p>{content.conversationBody}</p>
            <Link to={contactPath} className="explore-hub-primary">
              {content.ctaLabel}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <p className="explore-conversation-closing">{content.closing}</p>
        </section>
      </div>
    </article>
  )
}
