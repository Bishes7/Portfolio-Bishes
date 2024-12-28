import React from "react";
import bishes2 from "../assets/bishes2.png";
import Title from "./Title";

const About = () => {
  return (
    <section className="about" id="about">
      <Title title="About Me" />
      <div className="container flex about-content">
        <div className="flex-center myimage">
          <img src={bishes2} alt="" width="100%" />
        </div>
        <div className="bio container">
          <h2>Bishes Adhikari</h2>
          <p>
            Passionate full-stack developer skilled in both front-end
            technologies (HTML, CSS, JavaScript) and back-end development
            (Node.js, databases), creating efficient, responsive, and dynamic
            web applications. Dedicated to continuous learning and delivering
            innovative solutions.
          </p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span> Coding </span>
              <span>Meditation </span>
              <span>Cooking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
