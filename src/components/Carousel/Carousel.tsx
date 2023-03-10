import React from "react";
import { CarouselProps } from "../../types/props";
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
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
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
