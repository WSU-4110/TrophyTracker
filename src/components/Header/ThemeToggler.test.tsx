import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThemeToggler from './ThemeToggler'
import { useTheme } from 'next-themes'

jest.mock('next-themes', () => {
    let theme = 'light' 
    const setTheme = jest.fn<void, [string]>((newTheme) => theme = newTheme) 
    return {
        useTheme: jest.fn(() => ({
            theme,
            setTheme,
        })),
    }
})

describe('ThemeToggler', () => {
  it('toggles theme from light to dark', () => {
    render(<ThemeToggler />)

    const button = screen.getByRole('button', { name: 'theme toggler' })
    fireEvent.click(button)

    expect(useTheme().setTheme).toHaveBeenCalledWith('dark')
  })

  it('toggles theme from dark to light', () => {
    useTheme().setTheme('dark')

    render(<ThemeToggler />)

    const button = screen.getByRole('button', { name: 'theme toggler' })
    fireEvent.click(button)

    expect(useTheme().setTheme).toHaveBeenCalledWith('light')
  })
})