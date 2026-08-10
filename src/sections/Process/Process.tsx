import { Fragment } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useInView } from "../../hooks/useUtils";
import "./Process.css";

const steps = [
  { word: "THINK", desc: "Understand the problem." },
  { word: "BUILD", desc: "Turn the idea into a working system." },
  { word: "BREAK", desc: "Find weak points." },
  { word: "FIX", desc: "Iterate." },
  { word: "SHIP", desc: "Deliver something usable." },
];

export default function Process() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="process section" id="process" ref={ref}>
      <div className="container">
        <span className="section-label">// HOW I WORK</span>
        <div className={`process__steps ${inView ? "visible" : ""}`}>
          {steps.map((step, i) => (
            <Fragment key={step.word}>
              <div
                className="process__step"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="process__word">{step.word}</h3>
                <p className="process__desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="process__arrow-divider"
                  style={{ transitionDelay: `${i * 100 + 50}ms` }}
                  aria-hidden="true"
                >
                  <ArrowRight className="process__arrow-desktop" size={24} />
                  <ArrowDown className="process__arrow-mobile" size={20} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
