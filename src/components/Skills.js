import React from "react";
import PageTitle from "./PageTitle";
import "../App.css";
import "./Skills.css";

function AboutMe() {
  return (
    <div className="techSkills" id="skills">
      <PageTitle width="20%" title="TECHNICAL SKILLS" class="heading" />
      <div className="content-skills">
        <p className="skill-header">Programming Languages </p>
        <p className="skill-content">
          <span>C++</span> <span>Python</span> <span>Java</span>
        </p>
        <p className="skill-header">Web Development </p>
        <p className="skill-content">
          <span>HTML</span> <span>CSS</span> <span>JavaSript</span>{" "}
          <span>React</span> <span>Node.js</span>
        </p>
        <p className="skill-header">Database </p>
        <p className="skill-content">
          <span>SQL</span> <span>MongoDB</span>
        </p>
        <p className="skill-header">Software and Tools </p>
        <p className="skill-content">
          <span>Atom</span> <span>Visual Studio</span> <span>Oracle</span>{" "}
          <span>Kony Visualizer</span> <span>Git</span>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
