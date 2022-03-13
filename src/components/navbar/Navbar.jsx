import "./navbar.scss";
import clsx from "clsx";

export default function Navbar({ onOpenClick, isOpen }) {
  const classNames = clsx({
    navbar: true,
    active: isOpen,
  });

  return (
    <nav className={classNames}>
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <a href="#intro" className="navbar__logo">
            beamer.
          </a>
        </div>
        <div className="navbar__right">
          <div className="hamburger" onClick={() => onOpenClick()}>
            <span className="hamburger__line hamburger__line--1"></span>
            <span className="hamburger__line hamburger__line--2"></span>
            <span className="hamburger__line hamburger__line--3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
