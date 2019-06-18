import React from "react";
import DishMenu from "./DishMenu";

const Step2 = ({ dishes, ...props }) => {
  console.log(dishes);
  return (
    <div>
      <h2>Escoge lo que quieres ordenar</h2>

      <ul uk-accordion="true">
        {dishes &&
          dishes.map((dish, index) => <DishMenu key={index} {...dish} />)}
        {/* <li>
          <a className="uk-accordion-title" />
          <div className="uk-accordion-content" />
        </li> */}
      </ul>
    </div>
  );
};

export default Step2;
