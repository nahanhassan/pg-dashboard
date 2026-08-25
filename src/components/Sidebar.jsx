import { NavLink } from 'react-router-dom'
import { dashboards } from '../config/dashboards'

export default function Sidebar({ onNavigate }) {
  return (
    <nav className="flex h-full flex-col gap-1 p-3">
      <div className="mb-4 px-2 pt-2">
        <span className="font-display text-lg font-semibold tracking-tight text-chalk">
          Pretty Group
        </span>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-mist">
          {dashboards.length} live boards
        </p>
      </div>

      {dashboards.map((d, i) => (
        <NavLink
          key={d.slug}
          to={`/${d.slug}`}
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              'flex items-center gap-3 rounded-md border-l-2 px-3 py-2.5 transition-colors',
              isActive
                ? 'border-amber bg-panel text-chalk'
                : 'border-transparent text-mist hover:border-hairline hover:bg-panel/60 hover:text-chalk'
            ].join(' ')
          }
        >
          {({ isActive }) => (
            <>
              <span className={`font-mono text-xs ${isActive ? 'text-amber' : 'text-mist'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">
                <span className="block font-display text-sm font-medium">{d.title}</span>
                <span className="block font-mono text-[11px] text-mist">{d.description}</span>
              </span>
              <span className="signal-dot h-1.5 w-1.5 rounded-full bg-teal opacity-70" />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
