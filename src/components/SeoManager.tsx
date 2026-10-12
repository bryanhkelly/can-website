import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSocialMeta, socialImageUrl } from '../data/socialMeta'

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null
  if (!element) {
    element = selector.startsWith('link') ? document.createElement('link') : document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

export function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const meta = getSocialMeta(location.pathname)
    const canonical = `${window.location.origin}${location.pathname}`
    const partner = new URLSearchParams(location.search).get('partner')
    const shareUrl = partner ? `${canonical}?partner=${encodeURIComponent(partner)}` : canonical
    const image = socialImageUrl(window.location.origin, meta.image)

    document.title = meta.title

    ensureMeta('meta[name="description"]', { name: 'description', content: meta.description })
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'CAN Academy' })
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title })
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description })
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: shareUrl })
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    ensureMeta('meta[property="og:image:secure_url"]', { property: 'og:image:secure_url', content: image })
    ensureMeta('meta[property="og:image:type"]', { property: 'og:image:type', content: 'image/jpeg' })
    ensureMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    ensureMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    ensureMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: meta.imageAlt })
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description })
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
    ensureMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: meta.imageAlt })
    ensureMeta('link[rel="canonical"]', { rel: 'canonical', href: canonical })
  }, [location.pathname, location.search])

  return null
}
