import React from "react";
import "./skills.css";
import { BsFillPatchCheckFill} from "react-icons/bs";

function Skills() {
  return (
    <section id="skills">
            <h5>What Skills I have</h5>
      <h2>My Skills</h2>
      <div className="container skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills-content">
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon" />
              <div>
                <h4>Dart</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* tools-skills */}
        <div className="tools-skills">
          <h3>Tools / Frameworks</h3>
          <div className="skills-content">
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon"/>
              <div>
                <h4>Bootstrap 5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon" />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills-details">
              <BsFillPatchCheckFill className="skills-icon" />
              <div>
                <h4>Adobe XD</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
