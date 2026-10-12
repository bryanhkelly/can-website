import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StoryIntro } from '../components/ui/StoryIntro'
import { PhotoBlock } from '../components/ui/PhotoBlock'
import { explorePageContent } from '../data/pageContent'

export function ExplorePage() {
  const { script, h1, dek, audiences, ctaLabel, details } = explorePageContent
  const deepDiveRoutes: Record<string, string> = {
    Curriculum: '/story/curriculum',
    Academics: '/story/curriculum',
    'Student Experience': '/story/student-experience',
    Economics: '/story/why-it-can-work',
  }

  return (
    <article>
      <section className="story-page pb-0">
          <StoryIntro
            number="08/08"
            label="Explore CAN"
            kicker="Let's build what's possible."
            heading={h1}
            description={dek}
            note={script}
          />

          <nav className="audience-cards" aria-label="Explore CAN by audience">
            {audiences.map((audience) => (
              <Link
                key={audience.heading}
                to={audience.href}
                className="audience-card"
              >
                <div className="audience-photo">
                  <img src={audience.image} alt={audience.alt} loading="lazy" />
                </div>
                <div className="px-3 py-4">
                  <h3 className="text-base font-bold text-navy-900">{audience.heading}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{audience.body}</p>
                </div>
              </Link>
            ))}
          </nav>

      </section>

      <PhotoBlock
        src="/images/08_explore_audience_roles.png"
        alt="Community members connecting with a city skyline behind them"
        imagePosition="50% 48%"
        imagePositionMobile="50% 46%"
        className="explore-cta mt-6 rounded-none"
        shaded={false}
      >
      <div className="explore-cta-wash">
      <div className="story-content flex flex-col items-end gap-6 py-8 sm:py-12">
        <p className="font-serif text-2xl leading-tight text-navy-950 sm:text-3xl">Communities.<br />Learners.<br />Brighter futures.</p>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
        >
          {ctaLabel.replace(' →', '')}
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>
      </div>
      </div>
      </PhotoBlock>

      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-navy-500">
              {details.deepDives.heading}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {details.deepDives.items.map((item) => (
                <li key={item} className="text-sm font-semibold text-navy-800">
                  {deepDiveRoutes[item] ? (
                    <Link to={deepDiveRoutes[item]} className="transition-colors hover:text-teal-700">
                      {item} <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-navy-500">
              {details.launchPaths.heading}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {details.launchPaths.items.map((item) => (
                <li key={item} className="text-sm font-semibold text-navy-800">
                  <Link to={item === 'Starting a CAN Community' ? '/contact' : '/story/rooted-locally'} className="transition-colors hover:text-teal-700">
                    {item} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
