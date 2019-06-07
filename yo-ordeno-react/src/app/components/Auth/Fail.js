import React from "react";
import Exclamation from "../../assets/exclamation.png";

const Fail = () => (
  <section
    className="uk-section uk-section-large uk-section-muted"
    uk-height-viewport="offset-top: true; expand: true"
  >
    <div className="uk-container uk-container-small">
      <h2 className="lobster-family uk-heading-medium uk-text-center uk-text-danger">
        Ha ocurrido un error durante la verificación
      </h2>
      <div className="uk-margin">
        <img
          className="uk-display-block uk-margin-auto uk-width-1-4"
          src={Exclamation}
          alt="exclamation"
          uk-img="true"
        />
      </div>
      <p className="lobster-family uk-text-lead uk-text-center uk-text-secondary">
        Sentimos aún no poder contar contigo, valida la liga de confirmación que
        te ha llegado por correo
      </p>
    </div>
  </section>
);

export default Fail;
