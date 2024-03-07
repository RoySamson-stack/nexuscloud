import React from 'react';
import './about.css';
// import { ReactComponent as CloudIcon } from '../icons/cloud-icon.svg'; 

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <p>Welcome to Nexus Cloud – Your Trusted Cloud Solutions Partner</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          At Nexus Cloud, we are dedicated to unlocking the full potential of the cloud for businesses worldwide.
          As a leading partner with industry giants such as Google Cloud, AWS, and Azure, we bring a wealth of expertise
          and innovative solutions to help your organization thrive in the digital era.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses through tailored cloud solutions, providing a seamless transition to the cloud,
          optimizing operations, and fostering innovation. We understand that every business is unique, and our commitment is to deliver
          personalized, strategic cloud services that align with your goals.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Nexus Cloud?</h2>
        <div className="about-subsection">
          <h3>Expertise Across Leading Cloud Platforms</h3>
          <p>
            As a trusted partner with Google Cloud, AWS, and Azure, we offer a comprehensive suite of services across diverse cloud environments.
            Whether you are looking to migrate to a specific cloud platform or leverage a multi-cloud strategy, we have the expertise to guide you
            through every step of the journey.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Your Journey to the Cloud Starts Here</h2>
        <p>
          Whether you are a startup looking to scale rapidly, an enterprise aiming for digital transformation, or somewhere in between,
          Nexus Cloud is your trusted partner. We believe in creating lasting partnerships that drive success, and we look forward to embarking on
          this cloud journey with you.
        </p>
        <p>Contact us today to discuss your cloud requirements and let's build a future of innovation together.</p>
      </section>

      <footer className="about-footer">
        <p>
          <strong>Nexus Cloud - Unleash the Power of Cloud for Your Business</strong>
        </p>
      </footer>
    </div>
  );
}

export default About;
