import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

import { profile } from '@/content/profile'

const items = [
  {
    label: 'Location',
    value: profile.location,
    href: undefined as string | undefined,
    icon: MapPin,
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phoneDisplay,
    href: `tel:${profile.phoneTel}`,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    href: profile.links.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'GitHub',
    href: profile.links.github,
    icon: Github,
  },
] as const

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="space-y-8">
      <header className="space-y-2">
        <h1
          id="contact-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white"
        >
          Contact me
        </h1>
        <p className="text-[var(--text-muted)]">Reach out by email, phone, or social profiles.</p>
      </header>

      <ul className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon
          const content = (
            <>
              <span className="flex size-10 items-center justify-center rounded-full bg-[rgba(0,122,204,0.14)] text-[var(--accent)]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs tracking-wide text-[var(--text-muted)] uppercase">
                  {item.label}
                </span>
                <span className="text-[var(--text)]">{item.value}</span>
              </span>
            </>
          )

          return (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 no-underline transition-colors hover:border-[var(--accent)]"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3">
                  {content}
                </div>
              )}
            </li>
          )
        })}

        <li>
          <a
            href={profile.links.cursor}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 no-underline transition-colors hover:border-[var(--accent)]"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[rgba(0,122,204,0.14)]">
              <img src="/icons/cursor.svg" alt="" width={16} height={16} />
            </span>
            <span>
              <span className="block text-xs tracking-wide text-[var(--text-muted)] uppercase">
                Cursor
              </span>
              <span className="text-[var(--text)]">cursor.com/@armindashti</span>
            </span>
          </a>
        </li>
      </ul>
    </section>
  )
}
