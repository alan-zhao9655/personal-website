import React from 'react';
import './About.css';
import figure from '../assets/about_me_figure.png';

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
                            I recently graduated with a Bachelor of Science, completing programs as a specialist in Computer Science with a focus on Artificial Intelligence and a minor in Statistics, from the University of Toronto, St. George campus. I will be continuing my studies in Computer Engineering at the University of Toronto, pursuing a Master of Engineering with a focus on Machine Learning and Data Analytics. 
                            <br /><br />
                            I have one year of internship experience as a software developer and now I'm hoping to gain professional experience as a Machine Learning Engineer or AI Engineer. I'm also open to roles related to software development.
                            <br /><br />
                            I am passionate about designing and developing innovative software solutions. My strengths lie in my ability to create intuitive and efficient software that meets user needs and exceeds expectations. With a strong foundation in both theoretical and practical aspects of computer science, I am well-equipped to tackle complex problems and deliver high-quality solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
