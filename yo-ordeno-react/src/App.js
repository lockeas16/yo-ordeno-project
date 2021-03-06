import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Router from "./Router";
import NavBar from "./app/common/NavBar";
import NavBarOrder from "./app/common/NavBarOrder";
import Footer from "./app/common/Footer";
import SideBar from "./app/common/SideBar";

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
    // prettier-ignore
    const isOrderView = this.props.location.pathname.includes("/restaurant/") || this.props.location.pathname.includes("/kitchen/") ? true : false;
    return (
      <div className="App">
        {isOrderView ? (
          <NavBarOrder />
        ) : (
          <React.Fragment>
            <SideBar />
            <NavBar
              {...user}
              handleLogout={this.handleLogout}
              setUser={this.setUser}
            />
          </React.Fragment>
        )}

        <Router
          user={user}
          setUser={this.setUser}
          handleLogout={this.handleLogout}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
