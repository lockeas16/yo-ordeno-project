import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideBar from "./SideBar";
import Dishes from "./Dishes";
import DishForm from "./DishForm";

class DashboardContainer extends Component {
  state = {
    dish: {
      name: "",
      description: "",
      price: 0,
      category: "",
      image: ""
    },
    dishes: []
  };

  setImage = e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      let { dish } = this.state;
      dish.image = reader.result;
      this.setState({ dish });
      this.setState({ formData });
    };
  };

  handleChange = e => {
    const field = e.target.name;
    const { dish } = this.state;
    dish[field] = e.target.value;
    this.setState(dish);
  };

  render() {
    const { dish } = this.state;
    return (
      <div className="uk-flex uk-flex-row">
        <SideBar />
        <Route
          exact
          path={`${this.props.match.path}/`}
          render={props => <Dishes {...props} />}
        />
        <Route
          exact
          path={`${this.props.match.path}/dishes`}
          render={props => <Dishes {...props} />}
        />
        <Route
          exact
          path={`${this.props.match.path}/newdish`}
          render={props => (
            <DishForm
              {...props}
              {...dish}
              setImage={this.setImage}
              handleChange={this.handleChange}
            />
          )}
        />
      </div>
    );
  }
}

export default DashboardContainer;
