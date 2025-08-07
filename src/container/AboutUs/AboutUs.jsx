import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <section className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* Background Overlay */}
    <div className="app__aboutus-overlay flex__center" aria-hidden="true">
      <img src={images.G} alt="Decorative G overlay" />
    </div>

    {/* Content */}
    <div className="app__aboutus-content flex__center">
      
      {/* About Section */}
      <article className="app__aboutus-content_about">
        <h2 className="headtext__cormorant">About Us</h2>
        <img src={images.spoon} alt="spoon divider" className="spoon__img" />
        <p className="p__opensans">
          ÉCLAT is more than a restaurant — it's an immersive fine dining experience where modern elegance meets timeless culinary artistry. Our chefs craft dishes that celebrate flavor, technique, and presentation.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </article>

      {/* Knife Divider */}
      <div className="app__aboutus-content_knife flex__center" aria-hidden="true">
        <img src={images.knife} alt="decorative chef's knife" />
      </div>

      {/* History Section */}
      <article className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">Our History</h2>
        <img src={images.spoon} alt="spoon divider" className="spoon__img" />
        <p className="p__opensans">
          Founded in the heart of Toronto, ÉCLAT emerged from a passion for culinary excellence and unforgettable experiences. Our journey began with a vision to elevate everyday dining into a celebration of taste, ambiance, and memory.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </article>

    </div>
  </section>
);

export default AboutUs;
