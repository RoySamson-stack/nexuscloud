// Home.js

import React from 'react';
import './home.css';
import background from "../img/background.png"
 


function Home() {
  return (
    <div className="homepage">
      <div className='homepage-2'>
        <header className="home-header">
          <h1>Nexus Cloud</h1>
          <p>Unlock the full potential of the cloud with our expert brokerage and consulting services.</p>
          <p>Ready to transform your business with the cloud? Contact us today to discuss your requirements and let's embark on a journey towards a more efficient, scalable, and innovative future.</p>
          <button className='home-btn'>Get started</button>
        </header>
        <img src={background} alt="image" className='home-image'/>
      </div>
    </div>
  );
}

export default Home;
