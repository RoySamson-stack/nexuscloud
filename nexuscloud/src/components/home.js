import React from 'react';
import './home.css';
import background from "../img/background.png"
 


function Nav() {
  return (
    <div className="homepage">
      <div className='homepage-2'>
        <header className="home-header">
          <p className="home-para">Unlock the full potential of the cloud with our expert brokerage and consulting services.</p>
          <p>Ready to transform your business with the cloud? Contact us today to discuss your requirements and let's embark on a journey towards a more efficient, scalable, and innovative future.</p>
          <button className='home-btn'>Get started</button>
        </header>
        {/* <img src={background} alt="image" className='home-image'/> */}
      </div>
    </div>
  );
}

export default Nav;
