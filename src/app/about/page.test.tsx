import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the LearnMore component", async () => {
    render(<AboutPage />);
    await waitFor(
      () => {
        const learnMoreElement = screen.queryByText("Learn More");
        expect(learnMoreElement).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  });
});
