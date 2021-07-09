import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
