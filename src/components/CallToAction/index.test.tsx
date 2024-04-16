import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CallToAction from "./index";

describe("CallToAction Component", () => {
  it("renders the component and checks for main heading", () => {
    render(<CallToAction />);
    const mainHeading = screen.getByText(/What Are You Waiting For?/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it("renders and checks the description text", () => {
    render(<CallToAction />);
    const descriptionText = screen.getByText(/Don't miss out on the fun!/i);
    expect(descriptionText).toBeInTheDocument();
  });

  it("ensures the Sign Up link points to the correct path", () => {
    render(<CallToAction />);
    const signUpLink = screen.getByRole("link", { name: /Sign Up/i });
    expect(signUpLink).toHaveAttribute("href", "/api/auth/signin");
  });

  describe("SVG Presence", () => {
    beforeEach(() => {
      render(<CallToAction />);
    });

    it("renders the left background SVG", () => {
      const leftSvg = document.querySelector('svg[viewBox="0 0 495 470"]');
      expect(leftSvg).toBeInTheDocument();
    });

    it("renders the right background SVG", () => {
      const rightSvg = document.querySelector('svg[viewBox="0 0 493 470"]');
      expect(rightSvg).toBeInTheDocument();
    });

    it("checks for specific SVG elements like circles and paths", () => {
      const circles = document.querySelectorAll("svg circle");
      const paths = document.querySelectorAll("svg path");
      expect(circles.length).toBeGreaterThanOrEqual(4);
      expect(paths.length).toBeGreaterThanOrEqual(2);
    });
  });
});
