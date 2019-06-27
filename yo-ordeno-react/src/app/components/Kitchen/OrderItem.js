import React from "react";

// prettier-ignore
const OrderItem = ({ _id, dish, quantity, notes, status, order_id, receiveDish }) => (
  <tr>
    <td>
      {status !== "Entregado" && (<button
        className="uk-button uk-button-primary button-xsmall"
        onClick={e => {
          receiveDish(e, order_id, _id);
        }}
      >
        Recibir platillo
      </button>)}
      
    </td>
    <td>{dish.name}</td>
    <td>
      <span className="uk-text-bold">x{quantity}</span>
    </td>
    <td
      className={
        status === "Ordenado"
          ? "uk-text-primary"
          : status === "Entregado"
          ? "uk-text-success"
          : ""
      }
    >
      {status}
    </td>
    <td>{notes}</td>
  </tr>
);

export default OrderItem;
