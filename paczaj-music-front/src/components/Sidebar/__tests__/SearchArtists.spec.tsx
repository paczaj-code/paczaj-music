import { render, screen } from '@testing-library/react';
import SearchArtists from '../SearchArtists/SearchArtists';
import userEvent from '@testing-library/user-event';

const onInput = jest.fn();

describe('Tests for SearchArtists component', () => {
  beforeEach(() => {
    render(<SearchArtists onInput={onInput} placeholder="searchArtists" />);
  });
  it('should be rendered proper HTML structure', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should be fire onInput  function and proper value', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'HELlO');
    expect(onInput).toBeCalledTimes(5);
    expect(input).toHaveValue('HELlO');
  });
});
