import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <ul>
        <li><NavLink exact to="/terms-of-service" activeClassName="active">Terms of Service</NavLink></li>
        <li><NavLink exact to="/privacy-policy" activeClassName="active">Privacy Policy</NavLink></li>
        <li><NavLink exact to="/faqs" activeClassName="active">FAQs</NavLink></li>
        <li><a href="#">Social Media</a></li>
      </ul>
      <p>DJ's Dog Park Bar &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
