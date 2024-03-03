import React from 'react';
import './about.css';
// import { ReactComponent as CloudIcon } from '../icons/cloud-icon.svg'; 

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
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

        <div className="about-subsection">
          <h3>Cloud Consultation</h3>
          <p>
            Our team of certified cloud experts is here to navigate the complexities of cloud computing with you.
            We offer strategic consultation services, helping you make informed decisions about architecture, security, compliance, and cost optimization.
            Together, we'll design a roadmap that aligns with your business objectives.
          </p>
        </div>

        <div className="about-subsection">
          <h3>Seamless Account Setups</h3>
          <p>
            Setting up and managing cloud accounts can be a daunting task. Let us handle the technical details.
            Our dedicated team will ensure that your cloud accounts are configured efficiently, securely, and in a way that maximizes the benefits of the chosen cloud platform.
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
        {/* <CloudIcon className="cloud-icon" /> Assuming you have a cloud icon for styling */}
      </footer>
    </div>
  );
}

export default About;
