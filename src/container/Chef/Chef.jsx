import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <section className="app__bg app__wrapper section__padding" id="chef">
    {/* Chef Image */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef in kitchen" />
    </div>

    {/* Chef Text Content */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h2 className="headtext__cormorant">What We Believe In</h2>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Opening quote" />
          <p className="p__opensans">
            Cooking is an act of love. It’s the bridge between tradition and creativity, where every dish tells a story.
          </p>
        </div>

        <p className="p__opensans">
          At ÉCLAT, we believe in crafting experiences that linger in memory — not just on the palate. Every plate is an expression of passion, precision, and purpose. We invite you to taste the artistry.
        </p>
      </div>

      {/* Signature */}
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Chef Kevin's signature" />
      </div>
    </div>
  </section>
);

export default Chef;
