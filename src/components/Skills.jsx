import React from 'react';
import 'C:/Users/dhine/portfolio/src/styles/skills.css';
import premierePro from '../assets/552225.png';
import afterEffects from '../assets/552226.png';
import davinci from '../assets/davinci.png';
import photoshop from '../assets/5968520.png';
import canva from '../assets/canva.png';
import notion from '../assets/notion.png';
import skillsBg from '../assets/video-editing-jack-cole.gif';

const Skills = () => {
  const skills = [
    { name: "Premiere Pro", icon: premierePro, rating: 5, level: "Expert" },
    { name: "After Effects", icon: afterEffects, rating: 4, level: "Advanced" },
    { name: "DaVinci Resolve", icon: davinci, rating: 5, level: "Expert" },
    { name: "Photoshop", icon: photoshop, rating: 3, level: "Intermediate" },
    { name: "Canva", icon: canva, rating: 4, level: "Advanced" },
    { name: "Notion", icon: notion, rating: 4, level: "Advanced" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg" style={{ backgroundImage: `url(${skillsBg})` }}></div>
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <div className="skill-rating">
                <span className="stars">{'★'.repeat(skill.rating)}{'☆'.repeat(5 - skill.rating)}</span>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;