import { BsLink45Deg } from "react-icons/bs";

const PortfolioItem = ({ name, link, desc }) => {
  return (
    <div className="container-project">
      <div className="header-container">
        <h3 className="title-project">{name}</h3>
        <a href={link} target="_blank">
          <BsLink45Deg style={{ color: "#fff" }} />
        </a>
      </div>

      <p>{desc}</p>
    </div>
  );
};

export default PortfolioItem;
