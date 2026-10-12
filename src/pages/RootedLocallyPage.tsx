import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { CheckItem } from '../components/ui/CheckItem'
import { PhotoBlock } from '../components/ui/PhotoBlock'
import { StoryIntro } from '../components/ui/StoryIntro'
import { rootedLocallyContent } from '../data/pageContent'

const ACCENTS: Record<string, { header: string; photo: 'teal' | 'navy' | 'gold'; image: string; alt: string }> = {
  green: {
    header: 'bg-green-500',
    photo: 'teal',
    image: '/images/05_rooted_locally_community.png',
    alt: 'A local community gathering',
  },
  navy: {
    header: 'bg-navy-800',
    photo: 'navy',
    image: '/images/07_economics_leadership_meeting.png',
    alt: 'Education leaders planning together',
  },
  gold: {
    header: 'bg-gold-500 text-navy-950',
    photo: 'gold',
    image: '/images/04_platform_local_campus.png',
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
                imagePosition={column.accent === 'gold' ? '62% 48%' : '50% 50%'}
                imagePositionMobile={
                  column.accent === 'navy'
                    ? '48% 50%'
                    : column.accent === 'gold'
                      ? '58% 48%'
                      : '48% 50%'
                }
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
        src="/images/04_platform_local_campus.png"
        alt="A school campus serving a local community"
        imagePosition="50% 50%"
        imagePositionMobile="48% 50%"
      >
        <div className="flex h-full items-center bg-navy-950/45 px-5 text-white sm:px-8">
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4">
            <p className="script-tag max-w-2xl text-xl leading-snug sm:text-3xl">{refrain}</p>
            <Link
              to="/story/student-experience"
              aria-label="Continue to The Student Experience"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950 transition-colors hover:bg-gold-400"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </PhotoBlock>

      <div className="story-content pb-10"><DetailSection>
        <DetailItem label="Local form can vary" body={details.localFormVaries} />
        <DetailItem label="A common concern" body={details.objection} />
      </DetailSection></div>
    </article>
  )
}
