import React from "react";
import "./SkillSlider.css"; // Import CSS for animation

// Import Skill Logos
import htmlLogo from "./icons/email.png";
import cssLogo from "./icons/email.png";
import jsLogo from "./icons/email.png";
import reactLogo from "./icons/email.png";
import nodeLogo from "./icons/email.png";
import mongoLogo from "./icons/email.png";
import sqlLogo from "./icons/email.png";
import javaLogo from "./icons/email.png";
import gitLogo from "./icons/email.png";
import githubLogo from "./icons/email.png";

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
