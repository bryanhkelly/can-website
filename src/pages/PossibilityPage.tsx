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
      <section className="why-now-section" aria-labelledby="why-now-heading">
        <div className="why-now-heading">
          <p className="destination-eyebrow">Why now</p>
          <h2 id="why-now-heading" className="editorial-heading">The pieces that once had to live in one building can now work as a network.</h2>
          <p>
            Families are more familiar with flexible and hybrid education than they were a generation ago. Churches, schools, homeschool communities, and other trusted institutions already have relationships and local infrastructure. A shared academic network can connect those communities to teachers, courses, support, and school operations without asking every site to rebuild the whole system.
          </p>
        </div>
        <div className="why-now-grid">
          <article><strong>Families are choosing differently.</strong><p>More families are comfortable considering hybrid, homeschool, private, and other alternatives when the model fits their priorities.</p></article>
          <article><strong>Trusted infrastructure already exists.</strong><p>Local communities already have relationships, leaders, gathering space, mentors, and ministry rhythms that a new school cannot manufacture quickly.</p></article>
          <article><strong>Shared capabilities can travel.</strong><p>Teachers, courses, records, support, and operating systems can increasingly be shared across communities while students remain rooted close to home.</p></article>
        </div>
      </section>

      <div className="possibility-refrain"><RefrainBar text={refrain} transition={transition} current="possibility" /></div>
      <DetailSection>
        <DetailItem label="For example" body={details.example} variant="editorial" />
        <DetailItem label="A common concern" body={details.objection} variant="clarification" />
      </DetailSection>
    </article>
  )
}
