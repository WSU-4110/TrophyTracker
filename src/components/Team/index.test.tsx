import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Team from './index';  

describe('Team Component', () => {
  it('renders the SectionTitle component with correct text', () => {
    render(<Team />);
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument();
    expect(screen.getByText('Below are the people who helped bring TrophyTracker to where it is today!')).toBeInTheDocument();
  });

  it('renders the correct number of SingleTeam components', () => {
    render(<Team />);
    const names = ['Zavaar Shah', 'Venkat Yenduri', 'Sukrut Nadigotti', 'Pierre Tawfik', 'Yusef Turfe', 'Alberto Cervantes'];
    names.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('checks for social links in SingleTeam components', () => {
    render(<Team />);
    const socialLinks = screen.getAllByRole('link', { name: /social link/i });
    expect(socialLinks.length).toBe(18); 
  });

  it('checks for images in SingleTeam components', () => {
    render(<Team />);
    expect(screen.getAllByRole('img').length).toBe(6); 
  });
});
