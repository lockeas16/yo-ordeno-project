import React, { Component } from "react";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div uk-height-viewport="offset-top: true; expand: true">
        <section className="uk-section uk-section-xlarge  uk-overflow-hidden hero">
          <div className="uk-container">
            <div className="uk-panel uk-light ">
              <h2 className="uk-heading-medium">
                Toma el control de lo que ordena tu cliente
              </h2>
              <ul
                uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.6;"
                className="uk-list uk-text-bold uk-text-warning uk-text-right"
              >
                <li>
                  Que los meseros dejen de preocuparse por recordar cada orden
                </li>
                <li>
                  Ayuda a tus clientes a preocuparse por comer y no por esperar
                  a que hora llegará su orden
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="uk-section uk-section-large uk-overflow-hidden bg-image2">
          <div className="uk-container">
            <h2 className="uk-heading-medium">
              Mejora la experiencia de tus clientes
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
