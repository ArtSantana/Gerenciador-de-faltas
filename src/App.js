import React from "react";
import { CursosProvider } from "./CursosContext";
import "./App.css";
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
    <CursosProvider>
      <div className="App">
        <Router>
          <nav className="navbar">
          <h3 className="title">Gerenciador Faltas</h3>
            <ul className="nav-links">

              <Link className="calLink" to="/Calendario">
                <li>Calendario</li>
              </Link>
              <Link className="faltasLink" to="/Faltas">
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
    </CursosProvider>
  );
}

export default App;
