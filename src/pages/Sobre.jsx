import { AiFillLinkedin, AiFillGithub, AiOutlineMessage } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <div className="content-about section">
        <div className="socialNetwork">
          <a href="https://www.linkedin.com/in/abraao4raujo/" target="_blank">
            <AiFillLinkedin style={{ color: "#263CC9" }} />
          </a>
          <a href="https://github.com/Abraao4raujo" target="_blank">
            <AiFillGithub style={{ color: "#263CC9" }} />
          </a>
        </div>
        <div className="content-text">
          <h1 className="apresentacao h1">
            Olá, me chamo Abraão! <BiCodeAlt style={{ color: "#263CC9" }} />
          </h1>
          <h3 className="apresentacao h3">Desenvolvedor FullStack</h3>
          <p className="apresentacao paragrafo">
            Apaixonado pela arte de criar soluções através do código.
          </p>
          <button className="btnContato">
            <Link to="contato" className="linkContato">
              Fale comigo <AiOutlineMessage className="icons" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sobre;
