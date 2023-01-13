import React, { useContext, useEffect, useState } from 'react';
import ArtistItem from './ArtistItem/ArtistItem';
import { ArtistListInterface } from '../../types/artistListTypes';
import { AppContext } from '../../context/AppContext';
import SearchArtists from './SearchArtists/SearchArtists';

interface CT {
  artist_list: ArtistListInterface[] | undefined;
}

function getHighlightedText(text: string, higlight: string) {
  // Split text on higlight term, include term itself into parts, ignore case
  const parts = text.split(new RegExp(`(${higlight})`, 'gi'));
  let markedText;
  if (higlight && higlight.length >= 2) {
    markedText = parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <mark className="mark">{part}</mark>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  } else {
    markedText = text;
  }

  return markedText;
}

const Sidebar: React.FC<CT> = ({ artist_list }) => {
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [filteredArtistLists, setFilteredArtistLists] = useState<
    ArtistListInterface[] | undefined
  >(artist_list);

  const { setChosenArtistId, chosenArtistId, loadingType } =
    useContext(AppContext);

  const inputValueHandler = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {
    if (filter && filter?.length >= 2) {
      setFilteredArtistLists(
        artist_list &&
          artist_list.filter((el) =>
            el.name.toLowerCase().includes(filter!.toLowerCase())
          )
      );
    } else {
      setFilteredArtistLists(artist_list);
    }
  }, [filter, artist_list]);

  return (
    <>
      {!loadingType?.application && (
        <nav className="artist-list__container">
          <SearchArtists onInput={inputValueHandler} placeholder="Szukaj" />
          {artist_list && filteredArtistLists!.length === 0 && (
            <h3 className="artist-not-found">
              <i className="icon-exclamation-triangle"></i>Nie znaleziono
              artysty
            </h3>
          )}
          <ul className="artist-list__items">
            {filteredArtistLists?.map((artist: ArtistListInterface) => (
              <ArtistItem
                isDisabled={Boolean(!artist_list)}
                isLoading={Boolean(loadingType?.artist)}
                current={chosenArtistId}
                key={artist.id}
                //@ts-ignore
                name={
                  !filter
                    ? artist.name
                    : getHighlightedText(artist.name, filter)
                }
                id={artist.id}
                onClick={() => setChosenArtistId(artist.id)}
              />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Sidebar;
