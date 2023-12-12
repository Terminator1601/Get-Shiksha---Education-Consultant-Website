// components/ControlledCarousel.js
'use client'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Import images dynamically
const imageContext = require.context('@/public/assets/images/banner', false, /\.(png|jpe?g|svg)$/);
const imagePaths = imageContext.keys().map(imageContext);


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imagePaths.map((imagePath, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={imagePath.default} alt={`Slide ${idx + 1}`} />
          <Carousel.Caption>
            <h3>{`Slide ${idx + 1} label`}</h3>
            <p>Some description for the slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
