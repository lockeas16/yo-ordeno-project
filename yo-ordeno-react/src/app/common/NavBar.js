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
            {!_id ? (
              <LoginSignupNav />
            ) : (
              <LoggedNav {...userData} handleLogout={handleLogout}/>
              // <React.Fragment>
              //   <button
              //     className="uk-button uk-button-default uk-border-pill"
              //     type="button"
              //   >
              //     {email}
              //   </button>
              //   <div uk-dropdown="mode: click" id="drop-menu">
              //     <ul className="uk-nav uk-dropdown-nav uk-nav-default uk-nav-center">
              //       <li>
              //         <div className="uk-card uk-card-small">
              //           <div className="uk-card-media-top">
              //             <img
              //               className="uk-border-circle imageCard"
              //               src={image || blankProfile}
              //               alt="profileImage"
              //             />
              //           </div>
              //           <div className="uk-card-body">
              //             <h3 className="uk-card-title">{`${name} ${lastname}`}</h3>
              //           </div>
              //         </div>
              //       </li>
              //       <li>
              //         <Link to="/profile" onClick={()=>{
              //           UIkit.dropdown("#drop-menu").hide();
              //         }}>Mi perfil</Link>
              //       </li>
              //       <li>
              //         <Link to="/dashboard/dishes" onClick={()=>{
              //           UIkit.dropdown("#drop-menu").hide();
              //         }}>Dashboard</Link>
              //       </li>
              //       <li className="uk-nav-divider" />
              //       <li onClick={handleLogout}>
              //         <a className="lobster-family">Cerrar sesion</a>
              //       </li>
              //     </ul>
              //   </div>
              // </React.Fragment>
            )}
          </div>
          <Login setUser={setUser} history={history}/>
        </nav>
      </div>
    </section>
  );
};

export default withRouter(NavBar);
