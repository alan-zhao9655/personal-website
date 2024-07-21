import React from 'react';
import './Home.css';
import figure from '../assets/home_page_figure.png';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

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
                    <div className="home-button">
                        <FaTwitter className="social-icon" />
                    </div>
                    <div className="home-button">
                        <FaLinkedin className="social-icon" />
                    </div>
                    <div className="home-button">
                        <FaGithub className="social-icon" />
                    </div>
                    <div className="home-button">
                        <FaFacebook className="social-icon" />
                    </div>
                </div>
            </div>
            <div className='home-page-figure'>
                <img src={figure} alt="figure" />
            </div>
        </div>
    );
}

export default Home;
