import "./message.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BiLogoGithub } from "react-icons/bi";
import { AiFillLinkedin, AiOutlineRight } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

const Message = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_vtycolp",
        "template_ajosdmb",
        templateParams,
        "i1pRmwgG4zUTB2ckg"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Erro:", error);
        }
      );
  }
  return (
    <div className="containerBoxMessage">
      <div className="redesSociais">
        <div className="redeGithub">
          <a
            target="_blank"
            href="https://github.com/Abraao4raujo"
            className="linkRede"
            rel="noreferrer"
          >
            <BiLogoGithub className="iconRede" />
            <span className="infRede">Github</span>
            <span className="infRede">
              Ir para Github <AiOutlineRight />
            </span>
          </a>
        </div>
        <div className="redeLinkedin">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abraao4raujo/"
            className="linkRede"
            rel="noreferrer"
          >
            <AiFillLinkedin className="iconRede" />
            <span className="infRede">Linkedin</span>
            <span className="infRede">
              Ir para Linkedin <AiOutlineRight />
            </span>
          </a>
        </div>
      </div>
      <div className="messageBox">
        <h3 className="subtitulo">Me envie uma mensagem</h3>

        <div className="inputBox">
          <form action="#" onSubmit={sendEmail}>
            <input
              type="text"
              className="nome"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
            <input
              type="email"
              className="email"
              placeholder="Seu email"
              autoComplete="none"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
            <textarea
              name="caixaMensagem"
              className="caixaMensagem"
              cols="95.98"
              rows="12"
              placeholder="Escreva sua mensagem"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            ></textarea>
            <button
              type="submit"
              className="enviar"
              onClick={() => {
                window.alert("enviado!");
              }}
            >
              Enviar Mensagem
              <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
