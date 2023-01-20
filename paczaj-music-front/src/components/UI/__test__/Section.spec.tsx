import { getByRole, render, screen } from '@testing-library/react';
import Section from '../Section/Section';

describe('Tests for Section component', () => {
  it('should Section component in the document with all elements', () => {
    render(
      <Section section_type="test" section_title="Test">
        <p>Child</p>
      </Section>
    );
    const section = screen.getByRole('presentation');
    const heading = screen.getByRole('heading', { level: 2 });
    const divider = screen.getAllByRole('separator');
    const child = screen.getByText('Child');

    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(divider[0]).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });

  it('should all elements to have proper classes when section_type prop is given', () => {
    render(
      <Section section_type="test" section_title="Test">
        <p>Test</p>
      </Section>
    );
    const section = screen.getByRole('presentation');
    const heading = screen.getByRole('heading', { level: 2 });
    const divider = screen.getAllByRole('separator');
    expect(section).toHaveClass('test__section');
    expect(heading).toHaveClass('test__heading');
    expect(divider[0]).toHaveClass('test__divider');
  });

  it('should all elements to have proper classes when section_modifier prop is given', () => {
    render(
      <Section
        section_modifier="modifier"
        section_title="Test"
        section_type="test"
      >
        <p>Test</p>
      </Section>
    );
    const section = screen.getByRole('presentation');
    const heading = screen.getByRole('heading', { level: 2 });
    const divider = screen.getAllByRole('separator');
    expect(section).toHaveClass('test__section--modifier');
    expect(heading).toHaveClass('test__heading--modifier');
    expect(divider[0]).toHaveClass('test__divider--modifier');
  });
});
