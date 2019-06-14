import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import NavBar from "./app/common/NavBar";
import Footer from "./app/common/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("USER"));
    if (!user) user = {};
    this.state = {
      user
    };
  }

  setUser = authUser => {
    this.setState(prevState => {
      let user = authUser;
      return { user };
    });
  };

  handleLogout = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER");
    let { user } = this.state;
    user = {};
    this.setState({ user });
    this.props.history.push("/");
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <NavBar
          {...user}
          handleLogout={this.handleLogout}
          setUser={this.setUser}
        />
        <Router user={user} setUser={this.setUser} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
