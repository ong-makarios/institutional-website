import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavbarButton from "./NavbarButton";

describe("NavbarButton", () => {
  const mockName = "some generic name";
  const mockPath = "/some/generic/path";

  it("should render a list item", () => {
    render(<NavbarButton name={mockName} path={mockPath} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByRole("listitem")).toBeDefined();
  });

  it("should render a link with name passed in props", () => {
    render(<NavbarButton name={mockName} path={mockPath} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByRole("link")).toHaveTextContent(mockName);
  });

  it("should render a link with path passed in props", () => {
    render(<NavbarButton name={mockName} path={mockPath} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByRole("link")).toHaveAttribute("href", mockPath);
  });
});
