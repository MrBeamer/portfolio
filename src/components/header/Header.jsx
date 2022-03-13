import "./header.scss";
import { Intro, Navbar } from "../";

export default function Header({ onOpenClick, isOpen }) {
  return (
    <header className="header">
      <Navbar onOpenClick={onOpenClick} isOpen={isOpen} />
      <Intro />
    </header>
  );
}
