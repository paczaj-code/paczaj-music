import { render, screen } from '@testing-library/react';
import Heading from '../Heading/Heading';

describe('Tests for Heading component', () => {
  it('should be proper class when heading_prefix prop is given', () => {
    render(<Heading title="Some title" heading_prefix="section" />);
    const headingElement = screen.getByRole('heading');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('section__heading');
  });

  it('should be proper class when heading_modifier prop is given', () => {
    render(<Heading title="Some title" heading_modifier="section" />);
    const headingElement = screen.getByRole('heading');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('heading--section');
  });

  it('should be proper HTML tag  when headingLevel prop is given', () => {
    render(<Heading title="Some title" headingLevel="h4" />);
    const headingElement = screen.getByRole('heading', { level: 4 });

    expect(headingElement).toBeInTheDocument();
  });

  it('should be proper H2 tag  when headingLevel prop is not given', () => {
    render(<Heading title="Some title" />);
    const headingElement = screen.getByRole('heading', { level: 2 });

    expect(headingElement).toBeInTheDocument();
  });

  it('should be proper HTML text  with title_icon prop', () => {
    render(
      <Heading title="Some title" headingLevel="h4" title_icon="icon-close" />
    );
    const headingElement = screen.getByRole('heading', { level: 4 });

    expect(headingElement).toContainHTML('<i class="icon-close"></i>');
    // '<i class="icon-close"></i>Some title'
  });
});
