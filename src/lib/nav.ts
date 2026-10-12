import { navSlugs } from '../data/pageContent'

export const partnerIds = ['the-journey-church', 'cogic', 'cogbf'] as const
export type PartnerId = (typeof partnerIds)[number]

export function getNextSlug(current: (typeof navSlugs)[number]): (typeof navSlugs)[number] | null {
  const idx = navSlugs.indexOf(current)
  if (idx === -1 || idx === navSlugs.length - 1) return null
  return navSlugs[idx + 1]
}

export function withPartnerContext(path: string, search: string): string {
  const partner = new URLSearchParams(search).get('partner')
  const validPartner = partnerIds.find((id) => id === partner)
  if (!validPartner) return path

  const [pathname, query = ''] = path.split('?')
  const params = new URLSearchParams(query)
  params.set('partner', validPartner)
  return `${pathname}?${params.toString()}`
}
