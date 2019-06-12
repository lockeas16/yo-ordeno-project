import React from "react";
import { NavLink, Link } from "react-router-dom";

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
            <li className="uk-active">
              <NavLink to="/all-beers">
                <span className="uk-margin-small-right" uk-icon="icon: world" />
                Platillos
              </NavLink>
            </li>
            <li className="uk-nav-divider" />
            <li className="uk-parent">
              <NavLink to="/ranbom-beer">
                <span className="uk-margin-small-right" uk-icon="icon: bolt" />
                Alta platillo
              </NavLink>
            </li>
            <li className="uk-nav-divider" />
            <li className="uk-parent">
              <NavLink to="/tables">
                <span className="uk-margin-small-right" uk-icon="icon: plus" />
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
