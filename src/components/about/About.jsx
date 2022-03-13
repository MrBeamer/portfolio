import "./about.scss";

export default function About() {
  return (
    <div id="about" className="about">
      <h2 className="about__headline">About</h2>
      <div className="about__container">
        <div className="about__content-left">
          <p className="about__text">
            Hello! My name is Michael and I enjoy creating things that live on
            the internet. My interest in web development started back in 2021
            when I decided to attend
            <span className="about__highlighted"> Le Wagon</span> — turns out it
            taught me a lot about Ruby, HTML & CSS!
          </p>
          <p className="about__text">
            Fast-forward to today, I’ve build a lot of different Projects in my
            free time. My main focus these days is learning
            <span className="about__highlighted"> new technologies </span>
            and
            <span className="about__highlighted"> good practices </span>
            to become a better Developer.
          </p>
          <p className="about__text last">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about__list">
            <li className="about__item">
              <i className="fas fa-caret-right"></i>
              JavaScript
            </li>
            <li className="about__item">
              <i className="fas fa-caret-right"></i>
              React
            </li>
            <li className="about__item">
              <i className="fas fa-caret-right"></i>
              Node.js
            </li>
          </ul>
        </div>

        <div className="about__content-right">
          <img className="about__img" src="/assets/me2.jpeg" alt="michael" />
        </div>
      </div>
    </div>
  );
}
