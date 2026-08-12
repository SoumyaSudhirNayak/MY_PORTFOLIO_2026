import { useState, useEffect } from "react";
import type { Project } from "../../types/project";
import "./CaseStudyTerminal.css";

interface CaseStudyTerminalProps {
  project: Project;
}

export default function CaseStudyTerminal({ project }: CaseStudyTerminalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullPrompt = `INITIALIZING METADATA INSPECTOR... OK`;

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsTypingComplete(false);

    const timer = setInterval(() => {
      if (index < fullPrompt.length) {
        setDisplayedText(fullPrompt.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [project.id]);

  const terminalFileName = `${project.id.toLowerCase().replace(/[^a-z0-9]/g, "_")}_inspector.sh`;

  return (
    <div className="cs-terminal">
      {/* Terminal Window Header */}
      <div className="cs-terminal__header">
        <div className="cs-terminal__controls">
          <span className="cs-terminal__dot red"></span>
          <span className="cs-terminal__dot yellow"></span>
          <span className="cs-terminal__dot green"></span>
        </div>
        <span className="cs-terminal__title">{terminalFileName}</span>
      </div>

      {/* Terminal Body */}
      <div className="cs-terminal__body">
        {/* Animated Initializing Header */}
        <div className="cs-terminal__init-line">
          <span className="cs-terminal__prompt-symbol">&gt; </span>
          <span className="cs-terminal__init-text">{displayedText}</span>
          {!isTypingComplete && <span className="cs-terminal__cursor">_</span>}
        </div>

        {isTypingComplete && (
          <div className="cs-terminal__content">
            {/* TECH STACK */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="cs-terminal__block">
                <span className="cs-terminal__label">&gt; TECH_STACK</span>
                <p className="cs-terminal__value accent">
                  {project.technologies.join(" · ")}
                </p>
              </div>
            )}

            {/* ROLE */}
            {project.role && (
              <div className="cs-terminal__block">
                <span className="cs-terminal__label">&gt; ROLE</span>
                <p className="cs-terminal__value">{project.role}</p>
              </div>
            )}

            {/* CATEGORIES */}
            {project.category && project.category.length > 0 && (
              <div className="cs-terminal__block">
                <span className="cs-terminal__label">&gt; CATEGORIES</span>
                <div className="cs-terminal__tags cs-terminal__tags--horizontal">
                  {project.category.map((cat) => (
                    <span key={cat} className="cs-terminal__tag">
                      {cat.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* DEPLOYMENT & METADATA */}
            <div className="cs-terminal__block cs-terminal__block--meta">
              <span className="cs-terminal__label">&gt; PROJECT_STATUS</span>
              <p className="cs-terminal__meta-line">
                <span className="cs-terminal__meta-key">YEAR:</span> {project.year}
                <span className="cs-terminal__meta-sep">|</span>
                <span className="cs-terminal__meta-key">STATUS:</span> {(project.status || "completed").toUpperCase()}
              </p>
            </div>

            {/* Blinking Cursor Prompt Line */}
            <div className="cs-terminal__cli-end">
              <span className="cs-terminal__prompt-symbol">&gt; </span>
              <span className="cs-terminal__cli-ready">READY</span>
              <span className="cs-terminal__cursor cs-terminal__cursor--blinking">_</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
