import avatar from "./avatar.png";

import styles from "./Intro.module.scss";

export const Intro = () => (
  <section className={styles.intro}>
    <img className={styles.avatar} src={avatar} alt="Jake O'Toole" />
    <div className={styles.headline}>
      <span className={styles.highlight}>Howdy, I'm Jake,</span> a certified
      full-stack web developer.
    </div>
  </section>
);
export default Intro;
