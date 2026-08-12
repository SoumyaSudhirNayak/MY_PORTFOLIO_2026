import { useEffect, useRef, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export function getLenis(): Lenis | undefined {
  return (window as unknown as { lenisInstance?: Lenis }).lenisInstance;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Respect reduced motion settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      anchors: true,
    });

    lenisRef.current = lenis;
    (window as unknown as { lenisInstance?: Lenis }).lenisInstance = lenis;

    // Auto-resize Lenis on content/layout changes
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { lenisInstance?: Lenis }).lenisInstance;
    };
  }, []);

  // Handle route navigation and hash scrolling
  useEffect(() => {
    if (lenisRef.current) {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          lenisRef.current.scrollTo(target as HTMLElement, { offset: -20, duration: 1.1 });
        }
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
