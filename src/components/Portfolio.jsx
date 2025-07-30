import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/portfolio.css';

const Portfolio = () => {
  const location = useLocation();
  
  const shortFormVideos = [
    { id: "oqcPijrssNo", title: "Short Form Video 1" },
    { id: "D8CHB6iVerA", title: "Short Form Video 2" },
    { id: "pFLphVaSDUs", title: "Short Form Video 3" },
    { id: "RWxabjzk_5c", title: "Short Form Video 4" },
    { id: "CHA7Ej_UoTU", title: "Short Form Video 5" },
    { id: "fKFABhIqZq0", title: "Short Form Video 6" }
  ];

  const longFormVideos = [
    { id: "DFqHQ9RUg4o", title: "Long Form Video 1" },
    { id: "TRustRa-TI0", title: "Long Form Video 2" },
    { id: "Doi-FrMg63w", title: "Long Form Video 3" }
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <h1>My Portfolio</h1>
        
        <h2>Short Form Content</h2>
        <div className="portfolio-grid">
          {shortFormVideos.map(video => (
            <div className="portfolio-item" key={video.id}>
              <div className="video-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
        <h2>Long Form Content</h2>
        <div className="portfolio-grid">
          {longFormVideos.map(video => (
            <div className="portfolio-item" key={video.id}>
              <div className="video-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
        <h2>Feature Film - "Ee Sariana"</h2>
        <div className="feature-film">
          <p>I had the privilege of working as an assistant editor on the feature film "Ee Sariana". Below is the teaser cut I worked on:</p>
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/syhLHaqCcLM"
              title="Ee Sariana Teaser"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;