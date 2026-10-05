/**
 * The skills tree shown in the Projects "systems" pop-up and as chips on Home.
 *
 * This file is the ONLY place node copy lives. AIStack.tsx and AIStackGrid.tsx
 * render whatever shape they find here, so swapping in content is a data edit
 * and never a JSX edit. Keep the exported names and types stable.
 */

import { Sparkle, Browser, SlackLogo, FlowArrow, Database } from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

/** A vendor mark. Only marks that already exist in public/icons are listed. */
export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  /** One plain sentence a non-technical client understands. */
  what: string
  /** Real stack / tools. Rendered small and muted. */
  stack?: string
  status?: StackStatus
  /** Phosphor glyph for the card's mark tile. Every node has one. */
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const GITHUB: StackLogo = { src: '/icons/ai/github.svg', name: 'GitHub' }
const VERCEL: StackLogo = { src: '/icons/ai/vercel.svg', name: 'Vercel' }
const SLACK: StackLogo = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const MAKE: StackLogo = { src: '/icons/ai/make.svg', name: 'Make' }

/** Single root: you. Branches are what you do. */
export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Web developer and entry-level virtual assistant, working remotely.',
  children: [
    {
      id: 'websites',
      Icon: Browser,
      logos: [GITHUB, VERCEL],
      name: 'Websites',
      what: 'Responsive websites that are fast, mobile-friendly and easy to update.',
      stack: 'React, Next.js, Tailwind CSS, TypeScript, WordPress',
    },
    {
      id: 'admin',
      Icon: SlackLogo,
      logos: [SLACK],
      name: 'Admin support',
      what: 'Entry-level help with email, calendars and spreadsheets.',
      stack: 'Google Workspace, Slack',
    },
    {
      id: 'automation',
      Icon: FlowArrow,
      logos: [MAKE],
      name: 'Automations',
      what: 'Workflows that connect apps and cut repetitive manual tasks.',
      stack: 'Make, custom code',
    },
    {
      id: 'annotation',
      Icon: Database,
      name: 'AI data annotation',
      what: 'Hands-on experience labelling and reviewing data for AI training, with a focus on accuracy.',
    },
  ],
}