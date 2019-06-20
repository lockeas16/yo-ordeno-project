import React, { Component } from "react";
import slide1 from "./app/assets/clientsatisfaction.jpg";
import slide2 from "./app/assets/clientsatisfaction2.jpg";
import slide3 from "./app/assets/clientsatisfaction3.jpg";

class Landing extends Component {
  render() {
    return (
      <div uk-height-viewport="offset-top: true; expand: true">
        <section className="uk-section uk-section-xlarge uk-overflow-hidden hero">
          <div className="uk-container">
            <div className="uk-panel uk-light ">
              <h2 className="uk-heading-medium">
                Permite que el cliente tome el control de lo que ordena
              </h2>
              <ul
                uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.3;"
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
        <section className="uk-section uk-overflow-hidden uk-padding-remove">
          <div className="uk-inline uk-width-expand">
            {/* slideshow */}
            <div
              uk-slideshow="autoplay: true; autoplay-interval: 5000"
              className="uk-height-large"
            >
              <ul className="uk-slideshow-items">
                <li>
                  <img src={slide1} alt="slide1" uk-cover="true" />
                </li>
                <li>
                  <img src={slide2} alt="slide2" uk-cover="true" />
                </li>
                <li>
                  <img src={slide3} alt="slide3" uk-cover="true" />
                </li>
              </ul>
            </div>
            {/* overlay of slideshow */}
            <div className="uk-overlay bgMuted uk-position-center">
              <div className="uk-text-center uk-light">
                <h2 className="uk-heading-medium">
                  Mejora la experiencia de tus clientes
                </h2>
              </div>
              <div
                className="uk-child-width-1-2@s uk-grid-collapse uk-text-center"
                uk-grid="true"
              >
                <div>
                  <div className="uk-tile ">
                    <div className="uk-light ">
                      <h2 uk-parallax="opacity: 0,1; x: -500,0; scale: 0.5,1; viewport: 0.7;">
                        Fortalece tu relación con ellos
                      </h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="uk-tile">
                    <div className="uk-light ">
                      <h2 uk-parallax="opacity: 0,1; x: 500,0; scale: 0.5,1; viewport: 0.7;">
                        Que los clientes siempre quieran regresar
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
