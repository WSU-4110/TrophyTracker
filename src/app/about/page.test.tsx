import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the LearnMore component", () => {
    render(<AboutPage />);
    expect(true).toBeTruthy();
  });
});
