import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section className="app__video">
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        loop
        muted
        controls={false}
        playsInline
        className="app__video-element"
      />

      {/* Overlay Play/Pause Control */}
      <div className="app__video-overlay flex__center">
        <button
          type="button"
          className="app__video-overlay_circle flex__center"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </button>
      </div>
    </section>
  );
};

export default Intro;
