import { StoryIntro } from '../components/ui/StoryIntro'
import { RefrainBar } from '../components/ui/RefrainBar'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { AlertTriangle, ArrowRight, BookOpen, ClipboardList, HandCoins, Landmark, Users, Cloud, Check, X, Monitor, ShieldCheck } from 'lucide-react'
import { economicsContent } from '../data/pageContent'
import { LocalSettingsDiagram } from '../components/ui/LocalSettingsDiagram'

const FUNDING_ICONS = [Landmark, HandCoins, Users]

export function EconomicsPage() {
  const { eyebrowNumber, eyebrowLabel, kicker, h1, dek, oldWay, canWay, fundingLabel, funding, refrain, transition, equation, details } =
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
          <div className="mt-5">
            <div className="economics-old-settings"><LocalSettingsDiagram compact /></div>
            <p className="flex items-center gap-2 text-sm font-bold"><X aria-hidden="true" className="h-4 w-4" /> Standalone duplication</p>
            <p className="mt-1 text-sm text-navy-600">{oldWay.outcome}</p>
          </div>
        </div>

        <ArrowRight aria-hidden="true" className="economics-arrow" />
        <div className="economics-can">
          <h3 className="text-lg font-bold">{canWay.heading}</h3>
          <p className="mt-1 text-sm text-navy-700">{canWay.subheading}</p>
          <div className="mt-4 px-2 py-3">
            <div className="shared-platform">
              <Cloud aria-hidden="true" />
              <div><p className="text-base font-bold">CAN Academy</p><p className="mt-1 text-xs">Shared Platform</p></div>
            </div>
            <LocalSettingsDiagram connected />
          </div>
          <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />{canWay.outcome}</p>
        </div>
      </div>

      <div className="funding-panel">
        <p className="economics-equation">{equation}</p>
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

      <section className="church-economics-section">
        <div>
          <p className="destination-eyebrow">For local partners</p>
          <h2 className="editorial-heading">The economics should support the ministry, not turn the church into a landlord.</h2>
          <p>
            CAN's partnership philosophy starts with resources a local community may already have: trusted relationships, weekday space, local leadership, and ministry presence. The goal is to avoid asking a church or school to finance and operate an entire standalone high school before it can serve students.
          </p>
        </div>
        <div className="church-economics-grid">
          <article><strong>Use what already exists</strong><p>Existing facilities and community assets can reduce the need for large upfront real-estate investment.</p></article>
          <article><strong>Share the expensive capabilities</strong><p>Teachers, curriculum, records, student support, technology, and operations do not have to be recreated independently at every site.</p></article>
          <article><strong>Keep the partnership sustainable</strong><p>Local partnership economics should help offset participation costs and allow value created by the school community to support the local mission.</p></article>
          <article><strong>Test before scaling</strong><p>Discovery and pilot stages should make the model smaller, staged, and evidence-driven before a community takes on a larger commitment.</p></article>
        </div>
        <p className="church-economics-note">Specific fees, funding, partner economics, and financial terms depend on the market and approved partnership agreement.</p>
      </section>

      <RefrainBar text={refrain} transition={transition} current="why-it-can-work" />

      <DetailSection>
        <DetailItem label="For example" body={details.example} variant="editorial" />
        <DetailItem label="A common concern" body={details.objection} variant="clarification" />
      </DetailSection>

      <div className="economics-qualification mt-6 flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={2} />
        <p className="text-sm leading-relaxed text-navy-800">{details.disclaimer}</p>
      </div>
    </article>
  )
}
