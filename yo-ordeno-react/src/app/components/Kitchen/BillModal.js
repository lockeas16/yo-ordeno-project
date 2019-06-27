import React from "react";

const BillModal = ({ _id, total, dishes }) => (
  <div id={`order-${_id}`} className="uk-flex-top" uk-modal="true">
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-large uk-text-center">
      <h3>Tu orden</h3>
      <table className="uk-table uk-table-divider uk-table-middle uk-text-center">
        <thead>
          <tr>
            <th className="uk-text-primary">Platillo</th>
            <th className="uk-text-primary">Cantidad</th>
            <th className="uk-text-primary">Precio unitario</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish, index) => (
            <tr key={index}>
              <td>{dish.dish.name}</td>
              <td>{dish.quantity}</td>
              <td>{dish.dish.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: {total}</h3>
    </div>
  </div>
);

export default BillModal;
