import React, { useState } from "react";
import { pwdValidator } from "../../utils/utils";

const Signup = ({
  name,
  lastname,
  email,
  password,
  passwordConfirm,
  handleChange,
  passwordsAreMatch,
  handleSubmit
}) => {
  const [validPassword, setvalidPassword] = useState(true);
  const [passwordMatch, setpasswordMatch] = useState(true);
  return (
    <div uk-height-viewport="offset-top: true; expand: true">
      <section className="uk-section" uk-height-viewport="expand: true">
        <div className="uk-container uk-container-xsmall uk-flex uk-flex-center">
          <form
            className="uk-form-stacked uk-width-1-2"
            onSubmit={handleSubmit}
          >
            <fieldset className="uk-fieldset">
              <legend className="uk-margin uk-legend uk-text-center">
                Registro
              </legend>
              <div className="uk-grid-small" uk-grid="true">
                <div>
                  <div className="uk-margin inp-div">
                    <input
                      onChange={handleChange}
                      className=" uk-width-1-1 inp-form"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Me llamo..."
                      value={name}
                      required
                    />
                    <label className="inp-label" htmlFor="name">
                      Nombre(s)
                    </label>
                    <div className="underline uk-width-1-1" />
                  </div>
                </div>
                <div>
                  <div className="uk-margin inp-div">
                    <input
                      onChange={handleChange}
                      className=" uk-width-1-1 inp-form"
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Mi apellido paterno es..."
                      value={lastname}
                      required
                    />
                    <label className="inp-label" htmlFor="lastname">
                      Apellido Paterno
                    </label>
                    <div className="underline uk-width-1-1" />
                  </div>
                </div>
              </div>

              <div className="uk-margin inp-div">
                <input
                  onChange={handleChange}
                  className="uk-width-1-1 inp-form"
                  type="email"
                  placeholder="micorreo@dominio.com"
                  name="email"
                  id="email"
                  value={email}
                  required
                />
                <label className="inp-label" htmlFor="email">
                  Correo electrónico
                </label>
                <div className="underline" />
              </div>
              <div className="uk-margin inp-div">
                <input
                  onChange={handleChange}
                  onBlur={e => {
                    setvalidPassword(pwdValidator(e.target.value));
                  }}
                  className={`uk-width-1-1 inp-form ${
                    !validPassword ? "uk-form-danger" : ""
                  }`}
                  type="password"
                  placeholder="e.g. p4$22%W0_rD"
                  name="password"
                  id="password"
                  value={password}
                  required
                />

                <label className="inp-label" htmlFor="password">
                  Password
                </label>
                <div className="underline" />
              </div>
              <div uk-drop="pos: right-center">
                <div className="uk-card uk-card-small uk-card-body uk-card-default uk-text-center">
                  Passwords deben tener al menos 8 caracteres, mayúsculas,
                  números, símbolos y no tener espacios
                </div>
              </div>
              <div className="uk-margin inp-div">
                <input
                  onChange={handleChange}
                  onBlur={e => {
                    setpasswordMatch(passwordsAreMatch(e));
                  }}
                  className={`uk-width-1-1 inp-form ${
                    !passwordMatch ? "uk-form-danger" : ""
                  }`}
                  type="password"
                  placeholder="confirma tu password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  value={passwordConfirm}
                  required
                />
                <label className="inp-label" htmlFor="passwordConfirm">
                  Confirmación de password
                </label>
                <div className="underline" />
              </div>
              {!passwordMatch && (
                <div uk-drop="pos: right-center">
                  <div className="uk-card uk-card-primary uk-card-small uk-card-body uk-card-default uk-text-center">
                    Los passwords no coinciden!
                  </div>
                </div>
              )}
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

export default Signup;
