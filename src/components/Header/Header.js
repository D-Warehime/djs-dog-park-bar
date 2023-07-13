import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar-dogbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://pbs.twimg.com/profile_images/515523435473031168/fqgM37Ek.jpeg"
            alt="DogBar Logo"
          />
        </NavLink>
        <ul className="navbar-nav ms-auto d-flex">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/dog-park"
            >
              Dog Park
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/bar"
            >
              Bar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/events"
            >
              Upcoming Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
