import React from "react";
import "./portfolio.css";
import Portfolio1 from "../assets/portfolio-1.jpg";
import Portfolio2 from "../assets/portfolio-2.jpg";
import Portfolio3 from "../assets/portfolio-3.jpg";
import Portfolio4 from "../assets/portfolio-4.jpg";
import Portfolio5 from "../assets/portfolio-5.jpg";
import Portfolio6 from "../assets/portfolio-7.png";

const Portfolio = () => {
  return (
    <section id="unique-works">
      <h2 className="unique-worksTitle">My Portfolio</h2>
      <span className="unique-worksDesc">
        Developed and maintained the company's website using HTML, CSS, and
        JavaScript, implementing responsive design principles and front-end
        frameworks such as React and AngularJS to create a visually appealing
        and user friendly interface that improved user engagement and
        satisfaction
      </span>
      <div className="unique-worksImgs">
        <img src={Portfolio1} alt="" className="unique-worksImg" />
        <img src={Portfolio2} alt="" className="unique-worksImg" />
        <img src={Portfolio3} alt="" className="unique-worksImg" />
        <img src={Portfolio4} alt="" className="unique-worksImg" />
        <img src={Portfolio5} alt="" className="unique-worksImg" />
        <img src={Portfolio6} alt="" className="unique-worksImg" />
      </div>
      {/* <button className="unique-workBtn">See More</button> */}
    </section>
  );
};

export default Portfolio;
