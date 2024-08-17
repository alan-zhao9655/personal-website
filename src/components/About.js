import React from 'react';
import './About.css';
import figure from '../assets/about_me.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-me-figure">
                    <img src={figure} alt="About Me Figure" />
                </div>
                <div className="about-grid">
                    <h2 className="about-title">About Me</h2>
                    <div className="about-item">
                        <h3>Introduction</h3>
                        <p>
                            I recently graduated with a <b>Bachelor of Science</b>, completing programs as a specialist in <b>Computer Science</b> with a focus on Artificial Intelligence and a minor in Statistics, from the <b>University of Toronto</b>, St. George campus. I will be continuing my studies in Computer Engineering at the University of Toronto, pursuing a <b>Master of Engineering</b> with a focus on Machine Learning and Data Analytics. 
                            <br /><br />
                            I have one year of internship experience as a <b>software developer</b> and now I'm hoping to gain professional experience as a Machine Learning Engineer or AI Engineer. I'm also open to roles related to software development.
                            <br /><br />
                            I am passionate about <b>designing and developing innovative software solutions</b>. My strengths lie in my ability to create intuitive and efficient software that meets user needs and exceeds expectations. With a strong foundation in both theoretical and practical aspects of computer science, I am well-equipped to tackle complex problems and deliver high-quality solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
