import { useEffect, useRef } from "react";

import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  // use ref is like document.querySelector to target a spe element
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef);

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer", "Brand Manager"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__img-container">
          <img className="intro__img" src="assets/me.png" alt="michael" />
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__wrapper">
          <h2 className="intro__headline-intro">Hi There, I'm</h2>
          <h1 className="intro__headline-name">Michael Beamer</h1>
          <h3 className="intro__headline-occupation">
            Freelancer{" "}
            <span ref={textRef} className="intro__span typed-cursor"></span>
          </h3>
        </div>
        <a href="#portfolio" className="intro__icon-link">
          <img
            src="assets/down.png"
            alt="arrow down"
            className="intro__icon"
          ></img>
        </a>
      </div>
    </div>
  );
}
