import Projects from "../components/section/Projects";

import styles from "./Home.module.scss";

export const Home = () => (
  <>
    <section className={styles.intro}>
      <div className="headshot">Head shot here</div>
      <div className="headline">Headline here</div>
    </section>
    <Projects />
  </>
);
export default Home;
