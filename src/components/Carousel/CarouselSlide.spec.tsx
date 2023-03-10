import { render, screen } from "@testing-library/react";
import CarouselSlide from "./CarouselSlide";

describe("CarouselSlide", () => {
  const mockImageSource = "/some/generic/path";
  const mockImageAlt = "some generic alternative text";

  it("should render an image with src from props", () => {
    render(<CarouselSlide src={mockImageSource} alt={mockImageAlt} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", mockImageSource);
  });

  it("should render an image with alternative text from props", () => {
    render(<CarouselSlide src={mockImageSource} alt={mockImageAlt} />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", mockImageAlt);
  });

  it("should render active item if active passed in props equals true", () => {
    render(
      <CarouselSlide src={mockImageSource} alt={mockImageAlt} active={true} />
    );

    expect(screen.getByTestId("carousel-item")).toHaveClass("active");
  });

  it("should not render active item if active passed in props equals false", () => {
    render(
      <CarouselSlide src={mockImageSource} alt={mockImageAlt} active={false} />
    );

    expect(screen.getByTestId("carousel-item")).not.toHaveClass("active");
  });
});
