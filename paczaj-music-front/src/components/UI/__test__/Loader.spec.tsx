import { render, screen } from '@testing-library/react';
import Loader from '../Loader/Loader';

describe('Tests for Loader component', () => {
  it('should be loader in the document with proper class', () => {
    render(<Loader trigger={true} />);

    const equalizer = screen.getAllByRole('status');
    expect(equalizer[0]).toBeInTheDocument();
    expect(equalizer[0]).toHaveClass('loader__wrapper');
  });

  it('should be equalizer in the document with proper class', () => {
    render(<Loader trigger={true} />);

    const equalizer = screen.getAllByRole('status');
    expect(equalizer[1]).toBeInTheDocument();
    expect(equalizer[1]).toHaveClass('equalizer');
  });
});
