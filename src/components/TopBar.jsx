export default function TopBar({ title, embedUrl, onMenuClick }) {
  return (
    <header className="flex items-center justify-between border-b border-hairline bg-ink/95 px-4 py-3 backdrop-blur lg:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="btn btn-ghost btn-sm px-2 lg:hidden"
          aria-label="Open panel menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div>
          <h1 className="font-display text-base font-semibold text-chalk lg:text-lg">{title}</h1>
          <p className="hidden font-mono text-[11px] text-mist sm:block">
            Embedded live Data from IE Department
          </p>
        </div>
      </div>

      {/* {embedUrl && !embedUrl.includes('PASTE_YOUR_PUBLISHED_ID_HERE') && (
        <a
          href={embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm border-hairline bg-panel text-mist hover:border-amber hover:text-amber"
        >
          Open full sheet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )} */}
    </header>
  )
}
