import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/header.component";

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  </div>
);

export default App;
