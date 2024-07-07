import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png'; // Ensure this path is correct

const Navbar = () => (
  <nav className="navbar">
    <Link className="logo" to="/">
      <img src={logo} alt="logo" className="logo-image" />
    </Link>
    <ul className="menu">
      <li><a to="/">Home</a></li>
      <li><a to="/about">About Us</a></li>
      <li className="dropdown">
        Products
        <ul className="dropdown-content">
          <li><a to="/products/se03lite">SE03 Lite</a></li>
          <li><a to="/products/se03">SE03</a></li>
          <li><a to="/products/se03max">SE03 Max</a></li>
          <li><a to="/compare">Compare All</a></li>
        </ul>
      </li>
      <li><a to="/contact">Contact Us</a></li>
      <li><a to="/prebook">Pre-book Now</a></li>
    </ul>
  </nav>
);

export default Navbar;
