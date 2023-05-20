import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  const slides = [
    {
      title: "Slide 1",
      image: "slide1.jpg",
      content: "Content 1",
      readMoreLink: "https://example.com/slide1",
    },
    {
      title: "Slide 2",
      image: "slide2.jpg",
      content: "Content 2",
      readMoreLink: "https://example.com/slide2",
    },
  ];

  it("renders the slider component with slides", () => {
    render(<Slider slides={slides} />);
    const slideElements = screen.getAllByTestId(/^slide-/);

    expect(slideElements.length).toBe(slides.length);
  });

  it("renders the slide content correctly", () => {
    render(<Slider slides={slides} />);

    slides.forEach((slide, index) => {
      const titleElement = screen.getByText(slide.title);
      const contentElement = screen.getByText(slide.content);
      const imageElement = screen.getByAltText(slide.title);
      const readMoreLinkElement = screen.getAllByText("Leia mais");

      expect(titleElement).toBeInTheDocument();
      expect(contentElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
      expect(readMoreLinkElement[index]).toHaveAttribute(
        "href",
        slide.readMoreLink
      );
    });
  });
});
