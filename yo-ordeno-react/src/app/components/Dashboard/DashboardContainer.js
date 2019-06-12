import React, { Component } from "react";
import SideBar from "./SideBar";
import Dish from "./Dish";

class DashboardContainer extends Component {
  state = {};
  render() {
    return (
      <div className="uk-flex uk-flex-row">
        <SideBar />
        {/* aqui va router */}
        <Dish />
      </div>
    );
  }
}

export default DashboardContainer;
