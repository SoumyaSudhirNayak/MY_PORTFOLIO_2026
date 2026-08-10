import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { journey } from "../../data/journey";
import { useInView } from "../../hooks/useUtils";
import "./Journey.css";

/**
 * Dynamic snake-flow timeline.
 *
 * Layout: 4 items per row on desktop, responsive breakpoints for tablet/mobile.
 * Even rows → LTR, odd rows → RTL via flex-direction: row-reverse.
 * Adding/removing items in journey.ts automatically rebuilds the layout.
 */
export default function Journey() {
  const [sectionRef, inView] = useInView(0.12);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(4);

  /* ── Measure container and compute cols ── */
  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    // Desktop: 4 per row | Tablet: 3 | Small: 2
    setCols(w >= 900 ? 4 : w >= 600 ? 3 : 2);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  /* ── Chunk data into rows ── */
  const rows: (typeof journey)[] = [];
  for (let i = 0; i < journey.length; i += cols) {
    rows.push(journey.slice(i, i + cols));
  }

  /* ── Shared computed values (used for inline styles) ── */
  const GAP = 24;
  // Each card's flex-basis so every card in every row has the same width
  const itemBasis = `calc((100% - ${(cols - 1) * GAP}px) / ${cols})`;
  // Half a card width — used to position lines at the center of first/last dot
  const halfCard = `calc((100% - ${(cols - 1) * GAP}px) / ${cols} / 2)`;

  return (
    <section className="journey section" id="journey" ref={sectionRef}>
      <div className="container">
        <span className="section-label">// PROGRESSION</span>
        <h2 className="section-title">THE JOURNEY</h2>

        <div className={`journey__wrap ${inView ? "visible" : ""}`} ref={containerRef}>

          {/* ═══════════ DESKTOP: snake flow ═══════════ */}
          <div className="journey__desktop">
            {rows.map((items, ri) => {
              const rev = ri % 2 !== 0;
              const hasNext = ri < rows.length - 1;
              const count = items.length;

              // Horizontal line width: distance between first-dot-center and last-dot-center
              const lineW =
                count > 1
                  ? `calc(${count - 1} * (100% + ${GAP}px) / ${cols})`
                  : "0px";

              return (
                <Fragment key={ri}>

                  {/* ── Row of cards ── */}
                  <div className={`jrow ${rev ? "jrow--rev" : ""}`}>

                    {/* Horizontal amber line (positioned from first to last dot center) */}
                    <div
                      className="jrow__hline"
                      style={{
                        width: lineW,
                        ...(rev ? { right: halfCard } : { left: halfCard }),
                      }}
                    />

                    {/* Cards in natural data order; flex-direction handles visual direction */}
                    {items.map((m, ii) => (
                      <div
                        key={m.id}
                        className="jrow__item"
                        style={{
                          flexBasis: itemBasis,
                          transitionDelay: `${(ri * cols + ii) * 70}ms`,
                        }}
                      >
                        <div className="jrow__dot" />
                        <div className={`journey__card journey__card--${m.type}`}>
                          <span className="journey__year">{m.year}</span>
                          <h3 className="journey__card-title">{m.title}</h3>
                          <p className="journey__card-desc">{m.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── Vertical connector between this row and the next ── */}
                  {hasNext && (
                    <div className="jconn">
                      <div
                        className="jconn__pipe"
                        style={rev ? { left: halfCard } : { right: halfCard }}
                      />
                    </div>
                  )}

                </Fragment>
              );
            })}
          </div>

          {/* ═══════════ MOBILE: vertical timeline ═══════════ */}
          <div className="journey__mobile">
            <div className="jmob__rail" />
            {journey.map((m, i) => (
              <div
                key={m.id}
                className="jmob__item"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="jmob__dot" />
                <div className="jmob__card">
                  <span className="journey__year">{m.year}</span>
                  <h3 className="journey__card-title">{m.title}</h3>
                  <p className="journey__card-desc">{m.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
