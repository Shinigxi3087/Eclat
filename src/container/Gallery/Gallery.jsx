import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
    <section className="app__gallery flex__center section__padding" id="gallery">
      {/* Left Side Text */}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h2 className="headtext__cormorant">Photo Gallery</h2>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Dive into the ambiance of ÉCLAT. Our photo gallery captures the essence of fine dining — elegance, taste, and unforgettable moments.
        </p>
        <button type="button" className="custom__button">View More</button>
      </div>

      {/* Image Slider */}
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt={`ÉCLAT dish or interior ${index + 1}`} />
              <BsInstagram className="gallery__image-icon" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="app__gallery-images_arrows">
          <button
            type="button"
            className="gallery__arrow-icon"
            aria-label="Scroll left"
            onClick={() => scroll('left')}
          >
            <BsArrowLeftShort />
          </button>
          <button
            type="button"
            className="gallery__arrow-icon"
            aria-label="Scroll right"
            onClick={() => scroll('right')}
          >
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
