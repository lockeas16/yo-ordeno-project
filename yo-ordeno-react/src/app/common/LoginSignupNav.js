import React from "react";
import { Link } from "react-router-dom";

const LoginSignupNav = () => (
  <ul className="uk-navbar-nav">
    <li>
      <Link to="#modal-login" uk-toggle="target: #modal-login">
        <span className="lobster-family uk-text-large">Iniciar sesion</span>
      </Link>
    </li>
    <li>
      <Link to="/signup">
        <span className="lobster-family uk-text-large">Registro</span>
      </Link>
    </li>
  </ul>
);

export default LoginSignupNav;
