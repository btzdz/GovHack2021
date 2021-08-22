import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Bar from "./components/AppBar";
import Front from "./components/Front";
import Locations from "./components/Locations";
import LoggedFront from "./components/LoggedFront";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Bar />
        <Switch>
          <Route exact path="/">
            <Front/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <LoggedFront />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
