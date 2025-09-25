import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo1" />
                    <span className="logo-text">Portfolio</span>
                </div>
                
                {/* Hamburger Menu Button (visible on mobile) */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                {/* Navigation Menu */}
                <nav className={`taskbar ${isMenuOpen ? 'active' : ''}`}>
                    <div className="nav-item"><a href="#about" onClick={closeMenu}>About Me</a></div>
                    <div className="nav-item"><a href="#skills" onClick={closeMenu}>Skills</a></div>
                    <div className="nav-item"><a href="#experience" onClick={closeMenu}>Experience</a></div>
                    <div className="nav-item"><a href="#projects" onClick={closeMenu}>Projects</a></div>
                    <div className="nav-item"><a href="#contact" onClick={closeMenu}>Contact Me</a></div>
                </nav>
                
                <a 
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:US:deca0d0e-4606-4e17-80c4-71746599f905"
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