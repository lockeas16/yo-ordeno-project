import React from "react";
import OrderDetail from "./OrderDetail";

const Step3 = ({ order, confirmOrder, ...props }) => {
  const { dishes, consumer } = order;
  return (
    <div>
      <h1>Revisa y confirma tu pedido</h1>
      <h2>A nombre de: {consumer}</h2>
      {dishes &&
        dishes.map((dish, index) => (
          <OrderDetail key={`item-${index}`} {...dish} />
        ))}
      <div className="uk-button-group uk-margin">
        <button
          className="uk-button uk-button-default"
          onClick={props.previousStep}
        >
          Regresar
        </button>
        <button
          className="uk-button uk-button-primary uk-margin-small-left"
          onClick={confirmOrder}
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  );
};

export default Step3;
