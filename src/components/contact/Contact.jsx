import { useState } from "react";

import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [contact, setContact] = useState({
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    // event.preventDefault();
    setMessage(true);

    setInterval(function () {
      setMessage(false);
    }, 5000);

    setContact({
      email: "",
      message: "",
    });
  }
  console.log(contact);
  function handleChangeForm(event) {
    const value = event.currentTarget.value;
    const input = event.currentTarget.name;
    console.log(input);
    console.log(value);

    setContact((prevContact) => {
      return { ...prevContact, [input]: value };
    });
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
          method="post"
          // data-netlify="true"
          onSubmit={handleSubmit}
          action="https://formsubmit.co/beamermichael@gmail.com"
        >
          <input
            className="contact__input"
            type="email"
            placeholder="Email"
            required
            value={contact.email}
            onChange={handleChangeForm}
            name="email"
          ></input>
          <textarea
            className="contact__textarea"
            placeholder="Message"
            required
            value={contact.message}
            onChange={handleChangeForm}
            name="message"
          ></textarea>
          <button type="submit" className="contact__btn">
            Send
          </button>
          {message && (
            <span className="contact__message">
              Thanks, I will reply as soon as possible.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
