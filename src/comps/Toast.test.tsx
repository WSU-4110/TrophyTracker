// Necessary imports
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as nextRouter from 'next/navigation';
import ToastComp from './Toast'; 

// Mocks
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

// Type assertion for TypeScript
const mockUseSearchParams = nextRouter.useSearchParams as jest.Mock;

describe('ToastComp', () => {

  it('should not display any toasts when there are no relevant query parameters', () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    render(<ToastComp />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('should dismiss the error toast when dismissed', () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams({ error: 'Dismissable error' }));
    render(<ToastComp />);
    // Find by aria-label "Close", assuming that's how you've marked your dismiss button
    const dismissButton = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(dismissButton);
    expect(screen.queryByText(/Dismissable error/i)).not.toBeInTheDocument();
  });

  it('should dismiss the message toast when dismissed', () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams({ message: 'Dismissable message' }));
    render(<ToastComp />);
    // Adjusted to correctly identify the dismiss button by its accessible name
    const dismissButton = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(dismissButton);
    expect(screen.queryByText(/Dismissable message/i)).not.toBeInTheDocument();
  });

});
