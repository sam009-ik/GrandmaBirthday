import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Photos.css'; // Import your custom CSS

import { useEffect, useState, useRef } from 'react';



const Photos = () => {
  const imageCount = 26; // Total number of images
  const imageSrcs = Array.from({ length: imageCount }, (_, index) => `img/nani${index + 1}.jpg`);
  const audioRef = useRef(null); // Reference to the audio element

  const playAudio = () => {
    audioRef.current.play().catch(error => console.error("Audio play failed:", error));
  };


  return (
    <>
      <header className="photo-header">
        <h2>Welcome to Nani's 83rd Birthday Celebration!</h2>
      </header>
      <button onClick={playAudio} className="play-audio-btn"></button>

      <audio ref={audioRef} className="audio-element" loop>
        <source src="music.mp3" type="audio/mp3" />
      </audio>

      <div className="carousel-container"> {/* Apply the custom class */}
        <Carousel>
          {imageSrcs.map((src, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={src}
                alt={`Slide ${index + 1}`}
              />
              {/* Optional Carousel.Caption */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

    </>
  );
};

export default Photos;
