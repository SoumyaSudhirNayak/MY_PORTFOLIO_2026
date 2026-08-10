import { profile } from "../../data/profile";
import { useInView } from "../../hooks/useUtils";
import { Mail, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../components/icons/BrandIcons";
import "./Contact.css";

export default function Contact() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className={`contact__content ${inView ? "visible" : ""}`}>
          <span className="contact__label">HAVE AN IDEA?</span>

          <h2 className="contact__headline">
            <span className="contact__word">LET'S</span>
            <span className="contact__word contact__word--accent">BUILD.</span>
          </h2>

          <p className="contact__text">
            Have a project, problem or idea worth exploring? Let's build something useful.
          </p>

          <div className="contact__actions">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
              id="contact-cta"
            >
              START A CONVERSATION
              <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a
              href={profile.resume}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              download="SOUMYA_SUDHIR_NAYAK_RESUME.pdf"
              id="download-resume"
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </a>
          </div>

          <div className="contact__socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="contact__social"
              aria-label="Email"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
