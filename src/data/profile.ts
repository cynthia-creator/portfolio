/**
 * Profile data: your name, role, contact details and the facts shown on Home.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Cynthia Kamuzembe',
  firstName: 'Cynthia',
  handle: '@DigitalByCyn',
  role: 'Web Developer | Virtual Assistant',
  avatarSrc: '/cynthia.png',
  verifiedLabel: 'Web Developer and Virtual Assistant',
  email: 'kamuzembecynthia8@gmail.com',
  location: 'Cape Town, South Africa',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '4 yrs', label: 'Web developer', Icon: Briefcase },
    { value: 'Remote', label: 'Worldwide clients', Icon: SealCheck },
    { value: 'GMT+2', label: 'South Africa time', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Less admin, more focus.', line2: 'Websites that bring leads.' },
  hero: {
    body: 'I build fast, mobile-friendly websites and offer virtual assistant support for busy founders and small teams.',
    portraitSrc: '/cynthia.png',
    portraitAlt: 'Portrait of Cynthia Kamuzembe',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/cynthiakamuzembe', iconPath: '/icons/linkedin.svg' },
  ],
}