import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <ul>
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
