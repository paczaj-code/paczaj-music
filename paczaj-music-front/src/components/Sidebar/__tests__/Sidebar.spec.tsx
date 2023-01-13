import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';
import userEvent from '@testing-library/user-event';
import { AppContext } from '../../../context/AppContext';
import { testContextValues } from '../../../__test__/test-utils';

const artist_list = [
  {
    id: 1,
    name: 'Artist 1',
    country: 'United States',
    artist_type: 'Group',
    tags: ['alternative rock', 'rock'],
  },
  {
    id: 2,
    name: 'Artist 2',
    country: 'Polands',
    artist_type: 'Person',
    tags: ['punk-rock'],
  },
];

describe('Tests for ArtistsList component', () => {
  beforeEach(() => {
    render(
      <AppContext.Provider value={testContextValues}>
        <Sidebar artist_list={artist_list} />{' '}
      </AppContext.Provider>
    );
  });

  it('should be proper HTML structure', () => {
    const artistListWrapper = screen.getByRole('navigation');
    const artistList = screen.getByRole('list');
    const artistItems = screen.getAllByRole('listitem');
    const artistSearch = screen.getByRole('textbox');

    expect(artistListWrapper).toBeInTheDocument();
    expect(artistList).toBeInTheDocument();
    expect(artistItems[0]).toBeInTheDocument();
    expect(artistSearch).toBeInTheDocument();
  });
  it('should be 2 li elements', () => {
    const artistItems = screen.getAllByRole('listitem');
    expect(artistItems.length).toEqual(2);
  });

  it('should be proper filtered list and no message', () => {
    userEvent.type(
      screen.getByRole('textbox', { name: 'searchArtists' }),
      'Artist 2'
    );
    const artistItems = screen.getAllByRole('listitem');

    expect(artistItems.length).toEqual(1);
    const message = screen.queryByText('Nie znaleziono artysty');
    expect(message).not.toBeInTheDocument();
  });

  it('should be proper message when filtered array is empty', () => {
    userEvent.type(
      screen.getByRole('textbox', { name: 'searchArtists' }),
      'Beta'
    );
    const artistItems = screen.queryAllByRole('listitem');
    const message = screen.queryByText('Nie znaleziono artysty');

    expect(artistItems.length).toEqual(0);
    expect(message).toBeInTheDocument();
  });

  it('should be proper clered filter when clear icon is cliked', () => {
    userEvent.type(
      screen.getByRole('textbox', { name: 'searchArtists' }),
      'Artist 2'
    );

    const clearIcon = document.querySelector('.icon__clear-search');
    expect(clearIcon).toBeInTheDocument();

    userEvent.click(clearIcon!);
    // wait();
    expect(screen.getByRole('textbox', { name: 'searchArtists' })).toHaveValue(
      ''
    );
    const artistItems = screen.queryAllByRole('listitem');
    expect(artistItems.length).toEqual(2);
  });

  it('should be setChosenArtistId function ', () => {
    const items = screen.getAllByRole('listitem');

    userEvent.click(items[1]);
    expect(testContextValues.setChosenArtistId).toBeCalledTimes(1);
  });
});
