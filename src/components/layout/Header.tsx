import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
