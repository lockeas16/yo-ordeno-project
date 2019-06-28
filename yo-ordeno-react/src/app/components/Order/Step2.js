/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DishMenu from "./DishMenu";

const Step2 = ({
  dishesMenu,
  removeDishFromOrder,
  addDishToOrder,
  getQuantityOrdered,
  handleStep2,
  editNotesToDish,
  ...props
}) => (
  <div>
    <h1>Escoge lo que quieres ordenar</h1>
    <div uk-filter="target: .dish-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li uk-filter-control="">
          <a>Todos</a>
        </li>
        <li uk-filter-control=".tag-desayunos">
          <a>Desayunos</a>
        </li>
        <li uk-filter-control=".tag-entradas">
          <a>Entradas</a>
        </li>
        <li uk-filter-control=".tag-sopas">
          <a>Sopas</a>
        </li>
        <li uk-filter-control=".tag-ensaladas">
          <a>Ensaladas</a>
        </li>
        <li uk-filter-control=".tag-bebidas">
          <a>Bebidas</a>
        </li>
        <li uk-filter-control=".tag-platillo-principal">
          <a>Platillos principales</a>
        </li>
      </ul>
      <ul uk-accordion="true" className="dish-filter">
        {dishesMenu &&
          dishesMenu.map((dish, index) => (
            <DishMenu
              key={index}
              {...dish}
              removeDishFromOrder={removeDishFromOrder}
              addDishToOrder={addDishToOrder}
              getQuantityOrdered={getQuantityOrdered}
              editNotesToDish={editNotesToDish}
            />
          ))}
      </ul>
    </div>
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
  </div>
);

export default Step2;
