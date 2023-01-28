import { render, screen } from '@testing-library/react';
import SectionYoutube from '../../ArtistView/SectionYoutube';
import { testData } from '../testData';

describe('Tests for SectionYoutube component', () => {
  it('should be section title in the document', () => {
    render(<SectionYoutube youtubeMovies={testData.youtube_movies} />);
    const title = screen.getByText('Youtube');
    expect(title).toBeInTheDocument();
  });

  it('should be pictures in the document', () => {
    render(<SectionYoutube youtubeMovies={testData.youtube_movies} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toEqual(2);
  });

  it('should be proper src for picture', () => {
    render(<SectionYoutube youtubeMovies={testData.youtube_movies} />);
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'src',
      `https://i.ytimg.com/vi/${testData.youtube_movies[0].youtube_id}/mqdefault.jpg`
    );
  });
});
