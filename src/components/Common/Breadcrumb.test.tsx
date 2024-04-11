/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/display-name */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumb from "./Breadcrumb";

jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("Breadcrumb Component", () => {
  const pageName = "Test Page";
  const pageDescription = "This is a test page description.";

  test("renders the page name", () => {
    render(<Breadcrumb pageName={pageName} />);
    const pageNameElements = screen.getAllByText(pageName);
    expect(pageNameElements.length).toBeGreaterThan(0); // Ensure at least one element with pageName is rendered
  });

  test("conditionally renders the page description when provided", () => {
    render(
      <Breadcrumb pageName={pageName} pageDescription={pageDescription} />,
    );
    const pageDescriptionElement = screen.getByText(pageDescription);
    expect(pageDescriptionElement).toBeInTheDocument();
  });

  test("does not render the page description when not provided", () => {
    render(<Breadcrumb pageName={pageName} />);
    const pageDescriptionElement = screen.queryByText(pageDescription);
    expect(pageDescriptionElement).not.toBeInTheDocument();
  });

  test("renders breadcrumb links correctly", () => {
    render(<Breadcrumb pageName={pageName} />);
    // Adjusted to find by role to ensure <a> element is rendered by Link mock
    const homeLinkElement = screen.getByRole("link", { name: "Home" });
    expect(homeLinkElement).toBeInTheDocument();
    expect(homeLinkElement).toHaveAttribute("href", "/");
  });
});
