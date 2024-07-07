import React from 'react';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <div className="contact-us-container">
      <style>
        {`
          .contact-us-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
          .logo-section {
            margin-bottom: 20px;
          }
          .logo {
            width: 500px; 
          }
          .info-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .info-box {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .info-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 4px 8px rgba(20, 20, 20, 0.2);
          }
          .info-box p {
            margin: 0;
          }
          /* Center the last box when there are an odd number of items */
          .info-section > :nth-child(odd):last-child {
            grid-column: span 2;
            justify-self: center;
          }
          @media (max-width: 768px) {
            .logo {
              width: 100%; 
            }
            .info-section {
              grid-template-columns: 1fr;
              gap: 10px;
            }
            .info-box {
              padding: 20px;
              
            }
          }
        `}
      </style>
      <div className="logo-section">
        <img src={logo} alt="Rhyno EV Logo" className="logo" />
      </div>
      <div className="info-section">
        <div className="info-box">
          <p>
            Established in 2019 by an automotive engineer with a vision for sustainable and robust
            mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
            of young individuals passionately driving innovation in the electric vehicle industry.
          </p>
        </div>
        <div className="info-box">
          <p>
            We believe in engineering solutions that solve problems. With our first product, we've taken a bold step to create something more than just a vehicle;
            it's a unique experience of elegance, comfort and style, addressing the pitfalls of
            conventional electric scooters.
          </p>
        </div>
        <div className="info-box">
          <p>
            Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology.
            Perfectly suited for fleet operators, especially in tourist-centric locations like Goa,
            our rugged yet aesthetically appealing scooters are engineered for longevity and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
