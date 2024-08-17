import React from 'react';
import './Projects.css';
import project1Image from '../assets/transformer.png'; // Replace with your actual image paths
import project2Image from '../assets/hero-image.jpg';
import project3Image from '../assets/hero-image.jpg';

const Projects = () => {
    return (
        <section className="project-section">
            <div className="project-container">
                <div className="project-heading">
                    <span className="my">My</span>
                    <span className="projects">Projects</span>
                </div>

                <div className="project-item">
                    <div className="project-image-container">
                        <img src={project1Image} alt="Neural Machine Translation Project" className="project-image" />
                    </div>
                    <div className="project-details">
                        <div className="project-number">01</div>
                        <div className="project-title">Neural Machine Translation Engineer (Natural Language Processing)</div>
                        <div className="project-description">
                            <p><strong>• Engineered and trained a Transformer model</strong> from scratch to perform English-French translation tasks utilizing Canadian Hansards dataset for training and validation.</p>
                            <p><strong>• Implemented Greedy and Beam Search algorithms</strong> to optimize decoded target sentence generation.</p>
                            <p><strong>• Integrated BLEU scoring system</strong> to quantitatively assess translation quality, achieving competitive benchmarks against established NMT models.</p>
                            <p><strong>• Conducted comprehensive analysis</strong> and authored a detailed report on model performance, including empirical studies on models such as GPT2, T5 MT model, and Bart MT model.</p>
                        </div>
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-image-container">
                        <img src={project2Image} alt="Word Sense Disambiguation Project" className="project-image" />
                    </div>
                    <div className="project-details">
                        <div className="project-number">02</div>
                        <div className="project-title">Word Sense Disambiguation & Lexical Database Integration (Natural Language Processing)</div>
                        <div className="project-description">
                            <p><strong>• Implemented the basic Lesk Algorithm</strong> with an accuracy for Word Sense Disambiguation (WSD) 39.6%. Improved the Lesk Algorithm by integrating one-sided Cosine Similarity to achieve an accuracy of 43.9%.</p>
                            <p><strong>• Utilized WordNet and NLTK</strong> to include synonym/antonym identification and hierarchical word relationships for Lesk Algorithm to achieve an accuracy of 45.8%.</p>
                            <p><strong>• Enhanced the Lesk algorithm</strong> by incorporating word2vec’s skip-gram model, improving sense prediction accuracy to 47.9%.</p>
                            <p><strong>• Developed a method to create sense vectors</strong> by averaging BERT-generated vectors, significantly enhancing sense prediction accuracy to 68%.</p>
                        </div>
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-image-container">
                        <img src={project3Image} alt="Machine Learning in Online Education Project" className="project-image" />
                    </div>
                    <div className="project-details">
                        <div className="project-number">03</div>
                        <div className="project-title">Machine Learning in Online Education (Machine Learning)</div>
                        <div className="project-description">
                            <p><strong>• Implemented diverse machine learning methods</strong> like k-NN, Item Response Theory, Matrix Factorization, Autoencoder Neural Networks, and Ensemble Methods to accurately predict student correctness on diagnostic questions.</p>
                            <p><strong>• Enhanced the model's architecture</strong> with advanced techniques including regularization, neural network layer expansion, and data augmentation. This increased prediction accuracy to 70%.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;
