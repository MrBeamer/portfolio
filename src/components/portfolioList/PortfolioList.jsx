import "./portfolioList.scss";

export default function PortfolioList({ item, active, onSelectClick }) {
  return (
    <li
      id={item.id}
      className={active ? "portfolio-list__tab active" : "portfolio-list__tab"}
      onClick={(event) => onSelectClick(event)}
    >
      {item.title}
    </li>
  );
}
