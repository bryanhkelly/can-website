import { navSlugs } from '../data/pageContent'

export const partnerIds = ['the-journey-church', 'cogic', 'cogbf'] as const
export type PartnerId = (typeof partnerIds)[number]

export function getNextSlug(current: (typeof navSlugs)[number]): (typeof navSlugs)[number] | null {
  const idx = navSlugs.indexOf(current)
  if (idx === -1 || idx === navSlugs.length - 1) return null
  return navSlugs[idx + 1]
}

// Preserve non-sensitive, allowlisted campaign context without cookies.
export function withPartnerContext(path: string, search: string): string {
  const source = new URLSearchParams(search)
  const [pathname, query = ''] = path.split('?')
  const params = new URLSearchParams(query)
  const campaignKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','campaign','landing_page'] as const
  const partner = source.get('partner')
  if (partnerIds.some(id => id === partner) && !params.has('partner')) params.set('partner', partner!)
  for (const name of campaignKeys) {
    const value = source.get(name)
    if (value && value.length <= 140 && /^[a-zA-Z0-9_ .:/-]+$/.test(value) && !params.has(name)) params.set(name, value)
  }
  const qs = params.toString()
  return qs ? `${pathname}?${qs}` : pathname
}
