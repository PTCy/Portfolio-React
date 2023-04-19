import React from "react";
import "./project.css";
import DataProject from "./DataProject";


export const Project = () => {
  const data = DataProject();
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
