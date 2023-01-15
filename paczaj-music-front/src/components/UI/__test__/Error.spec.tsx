import { render, screen } from '@testing-library/react';
import Error from '../Error/Error';

const error = {
  message: 'it is error',
  status: 404,
};

describe('Tests for Error component', () => {
  it('should be error in the document', () => {
    render(<Error error={error} />);
    const errorWrapper = screen.getByRole('alert');
    expect(errorWrapper).toBeInTheDocument();
  });
  it('should be error title', () => {
    render(<Error error={error} />);
    const errorTitle = screen.getByRole('heading');
    expect(errorTitle).toHaveTextContent('Ups! Coś poszło nie cacy...');
  });

  it('should be 2 paragraphs with proper text', () => {
    render(<Error error={error} />);
    const errorInfos = screen.getAllByRole('presentation');
    expect(errorInfos.length).toEqual(2);
    expect(errorInfos[0]).toHaveTextContent('Error message: it is error');
    expect(errorInfos[1]).toHaveTextContent('Error status code: 404');
  });
});
