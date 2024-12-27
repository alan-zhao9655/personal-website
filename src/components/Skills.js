import React from 'react';
import './Skills.css';

// Import icons
import {
  FaJava,
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiAngular,
  SiExpress,
  SiJquery,
  SiJson,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow
} from 'react-icons/si';

// Simple helper component for each skill:
const SkillItem = ({ Icon, label }) => (
  <div className="skill-item">
    {Icon && <Icon className="skill-icon" />}
    <p>{label}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {/* Programming Languages */}
          <SkillItem Icon={FaJava} label="Java" />
          <SkillItem Icon={FaJsSquare} label="JavaScript" />
          <SkillItem Icon={SiTypescript} label="TypeScript" />
          <SkillItem Icon={FaPython} label="Python" />
          <SkillItem Icon={SiC} label="C" />
          <SkillItem Icon={SiCplusplus} label="C++" />

          {/* Frameworks */}
          <SkillItem Icon={FaReact} label="React" />
          <SkillItem Icon={SiAngular} label="Angular" />
          <SkillItem Icon={FaNodeJs} label="Node.js" />
          <SkillItem Icon={SiDotnet} label=".NET Framework" />
          <SkillItem Icon={SiExpress} label="Express" />

          {/* Web Technologies */}
          <SkillItem Icon={FaHtml5} label="HTML5" />
          <SkillItem Icon={SiJson} label="JSON" />
          <SkillItem Icon={FaCss3Alt} label="CSS3" />
          <SkillItem Icon={SiJquery} label="jQuery" />

          {/* Machine Learning Techniques and Tools */}
          <SkillItem Icon={SiScikitlearn} label="scikit-learn" />
          <SkillItem Icon={SiTensorflow} label="TensorFlow" />
          <SkillItem Icon={SiPytorch} label="PyTorch" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
