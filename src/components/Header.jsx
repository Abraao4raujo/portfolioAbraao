import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Abraão</h1>
        <ul className="nav-links">
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#trabalhos">Trabalhos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
