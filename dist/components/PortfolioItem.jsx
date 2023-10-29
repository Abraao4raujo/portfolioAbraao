import { BsLink45Deg } from "react-icons/bs";

const PortfolioItem = ({ name, link, desc }) => {
  return (
    <div className="containerPortfolio">
      <h4>{name}</h4>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <BsLink45Deg />
      </a>
      <p>{desc}</p>
    </div>
  );
};

export default PortfolioItem;
