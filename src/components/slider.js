// ignore, not used
import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <button className="prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <button className="next-button" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
