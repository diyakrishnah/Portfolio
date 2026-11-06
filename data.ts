export const profile = {
  name: 'Diya Krishna',
  role: 'Computer Science & Engineering Student',
  location: 'Kerala, India',
  email: 'your.email@example.com',
  github: 'https://github.com/diyakrishnah',
  linkedin: 'https://www.linkedin.com/',
  resume: '/resume.pdf',
  photo: '/profile-placeholder.svg',
  intro: 'I enjoy turning ideas into useful digital experiences — from thoughtful interfaces to practical technology projects.',
  about: 'I am a B.Tech Computer Science and Engineering student with a strong interest in problem-solving, web development and building technology that makes a difference. I enjoy exploring how ideas move from a sketch to a working product, collaborating with teams and learning by creating.',
  education: [
    { degree: 'B.Tech — Computer Science & Engineering', institute: 'St. Joseph’s College of Engineering and Technology, Palai', period: '2023 – Present', detail: 'Current CGPA: 8.7' }
  ]
}

export const skills = [
  { group: 'Programming', items: ['C', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'React', 'Tailwind CSS'] },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
  { group: 'Core Concepts', items: ['Data Structures', 'DBMS', 'Computer Networks', 'Operating Systems'] }
]

export const projects = [
  {
    title: 'SamvadSahay',
    category: 'Assistive Technology',
    year: '2026',
    description: 'A personalised visual-learning platform concept designed to support communication and daily-living skills for autistic children, with caregiver and child dashboards, communication cards and progress tracking.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/',
    featured: true,
    number: '01'
  },
  {
    title: 'Indian Sign Language Learning',
    category: 'Web Application',
    year: '2026',
    description: 'A learning-platform concept focused on making Indian Sign Language more accessible through structured lessons and interactive visual guidance.',
    stack: ['React', 'MediaPipe', 'Tailwind CSS'],
    link: 'https://github.com/',
    featured: true,
    number: '02'
  },
  {
    title: 'AquaGuard',
    category: 'Embedded Systems',
    year: '2026',
    description: 'An STM32 Blue Pill-based water-monitoring prototype using an ultrasonic sensor, relay module, LCD display and supporting circuitry.',
    stack: ['STM32', 'Embedded C', 'HC-SR04', 'I2C LCD'],
    link: 'https://github.com/',
    featured: false,
    number: '03'
  },
  {
    title: 'Machine Learning Experiments',
    category: 'Academic Project',
    year: '2025',
    description: 'Hands-on ML lab work exploring California housing data with linear regression, gradient descent and the normal equation.',
    stack: ['Python', 'Jupyter', 'NumPy', 'Pandas'],
    link: 'https://github.com/diyakrishnah/ml-lab',
    featured: false,
    number: '04'
  },
  {
    title: 'Java Networking Lab',
    category: 'Networking',
    year: '2025',
    description: 'Client-server and concurrent networking exercises covering TCP, UDP, multi-user chat and file-server concepts.',
    stack: ['Java', 'TCP/IP', 'UDP', 'Sockets'],
    link: 'https://github.com/',
    featured: false,
    number: '05'
  }
]

export const experience = [
  { role: 'Technical Fest Organising Team', org: 'ASTHRA 11.0 — SJCET Palai', period: '2026', detail: 'Contributed to planning and designing the CRACK THE LOCK technical competition, including round structure, puzzle flow and participant coordination.' },
  { role: 'Hackathon & Project Collaborator', org: 'Academic and student projects', period: 'Ongoing', detail: 'Collaborated on student technology concepts spanning assistive technology, accessible learning and web development.' }
]

export const certificates = [
  { name: 'AI Workshop', issuer: 'Infopark Kochi', note: 'Add certificate date and credential link' },
  { name: 'Technical Workshops & Participation', issuer: 'Add issuing organisation', note: 'Replace this sample entry with your certificate details' }
]
