import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoutes({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  localStorage.setItem("lastPath", rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}