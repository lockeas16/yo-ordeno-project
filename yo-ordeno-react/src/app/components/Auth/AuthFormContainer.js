import React, { Component } from "react";
import Signup from "./Signup";
import { pwdValidator, notification, isValidEmail } from "../../utils/utils";
import { signup } from "../../services/authService";

class AuthFormContainer extends Component {
  state = {
    auth: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  };

  passwordsAreMatch = e => {
    const { password } = this.state.auth;
    if (e.target.value === password) return true;
    else return false;
  };

  handleChange = e => {
    const field = e.target.name;
    const { auth } = this.state;
    auth[field] = e.target.value;
    this.setState({ auth });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { auth } = this.state;
    if (auth.email === "" || !isValidEmail(auth.email))
      return notification("Proporciona un correo electrónico válido");
    if (auth.password === "" || !pwdValidator(auth.password))
      return notification("Proporciona un password válido");
    this.onSignup();
  };

  onSignup = () => {
    let { auth } = this.state;
    const { passwordConfirm, ...user } = auth;
    signup(user)
      .then(({ message }) => {
        // enviar mensaje de confirmación de correo
        auth = {
          name: "",
          lastname: "",
          email: "",
          password: "",
          passwordConfirm: ""
        };
        this.setState({ auth });
        return notification(message);
      })
      .catch(({ error }) => {
        console.log(error);
        return notification(error.message);
      });
  };

  render() {
    const { auth } = this.state;
    return (
      <Signup
        handleChange={this.handleChange}
        passwordsAreMatch={this.passwordsAreMatch}
        handleSubmit={this.handleSubmit}
        {...auth}
      />
    );
  }
}

export default AuthFormContainer;
