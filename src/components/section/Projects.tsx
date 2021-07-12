export const Projects = () => {
  const projects = [
    {
      title: "MERN's Point and Click Adventure",
      deployLink: "https://merns-adventure.netlify.app/",
      repositoryLink: "https://github.com/JakeOTooleDev/merns-adventure",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={`project-${index}`}>
          <h3>{project.title}</h3>
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
