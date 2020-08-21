import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginPage from "./routes/LoginPage";
import HomePage from "../src/routes/HomePage";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={LoginPage} />
        <Route exact path={"/home"} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
