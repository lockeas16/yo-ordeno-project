/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const DishMenu = ({ _id, name, description, image, price, addDishToOrder }) => {
  const styleImg = {
    backgroundSize: `cover`,
    backgroundPosition: `50% 50%`,
    backgroundRepeat: `no-repeat`,
    backgroundImage: `url('${image}')`
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
        <div className="uk-flex">
          <button href="" className="leftSkew outline btnOrder">
            <span>-</span>
          </button>
          <span className="middleBtn">0</span>
          <button href="" className="rightSkew outline btnOrder">
            <span>+</span>
          </button>
        </div>
        {/* <p>
          <button
            className="uk-button uk-button-default"
            onClick={e => {
              const dish = {
                _id,
                name,
                image,
                price
              };
              addDishToOrder(e, dish);
            }}
          >
            Agregar
          </button>
        </p> */}
      </div>
    </li>
  );
};

export default DishMenu;
