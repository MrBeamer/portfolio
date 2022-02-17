import data from "../../data.json";
import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="testimonials__title">Testimonials</h1>
      <div className="testimonials__container">
        {data.testimonialList.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className={testimonial.highlight ? "card highlight" : "card"}
            >
              <div className="card__top">
                <img
                  className="card__arrow"
                  src="assets/right-arrow.png"
                  alt="right arrow"
                />
                <img
                  className="card__avatar"
                  src={testimonial.avatar}
                  alt="avatar"
                />
                <img
                  className="card__social"
                  src="assets/linkedin.png"
                  alt="linkedin icon"
                />
              </div>
              <div className="card__center">{testimonial.comment}</div>
              <div className="card__bottom">
                <h2 className="card__name">{testimonial.name}</h2>
                <h3 className="card__occupation">{testimonial.job}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
