import React from "react";
import DishCard from "./DishCard";

const Dishes = ({ dishes, handleDelete }) => (
  <section
    className="uk-section uk-section-large uk-width-expand"
    uk-height-viewport="offset-top: true; expand: true"
  >
    <div className="uk-container uk-container-expand">
      <h2>Platillos</h2>
      <div
        className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-5@l uk-grid-small uk-grid-match"
        uk-grid="true"
      >
        {dishes &&
          dishes.map((dish, index) => (
            <DishCard
              key={index}
              {...dish}
              handleDelete={handleDelete}
              idNode={index}
            />
          ))}
      </div>
    </div>
  </section>
);

export default Dishes;
