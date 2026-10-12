import { StoryIntro } from '../components/ui/StoryIntro'
import { RefrainBar } from '../components/ui/RefrainBar'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { AlertTriangle, ArrowRight, BookOpen, ClipboardList, HandCoins, Landmark, Users, School, Cloud, Check, X, Monitor, ShieldCheck } from 'lucide-react'
import { economicsContent } from '../data/pageContent'

const FUNDING_ICONS = [Landmark, HandCoins, Users]

export function EconomicsPage() {
  const { eyebrowNumber, eyebrowLabel, kicker, h1, dek, oldWay, canWay, fundingLabel, funding, refrain, details } =
    economicsContent

  return (
    <article className="story-page">
      <StoryIntro number={eyebrowNumber} label={eyebrowLabel} kicker={kicker} heading={h1} description={dek} />

      <div className="economics-comparison">
        <div className="economics-old">
          <h3 className="text-lg font-bold text-navy-900">{oldWay.heading}</h3>
          <p className="mt-1 text-sm font-semibold text-navy-500">{oldWay.subheading}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {oldWay.items.map((item, i) => {
              const Icon = [BookOpen, Users, Monitor, ShieldCheck, Landmark, ClipboardList][i]
              return <li key={item} className="flex items-center gap-3 rounded-lg bg-white/75 px-3 py-2.5 text-sm text-navy-700">
                <Icon className="h-4 w-4 text-navy-500" strokeWidth={1.8} />
                {item}
              </li>
            })}
          </ul>
          <div className="mt-5 flex items-start gap-4"><School aria-hidden="true" className="h-14 w-14 shrink-0" strokeWidth={1.3} /><div><p className="flex items-center gap-2 text-sm font-bold"><X aria-hidden="true" className="h-4 w-4" /> Many schools</p><p className="mt-1 text-sm text-navy-600">High cost. Inconsistent quality.<br />Hard to sustain.</p></div></div>
        </div>

        <ArrowRight aria-hidden="true" className="economics-arrow" />
        <div className="economics-can">
          <h3 className="text-lg font-bold">{canWay.heading}</h3>
          <p className="mt-1 text-sm text-navy-700">Shared infrastructure. Local expression.</p>
          <div className="mt-4 px-2 py-3">
            <div className="shared-platform">
              <Cloud aria-hidden="true" />
              <div><p className="text-base font-bold">CAN Academy</p><p className="mt-1 text-xs">Shared Platform</p></div>
            </div>
            <svg className="economics-connectors" viewBox="0 0 300 50" preserveAspectRatio="none" aria-hidden="true"><path d="M150 0 L150 20 M50 50 L50 20 L250 20 L250 50 M150 20 L150 50" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            <div className="grid grid-cols-3 gap-2">
              {['Churches', 'Co-ops', 'Schools'].map((community) => (
                <div key={community} className="flex flex-col items-center gap-1 text-center text-xs">
                  <School aria-hidden="true" className="h-9 w-9" strokeWidth={1.3} />{community}
                </div>
              ))}
            </div>
          </div>
          <ul className="mt-3 flex flex-col gap-2 text-sm">{['Many communities', 'Lower cost. Higher quality.', 'Built for long-term impact.'].map(item => <li key={item} className="flex items-center gap-2"><Check aria-hidden="true" className="h-4 w-4 shrink-0" />{item}</li>)}</ul>
        </div>
      </div>

      <div className="funding-panel">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-navy-800">
          {fundingLabel}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {funding.map((item, i) => {
            const Icon = FUNDING_ICONS[i]
            return (
              <div
                key={item.heading}
                className="flex flex-col gap-2 py-2 sm:border-r sm:border-navy-100 sm:pr-4 sm:last:border-0"
              >
                <Icon aria-hidden="true" className="h-7 w-7 text-navy-800" strokeWidth={1.75} />
                <h4 className="text-sm font-bold text-navy-900">{item.heading}</h4>
                <p className="text-xs text-navy-600">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>

      <RefrainBar text={refrain} current="why-it-can-work" />

      <DetailSection>
        <DetailItem label="For example" body={details.example} />
        <DetailItem label="A common concern" body={details.objection} />
      </DetailSection>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold-500/40 bg-gold-500/10 p-5">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={2} />
        <p className="text-sm leading-relaxed text-navy-800">{details.disclaimer}</p>
      </div>
    </article>
  )
}
