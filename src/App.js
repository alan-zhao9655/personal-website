import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <section id="home">
                <Home />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
            <ScrollToTopButton />
        </div>
    );
}

export default App;
