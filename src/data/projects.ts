export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/** No mobile apps yet. Kept so other files that import it still work. */
export const mobileApps: MobileApp[] = []

export const webApps: AppProject[] = [
  {
    name: 'OmniSpark Media',
    tagline: 'The website for my own web development and marketing business.',
    description:
      'A multi-page business website with services, process, portfolio and contact pages, designed to turn visitors into enquiries. Currently in development.',
    accentColor: '#2563EB',
    stats: [
      { value: 'Next.js', label: 'Built with' },
      { value: 'Tailwind', label: 'Styling' },
      { value: 'Live', label: 'Deployed on Vercel' },
    ],
    badge: 'In progress',
  },
  {
    name: 'Weather App',
    tagline: 'A simple weather app with a Celsius and Fahrenheit toggle.',
    description:
      'A small weather app showing conditions, humidity and wind speed, built as a practice project. The code is open source on GitHub, and a redesign is planned.',
    accentColor: '#0EA5E9',
    stats: [
      { value: '°C / °F', label: 'Unit toggle' },
      { value: 'Open source', label: 'On GitHub' },
      { value: 'Practice', label: 'Project type' },
    ],
    badge: 'In progress',
  },
]