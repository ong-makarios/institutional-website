import MatchMediaMock from "jest-matchmedia-mock";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  let matchMedia: MatchMediaMock;

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("should render with success", () => {
    render(<App />);
  });
});
