/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import OrderItem from "./OrderItem";

const ConsumerOrder = ({ _id, consumer, status, orderItems, receiveDish }) => {
  return (
    <li>
      <a className="uk-accordion-title">
        <span
          className={`${
            status === "Abierta" ? "uk-badge-warning" : "uk-badge-success"
          } uk-text-large uk-margin-small-right`}
        >
          {status}
        </span>
        Orden: <span className="uk-text-primary">{_id.slice(-5)}</span> a nombre
        de: <span className="uk-text-bold">{consumer}</span>
      </a>
      <div className="uk-accordion-content">
        <table className="uk-table uk-table-striped uk-table-divider uk-table-middle uk-text-center">
          <tbody>
            {orderItems &&
              orderItems.map((item, index) => (
                <OrderItem
                  key={`order-item-${index}`}
                  {...item}
                  receiveDish={receiveDish}
                  order_id={_id}
                />
              ))}
          </tbody>
        </table>
        {status === "Cerrada" && (
          <div className="uk-margin uk-text-center">
            <button className="uk-button uk-button-primary">Ver cuenta</button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ConsumerOrder;
