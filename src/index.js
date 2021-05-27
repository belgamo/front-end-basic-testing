import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./login/login.component";
import Dashboard from "./dashboard/dashboard.component";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
