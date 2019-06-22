import React, { Component } from "react";
import {
  getTableOnRestaurant,
  getRestaurantDishes,
  sendOrder
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
      restaurant,
      order: {
        table,
        consumer: "",
        dishes: []
      },
      dishesMenu: []
    };

    async function getInitialState(table, restaurant) {
      let result = await getTableOnRestaurant(table, restaurant);
      let dataDishes = await getRestaurantDishes(restaurant);
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

  getQuantityOrdered = _id => {
    const { order } = this.state;
    const index = order.dishes.findIndex(dish => dish._id === _id);
    if (index < 0) return "0";
    else return order.dishes[index].quantity;
  };

  addDishToOrder = (e, dish, notes) => {
    e.preventDefault();
    let { order } = this.state;
    const index = order.dishes.findIndex(item => item._id === dish._id);
    // dish not found, its added
    if (index < 0) {
      dish.quantity = 1;
      dish.notes = notes;
      order.dishes.push(dish);
    }
    // otherwise, increment quantity and update notes
    else {
      order.dishes[index].notes = notes;
      order.dishes[index].quantity++;
    }
    this.setState({ order });
  };

  removeDishFromOrder = (e, dish) => {
    e.preventDefault();
    let { order } = this.state;
    const index = order.dishes.findIndex(item => item._id === dish._id);
    // dish not found, return 0
    if (index < 0) {
      dish.quantity = 0;
    }
    // otherwise, decrement quantity and if it reaches zero, remove it from the array
    else {
      order.dishes[index].quantity--;
      if (order.dishes[index].quantity === 0) order.dishes.splice(index, 1);
    }
    this.setState({ order });
  };

  confirmOrder = e => {
    e.preventDefault();
    let { order, restaurant } = this.state;
    const cleanOrder = {
      ...order,
      dishes: order.dishes.map(item => {
        return {
          dish: item._id,
          notes: item.notes,
          quantity: item.quantity
        };
      })
    };
    sendOrder(restaurant, cleanOrder)
      .then(response => {
        const { restaurant, order } = this.state;
        notification(response.data.message, "success");
        setTimeout(() => {
          this.props.history.push(
            `/kitchen/${restaurant}/table/${order.table}`
          );
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
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
              removeDishFromOrder={this.removeDishFromOrder}
              addDishToOrder={this.addDishToOrder}
              getQuantityOrdered={this.getQuantityOrdered}
              handleStep2={this.handleStep2}
            />
            <Step3
              props={this.props}
              order={order}
              confirmOrder={this.confirmOrder}
            />
          </StepWizard>
        </div>
      </section>
    );
  }
}

export default OrderContainer;
