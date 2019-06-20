import React from "react";

const RemoveAddDishBtn = ({
  dish,
  removeDishToOrder,
  addDishToOrder,
  getQuantityOrdered
}) => {
  return (
    <div className="uk-flex uk-flex-center">
      <button
        href=""
        className="leftSkew outline btnOrder"
        onClick={e => {
          removeDishToOrder(e, dish);
        }}
      >
        <span>-</span>
      </button>
      <span className="middleBtn">{getQuantityOrdered(dish._id)}</span>
      <button
        href=""
        className="rightSkew outline btnOrder"
        onClick={e => {
          addDishToOrder(e, dish);
        }}
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default RemoveAddDishBtn;
