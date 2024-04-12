import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LearnMore from './index';  

describe('LearnMore Component', () => {
  it('renders the main title and content correctly', () => {
    render(<LearnMore />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByText('Welcome to the Learn More page!')).toBeInTheDocument();
    expect(screen.getByText('Here, you can provide additional information about your application or feature.')).toBeInTheDocument();
    expect(screen.getByText('Feel free to customize this page with your own content.')).toBeInTheDocument();
  });

  it('renders the discussion board with user comments', () => {
    render(<LearnMore />);
    expect(screen.getByText('Discussion Board')).toBeInTheDocument();
    const user1Entries = screen.getAllByText('User1:');
    expect(user1Entries.length).toBe(2);  
    expect(screen.getByText('Hey, I just achieved the "Pentakill" achievement in League of Legends!')).toBeInTheDocument();
    expect(screen.getByText("That's amazing! Congrats on the Pentakill! It's not an easy achievement to get.")).toBeInTheDocument();
    expect(screen.getByText('Thanks! It was an intense team fight, but I managed to take down all five enemies in one go.')).toBeInTheDocument();
    expect(screen.getByText("That's some impressive skill! I hope I can achieve a Pentakill someday too.")).toBeInTheDocument();
  });
});
