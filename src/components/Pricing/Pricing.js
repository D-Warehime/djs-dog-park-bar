import React from "react";
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing">
      <div className="top-text">
        <h1><span>Dog Pass Pricing</span></h1>
        <br></br>
        <h2>Passes bought on location, all humans enter free</h2>
        <br></br>
        <h3>Please note your dog(s) must be at least 10 months old and have up-to-date shot records before entering. We will need a copy of those records.</h3>
      </div>
      <div className="cards-container">
        <div className="card" onClick={() => console.log("Clicked Single Day Pass")}>
          <div className="card-header">
            <h2>Single Day Pass</h2>
            <div className="badge">Badge 1</div>
          </div>
          <div className="card-content">
            <div className="price">$10</div>
            <ul>
              <li>Access to the park for one day</li>
            </ul>
          </div>
        </div>
        <div className="card" onClick={() => console.log("Clicked 5 Day Passes")}>
          <div className="card-header">
            <h2>5 Day Passes</h2>
            <div className="badge">Badge 2</div>
          </div>
          <div className="card-content">
            <div className="price">$25</div>
            <ul>
              <li>Access to the park for any five days</li>
            </ul>
          </div>
        </div>
        <div className="card" onClick={() => console.log("Clicked Monthly Pass")}>
          <div className="card-header">
            <h2>Monthly Pass</h2>
            <div className="badge">Badge 3</div>
          </div>
          <div className="card-content">
            <div className="price">$30</div>
            <ul>
              <li>Access to the park for the month</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
