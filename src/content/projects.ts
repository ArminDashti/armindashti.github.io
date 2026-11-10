import type { SkillChip } from './jobs'

export type Project = {
  name: string
  description: string
  links: { href: string; label: string }[]
  skills: SkillChip[]
}

export const projects: Project[] = [
  {
    name: 'asip',
    description:
      'SPA for caller IP, ASN, AS, and country lookup, plus IP and DNS lookup pages backed by the as-ip API.',
    links: [
      { href: 'https://github.com/ArminDashti/asip-webui', label: 'github.com/ArminDashti/asip-webui' },
      { href: 'https://github.com/ArminDashti/asip-api', label: 'github.com/ArminDashti/asip-api' },
    ],
    skills: [
      { label: 'Vue.js', icon: '/icons/vuejs.svg' },
      { label: 'TypeScript', icon: '/icons/typescript.svg' },
      { label: 'Docker', icon: '/icons/docker.svg' },
      { label: 'Go', icon: '/icons/go.svg' },
    ],
  },
  {
    name: 'exar',
    description:
      'REST API for shared daily expense tracking with JWT auth, shop/item management, and Jalali date support.',
    links: [
      { href: 'https://github.com/ArminDashti/exar-api', label: 'github.com/ArminDashti/exar-api' },
      { href: 'https://github.com/ArminDashti/exar-web', label: 'github.com/ArminDashti/exar-web' },
    ],
    skills: [
      { label: 'Go', icon: '/icons/go.svg' },
      { label: 'PostgreSQL', fa: 'fa-solid fa-database' },
      { label: 'Docker', icon: '/icons/docker.svg' },
    ],
  },
  {
    name: 'janus',
    description:
      'Hub for Janus workflows — coordinating automation scripts, agents, and operational tooling.',
    links: [{ href: 'https://github.com/ArminDashti/janus-hub', label: 'github.com/ArminDashti/janus-hub' }],
    skills: [
      { label: 'PowerShell', icon: '/icons/powershell.svg' },
      { label: 'Git', icon: '/icons/git.svg' },
    ],
  },
  {
    name: 'lexmora',
    description:
      'Dark-themed Vue SPA for AI transforms, history, instructions, stats, and OpenRouter settings.',
    links: [
      {
        href: 'https://github.com/ArminDashti/lexmora-webui',
        label: 'github.com/ArminDashti/lexmora-webui',
      },
      { href: 'https://github.com/ArminDashti/lexmora-api', label: 'github.com/ArminDashti/lexmora-api' },
    ],
    skills: [
      { label: 'Vue.js', icon: '/icons/vuejs.svg' },
      { label: 'TypeScript', icon: '/icons/typescript.svg' },
      { label: 'Tailwind', icon: '/icons/tailwindcss.svg' },
      { label: 'Docker', icon: '/icons/docker.svg' },
    ],
  },
  {
    name: 'netvan',
    description:
      'Windows network monitor with tray widget, NIC bandwidth, system metrics, latency tools, and usage history.',
    links: [{ href: 'https://github.com/ArminDashti/netvan', label: 'github.com/ArminDashti/netvan' }],
    skills: [
      { label: 'Rust', icon: '/icons/rust.svg' },
      { label: 'TypeScript', icon: '/icons/typescript.svg' },
      { label: 'React', fa: 'fa-brands fa-react' },
      { label: 'SQLite', fa: 'fa-solid fa-database' },
    ],
  },
  {
    name: 'parkiroid',
    description:
      'Android vehicle monitoring and driving assistance with on-device AI, WebRTC streaming, and telemetry upload.',
    links: [{ href: 'https://github.com/ArminDashti/parkiroid', label: 'github.com/ArminDashti/parkiroid' }],
    skills: [
      { label: 'Kotlin', icon: '/icons/kotlin.svg' },
      { label: 'Android', fa: 'fa-brands fa-android' },
      { label: 'NCNN / CV', fa: 'fa-solid fa-eye' },
    ],
  },
]
