export type SkillChip =
  | { label: string; icon?: string; fa?: string }

export type Job = {
  role: string
  company: string
  companyUrl?: string
  logo: string
  place: string
  dates: string
  tenure: string
  tenureMuted?: boolean
  bullets: { title: string; desc: string }[]
  skills: SkillChip[]
}

export const jobs: Job[] = [
  {
    role: 'Software Engineer',
    company: 'Daroupakhsh Distribution',
    logo: '/images/daroupakhsh.png',
    place: 'Full-time · Tehran, Iran · On-site',
    dates: 'Aug 2025 – Present',
    tenure: '(1 year)',
    bullets: [
      {
        title: 'Academy Platform',
        desc: ' — Internal platform for the organization\'s training department to conduct surveys and internal examinations, enabling data collection and automated assessment workflows',
      },
      {
        title: 'ERP System Modules',
        desc: ' — Developed enterprise ERP system modules that support integrated business operations and data management',
      },
      {
        title: 'Seminar Management Platform',
        desc: ' — Built a comprehensive seminar management platform that facilitates event registration, scheduling, and participant tracking',
      },
    ],
    skills: [
      { label: '.NET', icon: '/icons/dotnet.svg' },
      { label: 'C#', icon: '/icons/csharp.svg' },
      { label: 'Vue.js', icon: '/icons/vuejs.svg' },
      { label: 'SQL Server', icon: '/icons/microsoftsqlserver.svg' },
      { label: 'Redis', icon: '/icons/redis.svg' },
      { label: 'Cursor', icon: '/icons/cursor.svg' },
      { label: 'Claude Code', icon: '/icons/claude.svg' },
      { label: 'Copilot', icon: '/icons/copilot.svg' },
    ],
  },
  {
    role: 'Artificial Intelligence Engineer',
    company: 'HiWEB',
    companyUrl: 'https://hiweb.ir',
    logo: '/images/hiweb.png',
    place: 'Full-time · Tehran, Iran · Hybrid',
    dates: 'Jul 2023 – Sep 2024',
    tenure: '(1 year 3 months)',
    tenureMuted: true,
    bullets: [
      {
        title: 'Road Violation System',
        desc: ' — Road violation registration for traffic monitoring and speeding detection',
      },
      {
        title: 'Vehicle Classification',
        desc: ' — Classification system with 95% accuracy (Iranian, Chinese, EU vehicles)',
      },
      {
        title: 'Color Classification',
        desc: ' — Color-based vehicle classification with 90% accuracy',
      },
      {
        title: 'SQL Optimization',
        desc: ' — Database optimization for real-time data processing',
      },
      {
        title: 'Intern Mentoring',
        desc: ' — Trained 4 interns in Python, AI techniques, and software development',
      },
    ],
    skills: [
      { label: 'Computer Vision', fa: 'fa-solid fa-eye' },
      { label: 'Python', icon: '/icons/python.svg' },
      { label: 'PyTorch', icon: '/icons/pytorch.svg' },
      { label: 'OpenCV', icon: '/icons/opencv.svg' },
      { label: 'YOLO', fa: 'fa-solid fa-car' },
      { label: 'NumPy', icon: '/icons/numpy.svg' },
      { label: 'Pandas', icon: '/icons/pandas.svg' },
      { label: 'Scikit-Learn', icon: '/icons/scikitlearn.svg' },
      { label: 'SQL Server', icon: '/icons/microsoftsqlserver.svg' },
    ],
  },
  {
    role: 'Artificial Intelligence Engineer',
    company: 'Farafan',
    companyUrl: 'https://www.farafan.ir/',
    logo: '/images/farafan_logo.png',
    place: 'Full-time · Tehran, Iran · Hybrid',
    dates: 'Jul 2022 – Mar 2023',
    tenure: '(9 months)',
    tenureMuted: true,
    bullets: [
      {
        title: 'Predictive Models',
        desc: ' — Forecasting voice call and internet traffic',
      },
      {
        title: 'Face Recognition System',
        desc: ' — Security and attendance automation',
      },
      {
        title: 'Data Processing Pipelines',
        desc: ' — Pipelines with SQL databases',
      },
    ],
    skills: [
      { label: 'Python', icon: '/icons/python.svg' },
      { label: 'Scikit-Learn', icon: '/icons/scikitlearn.svg' },
      { label: 'TensorFlow', icon: '/icons/tensorflow.svg' },
      { label: 'Computer Vision', fa: 'fa-solid fa-eye' },
      { label: 'PyTorch', icon: '/icons/pytorch.svg' },
      { label: 'OpenCV', icon: '/icons/opencv.svg' },
      { label: 'NumPy', icon: '/icons/numpy.svg' },
      { label: 'Pandas', icon: '/icons/pandas.svg' },
      { label: 'SQL Server', icon: '/icons/microsoftsqlserver.svg' },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Petroleum Industry Health Organization (The National Iranian Oil Company)',
    companyUrl: 'https://www.piho.ir/',
    logo: '/images/nioc.png',
    place: 'Full-time · Bandar-e Mahshahr, Iran · On-site',
    dates: 'Mar 2017 – Mar 2018',
    tenure: '(1 year 1 month)',
    tenureMuted: true,
    bullets: [
      {
        title: 'Internal Business Applications',
        desc: ' — Developed applications using VB.NET, SQL Server, and Windows Forms',
      },
      {
        title: 'Project Management Platform',
        desc: ' — Built a platform for operational tracking',
      },
      {
        title: 'Warehouse Request System',
        desc: ' — Created a warehouse request management system',
      },
    ],
    skills: [
      { label: 'VB.NET', icon: '/icons/dotnet.svg' },
      { label: 'SQL Server', icon: '/icons/microsoftsqlserver.svg' },
      { label: 'Windows Forms', fa: 'fa-solid fa-window-maximize' },
    ],
  },
]
