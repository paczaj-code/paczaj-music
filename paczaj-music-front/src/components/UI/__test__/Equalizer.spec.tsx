import { render, screen } from '@testing-library/react';
import Equalizer from '../../../components/UI/Loader/Equalizer';

describe('Tests for Equalizer component', () => {
  it('Tests for Equalizer component', () => {
    render(<Equalizer />);
    const equalizerSpans = screen.getByRole('status');
    expect(equalizerSpans).toBeInTheDocument();
  });
});
