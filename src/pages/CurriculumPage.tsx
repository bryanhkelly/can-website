import { RefrainBar } from '../components/ui/RefrainBar'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { CheckItem } from '../components/ui/CheckItem'
import { BookOpen, Cross, Globe, TrendingUp, MapPin } from 'lucide-react'
import { PhotoHero } from '../components/ui/PhotoHero'
import { curriculumContent } from '../data/pageContent'

const LAYER_TONES = [
  'curriculum-local',
  'curriculum-worldview',
  'curriculum-content',
  'curriculum-standards',
]
const LAYER_ICONS = [MapPin, Globe, Cross, TrendingUp]

export function CurriculumPage() {
  const { eyebrowNumber, eyebrowLabel, kicker, h1, dek, visualLayers, layers, example, refrain, transition, details } =
    curriculumContent

  return (
    <article>
      <PhotoHero
        number={eyebrowNumber}
        label={eyebrowLabel}
        kicker={kicker}
        heading={h1}
        description={dek}
        src="/images/03_curriculum_student_study.png"
        alt="A student reading and studying"
      />

      <div className="story-content pb-10">
      <div className="curriculum-layout">
        <section className="curriculum-stack" aria-label="Four layers of the CAN curriculum">
          {visualLayers.map((layer, i) => {
            const Icon = LAYER_ICONS[i]
            return (
              <div key={layer.heading} className={`curriculum-slab ${LAYER_TONES[i]}`}>
                <div className="curriculum-slab-top" />
                <div className="curriculum-slab-front">
                  <Icon aria-hidden="true" strokeWidth={1.6} />
                  <div><h2>{layer.heading}</h2><p>{layer.body}</p></div>
                </div>
              </div>
            )
          })}
        </section>

        <div className="curriculum-example">
          <p className="text-xs font-bold uppercase tracking-wide text-navy-500">
            {example.label}
          </p>
          <h3 className="mt-1 text-xl font-bold text-navy-950">{example.title}</h3>
          <div className="anthology-book">
            <p className="text-xs uppercase tracking-[0.16em]">English 10 / Anthology</p>
            <p className="editorial-heading mt-5 text-3xl leading-tight">{example.bookTitle}</p>
            <BookOpen aria-hidden="true" className="mt-8 h-12 w-12" strokeWidth={1} />
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            {example.checklist.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </ul>
        </div>
      </div>

      <section className="curriculum-copy-grid" aria-label="How CAN designs curriculum">
        {layers.map((layer) => (
          <article key={layer.heading}>
            <h2>{layer.heading}</h2>
            <p>{layer.body}</p>
          </article>
        ))}
      </section>

      <RefrainBar text={refrain} transition={transition} current="curriculum" />

      <DetailSection>
        <DetailItem label="Academic leadership" body={details.credibility} variant="proof" />
        <DetailItem label="The full example" body={details.example} variant="editorial" />
        <DetailItem label="A common concern" body={details.objection} variant="clarification" />
      </DetailSection>
      </div>
    </article>
  )
}
