import { PageEyebrow } from './PageEyebrow'

export function StoryIntro({
  number,
  label,
  kicker,
  heading,
  description,
  note,
  centered = false,
}: {
  number: string
  label: string
  kicker?: string
  heading: string
  description: string
  note?: string
  centered?: boolean
}) {
  return (
    <div className={`story-intro ${centered ? 'story-intro-centered' : ''}`}>
      <PageEyebrow number={number} label={label} />
      <div className="story-intro-copy">
        <div>
          {kicker && <p className="story-kicker">{kicker}</p>}
          <h1 className="editorial-heading story-heading">
            {heading.split('. ').map((line, i) => (
              <span className="block" key={line}>{line}{i < heading.split('. ').length - 1 ? '.' : ''}</span>
            ))}
          </h1>
          <p className="story-dek">{description}</p>
        </div>
        {note && <p className="script-tag story-note">{note}</p>}
      </div>
    </div>
  )
}
