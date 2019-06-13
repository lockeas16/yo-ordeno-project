import React from "react";
import { NavLink } from "react-router-dom";
import { FaAppleAlt, FaPencilAlt, FaTable } from "react-icons/fa";

const SideBar = () => (
  <section
    className="uk-section uk-padding-remove-vertical uk-flex uk-flex-middle"
    uk-height-viewport="offset-top: true; expand: true"
  >
    <div>
      <div>
        <span
          className="uk-icon-button"
          uk-icon="icon:menu; ratio: 3"
          uk-toggle="target: #offcanvas-slide"
        />
      </div>

      <div id="offcanvas-slide" uk-offcanvas="mode: push; overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <span
            uk-icon="icon: arrow-left; ratio: 2"
            className="uk-offcanvas-close uk-link-heading"
          />
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li>
              <NavLink to="/dashboard/dishes">
                <span className="uk-margin-small-right uk-icon">
                  <FaAppleAlt />
                </span>
                Platillos
              </NavLink>
            </li>
            <li className="uk-nav-divider" />
            <li className="uk-parent">
              <NavLink to="/dashboard/newdish">
                <span className="uk-margin-small-right uk-icon">
                  <FaPencilAlt />
                </span>
                Alta platillo
              </NavLink>
            </li>
            <li className="uk-nav-divider" />
            <li className="uk-parent">
              <NavLink to="/dashboard/tables">
                <span className="uk-margin-small-right uk-icon">
                  <FaTable />
                </span>
                Mesas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default SideBar;
