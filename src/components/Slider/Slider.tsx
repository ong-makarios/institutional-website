import React from "react";
import "matchmedia-polyfill";
import ReactSlick, { Settings } from "react-slick";
import { SliderProps } from "../../types/props";

const Slider: React.FC<SliderProps> = ({ slides, customSettings }) => {
  const settings: Settings = {
    infinite: false,
    ...customSettings,
  };

  return (
    <ReactSlick {...settings}>
      {slides.map((slide, index) => (
        <div key={slide.title} data-testid={`slide-${index}`}>
          <img src={slide.image} alt={slide.title} />
          <h4>{slide.title}</h4>
          <p>{slide.content}</p>
          <a href={slide.readMoreLink}>Leia mais</a>
        </div>
      ))}
    </ReactSlick>
  );
};

export default Slider;
