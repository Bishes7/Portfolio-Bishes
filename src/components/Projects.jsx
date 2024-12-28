import React from "react";
import bishes1 from "../assets/bishes1.png";
import Title from "./Title";
import Card from "./Card";

const Projects = () => {
  const projects = [
    {
      image: bishes1,
      github: "https://github.com/Bishes7",
      url: "",
      title: "My Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, react, python",
    },
    {
      image: bishes1,
      github: "https://github.com/Bishes7",
      url: "",
      title: "My Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, react, python",
    },
    {
      image: bishes1,
      github: "https://github.com/Bishes7",
      url: "",
      title: "My Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, react, python",
    },
    {
      image: bishes1,
      github: "https://github.com/Bishes7",
      url: "",
      title: "My Portfolio",
      description: "Techstack: HTML, CSS, JavaScript, react, python",
    },
  ];
  return (
    <section className="projects container" id="projects">
      <Title title="My Projects" />

      <div className="grid project-container">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
