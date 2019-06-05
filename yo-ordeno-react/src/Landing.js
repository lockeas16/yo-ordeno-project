import React, { Component } from "react";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div uk-height-viewport="offset-top: true; expand: true">
        <section className="uk-section uk-section-xlarge bg-image1 uk-overflow-hidden">
          <div className="uk-container">
            <div className="uk-panel uk-light">
              <h2
                className="uk-heading-medium"
                uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.2;"
              >
                Toma el control de lo que ordena tu cliente
              </h2>
              <ul
                uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.3;"
                className="uk-list uk-text-bold uk-text-warning uk-text-right"
              >
                <li>¿Cansado de que se olviden de tu orden?</li>
                <li>
                  ¿Cuántas veces te ha llegado algo a tu plato que no es lo que
                  pediste?
                </li>
                <li>
                  ¿Todo mundo ha terminado de comer mientras tú sigues esperando
                  a que llegue tu orden?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <section className="uk-section uk-section-large uk-overflow-hidden">
          <div className="uk-container">
            <h2 className="uk-heading-medium">
              Mejora la experiencia de tus clientes
            </h2>
          </div>
        </section> */}
      </div>
    );
  }
}

export default Landing;
