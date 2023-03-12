import { render, screen } from "@testing-library/react";
import CarouselIndicator from "./CarouselIndicator";

describe("CarouselIndicator", () => {
  const mockTarget = "someGenericTarget";
  const mockIndex = "0";

  it("should render button with target passed in props", () => {
    render(<CarouselIndicator target={mockTarget} index={mockIndex} />);

    expect(screen.getByRole("button")).toHaveAttribute(
      "data-bs-target",
      mockTarget
    );
  });

  it("should render button with index passed in props", () => {
    render(<CarouselIndicator target={mockTarget} index={mockIndex} />);

    expect(screen.getByRole("button")).toHaveAttribute(
      "data-bs-slide-to",
      mockIndex
    );
  });

  it("should render active button if active passed in props equals true", () => {
    render(
      <CarouselIndicator target={mockTarget} index={mockIndex} active={true} />
    );

    expect(screen.getByRole("button")).toHaveClass("active");
    expect(screen.getByRole("button")).toHaveAttribute("aria-current", "true");
  });

  it("should render not active button if active passed in props equals false", () => {
    render(
      <CarouselIndicator target={mockTarget} index={mockIndex} active={false} />
    );

    expect(screen.getByRole("button")).not.toHaveClass("active");
    expect(screen.getByRole("button")).not.toHaveAttribute("aria-current");
  });

  it("should render button with label based on index passed in props", () => {
    render(
      <CarouselIndicator target={mockTarget} index={mockIndex} active={true} />
    );

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      `Slide ${mockIndex + 1}`
    );
  });
});
