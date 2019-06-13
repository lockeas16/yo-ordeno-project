import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideBar from "./SideBar";
import Dishes from "./Dishes";
import DishForm from "./DishForm";

class DashboardContainer extends Component {
  render() {
    return (
      <div className="uk-flex uk-flex-row">
        <SideBar />
        <Route
          exact
          path={`${this.props.match.path}/`}
          render={props => <Dishes {...props} />}
        />
        <Route
          exact
          path={`${this.props.match.path}/dishes`}
          render={props => <Dishes {...props} />}
        />
        <Route
          exact
          path={`${this.props.match.path}/newdish`}
          render={props => <DishForm {...props} />}
        />
      </div>
    );
  }
}

export default DashboardContainer;
