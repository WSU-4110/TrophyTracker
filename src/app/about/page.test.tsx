import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from './page'; 

describe('AboutPage', () => {
  it('renders the LearnMore component', () => {
    render(<AboutPage />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });
});
