import { useState } from "react";
import { getProjectsByCategory } from "../../data/projects";
import { useInView } from "../../hooks/useUtils";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../../components/icons/BrandIcons";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import "./SelectedWork.css";

const filterCategories = ["ALL", "Full Stack", "AI/ML", "Backend", "Data", "3D / GIS"];

function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.image || project.thumbnail;

  return (
    <div className={`project-card project-card--${project.type}`}>
      {/* Clickable Image Visual Area */}
      <Link
        to={`/work/${project.id}`}
        className="project-card__visual-link"
        aria-label={`View ${project.title} case study`}
      >
        <div className="project-card__visual">
          <div className="project-card__image-wrapper">
            <div
              className="project-card__image"
              style={{ background: getProjectGradient(project.id) }}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="project-card__img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              ) : null}
              <span className="project-card__image-title">
                {project.shortTitle || project.title}
              </span>
            </div>
          </div>
          <div className="project-card__overlay">
            <span className="project-card__view">VIEW ↗</span>
          </div>
        </div>
      </Link>

      {/* Info Section */}
      <div className="project-card__info">
        <div className="project-card__meta">
          <span className="project-card__number">{project.number}</span>
          <span className="project-card__year">{project.year}</span>
          {project.status === "ongoing" && (
            <span className="project-card__status">
              <span className="status-dot"></span> ONGOING
            </span>
          )}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>

        <div className="project-card__techs">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tag">+{project.technologies.length - 4}</span>
          )}
        </div>

        {project.achievement && (
          <div className="project-card__achievement">
            🏆 <span className="project-card__achievement-title">{project.achievement.title}</span>
            {project.achievement.organization && (
              <span className="project-card__achievement-org">
                {" — "}
                {project.achievement.organization}
              </span>
            )}
          </div>
        )}

        <div className="project-card__links">
          <Link to={`/work/${project.id}`} className="btn btn-ghost">
            VIEW CASE STUDY <span className="btn-arrow">→</span>
          </Link>
          {project.visibility !== "restricted" && project.visibility !== "private" && (
            <>
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link-icon"
                  aria-label={`${project.title} GitHub`}
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link-icon"
                  aria-label={`${project.title} Live`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function getProjectGradient(id: string): string {
  const gradients: Record<string, string> = {
    statxtract: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)",
    driftseal: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)",
    haemolink: "linear-gradient(135deg, #450A0A 0%, #7F1D1D 50%, #991B1B 100%)",
    "outbreak-sentinal": "linear-gradient(135deg, #064E3B 0%, #047857 50%, #059669 100%)",
    pediascape: "linear-gradient(135deg, #78350F 0%, #92400E 50%, #B45309 100%)",
    gramscape: "linear-gradient(135deg, #0C4A6E 0%, #0369A1 50%, #0284C7 100%)",
    "illegal-construction": "linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)",
  };
  return gradients[id] || "linear-gradient(135deg, #18181B 0%, #27272A 50%, #3F3F46 100%)";
}

export default function SelectedWork() {
  const [ref, inView] = useInView(0.05);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = getProjectsByCategory(activeFilter);

  return (
    <section className="selected-work section" id="selected-work" ref={ref}>
      <div className="container">
        <span className="section-label">// PROJECTS</span>
        <h2 className="section-title">SELECTED WORK</h2>
        <p className="section-subtitle">Systems, products and experiments I've built.</p>

        <div className={`sw__filters ${inView ? "visible" : ""}`}>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              className={`sw__filter ${activeFilter === cat ? "sw__filter--active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`sw__grid ${inView ? "visible" : ""}`}>
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="sw__grid-item"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
