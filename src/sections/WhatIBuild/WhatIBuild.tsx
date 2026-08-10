import { useInView } from "../../hooks/useUtils";
import "./WhatIBuild.css";

const categories = [
  {
    number: "01",
    title: "INTELLIGENT SYSTEMS",
    description: "AI/ML, anomaly detection, computer vision, intelligent workflows.",
    projects: ["DRIFTSEAL", "Illegal Construction Detection", "PEDIASCAPE"],
  },
  {
    number: "02",
    title: "DATA & INFRASTRUCTURE",
    description: "Data ingestion, APIs, databases, schemas, secure querying, pipelines.",
    projects: ["STATXTRACT"],
  },
  {
    number: "03",
    title: "FULL-STACK PRODUCTS",
    description: "Real-world user-facing applications and workflows.",
    projects: ["HAEMOLINK", "PEDIASCAPE", "OUTBREAK SENTINAL"],
  },
  {
    number: "04",
    title: "SPATIAL / 3D SYSTEMS",
    description: "GIS, mapping, spatial visualization and Unity.",
    projects: ["GRAMSCAPE"],
  },
  {
    number: "05",
    title: "EXPERIMENTS",
    description: "Small technical experiments and future work.",
    projects: [],
  },
];

export default function WhatIBuild() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="what-i-build section" id="what-i-build" ref={ref}>
      <div className="container">
        <span className="section-label">// CAPABILITIES</span>
        <h2 className="section-title">WHAT I BUILD</h2>

        <div className={`wib__grid ${inView ? "visible" : ""}`}>
          {categories.map((cat, i) => (
            <div
              key={cat.number}
              className="wib__card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="wib__card-header">
                <span className="wib__card-number">{cat.number}</span>
                <h3 className="wib__card-title">{cat.title}</h3>
              </div>
              <p className="wib__card-desc">{cat.description}</p>
              {cat.projects.length > 0 && (
                <div className="wib__card-projects">
                  {cat.projects.map((p) => (
                    <span key={p} className="wib__card-project">{p}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
