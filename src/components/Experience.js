import React from 'react';
import './Experience.css'; // Ensure you have this CSS file for styling
import path_to_soti_logo from "../assets/SotiLogo.png";
import path_to_X_logo from "../assets/Xlogo.png";

function Experience() {
    return (
        <div className="project">
            <section class="testimonial-section">
                <div class="testimonial-container">
                    <div class="testimonial-title-row">
                        <h2 class="testimonial-title">My Experience</h2>
                    </div>
                    <div class="experience-row">
                        <div class="experience-card">
                            <div class="experience-header">
                                <div className="soti-company-icon">
                                    <a href="https://soti.net/" target="_blank" rel="noopener noreferrer">
                                        <img src={path_to_soti_logo} alt="SOTI INC." />
                                    </a>
                                </div>
                                <div class="experience-title">Software Developer at SOTI Inc.</div>
                                <div class="experience-date">Sep 2022 - Sep 2023</div>
                            </div>
                            <p class="experience-description">
                                <ul>
                                    <li><strong>Designed and led the development of two major feature projects</strong> with teams of 5-6 members, implementing keycomponents of the company's product. This included developing backend REST APIs using the .NET framework and
                                        crafting the frontend with Angular, significantly enhancing product functionality and user experience.</li>
                                    <li><strong>Closely worked with Architecture, Database, QA, and UI/UX teams</strong> on feature projects, resolving customer cases and
                                        improving web application performance. Delivered presentations on project progress, consistently recognized by the
                                        manager for valuable contributions.</li>
                                    <li><strong>Implemented various testing methods,</strong> including unit, BDD, and integrated testing, along with dotMemory and dotTrace for
                                        memory and performance profiling.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div class="experience-row">
                        <div class="experience-card">
                            <div class="experience-header">
                                <div className="techX-company-icon">
                                <a href="https://info.xacademy.cc/en/" target="_blank" rel="noopener noreferrer">
                                    <img src={path_to_X_logo} alt="TechX Academy" />
                                </a>
                                </div>
                                <div class="experience-title">Project Leader at TechX Academy</div>
                                <div class="experience-date">Jul 2020 - Sep 2020</div>
                            </div>
                            <p class="experience-description">
                                <ul>
                                    <li><strong>Organized and managed a 12-day summer program</strong>, including a Hackathon, for over 300 tech-savvy teens.</li>
                                    <li><strong>Collaborated with 23 sponsors, 10 guest speakers, and various industry professionals</strong> to deliver courses in Software
                                    Engineering, Deep Learning & Neural Networks, and Social Sciences, including History and Philosophy.</li>
                                    <li><strong>Guided over 30 creative projects during a 24-hour Hackathon</strong>. Secured direct backing from the ShanghaiTech University
                                    incubation program.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;
