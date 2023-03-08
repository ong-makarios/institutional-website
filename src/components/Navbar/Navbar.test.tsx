import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render with success", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    expect(screen.getByRole("navigation")).toBeDefined();
  });

  it("should render navbar items", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    expect(screen.getByRole("list")).toBeDefined();
  });
});
