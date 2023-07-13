import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Banner from './Banner';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Banner />
      <div className="banner-text">
        <h1>Welcome to DJ's Dog Park & Bar in Annapolis</h1>
        <p>Where dogs and their humans can play together</p>
        <Link to="/pricing"><button className="get-passes-button">View Dog Pass Pricing</button></Link>
      </div>
      <Gallery />
    </div>
  );
}

export default LandingPage;
