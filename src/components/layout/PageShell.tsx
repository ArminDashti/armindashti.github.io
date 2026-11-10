import { Outlet, useLocation } from 'react-router-dom'

import { SiteNav } from '@/components/layout/SiteNav'

export function PageShell() {
  const location = useLocation()

  return (
    <div className="relative mx-auto max-w-[var(--page-max)] px-6 pb-16 pt-10">
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
        aria-hidden="true"
      />
      <SiteNav />
      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>
    </div>
  )
}
