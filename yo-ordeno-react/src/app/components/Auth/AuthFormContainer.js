import React, { Component } from "react";
import Signup from "./Signup";
import { pwdValidator, notification } from "../../utils/utils";

class AuthFormContainer extends Component {
  state = {
    auth: {
      name: "",
      lastname: "",
      username: "",
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
    // const { pathname } = this.props.location;
    if (auth.username === "")
      return notification("Must provide a valid username");
    if (auth.password === "" || !pwdValidator(auth.password))
      return notification("Must provide a valid password");
    // pathname === "/signup" ? this.onSignup() : this.onLogin();
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
