import React, { Component } from "react";
import { createSocket, updateDish } from "../../services/kitchenService";
import { notification } from "../../utils/utils";
import ConsumerOrder from "./ConsumerOrder";
import BillModal from "./BillModal";

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
    this.getOrders();
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { socket, restaurant, table } = this.state;
    socket.emit("disconnect", restaurant, table);
  }

  getOrders = () => {
    const { socket, restaurant, table } = this.state;
    socket.emit("connected", restaurant, table);
    socket.on("orders", data => {
      // computing the total for each order
      data.forEach((element, index) => {
        data[index].total = element.dishes.reduce(
          (acc, dish) => (acc += dish.dish.price * dish.quantity),
          0
        );
      });
      this.setState({ orders: data });
    });
  };

  receiveDish = (e, order_id, dish_id) => {
    const { socket, restaurant, table } = this.state;
    updateDish(restaurant, order_id, dish_id)
      .then(order => {
        socket.emit("updated-dish", restaurant, table);
        notification(order.message, "success");
      })
      .catch(error => {
        return notification(error.action);
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
            className="margin-left-larger margin-right-larger margin-left-remove margin-right-remove uk-text-left"
          >
            {orders &&
              orders.map((order, index) => (
                <ConsumerOrder
                  key={`order-${index}`}
                  {...order}
                  orderItems={order.dishes}
                  receiveDish={this.receiveDish}
                />
              ))}
          </ul>
        </div>
        {orders &&
          orders.map((order, index) => (
            <BillModal
              key={`bill-${index}`}
              _id={order._id}
              total={order.total}
              dishes={order.dishes}
            />
          ))}
      </section>
    );
  }
}

export default KitchenContainer;
