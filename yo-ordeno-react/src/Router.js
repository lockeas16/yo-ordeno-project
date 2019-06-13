import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import AuthFormContainer from "./app/components/Auth/AuthFormContainer";
import ConfirmationContainer from "./app/components/Auth/ConfirmationContainer";
import ProfileContainer from "./app/components/Profile/ProfileContainer";
import DashboardContainer from "./app/components/Dashboard/DashboardContainer";

const Router = ({ user, setUser }) => (
  <Switch>
    <Route exact path="/" render={props => <Landing {...props} />} />
    <Route
      exact
      path="/signup"
      render={props => <AuthFormContainer {...props} />}
    />
    <Route
      exact
      path="/confirm/:token"
      render={props => <ConfirmationContainer {...props} />}
    />

    <Route
      exact
      path="/profile"
      render={props => (
        <ProfileContainer {...props} user={user} setUser={setUser} />
      )}
    />

    <Route
      path="/dashboard"
      render={props => (
        <DashboardContainer {...props} user={user} setUser={setUser} />
      )}
    />
  </Switch>
);

export default Router;
