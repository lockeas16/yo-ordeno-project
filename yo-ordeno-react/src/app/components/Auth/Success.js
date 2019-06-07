import React from "react";
import CheckMark from "../../assets/CheckMark.png";

const Success = () => (
  <section
    className="uk-section uk-section-large uk-section-muted"
    uk-height-viewport="offset-top: true; expand: true"
  >
    <div className="uk-container uk-container-small">
      <h2 className="lobster-family uk-heading-medium uk-text-center">
        Tu cuenta ha sido verificada de manera exitosa
      </h2>
      <div className="uk-margin">
        <img
          className="uk-display-block uk-margin-auto uk-width-1-4"
          src={CheckMark}
          alt="checkmark"
          uk-img="true"
        />
      </div>
      <p className="lobster-family uk-text-lead uk-text-center">
        Gracias por confiar en Yo Ordeno!! ¿Que esperas para iniciar sesion?
      </p>
    </div>
  </section>
);

export default Success;
