import React from "react";

const OrderItem = ({ dish, quantity, notes, status }) => (
  <tr>
    <td>{dish.name}</td>
    <td>
      <span className="uk-text-bold">x{quantity}</span>
    </td>
    <td>{status}</td>
    <td>{notes}</td>
  </tr>
);

export default OrderItem;
