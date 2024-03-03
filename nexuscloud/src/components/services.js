// Services.js

import React from 'react';
import './services.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>

  <div className="service-sections">

       {/* Service 1 */}
       <section className="service-section">
        <h3 className="service-title">Cloud Migration</h3>
        <p className="service-description">
          Seamlessly migrate your applications and data to the cloud with our expert guidance and support.
        </p>
      </section>

      {/* Service 2 */}
      <section className="service-section">
        <h3 className="service-title">Cloud Security</h3>
        <p className="service-description">
          Ensure the security of your cloud infrastructure with our robust security solutions and best practices.
        </p>
      </section>

      {/* Add more services as needed */}
  </div>
   
    </div>
  );
}

export default Services;
