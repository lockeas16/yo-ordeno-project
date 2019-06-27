const Order = require("../models/Order");

module.exports.getOrders = (restaurant, table) => {
  return Order.find({ table })
    .populate("dishes.dish", { name: 1, price: 1 })
    .then(orders => orders)
    .catch(error => {
      throw error;
    });
};
