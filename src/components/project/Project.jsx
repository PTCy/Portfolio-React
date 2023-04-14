import React from "react";
import "./project.css";
import Img1 from "../../assets/web-hotel.jpeg";
import Img2 from "../../assets/web-rocket.jpeg";
import Img3 from "../../assets/app.png";
import Img4 from "../../assets/portfolio.png";
import Img5 from "../../assets/ux-ui.jpg";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Hotel Booking",
    github: "https://github.com/PTCy",
    demo: "http://localhost/hotelbooking/index.php",
  },

  {
    id: 2,
    img: Img2,
    title: "Rocket Coffee",
    github: "https://github.com/PTCy",
    demo: "https://web-design-1c0f4.web.app/",
  },

  {
    id: 3,
    img: Img3,
    title: "Life History Application",
    github: "https://github.com/PTCy/HistoryAppFlutter",
    demo: "https://github.com/PTCy/HistoryAppFlutter",
  },

  {
    id: 4,
    img: Img4,
    title: "Portfolio With React",
    github: "https://github.com/PTCy",
    demo: "#",
  },

  {
    id: 5,
    img: Img5,
    title: "UX/UI Design",
    github: "https://github.com/PTCy",
    demo: "http://localhost/hotelbooking/index.php",
  },
];

export const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container project-container">
        {data.map((item) => {
          return (
            <article key={item.id} className="project-item">
              <div className="project-img">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className="project-cta">
                <a href={item.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={item.demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
