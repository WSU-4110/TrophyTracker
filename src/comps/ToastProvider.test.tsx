// Import necessary utilities from React and Testing Library
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Import the components you are testing
import { ToastContextProvider, ToastContext } from './ToastProvider';

describe('ToastContextProvider tests', () => {
  // Using fake timers for this test suite
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // Cleaning up and using real timers after each test
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('custom timeout works for a toast', async () => {
    const TestComponent = () => {
      const { addToast } = React.useContext(ToastContext);

      return (
        <button onClick={() => addToast({ message: 'Short-lived Message', type: 'success', timeout: 2000 })}>
          Add Short-lived Toast
        </button>
      );
    };

    render(
      <ToastContextProvider>
        <TestComponent />
      </ToastContextProvider>
    );

    fireEvent.click(screen.getByText('Add Short-lived Toast'));

    // Verifying the toast is displayed as expected
    expect(await screen.findByText('Short-lived Message')).toBeTruthy();

    // Advancing timers to simulate passage of the custom timeout
    jest.advanceTimersByTime(2000);

    // Using waitFor to check for the toast's removal after the timeout
    await waitFor(() => {
      expect(screen.queryByText('Short-lived Message')).toBeNull();
    });
  });

  // Here you would add other tests for your ToastContextProvider component
});
