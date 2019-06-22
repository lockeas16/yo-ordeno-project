/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RemoveAddDishBtn from "./RemoveAddDishBtn";

// prettier-ignore
const DishMenu = ({_id, name, description, image, price, quantity, removeDishFromOrder, addDishToOrder, getQuantityOrdered }) => {
  const styleImg = {
    backgroundSize: `cover`,
    backgroundPosition: `50% 50%`,
    backgroundRepeat: `no-repeat`,
    backgroundImage: `url('${image}')`
  };

  const dish = {
    _id,
    name,
    image,
    price,
    quantity
  };

  return (
    <li>
      <a className="uk-accordion-title">
        <div uk-grid="true" className="uk-margin-remove">
          <div className="uk-width-1-2" style={styleImg} />
          <div className="uk-width-expand">
            <h3>{name}</h3>
            <p className="uk-text-small">{description}</p>
            <p>
              Precio: <span className="uk-badge">{price}</span>
            </p>
          </div>
        </div>
      </a>
      <div className="uk-accordion-content">
        <RemoveAddDishBtn dish={dish} removeDishFromOrder={removeDishFromOrder} addDishToOrder={addDishToOrder} getQuantityOrdered={getQuantityOrdered} />
      </div>
    </li>
  );
};

export default DishMenu;
