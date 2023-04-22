import React from "react";
import { CarouselProps } from "../../types/props";
import CarouselControl from "./CarouselControl";
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
      <CarouselControl target="#carousel" type="prev" />
      <CarouselControl target="#carousel" type="next" />
    </div>
  );
};

export default Carousel;
