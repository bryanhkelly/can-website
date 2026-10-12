import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { CheckItem } from '../components/ui/CheckItem'
import { PhotoBlock } from '../components/ui/PhotoBlock'
import { StoryIntro } from '../components/ui/StoryIntro'
import { NextStoryLink } from '../components/ui/RefrainBar'
import { rootedLocallyContent } from '../data/pageContent'

const ACCENTS: Record<string, { header: string; photo: 'teal' | 'navy' | 'gold'; image: string; alt: string }> = {
  green: {
    header: 'bg-green-500',
    photo: 'teal',
    image: '/images/rooted-locally/community-brings.png',
    alt: 'A local community gathering',
  },
  navy: {
    header: 'bg-navy-800',
    photo: 'navy',
    image: '/images/rooted-locally/can-brings.png',
    alt: 'Education leaders planning together',
  },
  gold: {
    header: 'bg-gold-500 text-navy-950',
    photo: 'gold',
    image: '/images/rooted-locally/what-stays-local.png',
    alt: 'A school campus serving a local community',
  },
}

export function RootedLocallyPage() {
  const { eyebrowNumber, eyebrowLabel, kicker, h1, dek, columns, refrain, details } =
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
                imagePosition="50% 50%"
                imagePositionMobile="50% 50%"
              />
              <ul className="flex flex-col gap-3 px-3 py-5">
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
            <p className="script-tag max-w-2xl text-xl leading-snug sm:text-3xl">{refrain}</p>
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
