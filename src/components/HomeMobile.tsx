import { Link } from 'react-router-dom'
import { SealCheck, FolderOpen, Stack, Medal, Quotes } from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per page in a snap row. These match the cards
 *                in HomeBento, so phone and desktop tell the same story.
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  {
    n: '01',
    label: 'Projects',
    to: '/projects',
    title: 'Things I have built.',
    desc: 'Trakmama, OmniSpark Media and a weather app.',
    Icon: FolderOpen,
  },
  {
    n: '02',
    label: 'Services',
    to: '/services',
    title: 'How I can help.',
    desc: 'Websites, admin support, automations and AI data annotation.',
    Icon: Stack,
  },
  {
    n: '03',
    label: 'Learning',
    to: '/about',
    title: 'Always learning.',
    desc: 'Google Digital Marketing and E-commerce on Coursera.',
    Icon: Medal,
  },
  {
    n: '04',
    label: 'About',
    to: '/about',
    title: `Hi, I'm ${profile.firstName}.`,
    desc: 'A remote web developer and entry-level virtual assistant.',
    img: profile.avatarSrc,
  },
  {
    n: '05',
    label: 'Contact',
    to: '/contact',
    title: "Let's talk.",
    desc: 'Have a project or task in mind? Get in touch.',
    Icon: Quotes,
    accent: true,
  },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.n}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              {'img' in t ? (
                <span className="htile__media"><img className="htile__img" src={t.img} alt="" loading="lazy" /></span>
              ) : (
                <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}