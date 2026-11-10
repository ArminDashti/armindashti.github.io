import type { SkillChip } from './jobs'

export type TechGroup = {
  label: string
  skills: SkillChip[]
}

export const techGroups: TechGroup[] = [
  {
    label: 'Vibe Coding & AI Tools',
    skills: [
      { label: 'Cursor', icon: '/icons/cursor.svg' },
      { label: 'Claude Code', icon: '/icons/claude.svg' },
      { label: 'Copilot', icon: '/icons/copilot.svg' },
      { label: 'Codex', icon: '/icons/openai.svg' },
      { label: 'Devin', icon: '/icons/devin.svg' },
      { label: 'Antigravity', icon: '/icons/antigravity.png' },
      { label: 'MCP', fa: 'fa-solid fa-plug' },
      { label: 'LangChain', icon: '/icons/langchain.svg' },
      { label: 'Agentic AI', fa: 'fa-solid fa-robot' },
      { label: 'LLMs', fa: 'fa-solid fa-brain' },
    ],
  },
  {
    label: 'Web Development',
    skills: [
      { label: 'C#', icon: '/icons/csharp.svg' },
      { label: '.NET', icon: '/icons/dotnet.svg' },
      { label: 'Vue.js', icon: '/icons/vuejs.svg' },
      { label: 'Tailwind', icon: '/icons/tailwindcss.svg' },
    ],
  },
  {
    label: 'Database & DevOps',
    skills: [
      { label: 'SQL Server', icon: '/icons/microsoftsqlserver.svg' },
      { label: 'Redis', icon: '/icons/redis.svg' },
      { label: 'Docker', icon: '/icons/docker.svg' },
      { label: 'Git', icon: '/icons/git.svg' },
      { label: 'IIS', icon: '/icons/iis.svg' },
    ],
  },
  {
    label: 'AI & Data Science',
    skills: [
      { label: 'Python', icon: '/icons/python.svg' },
      { label: 'PyTorch', icon: '/icons/pytorch.svg' },
      { label: 'Computer Vision', fa: 'fa-solid fa-eye' },
      { label: 'Scikit-Learn', icon: '/icons/scikitlearn.svg' },
    ],
  },
  {
    label: 'Architecture',
    skills: [
      { label: 'Clean Architecture', fa: 'fa-solid fa-sitemap' },
      { label: 'CQRS', fa: 'fa-solid fa-arrows-split-up-and-left' },
      { label: 'SOLID', fa: 'fa-solid fa-cubes' },
      { label: 'Microservices', fa: 'fa-solid fa-network-wired' },
    ],
  },
]
