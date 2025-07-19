import "../styles/PortfolioItem.css";

const PortfolioItem = ({ name, desc, link }) => {
  return (
    <div className="portfolio-card">
      <h3 className="portfolio-title">{name}</h3>
      <p className="portfolio-desc">{desc}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
        Ver Projeto
      </a>
    </div>
  );
};

export default PortfolioItem;
