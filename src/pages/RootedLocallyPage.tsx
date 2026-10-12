import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { CheckItem } from '../components/ui/CheckItem'
import { PhotoBlock } from '../components/ui/PhotoBlock'
import { StoryIntro } from '../components/ui/StoryIntro'
import { NextStoryLink } from '../components/ui/RefrainBar'
import { rootedLocallyContent } from '../data/pageContent'

const ACCENTS: Record<string, { header: string; photo: 'teal' | 'navy' | 'gold'; image: string; alt: string; position: string; mobilePosition: string }> = {
  green: {
    header: 'bg-green-500',
    photo: 'teal',
    image: '/images/05_rooted_locally_community.png',
    alt: 'Students and trusted adults gathered in a local church community',
    position: '52% 48%',
    mobilePosition: '50% 46%',
  },
  navy: {
    header: 'bg-navy-800',
    photo: 'navy',
    image: '/images/03_curriculum_student_study.png',
    alt: 'A student engaged in rigorous academic work',
    position: '48% 42%',
    mobilePosition: '46% 40%',
  },
  gold: {
    header: 'bg-gold-500 text-navy-950',
    photo: 'gold',
    image: '/images/04_platform_local_campus.png',
    alt: 'Students outside a local church and school community',
    position: '74% 46%',
    mobilePosition: '68% 44%',
  },
}

export function RootedLocallyPage() {
  const { eyebrowNumber, eyebrowLabel, kicker, h1, dek, columns, refrain, transition, details } =
    rootedLocallyContent

  return (
    <article>
      <div className="story-page pb-0">
      <StoryIntro
        number={eyebrowNumber}
        label={eyebrowLabel}
        kicker={kicker}
        heading={h1}
        description={dek}
      />

      <div className="rooted-columns">
        {columns.map((column) => {
          const accent = ACCENTS[column.accent]
          return (
            <div
              key={column.heading}
              className="rooted-column"
            >
              <h2 className={`rooted-column-title ${accent.header}`}>
                {column.heading}
              </h2>
              <PhotoBlock
                tone={accent.photo}
                className="rooted-column-photo"
                src={accent.image}
                alt={accent.alt}
                shaded={false}
                imagePosition={accent.position}
                imagePositionMobile={accent.mobilePosition}
              />
              <p className="rooted-column-summary">{column.summary}</p>
              <ul className="flex flex-col gap-3 px-3 pb-5">
                {column.items.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
            </div>
          )
        })}
      </div>
      </div>

      <PhotoBlock
        tone="navy"
        className="mt-8 h-48 rounded-none sm:h-60"
        src="/images/rooted-locally/closing-community-landscape.png"
        alt="A school campus serving a local community"
        imagePosition="50% 50%"
        imagePositionMobile="48% 50%"
      >
        <div className="flex h-full items-center bg-navy-950/45 px-5 text-white sm:px-8">
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4">
            <div className="max-w-2xl">
              <p className="script-tag text-xl leading-snug sm:text-3xl">{refrain}</p>
              <p className="mt-2 text-sm text-white/80">{transition}</p>
            </div>
            <NextStoryLink current="rooted-locally" dark />
          </div>
        </div>
      </PhotoBlock>

      <div className="story-content pb-10"><DetailSection>
        <DetailItem label="Local form can vary" body={details.localFormVaries} variant="editorial" />
        <DetailItem label="A common concern" body={details.objection} variant="clarification" />
      </DetailSection></div>
    </article>
  )
}
