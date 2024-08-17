import React from 'react';
import './Footer.css';
import logo from '../assets/logo_reversed.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                    <span className="footer-logo-text">Portfolio</span>
                </div>
                <div className="footer-links">
                    <a href="#about" className="footer-link">About</a>
                    <a href="#skills" className="footer-link">Skills</a>
                    <a href="#experience" className="footer-link">Experience</a>
                    <a href="#projects" className="footer-link">Projects</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </div>
                <div className="footer-copyright">
                    © 2024 Haoran Zhao. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
