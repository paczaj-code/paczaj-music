import { render, screen } from '@testing-library/react';
import Divider from '../Divider/Divider';

describe('Tests for Divider component', () => {
  it('should be divider on screen with proper class when divider_prefix prop is given', () => {
    render(<Divider divider_prefix="test" />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('test__divider');
  });

  it('should be proper classes when divider_modifier prop is given', () => {
    render(<Divider divider_modifier="test" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--test');
  });
});
