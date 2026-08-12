import { profile } from "../../data/profile";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import { getLenis } from "../SmoothScroll/SmoothScroll";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo" onClick={handleScrollToTop} title="Back to top">
              SOUMYA SUDHIR NAYAK
            </span>
            <p className="footer__positioning">{profile.positioning}</p>
          </div>

          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <button className="footer__scroll-top" onClick={handleScrollToTop} aria-label="Scroll to top" title="Scroll to top">
              <ArrowUp size={16} />
            </button>
          </div>

          <div className="footer__copyright">
            © {currentYear} {profile.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
