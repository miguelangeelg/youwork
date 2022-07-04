import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import {Login} from "../pages/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function AppRouter() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            isAuthenticated={user.logged}
            path="/login"
            component={Login}
          />
          <PrivateRoutes
            isAuthenticated={user.logged}
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
}
