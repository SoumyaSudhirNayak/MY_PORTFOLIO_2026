import { useState, useEffect, useRef } from "react";
import { terminalHeader, terminalLines } from "../../data/heroTerminal";
import { useReducedMotion } from "../../hooks/useUtils";
import gsap from "gsap";
import "./HeroTerminal.css";

export default function HeroTerminal() {
  const reducedMotion = useReducedMotion();
  const terminalRef = useRef<HTMLDivElement>(null);

  const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Typing Loop Sequence
  useEffect(() => {
    if (reducedMotion) {
      setDisplayedLines(terminalLines.slice(0, 3));
      return;
    }

    const currentFullLine = terminalLines[currentLineIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setCurrentCharIndex(0);

        // Check if we reached end of sequence
        const isEnd = currentLineIndex === terminalLines.length - 1;

        if (isEnd) {
          // Reset cleanly back to beginning
          setCurrentLineIndex(0);
          setDisplayedLines([""]);
        } else {
          // Advance to next line
          const nextIdx = currentLineIndex + 1;
          setCurrentLineIndex(nextIdx);
          setDisplayedLines((prev) => {
            const next = [...prev, ""];
            return next.length > 3 ? next.slice(next.length - 3) : next;
          });
        }
      }, 2000);

      return () => clearTimeout(pauseTimer);
    }

    if (currentCharIndex < currentFullLine.length) {
      const charTimer = setTimeout(() => {
        const nextCharIdx = currentCharIndex + 1;
        setCurrentCharIndex(nextCharIdx);

        const partialText = currentFullLine.slice(0, nextCharIdx);

        setDisplayedLines((prev) => {
          if (prev.length === 0) return [partialText];
          const copy = [...prev];
          copy[copy.length - 1] = partialText;
          return copy;
        });
      }, 35 + Math.random() * 20);

      return () => clearTimeout(charTimer);
    } else {
      // Finished typing line
      setIsPaused(true);
    }
  }, [currentLineIndex, currentCharIndex, isPaused, reducedMotion]);

  // Rigid 3D Terminal Parallax: Outer glass frame is transformed as ONE solid unit
  useEffect(() => {
    if (reducedMotion || !terminalRef.current) return;

    const termEl = terminalRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = termEl.getBoundingClientRect();
      const xRel = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
      const yRel = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);

      // Transform ONLY outer glass frame rigid body (max 3.5 deg tilt, 8px shift)
      gsap.to(termEl, {
        rotateY: xRel * 3.5,
        rotateX: -yRel * 3,
        x: xRel * 8,
        y: yRel * 6,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(termEl, {
        rotateY: 0,
        rotateX: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    termEl.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      termEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reducedMotion]);

  return (
    <div className="hero-terminal" ref={terminalRef}>
      {/* Attached Glass Reflection Highlight (Moves strictly with outer glass frame) */}
      <div className="hero-terminal__glass-highlight"></div>

      {/* Header */}
      <div className="hero-terminal__header">
        <span className="hero-terminal__title">{terminalHeader}</span>
        <div className="hero-terminal__divider"></div>
      </div>

      {/* Body / CLI content */}
      <div className="hero-terminal__body">
        {displayedLines.map((line, idx) => {
          const isLastLine = idx === displayedLines.length - 1;

          return (
            <div key={`${idx}-${line}`} className="hero-terminal__line">
              <span className="hero-terminal__prompt">&gt;&nbsp;</span>
              <span className="hero-terminal__text">{line}</span>
              {isLastLine && !reducedMotion && (
                <span className="hero-terminal__cursor">_</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
