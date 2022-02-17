import { useState } from "react";

import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(true);

    setInterval(function () {
      setMessage(false);
    }, 5000);
  }

  return (
    <div className="contact" id="contact">
      <div className="contact__left">
        <img className="contact__img" src="assets/shake.svg" alt="handshake" />
      </div>
      <div className="contact__right">
        <h2 className="contact__title">Contact</h2>
        <form
          className="contact__form"
          onSubmit={handleSubmit}
          method="post"
          data-netlify="true"
        >
          <input
            className="contact__input"
            type="text"
            placeholder="Email"
            required
          ></input>
          <textarea
            className="contact__textarea"
            placeholder="Message"
            required
          ></textarea>
          <button className="contact__btn">Send</button>
        </form>
        {message && (
          <p className="contact__message">
            Thanks, I will reply as soon as possible :)
          </p>
        )}
      </div>
    </div>
  );
}
