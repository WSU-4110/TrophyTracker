import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { ToastContextProvider, ToastContext } from "./ToastProvider";

describe("ToastContextProvider functionality", () => {
  beforeEach(() => {
    jest.useFakeTimers(undefined);
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  test("adds and removes a toast correctly", () => {
    const TestComponent = () => {
      const { addToast } = React.useContext(ToastContext);

      return (
        <button
          onClick={() =>
            addToast({ message: "Test Message", type: "info", timeout: 2000 })
          }
        >
          Add Test Toast
        </button>
      );
    };

    act(() => {
      render(
        <ToastContextProvider>
          <TestComponent />
        </ToastContextProvider>,
      );
    });

    act(() => {
      fireEvent.click(screen.getByText("Add Test Toast"));
    });

    // Here we are specifically checking the closest parent div with 'animate-in' class which wraps the Toast components
    expect(screen.getByText("Test Message").closest("div")).toBeInTheDocument();
    expect(screen.getByText("Test Message").closest(".animate-in")).toHaveClass(
      "animate-in",
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByText("Test Message")).toBeNull();
  });
});
