import { render, screen } from '@testing-library/react';
import PictureLoader from '../../Picture/PictureLoader';

describe('Tests for PictureLoader component', () => {
  it('should be loader without isError prop', () => {
    render(<PictureLoader />);
    const loader = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
  });

  it('should be error with isError prop', () => {
    render(<PictureLoader isError={true} />);
    const loader = screen.getByRole('progressbar');
    const error = screen.getByRole('alert');
    expect(loader).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });
});

// TODO dodać testy dla klass
