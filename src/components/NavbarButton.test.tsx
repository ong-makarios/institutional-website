import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavbarButton from "./NavbarButton";

describe("NavbarButton", () => {
  const mockButtonName: string = "some generic name";
  const mockHref: string = "/some-generic-route";

  it("should render a navbar button with name passed in props", () => {
    render(
      <NavbarButton name={mockButtonName} href={mockHref} current={false} />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(screen.getByText(mockButtonName)).toBeDefined();
  });

  it("should render a navbar button with link passed in props", () => {
    render(
      <NavbarButton name={mockButtonName} href={mockHref} current={false} />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(screen.getByText(mockButtonName)).toHaveAttribute("href", mockHref);
  });

  it("should set default button classes", () => {
    const expectedDefaultClasses: string =
      "block px-3 py-2 rounded-md text-base font-medium";

    render(
      <NavbarButton name={mockButtonName} href={mockHref} current={false} />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(screen.getByRole("button").className).toEqual(
      expect.stringContaining(expectedDefaultClasses)
    );
  });

  it("should be active when prop current is true", () => {
    const expectedActiveClasses: string = "bg-gray-900 text-white";

    render(
      <NavbarButton name={mockButtonName} href={mockHref} current={true} />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole("button").className).toEqual(
      expect.stringContaining(expectedActiveClasses)
    );
    expect(screen.getByRole("button", { current: "page" })).toBeDefined();
  });

  it("should be inactive when prop current is false", () => {
    const expectedInactiveClasses: string =
      "text-gray-300 hover:bg-gray-700 hover:text-white";

    render(
      <NavbarButton name={mockButtonName} href={mockHref} current={false} />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole("button").className).toEqual(
      expect.stringContaining(expectedInactiveClasses)
    );
    expect(screen.getByRole("button", { current: undefined })).toBeDefined();
  });
});
