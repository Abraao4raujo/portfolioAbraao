import "./portfolioSection.css";

const PortfolioSection = () => {
  return (
    <div className="portfolio">
      <div className="parte-portfolio">
        <h1>Portfólio</h1>
        <span className="reta"></span>
        <div className="imagem-container">
          <PortfolioItem
            link="https://lista-jogos-roan.vercel.app/"
            imgSrc="img/listaJogos.png"
            alt="Lista de Jogos"
          />
          <PortfolioItem
            link="https://abraao4raujo.github.io/projeto-form"
            imgSrc="img/form.png"
            alt="Form Project"
          />
          <PortfolioItem
            link="/"
            imgSrc="img/syncstream.png"
            alt="Projeto ainda em desenvolvimento"
            desc="Projeto ainda em desenvolvimento..."
          />
          <PortfolioItem
            link="https://abraao4raujo.github.io/WebSite-Acai"
            imgSrc="img/projetoacai.png"
            alt="Projeto Açai Website"
          />
        </div>
      </div>
    </div>
  );
};

const PortfolioItem = ({ link, imgSrc, alt, desc }) => {
  return (
    <div className="imagem">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={alt} />
      </a>
      <p>{desc}</p>
    </div>
  );
};

export default PortfolioSection;
