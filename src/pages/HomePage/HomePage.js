import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-container">
      <section className='hero'>
        <h1>Welcome to Skill Swap!</h1>
        <p>Exchange skills with others to learn something everyday!</p>
        <div className='hero-buttons'>
        <Link to='/auth' className="cta-button">Join now!</Link>
        <Link to='/about' className='cta-button about-button'>More details</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
