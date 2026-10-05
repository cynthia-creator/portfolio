import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Medal,
  Stack,
  Quotes,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
} from '@/components/slab'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds. Every card is a link. Everything shown here is something that can be
 * checked: real projects, real skills, and honest status labels.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

type Item = { Icon: typeof FolderOpen; title: string; note: string }

const PROJECT_ITEMS: Item[] = [
  { Icon: Globe, title: 'Trakmama', note: 'Pregnancy tracker web app · Finished' },
  { Icon: Globe, title: 'OmniSpark Media', note: 'My business website · In progress' },
  { Icon: Gear, title: 'Weather App', note: 'Practice project · In progress' },
]


const OFFERS: Item[] = [
  { Icon: Globe, title: 'Websites', note: 'Responsive, fast, mobile-friendly' },
  { Icon: AddressBook, title: 'Admin support', note: 'Email, calendar, spreadsheets' },
  { Icon: Gear, title: 'Automations', note: 'Make and custom code' },
  { Icon: FunnelSimple, title: 'AI data annotation', note: 'Accurate labelling and review' },
]

const LEARNING_ITEMS: Item[] = [
  { Icon: Medal, title: 'Google Digital Marketing', note: 'Studying on Coursera · In progress' },
  { Icon: Medal, title: 'E-commerce', note: 'Studying on Coursera · In progress' },
]

const CONTACT_ITEMS: Item[] = [
  { Icon: Quotes, title: 'Get in touch', note: profile.email },
]

/** The skills as a flat list: every leaf of the tree in ai-stack.ts. */
const leaves = (n: StackNode): StackNode[] =>
  n.children?.length ? n.children.flatMap(leaves) : [n]
const SKILLS = leaves(aiStack)

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

function ItemList({ items, numbered = false }: { items: Item[]; numbered?: boolean }) {
  return (
    <ul className="bento__media bento__offers" role="list">
      {items.map(({ Icon, title, note }, i) => (
        <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
          <span className="bento__offer-tile">
            <Icon size={15} weight="duotone" aria-hidden="true" />
          </span>
          <span className="bento__offer-text">
            <span className="bento__offer-title">{title}</span>
            <span className="bento__offer-note">{note}</span>
          </span>
          {numbered && (
            <span className="bento__offer-num" aria-hidden="true">
              0{i + 1}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function HomeBento() {
  const half = Math.ceil(SKILLS.length / 2)
  const skillRows = [SKILLS.slice(0, half), SKILLS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead
          Icon={User}
          title="About"
          desc="A remote web developer and entry-level virtual assistant."
        />
        <div className="bento__media bento__fan" aria-hidden="true">
          <span className="bento__photo" style={{ ['--i' as string]: 0 }}>
            <img src={profile.avatarSrc} alt="" loading="lazy" decoding="async" />
          </span>
        </div>
      </Link>
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead
          Icon={FolderOpen}
          title="Projects"
          desc="A pregnancy tracker app, plus my business website and a weather app in progress."
        />
        <ItemList items={PROJECT_ITEMS} />
      </Link>
      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={Robot} title="Skills" desc="What I can help you with." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {skillRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Learning" desc="Courses I'm currently studying." />
        <ItemList items={LEARNING_ITEMS} />
      </Link>

      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="What I offer, and who it's for." />
        <ItemList items={OFFERS} numbered />
      </Link>

      <Link to="/contact" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Contact" desc="Have a project or task in mind? Let's talk." />
        <ItemList items={CONTACT_ITEMS} />
      </Link>
    </nav>
  )
}