import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTop from './index'; 

Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

describe('ScrollToTop Component', () => {
  it('shows the button after scrolling down the page', () => {
    render(<ScrollToTop />);
    fireEvent.scroll(window, { target: { pageYOffset: 500 } });
    const button = screen.getByLabelText('scroll to top');
    expect(button).toBeInTheDocument();
  });

  it('scrolls to top when button is clicked', () => {
    render(<ScrollToTop />);
    fireEvent.scroll(window, { target: { pageYOffset: 500 } });
    const button = screen.getByLabelText('scroll to top');
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
