/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { metadata } from "./page";
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
