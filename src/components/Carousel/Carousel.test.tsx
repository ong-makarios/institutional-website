import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel", () => {
  it("should render with success", () => {
    render(<Carousel />);

    expect(screen.getByRole("banner")).toBeDefined();
  });

  it("should render two images", () => {
    render(<Carousel />);

    expect(screen.getAllByRole("img")).toHaveLength(2);
  });
});
