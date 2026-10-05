import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Two bands: the three-step method on a dark plate, then the four services
 * as cards that carry the marks of the tools they use.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Discover',
    body: 'You tell me what you need and we agree on what the work involves.',
    Icon: MagnetStraight,
    chips: ['Your goals', 'Scope', 'Timeline'],
  },
  {
    index: '02',
    label: 'Plan',
    body: 'I send a clear plan, a price and a timeline before any work starts.',
    Icon: Timer,
    chips: ['Plan', 'Price', 'Agreement'],
  },
  {
    index: '03',
    label: 'Deliver',
    body: 'I do the work, share progress along the way and make revisions.',
    Icon: Trophy,
    chips: ['Progress updates', 'Revisions', 'Handover'],
  },
]

/* ---------- The services ---------- */

// Logos that exist in public/icons
const REACT = '/icons/ai/react.svg'
const TAILWIND = '/icons/ai/tailwindcss.svg'
const VERCEL = '/icons/ai/vercel.svg'
const NETLIFY = '/icons/ai/netlify.svg'
const GWS = '/icons/googleworkspace.svg'
const SLACK = '/icons/ai/slack-color.svg'
const MAKE = '/icons/ai/make.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img
            src={src}
            alt=""
            width={22}
            height={22}
            decoding="async"
            onError={(e) => {
              const wrapper = e.currentTarget.parentElement
              if (wrapper) wrapper.style.display = 'none'
            }}
          />
        </span>
      ))}
    </span>
  )
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Websites and hosting',
    description: 'Responsive websites and landing pages that look good on any screen.',
    chip: 'Web',
    logos: [REACT, TAILWIND, VERCEL, NETLIFY],
    bullets: ['Mobile-friendly design', 'Built with React and Tailwind', 'Deployed on Vercel or Netlify'],
  },
  {
    index: '02',
    title: 'Admin and inbox support',
    description: 'Entry-level virtual assistant help with everyday admin.',
    chip: 'Entry-level',
    logos: [GWS, SLACK],
    bullets: ['Email and inbox organising', 'Calendar and scheduling', 'Data entry and spreadsheets'],
  },
  {
    index: '03',
    title: 'Automations',
    description: 'Simple workflows that cut repetitive manual tasks.',
    chip: 'Automation',
    logos: [MAKE],
    bullets: ['Connect your apps with Make', 'Custom code where needed', 'Fewer repetitive tasks'],
  },
  {
    index: '04',
    title: 'AI data annotation',
    description: 'Careful labelling and review of data for AI training.',
    chip: 'Annotation',
    logos: [],
    bullets: ['Careful labelling and review', 'Follows project guidelines', 'Focus on accuracy'],
  },
]

/* ---------- The page ---------- */
export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Less admin. Better websites.
        </h1>
        <p className="pgrid__lede">
          Web development and entry-level admin support for solo founders and small teams.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              One. Two. Three.
              <br />
              <span>Simple, from first message to finished work.</span>
            </h2>
            <p className="sgrid__method-sub">
              A clear process means no surprises along the way.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I can do for you.</h2>
            <p className="sgrid__offers-sub">Pick one, or combine them.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 04</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}