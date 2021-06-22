import { FunctionComponent } from 'react';
import './NavBar.css';

const NavBar: FunctionComponent = () => {
  return (
    <nav id="containerColor" className="navbar navbar-inverse navbar-fixed-top navbar-right">
      <div className="container">
        <div className="navbar-header" id="mobilenav">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
            id="burgerbutton"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand logo" data-target="#navbar" data-toggle="collapse">
            <img className="logo-img" src="img/logomini-cabecera-1.png" alt="Pandora Veterinaria" />
          </a>
          <div className="adress">
            <p>
              <a className="icon ubication" href="https://goo.gl/maps/tEw9QbUZc8SEmphQA">
                Bahia de Palma, 4 Madrid
              </a>
              <a className="icon phone" href="tel:912 101 633">
                912 101 633
              </a>
              <span className="icon mobile">Urgencias:</span>{' '}
              <a href="tel:620 473 165">620 473 165</a>
            </p>
          </div>
        </div>
        <div id="navbar" className="collapse navbar-collapse navbar-right">
          <ul className="nav navbar-nav">
            <li>
              <a className="scroll" href="#about">
                Nosotros
              </a>
            </li>
            <li>
              <a className="scroll" href="#services">
                Servicios
              </a>
            </li>
            <li>
              <a className="scroll" href="#clients">
                Clientes
              </a>
            </li>
            <li>
              <a className="scroll" href="#contact">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
