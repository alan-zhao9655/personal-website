import React from 'react';
import './Home.css';
import figure from '../assets/sea_sun_me.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="hero-section">
            <div className="home-container">
                <div className="banner">
                    <div className="frame-47">
                        <div className="frame-46">
                            <div className="frame-43">
                                <div className="hello">Hello I'm</div>
                                <div className="name">Haoran Zhao.</div>
                            </div>
                            <div className="frame-44">
                                <div className="role">Software</div>
                                <div className="outlined-role">Engineer</div>
                            </div>
                            <div className="frame-45">
                                <div className="based-in">Based In</div>
                                <div className="location">Canada.</div>
                            </div>
                        </div>
                        <div className="bio">
                            I'm Haoran Zhao, a Machine Learning Engineer based in Canada. I'm passionate about crafting innovative software solutions and advancing the boundaries of machine learning to create impactful, intelligent applications.
                        </div>
                        {/* Moved social buttons inside frame-47, after bio */}
                        <div className="social-buttons">
                            <a href="https://www.linkedin.com/in/alan-haoran-zhao/" target="_blank" rel="noopener noreferrer" className="home-button">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://github.com/alan-zhao9655" target="_blank" rel="noopener noreferrer" className="home-button">
                                <FaGithub className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className='home-page-figure'>
                    <img src={figure} alt="figure" />
                </div> */}
            </div>
        </div>
    );
}

export default Home;