const WHATSAPP_NUMBER = "8801817672375";

export default function TopBar({ title, embedUrl, onMenuClick }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Mr. Nazmul, I have a question about the ${title} dashboard.`
  )}`;

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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div>
          <h1 className="font-display text-base font-semibold text-chalk lg:text-lg">
            {title}
          </h1>

          <p className="hidden font-mono text-[11px] text-mist sm:block">
            Embedded live Data from IE Department
          </p>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm border-hairline bg-panel text-mist hover:border-teal hover:text-teal"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />

          <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.99.583 3.844 1.588 5.404L2 22l4.71-1.556A9.953 9.953 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.174 8.174 0 01-4.166-1.144l-.299-.177-3.107 1.027 1.04-3.03-.194-.31A8.176 8.176 0 013.8 12c0-4.522 3.679-8.2 8.201-8.2 4.521 0 8.199 3.678 8.199 8.2 0 4.522-3.678 8.2-8.199 8.2z" />
        </svg>

        WhatsApp
      </a>
    </header>
  );
}