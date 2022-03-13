import { useState, useEffect } from "react";
import { PortfolioList } from "..";
import "./portfolio.scss";
import data from "../../data.json";

export default function Portfolio() {
  const [selected, setSelected] = useState("website");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "website":
        setPortfolio(data.websitePortfolio);
        break;
      case "webapp":
        setPortfolio(data.webPortfolio);
        break;
      case "game":
        setPortfolio(data.gamePortfolio);
        break;
      default:
        console.log("error");
        break;
    }
  }, [selected]);

  function handleSelectClick(event) {
    const id = event.currentTarget.id;
    setSelected(id);
  }

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio__headline">Portfolio</h2>
      <ul className="portfolio__tab-list">
        {data.portfolioList.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              item={item}
              active={selected === item.id}
              onSelectClick={handleSelectClick}
            />
          );
        })}
      </ul>
      <div className="portfolio__container">
        {portfolio.map((portfolio) => {
          return (
            <div key={portfolio.id} className="portfolio__card">
              <img
                className="portfolio__img"
                src={portfolio.img}
                alt={portfolio.title}
              />
              <h3 className="portfolio__title">{portfolio.title}</h3>
              <div className="portfolio__label-container">
                <p className="portfolio__label">API</p>
                <p className="portfolio__label">React</p>
                <p className="portfolio__label">Stripe</p>
              </div>
              <div className="portfolio__link-container">
                <a href={portfolio.web} target="_blank" rel="noreferrer">
                  <i className="fa-globe fas"></i>
                </a>
                <a href={portfolio.git} target="_blank" rel="noreferrer">
                  <i className="fa-github fab"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
