import { partnerIds } from './nav'
import { engagementJourneys, type EngagementJourney, type JourneyChoice } from '../data/engagementJourneys'

/** Only anonymous, bounded campaign identifiers travel between marketing pages.
 * Never persist student data, personal emails or freeform redirect URLs here. */
function boundedIdentifier(value: string | null): string | null {
  return value && /^[a-zA-Z0-9_-]{1,64}$/.test(value) ? value : null
}
export type EngagementContext = {
  campaign: string | null
  source: string | null
  partner: string | null
}
export function readEngagementContext(search: string): EngagementContext {
  const params = new URLSearchParams(search)
  const partner = params.get('partner')
  return {
    campaign: boundedIdentifier(params.get('campaign')),
    source: boundedIdentifier(params.get('utm_source')),
    partner: partnerIds.find(id => id === partner) ?? null,
  }
}
function appendContext(params: URLSearchParams, context: EngagementContext) {
  if (context.campaign) params.set('campaign', context.campaign)
  if (context.source) params.set('utm_source', context.source)
  if (context.partner) params.set('partner', context.partner)
}
export function journeyHref(path: string, search: string): string {
  // All destinations are controlled source-code routes. Do not accept user URLs.
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('?') || path.includes('#')) {
    throw new Error('Journey destination must be a local path')
  }
  const params = new URLSearchParams()
  appendContext(params, readEngagementContext(search))
  return params.size ? `${path}?${params.toString()}` : path
}
export function contactFromJourney(
  journey: EngagementJourney,
  choice: JourneyChoice | null,
  search: string,
): string {
  const params = new URLSearchParams()
  const audience = {
    church: 'pastor',
    teacher: 'teacher',
    family: 'parent',
    school: 'school-leader',
    network: 'denomination',
  } as const
  params.set('audience', audience[journey.category])
  params.set('journey', journey.id)
  if (choice) {
    // Only curated IDs from the local journey registry are accepted.
    if (!journey.next.choices.some(item => item.id === choice.id)) {
      throw new Error('Unrecognized next-step choice')
    }
    params.set('intent', choice.id)
    if (choice.topic) params.set('topic', choice.topic)
  }
  appendContext(params, readEngagementContext(search))
  return `/contact?${params.toString()}`
}
export function validatedContactContext(search: string) {
  const params = new URLSearchParams(search)
  const id = params.get('journey')
  const journey = id && Object.hasOwn(engagementJourneys, id)
    ? engagementJourneys[id as keyof typeof engagementJourneys] : null
  const choice = journey?.next.choices.find(item => item.id === params.get('intent')) ?? null
  return { journey, choice, context: readEngagementContext(search) }
}
