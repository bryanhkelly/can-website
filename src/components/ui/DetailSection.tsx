import type { ReactNode } from 'react'

export function DetailSection({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 border-t border-navy-100 pt-8">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-400">
        Good to know
      </p>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">{children}</div>
    </div>
  )
}

export function DetailItem({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-navy-500">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{body}</p>
    </div>
  )
}
