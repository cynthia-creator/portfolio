import Flagship from '@/components/Flagship'

/**
 * ShowcaseGrid - the /showcase view on one glass sheet.
 *
 * A page head with a badge card on the right, then the Flagship build: the
 * five-tab product mock, the copy, the CTA, and the testimonial marquee that
 * runs under it. Same head and glass as Projects and Services, so the shell
 * reads as one system. Styles live in src/styles/showcase.css (.ktools).
 */
export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Showcase</span>
          <h1 className="pgrid__title" id="showcase-title">
            My flagship build, and the people it helps.
          </h1>
          <p className="pgrid__lede">
            A closer look at the work I'm proudest of, and what clients say about working with me.
          </p>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        <Flagship eyebrow="Flagship build" />
      </div>
    </section>
  )
}