import "./App.scss";
import {
  Header,
  Intro,
  Contact,
  Testimonials,
  Portfolio,
  Work,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
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
