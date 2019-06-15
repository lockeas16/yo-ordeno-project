import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideBar from "./SideBar";
import Dishes from "./Dishes";
import DishForm from "./DishForm";
import { notification } from "../../utils/utils";
// prettier-ignore
import { newDish, editDish, deleteDish, getDishes } from "../../services/dishService";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      dish: {
        name: "",
        description: "",
        price: 0,
        category: "",
        image: ""
      },
      dishes: []
    };
    getDishes(this.props.user.restaurant)
      .then(data => {
        let dishes = data;
        this.setState({ dishes });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setDish = dish => {
    this.setState({ dish });
  };

  setImage = e => {
    const image = e.target.files[0];
    if (!image) return;
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
    // se manda como objeto ya que el state tiene varios objetos
    dish[field] = e.target.value;
    this.setState({ dish });
  };

  handleSubmit = (e, _id) => {
    e.preventDefault();
    const { dish } = this.state;
    const { restaurant } = this.state.user;
    dish.restaurant = restaurant;
    if (dish.name === "")
      return notification("Proporciona un nombre de platillo");
    if (dish.price === 0)
      return notification("Proporciona un precio válido y mayor a 0");
    if (dish.category === "")
      return notification("Proporciona una categoría válida");
    let { formData } = this.state;
    if (!formData) {
      formData = new FormData();
    }

    for (const field in dish) {
      if (dish.hasOwnProperty(field)) {
        const element = dish[field];
        formData.append(field, element);
      }
    }

    dish._id ? this.edit(formData, dish._id) : this.create(formData);
  };

  handleDelete = id => {
    deleteDish(id)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  create = formData => {
    newDish(formData)
      .then(data => {
        const dish = {
          name: "",
          description: "",
          price: 0,
          category: "",
          image: ""
        };
        const formData = new FormData();
        this.setState({ dish });
        this.setState({ formData });
        notification(data.message, "success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  edit = (formData, _id) => {
    editDish(formData, _id)
      .then(data => {
        const dish = {
          name: "",
          description: "",
          price: 0,
          category: "",
          image: ""
        };
        const formData = new FormData();
        this.setState({ dish });
        this.setState({ formData });
        notification(data.message, "success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidUpdate() {
    const { dish } = this.state;
    if (this.props.location.state)
      if (dish.name === "" || dish.name !== this.props.location.state.dish.name)
        this.setDish(this.props.location.state.dish);
  }

  render() {
    const { dish, dishes } = this.state;
    return (
      <div className="uk-flex uk-flex-row">
        <SideBar />
        <Route
          exact
          path={`${this.props.match.path}/dishes`}
          render={props => (
            <Dishes
              {...props}
              dishes={dishes}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          exact
          path={`${this.props.match.path}/newdish`}
          render={props => (
            <DishForm
              props={props}
              dish={dish}
              setImage={this.setImage}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route
          exact
          path={`${this.props.match.path}/dish/:id`}
          render={props => (
            <DishForm
              props={props}
              dish={dish}
              setImage={this.setImage}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
      </div>
    );
  }
}

export default DashboardContainer;
