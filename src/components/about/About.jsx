import React from "react";
import "./about.css";
import AboutImage from "../../assets/about-image.jpg";
import { FaAward } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Now</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={AboutImage} alt="About-image" />
          </div>
        </div>
        <div className="about-content">
          <p>
            I like designing and coding. I have Full Stack Developer skills. I
            can write programs on the front end and connect to database. I am
            always learning new things. I hope my talents will help develop your
            organization.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let,s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
