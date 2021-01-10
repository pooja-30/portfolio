import React from "react";
import PageTitle from "./PageTitle";
import "../App.css";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_653ab85",
        "template_6gtocse",
        e.target,
        "user_jCquOHe4dWDlWHJY7awU4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contactMe" id="contact">
      <PageTitle title="LET'S GET IN TOUCH" class="heading-white" />
      <div className="contact-content">
        <p className="intro">
          Drop me an e-mail at poojavillis@gmail.com or simply fill out the form
          below and I will reply to you soon!
        </p>
        <form className="form" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="mail"
            placeholder="Name"
          />{" "}
          <br />
          <input
            type="email"
            name="mail"
            className="mail"
            placeholder="E-mail address"
          />{" "}
          <br />
          <textarea
            className="text-area"
            placeholder="Your message"
            name="message"
          ></textarea>
          <br />
          <button className="button">
            <span className="btn-span">SEND </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
