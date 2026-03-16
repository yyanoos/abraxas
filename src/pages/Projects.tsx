import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <section className="page projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
