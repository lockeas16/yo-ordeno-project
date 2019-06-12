import React, { Component } from "react";
import SideBar from "./SideBar";
import Dish from "./Dish";
import MenuArrow from "../../common/MenuArrow";

class DashboardContainer extends Component {
  state = {};
  render() {
    return (
      <div className="uk-flex uk-flex-row">
        <MenuArrow
          onClick={e => {
            console.log(e.target);
            e.target.classList.toggle("bt-menu-open");
          }}
        >
          <span />
        </MenuArrow>
        <SideBar />
        {/* aqui va router */}
        <Dish />
      </div>
    );
  }
}

export default DashboardContainer;
