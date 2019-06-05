import React from "react";
import { Link } from "react-router-dom";
import yoOrdenoLogo from "../assets/logo_transparent-crop.png";
import Login from "../components/Auth/Login";

const NavBar = ({ _id, email, handleLogout }) => {
  return (
    <section className="uk-section uk-section-primary uk-section-xsmall uk-padding-remove-vertical">
      <div className="uk-container uk-container-expand">
        <nav
          className="uk-navbar-container uk-navbar-transparent"
          uk-navbar="true"
        >
          <div className="uk-navbar-left">
            <ul className="uk-list uk-margin-remove">
              <li>
                <Link to="/">
                  <img
                    className="logo-filter"
                    src={yoOrdenoLogo}
                    width="200px"
                    alt="yo-ordeno-logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            {!_id ? (
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="#modal-login" uk-toggle="target: #modal-login">
                    <Login />
                    <span className="lobster-family uk-text-large">
                      Iniciar sesion
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span className="lobster-family uk-text-large">
                      Registro
                    </span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="uk-navbar-nav">
                <li onClick={handleLogout}>
                  <a href="#">Cerrar sesion</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
