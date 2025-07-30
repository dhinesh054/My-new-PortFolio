import React from 'react';
import 'C:/Users/dhine/portfolio/src/styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Let's Cook Stories <span className="emoji">🎬</span></h2>
        <p>Ready to bring your vision to life? Get in touch!</p>
        <a href="mailto:dhineshchandrab@gmail.com" className="email">dhineshchandrab@gmail.com</a>
        <div className="social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://ytjobs.co/talent/profile/217112?r=631" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;