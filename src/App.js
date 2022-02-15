import React, { useState } from "react";

import "./App.scss";
import {
  Header,
  Intro,
  Contact,
  Testimonials,
  Portfolio,
  Work,
  SideNavigation,
} from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="App">
      <Header onOpenClick={handleOpenClick} isOpen={isOpen} />
      <SideNavigation isOpen={isOpen} onOpenClick={handleOpenClick} />
      <main className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
