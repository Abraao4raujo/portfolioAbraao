import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Trabalhos from "./pages/Trabalhos";
import Contato from "./pages/Contato";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { BsArchive, BsLightbulb } from "react-icons/bs";
import "./main.css";

const App = () => {
  function clickLink(event) {
    tirarCor();
    colocarCor(event);
    event.preventDefault();
  }

  function colocarCor(event) {
    event.target.style.color = "#263cc9";
  }

  function tirarCor() {
    const links = document.querySelectorAll(".linkTo");
    const svg = document.querySelectorAll(".icon");

    links.forEach((element) => {
      element.children[0].style.color = "#cdd2df";
    });

    svg.forEach((element) => {
      element.children[0].style.color = "#cdd2df";
      element.style.color = "#cdd2df";
    });
  }

  return (
    <div className="app">
      <BrowserRouter>
        <nav className="navList navbar">
          <Link to="/">
            <span className="name">&lt;AbraãoAraujo/&gt;</span>
          </Link>
          <ul className="lista-menu">
            <li className="linkTo" onClick={clickLink}>
              <Link to="/">Sobre</Link>
            </li>

            <li className="linkTo" onClick={clickLink}>
              <Link to="/habilidades">
                <BsLightbulb className="icon" />
                Habilidades
              </Link>
            </li>

            <li className="linkTo" onClick={clickLink}>
              <Link to="/projetos">
                <BsArchive className="icon" />
                Projetos
              </Link>
            </li>

            <li className="linkTo" onClick={clickLink}>
              <Link to="/trabalhos">
                <MdWorkOutline className="icon" />
                Trabalhos
              </Link>
            </li>

            <li className="linkTo" onClick={clickLink}>
              <Link to="/contato">
                <AiOutlineMessage className="icon" />
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
