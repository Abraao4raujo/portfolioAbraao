import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          src="./img/foto-para-documento.jpg"
          alt="minha-foto"
          className="minha-foto"
        />
        <nav className="nav">
          <button className="btnMobile">
            <span className="hamburguer"></span>
          </button>
          <ul className="menu" role="menu">
            <li>
              <Link to="/sobre">{}Sobre</Link>
            </li>
            <li>
              <Link to="/habilidade">Habilidade</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
