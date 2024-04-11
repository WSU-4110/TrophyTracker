import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from './loading'; // Adjust the import path according to your file structure

describe('Loading Component', () => {
  it('renders the loading message', () => {
    render(<Loading />);
    expect(screen.getByText(/Loading users/i)).toBeInTheDocument();
  });

  it('renders the spinner', () => {
    render(<Loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
