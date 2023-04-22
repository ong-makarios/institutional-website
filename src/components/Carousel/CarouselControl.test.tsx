import { render, screen } from "@testing-library/react";
import CarouselControl from "./CarouselControl";

describe("CarouselControl", () => {
  it("should render next button if type prop equals to next", () => {
    render(<CarouselControl type="next" target="#carousel" />);

    expect(screen.getByRole("button")).toHaveAttribute("data-bs-slide", "next");
    expect(screen.getByRole("button")).toHaveClass("carousel-control-next");
    expect(screen.getByText("Next")).toBeDefined();
    expect(screen.getByTestId("carousel-control-icon")).toHaveClass(
      "carousel-control-next-icon"
    );
  });

  it("should render previous button if type prop equals to previous", () => {
    render(<CarouselControl type="prev" target="#carousel" />);

    expect(screen.getByRole("button")).toHaveAttribute("data-bs-slide", "prev");
    expect(screen.getByRole("button")).toHaveClass("carousel-control-prev");
    expect(screen.getByText("Previous")).toBeDefined();
    expect(screen.getByTestId("carousel-control-icon")).toHaveClass(
      "carousel-control-prev-icon"
    );
  });

  it("should render button with target passed in props", () => {
    const expectedTarget = "#carousel";

    render(<CarouselControl type="next" target={expectedTarget} />);

    expect(screen.getByRole("button")).toHaveAttribute(
      "data-bs-target",
      expectedTarget
    );
  });
});
