import React, { Component } from "react";
import {
  getTableOnRestaurant,
  getRestaurantDishes
} from "../../services/orderService";
import { notification } from "../../utils/utils";
import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    const table = props.match.params.id;
    const restaurant = props.match.params.restaurant;
    this.state = {
      order: {
        table,
        restaurant,
        name: ""
      },
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
        const dishes = response.data;
        this.setState({ dishes });
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

  render() {
    const { order, dishes } = this.state;
    let name = "";
    if (order) name = order.name;

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
              name={name}
            />
            <Step2 props={this.props} dishes={dishes} />
          </StepWizard>
        </div>
      </section>
    );
  }
}

export default OrderContainer;
