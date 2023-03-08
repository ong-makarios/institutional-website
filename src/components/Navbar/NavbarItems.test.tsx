import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavbarItems from "./NavbarItems";

describe("NavbarItems", () => {
  it("should render all buttons", () => {
    render(<NavbarItems />, { wrapper: MemoryRouter });

    expect(screen.getAllByRole("link")).toHaveLength(1);
  });

  it("should render a link button to home", () => {
    render(<NavbarItems />, { wrapper: MemoryRouter });

    expect(screen.getByText(/home/i)).toBeDefined();
  });
});
