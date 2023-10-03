import "./contactSection.css";

const ContactLinkCard = ({ githubLink, linkedinLink }) => {
  return (
    <div className="coluna">
      <div className="card-contato contato-link">
        <div className="primeiro-link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src="img/icon/github-logo.png" alt="GitHub" width="50px" />
          </a>
        </div>
        <div className="segundo-link">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <img src="img/icon/linkedinIcon.png" alt="LinkedIn" width="50px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinkCard;
