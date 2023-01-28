import { render, screen } from '@testing-library/react';
import SectionReleases from '../../ArtistView/SectionReleases';
import { testData } from '../testData';

describe('Tests for SectionReleases component', () => {
  it('should be section title in the document', () => {
    render(
      <SectionReleases
        title="Albumy studyjne"
        releases={testData.releases.studio_albums}
      />
    );
    const title = screen.getByText('Albumy studyjne');
    expect(title).toBeInTheDocument();
  });

  it('should be pictures in the document', () => {
    render(
      <SectionReleases
        title="Albumy studyjne"
        releases={testData.releases.studio_albums}
      />
    );
    const images = screen.getAllByRole('img');
    expect(images.length).toEqual(2);
  });

  it('should be proper src for picture', () => {
    render(
      <SectionReleases
        title="Albumy studyjne"
        releases={testData.releases.studio_albums}
      />
    );
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'src',
      testData.releases.studio_albums[0].front_small
    );
  });

  it('should be proper src when no image', () => {
    render(
      <SectionReleases
        title="Albumy studyjne"
        releases={testData.releases.extended_plays}
      />
    );
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', 'no-cover.png');
  });
});
