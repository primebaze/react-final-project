import React from "react";
import "./workofart.css";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";

const Workofart = () => {
  return (
    <section id="unique-skills">
      <span className="unique-skillTitle">Know More About Me</span>
      <span className="unique-skillDesc">
        WORK EXPERIENCE Full-Stack Web developer PRIMEBAZE FREELANCE SERVICES [
        18/01/2023 – Current ] • Networked with hundreds of freelancers to
        provide web design and development services world wide • Developed and
        maintained several websites using HTML, CSS, JavaScript, and PHP •
        Worked closely with clients to understand their needs and develop
        tailored solutions • Collaborated with graphic designers to create
        visually appealing interfaces • Optimized websites for performance, SEO,
        and accessibility • Managed web hosting and domain name registration for
        clients • Trained clients on using CMS platforms to manage their own
        content • Led the development of several web applications for clients
        using technologies such as PHP, MySQL, HTML, CSS, and JavaScript. •
        Conducted thorough testing of all code to ensure functionality and
        security. • Collaborated with clients and project managers to understand
        project requirements and deliver results on time and within budget. •
        Implemented various third-party integrations such as payment gateways
        and social media APIs. Web Development Consultant SGL SECURITY SERVICES
        [ 10/04/2021 – 29/11/2022 ] • Advise clients on web development best
        practices, including front-end and back-end development, ecommerce
        solutions, content management systems (CMS), and search engine
        optimization (SEO), resulting in a 25% increase in website traffic and
        engagement for clients. • Collaborate with clients to identify their
        business needs, goals, and target audience, and develop web development
        strategies that align with their vision and objectives, resulting in an
        increase in client satisfaction. • Conduct thorough website audits to
        assess performance, functionality, usability, and security, and provide
        recommendations for improvements, resulting in a 30% increase in website
        performance and security for clients. • Develop custom web development
        plans and roadmaps, outlining project timelines, milestones, and
        deliverables, and manage project execution, ensuring projects are
        completed on time, within budget, and to the client's satisfaction. •
        Provide technical expertise and support for clients, including
        troubleshooting, debugging, and resolving technical issues, resulting in
        a 15% reduction in website downtime and errors. • Collaborate with
        cross-functional teams, including designers, developers, project
        managers, and clients, to ensure seamless communication and
        collaboration throughout the project lifecycle. • Stay up-to-date with
        the latest web development trends, technologies, and tools, and provide
        thought leadership and guidance to clients on emerging opportunities and
        challenges in the web development space. • Conduct training and
        workshops for clients and their staff, sharing best practices, tools,
        and techniques for effective web development and digital marketing
      </span>
      <div className="unique-skillBars">
        <div className="unique-skillBar">
          <img src={UIDesign} alt="UIDesign" className="unique-skillBarImg" />
          <div className="unique-skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className="unique-skillBar">
          <img src={WebDesign} alt="WebDesign" className="unique-skillBarImg" />
          <div className="unique-skillBarText">
            <h2>Website Design</h2>
            <p>
              This demo text can be changed while making the production-ready
              website.
            </p>
          </div>
        </div>
        <div className="unique-skillBar">
          <img src={AppDesign} alt="AppDesign" className="unique-skillBarImg" />
          <div className="unique-skillBarText">
            <h2>App Design</h2>
            <p>You can write text related to mobile app development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workofart;
