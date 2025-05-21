type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Scan Websites',
    description:
      'Scan Websites is a desktop app that automatically scrapes data from websites and extracts information.',
    link: 'https://github.com/Mua-Tool-Hay/mth-scan-websites/releases',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'work1',
    link: 'https://www.cisbox.com/',
    title: 'Software Engineer',
    company: 'Cisbox Software Ltd',
    start: '2022',
    end: 'Present',
  },
  {
    id: 'work2',
    link: '/',
    title: 'Full Stack Software Engineer',
    company: 'Freelance (Remote)',
    start: '2021',
    end: 'Present',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'My CV',
    link: '/cv',
  },
  {
    label: 'Github',
    link: 'https://github.com/tronghieu60s',
  },
  {
    label: 'Telegram',
    link: 'https://t.me/tronghieu60s',
  },
  {
    label: 'Facebook',
    link: 'https://fb.me/tronghieu60s',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tronghieu60s',
  },
]

export const EMAIL = 'tronghieu60s@gmail.com'
