import { render, screen } from '@testing-library/react';
import Button from '../Button/Buttons';
import userEvent from '@testing-library/user-event';

const onClick = jest.fn();

describe('Tests for Button component', () => {
  it('should be button on screen with proper class', () => {
    render(<Button type="button" button_modifier="homepage" />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button--homepage');
  });

  it('should be extra class when extra_class prop given', () => {
    render(<Button type="button" button_prefix="app" />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('app__button');
  });

  it('should be function onClick fired when button clicked', () => {
    render(<Button type="button" onClick={onClick} />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
