import React, { useState } from "react";
import { pwdValidator } from "../../utils/utils";

const AuthFormContainer = () => {
  const [validPassword, setvalidPassword] = useState(true);
  return (
    <div uk-height-viewport="offset-top: true; expand: true">
      <section
        className="uk-section uk-section-muted"
        uk-height-viewport="expand: true"
      >
        <div className="uk-container uk-container-xsmall uk-flex uk-flex-center">
          <form className="uk-form-stacked uk-width-1-2">
            <fieldset className="uk-fieldset">
              <legend className="uk-legend uk-text-center">Registro</legend>
              <div className="uk-margin">
                <label className="uk-form-label uk-form-stacked">
                  Nombre de usuario
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input uk-width-1-1"
                    type="text"
                    placeholder="e.g. miUserName"
                    name="username"
                    required
                  />
                </div>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label uk-form-stacked">
                  Correo electrónico
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input uk-width-1-1"
                    type="email"
                    placeholder="e.g. micorreo@dominio.com"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label uk-form-stacked">
                  Password
                </label>
                <div className="uk-form-controls">
                  <input
                    onBlur={e => {
                      setvalidPassword(pwdValidator(e.target.value));
                    }}
                    className={`uk-input uk-width-1-1 ${
                      !validPassword ? "uk-form-danger" : ""
                    }`}
                    type="password"
                    placeholder="e.g. p4$22%W0_rD"
                    name="password"
                    required
                  />
                </div>
                <div uk-drop="pos: right-center">
                  <div className="uk-card uk-card-small uk-card-body uk-card-default uk-text-justify">
                    Passwords deben tener al menos 8 caracteres, mayúsculas,
                    números, símbolos y no tener espacios
                  </div>
                </div>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label uk-form-stacked">
                  Confirmación de password
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input uk-width-1-1"
                    type="password"
                    placeholder="e.g. p4$22%W0_rD"
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className="uk-margin uk-flex uk-flex-center">
                <button className="uk-button uk-button-primary uk-width-1-2">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AuthFormContainer;
