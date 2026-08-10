import { profile } from "../../data/profile";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">SOUMYA SUDHIR NAYAK</span>
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
          </div>

          <div className="footer__copyright">
            © {currentYear} {profile.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
