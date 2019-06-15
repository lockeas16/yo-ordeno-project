import React from "react";
import defaultImage from "../../assets/defaultMeal.png";

const DishCard = ({ image, name, category, price, description }) => (
  <div>
    <div className="uk-card uk-card-default uk-card-small">
      <div className="uk-card-media-top uk-text-center">
        <img
          src={image || defaultImage}
          alt={name}
          className="imageCard uk-border-circle"
        />
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">{name}</h3>
        <p>{description}</p>
        <span className="uk-label-success">{category}</span>
      </div>
      <div className="uk-card-footer">
        <p>
          Precio: <span className="uk-badge">{price}</span>
        </p>
      </div>
    </div>
  </div>
);

export default DishCard;
