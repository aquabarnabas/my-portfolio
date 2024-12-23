import React from "react";
import "./portfolio.css";

const Portfolio: React.FC = () => {
  const allProjects = [
    { id: 1, name: "Project1" },
    { id: 2, name: "Project2" },
    { id: 3, name: "Project3" },
    { id: 4, name: "Project4" },
  ];

  return (
    <div className="portfolio-contents">
      <h1>Portfolio</h1>

      <div className="container">
        <div className="columns is-multiline">
          {allProjects.map((project) => (
            <div className="portfolio">
              <div className="overlay">
                <h3 className="title is-5 has-text-white">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
