import { useState } from "react";
import { useEffect } from "react";
import "./portfolioSection.css";
import PortfolioItem from "./PortfolioItem.jsx";

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
            githubData.map(({ id, name, homepage, html_url, description }) => (
              <PortfolioItem
                key={id}
                name={name}
                link={homepage || html_url}
                desc={description}
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
