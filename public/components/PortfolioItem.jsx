import { BsLink45Deg } from "react-icons/bs";

const PortfolioItem = ({ name, link, desc }) => {
  return (
    <div className="containerPortfolio">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h4>
          {name}
          <BsLink45Deg />
        </h4>
        <p>{desc}</p>
      </a>
    </div>
  );
};

export default PortfolioItem;
