"use client";

// components/ImageCarousel.js
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ImageCarouselStyles.css"; // Import the CSS module

const ImageCarousel = ({ imagePaths }) => {
  const NextArrow = (props) => (
    <div {...props} className={`${styles.slickArrow} ${styles.slickNext}`}>
      Next
    </div>
  );

  const PrevArrow = (props) => (
    <div {...props} className={`${styles.slickArrow} ${styles.slickPrev}`}>
      Prev
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {imagePaths.map((imagePath, index) => (
        <div key={index}>
          <img src={imagePath} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
