import { useState, useEffect } from 'react'

/**
 * Google's pubhtml embed carries its own fixed internal table sizing —
 * it doesn't truly reflow like a responsive web page. We can't fix that
 * (it's Google's rendering, not ours), so the honest approach is:
 *   1. Give the iframe a full-bleed, aspect-ratio-controlled container
 *      instead of a fixed pixel height, so it adapts to viewport height.
 *   2. Allow native scroll (both axes) inside that container on small
 *      screens, rather than trying to force reflow that won't happen.
 *   3. Show a mono "loading panel" state so the fixed-size iframe pop-in
 *      doesn't feel like a layout jump.
 */
export default function DashboardFrame({ embedUrl, title }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [embedUrl])

  const isPlaceholder = embedUrl.includes('PASTE_YOUR_PUBLISHED_ID_HERE')

  if (isPlaceholder) {
    return (
      <div className="flex h-full min-h-[60vh] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-hairline bg-panel/40 px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-mist">
          Panel not wired up
        </span>
        <p className="max-w-sm text-sm text-mist">
          Paste this panel's published Google Sheet URL into{' '}
          <code className="rounded bg-panel px-1.5 py-0.5 text-amber">
            src/config/dashboards.js
          </code>
        </p>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[60vh] w-full overflow-hidden rounded-lg border border-hairline bg-panel">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-panel">
          <span className="signal-dot h-2 w-2 rounded-full bg-teal" />
          <span className="font-mono text-xs uppercase tracking-widest text-mist">
            Loading {title}…
          </span>
        </div>
      )}
      <div className="h-full w-full overflow-auto">
        <iframe
          key={embedUrl}
          src={embedUrl}
          title={title}
          onLoad={() => setLoaded(true)}
          className="h-full min-h-[60vh] w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  )
}
