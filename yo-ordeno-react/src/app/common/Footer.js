import React from "react";

const Footer = () => (
  <footer className="uk-section uk-section-xsmall uk-section-secondary">
    <div className="uk-container uk-container-expand">
      <nav
        className="uk-navbar-container uk-navbar-transparent"
        uk-navbar="true"
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>Desarrollado por Ironhacker Pedro Aviles</li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-iconnav">
            <li>Sígueme en:</li>
            <li>
              <a href="https://github.com/lockeas16/" uk-icon="icon: github" />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pedroAvSh/"
                uk-icon="icon: linkedin"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
