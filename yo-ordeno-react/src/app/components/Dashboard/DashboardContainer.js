import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dishes from "./Dishes";
import DishForm from "./DishForm";
import Tables from "./Tables";
import { notification } from "../../utils/utils";
// prettier-ignore
import { newDish, editDish, deleteDish, getDishes } from "../../services/dishService";
import { getTables, deleteTable } from "../../services/tablesService";

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
      dishes: [],
      tables: []
    };
    getDishes(this.props.user.restaurant)
      .then(data => {
        let dishes = data;
        this.setState({ dishes });
      })
      .catch(error => {
        console.log(error);
      });

    getTables(this.props.user.restaurant)
      .then(data => {
        let tables = data;
        this.setState({ tables });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setDish = dish => {
    this.setState({ dish });
  };

  addTable = table => {
    let { tables } = this.state;
    tables.push(table);
    this.setState({ tables });
  };

  delTable = (e, _id, tableNumber) => {
    deleteTable(_id)
      .then(data => {
        let { tables } = this.state;
        tables.splice(tableNumber, 1);
        this.setState({ tables });
        notification(data.message, "success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  setImage = e => {
    const image = e.target.files[0];
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    this.setState({ formData });

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      let { dish } = this.state;
      dish.image = reader.result;
      this.setState({ dish });
    };
  };

  handleChange = e => {
    const field = e.target.name;
    const { dish } = this.state;
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
        if (field !== "image") {
          const element = dish[field];
          formData.append(field, element);
        }
      }
    }

    dish._id ? this.edit(formData, dish._id) : this.create(formData);
  };

  handleDelete = (e, id, idNode) => {
    deleteDish(id)
      .then(data => {
        let { dishes } = this.state;
        dishes.splice(idNode, 1);
        this.setState({ dishes });
        notification(data.message, "success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  create = formData => {
    newDish(formData)
      .then(data => {
        let { dishes } = this.state;
        dishes.push(data.dish);
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
        this.setState({ dishes });
        notification(data.message, "success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  edit = (formData, _id) => {
    editDish(formData, _id)
      .then(data => {
        let { dishes } = this.state;
        const dishtoUpdate = dishes.findIndex(dish => dish._id === _id);
        dishes[dishtoUpdate] = data.dish;

        const dish = {
          name: "",
          description: "",
          price: 0,
          category: "",
          image: ""
        };
        const formData = new FormData();
        this.setState({ dish });
        this.setState({ dishes });
        this.setState({ formData });
        notification(data.message, "success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchDish = _id => {
    const { dishes } = this.state;
    return dishes.findIndex(dish => dish._id === _id);
  };

  // if an _id is in location.state and its different from the one in state, updates
  // if there is no location.state, and also _id its differente, we are in new dish form and then we initialize dish object in state
  componentDidUpdate() {
    let { dish } = this.state;
    // prettier-ignore
    if (this.props.location.state && dish._id !== this.props.location.state._id) {
      const { dishes } = this.state;
      const index = this.searchDish(this.props.location.state._id);
      this.setDish(dishes[index]);
    } else if(!this.props.location.state && dish._id){
        dish= {
          image: "",
          name: "",
          category: "",
          description: "",
          price: 0
        }
        this.setDish(dish);
    }
  }

  render() {
    const { user, dish, dishes, tables } = this.state;
    return (
      <React.Fragment>
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
          path={`${this.props.match.path}/tables`}
          render={props => (
            <Tables
              {...props}
              user={user}
              tables={tables}
              addTable={this.addTable}
              delTable={this.delTable}
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
      </React.Fragment>
    );
  }
}

export default DashboardContainer;
