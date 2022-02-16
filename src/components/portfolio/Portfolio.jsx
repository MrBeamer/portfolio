import { useState, useEffect } from "react";
import { PortfolioList } from "..";
import "./portfolio.scss";
import data from "../../data.json";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [portfolio, setPortfolio] = useState([]);

  console.log(portfolio);

  // const list = [
  //   { id: "websites", title: "Websites" },
  //   { id: "games", title: "Games" },
  //   { id: "other", title: "Other" },
  // ];

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setPortfolio(data.featuredPortfolio);
        break;
      case "web":
        setPortfolio(data.webPortfolio);
        break;
      case "mobile":
        setPortfolio(data.mobilePortfolio);
        break;
      case "design":
        setPortfolio(data.designPortfolio);
        break;
      case "content":
        setPortfolio(data.contentPortfolio);
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
        {list.map((item) => {
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
            <div key={portfolio.id} className="portfolio__item">
              <img
                className="portfolio__img"
                src={portfolio.img}
                alt={portfolio.title}
              />
              <h3 className="portfolio__title">{portfolio.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
