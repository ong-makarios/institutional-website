import React from "react";
import { CarouselIndicatorProps } from "../../types/props";

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  target,
  index,
  active,
}) => {
  const customAttributes = {
    className: active ? "active" : "",
    ...(active ? { "aria-current": true } : {}),
  };

  return (
    <button
      type="button"
      data-bs-target={target}
      data-bs-slide-to={index}
      {...customAttributes}
      aria-label={`Slide ${index + 1}`}
    />
  );
};

export default CarouselIndicator;
