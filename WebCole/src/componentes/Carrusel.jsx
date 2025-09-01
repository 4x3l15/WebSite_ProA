import React, { useState, useEffect } from "react";
import "./Carrusel.css";

const images = [
  "/img/imgproa1.jpeg",
  "/img/imgproa2.jpeg",
  "/img/imgproa3.jpeg",
  "/img/imgproa4.jpeg",
];

function Carrusel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[current]} alt={`slide-${current}`} />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Carrusel;
