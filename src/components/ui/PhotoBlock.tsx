import type { CSSProperties } from 'react'
import type { ReactNode } from 'react'

export function PhotoBlock({
  caption,
  children,
  className = '',
  tone = 'navy',
  src,
  alt,
  imageFit = 'cover',
  imagePosition = 'center',
  imagePositionMobile,
  priority = false,
  shaded = true,
}: {
  caption?: string
  children?: ReactNode
  className?: string
  tone?: 'navy' | 'teal' | 'gold'
  src?: string
  alt?: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
  imagePositionMobile?: string
  priority?: boolean
  shaded?: boolean
}) {
  const gradients = {
    navy: 'from-navy-700 via-navy-800 to-navy-950',
    teal: 'from-teal-400 via-teal-500 to-navy-800',
    gold: 'from-gold-400 via-gold-500 to-navy-800',
  }
  const imageFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
  }

  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-2xl bg-linear-to-br ${gradients[tone]} ${className}`}
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : (caption ?? 'Decorative photo placeholder')}
    >
      {src && (
        <>
          <img
            src={src}
            alt={alt ?? caption ?? ''}
            className={`photo-block-image absolute inset-0 h-full w-full ${imageFitClasses[imageFit]}`}
            style={
              {
                '--image-position': imagePosition,
                '--image-position-mobile': imagePositionMobile ?? imagePosition,
              } as CSSProperties
            }
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
          />
          {shaded && <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-navy-950/0 to-navy-950/0" />}
        </>
      )}
      {caption && (
        <p className="script-tag relative z-10 m-5 text-xl text-white/90">{caption}</p>
      )}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}
