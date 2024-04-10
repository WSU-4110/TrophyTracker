import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleFaq from "./SingleFaq";

describe("SingleFaq Component", () => {
  const question = "What is React?";
  const answer = "React is a JavaScript library for building user interfaces.";

  beforeEach(() => {
    render(<SingleFaq question={question} answer={answer} />);
  });

  test("renders the question", () => {
    const questionElement = screen.getByText(question);
    expect(questionElement).toBeInTheDocument();
  });

  test("renders the answer", () => {
    const answerElement = screen.getByText(answer);
    expect(answerElement).toBeInTheDocument();
  });
});
