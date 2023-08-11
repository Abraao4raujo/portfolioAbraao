import './contactSection.css';

const ContactSection = () => {
  return (
    <div className="contato js-scroll">
      <div className="parte-contato">
        <h1>Contatos</h1>
        <span className="reta"></span>
        <div className="container">
          <ContactInfoCard
            title="Email:"
            info="a68816619@gmail.com"
          />
          <ContactInfoCard
            title="Telefone"
            info="+55 82 999705098"
          />
          <ContactLinkCard
            githubLink="https://github.com/Abraao4raujo"
            linkedinLink="https://www.linkedin.com/in/abraao4raujo/"
          />
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard = ({ title, info }) => {
  return (
    <div className="coluna">
      <div className="card-contato">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

const ContactLinkCard = ({ githubLink, linkedinLink }) => {
  return (
    <div className="coluna">
      <div className="card-contato contato-link">
        <div className="primeiro-link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src="img/github-logo.png" alt="GitHub" width="50px" />
          </a>
        </div>
        <div className="segundo-link">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <img
              src="img/180-1804713_linkedin-icon-for-resume.png"
              alt="LinkedIn"
              width="50px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
