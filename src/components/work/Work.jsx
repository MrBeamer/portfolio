import { useState } from "react";
import "./work.scss";
import data from "../../data.json";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleSlideClick(event) {
    const id = event.currentTarget.id;
    id === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < data.works.length - 1 ? currentSlide + 1 : 0
        );
  }

  return (
    <div className="work" id="work">
      <h2 className="work__headline">Portfolio</h2>

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.works.map((work) => {
          return (
            <div key={work.id} className="slider__container">
              <div className="slider__item">
                <div className="slider__item-left">
                  <div className="slider__container-left">
                    <div className="slider__titles">
                      <h2 className="slider__title"> {work.title}</h2>
                      <h2 className="slider__subtitle"> {work.subtitle}</h2>
                    </div>
                    <p className="slider__description">{work.desc}</p>
                    <div className="slider__buttons">
                      <a
                        className="slider__btn"
                        href={work.web}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-globe fas"></i>
                      </a>
                      <a
                        className="slider__btn"
                        href={work.git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-github fab"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider__item-right">
                  <img className="slider__img-right" src={work.img} alt="pic" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        id="left"
        src="assets/arrow.png"
        alt="arrow left"
        className="slider__arrow left"
        onClick={handleSlideClick}
      />
      <img
        id="right"
        src="assets/arrow.png"
        alt="arrow left"
        className="slider__arrow right"
        onClick={handleSlideClick}
      />
    </div>
  );
}
