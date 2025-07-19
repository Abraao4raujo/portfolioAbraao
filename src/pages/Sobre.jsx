import { MdOutlineWorkOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import "../styles/Sobre.css"

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="sobre-container">
        <h2 className="nome">Abraão Araujo</h2>
        <h3 className="titulo">Desenvolvedor Full Stack</h3>
        <p className="descricao">Apaixonado pela arte de criar soluções através de códigos.</p>
        <div className="botoes">
          <a href="#projetos" className="btn btn-primario">
            <MdOutlineWorkOutline />
            <span>Visualizar Projetos</span>
          </a>
          <a href="#contato" className="btn btn-secundario">
            <CiMail />
            <span>Entre em contato</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
