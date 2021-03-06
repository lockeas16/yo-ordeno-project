/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import UIkit from "uikit";
import blankProfile from "../assets/default-profile-480x480.png";

const LoggedNav = ({ email, image, name, lastname, handleLogout }) => (
  <React.Fragment>
    <button
      className="uk-button uk-button-default uk-border-pill"
      type="button"
    >
      {email}
    </button>

    <div uk-dropdown="mode: click; pos: bottom-right" id="drop-menu">
      <ul className="uk-nav uk-dropdown-nav uk-nav-primary uk-nav-center">
        <li>
          <div className="uk-card uk-card-small">
            <div className="uk-card-media-top">
              <img
                className="uk-border-circle imageCard"
                src={image || blankProfile}
                alt="profileImage"
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{`${name} ${lastname}`}</h3>
            </div>
          </div>
        </li>
        <li>
          <Link
            to="/profile"
            onClick={() => {
              UIkit.dropdown("#drop-menu").hide();
            }}
          >
            Mi perfil
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/dishes"
            onClick={() => {
              UIkit.dropdown("#drop-menu").hide();
            }}
          >
            Dashboard
          </Link>
        </li>
        <li className="uk-nav-divider" />
        <li onClick={handleLogout}>
          <a className="lobster-family">Cerrar sesion</a>
        </li>
      </ul>
    </div>
    <span
      className="uk-margin-small-left"
      uk-icon="icon:menu; ratio: 2"
      uk-toggle="target: #offcanvas-slide"
    />
  </React.Fragment>
);

export default LoggedNav;
