import { useState } from "react";
import { technologies, getTechnologyByName } from "../../data/technologies";
import { TechIcon } from "../../components/icons/TechIcons";
import { useInView } from "../../hooks/useUtils";
import "./Toolbox.css";

export default function Toolbox() {
  const [sectionRef, inView] = useInView(0.1);
  const [activeTechName, setActiveTechName] = useState<string | null>("Python");

  const activeTech = activeTechName ? getTechnologyByName(activeTechName) : null;

  return (
    <section className="toolbox section" id="toolbox" ref={sectionRef}>
      <div className="container">
        <span className="section-label">// TECHNOLOGIES</span>
        <h2 className="section-title">THE TOOLBOX</h2>

        <div className={`toolbox__two-col ${inView ? "visible" : ""}`}>
          
          {/* LEFT COLUMN: WHAT I KNOW (Technical Constellation Grid) */}
          <div className="toolbox__left-col">
            <div className="toolbox__col-header">
              <span className="toolbox__col-tag">WHAT I KNOW</span>
            </div>

            <div className="toolbox__constellation-grid">
              {technologies.map((tech) => {
                const isActive = activeTechName === tech.name;

                return (
                  <button
                    key={tech.name}
                    className={`toolbox__icon-tile ${isActive ? "toolbox__icon-tile--active" : ""}`}
                    onClick={() => setActiveTechName(tech.name)}
                    aria-label={`Select ${tech.name}`}
                  >
                    <div className="toolbox__icon-wrap">
                      <TechIcon name={tech.name} size={24} />
                    </div>
                    <span className="toolbox__icon-label">{tech.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: WHAT I'VE ACTUALLY USED IT FOR (Glass Terminal Panel) */}
          <div className="toolbox__right-col">
            <div className="toolbox__col-header">
              <span className="toolbox__col-tag">WHAT I'VE ACTUALLY USED IT FOR</span>
            </div>

            <div className="toolbox__terminal">
              <div className="toolbox__terminal-header">
                <span className="toolbox__terminal-dot red"></span>
                <span className="toolbox__terminal-dot yellow"></span>
                <span className="toolbox__terminal-dot green"></span>
                <span className="toolbox__terminal-title">tech_inspector.sh</span>
              </div>

              <div className="toolbox__terminal-body">
                {!activeTech ? (
                  <div className="toolbox__terminal-default">
                    <p className="toolbox__cli-prompt">&gt; SELECT A TECHNOLOGY</p>
                    <p className="toolbox__cli-prompt">&gt; TO VIEW DETAILS<span className="toolbox__cli-cursor">_</span></p>
                  </div>
                ) : (
                  <div className="toolbox__terminal-content">
                    {/* SECTION 1: TECHNOLOGY NAME */}
                    <div className="toolbox__term-block">
                      <span className="toolbox__term-label">// TECHNOLOGY</span>
                      <h3 className="toolbox__term-title">{activeTech.name}</h3>
                    </div>

                    {/* SECTION 2: CATEGORY */}
                    <div className="toolbox__term-block">
                      <span className="toolbox__term-label">CATEGORY</span>
                      <p className="toolbox__term-val accent">{activeTech.category}</p>
                    </div>

                    {/* SECTION 3: LIBRARIES / TOOLS */}
                    {activeTech.libraries && activeTech.libraries.length > 0 && (
                      <div className="toolbox__term-block">
                        <span className="toolbox__term-label">LIBRARIES / TOOLS</span>
                        <p className="toolbox__term-val">
                          {activeTech.libraries.join(" · ")}
                        </p>
                      </div>
                    )}

                    {/* SECTION 4: USED IN PROJECTS */}
                    <div className="toolbox__term-block">
                      <span className="toolbox__term-label">USED IN</span>
                      {activeTech.projects && activeTech.projects.length > 0 ? (
                        <div className="toolbox__term-projects">
                          {activeTech.projects.map((proj) => (
                            <a
                              key={proj}
                              href={`/work/${proj}`}
                              className="toolbox__proj-badge"
                            >
                              {proj.toUpperCase()}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="toolbox__term-val muted">CORE STACK / GENERAL ENGINEERING</p>
                      )}
                    </div>

                    {/* SECTION 5: DESCRIPTION */}
                    {activeTech.description && (
                      <div className="toolbox__term-block toolbox__term-block--desc">
                        <p className="toolbox__term-desc">{activeTech.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
