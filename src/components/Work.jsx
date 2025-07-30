import React, { useState } from 'react';
import '../styles/work.css';
import Clients from './Clients';
import veImage from '../assets/VE-1.jpg';

const Work = () => {
  const [showClients, setShowClients] = useState(false);

  const toggleClients = () => {
    setShowClients(!showClients);
    if (!showClients) {
      setTimeout(() => {
        document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <section id="work" className="work-section">
        <div className="container">
          <div className="work-content">
            <div className="work-image">
              <img src={veImage} alt="Video Editing Setup" />
            </div>
            <div className="work-text">
              <h2>My Services</h2>
              <ul>
                <li>Cutting & trimming for perfect pacing</li>
                <li>Creative transitions & visual effects</li>
                <li>Professional color correction & grading</li>
                <li>High-quality sound editing & mixing</li>
                <li>Motion graphics & titles</li>
              </ul>
              <div className="work-buttons">
                <a href="/portfolio" className="work-btn">View My Work</a>
                <a href="https://ytjobs.co/talent/profile/217112?r=631" target="_blank" rel="noopener noreferrer" className="work-btn">YT Jobs Profile</a>
                <button onClick={toggleClients} className="work-btn clients-btn">
                  {showClients ? 'Hide Clients' : 'My Clients'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showClients && <Clients />}
    </>
  );
};

export default Work;