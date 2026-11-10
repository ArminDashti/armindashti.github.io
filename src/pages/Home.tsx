import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'

export function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center gap-8 border-b border-[var(--border)] pb-12">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <img
          src={profile.photo}
          alt={profile.name}
          width={128}
          height={128}
          className="size-32 shrink-0 rounded-full object-cover shadow-[var(--shadow-sm)] ring-[3px] ring-[var(--accent-muted)]"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = profile.photoFallback
          }}
        />
        <div>
          <p className="mb-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
            Portfolio
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-[var(--text-soft)]">{profile.headline}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link to="/projects">View projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/cv">Read CV</Link>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link to="/contact">Contact me</Link>
        </Button>
      </div>
    </section>
  )
}
