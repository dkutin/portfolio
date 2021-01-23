import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Resume from "./Resume";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/resume" exact component={Resume} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
