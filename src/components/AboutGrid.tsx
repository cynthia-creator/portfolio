import type { CSSProperties } from 'react'
import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const N8N = { src: '/icons/ai/n8n.svg', name: 'n8n' }
const ZAPIER = { src: '/icons/ai/zapier.svg', name: 'Zapier' }
//const DOCKER = { src: '/icons/ai/docker.svg', name: 'Docker' }
const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const CODEX = { src: '/icons/ai/codex.svg', name: 'Codex' }
//const GLM = { src: '/icons/ai/zhipu.svg', name: 'GLM' }
//const QWEN = { src: '/icons/ai/qwen.svg', name: 'Qwen' }
//const HERMES = { src: '/icons/ai/hermes.svg', name: 'Hermes' }
const NAMECHEAP = { src: '/icons/ai/namecheap.svg', name: 'Namecheap' }
const CLOUDFLARE = { src: '/icons/ai/cloudflare.svg', name: 'Cloudflare' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const FIREFLIES = { src: '/icons/ai/fireflies.png', name: 'Fireflies' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Admin and inbox support',
    marks: [GWS, SLACK, FIREFLIES],
  },
  {
    index: '02',
    title: 'Automations',
    marks: [N8N, ZAPIER],
  },
  {
    index: '03',
    title: 'Websites and hosting',
    marks: [CLAUDE, NAMECHEAP, CLOUDFLARE, GITHUB],
  },
  {
    index: '04',
    title: 'AI-assisted workflows',
    marks: [CLAUDE, CODEX],
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
          A remote virtual assistant and web developer based in Cape Town.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I take the admin off your plate and build the website you need.
            <span> So you can get back to running your business.</span>
          </p>

          <p className="agrid__note">
            I work remotely with solo founders and small teams, handling the day-to-day tasks
            that eat into your time and building clean, fast websites that are easy to update.
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
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
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