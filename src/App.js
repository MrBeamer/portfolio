import React, { useState } from "react";

import "./App.scss";
import {
  Header,
  About,
  Contact,
  Portfolio,
  SideNavigation,
} from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="App">
      <SideNavigation isOpen={isOpen} onOpenClick={handleOpenClick} />
      <div className="sections">
        <Header onOpenClick={handleOpenClick} isOpen={isOpen} />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
