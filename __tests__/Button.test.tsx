import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders a button', () => {
    const label = 'Do Something';
    render(<Button>{label}</Button>);

    const button = screen.getByText(label);

    expect(button).toBeInTheDocument();
  });

  it('clicks on a button', () => {
    const label = 'Do Something';
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{label}</Button>);
    
    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});