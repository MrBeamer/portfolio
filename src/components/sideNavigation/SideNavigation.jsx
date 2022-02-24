import "./sideNavigation.scss";
import clsx from "clsx";

export default function SideNavigation({ isOpen, onOpenClick }) {
  const classNames = clsx({
    "side-navigation": true,
    active: isOpen,
  });

  return (
    <div className={classNames}>
      <ul className="side-navigation__list">
        <li className="side-navigation__item" onClick={() => onOpenClick()}>
          <a href="#intro" className="side-navigation__link">
            Home
          </a>
        </li>
        <li className="side-navigation__item" onClick={() => onOpenClick()}>
          <a href="#about" className="side-navigation__link">
            About me
          </a>
        </li>
        <li className="side-navigation__item" onClick={() => onOpenClick()}>
          <a href="#portfolio" className="side-navigation__link">
            Portfolio
          </a>
        </li>
        {/* <li className="side-navigation__item" onClick={() => onOpenClick()}>
          <a href="#work" className="side-navigation__link">
            Work
          </a>
        </li>
        <li className="side-navigation__item" onClick={() => onOpenClick()}>
          <a href="#testimonials" className="side-navigation__link">
            Testimonials
          </a>
        </li> */}
        <li className="side-navigation__item" onClick={() => onOpenClick()}>
          <a href="#contact" className="side-navigation__link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
