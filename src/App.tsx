import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import "./reset.scss";
import "./font.scss";
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* ---- Router start ---- */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* --- Router end ---- */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
