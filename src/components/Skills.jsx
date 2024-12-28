import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Title title="Skills" />

      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: "orangered" }}></i>

          <span> HTML </span>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>

          <span> CSS </span>
        </div>
        <div>
          <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>

          <span> JavaScript </span>
        </div>
        <div>
          <i className="fa-brands fa-github"></i>

          <span> Github </span>
        </div>
        <div>
          <i
            className="fa-brands fa-python"
            style={{ color: "yellowgreen" }}
          ></i>
          <span> Python </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
