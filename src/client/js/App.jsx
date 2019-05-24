import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/header.component";

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  </div>
);

export default App;
