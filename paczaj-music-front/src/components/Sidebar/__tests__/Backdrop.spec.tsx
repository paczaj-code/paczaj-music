import { render, screen } from '@testing-library/react';
import SearchArtists from '../SearchArtists/SearchArtists';
import userEvent from '@testing-library/user-event';
import Backdrop from '../../UI/Backdrop/Backdrop';

const onClick = jest.fn();

describe('Tests for Backdrop components', () => {
  it('should be Backdrop in the document', () => {
    render(<Backdrop trigger={true} />);
    const backdrop = screen.getByRole('status');
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveClass('backdrop');
  });

  it('should be proper class when backdrop_prefix prop given', () => {
    render(<Backdrop trigger={true} backdrop_prefix="test" />);
    const backdrop = screen.getByRole('status');
    expect(backdrop).toHaveClass('test__backdrop');
  });

  it('should be proper class when backdrop_modifier prop given', () => {
    render(<Backdrop trigger={true} backdrop_modifier="test" />);
    const backdrop = screen.getByRole('status');
    expect(backdrop).toHaveClass('backdrop--test');
  });

  it('should be proper icon when withIconLoader prop is given', () => {
    render(<Backdrop trigger={true} backdrop_modifier="test" withIconLoader />);
    const backdrop = screen.getByRole('status');
    const icon = screen.getByRole('spinbutton');
    expect(backdrop).toContainElement(icon);
  });

  it('should be given function fired once when clicked and onClich prop is given', () => {
    render(
      <Backdrop trigger={true} backdrop_modifier="test" onClick={onClick} />
    );
    const backdrop = screen.getByRole('status');
    userEvent.click(backdrop);
    expect(onClick).toBeCalledTimes(1);
  });
});
