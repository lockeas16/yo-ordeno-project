import React from "react";
import DishMenu from "./DishMenu";

const Step2 = ({ dishesMenu, addDishToOrder, handleStep2, ...props }) => {
  return (
    <div>
      <h1>Escoge lo que quieres ordenar</h1>
      <ul uk-accordion="true">
        {dishesMenu &&
          dishesMenu.map((dish, index) => (
            <DishMenu key={index} {...dish} addDishToOrder={addDishToOrder} />
          ))}
      </ul>
      {/* <form
        onSubmit={e => {
          e.preventDefault();
        }}
      > */}
      <div className="uk-button-group">
        <button
          className="uk-button uk-button-default"
          onClick={props.previousStep}
        >
          Regresar
        </button>
        <button
          className="uk-button uk-button-primary uk-margin-small-left"
          onClick={e => {
            if (handleStep2(e)) props.nextStep();
          }}
        >
          Revisar pedido antes de confirmar
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Step2;
