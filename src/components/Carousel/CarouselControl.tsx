import React from "react";
import { CarouselControlProps } from "../../types/props";

const CarouselControl: React.FC<CarouselControlProps> = ({ type, target }) => {
  return (
    <button
      type="button"
      className={`carousel-control-${type === "next" ? "next" : "prev"}`}
      data-bs-slide={`${type === "next" ? "next" : "prev"}`}
      data-bs-target={target}
    >
      <span
        className={`carousel-control-${type === "next" ? "next" : "prev"}-icon`}
        aria-hidden="true"
        data-testid="carousel-control-icon"
      ></span>
      <span className="visually-hidden">{`${
        type === "next" ? "Next" : "Previous"
      }`}</span>
    </button>
  );
};

export default CarouselControl;
