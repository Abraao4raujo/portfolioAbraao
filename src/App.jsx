import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Trabalhos from "./pages/Trabalhos";
import Contato from "./pages/Contato";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMessage, AiOutlineMenu } from "react-icons/ai";
import { BsArchive, BsLightbulb } from "react-icons/bs";
import "./main.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="navList navbar">
          <Link to="/">
            <span className="name">&lt;AbraãoAraujo/&gt;</span>
          </Link>
          <ul className="lista-menu">
            <li className="linkTo">
              <Link to="/" style={{ color: "#263CC9" }}>
                Sobre
              </Link>
            </li>

            <li className="linkTo">
              <Link to="/habilidades">
                <BsLightbulb className="icon" />
                Habilidades
              </Link>
            </li>

            <li className="linkTo">
              <Link to="/projetos">
                <BsArchive className="icon" />
                Projetos
              </Link>
            </li>

            <li className="linkTo">
              <Link to="/trabalhos">
                <MdWorkOutline className="icon" />
                Trabalhos
              </Link>
            </li>

            <li className="linkTo">
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
