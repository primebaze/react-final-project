import React from "react";
import "./homebody.css";
import profileImage from "../assets/me.png";
import btnImage from "../assets/hireme.png";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Homebody = () => {
  return (
    <section id="main-introduction">
      <div className="intro-content">
        <div className="profile-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="text-container">
          <span className="greeting">Welcome</span>
          <span className="introText">
            To My <span className="person-name">Online</span> <br />
            Portfolio
          </span>
          <p className="intro-paragraph">
            I'm a highly skilled web developer with 7 years of experience
            creating beautiful and functional websites for clients in various
            industries.
            <br />
            Proficient in React, Python, HTML, CSS, JavaScript, PHP, WordPress
            and Other CMS platforms. Passionate about developing clean,
            user-friendly interfaces that meet clients' needs and exceed their
            expectations.
          </p>
          <Link to="/clients">
            <button className="custom-btn">
              <img src={btnImage} alt="Hire" className="btn-image" /> Hire Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homebody;
