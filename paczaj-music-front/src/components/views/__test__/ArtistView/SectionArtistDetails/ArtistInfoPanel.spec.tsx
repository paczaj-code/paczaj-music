import { render, screen } from '@testing-library/react';
import ArtistInfoPanel from '../../../ArtistView/SectionArtistDetails/ArtistInfoPanel';
import { testData } from '../../testData';

describe('Tests for ArtistInfoPanel component', () => {
  it('should be panel with all elements', () => {
    render(
      <ArtistInfoPanel
        country={testData.artist_data.country}
        country_code={testData.artist_data.country_code}
        begin_date_year={testData.artist_data.begin_date_year}
        end_date_year={testData.artist_data.end_date_year}
        tags={testData.artist_data.tags}
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
        country={testData.artist_data.country}
        country_code={testData.artist_data.country_code}
        begin_date_year={testData.artist_data.begin_date_year}
      />
    );

    const dates = screen.getByText('1999 - present');

    expect(dates).toBeInTheDocument();
  });

  it('should be proper country image', () => {
    render(
      <ArtistInfoPanel
        country={testData.artist_data.country}
        country_code={testData.artist_data.country_code}
      />
    );

    const country_image = screen.getByRole('img');
    expect(country_image).toBeInTheDocument();
    expect(country_image).toHaveAttribute(
      'alt',
      testData.artist_data.country_code
    );
    expect(country_image).toHaveAttribute(
      'src',
      `https://www.countryflagicons.com/SHINY/32/${testData.artist_data.country_code!.trim()}.png`
    );
  });
});
