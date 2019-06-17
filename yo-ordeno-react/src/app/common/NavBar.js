import React from "react";
import { Link, withRouter } from "react-router-dom";
import yoOrdenoLogo from "../assets/logo_transparent-crop.png";
import Login from "../components/Auth/Login";
import LoginSignupNav from "./LoginSignupNav";
import LoggedNav from "./LoggedNav";

// prettier-ignore
const NavBar = ({ _id, email, name,image, lastname, handleLogout, setUser, history }) => {
  const userData = {email, name, image, lastname}
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
            {!_id ? ( <LoginSignupNav /> ) : ( <LoggedNav {...userData} handleLogout={handleLogout}/>)}
          </div>
          <Login setUser={setUser} history={history}/>
        </nav>
      </div>
    </section>
  );
};

export default withRouter(NavBar);
