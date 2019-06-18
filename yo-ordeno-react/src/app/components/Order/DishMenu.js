import React from "react";

const DishMenu = ({ name, description, image, price }) => {
  const styleImg = {
    backgroundSize: `cover`,
    backgroundPosition: `50% 50%`,
    backgroundRepeat: `no-repeat`,
    backgroundImage: `url('${image}')`
  };

  return (
    <li>
      <a className="uk-accordion-title">
        <div uk-grid="true">
          <div className="uk-width-1-3" style={styleImg} />
          <div className="uk-width-expand">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
              Precio: <span className="uk-badge">{price}</span>
            </p>
          </div>
        </div>
      </a>
      <div className="uk-accordion-content">
        <p>
          <button className="uk-button uk-button-primary">Agregar</button>
        </p>
      </div>
    </li>
  );
};

export default DishMenu;
