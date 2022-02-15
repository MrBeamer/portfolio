import "./header.scss";
import clsx from 'clsx';

export default function Header({ onOpenClick, isOpen }) {

  const classNames = clsx ({
      "header": true,
      "active" : isOpen,
  })


  return (
    <header className={classNames}>
      <div className="header__wrapper">
        <div className="header__left">
          <a href="#intro" className="header__logo">
            beamer.
          </a>
        </div>
        <div className="header__right">
          <div className="hamburger" onClick={() =>onOpenClick()}>
            <span className="hamburger__line hamburger__line--1"></span>
            <span className="hamburger__line hamburger__line--2"></span>
            <span className="hamburger__line hamburger__line--3"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
