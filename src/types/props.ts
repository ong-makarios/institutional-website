import { Settings } from "react-slick";
import { CarouselImage } from "./carousel";
import { Slide } from "./slider";

export type NavbarButtonProps = {
  name: string;
  path: string;
};

export type CarouselSlideProps = CarouselImage;

export type CarouselProps = {
  images: Array<CarouselImage>;
};

export type CarouselIndicatorProps = {
  target: string;
  index: string;
  active?: boolean;
};

export type CarouselControlProps = {
  type: "next" | "prev";
  target: string;
};

export type SliderProps = {
  slides: Array<Slide>;
  customSettings?: Settings;
};

export type SectionTitleProps = {
  title: string;
};
