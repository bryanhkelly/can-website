import { StoryIntro } from './StoryIntro'

export function PhotoHero({
  number, label, kicker, heading, description, src, alt,
}: {
  number: string
  label: string
  kicker?: string
  heading: string
  description: string
  src: string
  alt: string
}) {
  return (
    <section className="academic-hero">
      <img src={src} alt={alt} loading="eager" fetchPriority="high" />
      <div className="academic-hero-wash" />
      <div className="story-content relative">
        <StoryIntro number={number} label={label} kicker={kicker} heading={heading} description={description} />
      </div>
    </section>
  )
}
