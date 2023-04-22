import React from "react";
import { CarouselProps } from "../../types/props";
import CarouselIndicator from "./CarouselIndicator";
import CarouselSlide from "./CarouselSlide";

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div
      id="carousel"
      className="carousel slide"
      data-bs-ride="carousel"
      role="banner"
    >
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <CarouselIndicator
            index={index.toString()}
            target="#target"
            active={index === 0}
            key={index}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image) => (
          <CarouselSlide
            src={image.src}
            alt={image.alt}
            active={image.active}
            key={image.src}
          />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
