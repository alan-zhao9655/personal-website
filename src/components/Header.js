import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo1" />
                    <span className="logo-text">Portfolio</span>
                </div>
                <nav className="taskbar">
                    <div className="nav-item"><a href="#about">About Me</a></div>
                    <div className="nav-item"><a href="#skills">Skills</a></div>
                    <div className="nav-item"><a href="#experience">Experience</a></div>
                    <div className="nav-item"><a href="#projects">Projects</a></div>
                    <div className="nav-item"><a href="#contact">Contact Me</a></div>
                </nav>
                <a 
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:US:1333bdaa-6a54-4557-aa60-f542989d1377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                >
                    <span className="resume">Resume</span>
                    <FaDownload className="download-icon" />
                </a>
            </div>
        </header>
    );
}

export default Header;
