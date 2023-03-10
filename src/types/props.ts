import { CarouselImage } from "./carousel";

export type NavbarButtonProps = {
  name: string;
  path: string;
};

export type CarouselSlideProps = CarouselImage;

export type CarouselProps = {
  images: Array<CarouselImage>;
};
