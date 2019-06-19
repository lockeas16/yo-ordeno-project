import React from "react";

const OrderDetail = ({ image, name, price }) => {
  const styleImg = {
    backgroundSize: `cover`,
    backgroundPosition: `50% 50%`,
    backgroundRepeat: `no-repeat`,
    backgroundImage: `url('${image}')`
  };

  return (
    <div uk-grid="true" className="uk-margin-remove">
      <div className="uk-width-1-2" style={styleImg} />
      <div>
        <h3>{name}</h3>
        <p>
          Precio: <span className="uk-badge">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
