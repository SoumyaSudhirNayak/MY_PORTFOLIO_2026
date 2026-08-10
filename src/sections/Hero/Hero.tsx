import { useState, useEffect, useRef, useCallback } from "react";
import { profile } from "../../data/profile";
import { useInView, useReducedMotion, useMediaQuery } from "../../hooks/useUtils";
import HeroTerminal from "../../components/HeroTerminal/HeroTerminal";
import gsap from "gsap";
import { getLenis } from "../../components/SmoothScroll/SmoothScroll";
import "./Hero.css";

export default function Hero() {
  const [, inView] = useInView(0.1);
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loadingStage, setLoadingStage] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [portfolioGlitchActive, setPortfolioGlitchActive] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const portfolioTextRef = useRef<HTMLDivElement>(null);

  // Entrance sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setLoadingStage(1), 200),
      setTimeout(() => setLoadingStage(2), 600),
      setTimeout(() => setLoadingStage(3), 900),
      setTimeout(() => setLoadingStage(4), 1200),
      setTimeout(() => setLoadingStage(5), 1500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Ambient glitch for SUDHIR heading (More frequent: every 1.2s - 2.2s)
  const triggerGlitch = useCallback(() => {
    if (reducedMotion || isMobile) return;
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 250);
  }, [reducedMotion, isMobile]);

  useEffect(() => {
    if (reducedMotion || isMobile) return;
    const interval = setInterval(() => {
      triggerGlitch();
    }, 1200 + Math.random() * 1000);
    return () => clearInterval(interval);
  }, [triggerGlitch, reducedMotion, isMobile]);

  // Fast subtle digital glitch for giant PORTFOLIO background text (More frequent: every 1.8s - 3.3s)
  const triggerPortfolioGlitch = useCallback(() => {
    if (reducedMotion || isMobile) return;
    setPortfolioGlitchActive(true);
    setTimeout(() => setPortfolioGlitchActive(false), 120);
  }, [reducedMotion, isMobile]);

  useEffect(() => {
    if (reducedMotion || isMobile) return;
    const interval = setInterval(() => {
      triggerPortfolioGlitch();
    }, 1800 + Math.random() * 1500);
    return () => clearInterval(interval);
  }, [triggerPortfolioGlitch, reducedMotion, isMobile]);

  // Mouse Parallax for Left Identity (Subtle max 3-5px, 1-2deg rotation) & PORTFOLIO text
  useEffect(() => {
    if (reducedMotion || !heroRef.current) return;

    const heroEl = heroRef.current;
    const textEl = portfolioTextRef.current;
    const identityEl = identityRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const xRel = (e.clientX - rect.left) / rect.width - 0.5;
      const yRel = (e.clientY - rect.top) / rect.height - 0.5;

      // PORTFOLIO background watermark parallax
      if (textEl) {
        gsap.to(textEl, {
          x: -xRel * 14,
          y: -yRel * 10,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      // Left Identity Grouped Parallax (Subtle: max 3-4px shift, 1-1.5 deg tilt)
      if (identityEl) {
        gsap.to(identityEl, {
          x: xRel * 4,
          y: yRel * 3,
          rotateY: xRel * 1.5,
          rotateX: -yRel * 1,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const handleMouseLeave = () => {
      if (textEl) {
        gsap.to(textEl, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      if (identityEl) {
        gsap.to(identityEl, {
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    heroEl.addEventListener("mousemove", handleMouseMove, { passive: true });
    heroEl.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      heroEl.removeEventListener("mousemove", handleMouseMove);
      heroEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reducedMotion]);

  const scrollToWork = () => {
    const el = document.querySelector("#selected-work");
    if (el) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -20, duration: 1.1 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Loading Overlay */}
      <div className={`hero__loader ${loadingStage >= 1 ? "hero__loader--done" : ""}`}>
        <div className="hero__loader-text">INITIALIZING EXPERIENCE</div>
        <div className="hero__loader-line"></div>
      </div>

      <div className="hero__content container">
        {/* Left: Identity */}
        <div
          className={`hero__identity ${loadingStage >= 3 ? "hero__identity--visible" : ""}`}
          ref={identityRef}
        >
          <div className="hero__hello">
            <span className="hero__hello-text">HELLO WORLD!, I'M</span>
          </div>

          <h1 className={`hero__name ${glitchActive ? "glitch active" : "glitch"}`} data-text={profile.brand}>
            {profile.brand}
          </h1>

          <p className="hero__fullname">{profile.name}</p>

          <div className={`hero__role ${loadingStage >= 4 ? "hero__role--visible" : ""}`}>
            <span className="hero__role-line">FULL-STACK ENGINEER</span>
            <span className="hero__role-separator">·</span>
            <span className="hero__role-line">AI/ML · BACKEND · DESIGNER</span>
          </div>

          <div className={`hero__cta ${loadingStage >= 5 ? "hero__cta--visible" : ""}`}>
            <button onClick={scrollToWork} className="btn btn-primary" id="hero-cta">
              EXPLORE MY WORK
              <span className="btn-arrow">↓</span>
            </button>
          </div>
        </div>

        {/* Right: Glass Terminal */}
        <div className={`hero__terminal-wrapper ${loadingStage >= 4 ? "hero__terminal-wrapper--visible" : ""}`}>
          <HeroTerminal />
        </div>
      </div>

      {/* Background Typography with Hover Parallax & Fast Glitch */}
      <div
        className={`hero__bg-text ${loadingStage >= 3 ? "hero__bg-text--visible" : ""} ${inView ? "" : "hero__bg-text--scrolled"}`}
        ref={portfolioTextRef}
      >
        <span className={`hero__bg-portfolio ${portfolioGlitchActive ? "hero__bg-portfolio--glitch" : ""}`}>
          PORTFOLIO
        </span>
      </div>
    </section>
  );
}
