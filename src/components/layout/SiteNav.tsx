import { NavLink } from 'react-router-dom'
import { FileText, FolderKanban, Home, Mail, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type NavItem = {
  to: string
  label: string
  icon: LucideIcon
  end?: boolean
}

const links: NavItem[] = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/cv', label: 'CV', icon: FileText },
  { to: '/contact', label: 'Contact me', icon: Mail },
  { to: '/who-am-i', label: 'Who am I', icon: User },
]

export function SiteNav() {
  return (
    <nav
      className="sticky top-3 z-10 mb-10 flex flex-wrap justify-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-1.5 shadow-[var(--shadow-sm)]"
      aria-label="Primary"
    >
      {links.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            cn(
              'site-nav__link relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold no-underline transition-colors',
              isActive
                ? 'bg-[rgba(0,122,204,0.16)] text-[var(--accent-soft)]'
                : 'text-[var(--text-soft)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent)]',
            )
          }
        >
          {({ isActive }) => (
            <>
              <Icon className="size-3.5 shrink-0" aria-hidden="true" />
              <span>{label}</span>
              {isActive ? (
                <span
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[var(--accent)]"
                  style={{ animation: 'nav-underline 0.25s ease both' }}
                  aria-hidden="true"
                />
              ) : null}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
