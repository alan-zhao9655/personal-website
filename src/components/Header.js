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
                    <span className="logo-text">Personal</span>
                </div>
                <nav className="taskbar">
                    <div className="nav-item"><a href="#about">About Me</a></div>
                    <div className="nav-item"><a href="#skills">Skills</a></div>
                    <div className="nav-item"><a href="#projects">Projects</a></div>
                    <div className="nav-item"><a href="#contact">Contact Me</a></div>
                </nav>
                <div className="button">
                    <span className="resume">Resume</span>
                    <span className="download">
                        <FaDownload className="download-icon" />
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
