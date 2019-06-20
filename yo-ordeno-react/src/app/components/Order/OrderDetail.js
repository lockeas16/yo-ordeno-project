import React from "react";

const OrderDetail = ({ image, name, price, quantity }) => {
  const styleImg = {
    backgroundSize: `cover`,
    backgroundPosition: `50% 50%`,
    backgroundRepeat: `no-repeat`,
    backgroundImage: `url('${image}')`
  };

  return (
    <div uk-grid="true">
      <div className="uk-width-1-2" style={styleImg} />
      <div className="uk-width-1-2 uk-text-left">
        <h3>{name}</h3>
        <p>
          Cantidad: <span className="uk-badge-success	">{quantity}</span>
        </p>
        <p>
          Precio: <span className="uk-badge">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
