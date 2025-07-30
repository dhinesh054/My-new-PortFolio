import React from 'react';
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>Hi, I'm Dhinesh</h1>
            <p>Professional video editor with 5+ years of experience crafting compelling visual stories. I specialize in creating engaging content for YouTube, short films, and documentaries.</p>
            <p>My skills include advanced color grading, seamless transitions, and audio mastering. I transform raw footage into polished, professional content that captivates audiences.</p>
            <p>Let's work together to bring your vision to life with stunning visuals and seamless storytelling.</p>
          </div>
          <div className="about-image">
            <img src="assets\profile.jpeg" alt="Profile"  className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;