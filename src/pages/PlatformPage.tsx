import { StoryIntro } from '../components/ui/StoryIntro'
import { RefrainBar } from '../components/ui/RefrainBar'
import { DetailSection, DetailItem } from '../components/ui/DetailSection'
import { BookOpen, Users, MapPinned, ClipboardList } from 'lucide-react'
import { platformContent } from '../data/pageContent'
import { LocalSettingsDiagram } from '../components/ui/LocalSettingsDiagram'

const LAYER_ICONS = [BookOpen, Users, MapPinned, ClipboardList]
export function PlatformPage() {
  const {
    eyebrowNumber,
    eyebrowLabel,
    kicker,
    h1,
    dek,
    osLabel,
    osWelcome,
    layers,
    refrain,
    details,
  } = platformContent

  return (
    <article className="story-page">
      <StoryIntro number={eyebrowNumber} label={eyebrowLabel} kicker={kicker} heading={h1} description={dek} note="Same high quality. Many ways to serve." />

      <div className="platform-layout">
        <div className="overflow-hidden rounded-2xl bg-navy-950 p-4 shadow-lg sm:p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              <span className="ml-2 text-xs font-bold uppercase tracking-widest text-white/60">
              {osLabel}
              </span>
            </div>
            <span className="rounded-full bg-teal-300/15 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-teal-200">Live</span>
          </div>
          <div className="mt-4 grid min-h-64 grid-cols-[3rem_minmax(0,1fr)] overflow-hidden rounded-xl border border-white/10 bg-white text-navy-950 sm:grid-cols-[5rem_minmax(0,1fr)]">
            <div className="flex flex-col items-center gap-4 bg-navy-900 py-5 text-white/65">
              <BookOpen className="h-4 w-4 text-gold-400" />
              <Users className="h-4 w-4" />
              <MapPinned className="h-4 w-4" />
              <ClipboardList className="h-4 w-4" />
            </div>
            <div className="min-w-0 p-4 sm:p-5">
              <p className="text-xs font-semibold text-navy-500">Good morning, Jordan</p>
              <p className="mt-1 text-lg font-bold text-navy-950">Welcome to CAN OS</p>
              <p className="mt-1 text-xs leading-relaxed text-navy-500">{osWelcome}</p>
              <div className="mt-4 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                {['My courses', 'Community', 'Student progress', 'School records'].map((tile) => (
                  <div key={tile} className="min-w-0 rounded-lg border border-navy-100 bg-cream-50 px-3 py-3 text-[0.68rem] font-semibold wrap-break-word text-navy-700">
                    {tile}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="platform-capabilities">
          {layers.map((layer, i) => {
            const Icon = LAYER_ICONS[i]
            return (
              <div
                key={layer.heading}
                className="flex items-start gap-4"
              >
                <span className="capability-icon"><Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} /></span>
                <div><h3 className="text-base font-bold text-navy-900">{layer.heading}</h3>
                <p className="mt-1 text-xs leading-relaxed text-navy-600">{layer.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <section className="platform-communities" aria-label="One platform serving many local communities">
        <LocalSettingsDiagram connected />
      </section>

      <RefrainBar text={refrain} current="platform" />

      <DetailSection>
        <DetailItem label="Technology leadership" body={details.credibility} variant="proof" />
        <DetailItem label="For example" body={details.example} variant="editorial" />
        <DetailItem label="A common concern" body={details.objection} variant="clarification" />
      </DetailSection>
    </article>
  )
}
