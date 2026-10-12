export type AnalyticsEvent =
  | 'home_story_click'
  | 'home_role_click'
  | 'contact_submit'
  | 'contact_success'
  | 'contact_error'

export function trackEvent(name: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return

  window.dispatchEvent(new CustomEvent('can:analytics', { detail: { name, ...params } }))

  const w = window as typeof window & {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }

  w.dataLayer?.push({ event: name, ...params })
  w.gtag?.('event', name, params)
}
