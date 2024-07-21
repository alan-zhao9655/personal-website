import React from 'react';
import './Skills.css';
import { FaPython, FaJsSquare, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiAngular, SiCsharp, SiDotnet, SiGithub, SiJenkins } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <FaPython className="skill-icon" />
                        <p>Python</p>
                    </div>
                    <div className="skill-item">
                        <SiPytorch className="skill-icon" />
                        <p>PyTorch</p>
                    </div>
                    <div className="skill-item">
                        <SiTensorflow className="skill-icon" />
                        <p>TensorFlow</p>
                    </div>
                    <div className="skill-item">
                        <FaJsSquare className="skill-icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <FaJava className="skill-icon" />
                        <p>Java</p>
                    </div>
                    <div className="skill-item">
                        <SiCsharp className="skill-icon" />
                        <p>C#</p>
                    </div>
                    <div className="skill-item">
                        <FaNodeJs className="skill-icon" />
                        <p>Node.js</p>
                    </div>
                    <div className="skill-item">
                        <SiAngular className="skill-icon" />
                        <p>AngularJS</p>
                    </div>
                    <div className="skill-item">
                        <FaReact className="skill-icon" />
                        <p>ReactJS</p>
                    </div>
                    <div className="skill-item">
                        <SiDotnet className="skill-icon" />
                        <p>.NET</p>
                    </div>
                    <div className="skill-item">
                        <SiGithub className="skill-icon" />
                        <p>GitHub</p>
                    </div>
                    <div className="skill-item">
                        <SiJenkins className="skill-icon" />
                        <p>Jenkins</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
