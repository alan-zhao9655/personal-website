import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-container">
                <h2 className="contact-heading">Contact Me</h2>
                <div className="contact-info">
                    Feel free to reach out to me via email or phone.
                </div>
                <a href="mailto:haoran.zhao@mail.utoronto.ca" className="contact-email">haoran.zhao@mail.utoronto.ca</a>
                <div className="contact-phone">(778) 320-5283</div>
            </div>
        </div>
    );
}

export default Contact;
