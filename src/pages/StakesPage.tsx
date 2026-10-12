import { MapPin, DollarSign, Cross, BookOpen, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageEyebrow } from '../components/ui/PageEyebrow'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { stakesContent } from '../data/pageContent'

const ICONS = [MapPin, DollarSign, Cross, BookOpen]
const TONES = ['bg-navy-900', 'bg-green-600', 'bg-gold-600', 'bg-navy-900']

export function StakesPage() {
  const { eyebrowNumber, eyebrowLabel, h1, dek, items, refrain, details } = stakesContent
  return (
    <article>
      <section className="stakes-scene" aria-label="Challenges families face">
        <img className="stakes-photo" src="/images/01_stakes_student_hero.png" alt="A student looking toward the future" loading="eager" fetchPriority="high" />
        <div className="stakes-wash" />
        <div className="story-content stakes-content">
          <PageEyebrow number={eyebrowNumber} label={eyebrowLabel} />
          <div className="stakes-intro">
            <h1 className="editorial-heading story-heading">{h1}</h1>
            <p className="story-dek">{dek}</p>
          </div>
          <div className="stakes-challenges">
            {items.map((item, i) => {
              const Icon = ICONS[i]
              return (
                <div key={item.heading} className="stakes-card">
                  <span className={`pillar-icon ${TONES[i]}`}><Icon aria-hidden="true" strokeWidth={1.8} /></span>
                  <div><h2>{item.heading}</h2><p>{item.body}</p></div>
                </div>
              )
            })}
            <div className="stakes-refrain">
              <p>{refrain}</p>
              <Link to="/story/possibility" aria-label="Continue to The Possibility" className="story-next"><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="story-content pb-10">
        <DetailSection>
          <DetailItem label="A fuller picture" body={details.example} />
          <DetailItem label="A common concern" body={details.objection} />
        </DetailSection>
      </div>
    </article>
  )
}
