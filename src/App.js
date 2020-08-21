import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./routes/HomePage";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
