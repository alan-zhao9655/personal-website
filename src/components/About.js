import React from 'react';
import './About.css'; // Ensure you have this CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faProjectDiagram, faCode } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <p>Hello! I'm <span className="highlight">Haoran Zhao (Alan)</span>, a recent Computer Science graduate from the University of Toronto, specializing in AI with a minor in Statistics. I enjoy creating innovative solutions and am always eager to learn and grow in my field.</p>
            
            <h3><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
            <p><strong>University of Toronto - St. George Campus</strong>, Toronto, Canada</p>
            <p>Bachelor of Science: Specialist in Computer Science (focus in AI); Minor in Statistics (CGPA 3.36/4.0)</p>
            <p>Core Courses: Introduction to Machine Learning, Computational Linguistics, Natural Language Computing, Neural Networks and Deep Learning, Human Computer Interaction, Software Design, Introduction to Software Engineering.</p>

            <h3><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h3>
            <p><strong>Software Developer</strong> at SOTI Inc., Mississauga, Canada (09/2022 - 09/2023)</p>
            <ul>
                <li>Designed and led the development of two major feature projects with teams of 5-6 members, implementing key components of the company's product.</li>
                <li>Worked closely with Architecture, Database, QA, and UI/UX teams on feature projects, resolving customer cases and improving web application performance.</li>
                <li>Implemented various testing methods and led a performance improvement project, enhancing the efficiency of multiple API calls by at least <span className="highlight">50%</span>.</li>
            </ul>
            <p><strong>Project Leader</strong> at TechX Academy, Shanghai, China (07/2020 - 09/2020)</p>
            <ul>
                <li>Organized and managed a 12-day summer program, including a Hackathon, for over <span className="highlight">300 tech-savvy teens</span>.</li>
                <li>Collaborated with sponsors, guest speakers, and industry professionals to deliver courses in Software Engineering, Deep Learning & Neural Networks, and Social Sciences.</li>
                <li>Guided over <span className="highlight">30 creative projects</span> during a 24-hour Hackathon.</li>
            </ul>

            <h3><FontAwesomeIcon icon={faProjectDiagram} /> Relevant Projects</h3>
            <p><strong>Neural Machine Translation Engineer</strong> (Natural Language Processing)</p>
            <ul>
                <li>Engineered and trained a Transformer model from scratch to perform English-French translation tasks utilizing Canadian Hansards dataset.</li>
                <li>Implemented Greedy and Beam Search algorithms to optimize decoded target sentence generation.</li>
                <li>Integrated BLEU scoring system to assess translation quality.</li>
                <li>Conducted comprehensive analysis and authored a detailed report on model performance, including empirical studies on models such as GPT2, T5 MT model, and Bart MT model.</li>
            </ul>
            <p><strong>Word Sense Disambiguation & Lexical Database Integration</strong> (Natural Language Processing)</p>
            <ul>
                <li>Implemented the basic Lesk Algorithm with an accuracy of <span className="highlight">39.6%</span>, improved to <span className="highlight">43.9%</span> by integrating Cosine Similarity.</li>
                <li>Utilized WordNet and NLTK to achieve an accuracy of <span className="highlight">45.8%</span>.</li>
                <li>Enhanced the Lesk algorithm with word2vec’s skip-gram model, improving accuracy to <span className="highlight">47.9%</span>.</li>
                <li>Developed a method to create sense vectors using BERT-generated vectors, enhancing sense prediction accuracy to <span className="highlight">68%</span>.</li>
            </ul>
            <p><strong>Machine Learning in Online Education</strong> (Machine Learning)</p>
            <ul>
                <li>Implemented diverse machine learning methods to predict student correctness on diagnostic questions.</li>
                <li>Enhanced model architecture with advanced techniques, increasing prediction accuracy to <span className="highlight">70%</span>.</li>
            </ul>

            <h3><FontAwesomeIcon icon={faCode} /> Skills & Interests</h3>
            <p><strong>Technical Proficiencies:</strong> Python, PyTorch, TensorFlow, Numpy, Machine Learning Algorithm, Full-Stack Development, Java, Javascript, AngularJS, ReactJS, .NET Framework, GitHub Enterprise, JIRA, API Development, Linux Operating System, File System Design.</p>
            <p><strong>Qualitative Skills:</strong> Problem-solving, Communication, Leadership and team building, Work in high-pressure situations, Event Planning.</p>
            <p><strong>Languages:</strong> English & Mandarin.</p>
            <p><strong>Interests:</strong> Badminton, Soccer, Guitar, Photography, Fitness, Movie Editing.</p>
        </div>
    );
}

export default About;
