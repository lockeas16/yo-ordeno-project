import React from "react";
import { Link } from "react-router-dom";
import yoOrdenoLogo from "../assets/logo_transparent-crop.png";
import Login from "../components/Auth/Login";
import blankProfile from "../assets/default-profile-480x480.png";

const NavBar = ({ _id, email, name, lastname, handleLogout, setUser }) => {
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
                    <span className="lobster-family uk-text-large">
                      Iniciar sesion
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <span className="lobster-family uk-text-large">
                      Registro
                    </span>
                  </Link>
                </li>
              </ul>
            ) : (
              <React.Fragment>
                <button
                  className="uk-button uk-button-default uk-border-pill"
                  type="button"
                >
                  {email}
                </button>
                <div uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav uk-nav-default uk-nav-center">
                    <li>
                      <div className="uk-card uk-card-small">
                        <div className="uk-card-media-top">
                          <img
                            className="uk-border-circle"
                            src={blankProfile}
                            width="80"
                            height="80"
                            alt="profileImage"
                          />
                        </div>
                        <div className="uk-card-body">
                          <h3 className="uk-card-title">{`${name} ${lastname}`}</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">Mi perfil</a>
                    </li>
                    <li>
                      <a href="#">Mi restaurante</a>
                    </li>
                    <li className="uk-nav-divider" />
                    <li onClick={handleLogout}>
                      <a className="lobster-family">Cerrar sesion</a>
                    </li>
                  </ul>
                </div>
              </React.Fragment>
            )}
          </div>
          <Login setUser={setUser} />
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
