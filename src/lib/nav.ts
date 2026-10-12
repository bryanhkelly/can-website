import { navSlugs } from '../data/pageContent'

export function getNextSlug(current: (typeof navSlugs)[number]): (typeof navSlugs)[number] | null {
  const idx = navSlugs.indexOf(current)
  if (idx === -1 || idx === navSlugs.length - 1) return null
  return navSlugs[idx + 1]
}
