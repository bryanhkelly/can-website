import { useEffect, useRef, useState } from 'react'
import { Check, Copy, ExternalLink, Mail, Share2 } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { getSocialMeta } from '../data/socialMeta'

export function ShareMenu() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const meta = getSocialMeta(location.pathname)

  const shareUrl = typeof window === 'undefined'
    ? ''
    : `${window.location.origin}${location.pathname}${location.search}`

  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(meta.title)
  const encodedText = encodeURIComponent(meta.description)

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false)
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('Copy this link:', shareUrl)
    }
  }

  async function nativeShare() {
    if (!navigator.share) {
      setOpen(true)
      return
    }
    try {
      await navigator.share({ title: meta.title, text: meta.description, url: shareUrl })
      setOpen(false)
    } catch {
      // User cancellation is not an error state for the page.
    }
  }

  return (
    <div className="share-menu" ref={rootRef}>
      <button
        type="button"
        className="share-menu-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        <Share2 aria-hidden="true" />
        Share
      </button>

      {open && (
        <div className="share-menu-popover" role="menu" aria-label="Share this page">
          <button type="button" role="menuitem" onClick={copyLink}>
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? 'Link copied' : 'Copy link'}
          </button>

          <a
            role="menuitem"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink aria-hidden="true" />
            LinkedIn
          </a>

          <a
            role="menuitem"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink aria-hidden="true" />
            Facebook
          </a>

          <a
            role="menuitem"
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink aria-hidden="true" />
            X
          </a>

          <a
            role="menuitem"
            href={`mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`}
          >
            <Mail aria-hidden="true" />
            Email
          </a>

          {'share' in navigator && (
            <button type="button" role="menuitem" onClick={nativeShare}>
              <Share2 aria-hidden="true" />
              More sharing options
            </button>
          )}
        </div>
      )}
    </div>
  )
}
