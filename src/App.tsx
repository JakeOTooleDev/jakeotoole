import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import styles from "./App.module.scss";

import "./reset.scss";
import "./font.scss";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        {/* ---- Router start ---- */}
        <div className={styles.page}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          {/* --- Router end ---- */}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
