/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { metadata } from "../app/about/page";
import { expect } from "chai"; // Add import statement for 'expect'

describe("About Page", () => {
  it("should have the correct title", () => {
    expect((metadata as { title: string }).title).to.equal(
      "About Us | Welcome to TrophyTracker",
    ); // Explicitly type 'metadata' object and use 'to.equal' instead of 'toBe'
  });

  it("should have the correct description", () => {
    expect((metadata as { description: string }).description).to.equal(
      "Track all your achievemnts across multiple platforms all in one spot", // Explicitly type 'metadata' object and use 'to.equal' instead of 'toBe'
    );
  });
});
import SpecificAchievement from "../app/about/page";

import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

describe("SpecificAchievement", () => {
  expect.extend({ toBeInTheDocument });

  import { toBeInTheDocument } from "@testing-library/jest-dom"; // Add import statement for 'toBeInTheDocument'

  it("should render the achievement details correctly", async () => {
    const achievementId = "1234567890"; // Remove type annotation

    const params: { achievement_id: string } = {
      achievement_id: achievementId,
    };

    render(<SpecificAchievement params={params} />);

    expect(screen.getByText("Achievement Name")).toBeInTheDocument();
    expect(screen.getByText("Author Name")).toBeInTheDocument();
    expect(screen.getByText("Publishers")).toBeInTheDocument();
    expect(screen.getByText("View Game")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  import { toBeInTheDocument } from "@testing-library/jest-dom"; // Add import statement for 'toBeInTheDocument'

  it("should redirect if no achievement ID is provided", async () => {
    const params: { achievement_id: string } = { achievement_id: "" };

    render(<SpecificAchievement params={params} />);

    expect(screen.getByText("No achievement found")).toBeInTheDocument();
  });

  it("should redirect if an invalid achievement ID is provided", async () => {
    const params: { achievement_id: string } = { achievement_id: "invalidId" };

    render(<SpecificAchievement params={params} />);

    expect(screen.getByText("Invalid achievement")).toBeInTheDocument();
  });

  // Add more tests as needed
});
