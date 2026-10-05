import type { CSSProperties } from 'react'
import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the portrait
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * Each of the four things you do carries the marks of the tools it is
 * built with. Any mark whose image file is missing hides itself, so a
 * missing logo never shows as a broken image.
 */

type Mark = { src: string; name: string }

// Logos already in public/icons
const GWS: Mark = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const SLACK: Mark = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const GITHUB: Mark = { src: '/icons/ai/github.svg', name: 'GitHub' }

// Logos to add to public/icons/ai/ (each hides itself until the file exists)
const MAKE: Mark = { src: '/icons/ai/make.svg', name: 'Make' }
const NETLIFY: Mark = { src: '/icons/ai/netlify.svg', name: 'Netlify' }
const VERCEL: Mark = { src: '/icons/ai/vercel.svg', name: 'Vercel' }
const FIGMA: Mark = { src: '/icons/ai/figma.svg', name: 'Figma' }

type Capability = {
  index: string
  title: string
  marks: Mark[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Websites and hosting',
    marks: [FIGMA, GITHUB, NETLIFY, VERCEL],
  },
  {
    index: '02',
    title: 'Admin and inbox support',
    marks: [GWS, SLACK],
  },
  {
    index: '03',
    title: 'Automations',
    marks: [MAKE],
  },
  {
    index: '04',
    title: 'AI data annotation',
    marks: [],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          A remote web developer and entry-level virtual assistant based in Cape Town.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build the website you need and take the admin off your plate.
            <span> So you can get back to running your business.</span>
          </p>

          <p className="agrid__note">
            I work remotely with solo founders and small teams, building clean, fast websites
            and handling day-to-day admin. Currently studying Google Digital Marketing and
            E-commerce on Coursera.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img
                        src={m.src}
                        alt={m.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const wrapper = e.currentTarget.parentElement
                          if (wrapper) wrapper.style.display = 'none'
                        }}
                      />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+2 · working remotely</span>
              </span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={`Portrait of ${profile.name}`}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}