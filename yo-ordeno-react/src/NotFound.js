import React from "react";
import { Link } from "react-router-dom";
import Exclamation from "./app/assets/exclamation.png";

const NotFound = () => (
  <section
    className="uk-section uk-section-large uk-section-muted"
    uk-height-viewport="offset-top: true; expand: true"
  >
    <div className="uk-container uk-container-small">
      <h2 className="lobster-family uk-heading-medium uk-text-center uk-text-danger">
        Lo sentimos, pero no encontramos la página que buscas
      </h2>
      <div className="uk-margin">
        <img
          className="uk-display-block uk-margin-auto uk-width-1-4"
          src={Exclamation}
          alt="exclamation"
          uk-img="true"
        />
      </div>
      <h2 className="lobster-family uk-text-center uk-text-secondary">
        Regresa a{" "}
        <Link to="/" className="uk-link-reset">
          {" "}
          <span className="uk-text-primary"> Inicio</span>
        </Link>
      </h2>
    </div>
  </section>
);

export default NotFound;
