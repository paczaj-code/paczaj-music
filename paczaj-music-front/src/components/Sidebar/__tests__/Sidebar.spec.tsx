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

describe('Tests for Sidebar component', () => {
  beforeEach(() => {});

  it('should be proper HTML structure', () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <Sidebar artist_list={artist_list} />{' '}
      </AppContext.Provider>
    );
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
    render(
      <AppContext.Provider value={testContextValues}>
        <Sidebar artist_list={artist_list} />{' '}
      </AppContext.Provider>
    );
    const artistItems = screen.getAllByRole('listitem');
    expect(artistItems.length).toEqual(2);
  });

  it('should be proper filtered list and no message', () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <Sidebar artist_list={artist_list} />{' '}
      </AppContext.Provider>
    );
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
    render(
      <AppContext.Provider value={testContextValues}>
        <Sidebar artist_list={artist_list} />{' '}
      </AppContext.Provider>
    );
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
    render(
      <AppContext.Provider value={testContextValues}>
        <Sidebar artist_list={artist_list} />{' '}
      </AppContext.Provider>
    );
    userEvent.type(
      screen.getByRole('textbox', { name: 'searchArtists' }),
      'Artist 2'
    );

    const clearIcon = screen.getByRole('button');
    // expect(clearIcon).toBeInTheDocument();

    userEvent.click(clearIcon!);
    // wait();
    expect(screen.getByRole('textbox', { name: 'searchArtists' })).toHaveValue(
      ''
    );
    const artistItems = screen.queryAllByRole('listitem');
    expect(artistItems.length).toEqual(2);
  });

  it('should be setChosenArtistId function', () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <Sidebar artist_list={artist_list} />{' '}
      </AppContext.Provider>
    );
    const items = screen.getAllByRole('listitem');

    userEvent.click(items[1]);
    expect(testContextValues.setChosenArtistId).toBeCalledTimes(1);
  });
});
