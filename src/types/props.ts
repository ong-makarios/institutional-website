import { CarouselImage } from "./carousel";

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
