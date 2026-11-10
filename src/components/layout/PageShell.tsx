import { Outlet, useLocation } from 'react-router-dom'

import { SiteNav } from '@/components/layout/SiteNav'

export function PageShell() {
  const location = useLocation()

  return (
    <div className="mx-auto max-w-[var(--page-max)] px-6 pb-16 pt-10">
      <SiteNav />
      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>
    </div>
  )
}
