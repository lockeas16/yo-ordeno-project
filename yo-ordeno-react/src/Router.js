import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import AuthFormContainer from "./app/components/Auth/AuthFormContainer";
// import ProfileContainer from "./components/profile/ProfileContainer";

const Router = () => (
  <Switch>
    <Route exact path="/" render={props => <Landing {...props} />} />
    <Route
      exact
      path="/signup"
      render={props => <AuthFormContainer {...props} />}
    />
    {/*
    <Route
      exact
      path="/profile"
      render={props => <ProfileContainer {...props} />}
    /> */}
  </Switch>
);

export default Router;
