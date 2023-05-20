import React from "react";
import { render, screen } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {
  it("should render correctly", () => {
    const { container } = render(<SectionTitle title="Test" />);

    expect(container).toMatchSnapshot();
  });

  it("should render title passed in props", () => {
    render(<SectionTitle title="Test" />);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
