import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SingleTestimonial from "./SingleTestimonial";

describe("SingleTestimonial Component", () => {
  const mockTestimonial = {
    id: 1,
    name: "Alex Johnson",
    designation: "Gaming Enthusiast",
    content:
      "TrophyTracker has completely changed the way I approach gaming achievements. The interface is user-friendly, and the ability to track progress across multiple platforms is unmatched. Highly recommended for any serious gamer!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  };

  test("renders testimonial content correctly", () => {
    render(<SingleTestimonial testimonial={mockTestimonial} />);
    expect(
      screen.getByText(new RegExp(mockTestimonial.content, "i")),
    ).toBeInTheDocument();
    expect(screen.getByText(mockTestimonial.name)).toBeInTheDocument();
    expect(screen.getByText(mockTestimonial.designation)).toBeInTheDocument();
    expect(screen.getByAltText(mockTestimonial.name)).toHaveAttribute(
      "src",
      expect.stringContaining("author-01.png"),
    );
  });

  test("checks for the presence of an SVG, implying stars are present", () => {
    render(<SingleTestimonial testimonial={mockTestimonial} />);
    const svgElement = screen.queryByRole("img");
    expect(svgElement).toBeInTheDocument();
  });
});
