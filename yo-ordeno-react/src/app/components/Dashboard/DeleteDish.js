import React from "react";
import UIkit from "uikit";

const DeleteDish = ({ handleDelete, id }) => (
  <div id="delete-dish" className="uk-flex-top" uk-modal="true">
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-large">
      <button
        className="uk-modal-close-default"
        type="button"
        uk-close="true"
      />
      <h3 className="lobster-family uk-text-center">
        ¿Seguro de que quieres eliminar este platillo?
      </h3>
      <div className="uk-text-center">
        <button
          className="uk-button uk-button-danger uk-margin-small-right uk-modal-close"
          onClick={() => {
            handleDelete(id);
            // UIkit.modal("#delete-dish").hide();
          }}
        >
          Eliminar
        </button>
        <button className="uk-button uk-button-default uk-modal-close">
          Cancelar
        </button>

        {/* <Link to="/signup" className="uk-link-text uk-text-primary">
            <span
              className="lobster-family uk-text-large"
              onClick={() => {
                UIkit.modal("#modal-login").hide();
              }}
            >
              Registrarme
            </span>
          </Link> */}
      </div>
    </div>
  </div>
);

export default DeleteDish;
