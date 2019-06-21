import React from "react";
import OrderItem from "./OrderItem";

const ConsumerOrder = ({ _id, consumer, orderItems }) => (
  <li>
    <a className="uk-accordion-title">
      Orden: <span className="uk-text-primary">{_id.slice(-5)}</span> a nombre
      de: <span className="uk-text-bold">{consumer}</span>
    </a>
    <div className="uk-accordion-content">
      <table className="uk-table uk-table-striped uk-table-divider uk-table-middle uk-text-center">
        <tbody>
          {orderItems &&
            orderItems.map((item, index) => (
              <OrderItem key={`order-item-${index}`} {...item} />
            ))}
        </tbody>
      </table>
    </div>
  </li>
);

export default ConsumerOrder;
