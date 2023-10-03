import { useState } from "react";
import "./portfolioSection.css";
import { useEffect } from "react";
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

const PortfolioSection = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const getGithubAPI = () => {
      fetch("https://api.github.com/users/Abraao4raujo/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          const data = await res.json();
          setGithubData(data);
          console.log(data);
        })
        .catch((e) => console.log(e));
    };

    getGithubAPI();
  }, []);

  return (
    <div className="portfolio">
      <div className="parte-portfolio">
        <h1>Portfólio</h1>
        <span className="reta"></span>
        <div className="grid-container">
          {githubData ? (
            githubData.map((item) => (
              <PortfolioItem
                key={item.id}
                name={item.name}
                link={item.homepage || item.html_url}
                desc={item.description}
              />
            ))
          ) : (
            <p>Loading Repository...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
