import React from "react";

const OrderItem = ({ dish, quantity, notes, status }) => (
  <tr
    onClick={() => {
      console.log(notes);
    }}
  >
    <td>{dish.name}</td>
    <td>
      <span className="uk-text-bold">x{quantity}</span>
    </td>
    <td>{status}</td>
  </tr>
);

export default OrderItem;
