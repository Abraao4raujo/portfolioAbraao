import "./contactSection.css";

const ContactLinkCard = ({ whatsappLink, githubLink, linkedinLink }) => {
  return (
    <div className="coluna">
      <div className="card-contato contato-link">
        <div className="link">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="img/icon/whatsappIcon.png" alt="Whatsapp" width="50px" />
          </a>
        </div>
        <div className="link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src="img/icon/github-logo.png" alt="GitHub" width="50px" />
          </a>
        </div>
        <div className="link">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <img src="img/icon/linkedinIcon.png" alt="LinkedIn" width="50px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinkCard;
