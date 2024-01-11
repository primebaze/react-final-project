import React, { useEffect, useState } from "react";
import "./portfolio.css";
import Portfolio1 from "../assets/portfolio-1.jpg";
import Portfolio2 from "../assets/portfolio-2.jpg";
import Portfolio3 from "../assets/portfolio-3.jpg";
import Portfolio4 from "../assets/portfolio-4.jpg";
import Portfolio5 from "../assets/portfolio-5.jpg";
import Portfolio6 from "../assets/portfolio-7.png";

const portfolioImages = [
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5,
  Portfolio6,
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  // Start of Gist Json File
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/primebaze/75d9c7ad8935d99f000fb76621822b4a/raw/bc81516adf719e3dd6e9686e777c57ccd97656e5/projects.json"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);
  console.log(projects);

  return (
    <section id="unique-works">
      <h2 className="unique-worksTitle">My Portfolio</h2>
      <span className="unique-worksDesc">
        Developed and maintained the company's website using HTML, CSS, and
        JavaScript, implementing responsive design principles and front-end
        frameworks such as React and AngularJS to create a visually appealing
        and user-friendly interface that improved user engagement and
        satisfaction
      </span>
      {projects.length > 0 && (
        <div className="unique-worksImgs">
          {projects.map((project, index) => (
            <div key={index}>
              <img
                src={portfolioImages[index]}
                alt=""
                className="unique-worksImg"
                title={project.projectName}
              />
              <h2>{project.projectName}</h2>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
