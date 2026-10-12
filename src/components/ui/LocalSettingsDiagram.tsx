const SETTINGS = [
  { label: 'Churches', image: 'church.svg' },
  { label: 'Homes / Homeschools', image: 'home-homeschool.svg' },
  { label: 'Co-ops', image: 'coop.svg' },
  { label: 'K-8 Schools', image: 'k8-school.svg' },
  { label: 'Small Private Schools', image: 'private-school.svg' },
] as const

export function LocalSettingsDiagram({
  compact = false,
  connected = false,
}: {
  compact?: boolean
  connected?: boolean
}) {
  return (
    <div className={`local-settings-diagram${compact ? ' local-settings-compact' : ''}${connected ? ' local-settings-connected' : ''}`}>
      {connected && (
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M500 0V32M100 85V32H900V85M300 32V85M500 32V85M700 32V85" />
        </svg>
      )}
      <div className="local-settings-items">
        {SETTINGS.map((setting) => (
          <figure key={setting.image}>
            <img src={`/images/local-settings/${setting.image}`} alt="" aria-hidden="true" />
            {!compact && <figcaption>{setting.label}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  )
}
