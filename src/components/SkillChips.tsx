import { Badge } from '@/components/ui/badge'
import type { SkillChip } from '@/content/jobs'

type SkillChipsProps = {
  skills: SkillChip[]
  label?: string
}

export function SkillChips({ skills, label }: SkillChipsProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label={label}>
      {skills.map((skill) => (
        <Badge key={skill.label} className="hover:-translate-y-0.5 transition-transform duration-200">
          {skill.icon ? (
            <img src={skill.icon} alt="" className="skill-chip-icon" width={14} height={14} />
          ) : null}
          {skill.fa ? <i className={skill.fa} aria-hidden="true" /> : null}
          {skill.label}
        </Badge>
      ))}
    </div>
  )
}
