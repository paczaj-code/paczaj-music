import { render, screen } from '@testing-library/react';
import ArtistInfoPanel from '../../../ArtistView/SectionArtistDetails/ArtistInfoPanel';

const testData = {
  country: 'Poland',
  country_code: 'pl',
  begin_date_year: 1999,
  end_date_year: 2020,
  tags: ['punk', 'indie'],
};

describe('Tests for ArtistInfoPanel component', () => {
  it('should be panel with all elements', () => {
    render(
      <ArtistInfoPanel
        country={testData.country}
        country_code={testData.country_code}
        begin_date_year={testData.begin_date_year}
        end_date_year={testData.end_date_year}
        tags={testData.tags}
      />
    );

    const country = screen.getByText('Poland');
    const begin_date_year = screen.getByText('1999 - 2020');
    const tag = screen.getByText('punk');

    expect(country).toBeInTheDocument();
    expect(begin_date_year).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
  });

  it('should "present" instead of end date when no end_date_year', () => {
    render(
      <ArtistInfoPanel
        country={testData.country}
        country_code={testData.country_code}
        begin_date_year={testData.begin_date_year}
      />
    );

    const dates = screen.getByText('1999 - present');

    expect(dates).toBeInTheDocument();
  });

  it('should be proper country image', () => {
    render(
      <ArtistInfoPanel
        country={testData.country}
        country_code={testData.country_code}
      />
    );

    const country_image = screen.getByRole('img');
    expect(country_image).toBeInTheDocument();
    expect(country_image).toHaveAttribute('alt', testData.country_code);
    expect(country_image).toHaveAttribute(
      'src',
      `https://www.countryflagicons.com/SHINY/32/${testData.country_code!.trim()}.png`
    );
  });
});
