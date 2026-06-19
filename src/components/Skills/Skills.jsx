import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-container">

        <div className="skill-card">
          <FaReact className="icon" />
          <h3>React.js</h3>
        </div>

        <div className="skill-card">
          <FaJs className="icon" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaHtml5 className="icon" />
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon" />
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <FaBootstrap className="icon" />
          <h3>Bootstrap</h3>
        </div>

        <div className="skill-card">
          <SiTailwindcss className="icon" />
          <h3>Tailwind CSS</h3>
        </div>

        <div className="skill-card">
          <FaGitAlt className="icon" />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaGithub className="icon" />
          <h3>GitHub</h3>
        </div>

      </div>
    </section>
  );
};

export default Skills;