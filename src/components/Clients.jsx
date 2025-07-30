import React from 'react';
import 'C:/Users/dhine/portfolio/src/styles/clients.css';
import danda from '../assets/danda.png';
import nirmal from '../assets/nirmal.png';

const Clients = () => {
  const clients = [
    { 
      name: "Anjali and Hunny", 
      image: "https://yt3.googleusercontent.com/-WPZ3m-Nv9aMBKxfrBpaDqXd4RJa6ujuhp1diRGBQFcZm7ayIMo_QwEw5rCxFXeNBn6Q3Sybig=s160-c-k-c0x00ffffff-no-rj", 
      duration: "3 Months", 
      link: "https://www.youtube.com/@anjali_and_hunny", 
      icon: "youtube" 
    },
    { 
      name: "Saranya SastiKumar", 
      image: "https://storage.ytjobs.co/channel_thumbnails/8efgyN37Y0MYr8oOqMc4n9Xv5NxrEnfbLaQGHTUH.jpg", 
      duration: "4 Months", 
      link: "https://www.instagram.com/lifecoach.saranya", 
      icon: "instagram" 
    },
    { 
      name: "Figuring Out by Jay", 
      image: "https://yt3.googleusercontent.com/KP0KxU5QfU4haaqGe_kDw0UdIBlNb6S5uXID9N8Z2oBu6SoZRJDqWDBl4rXno-Q03fP1QgjNJQ=s160-c-k-c0x00ffffff-no-rj", 
      duration: "3 Months", 
      link: "https://www.youtube.com/@figuringoutbyjay", 
      icon: "youtube" 
    },
    { 
      name: "Epigroww Global", 
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQESNLed8nl95w/company-logo_100_100/company-logo_100_100/0/1691567947934/epigroww_global_logo?e=1757548800&v=beta&t=LVTLg0il5abG2SoMW2IHO-e5J6rGEpPG5u1nYzZTlbo", 
      duration: "4 Months", 
      link: "https://www.linkedin.com/company/epigroww-global/", 
      icon: "linkedin" 
    },
    { 
      name: "Dhandha With Jitesh", 
      image: danda, 
      duration: "1 Month", 
      link: "https://www.instagram.com/dhandhawithjitesh/", 
      icon: "instagram" 
    },
    { 
      name: "Dr. Neuro Nerd", 
      image: nirmal, 
      duration: "Present", 
      link: "https://www.instagram.com/dr_neuro_nerd", 
      icon: "instagram" 
    }
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2>My Clients</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-item" key={index}>
              <img src={client.image} alt={client.name} />
              <p>{client.duration}</p>
              <a href={client.link} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${client.icon}`}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;