import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Trabalhos from "./pages/Trabalhos";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="habilidades">
          <Habilidades />
        </section>
        <section id="projetos">
          <Projetos />
        </section>
        <section id="trabalhos">
          <Trabalhos />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </main>
      <ToastContainer />
    </div>
  );
};

export default App;
