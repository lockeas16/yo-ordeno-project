import React, { Component } from "react";
import { confirmation } from "../../services/authService";
import Success from "./Success";
import Fail from "./Fail";
import Waiting from "./Waiting";

class ConfirmationContainer extends Component {
  constructor(props) {
    super(props);
    const { token } = props.match.params;
    this.state = {
      confirmation: "Pending"
    };

    confirmation(token)
      .then(response => {
        const confirmation = "Success";
        this.setState({ confirmation });
      })
      .catch(error => {
        const confirmation = "Fail";
        this.setState({ confirmation });
      });
  }

  render() {
    const { confirmation } = this.state;
    return (
      <React.Fragment>
        {confirmation === "Pending" && <Waiting />}
        {confirmation === "Fail" && <Fail />}
        {confirmation === "Success" && <Success />}
      </React.Fragment>
    );
  }
}

export default ConfirmationContainer;
