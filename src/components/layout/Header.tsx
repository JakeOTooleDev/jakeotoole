import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.home}>
      <Link to="/">Jake O'Toole</Link>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#conferences">Conferences</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
