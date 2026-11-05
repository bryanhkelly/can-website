export type AnalyticsEvent =
  | 'home_story_click'
  | 'home_role_click'
  | 'contact_submit'
  | 'contact_success'
  | 'contact_error'
  | 'engagement_landing_click'
  | 'engagement_contact_click'
  | 'engagement_launch_click'
  | 'engagement_next_choice'
  | 'engagement_feedback_submit'
  | 'engagement_feedback_success'
  | 'engagement_feedback_error'

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
