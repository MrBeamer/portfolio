import "./intro.scss";

export default function Intro() {
  // use ref is like document.querySelector to target a spe element

  return (
    <div className="intro" id="intro">
      <div className="intro__content">
        <h2 className="intro__title--1">Hi, my name is</h2>
        <h1 className="intro__title--2">Michael Beamer</h1>
        <h2 className="intro__title--3">I build things for the web</h2>
        <p className="intro__text">
          I'm a Frontend Developer based in Berlin. I enjoy creating things that
          live on the internet, whether that be websites, small web
          applications, or anything in between.
        </p>
        <a href="#portfolio" className="intro__icon-link">
          <img
            src="assets/arrow.png"
            alt="arrow down"
            className="intro__icon"
          ></img>
        </a>
        <button className="intro__btn">Contact me</button>
      </div>
    </div>
  );
}
