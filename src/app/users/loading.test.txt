import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Loading from './loading';


describe('Loading Component', () => {
  it('should render the loading message and a spinner', () => {
    render(<Loading />);
    
   
    const loadingMessage = screen.getByText(/loading users/i);
    expect(loadingMessage).toBeInTheDocument();

   
    
    const spinner = screen.getByTestId('spinner'); // This assumes you've added data-testid="spinner" to your Spinner component
    expect(spinner).toBeInTheDocument();
  });
});

