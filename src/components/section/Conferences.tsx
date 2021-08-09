import mernImg from "./mernSm.png";

import styles from "./Conferences.module.scss";

export const Conferences = () => {
  const conferences = [
    {
      alt: "MERN's Point and Click Adventure",
      conferenceTitle: "MongoDB.Live 2021",
      conferenceSubtitle: "Web & Back End Development Track",
      presentationLink: "https://www.youtube.com/watch?v=F-_l8nsnzsg",
      deployLink: "https://merns-adventure.netlify.app/",
      description:
        "How to make a Point and click adventure game utilizing common web techologies including React and MongoDB Realm.",
      id: "mernsAdventure",
      repositoryLink: "https://github.com/JakeOTooleDev/merns-adventure",
      screenshot: mernImg,
      title: "MERN's Point and Click Adventure",
    },
  ];

  return (
    <section className={styles.conferenceSection} id="conferences">
      <h2>Conferences</h2>
      <div className={styles.conferenceCollection}>
        {conferences.map((conference, index) => (
          <div id={conference.id} className={styles.conference} key={`conference-${index}`}>
            <h3>{conference.conferenceTitle}</h3>
            <h4>{conference.conferenceSubtitle}</h4>
            <h5>{conference.title}</h5>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/F-_l8nsnzsg?list=RDCMUCK_m2976Yvbx-TyDLw7n1WA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className={styles.description}>{conference.description}</p>
            <ul className={styles.conferenceLinks}>
              <li>
                <a href={conference.presentationLink} target="_blank" rel="noreferrer">
                  Presentation
                </a>
              </li>
              <li>
                <a href={conference.deployLink} target="_blank" rel="noreferrer">
                  App
                </a>
              </li>
              <li>
                <a href={conference.repositoryLink} target="_blank" rel="noreferrer">
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
export default Conferences;
