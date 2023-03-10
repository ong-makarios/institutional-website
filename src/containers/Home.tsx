import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { CarouselSlideProps } from "../types/props";

const Home: React.FC = () => {
  const carouselImages: Array<CarouselSlideProps> = [
    {
      src: "/images/home/carousel/carousel_1.png",
      alt: "Volunteers packing donations",
      active: true,
    },
    {
      src: "/images/home/carousel/carousel_2.png",
      alt: "A workshop being given",
      active: false,
    },
  ];

  return (
    <section data-testid="section-home">
      <Carousel images={carouselImages} />
    </section>
  );
};

export default Home;
