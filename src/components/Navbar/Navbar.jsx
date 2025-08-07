import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      {/* Logo */}
      <div className="app__navbar-logo">
        <img src={images.eclat} alt="app__logo" />
      </div>

      {/* Main Links */}
      <ul className="app__navbar-links">
        {['Home', 'About', 'Menu', 'Awards', 'Contact'].map((item) => (
          <li key={item} className="p__opensans">
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Login + Booking */}
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">Book Table</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {['Home', 'About', 'Menu', 'Awards', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={() => setToggleMenu(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="#login" onClick={() => setToggleMenu(false)}>
                  Log In / Registration
                </a>
              </li>
              <li>
                <a href="/" onClick={() => setToggleMenu(false)}>
                  Book Table
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
