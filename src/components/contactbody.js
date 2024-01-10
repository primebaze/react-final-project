import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactbody.css";
import walmartLogo from "../assets/walmart.png";
import adobeLogo from "../assets/adobe.png";
import microsoftLogo from "../assets/microsoft.png";
import facebookLogo from "../assets/facebook.png";
import facebookIcon from "../assets/facebook-icon.png";
import twitterIcon from "../assets/twitter.png";
import youtubeIcon from "../assets/youtube.png";
import instagramIcon from "../assets/instagram.png";

const Contactbody = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6phm4ar",
        "template_zcxds5a",
        form.current,
        "blaHt_5KIJ711DfGH"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactPageContainer">
      <div className="card" id="contactFormContainer">
        <h1 className="pageTitle">Contact Me</h1>
        <span className="contactDescription">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="nameInput"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="text"
            className="emailInput"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="messageInput"
          ></textarea>
          <button type="submit" value="Send" className="submitButton">
            Submit
          </button>
          <div className="socialLinks">
            <a
              href="https://www.facebook.com/PrimebazeOfficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="socialLink" />
            </a>
            <a
              href="https://www.twitter.com/primebaze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" className="socialLink" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=BOznS5ZA3Rw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="YouTube" className="socialLink" />
            </a>
            <a
              href="https://www.instagram.com/primebaze_official/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="socialLink" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactbody;
