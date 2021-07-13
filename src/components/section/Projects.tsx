export const Projects = () => {
  const projects = [
    {
      title: "MERN's Point and Click Adventure",
      deployLink: "https://merns-adventure.netlify.app/",
      repositoryLink: "https://github.com/JakeOTooleDev/merns-adventure",
      description:
        "Point and click adventure game created with common web techologies including React and MongoDB Realm.",
    },
    {
      title: "Survive the Grid",
      deployLink: "https://survive-the-grid.firebaseapp.com/",
      repositoryLink: "https://github.com/SirPotatoIV/survive-the-grid",
      description:
        "2D Battle Royale created with React and Firestore. Currently you can play against AI and spectate other games.",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={`project-${index}`}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            <li>
              <a href={project.deployLink} target="_blank" rel="noreferrer">
                Deployed Application
              </a>
            </li>
            <li>
              <a href={project.repositoryLink} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};
export default Projects;
