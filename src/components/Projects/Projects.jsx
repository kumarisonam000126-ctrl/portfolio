import "./Projects.css";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">

      <h1 className="projects-title">
        My Projects
      </h1>

      <div className="project-grid">

        {projects.map((project, index) => (
          <div className="card" key={index}>

            <h2>{project.title}</h2>

            <p className="tech">
              {project.tech}
            </p>

            <div className="buttons">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <button className="live-btn">
                  Live Demo
                </button>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button className="github-btn">
                  GitHub
                </button>
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;