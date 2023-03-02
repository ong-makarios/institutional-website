import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render with success", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation")).toBeDefined();
  });
});
