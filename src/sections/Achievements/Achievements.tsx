import { achievements } from "../../data/achievements";
import { useInView } from "../../hooks/useUtils";
import { Award } from "lucide-react";
import "./Achievements.css";

export default function Achievements() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="achievements section" id="achievements" ref={ref}>
      <div className="container">
        <span className="section-label">// RECOGNITION</span>
        <h2 className="section-title">ACHIEVEMENTS</h2>

        <div className={`ach__grid ${inView ? "visible" : ""}`}>
          {achievements.map((ach, i) => (
            <div
              key={ach.id}
              className="ach__card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="ach__icon">
                <Award size={20} />
              </div>
              <div className="ach__info">
                <h3 className="ach__title">{ach.title}</h3>
                <div className="ach__meta">
                  {ach.organization && <span className="ach__org">{ach.organization}</span>}
                  <span className="ach__year">{ach.year}</span>
                </div>
                {ach.description && <p className="ach__desc">{ach.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
