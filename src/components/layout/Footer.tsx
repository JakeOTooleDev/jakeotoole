import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <ul>
        <li>
          <a href="https://github.com/JakeOTooleDev" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jake-o-toole/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jakeotooledev" target="_blank">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
