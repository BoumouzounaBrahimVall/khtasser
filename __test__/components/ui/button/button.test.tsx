/**
 * @jest-environment jsdom
 */

import { Button } from '@/components/ui/button';
import { fireEvent, render, screen } from '@testing-library/react'

describe('Button component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Hello</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Hello');
    expect(buttonElement).toHaveClass('bg-primary');
   
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });


  // Exemple de test pour les variantes
  it('renders correctly with "secondary" variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('bg-secondary');
    
  });
});