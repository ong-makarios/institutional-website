import React from "react";
import { CarouselSlideProps } from "../../types/props";

const CarouselSlide: React.FC<CarouselSlideProps> = ({ src, alt, active }) => {
  const activeClass = active ? " active" : "";

  return (
    <div className={`carousel-item${activeClass}`} data-testid="carousel-item">
      <img src={src} alt={alt} className="d-block w-100" />
    </div>
  );
};

export default CarouselSlide;
