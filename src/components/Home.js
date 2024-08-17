import React from 'react';
import './Home.css';
import figure from '../assets/home.png';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';

const Home = () => {
    return (
        <div className="hero-section">
            <div className="home-container">
                <div className="banner">
                    <div className="frame-47">
                        <div className="frame-46">
                            <div className="frame-43">
                                <div className="hello">Hello I’m</div>
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
                            I’m Haoran Zhao, a Software Engineer based in Canada. I have a passion for creating clean and modern interfaces.
                        </div>
                    </div>
                </div>
                <div className="social-buttons">
                    <a href="https://web.wechat.com/uklccp?lang=en_US&t=v2/index" target="_blank" rel="noopener noreferrer" className="home-button">
                        <SiWechat className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/alan-haoran-zhao/" target="_blank" rel="noopener noreferrer" className="home-button">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/alan-zhao9655" target="_blank" rel="noopener noreferrer" className="home-button">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://facebook.com/your-facebook-handle" target="_blank" rel="noopener noreferrer" className="home-button">
                        <FaFacebook className="social-icon" />
                    </a>
                </div>
            </div>
            <div className='home-page-figure'>
                <img src={figure} alt="figure" />
            </div>
        </div>
    );
}

export default Home;
