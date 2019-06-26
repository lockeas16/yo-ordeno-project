import React from "react";
import { Link } from "react-router-dom";
import { FaAppleAlt, FaPlus, FaTable } from "react-icons/fa";
import UIkit from "uikit";

const SideBar = () => (
  <div id="offcanvas-slide" uk-offcanvas="overlay: true; flip: true">
    <div className="uk-offcanvas-bar uk-flex uk-flex-column">
      <span
        uk-icon="icon: arrow-right; ratio: 2"
        className="uk-offcanvas-close uk-link-heading"
      />
      <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
        <li>
          <Link
            to="/dashboard/dishes"
            onClick={() => {
              UIkit.offcanvas("#offcanvas-slide").hide();
            }}
          >
            <span className="uk-margin-small-right uk-icon">
              <FaAppleAlt />
            </span>
            Platillos
          </Link>
        </li>
        <li className="uk-nav-divider" />
        <li className="uk-parent">
          <Link
            to="/dashboard/newdish"
            onClick={() => {
              UIkit.offcanvas("#offcanvas-slide").hide();
            }}
          >
            <span className="uk-margin-small-right uk-icon">
              <FaPlus />
            </span>
            Alta platillo
          </Link>
        </li>
        <li className="uk-nav-divider" />
        <li className="uk-parent">
          <Link
            to="/dashboard/tables"
            onClick={() => {
              UIkit.offcanvas("#offcanvas-slide").hide();
            }}
          >
            <span className="uk-margin-small-right uk-icon">
              <FaTable />
            </span>
            Mesas
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
export default SideBar;
