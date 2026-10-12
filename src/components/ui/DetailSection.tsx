import type { ReactNode } from 'react'

export function DetailSection({ children }: { children: ReactNode }) {
  return (
    <section className="detail-section">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-400">
        Good to know
      </p>
      <div className="detail-items mt-4 grid gap-6 sm:grid-cols-2">{children}</div>
    </section>
  )
}

export function DetailItem({
  label,
  body,
  variant = 'editorial',
}: {
  label: string
  body: string
  variant?: 'proof' | 'editorial' | 'clarification'
}) {
  return (
    <div className={`detail-item detail-item-${variant}`}>
      <p className="text-xs font-bold uppercase tracking-wide text-navy-500">{label}</p>
      <p className="detail-item-body">{body}</p>
    </div>
  )
}
