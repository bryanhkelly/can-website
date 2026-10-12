export function PageEyebrow({
  number,
  label,
  kicker,
  light = false,
}: {
  number: string
  label: string
  kicker?: string
  light?: boolean
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`text-xs font-bold tracking-wide ${light ? 'text-white' : 'text-navy-800'}`}>
          {number}
        </span>
        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-white' : 'text-navy-600'}`}>
          {label}
        </span>
      </div>
      {kicker && (
        <p className={`mt-4 text-xs font-bold uppercase tracking-[0.15em] ${light ? 'text-gold-400' : 'text-teal-600'}`}>
          {kicker}
        </p>
      )}
    </div>
  )
}
