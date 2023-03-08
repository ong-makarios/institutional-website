import { render, screen } from "@testing-library/react";
import NavbarCollapseButton from "./NavbarCollapseButton";

describe("NavbarCollapseButton", () => {
  it("should render with success", () => {
    render(<NavbarCollapseButton />);

    expect(screen.getByRole("button")).toBeDefined();
  });
});
