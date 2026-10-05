import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, CursorClick } from '@/components/slab'

/**
 * Projects: a glass panel of cards. Project cards open a dialog with the
 * details and links; the tools card is informational only.
 * Every statement here is something that can be checked.
 */

type ProjectLink = { label: string; href: string }

type Project = {
  id: string
  title: string
  desc: string
  logos: string[]
  /** Short factual lines shown in the dialog. */
  details: string[]
  links: ProjectLink[]
  wide?: boolean
}

// Logos that already exist in public/icons/ai/
const VERCEL = '/icons/ai/vercel.svg'
const TAILWIND = '/icons/ai/tailwindcss.svg'
const GITHUB = '/icons/ai/github.svg'
const GWS = '/icons/googleworkspace.svg'
const SLACK = '/icons/ai/slack-color.svg'
const MAKE = '/icons/ai/make.svg'
const NETLIFY = '/icons/ai/netlify.svg'
const FIGMA = '/icons/ai/figma.svg'

const PROJECTS: Project[] = [
  {
    id: 'omnispark',
    title: 'OmniSpark Media',
    desc: 'In progress. The website for my own web development and digital marketing business.',
    logos: [VERCEL, TAILWIND],
    details: [
      'A multi-page business website with Home, Services, Portfolio and Contact pages.',
      'Built with Next.js and Tailwind CSS, and deployed on Vercel.',
      'Still in development: content and design are being finalised.',
    ],
    links: [{ label: 'View live site', href: 'https://omnisparkmedia-ew89.vercel.app/' }],
    wide: true,
  },
  {
    id: 'weather',
    title: 'Weather App',
    desc: 'In progress. A simple weather app with a Celsius and Fahrenheit toggle.',
    logos: [GITHUB, VERCEL],
    details: [
      'A practice project that shows conditions, humidity and wind speed.',
      'Includes a °C / °F unit toggle.',
      'The code is open source on GitHub, and a redesign is planned.',
    ],
    links: [
      { label: 'View live app', href: 'https://weatherapp-6muw.vercel.app/' },
      { label: 'View code on GitHub', href: 'https://github.com/cynthia-creator/weatherapp' },
    ],
  },
]

const TOOLS_LOGOS = [GWS, SLACK, GITHUB, MAKE, NETLIFY, VERCEL, FIGMA]

function Logos({ logos }: { logos: string[] }) {
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

/* ---------- Dialog ---------- */
function ProjectModal({
  title,
  onClose,
  children,
}: {
  title: string
  onClose: () => void
  children: ReactNode
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="pmodal__close"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

const linkStyle = {
  display: 'inline-block',
  padding: '10px 18px',
  borderRadius: 999,
  background: '#0f1b2d',
  color: '#ffffff',
  fontWeight: 600,
  fontSize: 14,
  textDecoration: 'none',
} as const

function ProjectDetails({ p }: { p: Project }) {
  return (
    <div
      style={{
        background: '#ffffff',
        color: '#0f1b2d',
        borderRadius: 20,
        padding: '28px 28px 24px',
        maxWidth: 560,
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px' }}>{p.title}</h2>
      <p style={{ margin: '0 0 16px', color: '#475569' }}>{p.desc}</p>
      <ul style={{ margin: '0 0 20px', paddingLeft: 20, lineHeight: 1.6 }}>
        {p.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {p.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ---------- The page ---------- */
export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((p: Project, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(p)
  }, [])

  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Things I&apos;m building.
        </h1>
        <p className="pgrid__lede">
          Two projects in progress, and the tools I work with. Open a card to see more.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`bento__card bento__card--btn${p.wide ? ' bento__card--wide' : ''}`}
              data-id={p.id}
              onClick={(e) => show(p, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className="bento__head">
                <Logos logos={p.logos} />
                <span className="bento__title">{p.title}</span>
                <span className="bento__desc">{p.desc}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
            </button>
          ))}

          <div className="bento__card" data-id="tools">
            <span className="bento__head">
              <Logos logos={TOOLS_LOGOS} />
              <span className="bento__title">Tools I use</span>
              <span className="bento__desc">
                Google Workspace, Slack, GitHub, Make, Netlify, Vercel and Figma.
              </span>
            </span>
          </div>
        </div>
      </div>

      {open && (
        <ProjectModal title={open.title} onClose={close}>
          <ProjectDetails p={open} />
        </ProjectModal>
      )}
    </section>
  )
}