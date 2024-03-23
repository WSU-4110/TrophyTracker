import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./SingleTestimonial"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("Testimonials Component", () => {
  // Test 1: Component renders without crashing
  test("renders without crashing", () => {
    render(<Testimonials testimonial={undefined as Testimonial} />);
    expect(screen.getByText(/What our Client Say/i)).toBeInTheDocument();
  });

  // Test 2: SectionTitle is rendered with correct props
  test("renders SectionTitle with correct props", () => {
    render(
      <Testimonials
        testimonial={{
          id: 1,
          name: "John Doe",
          designation: "CEO",
          content: "Lorem Ipsum",
        }}
      />,
    );
    expect(screen.getByText(/Testimonials/i)).toBeInTheDocument();
    expect(screen.getByText(/What our Client Say/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form./i,
      ),
    ).toBeInTheDocument();
  });

  // Test 3: Correct number of SingleTestimonial components are rendered
  test("renders correct number of SingleTestimonial components", () => {
    render(
      <Testimonials
        testimonial={{
          id: 1,
          name: "John Doe",
          designation: "CEO",
          content: "Lorem Ipsum",
        }}
      />,
    );
    const testimonials = screen.getAllByTestId("single-testimonial"); // Assume SingleTestimonial component has a data-testid="single-testimonial"
    expect(testimonials).toHaveLength(3);
  });

  // Test 4: SingleTestimonial components are rendered with correct data
  test("SingleTestimonial components render with correct data", () => {
    render(<Testimonials testimonial={undefined as Testimonial} />);
    // Example test for the first testimonial's content
    expect(
      screen.getByText(
        /Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community./i,
      ),
    ).toBeInTheDocument();
    // Additional checks can be made for name, designation, and image src attributes
  });
});
