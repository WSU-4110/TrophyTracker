import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials"; // Adjust the path as needed.

describe("Testimonials Component", () => {
  test("renders with section title and paragraph", () => {
    render(<Testimonials />);
    expect(screen.getByText(/What our Users Say/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Hear from our users and find out why TrophyTracker is the best platform for tracking your gaming achievements./i,
      ),
    ).toBeInTheDocument();
  });

  test("displays testimonials dynamically", () => {
    render(<Testimonials />);
    expect(
      screen.getByText(
        /TrophyTracker has completely changed the way I approach gaming achievements./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /With TrophyTracker, I've found a community that shares my passion for gaming./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /As a developer, seeing how engaged users are with TrophyTracker is fantastic./i,
      ),
    ).toBeInTheDocument();
  });
});
