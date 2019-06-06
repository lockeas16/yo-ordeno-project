import React, { useState } from "react";
import { Link } from "react-router-dom";
import { notification, isValidEmail } from "../../utils/utils";
import { login } from "../../services/authService";
import UIkit from "uikit";

const handleSubmit = (e, auth, setUser) => {
  e.preventDefault();
  if (auth.email === "" || !isValidEmail(auth.email))
    return notification("Proporciona un correo electrónico válido");
  if (auth.password === "")
    return notification("Proporciona un password válido");
  onLogin(auth, setUser);
};

const handleChange = (e, auth, cb) => {
  // Create a new object to activate render of DOM
  const newAuthState = Object.assign({}, auth);
  const field = e.target.name;
  newAuthState[field] = e.target.value;
  cb(newAuthState);
};

const onLogin = (auth, setUser) => {
  login(auth)
    .then(({ user, token }) => {
      localStorage.setItem("USER", JSON.stringify(user));
      localStorage.setItem("TOKEN", token);
      setUser(user);
      UIkit.modal("#modal-login").hide();
    })
    .catch(({ error }) => {
      console.log(error);
      return notification(error.message);
    });
};

const Login = ({ setUser }) => {
  const [auth, setAuth] = useState({
    email: "",
    password: ""
  });
  return (
    <div id="modal-login" className="uk-flex-top" uk-modal="true">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-large">
        <button
          className="uk-modal-close-default"
          type="button"
          uk-close="true"
        />
        <form
          className="uk-form-stacked uk-width-1-1"
          onSubmit={e => {
            handleSubmit(e, auth, setUser);
          }}
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-margin uk-legend uk-text-center">
              Bienvenido!
            </legend>
            <div className="uk-margin inp-div">
              <input
                onChange={e => {
                  handleChange(e, auth, setAuth);
                }}
                className="uk-width-1-1 inp-form"
                type="email"
                placeholder="micorreo@dominio.com"
                name="email"
                id="emailLogin"
                value={auth.email}
                required
              />
              <label className="inp-label" htmlFor="emailLogin">
                Correo electrónico
              </label>
              <div className="underline" />
            </div>
            <div className="uk-margin inp-div">
              <input
                onChange={e => {
                  handleChange(e, auth, setAuth);
                }}
                className="uk-width-1-1 inp-form"
                type="password"
                placeholder="e.g. p4$22%W0_rD"
                name="password"
                id="passwordLogin"
                value={auth.password}
                required
              />
              <label className="inp-label" htmlFor="passwordLogin">
                Password
              </label>
              <div className="underline" />
            </div>
            <div className="uk-margin uk-flex uk-flex-center">
              <button className="uk-button uk-button-primary uk-width-1-2">
                Iniciar sesión
              </button>
            </div>
          </fieldset>
        </form>
        <div className="uk-text-center">
          <span>¿Aún no tienes una cuenta?&#8194;</span>
          <Link to="/signup" className="uk-link-text uk-text-primary">
            <span
              className="lobster-family uk-text-large"
              onClick={() => {
                UIkit.modal("#modal-login").hide();
              }}
            >
              Registrarme
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
