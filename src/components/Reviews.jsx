import React, { useState } from 'react';
import '../styles/reviews.css';

const Reviews = () => {
  const reviews = [
    {
      text: "Delivers on time and loved the edit.",
      author: "Anjali and Hunny, YouTube Creator",
      image: "https://storage.ytjobs.co/channel_thumbnails/wVqli3LAthYYoyYOsvjcjwFFa7yPslvQIFmnvUEM.jpg"
    },
    {
      text: "Dhinesh's work is very professional and neat. He completes the work on time and is prompt in communication",
      author: "Saranya SastiKumar, Life coach",
      image: "https://storage.ytjobs.co/channel_thumbnails/8efgyN37Y0MYr8oOqMc4n9Xv5NxrEnfbLaQGHTUH.jpg"
    },
    {
      text: "Efficient video editor!",
      author: "Figuring Out by Jay, YouTube Creator",
      image: "https://storage.ytjobs.co/channel_thumbnails/Le6MSTSzemIlmdhi4rKp5izjbKoOq38VJf70Jhmq.jpg"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <h2>Client Reviews</h2>
        <div className="reviews-slider">
          <div className="review active">
            <p>{reviews[currentReview].text}</p>
            <div className="review-author">
              <img src={reviews[currentReview].image} alt="Client" />
              <span>{reviews[currentReview].author}</span>
            </div>
          </div>
          <div className="slider-nav">
            <button className="prev-review" onClick={prevReview}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-review" onClick={nextReview}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;