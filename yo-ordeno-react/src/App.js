import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import NavBar from "./app/common/NavBar";
import Footer from "./app/common/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("USER"));
    this.state = {
      user
    };
  }

  setUser = authUser => {
    // as setState is an async function, we use a callback to update an object
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
    window.location.reload();
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
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
