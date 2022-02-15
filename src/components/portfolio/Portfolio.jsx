import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio__headline">Portfolio</h2>
      <ul className="portfolio__tab-list">
        <li className="portfolio__tab active">Websites</li>
        <li className="portfolio__tab">Games</li>
      </ul>
      <div className="portfolio__container">
        <div className="portfolio__item">
          <img
            className="portfolio__img"
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="product feedback birdie"
          />
          <h3 className="portfolio__title">Product Feedback</h3>
        </div>
        <div className="portfolio__item">
          <img
            className="portfolio__img"
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="product feedback birdie"
          />
          <h3 className="portfolio__title">Product Feedback </h3>
        </div>
        <div className="portfolio__item">
          <img
            className="portfolio__img"
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="product feedback birdie"
          />
          <h3 className="portfolio__title">Product Feedback</h3>
        </div>
        <div className="portfolio__item">
          <img
            className="portfolio__img"
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="product feedback birdie"
          />
          <h3 className="portfolio__title">Product Feedback</h3>
        </div>
      </div>
    </div>
  );
}
