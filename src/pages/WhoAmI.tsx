import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { SkillChips } from '@/components/SkillChips'
import { profile } from '@/content/profile'

export function WhoAmI() {
  return (
    <section aria-labelledby="who-heading" className="space-y-8">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <img
          src={profile.photo}
          alt={profile.name}
          width={112}
          height={112}
          className="size-28 shrink-0 rounded-full object-cover ring-[3px] ring-[var(--accent-muted)]"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = profile.photoFallback
          }}
        />
        <div>
          <h1
            id="who-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)]"
          >
            Who am I
          </h1>
          <p className="mt-2 text-lg text-[var(--text-soft)]">{profile.jobTitle}</p>
        </div>
      </header>

      <div className="space-y-4 text-[var(--text-soft)]">
        {profile.whoAmI.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div>
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
          Knows about
        </h2>
        <SkillChips
          skills={profile.knowsAbout.map((label) => ({ label }))}
          label="Areas of expertise"
        />
      </div>

      <Button asChild variant="outline">
        <Link to="/cv">See full CV</Link>
      </Button>
    </section>
  )
}
