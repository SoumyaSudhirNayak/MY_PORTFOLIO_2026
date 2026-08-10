import { useState, useEffect } from "react";
import { navItems, mobileNavItems } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useMediaQuery } from "../../hooks/useUtils";
import { Menu, X } from "lucide-react";
import { getLenis } from "../SmoothScroll/SmoothScroll";
import "./Navigation.css";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(el as HTMLElement, { offset: -20, duration: 1.1 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} id="main-nav">
        <div className="nav__inner container">
          <a href="#hero" className="nav__brand" onClick={() => handleNavClick("#hero")}>
            SOUMYA SUDHIR NAYAK
          </a>

          <div className="nav__right">
            {!isMobile && (
              <div className="nav__links">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav__link link-underline"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            {isMobile && (
              <button
                className="nav__menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                id="nav-menu-toggle"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__content">
          <div className="mobile-menu__links">
            {mobileNavItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-menu__link"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={(e) => {
                  if (!item.isExternal) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="mobile-menu__link-number">0{i + 1}</span>
                <span className="mobile-menu__link-text">{item.label}</span>
              </a>
            ))}
          </div>
          <div className="mobile-menu__footer">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mobile-menu__social">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mobile-menu__social">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
