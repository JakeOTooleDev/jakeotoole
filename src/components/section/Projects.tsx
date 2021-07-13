import mernImg from "./mernSm.png";
import surviveImg from "./surviveTheGridSm.png";

import styles from "./Projects.module.scss";

export const Projects = () => {
  const projects = [
    {
      alt: "Outside scene from MERN's Point and Click Adventure",
      deployLink: "https://merns-adventure.netlify.app/",
      description:
        "Point and click adventure game created with common web techologies including React and MongoDB Realm.",
      id: "mernsAdventure",
      repositoryLink: "https://github.com/JakeOTooleDev/merns-adventure",
      screenshot: mernImg,
      tech: "React / MongoDB Realm",
      title: "MERN's Point and Click Adventure",
    },
    {
      alt: "Game view from Survive the Grid",
      deployLink: "https://survive-the-grid.firebaseapp.com/",
      description:
        "2D Battle Royale created with React and Firestore. Currently you can play against AI and spectate other games.",
      id: "surviveTheGrid",
      repositoryLink: "https://github.com/SirPotatoIV/survive-the-grid",
      screenshot: surviveImg,
      tech: "React / Firebase",
      title: "Survive the Grid",
    },
  ];

  return (
    <section className={styles.projectSection} id="projects">
      <h2>Projects</h2>
      <div className={styles.projectCollection}>
        {projects.map((project, index) => (
          <div
            id={project.id}
            className={styles.project}
            key={`project-${index}`}
          >
            <h3>{project.title}</h3>
            <img
              src={project.screenshot}
              alt={project.alt}
              aria-hidden="true"
            />
            <p>{project.tech}</p>
            <p>{project.description}</p>
            <ul className={styles.projectLinks}>
              <li>
                <a href={project.deployLink} target="_blank" rel="noreferrer">
                  App
                </a>
              </li>
              <li>
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
