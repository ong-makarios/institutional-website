import { render, screen } from "@testing-library/react";
import { CarouselSlideProps } from "../../types/props";
import Carousel from "./Carousel";

describe("Carousel", () => {
  const mockImages: Array<CarouselSlideProps> = [
    {
      src: "/some/path/image_a.png",
      alt: "some generic text",
      active: true,
    },
    {
      src: "/some/path/image_b.png",
      alt: "another generic text",
      active: false,
    },
  ];

  it("should render with success", () => {
    render(<Carousel images={mockImages} />);

    expect(screen.getByRole("banner")).toBeDefined();
  });

  it("should render images passed in props", () => {
    render(<Carousel images={mockImages} />);

    expect(screen.getAllByRole("img")).toHaveLength(2);
  });
});
