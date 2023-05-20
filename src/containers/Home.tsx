import React from "react";
import "./Home.scss";
import Carousel from "../components/Carousel/Carousel";
import { CarouselSlideProps } from "../types/props";
import Slider from "../components/Slider/Slider";
import { Slide } from "../types/slider";
import { Settings } from "react-slick";
import SectionTitle from "../components/SectionTitle/SectionTitle";

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
  const slides: Slide[] = [
    {
      title: "Occaecat eu id adipisicing.",
      content:
        "Sint consequat eu ad dolore ipsum non laborum sit labore elit incididunt.",
      readMoreLink: "https://example.com/slide1",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Excepteur veniam.",
      content:
        "Deserunt est occaecat enim sunt nostrud. Sint dolor ut et incididunt.",
      readMoreLink: "https://example.com/slide2",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Mollit consectetur cillum.",
      content:
        "Magna laborum quis et reprehenderit ut fugiat est qui et ad exercitation.",
      readMoreLink: "https://example.com/slide3",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Cillum duis exercitation.",
      content:
        "Sit voluptate esse minim fugiat esse et excepteur enim dolore ea mollit.",
      readMoreLink: "https://example.com/slide4",
      image: "https://via.placeholder.com/300x200",
    },
  ];
  const projectsSliderSettings: Settings = {
    slidesToShow: 3,
    className: "projects-slider",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section data-testid="section-home">
      <Carousel images={carouselImages} />
      <SectionTitle title="Projetos" />
      <Slider slides={slides} customSettings={projectsSliderSettings} />
    </section>
  );
};

export default Home;
