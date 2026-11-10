import { SkillChips } from '@/components/SkillChips'
import { Separator } from '@/components/ui/separator'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="space-y-8">
      <header className="space-y-2">
        <h1
          id="projects-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white"
        >
          GitHub Projects
        </h1>
        <p className="text-[var(--text-muted)]">Selected public work from GitHub.</p>
      </header>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.name}>
            <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                {project.name}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                {project.links.map((link, index) => (
                  <span key={link.href} className="inline-flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">·</span> : null}
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[var(--text-soft)]">{project.description}</p>
              <div className="mt-4">
                <SkillChips skills={project.skills} label="Technologies used" />
              </div>
            </article>
          </li>
        ))}
      </ul>

      <Separator />

      <p className="text-[var(--text-muted)]">
        More on{' '}
        <a href={profile.links.githubOrg} target="_blank" rel="noopener noreferrer">
          github.com/ArminDashti
        </a>
      </p>
    </section>
  )
}
