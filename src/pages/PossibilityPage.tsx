import { BookOpen, Cross, Users, Globe } from 'lucide-react'
import { StoryIntro } from '../components/ui/StoryIntro'
import { PhotoBlock } from '../components/ui/PhotoBlock'
import { RefrainBar } from '../components/ui/RefrainBar'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { possibilityContent } from '../data/pageContent'

const ICONS = [BookOpen, Cross, Users, Globe]
const TONES = ['bg-green-600', 'bg-gold-600', 'bg-navy-500', 'bg-navy-900']

export function PossibilityPage() {
  const { eyebrowNumber, eyebrowLabel, kicker, h1, dek, items, refrain, transition, details } = possibilityContent
  return (
    <article className="story-page">
      <StoryIntro number={eyebrowNumber} label={eyebrowLabel} kicker={kicker} heading={h1} description={dek} centered />
      <section className="possibility-model" aria-label="Four pillars of the CAN model">
        <PhotoBlock
          src="/images/02_possibility_student_group.png"
          alt="A group of students smiling together"
          className="possibility-photo"
          imagePosition="58% 50%"
          imagePositionMobile="55% 50%"
          priority
          shaded={false}
        >
          <div className="possibility-caption">
            <p className="script-tag">Together.<br />Greater futures.</p>
          </div>
        </PhotoBlock>
        {items.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <div className={`possibility-pillar possibility-pillar-${i}`} key={item.heading}>
              <span className={`pillar-icon ${TONES[i]}`}><Icon aria-hidden="true" strokeWidth={1.7} /></span>
              <h2 className="font-serif text-xl leading-tight">{item.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">{item.body}</p>
            </div>
          )
        })}
      </section>
      <div className="possibility-refrain"><RefrainBar text={refrain} transition={transition} current="possibility" /></div>
      <DetailSection>
        <DetailItem label="Why now" body={details.policy} variant="proof" />
        <DetailItem label="For example" body={details.example} variant="editorial" />
        <DetailItem label="A common concern" body={details.objection} variant="clarification" />
      </DetailSection>
    </article>
  )
}
