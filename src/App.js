import React from "react";
import "./App.css";
import Disciplinas from "./Disciplinas";
import Graphs from "./Graphs";
import Calendary from "./Calendary";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          
          <ul className="nav-links">
          <h3 className="nav-links">Gerenciador Faltas</h3>
            <Link to="/Calendario">
              <li>Calendario</li>
            </Link>
            <Link to="/Faltas">
              <li>Faltas</li>
            </Link>
          </ul>
        </nav>

        <Switch>
          <Route path="/Calendario" exact={true} component={Calendary} />
          <Route path="/Faltas" exact={true} component={Graphs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
