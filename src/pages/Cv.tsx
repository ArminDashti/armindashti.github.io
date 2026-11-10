import { SkillChips } from '@/components/SkillChips'
import { Separator } from '@/components/ui/separator'
import { jobs } from '@/content/jobs'
import { profile } from '@/content/profile'
import { techGroups } from '@/content/tech'

export function Cv() {
  return (
    <div className="space-y-12">
      <section aria-labelledby="cv-heading" className="space-y-6">
        <h1
          id="cv-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white"
        >
          Experience ({profile.experienceSummary})
        </h1>

        <div className="space-y-8">
          {jobs.map((job) => (
            <article
              key={`${job.company}-${job.dates}`}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  width={48}
                  height={48}
                  className="size-12 rounded-md bg-white object-contain p-1"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {job.role}
                  </h2>
                  <p className="text-[var(--text-soft)]">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">{job.place}</p>
                </div>
                <p className="shrink-0 text-sm text-[var(--text-muted)] sm:text-right">
                  {job.dates}
                  <span
                    className={
                      job.tenureMuted ? 'ml-1 text-[var(--text-muted)]' : 'ml-1 text-[var(--accent-soft)]'
                    }
                  >
                    {job.tenure}
                  </span>
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-[var(--text-soft)]">
                {job.bullets.map((bullet) => (
                  <li key={bullet.title}>
                    <span className="font-semibold text-[var(--text)]">{bullet.title}</span>
                    <span>{bullet.desc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <SkillChips skills={job.skills} label="Technologies used" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <Separator />

      <section aria-labelledby="tech-heading" className="space-y-6">
        <h2
          id="tech-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white"
        >
          Technologies
        </h2>
        <div className="space-y-5">
          {techGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
                {group.label}
              </h3>
              <SkillChips skills={group.skills} />
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section aria-labelledby="education-heading" className="space-y-4">
        <h2
          id="education-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white"
        >
          Education
        </h2>
        <div className="flex items-start gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
          <img
            src={profile.education.logo}
            alt={profile.education.school}
            width={48}
            height={48}
            className="size-12 rounded-md bg-white object-contain p-1"
            loading="lazy"
          />
          <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-semibold text-white">{profile.education.degree}</h3>
              <p className="text-[var(--text-soft)]">{profile.education.school}</p>
            </div>
            <p className="text-sm text-[var(--text-muted)]">{profile.education.dates}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
