import React from "react";
import "./SkillSlider.css"; // Import CSS for animation

// Import Skill Logos
import htmlLogo from "/icons/html-5.png";
import cssLogo from "/icons/css-3.png";
import jsLogo from "/icons/js.png";
import reactLogo from "/icons/React.png";
import nodeLogo from "/icons/Nodejs.png";
import mongoLogo from "/icons/MongoDB.png";
import sqlLogo from "/icons/SQL.png";
import javaLogo from "/icons/java.png";
import gitLogo from "/icons/git.png";
import githubLogo from "/icons/github.png";

const skills = [
  { name: "HTML", img: htmlLogo },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "React.js", img: reactLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "MongoDB", img: mongoLogo },
  { name: "SQL", img: sqlLogo },
  { name: "Core Java", img: javaLogo },
  { name: "Git", img: gitLogo },
  { name: "GitHub", img: githubLogo },
];

const SkillSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {/* Duplicate logos for seamless animation */}
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="slide">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSlider;
