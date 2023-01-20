import React, { useRef } from 'react';

interface SearchArtistsTypes {
  placeholder?: string | undefined;
  onInput: Function;
}
const SearchArtists: React.FC<SearchArtistsTypes> = ({
  placeholder,
  onInput,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const clearInputHandler = (e: any) => {
    ref.current!.value = '';
    onInput(e);
  };

  return (
    <div className="artist-list__search">
      <input
        type="text"
        ref={ref}
        onInput={() => onInput(ref.current?.value)}
        name="searchArtists"
        aria-label="searchArtists"
        placeholder={placeholder}
        className="artist-list__search-input"
        autoComplete="off"
      />
      {ref.current && ref.current!.value.length! > 0 && (
        <i
          role="button"
          className="icon-cancel-circle icon__clear-search"
          onClick={clearInputHandler}
        ></i>
      )}
    </div>
  );
};

export default SearchArtists;
