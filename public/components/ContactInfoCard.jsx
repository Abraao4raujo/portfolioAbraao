import "./contactSection.css";

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

export default ContactInfoCard;
