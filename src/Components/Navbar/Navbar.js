import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png'; // Replace with the path to your logo file

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleClickOutside = () => {
    setSearchActive(false);
  };

  return (
    <nav className="navbar" onClick={handleClickOutside}>
      <div className="navbar-logo">
        <a href="/" className="logo-link">
          <img src={logo} alt="GoGreen Logo" className="logo-image" />
          <span className="logo-text">Go<span className="highlight">Green</span></span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        {searchActive ? (
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search..." 
            autoFocus
            onClick={(e) => e.stopPropagation()} // Prevent navbar click when interacting with input
          />
        ) : (
          <>
            <a href="#" onClick={(e) => { e.preventDefault(); handleSearchClick(); }}><i className="icon icon-search"></i></a>
            <a href="/favorites"><i className="icon icon-heart"></i></a>
            <a href="/cart"><i className="icon icon-cart"></i></a>
            <a href="/profile"><i className="icon icon-user"></i></a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
