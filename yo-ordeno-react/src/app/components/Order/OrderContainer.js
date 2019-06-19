import React, { Component } from "react";
import {
  getTableOnRestaurant,
  getRestaurantDishes
} from "../../services/orderService";
import { notification } from "../../utils/utils";
import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    const table = props.match.params.id;
    const restaurant = props.match.params.restaurant;
    this.state = {
      order: {
        table,
        restaurant,
        consumer: "",
        dishes: []
      },
      dishesMenu: [],
      status: "WAITING"
    };

    async function getInitialState(table, restaurant) {
      let result = await getTableOnRestaurant(table, restaurant);
      // await result.catch(error => {
      //   // const { error } = res.response.data;
      //   throw error.response.data;
      //   // return notification(error.action);
      // });
      let dataDishes = await getRestaurantDishes(restaurant);
      // dataDishes.catch(error => {
      //   // const { error } = res.response.data;
      //   throw error.response.data;
      //   // return notification(error.action);
      // });
      return dataDishes;
    }

    getInitialState(table, restaurant)
      .then(response => {
        const dishesMenu = response.data;
        this.setState({ dishesMenu });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = e => {
    const field = e.target.name;
    const { order } = this.state;
    order[field] = e.target.value;
    this.setState({ order });
  };

  addDishToOrder = (e, dish) => {
    e.preventDefault();
    let { order } = this.state;
    order.dishes.push(dish);
    this.setState({ order });
  };

  handleStep2 = e => {
    e.preventDefault();
    let { order } = this.state;
    if (order.dishes.length === 0)
      return notification("Debes seleccionar al menos un platillo");
    return true;
  };

  render() {
    const { order, dishesMenu } = this.state;
    let consumer = "";
    if (order) consumer = order.consumer;

    return (
      <section
        className="uk-section uk-text-center uk-overflow-hidden"
        uk-height-viewport="offset-top: true; expand: true"
      >
        {/* <section className="uk-section uk-section-muted uk-section-xsmall uk-padding-remove-vertical">
          <div className="uk-container uk-container-expand">
            <nav
              className="uk-navbar-container uk-navbar-transparent"
              uk-navbar="true"
            >
              <div className="uk-navbar-center">Steps</div>
            </nav>
          </div>
        </section> */}
        <div className="uk-container uk-container-expand">
          <StepWizard>
            <Step1
              props={this.props}
              handleChange={this.handleChange}
              consumer={consumer}
            />
            <Step2
              props={this.props}
              dishesMenu={dishesMenu}
              addDishToOrder={this.addDishToOrder}
              handleStep2={this.handleStep2}
            />
            <Step3 props={this.props} order={order} />
          </StepWizard>
        </div>
      </section>
    );
  }
}

export default OrderContainer;
