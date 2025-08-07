import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <header className="app__header app__wrapper section__padding" id="home">
    {/* Text Section */}
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        At ÉCLAT, we redefine indulgence — blending innovation with timeless techniques to offer a dining experience that captivates your senses.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    {/* Image Section */}
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Gourmet dish served at ÉCLAT" />
    </div>
  </header>
);

export default Header;
