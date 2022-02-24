import style from "./About.module.scss";

export const About = () => (
  <section className={style.about} id="about">
    <h2>About</h2>
    <article>
      <h3>What I am currently up to:</h3>
      <p>
        I currently work as an Associate Software Engineer at <a href="https://www.nytimes.com/">The New York Times</a>.
        I am primarily focused on the front end utilizing React, GraphQL, and much more.
      </p>
    </article>
    <article>
      <h3>What I am currently working on:</h3>
      <ul>
        <li>
          SVG Animation: Utilizing in my project <a href="#mernsAventure">MERN's Point and Click Adventure</a>.
          Following the FrontEnd Masters{" "}
          <a href="https://frontendmasters.com/courses/svg-essentials-animation/">SVG Workshop</a> by Sarah Drasner
        </li>
        <li>
          MongoDB Realm: Utlizing in my project <a href="#mernsAventure">MERN's Point and Click Adventure</a>. Following
          MongoDB Realm <a href="https://docs.mongodb.com/realm/web/">documentation</a> focused on the Web SDK.
        </li>
      </ul>
    </article>
  </section>
);
export default About;
