import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import AuthFormContainer from "./app/components/Auth/AuthFormContainer";
import ConfirmationContainer from "./app/components/Auth/ConfirmationContainer";
import ProfileContainer from "./app/components/Profile/ProfileContainer";
import DashboardContainer from "./app/components/Dashboard/DashboardContainer";
import OrderContainer from "./app/components/Order/OrderContainer";

const Router = ({ user, setUser }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Landing {...props} setUser={setUser} />}
    />
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
    <Route
      path="/restaurant/:restaurant/table/:id"
      render={props => <OrderContainer {...props} />}
    />
    {/* <Route
      path="/kitchen/:restaurant/table/:id"
      render={props => <KitchenContainer {...props} />}
    /> */}
  </Switch>
);

export default Router;
