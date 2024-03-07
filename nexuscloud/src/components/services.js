// Services.js

import React from 'react';
import './services.css';

function ServiceSection({ title, description }) {
  return (
    <section className="service-section">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </section>
  );
}

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>

      <div className="service-sections">
        <ServiceSection
          title="Cloud Migration"
          description="Seamlessly migrate your applications and data to the cloud with our expert guidance and support."
        />

        <ServiceSection
          title="Seamless Account Setups"
          description="Setting up and managing cloud accounts can be a daunting task. Let us handle the technical details. Our dedicated team will ensure that your cloud accounts are configured efficiently, securely, and in a way that maximizes the benefits of the chosen cloud platform."
        />

        <ServiceSection
          title="Cloud Consultation"
          description="Our team of certified cloud experts is here to navigate the complexities of cloud computing with you. We offer strategic consultation services, helping you make informed decisions about architecture, security, compliance, and cost optimization. Together, we'll design a roadmap that aligns with your business objectives."
        />

        <ServiceSection
          title="Cloud Security"
          description="Ensure the security of your cloud infrastructure with our robust security solutions and best practices."
        />
      </div>
    </div>
  );
}

export default Services;
