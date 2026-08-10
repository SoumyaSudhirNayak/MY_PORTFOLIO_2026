import { useEffect, useRef } from "react";
import { profile } from "../../data/profile";
import { useInView, useReducedMotion } from "../../hooks/useUtils";
import gsap from "gsap";
import "./About.css";

export default function About() {
  const [sectionRef, inView] = useInView(0.12);
  const reducedMotion = useReducedMotion();
  const philosophyRef = useRef<HTMLDivElement>(null);

  // Subtle scroll/parallax movement for the left philosophy statement
  useEffect(() => {
    if (reducedMotion || !philosophyRef.current) return;

    const el = philosophyRef.current;

    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate position relative to viewport center
      const progress = (rect.top - windowHeight / 2) / (windowHeight / 2);
      const translateY = progress * -18; // ~18px subtle parallax scroll

      gsap.to(el, {
        y: translateY,
        duration: 0.6,
        ease: "power1.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className={`about__unified-grid ${inView ? "visible" : ""}`}>
          
          {/* LEFT COLUMN — PHILOSOPHY */}
          <div className="about__left-col">
            <div className="about__philosophy" ref={philosophyRef}>
              <h2 className="about__philosophy-title">
                I DON'T JUST<br />
                <span className="about__philosophy-highlight">WRITE CODE.</span>
              </h2>
              <p className="about__philosophy-subtitle">
                I build systems, products and experiences that solve real problems.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — ABOUT */}
          <div className="about__right-col">
            <span className="section-label">// ABOUT</span>

            <p className="about__bio">
              I'm Soumya Sudhir Nayak a Computer Science engineer focused on full-stack engineering, AI/ML, backend systems and data-driven applications.
            </p>

            {/* 01-05 Attributes */}
            <div className="about__attributes-list">
              {profile.attributes.map((attr, i) => (
                <div
                  key={attr}
                  className="about__attribute-item"
                  style={{ transitionDelay: `${(i + 1) * 70}ms` }}
                >
                  <span className="about__attribute-num">0{i + 1}</span>
                  <span className="about__attribute-label">{attr}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="about__languages-block">
              <span className="about__languages-title">LANGUAGES</span>
              <div className="about__languages-text">
                {profile.languages.join(" · ")}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
