import React from "react";
import yoOrdenoLogo from "../assets/logo_transparent-crop.png";

const NavBarOrder = () => (
  <section className="uk-section uk-section-primary uk-section-xsmall uk-padding-remove-vertical">
    <div className="uk-container uk-container-expand">
      <nav
        className="uk-navbar-container uk-navbar-transparent"
        uk-navbar="true"
      >
        <div className="uk-navbar-center">
          <img
            className="logo-filter"
            src={yoOrdenoLogo}
            width="200px"
            alt="yo-ordeno-logo"
          />
        </div>
      </nav>
    </div>
  </section>
);

export default NavBarOrder;
