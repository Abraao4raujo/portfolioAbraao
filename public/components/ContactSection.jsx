import "./contactSection.css";
import ContactInfoCard from "./ContactInfoCard.jsx";
import ContactLinkCard from "./ContactLinkCard.jsx";

const ContactSection = () => {
  return (
    <div className="contato js-scroll">
      <div className="parte-contato">
        <h1>Contatos</h1>
        <span className="reta"></span>
        <div className="container">
          <ContactInfoCard title="Email:" info="a68816619@gmail.com" />
          <ContactInfoCard title="Telefone" info="+55 82 999705098" />
          <ContactLinkCard
            whatsappLink="https://api.whatsapp.com/send?phone=82999705098&text=Olá+Abraão%21+Eu+Estou+no+seu+site+e+gostaria+de+saber+mais+informações+sobre+seu+trabalho!"
            githubLink="https://github.com/Abraao4raujo"
            linkedinLink="https://www.linkedin.com/in/abraao4raujo/"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
