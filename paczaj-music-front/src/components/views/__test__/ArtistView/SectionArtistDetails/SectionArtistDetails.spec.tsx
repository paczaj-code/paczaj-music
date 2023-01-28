import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SectionArtistDetails from '../../../ArtistView/SectionArtistDetails/SectionArtistDetails';
import { testData } from '../../testData';

describe('Tests for SectionArtistDetails component', () => {
  it('should be section with proper data', () => {
    render(
      <SectionArtistDetails
        artist_name={testData.artist_data.artist_name}
        wikipedia_link={testData.artist_data.wikipedia_link}
        country={testData.artist_data.country}
        country_code={testData.artist_data.country_code}
        begin_date_year={testData.artist_data.begin_date_year}
        end_date_year={testData.artist_data.end_date_year}
        tags={testData.artist_data.tags}
        artist_description={testData.artist_data.artist_description}
      />
    );

    // const artist = screen.getByText('Artist')
    expect(screen.getByText('Artist')).toBeInTheDocument();
    expect(screen.getByText('1999 - 2020')).toBeInTheDocument();
    expect(screen.getByText('Poland')).toBeInTheDocument();
    // expect(screen.getByText('John Anthony White')).toBeInTheDocument();
  });

  it('should be button show more and change class on click event', () => {
    render(
      <SectionArtistDetails
        artist_name={testData.artist_data.artist_name}
        wikipedia_link={testData.artist_data.wikipedia_link}
        country={testData.artist_data.country}
        country_code={testData.artist_data.country_code}
        begin_date_year={testData.artist_data.begin_date_year}
        end_date_year={testData.artist_data.end_date_year}
        tags={testData.artist_data.tags}
        artist_description={testData.artist_data.artist_description}
      />
    );
    const button = screen.getByRole('button');

    expect(button.innerHTML).toEqual(
      '<i class="icon-circle-down"></i><span>Więcej</span>'
    );
    expect(button).toHaveClass('show__more__button--close');
    userEvent.click(button);
    expect(button).toHaveClass('show__more__button--open');
  });

  it('should button have class hidden when text is short', () => {
    render(
      <SectionArtistDetails
        artist_name={testData.artist_data.artist_name}
        wikipedia_link={testData.artist_data.wikipedia_link}
        country={testData.artist_data.country}
        country_code={testData.artist_data.country_code}
        begin_date_year={testData.artist_data.begin_date_year}
        end_date_year={testData.artist_data.end_date_year}
        tags={testData.artist_data.tags}
        artist_description="short"
      />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('hidden');
  });

  it('should be link to wikipedia', () => {
    render(
      <SectionArtistDetails
        artist_name={testData.artist_data.artist_name}
        wikipedia_link={testData.artist_data.wikipedia_link}
        country={testData.artist_data.country}
        country_code={testData.artist_data.country_code}
        begin_date_year={testData.artist_data.begin_date_year}
        end_date_year={testData.artist_data.end_date_year}
        tags={testData.artist_data.tags}
      />
    );
    const link = screen.getByRole('link');
    expect(link.innerHTML).toEqual('<i class="icon-wikipedia"></i>Wikipedia');
    expect(link).toHaveAttribute(
      'href',
      'https://en.wikipedia.org/wiki/some_link'
    );
  });
});
