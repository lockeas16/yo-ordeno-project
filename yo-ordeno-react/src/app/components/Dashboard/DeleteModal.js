import React from "react";

const DeleteModal = ({ handleDelete, _id, idNode, name, legend }) => (
  <div id={`delete-${name}-${idNode}`} className="uk-flex-top" uk-modal="true">
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-large">
      <button
        className="uk-modal-close-default"
        type="button"
        uk-close="true"
      />
      <h3 className="lobster-family uk-text-center">{legend}</h3>
      <div className="uk-text-center">
        <button
          className="uk-button uk-button-danger uk-margin-small-right uk-modal-close"
          onClick={e => {
            handleDelete(e, _id, idNode);
          }}
        >
          Eliminar
        </button>
        <button className="uk-button uk-button-default uk-modal-close">
          Cancelar
        </button>
      </div>
    </div>
  </div>
);
export default DeleteModal;
