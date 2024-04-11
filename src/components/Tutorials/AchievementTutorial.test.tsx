import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AchievementTrackingTutorial from "./AchievementTutorial";

describe("AchievementTrackingTutorial Component", () => {
  beforeEach(() => {
    render(<AchievementTrackingTutorial />);
  });

  test("renders tutorial steps", () => {
    expect(screen.getByText("Step 1: Getting Started")).toBeInTheDocument();
    expect(
      screen.getByText("Step 2: Tracking Your Achievements"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Step 3: Managing Your Games and Progress"),
    ).toBeInTheDocument();
  });

  test("renders images for each tutorial step", () => {
    expect(screen.getAllByRole("img").length).toBe(3);
  });
});
