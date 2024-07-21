import React from 'react';
import './Portfolio.css'; // Ensure you have this CSS file for styling

function Portfolio() {
    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <p>Here are some of the projects I've worked on:</p>
            <ul>
                <li><a href="https://github.com/yourusername/project1">Project 1</a></li>
                <li><a href="https://github.com/yourusername/project2">Project 2</a></li>
            </ul>
            <h3>My Resume</h3>
            <p>You can view and download my resume below:</p>
            <iframe 
                src="Alan_SDE.pdf"
                title="Resume"
                width="100%"
                height="1000px"
                style={{ marginBottom: '20px' }}
            >
                This browser does not support PDFs. Please download the PDF to view it: 
                <a href="Alan_SDE.pdf">Download PDF</a>.
            </iframe>
            <a href="Alan_SDE.pdf" download="Alan_SDE.pdf" className="download-link">
                Download My Resume
            </a>
        </div>
    );
}

export default Portfolio;
