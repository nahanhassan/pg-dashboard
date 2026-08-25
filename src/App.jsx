import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import DashboardFrame from './components/DashboardFrame'
import { dashboards } from './config/dashboards'

function PanelRoute() {
  const { pathname } = useLocation()
  const slug = pathname.replace('/', '')
  const dashboard = dashboards.find((d) => d.slug === slug)

  if (!dashboard) return <Navigate to={`/${dashboards[0]?.slug ?? ''}`} replace />

  return <DashboardFrame embedUrl={dashboard.embedUrl} title={dashboard.title} />
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()
  const currentSlug = pathname.replace('/', '')
  const current = dashboards.find((d) => d.slug === currentSlug) ?? dashboards[0]

  return (
    <div className="flex h-screen overflow-hidden bg-ink">
      {/* Desktop rail */}
      <aside className="hidden w-64 shrink-0 border-r border-hairline bg-ink lg:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 h-full w-72 border-r border-hairline bg-ink shadow-2xl">
            <Sidebar onNavigate={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          title={current?.title ?? 'Panel'}
          embedUrl={current?.embedUrl}
          onMenuClick={() => setDrawerOpen(true)}
        />
        <main className="flex-1 overflow-auto p-3 lg:p-6">
          <Routes>
            <Route path="/" element={<Navigate to={`/${dashboards[0]?.slug ?? ''}`} replace />} />
            <Route path="/:slug" element={<PanelRoute />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
