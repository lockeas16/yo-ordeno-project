import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/defaultMeal.png";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

// prettier-ignore
const DishCard = ({ image, name, category, price, description, _id, idNode, handleDelete }) => 
(
  <div>
    <div className="uk-card uk-card-default uk-card-small uk-box-shadow-large">
      <div className="uk-card-badge" uk-toggle={`target: #delete-dish-${idNode}`}>
        <div className="hoverTrash">
          <FaTrash />
        </div>
      </div>
      <div className="uk-card-media-top uk-text-center">
        <img
          src={image || defaultImage}
          alt={name}
          className="imageCard uk-border-circle"
        />
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">{name}</h3>
        <p className="uk-text-truncate">{description}</p>
        <span className="uk-label-success">{category}</span>
        <p className="uk-margin-remove">
          Precio: <span className="uk-badge">{price}</span>
        </p>
      </div>
      <div className="uk-card-footer">
        <Link
          to={{
            pathname: `/dashboard/dish/${_id}`,
            state: {
              dish: {
                image,
                name,
                category,
                description,
                price,
                _id
              }
            }
          }}
        >
          Editar
        </Link>
      </div>
    </div>
    <DeleteModal handleDelete={handleDelete} _id={_id} idNode={idNode} name="dish" legend="¿Seguro de que quieres eliminar este platillo?" />
  </div>
);

export default DishCard;
