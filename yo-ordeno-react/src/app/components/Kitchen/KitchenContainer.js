import React, { Component } from "react";
import { createSocket } from "../../services/kitchenService";
import ConsumerOrder from "./ConsumerOrder";

class KitchenContainer extends Component {
  constructor(props) {
    super(props);
    const table = props.match.params.id;
    const restaurant = props.match.params.restaurant;
    this.state = {
      table,
      restaurant,
      socket: createSocket(),
      orders: false
    };
  }

  componentDidMount() {
    let { interval } = this.state;
    interval = setInterval(() => this.getOrders(), 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    let { interval } = this.state;
    clearInterval(interval);
  }

  getOrders = () => {
    const { socket, restaurant, table } = this.state;
    socket.emit("connected", restaurant, table);
    socket.on("orders", data => {
      this.setState({ orders: data });
    });
  };

  render() {
    const { orders } = this.state;
    return (
      <section
        className="uk-section uk-text-center uk-overflow-hidden"
        uk-height-viewport="offset-top: true; expand: true"
      >
        <div className="uk-container uk-container-xsmall">
          <h1>Ordenes en la mesa</h1>
          <ul
            uk-accordion="true"
            className="uk-margin-xlarge-left uk-margin-xlarge-right"
          >
            {orders &&
              orders.map((order, index) => (
                <ConsumerOrder
                  key={`order-${index}`}
                  {...order}
                  orderItems={order.dishes}
                />
              ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default KitchenContainer;
