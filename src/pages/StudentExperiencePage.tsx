import { MonitorPlay, Users, UserRound, Globe, Cross, ShieldCheck } from 'lucide-react'
import { StoryIntro } from '../components/ui/StoryIntro'
import { RefrainBar } from '../components/ui/RefrainBar'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { studentExperienceContent } from '../data/pageContent'

const WEEK_ICONS = [MonitorPlay, Users, UserRound, Globe, Cross, ShieldCheck]

export function StudentExperiencePage() {
  const { eyebrowNumber, eyebrowLabel, kicker, h1, dek, rings, beats, weekLabel, week, refrain, transition, details } = studentExperienceContent
  return (
    <article className="story-page">
      <StoryIntro number={eyebrowNumber} label={eyebrowLabel} kicker={kicker} heading={h1} description={dek} note="Real learning. Real people. Real impact." />
      <div className="student-model-layout">
        <section className="belonging-model" aria-label="Known locally, connected regionally, expanded nationally">
          <div className="belonging-art">
          <div className="belonging-region belonging-national" />
          <div className="belonging-region belonging-regional" />
          <div className="belonging-region belonging-local" />
          <img className="belonging-portrait" src="/images/06_student_experience_portrait.png" alt="A student looking ahead with confidence" loading="eager" fetchPriority="high" />
          </div>
          <div className="belonging-labels">
          {rings.map((ring, i) => (
            <div className={`belonging-label belonging-label-${i}`} key={ring.heading}>
              <h2>{ring.heading}</h2>
              <p>{ring.body}</p>
            </div>
          ))}
          </div>
        </section>
        <section className="typical-week" aria-label={weekLabel}>
          <h2 className="story-kicker">{weekLabel}</h2>
          <ul>
            {week.map((activity, i) => {
              const Icon = WEEK_ICONS[i]
              return <li key={activity}><Icon aria-hidden="true" strokeWidth={1.8} /><span>{activity}</span></li>
            })}
          </ul>
        </section>
      </div>
      <section className="student-copy-grid" aria-label="What supports the student experience">
        {beats.map((beat) => (
          <article key={beat.heading}>
            <h2>{beat.heading}</h2>
            <p>{beat.body}</p>
          </article>
        ))}
      </section>
      <RefrainBar text={refrain} transition={transition} current="student-experience" />
      <DetailSection>
        <DetailItem label="A day in a CAN community" body={details.vignette} variant="editorial" />
        <DetailItem label="A common concern" body={details.objection} variant="clarification" />
      </DetailSection>
    </article>
  )
}
