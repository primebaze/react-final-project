import React from "react";
import "./homebody.css";
import profileImage from "../assets/image.png";
import btnImage from "../assets/hireme.png";
import { Link } from "react-scroll";

const Homebody = () => {
  return (
    <section id="main-introduction">
      <div className="intro-content">
        <div className="profile-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="text-container">
          <span className="greeting">Hello,</span>
          <span className="introText">
            I'm <span className="person-name">Smith</span> <br />
            Website Designer
          </span>
          <p className="intro-paragraph">
            I am a skilled web designer with experience in creating
            <br />
            visually appealing and user-friendly websites.
          </p>
          <Link to="hire-section">
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
