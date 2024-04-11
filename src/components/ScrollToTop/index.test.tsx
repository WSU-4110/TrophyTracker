import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScrollToTop from "./index";

describe("ScrollToTop Component", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  test("is not visible when the page is at the top", () => {
    render(<ScrollToTop />);
    const scrollButton = screen.queryByLabelText("scroll to top");
    expect(scrollButton).not.toBeInTheDocument();
  });

  test("becomes visible when the user scrolls down", () => {
    render(<ScrollToTop />);
    Object.defineProperty(window, "pageYOffset", {
      value: 500,
      writable: true,
    });
    fireEvent.scroll(window);
    const scrollButton = screen.getByLabelText("scroll to top");
    expect(scrollButton).toBeInTheDocument();
  });

  test("scrolls to the top when clicked", () => {
    render(<ScrollToTop />);
    Object.defineProperty(window, "pageYOffset", {
      value: 500,
      writable: true,
    });
    fireEvent.scroll(window);
    const scrollButton = screen.getByLabelText("scroll to top");
    fireEvent.click(scrollButton);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
