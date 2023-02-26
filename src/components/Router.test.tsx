import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Router from "./Router";

describe("Router", () => {
  it("should render home when route equals to /", () => {
    const homeRoute: string = "/";

    render(
      <MemoryRouter initialEntries={[homeRoute]}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it("should render not found page when route equals to a non mapped one", () => {
    const badRoute: string = "/some-wrong-route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByText(/404 page not found/i)).toBeInTheDocument();
  });
});
